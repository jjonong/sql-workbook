/* OraLite: runs Oracle-flavoured SQL on sql.js (SQLite) for the practice tables. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.OraLite = factory();
})(this, function () {
  'use strict';

  // ---------- dates: serial = days since 1970-01-01 (naive, no time zone) + OFFSET ----------
  var OFFSET = 1000000;
  var DAY_MS = 86400000;
  function serialFromParts(y, mo, d, h, mi, s) {
    return Date.UTC(y, mo - 1, d, h || 0, mi || 0, s || 0) / DAY_MS + OFFSET;
  }
  function partsFromSerial(v) {
    var ms = Math.round((v - OFFSET) * DAY_MS / 1000) * 1000;
    var dt = new Date(ms);
    return { y: dt.getUTCFullYear(), mo: dt.getUTCMonth() + 1, d: dt.getUTCDate(), h: dt.getUTCHours(),
      mi: dt.getUTCMinutes(), s: dt.getUTCSeconds(), dow: dt.getUTCDay() };
  }
  function isDateVal(v) { return typeof v === 'number' && v > 975000 && v < 1045000; }
  function lastDayOf(y, mo) { return new Date(Date.UTC(y, mo, 0)).getUTCDate(); }
  function nowSerial() {
    var n = new Date();
    return serialFromParts(n.getFullYear(), n.getMonth() + 1, n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds());
  }
  function pad(n, w) { n = String(n); while (n.length < w) n = '0' + n; return n; }
  var DAYS_KO = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

  function fmtDate(v, fmt) {
    var p = partsFromSerial(v);
    if (fmt == null) fmt = 'RR/MM/DD';
    var out = '', i = 0, F = fmt;
    while (i < F.length) {
      var rest = F.slice(i), up = rest.toUpperCase(), m;
      if (rest[0] === '"') { var j = F.indexOf('"', i + 1); if (j < 0) j = F.length; out += F.slice(i + 1, j); i = j + 1; continue; }
      if ((m = /^(YYYY|RRRR|SYYYY)/.exec(up))) { out += pad(p.y, 4); i += m[0].length; continue; }
      if ((m = /^(YY|RR)/.exec(up))) { out += pad(p.y % 100, 2); i += 2; continue; }
      if (/^MONTH/.test(up)) { out += p.mo + '월'; i += 5; continue; }
      if (/^MON/.test(up)) { out += p.mo + '월'; i += 3; continue; }
      if (/^MM/.test(up)) { out += pad(p.mo, 2); i += 2; continue; }
      if (/^MI/.test(up)) { out += pad(p.mi, 2); i += 2; continue; }
      if (/^DDD/.test(up)) { var doy = Math.floor(v - serialFromParts(p.y, 1, 1)) + 1; out += pad(doy, 3); i += 3; continue; }
      if (/^DAY/.test(up)) { out += DAYS_KO[p.dow]; i += 3; continue; }
      if (/^DY/.test(up)) { out += DAYS_KO[p.dow][0]; i += 2; continue; }
      if (/^DD/.test(up)) { out += pad(p.d, 2); i += 2; continue; }
      if (/^D/.test(up)) { out += String(p.dow + 1); i += 1; continue; }
      if (/^HH24/.test(up)) { out += pad(p.h, 2); i += 4; continue; }
      if (/^HH12/.test(up)) { out += pad(p.h % 12 || 12, 2); i += 4; continue; }
      if (/^HH/.test(up)) { out += pad(p.h % 12 || 12, 2); i += 2; continue; }
      if (/^SS/.test(up)) { out += pad(p.s, 2); i += 2; continue; }
      if (/^(A\.M\.|P\.M\.)/.test(up)) { out += p.h < 12 ? '오전' : '오후'; i += 4; continue; }
      if (/^(AM|PM)/.test(up)) { out += p.h < 12 ? '오전' : '오후'; i += 2; continue; }
      if (/^Q/.test(up)) { out += String(Math.floor((p.mo - 1) / 3) + 1); i += 1; continue; }
      if (/^W/.test(up)) { out += String(Math.floor((p.d - 1) / 7) + 1); i += 1; continue; }
      if (/^FM/.test(up)) { i += 2; continue; }
      out += F[i]; i += 1;
    }
    return out;
  }

  function fmtNumber(v, fmt) {
    var f = fmt.toUpperCase().replace(/^FM/, '');
    var cur = '';
    if (f.indexOf('$') >= 0) { cur = '$'; f = f.replace('$', ''); }
    if (f.indexOf('L') >= 0) { cur = '₩'; f = f.replace('L', ''); }
    var dot = f.indexOf('.');
    var intPart = dot >= 0 ? f.slice(0, dot) : f;
    var decPart = dot >= 0 ? f.slice(dot + 1) : '';
    var decs = decPart.replace(/[^90]/g, '').length;
    var neg = v < 0; var a = Math.abs(v);
    var s = a.toFixed(decs);
    var ip = s.split('.')[0], dp = s.split('.')[1] || '';
    var slots = intPart.replace(/[^90]/g, '').length;
    if (ip.length > slots && !(ip === '0' && slots === 0)) return '#'.repeat(f.length + 1 + cur.length);
    var firstZero = intPart.search(/0/);
    var digits = ip.split('');
    var res = '';
    var di = digits.length - 1;
    for (var k = intPart.length - 1; k >= 0; k--) {
      var c = intPart[k];
      if (c === '9' || c === '0') {
        if (di >= 0) res = digits[di--] + res;
        else if (c === '0' || (firstZero >= 0 && k >= firstZero)) res = '0' + res;
        else res = ' ' + res;
      } else if (c === ',' || c === 'G') {
        res = (di >= 0 ? ',' : ' ') + res;
      }
    }
    res = res.replace(/^ +/, function (sp) { return sp; });
    var body = res.trim() === '' ? (decs ? '' : '0') : res.trim();
    if (body === '' && decs) body = '';
    var out = cur + body + (decs ? '.' + dp : '');
    return (neg ? '-' : ' ') + out;
  }

  function parseDate(s, fmt) {
    if (s == null) return null;
    if (typeof s === 'number') return s;
    s = String(s).trim();
    if (!fmt) {
      var m = /^(\d{4})[-\/.](\d{1,2})[-\/.](\d{1,2})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/.exec(s);
      if (m) return serialFromParts(+m[1], +m[2], +m[3], +(m[4] || 0), +(m[5] || 0), +(m[6] || 0));
      m = /^(\d{2})[-\/.](\d{1,2})[-\/.](\d{1,2})$/.exec(s);
      if (m) { var yy = +m[1]; return serialFromParts(yy < 50 ? 2000 + yy : 1900 + yy, +m[2], +m[3]); }
      throw new Error('ORA-01861: 날짜 형식이 맞지 않아요. TO_DATE(\'' + s + '\', \'YYYY-MM-DD\')처럼 형식을 지정해 보세요.');
    }
    var F = fmt.toUpperCase(), i = 0, j = 0, y = 2000, mo = 1, d = 1, h = 0, mi = 0, sec = 0, pm = null;
    function num(n) { var t = /^\d+/.exec(s.slice(j)); if (!t) throw new Error('ORA-01861: \'' + s + '\'이(가) 형식 \'' + fmt + '\'과 맞지 않아요.'); var v = t[0].slice(0, n); j += v.length; return +v; }
    while (i < F.length) {
      var r = F.slice(i), mm;
      if ((mm = /^(YYYY|RRRR)/.exec(r))) { y = num(4); i += 4; continue; }
      if ((mm = /^(YY|RR)/.exec(r))) { var v2 = num(2); y = v2 < 50 ? 2000 + v2 : 1900 + v2; i += 2; continue; }
      if (/^MM/.test(r)) { mo = num(2); i += 2; continue; }
      if (/^MI/.test(r)) { mi = num(2); i += 2; continue; }
      if (/^DD/.test(r)) { d = num(2); i += 2; continue; }
      if (/^HH24/.test(r)) { h = num(2); i += 4; continue; }
      if (/^HH12|^HH/.test(r)) { h = num(2); i += /^HH12/.test(r) ? 4 : 2; continue; }
      if (/^SS/.test(r)) { sec = num(2); i += 2; continue; }
      if (r[0] === '"') { var e = F.indexOf('"', i + 1); var lit = fmt.slice(i + 1, e); j += lit.length; i = e + 1; continue; }
      // separators: skip one char in both
      i += 1; if (j < s.length && !/\d/.test(s[j])) j += 1;
    }
    if (mo < 1 || mo > 12) throw new Error('ORA-01843: 월은 1~12 사이여야 해요.');
    if (d < 1 || d > lastDayOf(y, mo)) throw new Error('ORA-01847: 그 달에 없는 날짜예요.');
    return serialFromParts(y, mo, d, h, mi, sec);
  }

  function hangulWidth(s) { var w = 0; for (var i = 0; i < s.length; i++) w += /[ᄀ-ᇿ㄰-㆏가-힣一-鿿]/.test(s[i]) ? 2 : 1; return w; }
  function padStr(s, n, p, left) {
    if (s == null || n == null) return null;
    s = String(s); p = p == null ? ' ' : String(p); if (p === '') return null;
    var w = hangulWidth(s);
    if (w >= n) { var out = '', ww = 0; for (var i = 0; i < s.length; i++) { var cw = hangulWidth(s[i]); if (ww + cw > n) break; out += s[i]; ww += cw; } return out; }
    var fill = '', k = 0; while (hangulWidth(fill) < n - w) { fill += p[k % p.length]; k++; }
    while (hangulWidth(fill) > n - w) fill = fill.slice(0, -1);
    return left ? fill + s : s + fill;
  }

  function variadic(fn) { Object.defineProperty(fn, 'length', { value: -1 }); return fn; }
  function nz(v) { return v === '' ? null : v; }

  function registerFunctions(db) {
    var F = {};
    F.SYSDATE = function () { return nowSerial(); };
    F.NVL = function (a, b) { return nz(a) == null ? b : a; };
    F.NVL2 = function (a, b, c) { return nz(a) == null ? c : b; };
    F.DECODE = variadic(function () {
      var a = arguments, x = a[0];
      for (var i = 1; i + 1 < a.length; i += 2) {
        var c = a[i];
        if ((x == null && c == null) || (x != null && c != null && (x == c))) return a[i + 1];
      }
      return a.length % 2 === 0 ? a[a.length - 1] : null;
    });
    F.TO_CHAR = variadic(function (v, fmt) {
      if (v == null) return null;
      if (typeof v === 'string') return v;
      if (fmt == null) return isDateVal(v) ? fmtDate(v, 'RR/MM/DD') : String(+v.toPrecision(15));
      var looksDate = /YY|RR|MM|DD|DY|DAY|MON|HH|MI|SS|Q|AM|PM|"/i.test(fmt.replace(/^FM/i, ''));
      if (looksDate && isDateVal(v)) return fmtDate(v, fmt);
      if (looksDate && !/[90]/.test(fmt)) throw new Error('ORA-01481: 숫자에 날짜 형식(' + fmt + ')을 쓸 수 없어요.');
      return fmtNumber(v, fmt);
    });
    F.TO_DATE = variadic(function (s, fmt) { return parseDate(nz(s), fmt); });
    F.TO_NUMBER = variadic(function (s) {
      if (s == null) return null; if (typeof s === 'number') return s;
      var t = String(s).replace(/[,\s$₩]/g, '');
      if (t === '' || isNaN(+t)) throw new Error('ORA-01722: \'' + s + '\'은(는) 숫자로 바꿀 수 없어요.');
      return +t;
    });
    F.ADD_MONTHS = function (d, n) {
      if (d == null || n == null) return null;
      var p = partsFromSerial(d), frac = d - Math.floor(d);
      var total = p.y * 12 + (p.mo - 1) + Math.trunc(n), y = Math.floor(total / 12), mo = total % 12 + 1;
      var isLast = p.d === lastDayOf(p.y, p.mo);
      var day = isLast ? lastDayOf(y, mo) : Math.min(p.d, lastDayOf(y, mo));
      return serialFromParts(y, mo, day) + frac;
    };
    F.MONTHS_BETWEEN = function (a, b) {
      if (a == null || b == null) return null;
      var p = partsFromSerial(a), q = partsFromSerial(b);
      var months = (p.y - q.y) * 12 + (p.mo - q.mo);
      var aLast = p.d === lastDayOf(p.y, p.mo), bLast = q.d === lastDayOf(q.y, q.mo);
      if (p.d === q.d || (aLast && bLast)) return months;
      var fa = (a - Math.floor(a)), fb = (b - Math.floor(b));
      return months + ((p.d + fa) - (q.d + fb)) / 31;
    };
    F.LAST_DAY = function (d) { if (d == null) return null; var p = partsFromSerial(d); return serialFromParts(p.y, p.mo, lastDayOf(p.y, p.mo)) + (d - Math.floor(d)); };
    F.NEXT_DAY = function (d, day) {
      if (d == null || day == null) return null;
      var t = String(day).trim(), idx = -1;
      for (var i = 0; i < 7; i++) if (DAYS_KO[i] === t || DAYS_KO[i][0] === t) idx = i;
      var en = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      if (idx < 0) idx = en.indexOf(t.toUpperCase().slice(0, 3));
      if (idx < 0) throw new Error('ORA-01846: 요일 이름이 올바르지 않아요.');
      var p = partsFromSerial(d), diff = (idx - p.dow + 7) % 7 || 7;
      return d + diff;
    };
    function dateTrunc(d, f) {
      var p = partsFromSerial(d); f = String(f).toUpperCase();
      if (/^(YYYY|YEAR|YY|RR|Y|SYYYY|RRRR)$/.test(f)) return serialFromParts(p.y, 1, 1);
      if (/^(MM|MONTH|MON|RM)$/.test(f)) return serialFromParts(p.y, p.mo, 1);
      if (/^Q$/.test(f)) return serialFromParts(p.y, Math.floor((p.mo - 1) / 3) * 3 + 1, 1);
      if (/^(DD|DDD|J)$/.test(f)) return Math.floor(d);
      if (/^(HH|HH24|HH12)$/.test(f)) return serialFromParts(p.y, p.mo, p.d, p.h);
      if (/^MI$/.test(f)) return serialFromParts(p.y, p.mo, p.d, p.h, p.mi);
      if (/^(DAY|DY|D)$/.test(f)) return Math.floor(d) - p.dow;
      throw new Error('ORA-01898: 날짜 형식 \'' + f + '\'을(를) 알 수 없어요.');
    }
    function dateRound(d, f) {
      var p = partsFromSerial(d); f = String(f).toUpperCase();
      if (/^(YYYY|YEAR|YY|RR|Y|SYYYY|RRRR)$/.test(f)) return p.mo >= 7 ? serialFromParts(p.y + 1, 1, 1) : serialFromParts(p.y, 1, 1);
      if (/^(MM|MONTH|MON|RM)$/.test(f)) return p.d >= 16 ? F.ADD_MONTHS(serialFromParts(p.y, p.mo, 1), 1) : serialFromParts(p.y, p.mo, 1);
      if (/^(DD|DDD|J)$/.test(f)) return Math.floor(d + 0.5);
      return dateTrunc(d, f);
    }
    F.TRUNC = variadic(function (x, f) {
      if (x == null) return null;
      if (typeof f === 'string' || (f == null && false)) return dateTrunc(x, f);
      var k = f == null ? 0 : Math.trunc(f), m = Math.pow(10, k);
      return Math.trunc(Math.round(x * m * 1e6) / 1e6) / m;
    });
    F.ROUND = variadic(function (x, f) {
      if (x == null) return null;
      if (typeof f === 'string') return dateRound(x, f);
      var k = f == null ? 0 : Math.trunc(f), m = Math.pow(10, k);
      var y = Math.abs(x) * m; y = Math.floor(y + 0.5 + 1e-9);
      return (x < 0 ? -y : y) / m;
    });
    F.MOD = function (a, b) { if (a == null || b == null) return null; if (b == 0) return a; return a - b * Math.trunc(a / b); };
    F.POWER = function (a, b) { return a == null || b == null ? null : Math.pow(a, b); };
    F.SQRT = function (a) { if (a == null) return null; if (a < 0) throw new Error('ORA-01428: 음수의 제곱근은 구할 수 없어요.'); return Math.sqrt(a); };
    F.SIGN = function (a) { return a == null ? null : Math.sign(a); };
    F.CEIL = function (a) { return a == null ? null : Math.ceil(a); };
    F.FLOOR = function (a) { return a == null ? null : Math.floor(a); };
    F.CHR = function (n) { return n == null ? null : String.fromCharCode(n); };
    F.ASCII = function (s) { return s == null ? null : String(s).charCodeAt(0); };
    F.INITCAP = function (s) { return s == null ? null : String(s).toLowerCase().replace(/(^|[^a-z0-9])([a-z])/g, function (m, a, b) { return a + b.toUpperCase(); }); };
    F.LPAD = variadic(function (s, n, p) { return padStr(nz(s), n, p, true); });
    F.RPAD = variadic(function (s, n, p) { return padStr(nz(s), n, p, false); });
    F.CONCAT = function (a, b) { var r = (a == null ? '' : String(a)) + (b == null ? '' : String(b)); return r === '' ? null : r; };
    F.SUBSTR = variadic(function (s, st, len) {
      s = nz(s); if (s == null || st == null) return null; s = String(s);
      st = Math.trunc(st); if (st === 0) st = 1;
      var start = st > 0 ? st - 1 : s.length + st;
      if (start < 0 || start >= s.length) return null;
      if (len == null) return nz(s.slice(start));
      if (len < 1) return null;
      return nz(s.slice(start, start + Math.trunc(len)));
    });
    F.LENGTH = function (s) { s = nz(s); return s == null ? null : String(s).length; };
    F.REPLACE = variadic(function (s, a, b) { s = nz(s); if (s == null) return null; if (a == null || a === '') return s; return nz(String(s).split(String(a)).join(b == null ? '' : String(b))); });
    F.TRANSLATE = function (s, a, b) {
      if (s == null || a == null || b == null) return null;
      s = String(s); a = String(a); b = String(b); var out = '';
      for (var i = 0; i < s.length; i++) { var k = a.indexOf(s[i]); if (k < 0) out += s[i]; else if (k < b.length) out += b[k]; }
      return nz(out);
    };
    F.INSTR = variadic(function (s, t, st, occ) {
      if (s == null || t == null) return null; s = String(s); t = String(t);
      st = st == null ? 1 : st; occ = occ == null ? 1 : occ; var pos = st - 1, found = 0;
      while (true) { var k = s.indexOf(t, pos); if (k < 0) return 0; found++; if (found === occ) return k + 1; pos = k + 1; }
    });
    F.ORA_DATE_DISPLAY = function (v) { return v; };
    Object.keys(F).forEach(function (k) { db.create_function(k, F[k]); });
  }

  // ---------- SQL text helpers ----------
  // Mask strings / quoted identifiers / comments so regex rewrites only touch code.
  function mask(sql) {
    var parts = [], out = '', i = 0;
    while (i < sql.length) {
      var c = sql[i];
      if (c === "'") {
        var j = i + 1, s = '';
        while (j < sql.length) { if (sql[j] === "'" && sql[j + 1] === "'") { s += "'"; j += 2; continue; } if (sql[j] === "'") break; s += sql[j]; j++; }
        if (j >= sql.length) throw new Error('ORA-01756: 작은따옴표(\')가 닫히지 않았어요.');
        parts.push({ t: 'str', v: s }); out += '\u0001' + (parts.length - 1) + '\u0002'; i = j + 1; continue;
      }
      if (c === '"') {
        var e = sql.indexOf('"', i + 1); if (e < 0) throw new Error('큰따옴표(")가 닫히지 않았어요.');
        parts.push({ t: 'qid', v: sql.slice(i, e + 1) }); out += '\u0001' + (parts.length - 1) + '\u0002'; i = e + 1; continue;
      }
      if (c === '-' && sql[i + 1] === '-') { var nl = sql.indexOf('\n', i); if (nl < 0) nl = sql.length; out += ' '; i = nl; continue; }
      if (c === '/' && sql[i + 1] === '*') { var ce = sql.indexOf('*/', i + 2); if (ce < 0) ce = sql.length - 2; out += ' '; i = ce + 2; continue; }
      out += c; i++;
    }
    return { code: out, parts: parts };
  }
  function unmask(code, parts) {
    return code.replace(/\u0001(\d+)\u0002/g, function (m, k) {
      var p = parts[+k];
      if (p.t === 'qid') return p.v;
      if (p.t === 'raw') return p.v;
      return "'" + p.v.replace(/'/g, "''") + "'";
    });
  }
  function splitStatements(sql) {
    var m = mask(sql), stmts = [], cur = '';
    var code = m.code;
    // allow "/" on its own line as a terminator too (SQL*Plus habit)
    code = code.replace(/^\s*\/\s*$/gm, ';');
    var depth = 0;
    for (var i = 0; i < code.length; i++) {
      var c = code[i];
      if (c === '(') depth++; if (c === ')') depth--;
      if (c === ';' && depth <= 0) { if (cur.trim()) stmts.push(cur); cur = ''; continue; }
      cur += c;
    }
    if (cur.trim()) stmts.push(cur);
    return stmts.map(function (s) { return { code: s.trim(), parts: m.parts }; });
  }

  // split at depth 0 by a regex token (e.g. /,/ or /\bAND\b/i)
  function splitTop(s, sepRe) {
    var out = [], depth = 0, last = 0, re = new RegExp(sepRe.source, 'gi'), m;
    // scan char by char tracking depth; find separators at depth 0
    var positions = [];
    while ((m = re.exec(s))) positions.push([m.index, m[0].length]);
    var di = 0, d = 0, depthAt = [];
    for (var i = 0; i < s.length; i++) { depthAt[i] = d; if (s[i] === '(') d++; if (s[i] === ')') d--; }
    positions.forEach(function (p) { if (depthAt[p[0]] === 0) { out.push(s.slice(last, p[0])); last = p[0] + p[1]; } });
    out.push(s.slice(last));
    return out;
  }
  // index of keyword at depth 0 (first occurrence at/after from)
  function findTop(s, kwRe, from) {
    var re = new RegExp(kwRe.source, 'gi'), m; re.lastIndex = from || 0;
    var depth = 0, di = 0;
    var depthAt = []; var d = 0; for (var i = 0; i < s.length; i++) { depthAt[i] = d; if (s[i] === '(') d++; if (s[i] === ')') d--; }
    while ((m = re.exec(s))) { if (depthAt[m.index] === 0) return { i: m.index, len: m[0].length, m: m }; }
    return null;
  }

  // ---------- Oracle (+) outer join -> ANSI LEFT JOIN (one SELECT level) ----------
  function rewriteOuterJoin(q) {
    if (q.indexOf('(+)') < 0) return q;
    // recurse into parenthesised subqueries first
    q = q.replace(/\(\s*(SELECT\b[^()]*(?:\([^()]*(?:\([^()]*\)[^()]*)*\)[^()]*)*)\)/gi, function (m, inner) {
      return inner.indexOf('(+)') >= 0 ? '(' + rewriteOuterJoin(inner) + ')' : m;
    });
    if (q.indexOf('(+)') < 0) return q;
    var f = findTop(q, /\bFROM\b/), w = findTop(q, /\bWHERE\b/);
    if (!f || !w || w.i < f.i) throw new Error('(+) 조인을 해석하지 못했어요. FROM ... WHERE ... 형태인지 확인해 보세요.');
    var endK = findTop(q, /\b(GROUP\s+BY|ORDER\s+BY|HAVING|UNION|INTERSECT|MINUS|EXCEPT|CONNECT\s+BY)\b/, w.i);
    var end = endK ? endK.i : q.length;
    var head = q.slice(0, f.i), fromList = q.slice(f.i + 4, w.i), where = q.slice(w.i + 5, end), tail = q.slice(end);
    if (findTop(where, /\bOR\b/)) throw new Error('(+) 조인 조건과 OR를 함께 쓰면 이 실행기에서 처리하지 못해요.');
    var tables = splitTop(fromList, /,/).map(function (t) {
      t = t.trim(); var mm = /^(.*?)(?:\s+(?:AS\s+)?([A-Za-z_\u0080-￿][\w$#\u0080-￿]*))?$/i.exec(t);
      var src = mm[1], alias = mm[2] || '';
      if (!alias) { var nm = /([\w$#]+)\s*$/.exec(src); alias = nm ? nm[1] : src; }
      return { text: t, alias: alias.toUpperCase(), name: (/^[\w$#.]+$/.test(src) ? src.split('.').pop().toUpperCase() : '') };
    });
    function ownerOf(expr) {
      var mm = /([A-Za-z_\u0080-￿][\w$#\u0080-￿]*)\s*\.\s*[\w$#\u0080-￿]+\s*\(\+\)/.exec(expr);
      if (mm) return mm[1].toUpperCase();
      var bare = /([\w$#\u0080-￿]+)\s*\(\+\)/.exec(expr);
      if (bare) throw new Error('(+)를 붙인 컬럼 ' + bare[1] + '에 테이블 별명을 붙여 주세요. 예: c.' + bare[1] + '(+)');
      return null;
    }
    var conds = splitTop(where, /\bAND\b/), keep = [], ojs = {};
    // BETWEEN ... AND ... must not be split: merge back
    var merged = [];
    for (var i = 0; i < conds.length; i++) {
      var c = conds[i];
      if (/\bBETWEEN\b/i.test(c) && !/\bBETWEEN\b[\s\S]*\bAND\b/i.test(c) && i + 1 < conds.length) { merged.push(c + ' AND ' + conds[i + 1]); i++; }
      else merged.push(c);
    }
    merged.forEach(function (c) {
      if (c.indexOf('(+)') < 0) { keep.push(c); return; }
      var o = ownerOf(c);
      var t = tables.filter(function (tb) { return tb.alias === o || tb.name === o; })[0];
      if (!t) throw new Error('(+)가 붙은 ' + o + '을(를) FROM 절에서 찾지 못했어요.');
      (ojs[t.alias] = ojs[t.alias] || []).push(c.replace(/\(\+\)/g, ''));
    });
    var base = tables.filter(function (t) { return !ojs[t.alias]; });
    if (!base.length) throw new Error('양쪽 모두에 (+)를 붙일 수는 없어요. (오라클 ORA-01468)');
    var from = base.map(function (t) { return t.text; }).join(', ');
    tables.forEach(function (t) { if (ojs[t.alias]) from += ' LEFT JOIN ' + t.text + ' ON ' + ojs[t.alias].join(' AND '); });
    return head + 'FROM ' + from + (keep.length ? ' WHERE ' + keep.join(' AND ') : ' ') + ' ' + tail;
  }

  // ORDER BY: Oracle puts NULLs last for ASC, first for DESC
  function rewriteNulls(code) {
    var re = /\bORDER\s+BY\b/gi, m, out = '', last = 0;
    while ((m = re.exec(code))) {
      var start = m.index + m[0].length, depth = 0, j = start;
      for (; j < code.length; j++) {
        var c = code[j];
        if (c === '(') depth++;
        if (c === ')') { if (depth === 0) break; depth--; }
        if (depth === 0 && /^\s*\b(LIMIT|UNION|INTERSECT|MINUS|EXCEPT|FETCH|OFFSET|ROWS|RANGE)\b/i.test(code.slice(j)) && /\s/.test(c)) {
          var kw = /^\s*(LIMIT|UNION|INTERSECT|MINUS|EXCEPT|FETCH|OFFSET|ROWS|RANGE)\b/i.exec(code.slice(j)); if (kw) break;
        }
      }
      var list = code.slice(start, j);
      var items = splitTop(list, /,/).map(function (it) {
        if (/\bNULLS\s+(FIRST|LAST)\b/i.test(it) || !it.trim()) return it;
        return /\bDESC\s*$/i.test(it.trim()) ? it.replace(/\s*$/, ' NULLS FIRST ') : it.replace(/\s*$/, ' NULLS LAST ');
      });
      out += code.slice(last, start) + ' ' + items.join(',');
      last = j; re.lastIndex = j;
    }
    return out + code.slice(last);
  }

  var AGG = /\b(COUNT|SUM|AVG|MAX|MIN|STDDEV|VARIANCE)\s*\(/i;
  // light lint for errors SQLite tolerates but Oracle rejects
  function lintSelect(code, schemaCols) {
    var s = findTop(code, /\bSELECT\b/), f = findTop(code, /\bFROM\b/);
    if (!s || !f) return;
    var sel = code.slice(s.i + 6, f.i).replace(/^\s*DISTINCT\b/i, '');
    var items = splitTop(sel, /,/).map(function (x) { return x.trim(); });
    var g = findTop(code, /\bGROUP\s+BY\b/), w = findTop(code, /\bWHERE\b/);
    var hasAgg = items.some(function (x) { return AGG.test(x.replace(/\bOVER\s*\([^)]*\)/gi, '')) && !/\bOVER\s*\(/i.test(x); });
    var bare = items.filter(function (x) { return /^([A-Za-z_\u0080-￿][\w$#\u0080-￿]*\.)?[A-Za-z_\u0080-￿][\w$#\u0080-￿]*(\s+(AS\s+)?[^\s,]+)?$/i.test(x) && !/^\u0001/.test(x) && x !== '*'; })
      .map(function (x) { return x.split(/\s+/)[0]; });
    if (!g && hasAgg && bare.length) throw new Error('ORA-00937: 단일 그룹의 그룹 함수가 아니에요. ' + bare[0] + ' 같은 일반 컬럼과 그룹 함수를 같이 쓰려면 GROUP BY ' + bare[0] + '이(가) 필요해요.');
    if (g) {
      var endK = findTop(code, /\b(HAVING|ORDER\s+BY|UNION|INTERSECT|MINUS|EXCEPT)\b/, g.i + g.len);
      var gl = code.slice(g.i + g.len, endK ? endK.i : code.length).toUpperCase().replace(/\s+/g, '');
      var glist = splitTop(gl, /,/).map(function (x) { return x.replace(/^ROLLUP\(|^CUBE\(|\)$/g, ''); });
      bare.forEach(function (b) {
        var B = b.toUpperCase(), short = B.split('.').pop();
        var ok = glist.some(function (x) { return x === B || x.split('.').pop() === short || x.indexOf(short) >= 0; });
        if (!ok) throw new Error('ORA-00979: ' + b + '이(가) GROUP BY 식이 아니에요. GROUP BY에 넣거나 SELECT에서 빼야 해요.');
      });
    }
    if (w) {
      var aliases = items.map(function (x) { var mm = /\s(?:AS\s+)?([A-Za-z_\u0080-￿][\w$#\u0080-￿]*)$/i.exec(x); return mm && !/\)$/.test(x.split(/\s+/).slice(-1)[0]) ? mm[1] : null; })
        .filter(function (a) { return a && !schemaCols[a.toUpperCase()]; });
      var endW = findTop(code, /\b(GROUP\s+BY|ORDER\s+BY|HAVING|UNION|INTERSECT|MINUS|EXCEPT)\b/, w.i);
      var wh = code.slice(w.i + 5, endW ? endW.i : code.length);
      aliases.forEach(function (a) {
        if (new RegExp('(^|[^\\w.$#\\u0080-\\uffff])' + a.replace(/[$]/g, '\\$') + '(?![\\w$#\\u0080-\\uffff])', 'i').test(wh))
          throw new Error('ORA-00904: "' + a + '"은(는) SELECT의 별명이라 WHERE에서 쓸 수 없어요. WHERE는 SELECT보다 먼저 실행돼요.');
      });
      if (AGG.test(wh.replace(/\(\s*SELECT\b[\s\S]*\)/gi, ''))) throw new Error('ORA-00934: 그룹 함수는 WHERE에 쓸 수 없어요. HAVING으로 옮겨 보세요.');
    }
  }

  function translate(stmt, ctx) {
    var code = stmt.code, parts = stmt.parts.slice();
    // string literals: '' -> NULL, date-looking literals -> date serial (Oracle converts implicitly)
    code = code.replace(/\u0001(\d+)\u0002/g, function (m, k) {
      var p = parts[+k];
      if (p.t !== 'str') return m;
      if (p.v === '') return ' NULL ';
      return m;
    });
    var up = code.toUpperCase();
    if (/\bROWNUM\b/.test(up)) throw new Error('ROWNUM은 이 실행기에서 지원하지 않아요. 오라클에서 직접 실행해 보세요.');
    if (/\bROWID\b/.test(up)) throw new Error('ROWID는 이 실행기에서 지원하지 않아요. 오라클에서 직접 실행해 보세요.');
    if (/\bPIVOT\b/.test(up)) throw new Error('PIVOT은 이 실행기에서 지원하지 않아요. DECODE + GROUP BY 버전은 실행할 수 있어요.');
    if (/\b(ROLLUP|CUBE)\s*\(/.test(up)) throw new Error('ROLLUP과 CUBE는 이 실행기에서 지원하지 않아요. 오라클에서 직접 실행해 보세요.');
    if (/(=|<>|!=|\^=|<=|>=|<|>)\s*(ANY|ALL|SOME)\s*\(/.test(up)) throw new Error('ANY / ALL은 이 실행기에서 지원하지 않아요. MAX, MIN을 쓴 서브쿼리로 바꿔서 실행해 보세요.');
    if (/\bCONNECT\s+BY\b/.test(up)) throw new Error('CONNECT BY는 지원하지 않아요.');
    code = code.replace(/\^=/g, '<>');
    code = code.replace(/\bSYSDATE\b(?!\s*\()/gi, 'SYSDATE()');
    code = code.replace(/\bMINUS\b/gi, 'EXCEPT');
    code = code.replace(/\bNVARCHAR2\b|\bVARCHAR2\b/gi, 'VARCHAR');
    code = code.replace(/\//g, '*1.0/');
    // Oracle allows nested group functions, e.g. MAX(COUNT(*)) ... GROUP BY: run the inner one in an inline view
    var NAG = '(MAX|MIN|AVG|SUM|COUNT)\\s*\\(\\s*(MAX|MIN|AVG|SUM|COUNT)\\s*\\(\\s*((?:[^()]|\\([^()]*\\))*?)\\s*\\)\\s*\\)';
    code = code.replace(new RegExp('SELECT\\s+(' + NAG + '(?:\\s*,\\s*' + NAG + ')*)\\s+FROM\\s+((?:[^()]|\\([^()]*\\))*?)(?=\\)|$)', 'gi'),
      function (m, list) { var rest = arguments[arguments.length - 3], outs = [], ins = [], i = 0;
        list.replace(new RegExp(NAG, 'gi'), function (x, o, n, a) { outs.push(o + '(nested_' + i + ')'); ins.push(n + '(' + a + ') AS nested_' + i); i++; return x; });
        return 'SELECT ' + outs.join(', ') + ' FROM (SELECT ' + ins.join(', ') + ' FROM ' + rest + ')'; });
    code = rewriteOuterJoin(code);
    code = rewriteNulls(code);
    // implicit date conversion for comparisons with date-looking literals next to a date column or TO_DATE
    code = code.replace(/\u0001(\d+)\u0002/g, function (m, k) {
      var p = parts[+k];
      if (p.t === 'str' && /^(\d{4}[-\/.]\d{1,2}[-\/.]\d{1,2}(\s+\d{1,2}:\d{2}(:\d{2})?)?|\d{2}\/\d{2}\/\d{2})$/.test(p.v.trim()) && ctx && ctx.dateCols) {
        // only when used directly against a DATE column: "<col> op 'lit'" or "'lit' op <col>" or BETWEEN
        return m; // handled below
      }
      return m;
    });
    code = code.replace(/([\w.$#\u0080-￿]+)\s*(=|<>|!=|<=|>=|<|>)\s*\u0001(\d+)\u0002/g, function (m, col, op, k) {
      var p = parts[+k]; var c = col.split('.').pop().toUpperCase();
      if (p.t === 'str' && ctx.dateCols[c] && /^\s*\d/.test(p.v)) { return col + ' ' + op + ' ' + String(parseDate(p.v)); }
      return m;
    });
    code = code.replace(/([\w.$#\u0080-￿]+)\s+(NOT\s+)?BETWEEN\s+\u0001(\d+)\u0002\s+AND\s+\u0001(\d+)\u0002/gi, function (m, col, not, a, b) {
      var c = col.split('.').pop().toUpperCase();
      if (ctx.dateCols[c]) return col + ' ' + (not || '') + 'BETWEEN ' + parseDate(parts[+a].v) + ' AND ' + parseDate(parts[+b].v);
      return m;
    });
    return { code: code, sql: unmask(code, parts) };
  }

  // Column headings the way Oracle prints them: alias, else the expression in upper case.
  function oracleHeaders(stmt, sqliteCols) {
    try {
      var code = stmt.code.replace(/^\(+/, '');
      var s = findTop(code, /\bSELECT\b/), f = findTop(code, /\bFROM\b/);
      if (!s || !f) return sqliteCols;
      var sel = code.slice(s.i + 6, f.i).replace(/^\s*(DISTINCT|ALL)\b/i, '');
      var items = splitTop(sel, /,/).map(function (x) { return x.trim(); });
      if (items.length !== sqliteCols.length || items.some(function (x) { return /(^|\.)\*$/.test(x); })) return sqliteCols.map(function (c) { return c.toUpperCase(); });
      return items.map(function (it) {
        var m = /^([\s\S]*?)\s+(?:AS\s+)?(\u0001\d+\u0002|[A-Za-z_\u0080-￿][\w$#\u0080-￿]*)$/i.exec(it);
        if (m && !/^(AND|OR|NOT|END|ASC|DESC|NULL)$/i.test(m[2]) && !/[(,|+\-*\/]$/.test(m[1].trim()) && !/\b(CASE|WHEN|THEN|ELSE)\b[^)]*$/i.test(m[1]) || (m && /^END$/i.test(m[1].split(/\s+/).pop()))) {
          var a = m[2];
          var q = /^\u0001(\d+)\u0002$/.exec(a);
          if (q) return stmt.parts[+q[1]].v.replace(/^"|"$/g, '');
          return a.toUpperCase();
        }
        var bare = /^(?:[A-Za-z_\u0080-￿][\w$#\u0080-￿]*\.)?([A-Za-z_\u0080-￿][\w$#\u0080-￿]*)$/.exec(it);
        if (bare) return bare[1].toUpperCase();
        // expression: upper-case outside string literals, then restore literals
        return it.replace(/\s+/g, '').toUpperCase().replace(/\u0001(\d+)\u0002/g, function (mm, k) { var p = stmt.parts[+k]; return p.t === 'qid' ? p.v : "'" + p.v + "'"; });
      });
    } catch (e) { return sqliteCols; }
  }

  // ---------- result helpers ----------
  function displayValue(v) {
    if (v == null) return null;
    if (isDateVal(v)) {
      var p = partsFromSerial(v);
      var d = pad(p.y, 4) + '-' + pad(p.mo, 2) + '-' + pad(p.d, 2);
      if (p.h || p.mi || p.s) d += ' ' + pad(p.h, 2) + ':' + pad(p.mi, 2) + ':' + pad(p.s, 2);
      return d;
    }
    if (typeof v === 'number') {
      if (Number.isInteger(v)) return String(v);
      return String(+v.toFixed(10));
    }
    return String(v);
  }
  function normValue(v) {
    if (v == null) return '∅';
    if (typeof v === 'number') return 'n:' + (Math.round(v * 1e6) / 1e6);
    var s = String(v).replace(/\s+$/, '');
    if (s !== '' && !isNaN(+s) && /^\s*-?[\d.]+\s*$/.test(s)) return 'n:' + (Math.round(+s * 1e6) / 1e6);
    return 's:' + s.trim();
  }

  // ---------- engine ----------
  function Engine(SQL, data) {
    this.SQL = SQL; this.data = data;
    this.dateCols = {}; this.schemaCols = {};
    var self = this;
    Object.keys(data).forEach(function (t) { data[t].cols.forEach(function (c) { self.schemaCols[c.n] = 1; if (c.t === 'DATE') self.dateCols[c.n] = 1; }); });
    this.db = this.fresh();
    this.inTx = false;
  }
  Engine.prototype.fresh = function () {
    var db = new this.SQL.Database(), data = this.data;
    registerFunctions(db);
    db.run('PRAGMA case_sensitive_like = ON');
    db.run('PRAGMA foreign_keys = ON');
    Object.keys(data).forEach(function (t) {
      var tb = data[t];
      var cols = tb.cols.map(function (c) { return c.n + ' ' + c.t.replace(/VARCHAR2|NVARCHAR2/, 'VARCHAR') + (c.nn ? ' NOT NULL' : ''); });
      var pk = { S_EMP: 'ID', S_DEPT: 'ID', S_CUSTOMER: 'ID', S_REGION: 'ID', S_ORD: 'ID', S_PRODUCT: 'ID', S_ITEM: 'ORD_ID, ITEM_ID' }[t];
      if (pk) cols.push('CONSTRAINT PK_' + t + ' PRIMARY KEY (' + pk + ')');
      db.run('CREATE TABLE ' + t + ' (' + cols.join(', ') + ')');
      var dateIdx = tb.cols.map(function (c, i) { return c.t === 'DATE' ? i : -1; }).filter(function (i) { return i >= 0; });
      var st = db.prepare('INSERT INTO ' + t + ' VALUES (' + tb.cols.map(function () { return '?'; }).join(',') + ')');
      tb.rows.forEach(function (r) {
        var row = r.map(function (v, i) { if (v === '') return null; if (dateIdx.indexOf(i) >= 0 && v != null) return parseDate(v); return v; });
        st.run(row);
      });
      st.free();
    });
    db.run("CREATE TABLE DUAL (DUMMY VARCHAR(1))"); db.run("INSERT INTO DUAL VALUES ('X')");
    db.run("CREATE VIEW USER_TABLES AS SELECT UPPER(name) AS TABLE_NAME FROM sqlite_master WHERE type='table' AND name NOT IN ('DUAL') AND name NOT LIKE 'sqlite%'");
    db.run("CREATE VIEW USER_VIEWS AS SELECT UPPER(name) AS VIEW_NAME, sql AS TEXT FROM sqlite_master WHERE type='view' AND name NOT IN ('USER_TABLES','USER_VIEWS','TAB')");
    db.run("CREATE VIEW TAB AS SELECT TABLE_NAME AS TNAME, 'TABLE' AS TABTYPE FROM USER_TABLES");
    return db;
  };
  Engine.prototype.reset = function () { try { this.db.close(); } catch (e) {} this.db = this.fresh(); this.inTx = false; };

  function friendlyError(msg) {
    var m;
    if ((m = /no such column: (\S+)/.exec(msg))) return 'ORA-00904: ' + m[1] + ' 컬럼을 찾을 수 없어요. 컬럼 이름이나 별명을 확인해 보세요. (커미션은 COMMISION_PCT, s가 하나예요.)';
    if ((m = /no such table: (\S+)/.exec(msg))) return 'ORA-00942: ' + m[1] + ' 테이블이나 뷰가 없어요.';
    if ((m = /ambiguous column name: (\S+)/.exec(msg))) return 'ORA-00918: ' + m[1] + ' 컬럼이 여러 테이블에 있어서 애매해요. 테이블명.컬럼명으로 써 주세요.';
    if (/misuse of aggregate/.test(msg)) return 'ORA-00934 / 00935: 그룹 함수를 쓸 수 없는 위치예요. WHERE에 썼다면 HAVING으로 옮기고, 그룹 함수를 겹쳐 썼다면 GROUP BY가 있는지 확인해 보세요.';
    if ((m = /UNIQUE constraint failed: (\S+)/.exec(msg))) return 'ORA-00001: 무결성 제약 조건 위반 (' + m[1] + ' 값이 중복돼요).';
    if ((m = /NOT NULL constraint failed: (\S+)/.exec(msg))) return 'ORA-01400: ' + m[1] + '에 NULL을 넣을 수 없어요.';
    if ((m = /CHECK constraint failed: (\S+)/.exec(msg))) return 'ORA-02290: 체크 제약 조건(' + m[1] + ') 위반이에요.';
    if (/FOREIGN KEY constraint failed/.test(msg)) return 'ORA-02291 / 02292: 외래 키 제약 조건 위반이에요. 부모 값이 없거나, 자식 행이 참조하고 있어요.';
    if (/sub-select returns (\d+) columns/.test(msg)) return '서브쿼리의 컬럼 수가 비교하는 컬럼 수와 달라요. (ORA-00913)';
    if (/SELECTs to the left and right of (\w+) do not have the same number/.test(msg)) return 'ORA-01789: 집합 연산자 양쪽의 컬럼 개수가 달라요.';
    if (/table (\S+) has (\d+) columns but (\d+) values were supplied/.test(msg)) { m = /table (\S+) has (\d+) columns but (\d+) values/.exec(msg); return (+m[3] > +m[2] ? 'ORA-00913: 값의 수가 너무 많아요' : 'ORA-00947: 값의 수가 충분하지 않아요') + ' (컬럼 ' + m[2] + '개, 값 ' + m[3] + '개).'; }
    if (/(\d+) values for (\d+) columns/.test(msg)) return 'ORA-00913 / 00947: 컬럼 수와 값의 수가 달라요.';
    if ((m = /table (\S+) already exists/.exec(msg))) return 'ORA-00955: ' + m[1] + ' 이름은 이미 사용 중이에요.';
    if ((m = /no such function: (\S+)/.exec(msg))) return 'ORA-00904: ' + m[1] + ' 함수를 찾을 수 없어요. (이 실행기에 없는 함수일 수도 있어요.)';
    if (/wrong number of arguments to function (\S+)/.test(msg)) return 'ORA-00909: 함수에 넣은 인자 개수가 맞지 않아요.';
    if ((m = /near "([^"]*)": syntax error/.exec(msg))) return 'ORA-00900번대 문법 오류: "' + m[1] + '" 근처를 확인해 보세요.';
    if (/incomplete input/.test(msg)) return '문장이 중간에 끝났어요. 괄호나 따옴표가 닫혔는지 확인해 보세요.';
    if (/cannot modify .* because it is a view/.test(msg)) return '이 뷰로는 데이터를 바꿀 수 없어요.';
    return msg;
  }

  // run one statement; returns {kind:'rows', columns, rows(raw), display} or {kind:'msg', text}
  Engine.prototype.execOne = function (stmt, db) {
    db = db || this.db;
    var raw = unmask(stmt.code, stmt.parts).trim();
    var head = stmt.code.trim().replace(/\s+/g, ' ').toUpperCase();
    var self = this;
    function tx(kind) {
      if (kind === 'commit') { if (self.inTx) { db.run('COMMIT'); self.inTx = false; } }
      if (kind === 'begin') { if (!self.inTx) { db.run('BEGIN'); self.inTx = true; } }
    }
    var dm;
    if ((dm = /^(DESC|DESCRIBE)\s+([\w$#.]+)$/.exec(head))) {
      var tn = dm[2].split('.').pop();
      var info = db.exec("SELECT name, CASE WHEN \"notnull\"=1 THEN 'NOT NULL' ELSE '' END, type FROM pragma_table_info('" + tn + "')");
      if (!info.length) throw new Error('ORA-04043: ' + tn + ' 객체가 없어요.');
      return { kind: 'rows', columns: ['이름', '널?', '유형'], rows: info[0].values.map(function (r) { return [String(r[0]).toUpperCase(), r[1], String(r[2]).toUpperCase().replace(/^VARCHAR\b/, 'VARCHAR2').replace(/^NUMERIC$/, 'NUMBER')]; }) };
    }
    if (/^COMMIT( WORK)?$/.test(head)) { tx('commit'); return { kind: 'msg', text: '커밋 완료.' }; }
    if (/^ROLLBACK( WORK)?$/.test(head)) { if (this.inTx) { db.run('ROLLBACK'); this.inTx = false; } return { kind: 'msg', text: '롤백 완료.' }; }
    if ((dm = /^ROLLBACK( WORK)? TO( SAVEPOINT)? (\w+)$/.exec(head))) {
      try { db.run('ROLLBACK TO ' + dm[3]); } catch (e) { throw new Error('ORA-01086: 세이브포인트 ' + dm[3] + '이(가) 없어요.'); }
      return { kind: 'msg', text: '롤백 완료.' };
    }
    if ((dm = /^SAVEPOINT (\w+)$/.exec(head))) { tx('begin'); db.run('SAVEPOINT ' + dm[1]); return { kind: 'msg', text: '저장점이 생성되었습니다.' }; }
    if (/^(GRANT|REVOKE|CREATE (PUBLIC )?SYNONYM|DROP (PUBLIC )?SYNONYM|CREATE (OR REPLACE )?TRIGGER|CREATE SEQUENCE|ALTER SEQUENCE|DROP SEQUENCE|CREATE ROLE|DROP ROLE|CREATE USER|ALTER USER|DROP USER|COMMENT ON|ALTER TABLE \S+ (MODIFY|DISABLE|ENABLE)|ALTER SESSION|SET |SHOW )/.test(head))
      throw new Error('이 명령은 브라우저 실행기에서 지원하지 않아요. 오라클에서 직접 실행해 보세요. (정답·해설은 아래에서 볼 수 있어요.)');
    var isDDL = /^(CREATE|ALTER|DROP|TRUNCATE|RENAME)\b/.test(head);
    var t = translate(stmt, this);
    var sql = t.sql;
    if ((dm = /^TRUNCATE TABLE ([\w$#.]+)$/i.exec(sql.trim()))) sql = 'DELETE FROM ' + dm[1];
    if ((dm = /^RENAME\s+([\w$#]+)\s+TO\s+([\w$#]+)$/i.exec(sql.trim()))) sql = 'ALTER TABLE ' + dm[1] + ' RENAME TO ' + dm[2];
    if ((dm = /^ALTER\s+TABLE\s+([\w$#]+)\s+ADD\s*\(([\s\S]*)\)\s*$/i.exec(sql.trim())) && !/^\s*CONSTRAINT/i.test(dm[2])) {
      sql = splitTop(dm[2], /,/).map(function (c) { return 'ALTER TABLE ' + dm[1] + ' ADD COLUMN ' + c.trim(); }).join(';\n');
    }
    if (/^ALTER\s+TABLE\s+[\w$#]+\s+ADD\b/i.test(sql.trim())) sql = sql.replace(/\s+DEFAULT\s+SYSDATE\(\)/gi, '');
    else sql = sql.replace(/\bDEFAULT\s+SYSDATE\(\)/gi, 'DEFAULT (SYSDATE())');
    if (/^(SELECT|WITH)\b/.test(head) || /^\(\s*SELECT\b/.test(head)) {
      lintSelect(t.code.replace(/^\(+/, ''), this.schemaCols);
      var res;
      try { res = db.exec(sql); } catch (e) { throw new Error(friendlyError(String(e.message || e))); }
      var cols, rows;
      if (!res.length) {
        // no rows: get column names from a prepared statement
        var st = db.prepare(sql); cols = st.getColumnNames(); st.free(); rows = [];
      } else { cols = res[0].columns; rows = res[0].values; }
      return { kind: 'rows', columns: oracleHeaders(stmt, cols), rows: rows };
    }
    try {
      if (isDDL) { tx('commit'); db.exec(sql); }
      else { tx('begin'); db.run(sql); }
    } catch (e) {
      var em = String(e.message || e);
      if (/FOREIGN KEY constraint failed/.test(em)) {
        if (/^INSERT/.test(head) || /^UPDATE/.test(head) && false) throw new Error('ORA-02291: 무결성 제약조건 위반 - 부모 키가 없어요. 참조하는 부모 테이블에 그 값이 있는지 확인해 보세요.');
        if (/^(DELETE|DROP)/.test(head)) throw new Error('ORA-02292: 무결성 제약조건 위반 - 자식 레코드가 발견되었어요. 이 행을 참조하는 자식 행을 먼저 정리해야 해요.');
        throw new Error('ORA-02291 / 02292: 외래 키 제약조건 위반이에요. 부모 값이 없거나, 자식 행이 이 값을 참조하고 있어요.');
      }
      throw new Error(friendlyError(em));
    }
    var n = db.getRowsModified();
    if (/^INSERT/.test(head)) return { kind: 'msg', text: n + '개 행이 삽입되었습니다.' };
    if (/^UPDATE/.test(head)) return { kind: 'msg', text: n + '개 행이 업데이트되었습니다.' };
    if (/^DELETE/.test(head)) return { kind: 'msg', text: n + '개 행이 삭제되었습니다.' };
    if (/^TRUNCATE/.test(head)) return { kind: 'msg', text: 'Table이(가) 잘렸습니다. (TRUNCATE는 되돌릴 수 없어요)' };
    if (/^CREATE TABLE/.test(head)) return { kind: 'msg', text: '테이블이 생성되었습니다.' };
    if (/^CREATE (OR REPLACE )?VIEW/.test(head)) return { kind: 'msg', text: '뷰가 생성되었습니다.' };
    if (/^CREATE (UNIQUE )?INDEX/.test(head)) return { kind: 'msg', text: '인덱스가 생성되었습니다.' };
    if (/^DROP/.test(head)) return { kind: 'msg', text: '삭제되었습니다.' };
    if (/^ALTER/.test(head)) return { kind: 'msg', text: '테이블이 변경되었습니다.' };
    if (/^RENAME/.test(head)) return { kind: 'msg', text: '이름이 변경되었습니다.' };
    return { kind: 'msg', text: '실행했어요.' };
  };

  // run a script; returns array of results (each {ok, result|error, sql})
  Engine.prototype.run = function (sql, opts) {
    opts = opts || {};
    var db = this.db, stmts;
    try { stmts = splitStatements(sql); } catch (e) { return [{ ok: false, error: e.message }]; }
    var out = [];
    for (var i = 0; i < stmts.length; i++) {
      var txt = unmask(stmts[i].code, stmts[i].parts);
      try {
        var r = this.execOne(stmts[i], db);
        if (r.kind === 'rows') r.display = r.rows.map(function (row) { return row.map(displayValue); });
        out.push({ ok: true, result: r, sql: txt });
      } catch (e) {
        out.push({ ok: false, error: String(e.message || e), sql: txt });
        if (opts.stopOnError !== false) break;
      }
    }
    return out;
  };

  // run setup + text on a fresh database (working database untouched); returns results of text only
  Engine.prototype.runIsolated = function (setup, text) {
    var saveDb = this.db, saveTx = this.inTx;
    this.db = this.fresh(); this.inTx = false;
    try { this.run(setup); return this.run(text); }
    finally { try { this.db.close(); } catch (e) {} this.db = saveDb; this.inTx = saveTx; }
  };

  // grading: run on a pristine database
  Engine.prototype.query = function (sql, pristine) {
    var saveDb = this.db, saveTx = this.inTx;
    if (pristine) { this.db = this.fresh(); this.inTx = false; }
    try {
      var res = this.run(sql);
      var last = res[res.length - 1];
      return last;
    } finally {
      if (pristine) { try { this.db.close(); } catch (e) {} this.db = saveDb; this.inTx = saveTx; }
    }
  };

  // compare user result (u) with model result (m); check = {order:[model col idx...]}
  function compare(u, m, check) {
    check = check || {};
    var mr = m.rows, ur = u.rows;
    if (ur.length !== mr.length) return { ok: false, msg: '행 수가 달라요. 내 결과는 ' + ur.length + '행, 정답은 ' + mr.length + '행이에요.' };
    var used = {}, map = [];
    for (var j = 0; j < m.columns.length; j++) {
      var mv = mr.map(function (r) { return normValue(r[j]); }).sort().join('|');
      var found = -1;
      var cand = u.columns.map(function (c, k) { return k; });
      // prefer same header
      cand.sort(function (a, b) { return (u.columns[b].toUpperCase() === m.columns[j].toUpperCase()) - (u.columns[a].toUpperCase() === m.columns[j].toUpperCase()); });
      for (var ci = 0; ci < cand.length; ci++) {
        var k = cand[ci]; if (used[k]) continue;
        var uv = ur.map(function (r) { return normValue(r[k]); }).sort().join('|');
        if (uv === mv) { found = k; break; }
      }
      if (found < 0) return { ok: false, msg: '행 수(' + mr.length + '행)는 맞는데, 정답의 ' + (check.labels && check.labels[j] || m.columns[j]) + ' 컬럼과 같은 값을 가진 컬럼이 내 결과에 없어요.' };
      used[found] = 1; map.push(found);
    }
    var mt = mr.map(function (r) { return r.map(normValue).join('\u0003'); }).sort().join('\n');
    var ut = ur.map(function (r) { return map.map(function (k) { return normValue(r[k]); }).join('\u0003'); }).sort().join('\n');
    if (mt !== ut) return { ok: false, msg: '컬럼마다 값은 맞는데, 행 단위로 짝지어 보면 정답과 달라요. JOIN 조건이나 WHERE를 확인해 보세요.' };
    if (check.order && check.order.length) {
      for (var i = 0; i < mr.length; i++) {
        for (var oi = 0; oi < check.order.length; oi++) {
          var jj = check.order[oi];
          if (normValue(mr[i][jj]) !== normValue(ur[i][map[jj]])) return { ok: false, msg: '값은 모두 맞는데 정렬 순서가 달라요. ORDER BY를 확인해 보세요.' };
        }
      }
    }
    var extra = u.columns.length - m.columns.length;
    return { ok: true, extra: extra };
  }

  return {
    create: function (SQL, data) { return new Engine(SQL, data); },
    compare: compare, displayValue: displayValue,
    _t: { fmtDate: fmtDate, fmtNumber: fmtNumber, parseDate: parseDate, translate: translate, splitStatements: splitStatements, rewriteOuterJoin: rewriteOuterJoin }
  };
});
