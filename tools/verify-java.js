#!/usr/bin/env node
/*
 * data/java-problems.js 검사기
 *   node tools/verify-java.js          모든 문제 검사
 *   node tools/verify-java.js 5 120    5장 전체와 120번 문제만 검사 (1~13은 장, 그보다 크면 문제 번호)
 *
 * - 출력 결과 문제(t: 'out'): code를 Java로 컴파일·실행해서 ans와 같은지 확인
 * - 코드 작성 문제(t: 'self' + kind): 모범 답안 + 사용 예를 실행해서 demo와 같은지 확인
 * - 번호 중복, 필수 항목 누락, 객관식 정답 번호 범위도 확인
 * JDK 17 이상(javac, java)이 필요해요. 문제에 record·sealed·switch 패턴이 있어서 Java 21을 권장해요.
 */
const fs = require('fs'), path = require('path'), os = require('os'), vm = require('vm'), cp = require('child_process');

const root = path.join(__dirname, '..');
const ctx = { window: {} }; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'data/java-problems.js'), 'utf8'), ctx, { filename: 'java-problems.js' });
const P = ctx.WJX.problems;

const IMPORTS = ['java.util', 'java.util.function', 'java.util.concurrent', 'java.util.concurrent.atomic', 'java.util.concurrent.locks',
  'java.time', 'java.time.format', 'java.time.temporal', 'java.text', 'java.math', 'java.util.regex', 'java.lang.annotation', 'java.lang.reflect']
  .map(p => `import ${p}.*;`).join('\n') + '\n';
const ind = (t, n) => t.split('\n').map(l => (l ? ' '.repeat(n) + l : l)).join('\n');
const MAIN = '    public static void main(String[] args) throws Exception {\n';
function program(p) {
  if (p.t === 'out') return p.code.includes('class Main') ? p.code : 'public class Main {\n' + MAIN + ind(p.code, 8) + '\n    }\n}\n';
  if (p.kind === 'b') return IMPORTS + 'public class Main {\n' + MAIN + ind(p.answer, 8) + '\n    }\n}\n';
  if (p.kind === 'm') return IMPORTS + 'public class Main {\n' + ind(p.answer, 4) + '\n' + MAIN + ind(p.code || '', 8) + '\n    }\n}\n';
  return IMPORTS + p.answer + '\npublic class Main {\n' + MAIN + ind(p.code || '', 8) + '\n    }\n}\n';
}
const norm = s => String(s).replace(/\r/g, '').split('\n').map(l => l.replace(/\s+$/, '')).join('\n').replace(/\n+$/, '');

// 어떤 문제를 검사할지
const args = process.argv.slice(2).map(Number).filter(Boolean);
const pick = p => !args.length || args.some(a => (a <= 13 ? p.ch === a : p.n === a));

let bad = 0;
const fail = (p, msg) => { bad++; console.log(`✗ ${p.n}번 (${p.ch}장): ${msg}`); };

// 구조 검사
const seen = new Set();
for (const p of P) {
  if (seen.has(p.n)) fail(p, '번호가 중복돼요'); seen.add(p.n);
  if (!(p.ch >= 1 && p.ch <= 13) || ![1, 2, 3].includes(p.lv)) fail(p, 'ch(1~13) 또는 lv(1~3) 값이 이상해요');
  if (!p.q || !p.exp && p.t !== 'out') fail(p, 'q 또는 exp가 비었어요');
  if (p.t === 'mc' && !(Array.isArray(p.choices) && p.ans >= 0 && p.ans < p.choices.length)) fail(p, '객관식 ans가 보기 범위를 벗어나요');
  if (p.t === 'out' && (!p.code || typeof p.ans !== 'string')) fail(p, 'code 또는 ans가 없어요');
  if (p.t === 'self' && !p.answer) fail(p, '모범 답안(answer)이 없어요');
  if (p.kind && !['b', 'm', 'c'].includes(p.kind)) fail(p, "kind는 'b', 'm', 'c' 중 하나여야 해요");
}

// 실행 검사
try { cp.execFileSync('javac', ['-version'], { stdio: 'ignore' }); }
catch (e) { console.log('javac를 찾을 수 없어요. JDK를 설치한 뒤 다시 실행하세요.'); process.exit(2); }
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'javawb-'));
let ran = 0;
for (const p of P) {
  if (!pick(p)) continue;
  const expect = p.t === 'out' ? p.ans : (p.t === 'self' && p.kind ? p.demo : null);
  if (expect == null) continue;
  const dir = path.join(tmp, 'p' + p.n); fs.mkdirSync(dir);
  fs.writeFileSync(path.join(dir, 'Main.java'), program(p));
  const c = cp.spawnSync('javac', ['-encoding', 'UTF-8', 'Main.java'], { cwd: dir, encoding: 'utf8' });
  ran++;
  if (c.status) { fail(p, '컴파일 에러\n' + c.stderr.trim().split('\n').slice(0, 6).join('\n')); continue; }
  const r = cp.spawnSync('java', ['-Dstdout.encoding=UTF-8', 'Main'], { cwd: dir, encoding: 'utf8', timeout: 20000 });
  if (r.status) { fail(p, '실행 중 예외\n' + (r.stderr || '').trim().split('\n').slice(0, 4).join('\n')); continue; }
  if (norm(r.stdout) !== norm(expect)) {
    const a = norm(r.stdout).split('\n'), e = norm(expect).split('\n'); let i = 0;
    while (i < Math.max(a.length, e.length) && a[i] === e[i]) i++;
    fail(p, `${p.t === 'out' ? 'ans' : 'demo'}와 실제 출력이 달라요 (${i + 1}번째 줄)\n  실제: ${JSON.stringify(a[i])}\n  데이터: ${JSON.stringify(e[i])}`);
  }
}
fs.rmSync(tmp, { recursive: true, force: true });

const cnt = {}; P.forEach(p => { const k = p.ch + '장'; cnt[k] = cnt[k] || [0, 0, 0]; cnt[k][p.lv - 1]++; });
console.log(`\n문제 ${P.length}개 · 실행해서 확인한 문제 ${ran}개 · 문제 ${bad}개`);
console.log('장별 [기초, 응용, 심화]: ' + Object.entries(cnt).map(([k, v]) => `${k} ${v.join('/')}`).join(', '));
process.exit(bad ? 1 : 0);
