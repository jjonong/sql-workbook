// SQL 핵심 정리 탭 (HTML)
var W = window.W = window.W || {};
W.cheat = String.raw`
<h1 id="h-1">SQL 핵심 정리 (빠른 찾기)</h1>
<p>&quot;하고 싶은 것 → 쓰는 것 → 예&quot; 순서로 정리했어요. 자세한 설명은 <a href="#concepts" data-goto="concepts">개념 정리</a> 탭에 있어요. <br>예시의 테이블과 컬럼은 실습용 S_EMP(id, name, mailid, start_date, manager_id, title, dept_id, salary, commision_pct), S_DEPT(id, name, region_id), SALGRADE(grade, losal, hisal)예요.</p>
<h1 id="h-ch-2">2장 테이블 생성과 DML</h1>
<h2 id="h-3">데이터 바꾸기 (DML)</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
</tr>
</thead>
<tbody><tr>
<td>한 행 넣기</td>
<td><code>INSERT INTO t (c1, c2) VALUES (v1, v2);</code></td>
</tr>
<tr>
<td>모든 컬럼에 넣기</td>
<td><code>INSERT INTO t VALUES (...);</code> (컬럼 순서대로)</td>
</tr>
<tr>
<td>조회 결과를 여러 행 넣기</td>
<td><code>INSERT INTO t (c1, c2) SELECT ... FROM ...;</code></td>
</tr>
<tr>
<td>고치기</td>
<td><code>UPDATE t SET c1 = v1, c2 = v2 WHERE ...;</code></td>
</tr>
<tr>
<td>다른 값을 가져와 고치기</td>
<td><code>UPDATE t SET c1 = (SELECT ...) WHERE ...;</code></td>
</tr>
<tr>
<td>지우기</td>
<td><code>DELETE FROM t WHERE ...;</code></td>
</tr>
</tbody>
</table>
</div>
<p>WHERE를 빼면 모든 행이 바뀌거나 지워져요. 먼저 같은 WHERE로 SELECT해서 확인해요.</p>
<h1 id="h-ch-3">3장 SELECT</h1>
<h2 id="h-5">행 고르기 (WHERE)</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td>같다 / 다르다</td>
<td><code>=</code> / <code>&lt;&gt;</code> <code>!=</code> <code>^=</code></td>
<td><code>dept_id = 110</code></td>
</tr>
<tr>
<td>범위 (양 끝 포함)</td>
<td><code>BETWEEN 작은값 AND 큰값</code></td>
<td><code>salary BETWEEN 1000 AND 2000</code></td>
</tr>
<tr>
<td>목록 중 하나</td>
<td><code>IN (...)</code></td>
<td><code>dept_id IN (110, 113)</code></td>
</tr>
<tr>
<td>~로 시작, 끝남, 포함</td>
<td><code>LIKE</code> + <code>%</code>(여러 글자) <code>_</code>(한 글자)</td>
<td><code>&#39;김%&#39;</code>, <code>&#39;%부장&#39;</code>, <code>&#39;%영%&#39;</code>, <code>&#39;_명%&#39;</code></td>
</tr>
<tr>
<td>값이 없음 / 있음</td>
<td><code>IS NULL</code> / <code>IS NOT NULL</code></td>
<td><code>manager_id IS NULL</code></td>
</tr>
<tr>
<td>반대 조건</td>
<td><code>NOT BETWEEN</code>, <code>NOT IN</code>, <code>NOT LIKE</code></td>
<td><code>title NOT LIKE &#39;%부장&#39;</code></td>
</tr>
<tr>
<td>조건 여러 개</td>
<td><code>AND</code> / <code>OR</code> (AND가 먼저) → 섞이면 괄호</td>
<td><code>(a OR b) AND c</code></td>
</tr>
<tr>
<td>날짜 범위</td>
<td><code>&gt;= 시작일 AND &lt; 다음날</code></td>
<td><code>start_date &gt;= TO_DATE(&#39;2016-01-01&#39;,&#39;YYYY-MM-DD&#39;)</code></td>
</tr>
</tbody>
</table>
</div>
<h2 id="h-6">보여주기와 정렬</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td>모든 컬럼</td>
<td><code>*</code></td>
<td><code>SELECT * FROM s_emp</code></td>
</tr>
<tr>
<td>머리글 바꾸기</td>
<td><code>AS 별명</code>, 띄어쓰기는 <code>&quot;...&quot;</code></td>
<td><code>salary*12 AS 연봉</code></td>
</tr>
<tr>
<td>문자 이어 붙이기</td>
<td><code>||</code> 또는 <code>CONCAT(a, b)</code></td>
<td><code>name || &#39; &#39; || title</code></td>
</tr>
<tr>
<td>중복 빼기</td>
<td><code>DISTINCT</code></td>
<td><code>SELECT DISTINCT title</code></td>
</tr>
<tr>
<td>정렬</td>
<td><code>ORDER BY 컬럼 ASC</code> / <code>DESC</code></td>
<td><code>ORDER BY dept_id, salary DESC</code></td>
</tr>
<tr>
<td>위치로 정렬</td>
<td><code>ORDER BY 번호</code></td>
<td><code>ORDER BY 2</code></td>
</tr>
<tr>
<td>테이블 없이 계산만</td>
<td><code>FROM dual</code></td>
<td><code>SELECT SYSDATE FROM dual</code></td>
</tr>
</tbody>
</table>
</div>
<h1 id="h-ch-4">4장 함수</h1>
<h2 id="h-8">문자 함수</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
<th>예 → 결과</th>
</tr>
</thead>
<tbody><tr>
<td>대문자 / 소문자 / 첫 글자만 대문자</td>
<td><code>UPPER</code> / <code>LOWER</code> / <code>INITCAP</code></td>
<td><code>INITCAP(&#39;oracle sql&#39;)</code> → Oracle Sql</td>
</tr>
<tr>
<td>일부 잘라내기</td>
<td><code>SUBSTR(s, 시작, 길이)</code></td>
<td><code>SUBSTR(&#39;ABCDEF&#39;, 2, 3)</code> → BCD</td>
</tr>
<tr>
<td>뒤에서부터 잘라내기</td>
<td><code>SUBSTR(s, -n)</code></td>
<td><code>SUBSTR(&#39;ABCDEF&#39;, -2)</code> → EF</td>
</tr>
<tr>
<td>글자 수</td>
<td><code>LENGTH(s)</code></td>
<td><code>LENGTH(&#39;홍길동&#39;)</code> → 3</td>
</tr>
<tr>
<td>자리 채우기</td>
<td><code>LPAD</code> / <code>RPAD(s, 전체칸, &#39;문자&#39;)</code></td>
<td><code>LPAD(&#39;7&#39;, 3, &#39;0&#39;)</code> → 007</td>
</tr>
<tr>
<td>앞이나 뒤의 특정 글자 지우기</td>
<td><code>LTRIM</code> / <code>RTRIM(s, &#39;문자&#39;)</code></td>
<td><code>LTRIM(&#39;XXAXBA&#39;, &#39;X&#39;)</code> → AXBA</td>
</tr>
<tr>
<td>문자열 바꾸기</td>
<td><code>REPLACE(s, 찾을것, 바꿀것)</code></td>
<td><code>REPLACE(&#39;JACK&#39;, &#39;J&#39;, &#39;BL&#39;)</code> → BLACK</td>
</tr>
<tr>
<td>글자 하나씩 1:1로 바꾸기</td>
<td><code>TRANSLATE(s, &#39;AB&#39;, &#39;XY&#39;)</code></td>
<td><code>TRANSLATE(&#39;BAD&#39;, &#39;AB&#39;, &#39;XY&#39;)</code> → YXD</td>
</tr>
<tr>
<td>코드 번호 → 문자</td>
<td><code>CHR(n)</code></td>
<td><code>CHR(65)</code> → A</td>
</tr>
</tbody>
</table>
</div>
<h2 id="h-9">숫자 함수</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
<th>예 → 결과</th>
</tr>
</thead>
<tbody><tr>
<td>반올림</td>
<td><code>ROUND(n, 자리)</code></td>
<td><code>ROUND(35.735, 2)</code> → 35.74, <code>ROUND(1250, -2)</code> → 1300</td>
</tr>
<tr>
<td>버림</td>
<td><code>TRUNC(n, 자리)</code></td>
<td><code>TRUNC(35.735, 2)</code> → 35.73</td>
</tr>
<tr>
<td>나머지</td>
<td><code>MOD(a, b)</code></td>
<td><code>MOD(7, 2)</code> → 1</td>
</tr>
<tr>
<td>거듭제곱 / 제곱근</td>
<td><code>POWER(a, b)</code> / <code>SQRT(n)</code></td>
<td><code>POWER(2, 3)</code> → 8</td>
</tr>
<tr>
<td>부호</td>
<td><code>SIGN(n)</code></td>
<td>양수 1, 0이면 0, 음수 -1</td>
</tr>
<tr>
<td>몫 (정수)</td>
<td><code>TRUNC(a / b)</code></td>
<td><code>TRUNC(7 / 2)</code> → 3</td>
</tr>
</tbody>
</table>
</div>
<h2 id="h-10">날짜 계산</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td>지금</td>
<td><code>SYSDATE</code></td>
<td><code>SELECT SYSDATE FROM dual</code></td>
</tr>
<tr>
<td>n일 뒤 / 앞</td>
<td><code>날짜 + n</code> / <code>날짜 - n</code></td>
<td><code>SYSDATE + 7</code></td>
</tr>
<tr>
<td>n시간 뒤</td>
<td><code>날짜 + n/24</code></td>
<td><code>SYSDATE + 3/24</code></td>
</tr>
<tr>
<td>두 날짜 사이 일수</td>
<td><code>날짜1 - 날짜2</code></td>
<td><code>SYSDATE - start_date</code></td>
</tr>
<tr>
<td>n개월 뒤</td>
<td><code>ADD_MONTHS(d, n)</code></td>
<td><code>ADD_MONTHS(start_date, 6)</code></td>
</tr>
<tr>
<td>두 날짜 사이 개월 수</td>
<td><code>MONTHS_BETWEEN(늦은날, 이른날)</code></td>
<td><code>MONTHS_BETWEEN(SYSDATE, start_date)</code></td>
</tr>
<tr>
<td>근속 연수</td>
<td><code>TRUNC(MONTHS_BETWEEN(...) / 12)</code></td>
<td></td>
</tr>
<tr>
<td>그 달의 말일</td>
<td><code>LAST_DAY(d)</code></td>
<td><code>LAST_DAY(SYSDATE)</code></td>
</tr>
<tr>
<td>시간 버리기 / 월초 / 연초</td>
<td><code>TRUNC(d)</code> / <code>TRUNC(d, &#39;MONTH&#39;)</code> / <code>TRUNC(d, &#39;YEAR&#39;)</code></td>
<td></td>
</tr>
<tr>
<td>월 / 연 단위 반올림</td>
<td><code>ROUND(d, &#39;MONTH&#39;)</code> / <code>ROUND(d, &#39;YEAR&#39;)</code></td>
<td>16일, 7월부터 올림</td>
</tr>
</tbody>
</table>
</div>
<h2 id="h-11">형 변환과 표시 형식</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td>날짜 → 문자</td>
<td><code>TO_CHAR(d, &#39;형식&#39;)</code></td>
<td><code>TO_CHAR(start_date, &#39;YYYY-MM-DD&#39;)</code></td>
</tr>
<tr>
<td>연·월·요일만 뽑기</td>
<td><code>TO_CHAR(d, &#39;YYYY&#39;)</code>, <code>&#39;MM&#39;</code>, <code>&#39;DAY&#39;</code></td>
<td><code>WHERE TO_CHAR(start_date, &#39;MM&#39;) = &#39;03&#39;</code></td>
</tr>
<tr>
<td>숫자 → 문자 (콤마, 통화)</td>
<td><code>TO_CHAR(n, &#39;9,999,999&#39;)</code>, <code>&#39;$9,999&#39;</code>, <code>&#39;L9,999&#39;</code></td>
<td><code>TO_CHAR(1500, &#39;$9,999&#39;)</code> → $1,500</td>
</tr>
<tr>
<td>앞자리 0 채우기</td>
<td><code>TO_CHAR(n, &#39;00000&#39;)</code></td>
<td><code>TO_CHAR(123, &#39;00000&#39;)</code> → 00123</td>
</tr>
<tr>
<td>문자 → 날짜</td>
<td><code>TO_DATE(&#39;문자&#39;, &#39;형식&#39;)</code></td>
<td><code>TO_DATE(&#39;2016-03-02&#39;, &#39;YYYY-MM-DD&#39;)</code></td>
</tr>
<tr>
<td>문자 → 숫자</td>
<td><code>TO_NUMBER(&#39;문자&#39;, &#39;형식&#39;)</code></td>
<td><code>TO_NUMBER(&#39;1,000&#39;, &#39;9,999&#39;)</code> → 1000</td>
</tr>
</tbody>
</table>
</div>
<p>날짜 형식 기호: <code>YYYY</code> 연 · <code>MM</code> 월 · <code>DD</code> 일 · <code>DAY</code>/<code>DY</code> 요일 · <code>HH24</code> 시 · <code>MI</code> 분 · <code>SS</code> 초 · <code>Q</code> 분기 · <code>AM</code> 오전/오후 · <code>&quot;년&quot;</code> 글자 그대로. 분은 <code>MI</code>예요(<code>MM</code>은 월).</p>
<h2 id="h-12">NULL 처리</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td>NULL을 다른 값으로</td>
<td><code>NVL(값, 대신할값)</code> (두 값의 타입이 같아야 함)</td>
<td><code>NVL(commision_pct, 0)</code>, <code>NVL(mailid, &#39;ID없음&#39;)</code></td>
</tr>
<tr>
<td>NULL인 행 찾기</td>
<td><code>IS NULL</code> (<code>= NULL</code>은 안 됨)</td>
<td><code>WHERE commision_pct IS NULL</code></td>
</tr>
<tr>
<td>NULL 포함 평균</td>
<td><code>AVG(NVL(컬럼, 0))</code></td>
<td></td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>NULL이 들어간 계산 결과는 NULL이에요. <code>salary * commision_pct</code></li>
<li>그룹 함수는 NULL을 빼고 계산해요. COUNT(*)만 NULL 행도 세요.</li>
<li><code>NOT IN (...)</code> 목록에 NULL이 하나라도 있으면 결과가 0행이에요. NOT EXISTS를 쓰거나 서브쿼리에 <code>WHERE 컬럼 IS NOT NULL</code>을 붙여요.</li>
<li>정렬하면 NULL은 ASC에서 맨 뒤, DESC에서 맨 앞에 와요.</li>
</ul>
<h1 id="h-ch-5">5장 GROUP BY와 HAVING</h1>
<h2 id="h-14">문장 뼈대와 실행 순서</h2>
<pre><code><span class="hl-kw">SELECT</span>   컬럼, 그룹함수      <span class="hl-com">-- ⑤</span>
<span class="hl-kw">FROM</span>     테이블              <span class="hl-com">-- ①</span>
<span class="hl-kw">WHERE</span>    행 조건             <span class="hl-com">-- ②</span>
<span class="hl-kw">GROUP</span> <span class="hl-kw">BY</span> 컬럼                <span class="hl-com">-- ③</span>
<span class="hl-kw">HAVING</span>   그룹 조건           <span class="hl-com">-- ④</span>
<span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> 컬럼 [<span class="hl-kw">ASC</span>/<span class="hl-kw">DESC</span>];    <span class="hl-com">-- ⑥</span></code></pre>
<ul>
<li>별명(alias)은 ORDER BY에서만 쓸 수 있고, WHERE와 HAVING에서는 못 써요.</li>
<li>그룹 함수는 WHERE에서 못 쓰니 HAVING에 써요.</li>
<li>GROUP BY를 쓰면 SELECT에는 GROUP BY 컬럼과 그룹 함수만 올 수 있어요.</li>
</ul>
<h2 id="h-15">집계와 그룹</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td>행 개수</td>
<td><code>COUNT(*)</code></td>
<td></td>
</tr>
<tr>
<td>값이 있는 행 개수</td>
<td><code>COUNT(컬럼)</code></td>
<td><code>COUNT(commision_pct)</code></td>
</tr>
<tr>
<td>종류 개수</td>
<td><code>COUNT(DISTINCT 컬럼)</code></td>
<td><code>COUNT(DISTINCT title)</code></td>
</tr>
<tr>
<td>합계 / 평균 / 최대 / 최소</td>
<td><code>SUM</code> / <code>AVG</code> / <code>MAX</code> / <code>MIN</code></td>
<td><code>MAX(start_date)</code> (날짜, 문자도 됨)</td>
</tr>
<tr>
<td>그룹별로</td>
<td><code>GROUP BY 컬럼</code></td>
<td><code>GROUP BY dept_id</code></td>
</tr>
<tr>
<td>두 기준으로 그룹</td>
<td><code>GROUP BY a, b</code></td>
<td><code>GROUP BY dept_id, title</code></td>
</tr>
<tr>
<td>그룹 결과 거르기</td>
<td><code>HAVING 그룹조건</code></td>
<td><code>HAVING AVG(salary) &gt;= 900</code></td>
</tr>
<tr>
<td>소계 + 총계</td>
<td><code>GROUP BY ROLLUP(a, b)</code></td>
<td>(a,b)별 + a별 소계 + 전체 총계</td>
</tr>
<tr>
<td>모든 조합의 소계</td>
<td><code>GROUP BY CUBE(a, b)</code></td>
<td>ROLLUP에 b별 소계까지 추가</td>
</tr>
</tbody>
</table>
</div>
<h1 id="h-ch-6">6장 JOIN과 SET 연산자</h1>
<h2 id="h-17">JOIN</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td>같은 값끼리 연결 (EQUI)</td>
<td><code>WHERE a.컬럼 = b.컬럼</code></td>
<td><code>WHERE e.dept_id = d.id</code></td>
</tr>
<tr>
<td>범위로 연결 (NON-EQUI)</td>
<td><code>BETWEEN</code> 등</td>
<td><code>WHERE e.salary BETWEEN g.losal AND g.hisal</code></td>
</tr>
<tr>
<td>짝이 없는 행도 포함 (OUTER)</td>
<td>모자라는 쪽에 <code>(+)</code></td>
<td><code>WHERE e.dept_id(+) = d.id</code> (직원 없는 부서도)</td>
</tr>
<tr>
<td>같은 테이블끼리 (SELF)</td>
<td>별명 두 개</td>
<td><code>FROM s_emp w, s_emp m WHERE w.manager_id = m.id</code></td>
</tr>
<tr>
<td>테이블 3개</td>
<td>조건 2개 (N개면 N-1개)</td>
<td><code>WHERE e.dept_id = d.id AND d.region_id = r.id</code></td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>같은 이름 컬럼은 <code>테이블.컬럼</code> 또는 <code>별명.컬럼</code>으로 써요. 안 쓰면 ORA-00918이에요.</li>
<li>조인 조건을 빼면 모든 조합(Cartesian product)이 나와요. 25명 × 11부서 = 275행.</li>
</ul>
<h2 id="h-18">집합 연산자</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
</tr>
</thead>
<tbody><tr>
<td>합치기 (중복 한 번만)</td>
<td><code>UNION</code></td>
</tr>
<tr>
<td>합치기 (중복도 그대로)</td>
<td><code>UNION ALL</code></td>
</tr>
<tr>
<td>양쪽에 다 있는 것</td>
<td><code>INTERSECT</code></td>
</tr>
<tr>
<td>첫 번째에만 있는 것</td>
<td><code>MINUS</code></td>
</tr>
</tbody>
</table>
</div>
<p>컬럼 개수와 타입이 같아야 하고, 컬럼 이름은 첫 번째 SELECT를 따르며, ORDER BY는 맨 끝에 한 번만 써요.</p>
<h1 id="h-ch-7">7장 SUBQUERY</h1>
<h2 id="h-20">서브쿼리</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td>값 하나와 비교</td>
<td><code>=</code>, <code>&gt;</code>, <code>&lt;</code> + (단일 행 서브쿼리)</td>
<td><code>WHERE salary &gt; (SELECT AVG(salary) FROM s_emp)</code></td>
</tr>
<tr>
<td>여러 값 중 하나와 같음</td>
<td><code>IN (서브쿼리)</code></td>
<td><code>WHERE dept_id IN (SELECT id FROM s_dept WHERE ...)</code></td>
</tr>
<tr>
<td>여러 값 중 아무거나보다 큼</td>
<td><code>&gt; ANY</code> (= 최솟값보다 큼)</td>
<td><code>WHERE salary &gt; ANY (SELECT salary FROM ... )</code></td>
</tr>
<tr>
<td>여러 값 전부보다 큼</td>
<td><code>&gt; ALL</code> (= 최댓값보다 큼)</td>
<td></td>
</tr>
<tr>
<td>해당 행이 있는지</td>
<td><code>EXISTS (상관 서브쿼리)</code></td>
<td><code>WHERE EXISTS (SELECT 1 FROM s_emp e WHERE e.dept_id = d.id)</code></td>
</tr>
<tr>
<td>해당 행이 없는지</td>
<td><code>NOT EXISTS</code></td>
<td>직원이 없는 부서</td>
</tr>
<tr>
<td>두 컬럼을 한꺼번에 비교</td>
<td><code>(a, b) IN (SELECT a, b ...)</code></td>
<td>부서별 최고 급여자</td>
</tr>
<tr>
<td>그룹 결과와 비교</td>
<td><code>HAVING 그룹함수 &gt; (서브쿼리)</code></td>
<td></td>
</tr>
<tr>
<td>결과를 임시 테이블처럼</td>
<td><code>FROM (SELECT ...) 별명</code> (인라인 뷰)</td>
<td>계산한 컬럼에는 별명을 꼭 주기</td>
</tr>
<tr>
<td>바깥 행마다 따로 비교</td>
<td>상관 서브쿼리 (안쪽에서 바깥 별명 사용)</td>
<td><code>WHERE salary &gt; (SELECT AVG(salary) FROM s_emp x WHERE x.dept_id = e.dept_id)</code></td>
</tr>
</tbody>
</table>
</div>
<p><code>&lt; ANY</code>는 최댓값보다 작음, <code>&lt; ALL</code>은 최솟값보다 작음이에요. <code>= ANY</code>는 <code>IN</code>과 같아요.</p>
<h1 id="h-ch-8">8장 CONSTRAINT</h1>
<h2 id="h-22">제약조건</h2>
<div class="tw"><table><thead><tr>
<th>규칙</th>
<th>쓰는 것</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td>비워 두면 안 됨</td>
<td><code>NOT NULL</code> (컬럼 옆에만)</td>
<td><code>name VARCHAR2(25) NOT NULL</code></td>
</tr>
<tr>
<td>중복 안 됨 (NULL은 허용)</td>
<td><code>UNIQUE</code></td>
<td><code>CONSTRAINT emp_mailid_uk UNIQUE (mailid)</code></td>
</tr>
<tr>
<td>대표 키 (NOT NULL + UNIQUE)</td>
<td><code>PRIMARY KEY</code></td>
<td><code>CONSTRAINT emp_id_pk PRIMARY KEY (id)</code></td>
</tr>
<tr>
<td>다른 테이블에 있는 값만</td>
<td><code>FOREIGN KEY ... REFERENCES</code></td>
<td><code>CONSTRAINT emp_dept_fk FOREIGN KEY (dept_id) REFERENCES dept(id)</code></td>
</tr>
<tr>
<td>부모 삭제 시 자식도 삭제</td>
<td><code>... REFERENCES dept(id) ON DELETE CASCADE</code></td>
<td></td>
</tr>
<tr>
<td>값의 조건</td>
<td><code>CHECK (조건)</code></td>
<td><code>CONSTRAINT emp_sal_ck CHECK (salary &gt; 0)</code></td>
</tr>
</tbody>
</table>
</div>
<p>이름 규칙은 <code>테이블_컬럼_종류</code>(pk, uk, fk, ck, nn)예요. FK가 가리키는 부모 컬럼은 PK나 UNIQUE여야 해요.</p>
<h1 id="h-ch-9">9장 TRANSACTION</h1>
<h2 id="h-24">트랜잭션</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
</tr>
</thead>
<tbody><tr>
<td>변경 확정</td>
<td><code>COMMIT;</code></td>
</tr>
<tr>
<td>변경 취소 (마지막 COMMIT 이후 전부)</td>
<td><code>ROLLBACK;</code></td>
</tr>
<tr>
<td>중간 지점 저장</td>
<td><code>SAVEPOINT a;</code></td>
</tr>
<tr>
<td>중간 지점까지만 취소</td>
<td><code>ROLLBACK TO a;</code></td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>자동 COMMIT: DDL(CREATE, ALTER, DROP, TRUNCATE, RENAME), DCL(GRANT, REVOKE), 정상 종료</li>
<li>자동 ROLLBACK: 비정상 종료 (창을 강제로 닫거나 시스템 장애)</li>
<li>COMMIT 전 변경은 나만 보여요. 다른 세션에서는 이전 값이 보여요.</li>
</ul>
<h1 id="h-ch-10">10장 DICTIONARY</h1>
<h2 id="h-26">데이터 사전 (내 객체 확인)</h2>
<div class="tw"><table><thead><tr>
<th>보고 싶은 것</th>
<th>조회할 곳</th>
</tr>
</thead>
<tbody><tr>
<td>사전 목록</td>
<td><code>DICTIONARY</code></td>
</tr>
<tr>
<td>내 테이블</td>
<td><code>USER_TABLES</code></td>
</tr>
<tr>
<td>내 객체 전체 (종류별)</td>
<td><code>USER_OBJECTS</code></td>
</tr>
<tr>
<td>테이블 컬럼 구조</td>
<td><code>DESC 테이블</code></td>
</tr>
<tr>
<td>제약조건</td>
<td><code>USER_CONSTRAINTS</code> (+ 컬럼은 <code>USER_CONS_COLUMNS</code>)</td>
</tr>
<tr>
<td>인덱스</td>
<td><code>USER_INDEXES</code> / <code>USER_IND_COLUMNS</code></td>
</tr>
<tr>
<td>시퀀스</td>
<td><code>USER_SEQUENCES</code></td>
</tr>
<tr>
<td>뷰</td>
<td><code>USER_VIEWS</code></td>
</tr>
<tr>
<td>시노님</td>
<td><code>USER_SYNONYMS</code></td>
</tr>
<tr>
<td>내가 준 / 받은 객체 권한</td>
<td><code>USER_TAB_PRIVS_MADE</code> / <code>USER_TAB_PRIVS_RECD</code></td>
</tr>
<tr>
<td>내 시스템 권한 / ROLE</td>
<td><code>USER_SYS_PRIVS</code> / <code>USER_ROLE_PRIVS</code></td>
</tr>
</tbody>
</table>
</div>
<p>접두어: <code>USER_</code> 내 것 · <code>ALL_</code> 내가 볼 수 있는 것 · <code>DBA_</code> 전부(관리자). 조건 값은 대문자로 써요: <code>WHERE table_name = &#39;S_EMP&#39;</code>.</p>
<h1 id="h-ch-11">11장 DDL</h1>
<h2 id="h-28">테이블 구조 (DDL)</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
</tr>
</thead>
<tbody><tr>
<td>테이블 만들기</td>
<td><code>CREATE TABLE t (c1 NUMBER(5), c2 VARCHAR2(25) DEFAULT &#39;사원&#39;, ...);</code></td>
</tr>
<tr>
<td>복사해서 만들기</td>
<td><code>CREATE TABLE t2 AS SELECT * FROM t WHERE ...;</code></td>
</tr>
<tr>
<td>구조만 복사</td>
<td><code>CREATE TABLE t2 AS SELECT * FROM t WHERE 1 &lt;&gt; 1;</code></td>
</tr>
<tr>
<td>컬럼 추가</td>
<td><code>ALTER TABLE t ADD (c3 DATE);</code></td>
</tr>
<tr>
<td>컬럼 타입·크기 바꾸기</td>
<td><code>ALTER TABLE t MODIFY (c2 VARCHAR2(50));</code></td>
</tr>
<tr>
<td>제약조건 추가 / 삭제</td>
<td><code>ALTER TABLE t ADD CONSTRAINT 이름 ...;</code> / <code>ALTER TABLE t DROP CONSTRAINT 이름 [CASCADE];</code></td>
</tr>
<tr>
<td>제약조건 잠시 끄기 / 켜기</td>
<td><code>ALTER TABLE t DISABLE CONSTRAINT 이름;</code> / <code>ENABLE CONSTRAINT 이름;</code></td>
</tr>
<tr>
<td>테이블 삭제</td>
<td><code>DROP TABLE t;</code> (참조되면 <code>DROP TABLE t CASCADE CONSTRAINTS;</code>)</td>
</tr>
<tr>
<td>데이터만 전부 삭제 (되돌릴 수 없음)</td>
<td><code>TRUNCATE TABLE t;</code></td>
</tr>
<tr>
<td>이름 바꾸기</td>
<td><code>RENAME t TO t_new;</code></td>
</tr>
<tr>
<td>설명 달기</td>
<td><code>COMMENT ON TABLE t IS &#39;설명&#39;;</code></td>
</tr>
</tbody>
</table>
</div>
<div class="tw"><table><thead><tr>
<th></th>
<th>DELETE</th>
<th>TRUNCATE</th>
<th>DROP</th>
</tr>
</thead>
<tbody><tr>
<td>지우는 것</td>
<td>행 (WHERE 가능)</td>
<td>모든 행</td>
<td>테이블 자체</td>
</tr>
<tr>
<td>ROLLBACK</td>
<td>가능</td>
<td>불가 (DDL)</td>
<td>불가 (DDL)</td>
</tr>
</tbody>
</table>
</div>
<h1 id="h-ch-12">12장 DCL</h1>
<h2 id="h-30">권한과 ROLE</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
</tr>
</thead>
<tbody><tr>
<td>시스템 권한 주기</td>
<td><code>GRANT CREATE TABLE, CREATE VIEW TO 사용자;</code></td>
</tr>
<tr>
<td>객체 권한 주기</td>
<td><code>GRANT SELECT, UPDATE ON s_emp TO 사용자;</code></td>
</tr>
<tr>
<td>받은 시스템 권한을 남에게도 줄 수 있게</td>
<td><code>... WITH ADMIN OPTION</code> (회수해도 연쇄 회수 안 됨)</td>
</tr>
<tr>
<td>받은 객체 권한을 남에게도 줄 수 있게</td>
<td><code>... WITH GRANT OPTION</code> (회수하면 연쇄 회수)</td>
</tr>
<tr>
<td>모두에게</td>
<td><code>TO PUBLIC</code></td>
</tr>
<tr>
<td>권한 빼앗기</td>
<td><code>REVOKE 권한 ON 객체 FROM 사용자;</code> (시스템 권한은 <code>ON</code> 없이)</td>
</tr>
<tr>
<td>권한 꾸러미 만들기</td>
<td><code>CREATE ROLE r;</code> → <code>GRANT ... TO r;</code> → <code>GRANT r TO 사용자;</code></td>
</tr>
<tr>
<td>비밀번호 바꾸기</td>
<td><code>ALTER USER 사용자 IDENTIFIED BY 새비번;</code></td>
</tr>
</tbody>
</table>
</div>
<h1 id="h-ch-13">13장 OBJECT</h1>
<h2 id="h-32">그 밖의 객체</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
</tr>
</thead>
<tbody><tr>
<td>번호 자동 생성기</td>
<td><code>CREATE SEQUENCE s START WITH 1 INCREMENT BY 1 [MAXVALUE n] [NOCYCLE] [NOCACHE];</code></td>
</tr>
<tr>
<td>다음 번호 / 현재 번호</td>
<td><code>s.NEXTVAL</code> / <code>s.CURRVAL</code> (세션에서 NEXTVAL을 먼저 한 번)</td>
</tr>
<tr>
<td>시퀀스 사용</td>
<td><code>INSERT INTO t VALUES (s.NEXTVAL, ...);</code></td>
</tr>
<tr>
<td>시퀀스 수정 / 삭제</td>
<td><code>ALTER SEQUENCE s ...;</code> (START WITH는 못 바꿈) / <code>DROP SEQUENCE s;</code></td>
</tr>
<tr>
<td>검색 빠르게</td>
<td><code>CREATE INDEX t_c_idx ON t (c);</code> / <code>DROP INDEX t_c_idx;</code></td>
</tr>
<tr>
<td>저장된 SELECT (가상 테이블)</td>
<td><code>CREATE OR REPLACE VIEW v AS SELECT ...;</code></td>
</tr>
<tr>
<td>뷰 조건 밖으로 바꾸기 금지</td>
<td><code>... WITH CHECK OPTION</code></td>
</tr>
<tr>
<td>뷰로 DML 금지</td>
<td><code>... WITH READ ONLY</code></td>
</tr>
<tr>
<td>별명(긴 이름 줄이기)</td>
<td><code>CREATE [PUBLIC] SYNONYM e FOR student.s_emp;</code> / <code>DROP SYNONYM e;</code></td>
</tr>
<tr>
<td>DML 때 자동 실행</td>
<td><code>CREATE OR REPLACE TRIGGER 이름 AFTER INSERT ON t FOR EACH ROW BEGIN ... END;</code></td>
</tr>
</tbody>
</table>
</div>
<p>인덱스가 쓰이지 않는 조건: 컬럼에 함수나 계산을 씌움(<code>TO_CHAR(start_date, ...)</code>, <code>salary * 12</code>), <code>LIKE &#39;%...&#39;</code>(앞이 %), <code>IS NULL</code>, <code>&lt;&gt;</code>, <code>NOT</code>.</p>
<h1 id="h-ch-14">14장 ADVANCED SQL</h1>
<h2 id="h-34">조건에 따라 다른 값 (DECODE, CASE)</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td>값이 같으면 바꾸기</td>
<td><code>DECODE(식, 값1, 결과1, 값2, 결과2, 그외)</code></td>
<td><code>DECODE(title, &#39;사원&#39;, 1, &#39;과장&#39;, 2, 0)</code></td>
</tr>
<tr>
<td>같은 값 비교 (CASE 형태)</td>
<td><code>CASE 식 WHEN 값 THEN 결과 ... ELSE 그외 END</code></td>
<td><code>CASE title WHEN &#39;사원&#39; THEN 1 ELSE 0 END</code></td>
</tr>
<tr>
<td>범위나 조건으로 나누기</td>
<td><code>CASE WHEN 조건 THEN 결과 ... ELSE 그외 END</code></td>
<td><code>CASE WHEN salary &gt;= 3000 THEN &#39;A&#39; WHEN salary &gt;= 2000 THEN &#39;B&#39; ELSE &#39;C&#39; END</code></td>
</tr>
<tr>
<td>범위를 DECODE로</td>
<td><code>DECODE(TRUNC(salary/1000), 0, &#39;E&#39;, 1, &#39;D&#39;, ...)</code></td>
<td></td>
</tr>
<tr>
<td>조건별 개수 세기</td>
<td><code>COUNT(DECODE(title, &#39;사원&#39;, 1))</code></td>
<td>그 외는 NULL이라 세지 않음</td>
</tr>
</tbody>
</table>
</div>
<p>CASE는 위에서부터 처음 맞는 WHEN 하나만 적용돼요. ELSE를 빼면 그 외는 NULL이에요.</p>
<h2 id="h-35">순위와 행↔열 바꾸기</h2>
<div class="tw"><table><thead><tr>
<th>하고 싶은 것</th>
<th>쓰는 것</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td>전체 순위</td>
<td><code>RANK() OVER (ORDER BY 컬럼 DESC)</code></td>
<td>동점이면 같은 순위, 다음 순위는 건너뜀 (1, 1, 3)</td>
</tr>
<tr>
<td>그룹 안 순위</td>
<td><code>RANK() OVER (PARTITION BY a ORDER BY b DESC)</code></td>
<td>부서별 급여 순위</td>
</tr>
<tr>
<td>행 값을 열로 펼치기</td>
<td><code>PIVOT (집계 FOR 컬럼 IN (값1, 값2, ...))</code></td>
<td>아래 예</td>
</tr>
</tbody>
</table>
</div>
<pre><code><span class="hl-kw">SELECT</span> * <span class="hl-kw">FROM</span> (<span class="hl-kw">SELECT</span> dept_id, title <span class="hl-kw">FROM</span> s_emp)
<span class="hl-kw">PIVOT</span> (<span class="hl-fn">COUNT</span>(*) <span class="hl-kw">FOR</span> title <span class="hl-kw">IN</span> (<span class="hl-str">'사원'</span>, <span class="hl-str">'과장'</span>, <span class="hl-str">'사장'</span>))
<span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> dept_id;</code></pre>
<h2 id="h-36">상위 N개 (ROWNUM)</h2>
<pre><code><span class="hl-kw">SELECT</span> *
<span class="hl-kw">FROM</span>  (<span class="hl-kw">SELECT</span> name, salary <span class="hl-kw">FROM</span> s_emp <span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> salary <span class="hl-kw">DESC</span>)
<span class="hl-kw">WHERE</span> <span class="hl-kw">ROWNUM</span> &lt;= <span class="hl-num">3</span>;</code></pre>
<ul>
<li>정렬은 인라인 뷰 안에서 먼저 해요. 바깥에서 ORDER BY를 하면 순서가 틀려요(ROWNUM은 정렬 전에 붙음).</li>
<li><code>ROWNUM = 2</code>, <code>ROWNUM &gt; 1</code>은 0행이에요. 4~6위가 필요하면 ROWNUM에 별명을 붙여 한 번 더 감싸요.</li>
</ul>
<pre><code><span class="hl-kw">SELECT</span> * <span class="hl-kw">FROM</span> (<span class="hl-kw">SELECT</span> <span class="hl-kw">ROWNUM</span> rn, a.* <span class="hl-kw">FROM</span> (<span class="hl-kw">SELECT</span> name, salary <span class="hl-kw">FROM</span> s_emp <span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> salary <span class="hl-kw">DESC</span>) a)
<span class="hl-kw">WHERE</span> rn <span class="hl-kw">BETWEEN</span> <span class="hl-num">4</span> <span class="hl-kw">AND</span> <span class="hl-num">6</span>;</code></pre>
<h1 id="h-ch-appendix">부록</h1>
<h2 id="h-38">자주 나는 에러 → 원인</h2>
<div class="tw"><table><thead><tr>
<th>에러</th>
<th>원인</th>
<th>해결</th>
</tr>
</thead>
<tbody><tr>
<td>ORA-00001</td>
<td>UNIQUE·PK 중복</td>
<td>이미 있는 값인지 확인</td>
</tr>
<tr>
<td>ORA-01400</td>
<td>NOT NULL 컬럼에 NULL</td>
<td>값 넣기</td>
</tr>
<tr>
<td>ORA-02290</td>
<td>CHECK 조건 위반</td>
<td>조건에 맞는 값</td>
</tr>
<tr>
<td>ORA-02291</td>
<td>FK: 부모에 없는 값</td>
<td>부모 테이블에 먼저 넣기</td>
</tr>
<tr>
<td>ORA-02292</td>
<td>FK: 자식이 쓰는 부모 행 삭제</td>
<td>자식 먼저 삭제 또는 ON DELETE CASCADE</td>
</tr>
<tr>
<td>ORA-02449</td>
<td>참조되는 테이블 DROP</td>
<td><code>DROP TABLE t CASCADE CONSTRAINTS</code></td>
</tr>
<tr>
<td>ORA-00937</td>
<td>GROUP BY 없이 일반 컬럼 + 그룹 함수</td>
<td>GROUP BY 추가</td>
</tr>
<tr>
<td>ORA-00979</td>
<td>SELECT 컬럼이 GROUP BY에 없음</td>
<td>GROUP BY에 추가하거나 SELECT에서 빼기</td>
</tr>
<tr>
<td>ORA-00934</td>
<td>WHERE에 그룹 함수</td>
<td>HAVING으로 옮기기</td>
</tr>
<tr>
<td>ORA-00918</td>
<td>컬럼이 애매함 (JOIN)</td>
<td><code>테이블.컬럼</code>으로</td>
</tr>
<tr>
<td>ORA-00904</td>
<td>없는 컬럼 이름 (오타, WHERE에 별명)</td>
<td>이름 확인 (commision_pct는 s 하나)</td>
</tr>
<tr>
<td>ORA-00942</td>
<td>없는 테이블 또는 권한 없음</td>
<td>이름, 스키마, 권한 확인</td>
</tr>
<tr>
<td>ORA-01427</td>
<td><code>=</code> 서브쿼리가 여러 행</td>
<td><code>IN</code>으로</td>
</tr>
<tr>
<td>ORA-00913 / 00947</td>
<td>INSERT 값 개수가 많음 / 모자람</td>
<td>컬럼 수와 값 수 맞추기</td>
</tr>
<tr>
<td>ORA-01722</td>
<td>숫자로 바꿀 수 없는 문자</td>
<td>타입과 따옴표 확인</td>
</tr>
<tr>
<td>ORA-01861</td>
<td>날짜 형식이 맞지 않음</td>
<td><code>TO_DATE(문자, &#39;형식&#39;)</code></td>
</tr>
<tr>
<td>ORA-08002</td>
<td>세션에서 NEXTVAL 전에 CURRVAL</td>
<td>NEXTVAL 먼저</td>
</tr>
<tr>
<td>ORA-01031</td>
<td>권한 부족</td>
<td>GRANT 받기</td>
</tr>
<tr>
<td>ORA-01476</td>
<td>0으로 나눔</td>
<td>CASE로 0일 때를 따로 처리</td>
</tr>
</tbody>
</table>
</div>
`;
