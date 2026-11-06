// SQL 개념 정리 탭 (HTML)
var W = window.W = window.W || {};
W.concepts = String.raw`
<h1 id="c-1">SQL 개념 정리: 교안 1~14장</h1>
<p>교안 「SQL의 정석」 1장부터 14장까지를 장별로 정리한 문서예요. 예시는 모두 실습 테이블(S_EMP, S_DEPT, S_REGION, S_CUSTOMER, SALGRADE)을 기준으로 했고, 문제 번호(예: 124번)는 실습 <a href="#problems" data-goto="problems">실습 문제</a> 탭의 번호예요. 함수나 문법을 빨리 찾을 때는 <a href="#cheatsheet" data-goto="cheatsheet">핵심 정리</a> 탭을 보세요.</p>
<div class="tw"><table><thead><tr>
<th>장</th>
<th>다루는 내용</th>
</tr>
</thead>
<tbody><tr>
<td>1장 Introduction</td>
<td>관계형 DB와 용어, SQL·SQL*Plus·PL/SQL, 기본 계정, 사용자와 권한</td>
</tr>
<tr>
<td>2장 테이블 생성과 DML</td>
<td>이름 규칙, 데이터 타입, CREATE TABLE, INSERT·UPDATE·DELETE</td>
</tr>
<tr>
<td>3장 SELECT</td>
<td>컬럼 고르기, 별명, 연결 연산자, DISTINCT, ORDER BY, WHERE 조건</td>
</tr>
<tr>
<td>4장 함수</td>
<td>문자·숫자·날짜·변환 함수, 그룹 함수, NVL</td>
</tr>
<tr>
<td>5장 GROUP BY와 HAVING</td>
<td>그룹 만들기, WHERE와 HAVING, 실행 순서</td>
</tr>
<tr>
<td>6장 JOIN과 SET 연산자</td>
<td>EQUIJOIN, 테이블 ALIAS, NON-EQUI·OUTER·SELF JOIN, UNION·INTERSECT·MINUS</td>
</tr>
<tr>
<td>7장 SUBQUERY</td>
<td>단일행·다중행·다중컬럼 서브쿼리, 인라인 뷰, 서브쿼리로 테이블 만들기</td>
</tr>
<tr>
<td>8장 CONSTRAINT</td>
<td>다섯 가지 제약조건, 컬럼 레벨과 테이블 레벨, FOREIGN KEY</td>
</tr>
<tr>
<td>9장 TRANSACTION</td>
<td>COMMIT·ROLLBACK·SAVEPOINT, 자동 COMMIT, ACID, Lock</td>
</tr>
<tr>
<td>10장 DICTIONARY</td>
<td>데이터 사전, USER_·ALL_·DBA_, 제약조건 조회</td>
</tr>
<tr>
<td>11장 DDL</td>
<td>DROP·ALTER·RENAME·TRUNCATE, 제약조건 바꾸기</td>
</tr>
<tr>
<td>12장 DCL</td>
<td>시스템 권한과 객체 권한, ROLE</td>
</tr>
<tr>
<td>13장 OBJECT</td>
<td>시퀀스, 인덱스, 뷰, 시노님</td>
</tr>
<tr>
<td>14장 ADVANCED SQL</td>
<td>NVL·DECODE·CASE, PIVOT·ROLLUP·CUBE·RANK, 고급 서브쿼리, ROWNUM, TRIGGER</td>
</tr>
</tbody>
</table>
</div>
<h1 id="c-ch-1">1장 Introduction</h1>
<h2 id="c-3">관계형 데이터베이스(RDB)란? (1.1)</h2>
<p>데이터를 <strong>표(TABLE)</strong> 형태로 저장하고, 표끼리의 <strong>관계</strong>로 연결해서 관리하는 데이터베이스예요. 1970년대 초 E.F. Codd 박사가 개념을 만들었어요.</p>
<ul>
<li>데이터는 행(row)과 열(column)로 이루어진 테이블들의 집합이에요.</li>
<li>테이블의 각 행은 다른 행과 <strong>구별되는 값</strong>(예: 사번)을 가져요.</li>
<li>데이터의 조회와 조작은 모두 <strong>SQL</strong>로 해요.</li>
<li>RDB를 관리하는 프로그램을 <strong>RDBMS</strong>(Relational DataBase Management System)라고 해요. 오라클이 대표적인 RDBMS예요.</li>
</ul>
<h2 id="c-4">꼭 알아야 할 용어 (1.2)</h2>
<p>S_DEPT 테이블로 보면 이래요.</p>
<div class="tw"><table><thead><tr>
<th>ID</th>
<th>NAME</th>
<th>REGION_ID</th>
</tr>
</thead>
<tbody><tr>
<td>101</td>
<td>총무부</td>
<td>1</td>
</tr>
<tr>
<td>102</td>
<td>영업부</td>
<td>1</td>
</tr>
<tr>
<td>110</td>
<td>기획부</td>
<td>1</td>
</tr>
</tbody>
</table>
</div>
<div class="tw"><table><thead><tr>
<th>용어</th>
<th>뜻</th>
<th>S_DEPT에서는</th>
</tr>
</thead>
<tbody><tr>
<td>테이블(Table)</td>
<td>데이터를 저장하는 기본 단위. 컬럼 1개 이상 + 행 0개 이상</td>
<td>S_DEPT 전체</td>
</tr>
<tr>
<td>행(Row)</td>
<td>한 건의 데이터. 레코드라고도 해요</td>
<td><code>101, 총무부, 1</code></td>
</tr>
<tr>
<td>열(Column)</td>
<td>한 종류의 데이터. 데이터 타입과 크기가 정해져 있어요</td>
<td>NAME 열</td>
</tr>
<tr>
<td>필드(Field)</td>
<td>행과 열이 만나는 칸. 값이 없으면 <strong>NULL</strong></td>
<td>101행의 NAME = &#39;총무부&#39;</td>
</tr>
<tr>
<td>Primary Key (PK)</td>
<td>각 행을 유일하게 구별하는 컬럼. NULL 불가</td>
<td>ID</td>
</tr>
<tr>
<td>Foreign Key (FK)</td>
<td>다른(또는 같은) 테이블의 값을 참조하는 컬럼</td>
<td>REGION_ID → S_REGION.ID</td>
</tr>
</tbody>
</table>
</div>
<p><strong>NULL</strong>은 0이나 빈 문자가 아니라 <strong>값이 없음</strong>(모름)을 뜻해요. 이 차이가 뒤에서 계속 중요해져요(3장 IS NULL, 4장 그룹 함수, 14장 NVL·NOT IN).</p>
<p>데이터베이스에는 테이블 말고도 뷰, 시퀀스, 인덱스, 시노님, 프로그램 유닛 같은 <strong>오브젝트</strong>가 있어요. 자세한 내용은 13장에서 다뤄요.</p>
<h2 id="c-5">SQL, SQL*Plus, PL/SQL (1.3)</h2>
<div class="tw"><table><thead><tr>
<th>이름</th>
<th>무엇인가</th>
</tr>
</thead>
<tbody><tr>
<td>SQL</td>
<td>DB 서버에 명령(조회, 수정 등)을 내리는 <strong>표준 언어</strong>. 어느 RDBMS에서든 써요</td>
</tr>
<tr>
<td>SQL*Plus</td>
<td>SQL을 입력하고 실행하는 오라클의 <strong>실행 도구</strong>(프로그램)</td>
</tr>
<tr>
<td>PL/SQL</td>
<td>SQL에 IF·반복문 같은 프로그램 로직을 더한 <strong>오라클 전용 언어</strong>. 트리거(14.12)가 이것으로 만들어져요</td>
</tr>
</tbody>
</table>
</div>
<h2 id="c-6">오라클 기본 계정 (1.4)</h2>
<div class="tw"><table><thead><tr>
<th>계정</th>
<th>용도</th>
</tr>
</thead>
<tbody><tr>
<td>SYS</td>
<td>최고 관리자(DBA). DB 운영에 필요한 기본 테이블과 데이터 사전의 주인</td>
</tr>
<tr>
<td>SYSTEM</td>
<td>DB 관리용 DBA 계정. 모든 시스템 권한을 가짐</td>
</tr>
<tr>
<td>SCOTT, HR</td>
<td>실습용 연습 계정</td>
</tr>
</tbody>
</table>
</div>
<p>SYS와 SYSTEM은 <strong>관리용으로만</strong> 쓰고, 여기에 테이블을 만들거나 일반 데이터를 넣으면 안 돼요. 그래서 실습용 student 계정을 따로 만들었어요.</p>
<h2 id="c-7">사용자 만들고 권한 주기 (1.5~1.8)</h2>
<p>SYSTEM 계정으로 접속해서 실행해요.</p>
<pre><code><span class="hl-com">-- ① 사용자 만들기</span>
<span class="hl-kw">CREATE</span> <span class="hl-kw">USER</span> student <span class="hl-kw">IDENTIFIED</span> <span class="hl-kw">BY</span> <span class="hl-num">1234</span>
  <span class="hl-kw">DEFAULT</span> TABLESPACE users
  TEMPORARY TABLESPACE temp;

<span class="hl-com">-- ② 권한 주기: 만든 직후에는 접속 권한(CREATE SESSION)도 없어서 로그인이 안 됨</span>
<span class="hl-kw">GRANT</span> connect, resource <span class="hl-kw">TO</span> student;

<span class="hl-com">-- ③ 권한 빼기</span>
<span class="hl-kw">REVOKE</span> resource <span class="hl-kw">FROM</span> student;</code></pre>
<ul>
<li><strong>TABLESPACE</strong>: 오라클이 데이터를 저장하는 논리적인 공간이에요. 실제로는 하나 이상의 데이터 파일로 이루어져 있어요. 임시 TABLESPACE를 지정하지 않으면 SYSTEM TABLESPACE를 쓰게 돼서, 따로 지정하는 것이 좋아요.</li>
<li><strong>권한(Privilege)</strong>: 특정 SQL을 실행하거나 특정 객체에 접근할 수 있는 권리예요. 예: <code>CREATE SESSION</code>(접속), <code>CREATE VIEW</code>(뷰 생성), <code>ALTER USER</code>, <code>DROP USER</code></li>
<li><strong>ROLE</strong>: 권한을 묶어 둔 꾸러미예요. <code>connect</code>, <code>resource</code>가 오라클이 미리 만들어 둔 ROLE이에요.</li>
<li>권한과 ROLE은 12장(DCL)에서 자세히 다뤄요.</li>
</ul>
<h1 id="c-ch-2">2장 테이블 생성과 데이터 조작(DML)</h1>
<h2 id="c-9">이름 규칙 (2.1)</h2>
<p>테이블과 컬럼 이름은 아래 규칙을 지켜야 해요.</p>
<ul>
<li><strong>문자로 시작</strong>하고, 최대 30자까지</li>
<li>A-Z, a-z, 0-9, <code>_</code>, <code>$</code>, <code>#</code>만 사용</li>
<li>같은 사용자가 가진 다른 객체와 이름이 겹치면 안 됨</li>
<li><code>SELECT</code>, <code>TABLE</code> 같은 예약어는 쓸 수 없음</li>
</ul>
<h2 id="c-10">데이터 타입 (2.2)</h2>
<div class="tw"><table><thead><tr>
<th>타입</th>
<th>뜻</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td><code>VARCHAR2(n)</code></td>
<td><strong>가변</strong> 길이 문자. 넣은 글자만큼만 공간을 씀</td>
<td>이름, 부서명</td>
</tr>
<tr>
<td><code>CHAR(n)</code></td>
<td><strong>고정</strong> 길이 문자. 모자라는 자리를 공백으로 채움</td>
<td>성별(&#39;M&#39;/&#39;F&#39;)처럼 길이가 항상 같은 값</td>
</tr>
<tr>
<td><code>NUMBER</code></td>
<td>숫자 (38자리까지)</td>
<td></td>
</tr>
<tr>
<td><code>NUMBER(p, s)</code></td>
<td>전체 p자리, 그중 소수점 아래 s자리</td>
<td><code>NUMBER(7,2)</code> → 최대 99999.99</td>
</tr>
<tr>
<td><code>DATE</code></td>
<td>날짜와 <strong>시간</strong>까지 함께 저장</td>
<td>입사일</td>
</tr>
<tr>
<td><code>LONG</code></td>
<td>매우 긴 문자(2GB). 테이블당 1개만</td>
<td></td>
</tr>
<tr>
<td><code>RAW</code>, <code>LONG RAW</code></td>
<td>이진 데이터(그림 등)</td>
<td></td>
</tr>
</tbody>
</table>
</div>
<ul>
<li><code>CHAR(10)</code>에 &#39;abc&#39;를 넣으면 &#39;abc       &#39;(뒤에 공백 7칸)로 저장돼요. 그래서 일반적인 문자는 VARCHAR2를 써요.</li>
<li>최대 길이는 오라클 버전마다 달라요. 교안의 VARCHAR2 2000, CHAR 255는 예전 기준이고, 요즘은 VARCHAR2 4000바이트, CHAR 2000바이트예요.</li>
<li>DATE에는 시간도 들어 있어서, 날짜 범위를 조회할 때는 71번 문제처럼 <code>&gt;= 시작일 AND &lt; 다음날</code>로 쓰는 게 안전해요.</li>
</ul>
<h2 id="c-11">테이블 만들기: CREATE TABLE (2.3)</h2>
<pre><code><span class="hl-kw">CREATE</span> <span class="hl-kw">TABLE</span> [스키마.]테이블명 (
  컬럼명<span class="hl-num">1</span>  데이터타입 [<span class="hl-kw">DEFAULT</span> 기본값],
  컬럼명<span class="hl-num">2</span>  데이터타입 [<span class="hl-kw">DEFAULT</span> 기본값],
  ...
);</code></pre>
<ul>
<li><strong>스키마</strong>: 테이블의 주인(사용자)이에요. 실습 스크립트의 <code>student.S_EMP</code>에서 <code>student</code>가 스키마예요. 내 테이블이면 생략해요.</li>
<li><strong>DEFAULT</strong>: INSERT할 때 값을 주지 않으면 자동으로 들어갈 값이에요.</li>
</ul>
<p>교안 예제1을 SQL로 쓰면 이래요.</p>
<pre><code><span class="hl-kw">CREATE</span> <span class="hl-kw">TABLE</span> <span class="hl-fn">emp_ex</span> (
  id        <span class="hl-kw">NUMBER</span>(<span class="hl-num">5</span>),
  name      <span class="hl-kw">CHAR</span>(<span class="hl-num">25</span>),
  salary    <span class="hl-kw">NUMBER</span>(<span class="hl-num">7</span>,<span class="hl-num">2</span>),
  title     <span class="hl-kw">CHAR</span>(<span class="hl-num">25</span>)  <span class="hl-kw">DEFAULT</span> <span class="hl-str">'사원'</span>,
  in_date   <span class="hl-kw">DATE</span>      <span class="hl-kw">DEFAULT</span> SYSDATE,
  dept_name <span class="hl-kw">CHAR</span>(<span class="hl-num">25</span>)
);</code></pre>
<h2 id="c-12">SQL 명령어의 분류 (2.4)</h2>
<div class="tw"><table><thead><tr>
<th>분류</th>
<th>명령어</th>
<th>하는 일</th>
</tr>
</thead>
<tbody><tr>
<td>검색(QUERY)</td>
<td>SELECT</td>
<td>데이터 조회. 가장 많이 씀</td>
</tr>
<tr>
<td>DML (조작어)</td>
<td>INSERT, UPDATE, DELETE</td>
<td>행을 넣고, 고치고, 지움</td>
</tr>
<tr>
<td>DDL (정의어)</td>
<td>CREATE, ALTER, DROP, RENAME, TRUNCATE, COMMENT</td>
<td>테이블 같은 구조를 만들고 바꿈 (11장)</td>
</tr>
<tr>
<td>TCL (트랜잭션)</td>
<td>COMMIT, ROLLBACK, SAVEPOINT</td>
<td>DML 결과를 확정하거나 취소 (9장)</td>
</tr>
<tr>
<td>DCL (제어어)</td>
<td>GRANT, REVOKE</td>
<td>권한을 주고 빼앗음 (12장)</td>
</tr>
</tbody>
</table>
</div>
<h2 id="c-13">데이터 넣기: INSERT (2.6)</h2>
<pre><code><span class="hl-com">-- 컬럼을 지정해서 넣기 (지정하지 않은 컬럼은 DEFAULT 또는 NULL)</span>
<span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> <span class="hl-fn">emp_ex</span> (id, name, salary)
<span class="hl-kw">VALUES</span> (<span class="hl-num">1</span>, <span class="hl-str">'홍길동'</span>, <span class="hl-num">2000</span>);

<span class="hl-com">-- 모든 컬럼에 넣을 때는 컬럼 목록 생략 가능 (테이블의 컬럼 순서대로)</span>
<span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> emp_ex
<span class="hl-kw">VALUES</span> (<span class="hl-num">2</span>, <span class="hl-str">'김철수'</span>, <span class="hl-num">3000</span>, <span class="hl-str">'과장'</span>, <span class="hl-fn">TO_DATE</span>(<span class="hl-str">'2016-03-02'</span>, <span class="hl-str">'YYYY-MM-DD'</span>), <span class="hl-str">'기획부'</span>);</code></pre>
<ul>
<li>INSERT 한 문장은 <strong>한 행</strong>을 넣어요. (여러 행을 한 번에 넣는 방법은 7.9의 <code>INSERT ... SELECT</code>)</li>
<li>문자와 날짜는 <strong>작은따옴표</strong>로 감싸요. 숫자는 따옴표 없이 써요.</li>
<li>위 첫 번째 INSERT에서는 title에 &#39;사원&#39;, in_date에 오늘 날짜가 DEFAULT로 들어가고, dept_name은 NULL이 돼요.</li>
</ul>
<h2 id="c-14">데이터 고치기: UPDATE (2.7)</h2>
<pre><code><span class="hl-kw">UPDATE</span> emp_ex
<span class="hl-kw">SET</span> salary = <span class="hl-num">2500</span>, title = <span class="hl-str">'주임'</span>
<span class="hl-kw">WHERE</span> id = <span class="hl-num">1</span>;</code></pre>
<p><strong>WHERE를 빼면 모든 행이 바뀌어요.</strong> UPDATE와 DELETE를 쓸 때는 실행 전에 같은 WHERE로 SELECT를 먼저 해서, 바뀔 행이 맞는지 확인하는 습관을 들이세요.</p>
<h2 id="c-15">데이터 지우기: DELETE (2.8)</h2>
<pre><code><span class="hl-kw">DELETE</span> <span class="hl-kw">FROM</span> emp_ex <span class="hl-kw">WHERE</span> id = <span class="hl-num">2</span>;   <span class="hl-com">-- 한 행 삭제</span>
<span class="hl-kw">DELETE</span> <span class="hl-kw">FROM</span> emp_ex;                <span class="hl-com">-- 모든 행 삭제 (테이블은 남음)</span></code></pre>
<p>DELETE는 <strong>행</strong>을 지우고 테이블 구조는 남겨요. DML이라 COMMIT 전이면 ROLLBACK으로 되돌릴 수 있어요(9장). TRUNCATE·DROP과의 차이는 11장에서 비교해요.</p>
<h1 id="c-ch-3">3장 데이터 검색 (SELECT)</h1>
<h2 id="c-17">기본 형태</h2>
<pre><code><span class="hl-kw">SELECT</span> [<span class="hl-kw">DISTINCT</span>] 컬럼, 식, ...      <span class="hl-com">-- 무엇을 보여줄지</span>
<span class="hl-kw">FROM</span>   테이블                          <span class="hl-com">-- 어디서</span>
[<span class="hl-kw">WHERE</span>  조건]                          <span class="hl-com">-- 어떤 행만</span>
[<span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> 컬럼 [<span class="hl-kw">ASC</span>|<span class="hl-kw">DESC</span>]];            <span class="hl-com">-- 어떤 순서로</span></code></pre>
<ul>
<li><code>SELECT *</code>: 모든 컬럼을 테이블에 정의된 순서대로 보여줘요.</li>
<li><code>SELECT name, salary</code>: 원하는 컬럼만, 쓴 순서대로 보여줘요.</li>
</ul>
<h2 id="c-18">산술식과 NULL</h2>
<pre><code><span class="hl-kw">SELECT</span> name, salary, salary * <span class="hl-num">12</span> <span class="hl-kw">AS</span> 연봉
<span class="hl-kw">FROM</span>   s_emp;</code></pre>
<ul>
<li><code>+ - * /</code>를 쓸 수 있고, 곱셈·나눗셈이 덧셈·뺄셈보다 먼저 계산돼요. 순서를 바꾸려면 괄호를 써요.</li>
<li><strong>NULL이 섞인 계산은 결과도 NULL</strong>이에요. 예를 들어 <code>salary * commision_pct</code>에서 commision_pct가 NULL이면 결과가 NULL이 돼요. 0으로 바꿔서 계산하려면 4장의 <code>NVL(commision_pct, 0)</code>을 써요.</li>
<li>실습 테이블의 커미션 컬럼 이름은 스펠링이 하나 빠진 <code>COMMISION_PCT</code>예요. commission으로 쓰면 ORA-00904(잘못된 식별자) 에러가 나요.</li>
</ul>
<h2 id="c-19">별명(ALIAS)</h2>
<pre><code><span class="hl-kw">SELECT</span> name <span class="hl-kw">AS</span> 이름, salary * <span class="hl-num">12</span> 연봉, salary &quot;Monthly Salary&quot;
<span class="hl-kw">FROM</span>   s_emp;</code></pre>
<ul>
<li>컬럼 뒤에 이름을 붙이면 결과의 머리글이 바뀌어요. <code>AS</code>는 써도 되고 빼도 돼요.</li>
<li>띄어쓰기·특수문자가 있거나 대소문자를 그대로 살리고 싶으면 <strong>큰따옴표</strong>로 감싸요. (작은따옴표는 문자 값에만 써요.)</li>
<li>별명은 ORDER BY에서는 쓸 수 있지만, WHERE에서는 쓸 수 없어요. (실행 순서상 WHERE가 SELECT보다 먼저라서예요.)</li>
</ul>
<h2 id="c-20">문자 연결: ||</h2>
<pre><code><span class="hl-kw">SELECT</span> name || <span class="hl-str">' '</span> || title <span class="hl-kw">AS</span> 이름직책
<span class="hl-kw">FROM</span>   s_emp;
<span class="hl-com">-- 결과 예: 박구곤 사원</span></code></pre>
<p>두 값을 이어 붙여 하나의 컬럼으로 보여줘요. 중간에 넣을 글자는 작은따옴표로 써요.</p>
<h2 id="c-21">중복 제거: DISTINCT</h2>
<pre><code><span class="hl-kw">SELECT</span> <span class="hl-kw">DISTINCT</span> title <span class="hl-kw">FROM</span> s_emp;            <span class="hl-com">-- 직책 종류만 한 번씩</span>
<span class="hl-kw">SELECT</span> <span class="hl-kw">DISTINCT</span> dept_id, title <span class="hl-kw">FROM</span> s_emp;   <span class="hl-com">-- (부서, 직책) 조합이 중복인 것만 제거</span></code></pre>
<p>DISTINCT는 SELECT 바로 뒤에 한 번만 쓰고, 뒤에 오는 <strong>컬럼 전체의 조합</strong>에 적용돼요.</p>
<h2 id="c-22">정렬: ORDER BY</h2>
<pre><code><span class="hl-kw">SELECT</span> name, dept_id, salary
<span class="hl-kw">FROM</span>   s_emp
<span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> dept_id <span class="hl-kw">ASC</span>, salary <span class="hl-kw">DESC</span>;   <span class="hl-com">-- 부서 오름차순, 같은 부서 안에서는 급여 내림차순</span></code></pre>
<ul>
<li>기본값은 <code>ASC</code>(오름차순)라서 생략할 수 있어요. 내림차순은 <code>DESC</code>를 써요.</li>
<li>여러 컬럼을 쓰면 앞 컬럼이 같을 때 다음 컬럼으로 정렬해요.</li>
<li>컬럼 이름 대신 <strong>별명</strong>이나 SELECT 목록의 <strong>위치 번호</strong>(<code>ORDER BY 3</code>)도 쓸 수 있어요.</li>
<li>ORDER BY는 항상 문장의 <strong>맨 마지막</strong>에 와요.</li>
<li>오름차순에서 NULL은 맨 뒤에 나와요(가장 큰 값처럼 취급).</li>
</ul>
<h2 id="c-23">조건 걸기: WHERE</h2>
<pre><code><span class="hl-kw">SELECT</span> name, salary
<span class="hl-kw">FROM</span>   s_emp
<span class="hl-kw">WHERE</span>  salary &gt;= <span class="hl-num">1500</span>;</code></pre>
<div class="tw"><table><thead><tr>
<th>연산자</th>
<th>뜻</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td><code>=</code></td>
<td>같다</td>
<td><code>dept_id = 110</code></td>
</tr>
<tr>
<td><code>!=</code> <code>&lt;&gt;</code> <code>^=</code></td>
<td>같지 않다 (셋 다 같은 뜻)</td>
<td><code>title &lt;&gt; &#39;사원&#39;</code></td>
</tr>
<tr>
<td><code>&gt;</code> <code>&gt;=</code> <code>&lt;</code> <code>&lt;=</code></td>
<td>크다·작다</td>
<td><code>salary &gt;= 1500</code></td>
</tr>
<tr>
<td><code>BETWEEN a AND b</code></td>
<td>a 이상 b 이하 (양 끝 포함)</td>
<td><code>salary BETWEEN 1000 AND 2000</code></td>
</tr>
<tr>
<td><code>IN (a, b, ...)</code></td>
<td>목록 중 하나와 같다</td>
<td><code>dept_id IN (110, 113)</code></td>
</tr>
<tr>
<td><code>LIKE</code></td>
<td>문자 패턴</td>
<td><code>name LIKE &#39;김%&#39;</code></td>
</tr>
<tr>
<td><code>IS NULL</code></td>
<td>값이 없다</td>
<td><code>manager_id IS NULL</code></td>
</tr>
</tbody>
</table>
</div>
<ul>
<li><strong>문자와 날짜는 작은따옴표</strong>로 감싸고, 문자 비교는 대소문자를 구분해요.</li>
<li>BETWEEN은 작은 값을 앞에 써야 해요. <code>BETWEEN 2000 AND 1000</code>은 아무 행도 나오지 않아요.</li>
<li>NULL은 <code>= NULL</code>로 찾을 수 없고 반드시 <code>IS NULL</code>로 찾아요.</li>
</ul>
<h2 id="c-24">LIKE 패턴</h2>
<div class="tw"><table><thead><tr>
<th>기호</th>
<th>뜻</th>
<th>예</th>
<th>맞는 값</th>
</tr>
</thead>
<tbody><tr>
<td><code>%</code></td>
<td>0글자 이상 아무 글자</td>
<td><code>&#39;김%&#39;</code></td>
<td>김, 김철수, 김수한무</td>
</tr>
<tr>
<td><code>_</code></td>
<td>정확히 1글자</td>
<td><code>&#39;_명%&#39;</code></td>
<td>둘째 글자가 &#39;명&#39;</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li><code>&#39;%부장&#39;</code>은 &#39;부장&#39;으로 끝나는 값, <code>&#39;%영%&#39;</code>은 &#39;영&#39;이 들어간 값이에요.</li>
<li><code>%</code>나 <code>_</code> 문자 자체를 찾으려면(교안 밖) <code>ESCAPE</code>를 써요: <code>WHERE name LIKE &#39;%\_%&#39; ESCAPE &#39;\&#39;</code></li>
</ul>
<h2 id="c-25">부정형</h2>
<p><code>NOT BETWEEN a AND b</code>, <code>NOT IN (...)</code>, <code>NOT LIKE &#39;...&#39;</code>, <code>IS NOT NULL</code>처럼 앞에 NOT을 붙여요. (<code>NOT IN</code> 목록에 NULL이 섞이면 결과가 0행이 되는 함정은 13장에서 다뤄요.)</p>
<h2 id="c-26">조건 여러 개: AND, OR와 우선순위</h2>
<p>우선순위는 <strong>비교 연산자 → NOT → AND → OR</strong> 순서예요. AND가 OR보다 먼저 묶여요.</p>
<pre><code><span class="hl-com">-- 의도: 110 또는 113 부서의 사원 중 급여 1000 이상</span>
<span class="hl-kw">WHERE</span> dept_id = <span class="hl-num">110</span> <span class="hl-kw">OR</span> dept_id = <span class="hl-num">113</span> <span class="hl-kw">AND</span> salary &gt;= <span class="hl-num">1000</span>
<span class="hl-com">-- 실제 해석: dept_id = 110 OR (dept_id = 113 AND salary &gt;= 1000)</span>
<span class="hl-com">--          → 110 부서는 급여와 상관없이 모두 나옴</span>

<span class="hl-kw">WHERE</span> (dept_id = <span class="hl-num">110</span> <span class="hl-kw">OR</span> dept_id = <span class="hl-num">113</span>) <span class="hl-kw">AND</span> salary &gt;= <span class="hl-num">1000</span>   <span class="hl-com">-- 의도대로</span></code></pre>
<p>AND와 OR가 섞이면 <strong>괄호를 쳐서</strong> 뜻을 분명히 하는 게 안전해요.</p>
<h2 id="c-27">날짜 비교</h2>
<pre><code><span class="hl-kw">WHERE</span> start_date &gt;= <span class="hl-fn">TO_DATE</span>(<span class="hl-str">'2016-01-01'</span>, <span class="hl-str">'YYYY-MM-DD'</span>)
  <span class="hl-kw">AND</span> start_date &lt;  <span class="hl-fn">TO_DATE</span>(<span class="hl-str">'2017-01-01'</span>, <span class="hl-str">'YYYY-MM-DD'</span>)</code></pre>
<ul>
<li>문자 &#39;2016-01-01&#39;을 그냥 쓰면 접속 환경의 날짜 형식(NLS_DATE_FORMAT)에 따라 해석이 달라질 수 있어요. <code>TO_DATE</code>로 형식을 지정하는 게 안전해요.</li>
<li>DATE에는 시간도 있어서 <code>&lt;= &#39;2016-12-31&#39;</code>이라고 쓰면 12월 31일 0시 이후 데이터가 빠질 수 있어요. 그래서 <strong>다음 날 미만</strong>(<code>&lt; 2017-01-01</code>)으로 써요.</li>
</ul>
<h1 id="c-ch-4">4장 함수</h1>
<h2 id="c-29">단일행 함수 vs 그룹 함수</h2>
<div class="tw"><table><thead><tr>
<th>구분</th>
<th>뜻</th>
<th>결과 행 수</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td>단일행 함수</td>
<td>행 하나씩 받아서 값 하나를 돌려줌</td>
<td>입력 행 수와 같음</td>
<td>UPPER, SUBSTR, ROUND, TO_CHAR, NVL</td>
</tr>
<tr>
<td>그룹(복수행) 함수</td>
<td>여러 행을 모아 값 하나를 돌려줌</td>
<td>그룹 하나당 1행</td>
<td>SUM, AVG, COUNT, MAX, MIN</td>
</tr>
</tbody>
</table>
</div>
<p>단일행 함수는 SELECT, WHERE, ORDER BY 어디서나 쓸 수 있어요. 연습용으로 테이블 없이 결과만 보고 싶을 때는 1행짜리 테이블 <code>DUAL</code>을 써요: <code>SELECT UPPER(&#39;abc&#39;) FROM dual;</code></p>
<h2 id="c-30">문자 함수</h2>
<div class="tw"><table><thead><tr>
<th>함수</th>
<th>하는 일</th>
<th>예 → 결과</th>
</tr>
</thead>
<tbody><tr>
<td><code>UPPER(s)</code></td>
<td>모두 대문자</td>
<td><code>UPPER(&#39;sql&#39;)</code> → SQL</td>
</tr>
<tr>
<td><code>LOWER(s)</code></td>
<td>모두 소문자</td>
<td><code>LOWER(&#39;SQL&#39;)</code> → sql</td>
</tr>
<tr>
<td><code>INITCAP(s)</code></td>
<td>단어 첫 글자만 대문자</td>
<td><code>INITCAP(&#39;oracle sql&#39;)</code> → Oracle Sql</td>
</tr>
<tr>
<td><code>CONCAT(a, b)</code></td>
<td>두 문자 연결 (<code>||</code>와 같음, 인자 2개만)</td>
<td><code>CONCAT(&#39;홍&#39;, &#39;길동&#39;)</code> → 홍길동</td>
</tr>
<tr>
<td><code>SUBSTR(s, 시작, 길이)</code></td>
<td>시작 위치부터 길이만큼 자름</td>
<td><code>SUBSTR(&#39;ABCDEF&#39;, 2, 3)</code> → BCD</td>
</tr>
<tr>
<td></td>
<td>시작이 음수면 뒤에서부터 셈</td>
<td><code>SUBSTR(&#39;ABCDEF&#39;, -2)</code> → EF</td>
</tr>
<tr>
<td><code>LENGTH(s)</code></td>
<td>글자 수</td>
<td><code>LENGTH(&#39;홍길동&#39;)</code> → 3</td>
</tr>
<tr>
<td><code>INSTR(s, 찾을문자)</code></td>
<td>처음 나오는 위치 (없으면 0) · 교안 밖</td>
<td><code>INSTR(&#39;ABCABC&#39;, &#39;C&#39;)</code> → 3</td>
</tr>
<tr>
<td><code>LPAD(s, n, &#39;문자&#39;)</code></td>
<td>전체 n칸이 되도록 왼쪽을 채움</td>
<td><code>LPAD(&#39;홍길동&#39;, 10, &#39;*&#39;)</code> → ****홍길동</td>
</tr>
<tr>
<td><code>RPAD(s, n, &#39;문자&#39;)</code></td>
<td>오른쪽을 채움</td>
<td><code>RPAD(&#39;AB&#39;, 5, &#39;-&#39;)</code> → AB---</td>
</tr>
<tr>
<td><code>LTRIM(s, &#39;문자&#39;)</code></td>
<td>왼쪽에서 그 문자를 연속으로 제거</td>
<td><code>LTRIM(&#39;XXAXBA&#39;, &#39;X&#39;)</code> → AXBA</td>
</tr>
<tr>
<td><code>RTRIM(s, &#39;문자&#39;)</code></td>
<td>오른쪽에서 제거</td>
<td><code>RTRIM(&#39;ABXX&#39;, &#39;X&#39;)</code> → AB</td>
</tr>
<tr>
<td><code>TRIM(s)</code></td>
<td>양쪽 공백 제거 · 교안 밖</td>
<td><code>TRIM(&#39;  A  &#39;)</code> → A</td>
</tr>
<tr>
<td><code>REPLACE(s, a, b)</code></td>
<td>문자열 a를 통째로 b로 바꿈</td>
<td><code>REPLACE(&#39;JACK&#39;, &#39;J&#39;, &#39;BL&#39;)</code> → BLACK</td>
</tr>
<tr>
<td><code>TRANSLATE(s, a, b)</code></td>
<td>a의 각 글자를 b의 같은 위치 글자로 1:1 바꿈</td>
<td><code>TRANSLATE(&#39;ABC&#39;, &#39;AB&#39;, &#39;XY&#39;)</code> → XYC</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li><code>LPAD(&#39;홍길동&#39;, 10, &#39;*&#39;)</code>에서 한글은 화면상 2칸으로 계산돼서, 교안 결과처럼 별이 4개 붙어요. (환경에 따라 다를 수 있어요.)</li>
<li>LTRIM은 왼쪽에 <strong>연속된</strong> X만 지워요. &#39;XXAXBA&#39;에서 앞의 XX만 지워지고, A 뒤의 X는 남아요.</li>
<li>REPLACE는 <strong>문자열 단위</strong>, TRANSLATE는 <strong>글자 하나씩 1:1</strong>로 바꿔요. <code>REPLACE(&#39;ABC&#39;, &#39;AB&#39;, &#39;XY&#39;)</code>도 XYC지만, <code>TRANSLATE(&#39;BAD&#39;, &#39;AB&#39;, &#39;XY&#39;)</code>는 YXD(A→X, B→Y 각각)이고 REPLACE로는 &#39;AB&#39;가 없어서 BAD 그대로예요.</li>
</ul>
<h2 id="c-31">숫자 함수</h2>
<div class="tw"><table><thead><tr>
<th>함수</th>
<th>하는 일</th>
<th>예 → 결과</th>
</tr>
</thead>
<tbody><tr>
<td><code>ROUND(n, 자리)</code></td>
<td>반올림</td>
<td><code>ROUND(35.735, 2)</code> → 35.74</td>
</tr>
<tr>
<td></td>
<td>자리가 음수면 정수 부분에서</td>
<td><code>ROUND(1250, -2)</code> → 1300</td>
</tr>
<tr>
<td><code>TRUNC(n, 자리)</code></td>
<td>버림</td>
<td><code>TRUNC(35.735, 2)</code> → 35.73</td>
</tr>
<tr>
<td><code>MOD(a, b)</code></td>
<td>a를 b로 나눈 나머지</td>
<td><code>MOD(7, 2)</code> → 1</td>
</tr>
<tr>
<td><code>POWER(a, b)</code></td>
<td>a의 b제곱</td>
<td><code>POWER(2, 3)</code> → 8</td>
</tr>
<tr>
<td><code>SQRT(n)</code></td>
<td>제곱근</td>
<td><code>SQRT(16)</code> → 4</td>
</tr>
<tr>
<td><code>SIGN(n)</code></td>
<td>양수 1, 0이면 0, 음수 -1</td>
<td><code>SIGN(-5)</code> → -1</td>
</tr>
<tr>
<td><code>ABS(n)</code></td>
<td>절댓값 · 교안 밖</td>
<td><code>ABS(-5)</code> → 5</td>
</tr>
<tr>
<td><code>CEIL(n)</code> / <code>FLOOR(n)</code></td>
<td>올림 / 내림 정수 · 교안 밖</td>
<td><code>CEIL(3.1)</code> → 4, <code>FLOOR(3.9)</code> → 3</td>
</tr>
<tr>
<td><code>CHR(n)</code></td>
<td>코드 번호의 문자</td>
<td><code>CHR(65)</code> → A</td>
</tr>
</tbody>
</table>
</div>
<p>자리를 생략하면 0이라서 정수로 만들어요: <code>ROUND(35.735)</code> → 36, <code>TRUNC(35.735)</code> → 35.</p>
<h2 id="c-32">날짜 함수</h2>
<div class="tw"><table><thead><tr>
<th>함수</th>
<th>하는 일</th>
<th>예 → 결과</th>
</tr>
</thead>
<tbody><tr>
<td><code>SYSDATE</code></td>
<td>지금 날짜와 시간 (괄호 없음)</td>
<td><code>SELECT SYSDATE FROM dual;</code></td>
</tr>
<tr>
<td><code>ADD_MONTHS(d, n)</code></td>
<td>n개월 더하기 (음수면 빼기)</td>
<td><code>ADD_MONTHS(&#39;2016-01-31&#39;, 1)</code> → 2016-02-29</td>
</tr>
<tr>
<td><code>MONTHS_BETWEEN(d1, d2)</code></td>
<td>d1 − d2의 개월 수</td>
<td><code>MONTHS_BETWEEN(&#39;2016-03-01&#39;, &#39;2016-01-01&#39;)</code> → 2</td>
</tr>
<tr>
<td><code>LAST_DAY(d)</code></td>
<td>그 달의 마지막 날</td>
<td><code>LAST_DAY(&#39;2016-02-10&#39;)</code> → 2016-02-29</td>
</tr>
<tr>
<td><code>NEXT_DAY(d, &#39;요일&#39;)</code></td>
<td>d 다음에 오는 그 요일 · 교안 밖</td>
<td><code>NEXT_DAY(SYSDATE, &#39;월요일&#39;)</code></td>
</tr>
<tr>
<td><code>ROUND(d, &#39;MONTH&#39;)</code></td>
<td>월 단위 반올림 (16일부터 다음 달 1일)</td>
<td><code>ROUND(&#39;2016-07-16&#39;, &#39;MONTH&#39;)</code> → 2016-08-01</td>
</tr>
<tr>
<td><code>ROUND(d, &#39;YEAR&#39;)</code></td>
<td>년 단위 반올림 (7월부터 다음 해)</td>
<td><code>ROUND(&#39;2016-07-01&#39;, &#39;YEAR&#39;)</code> → 2017-01-01</td>
</tr>
<tr>
<td><code>TRUNC(d, &#39;MONTH&#39;)</code></td>
<td>그 달 1일로 버림</td>
<td><code>TRUNC(&#39;2016-07-16&#39;, &#39;MONTH&#39;)</code> → 2016-07-01</td>
</tr>
<tr>
<td><code>TRUNC(d)</code></td>
<td>시간을 버리고 날짜만</td>
<td><code>TRUNC(SYSDATE)</code> → 오늘 0시</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>위 예의 &#39;2016-01-31&#39; 같은 문자는 설명을 위해 줄여 쓴 것이고, 실제로는 <code>TO_DATE(&#39;2016-01-31&#39;, &#39;YYYY-MM-DD&#39;)</code>처럼 쓰는 게 안전해요.</li>
<li><strong>MONTHS_BETWEEN은 인자 순서</strong>가 중요해요. 늦은 날짜를 앞에 쓰면 양수, 반대면 음수가 나와요. 남는 일수는 소수로 나오므로 보통 ROUND나 TRUNC를 같이 써요. (근속 개월: <code>TRUNC(MONTHS_BETWEEN(SYSDATE, start_date))</code>)</li>
</ul>
<p><strong>날짜 산술</strong></p>
<div class="tw"><table><thead><tr>
<th>식</th>
<th>결과</th>
</tr>
</thead>
<tbody><tr>
<td>날짜 + 숫자</td>
<td>그만큼 <strong>일수</strong>를 더한 날짜 (<code>SYSDATE + 7</code> → 1주 뒤)</td>
</tr>
<tr>
<td>날짜 − 숫자</td>
<td>그만큼 빼을 날짜</td>
</tr>
<tr>
<td>날짜 − 날짜</td>
<td>두 날 사이 <strong>일수</strong> (시간 때문에 소수가 나올 수 있음)</td>
</tr>
<tr>
<td>날짜 + 숫자/24</td>
<td>시간 더하기 (<code>SYSDATE + 3/24</code> → 3시간 뒤)</td>
</tr>
</tbody>
</table>
</div>
<p>날짜 + 날짜는 뜻이 없어서 에러예요.</p>
<h2 id="c-33">변환 함수</h2>
<div class="tw"><table><thead><tr>
<th>함수</th>
<th>방향</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td><code>TO_CHAR(날짜, &#39;형식&#39;)</code></td>
<td>날짜 → 문자</td>
<td><code>TO_CHAR(SYSDATE, &#39;YYYY-MM-DD&#39;)</code></td>
</tr>
<tr>
<td><code>TO_CHAR(숫자, &#39;형식&#39;)</code></td>
<td>숫자 → 문자</td>
<td><code>TO_CHAR(1234567, &#39;9,999,999&#39;)</code> → 1,234,567</td>
</tr>
<tr>
<td><code>TO_DATE(&#39;문자&#39;, &#39;형식&#39;)</code></td>
<td>문자 → 날짜</td>
<td><code>TO_DATE(&#39;2016-03-02&#39;, &#39;YYYY-MM-DD&#39;)</code></td>
</tr>
<tr>
<td><code>TO_NUMBER(&#39;문자&#39;)</code></td>
<td>문자 → 숫자</td>
<td><code>TO_NUMBER(&#39;1,000&#39;, &#39;9,999&#39;)</code> → 1000</td>
</tr>
</tbody>
</table>
</div>
<p><strong>숫자 형식 기호</strong></p>
<div class="tw"><table><thead><tr>
<th>기호</th>
<th>뜻</th>
<th>예 → 결과</th>
</tr>
</thead>
<tbody><tr>
<td><code>9</code></td>
<td>숫자 한 자리 (앞의 0은 표시 안 함)</td>
<td><code>TO_CHAR(123, &#39;99999&#39;)</code> →   123</td>
</tr>
<tr>
<td><code>0</code></td>
<td>숫자 한 자리 (빈 자리를 0으로)</td>
<td><code>TO_CHAR(123, &#39;00000&#39;)</code> → 00123</td>
</tr>
<tr>
<td><code>$</code></td>
<td>달러 기호</td>
<td><code>TO_CHAR(1500, &#39;$9,999&#39;)</code> → $1,500</td>
</tr>
<tr>
<td><code>L</code></td>
<td>지역 화폐 기호 (한국이면 ￦)</td>
<td><code>TO_CHAR(1500, &#39;L9,999&#39;)</code> → ￦1,500</td>
</tr>
<tr>
<td><code>.</code></td>
<td>소수점</td>
<td><code>TO_CHAR(3.5, &#39;99.99&#39;)</code> → 3.50</td>
</tr>
<tr>
<td><code>,</code></td>
<td>천 단위 구분</td>
<td><code>TO_CHAR(1234567, &#39;9,999,999&#39;)</code></td>
</tr>
</tbody>
</table>
</div>
<p>숫자가 형식보다 길면 <code>####</code>처럼 표시돼요. 형식을 넉넉하게 주세요.</p>
<p><strong>날짜 형식 기호</strong></p>
<div class="tw"><table><thead><tr>
<th>기호</th>
<th>뜻</th>
<th>예 (2016-03-02 수요일 14:05:09)</th>
</tr>
</thead>
<tbody><tr>
<td><code>YYYY</code> / <code>YY</code></td>
<td>연도 4자리 / 2자리</td>
<td>2016 / 16</td>
</tr>
<tr>
<td><code>MM</code></td>
<td>월 (숫자)</td>
<td>03</td>
</tr>
<tr>
<td><code>MON</code> / <code>MONTH</code></td>
<td>월 이름 (줄임 / 전체)</td>
<td>3월 (영어 환경이면 MAR / MARCH)</td>
</tr>
<tr>
<td><code>DD</code></td>
<td>일</td>
<td>02</td>
</tr>
<tr>
<td><code>DAY</code> / <code>DY</code></td>
<td>요일 (전체 / 줄임)</td>
<td>수요일 / 수</td>
</tr>
<tr>
<td><code>D</code></td>
<td>주의 몇 번째 날 (일요일=1)</td>
<td>4</td>
</tr>
<tr>
<td><code>HH24</code> / <code>HH</code></td>
<td>시 (24시간 / 12시간)</td>
<td>14 / 02</td>
</tr>
<tr>
<td><code>MI</code></td>
<td>분</td>
<td>05</td>
</tr>
<tr>
<td><code>SS</code></td>
<td>초</td>
<td>09</td>
</tr>
<tr>
<td><code>AM</code> / <code>PM</code></td>
<td>오전·오후</td>
<td>오후</td>
</tr>
<tr>
<td><code>Q</code></td>
<td>분기</td>
<td>1</td>
</tr>
<tr>
<td><code>&quot;글자&quot;</code></td>
<td>글자를 그대로 출력</td>
<td><code>&#39;YYYY&quot;년&quot; MM&quot;월&quot;&#39;</code> → 2016년 03월</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>분은 <code>MI</code>예요. <code>MM</code>은 월이라서 <code>&#39;HH24:MM&#39;</code>로 쓰면 시간 자리에 월이 나와요.</li>
<li>형식 안에 글자를 넣을 때는 <strong>큰따옴표</strong>로 감싸요. 형식 전체는 작은따옴표예요.</li>
</ul>
<h2 id="c-34">함수 중첩</h2>
<p>함수 안에 함수를 넣을 수 있고, <strong>가장 안쪽부터</strong> 계산해요.</p>
<pre><code><span class="hl-kw">SELECT</span> <span class="hl-fn">TO_CHAR</span>(<span class="hl-fn">ADD_MONTHS</span>(start_date, <span class="hl-num">6</span>), <span class="hl-str">'YYYY-MM-DD'</span>) <span class="hl-kw">AS</span> 수습종료일
<span class="hl-kw">FROM</span>   s_emp;
<span class="hl-com">-- ① ADD_MONTHS(start_date, 6): 입사일 + 6개월 (날짜)</span>
<span class="hl-com">-- ② TO_CHAR(①, 'YYYY-MM-DD'): 그 날짜를 문자로</span></code></pre>
<h2 id="c-35">그룹 함수</h2>
<div class="tw"><table><thead><tr>
<th>함수</th>
<th>뜻</th>
<th>NULL 처리</th>
</tr>
</thead>
<tbody><tr>
<td><code>COUNT(*)</code></td>
<td>행 개수</td>
<td>NULL이 있는 행도 셈</td>
</tr>
<tr>
<td><code>COUNT(컬럼)</code></td>
<td>그 컬럼이 NULL이 아닌 행 개수</td>
<td>NULL 제외</td>
</tr>
<tr>
<td><code>COUNT(DISTINCT 컬럼)</code></td>
<td>중복을 뺀 값의 종류 수</td>
<td>NULL 제외</td>
</tr>
<tr>
<td><code>SUM(컬럼)</code></td>
<td>합계</td>
<td>NULL 제외</td>
</tr>
<tr>
<td><code>AVG(컬럼)</code></td>
<td>평균</td>
<td>NULL 제외 (분모에서도 빠짐)</td>
</tr>
<tr>
<td><code>MAX(컬럼)</code> / <code>MIN(컬럼)</code></td>
<td>최댓값 / 최솟값 (문자·날짜도 가능)</td>
<td>NULL 제외</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>그룹 함수는 <strong>NULL을 빼고</strong> 계산해요. COUNT(*)만 예외예요.</li>
<li>그래서 commision_pct처럼 NULL이 많은 컬럼은 <code>AVG(commision_pct)</code>(값 있는 사람만의 평균)와 <code>AVG(NVL(commision_pct, 0))</code>(전체 인원 기준 평균)의 결과가 달라요. 무엇을 구하는지에 따라 골라 써요.</li>
<li>그룹 함수는 WHERE에 쓸 수 없어요. 그룹 결과로 걸러낼 때는 5장의 HAVING을 써요.</li>
</ul>
<h2 id="c-36">NVL: NULL을 다른 값으로</h2>
<pre><code><span class="hl-kw">SELECT</span> name, <span class="hl-fn">NVL</span>(commision_pct, <span class="hl-num">0</span>) <span class="hl-kw">AS</span> 커미션
<span class="hl-kw">FROM</span>   s_emp;</code></pre>
<p><code>NVL(값, 대신할값)</code>: 값이 NULL이면 대신할값을, 아니면 값을 그대로 돌려줘요. 두 인자의 타입은 같아야 해요. (NVL2, DECODE, CASE 등은 13장)</p>
<h1 id="c-ch-5">5장 GROUP BY와 HAVING</h1>
<h2 id="c-38">문법 순서와 실행 순서</h2>
<pre><code><span class="hl-kw">SELECT</span>   컬럼, 그룹함수        <span class="hl-com">-- ⑤ 보여줄 것</span>
<span class="hl-kw">FROM</span>     테이블                <span class="hl-com">-- ① 어디서</span>
<span class="hl-kw">WHERE</span>    행 조건              <span class="hl-com">-- ② 행을 먼저 걸러내고</span>
<span class="hl-kw">GROUP</span> <span class="hl-kw">BY</span> 컬럼                  <span class="hl-com">-- ③ 묶고</span>
<span class="hl-kw">HAVING</span>   그룹 조건            <span class="hl-com">-- ④ 묶음을 걸러내고</span>
<span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> 컬럼;                 <span class="hl-com">-- ⑥ 정렬</span></code></pre>
<p>쓰는 순서는 위에서 아래지만, 오라클이 처리하는 순서는 ①~⑥예요. 이 순서를 알면 아래 규칙들이 저절로 이해돼요.</p>
<h2 id="c-39">한 그룹 = 결과 한 줄</h2>
<pre><code><span class="hl-kw">SELECT</span>   dept_id, <span class="hl-fn">COUNT</span>(*) <span class="hl-kw">AS</span> 인원, <span class="hl-fn">AVG</span>(salary) <span class="hl-kw">AS</span> 평균급여
<span class="hl-kw">FROM</span>     s_emp
<span class="hl-kw">GROUP</span> <span class="hl-kw">BY</span> dept_id;</code></pre>
<p>GROUP BY는 같은 값을 가진 행들을 한 묶음으로 만들고, <strong>묶음 하나당 한 줄</strong>을 돌려줘요. 그래서 그 줄에 올 수 있는 것은 두 가지뿐이에요.</p>
<ul>
<li>GROUP BY에 쓴 컬럼 (묶음 안에서 값이 하나로 같으니까)</li>
<li>그룹 함수 (묶음을 값 하나로 요약하니까)</li>
</ul>
<p><code>name</code>처럼 묶음 안에서 값이 여러 개인 컬럼은 한 줄에 넣을 방법이 없어서 에러가 나요. (SELECT에 name을 같이 넣으면 에러가 나는 이유가 이것이에요.)</p>
<h2 id="c-40">자주 나는 에러</h2>
<div class="tw"><table><thead><tr>
<th>에러</th>
<th>원인</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td>ORA-00937</td>
<td>GROUP BY 없이 일반 컬럼과 그룹 함수를 같이 씀</td>
<td><code>SELECT dept_id, AVG(salary) FROM s_emp;</code></td>
</tr>
<tr>
<td>ORA-00979</td>
<td>SELECT의 일반 컬럼이 GROUP BY에 없음</td>
<td><code>SELECT dept_id, name, AVG(salary) ... GROUP BY dept_id</code></td>
</tr>
<tr>
<td>ORA-00934</td>
<td>WHERE에 그룹 함수를 씀</td>
<td><code>WHERE AVG(salary) &gt; 1000</code></td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>반대로, GROUP BY에 쓴 컬럼을 SELECT에 안 써도 에러는 아니에요. 다만 어떤 그룹의 결과인지 알기 어려워져요.</li>
<li>그룹 함수만 쓰고 GROUP BY가 없으면 테이블 전체가 한 그룹이 돼서 1행이 나와요: <code>SELECT COUNT(*), MAX(salary) FROM s_emp;</code></li>
</ul>
<h2 id="c-41">WHERE와 HAVING의 차이</h2>
<div class="tw"><table><thead><tr>
<th></th>
<th>WHERE</th>
<th>HAVING</th>
</tr>
</thead>
<tbody><tr>
<td>걸러내는 대상</td>
<td><strong>행</strong> (묶기 전)</td>
<td><strong>그룹</strong> (묶은 후)</td>
</tr>
<tr>
<td>그룹 함수</td>
<td>쓸 수 없음</td>
<td>쓸 수 있음</td>
</tr>
<tr>
<td>예</td>
<td><code>WHERE title = &#39;사원&#39;</code></td>
<td><code>HAVING AVG(salary) &gt;= 900</code></td>
</tr>
</tbody>
</table>
</div>
<pre><code><span class="hl-com">-- 사원들만 모아서, 부서별 평균 급여</span>
<span class="hl-kw">SELECT</span>   dept_id, <span class="hl-fn">AVG</span>(salary)
<span class="hl-kw">FROM</span>     s_emp
<span class="hl-kw">WHERE</span>    title = <span class="hl-str">'사원'</span>          <span class="hl-com">-- 행 조건: 묶기 전에 사원만 남김</span>
<span class="hl-kw">GROUP</span> <span class="hl-kw">BY</span> dept_id
<span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> dept_id;</code></pre>
<p>우리 데이터로는 106: 795, 110: 470, 111: 997.5, 112: 800, 113: 920이 나와요. 여기에 <code>HAVING AVG(salary) &gt;= 900</code>을 더하면 111과 113만 남아요.</p>
<p>행 조건은 WHERE에, 그룹 조건은 HAVING에 쓰세요. 행 조건을 HAVING에 써도 동작하는 경우가 있지만, WHERE에서 미리 걸러내는 쪽이 묶을 행이 적어서 빨라요.</p>
<h2 id="c-42">여러 컬럼으로 묶기</h2>
<pre><code><span class="hl-kw">SELECT</span>   dept_id, title, <span class="hl-fn">COUNT</span>(*)
<span class="hl-kw">FROM</span>     s_emp
<span class="hl-kw">GROUP</span> <span class="hl-kw">BY</span> dept_id, title
<span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> dept_id, title;</code></pre>
<p>(부서, 직책) 조합이 같은 행끼리 묶여요. 예를 들어 &#39;110부서의 사원&#39;, &#39;110부서의 과장&#39;이 각각 한 줄이 돼요.</p>
<h2 id="c-43">교안 예제7을 우리 데이터로</h2>
<p>&quot;직책이 &#39;부장&#39;으로 끝나지 않는 직원들을 직책별로 묶어, 급여 합계가 8000 이상인 직책만 합계 오름차순으로&quot;</p>
<pre><code><span class="hl-kw">SELECT</span>   title, <span class="hl-fn">SUM</span>(salary) <span class="hl-kw">AS</span> 합계
<span class="hl-kw">FROM</span>     s_emp
<span class="hl-kw">WHERE</span>    title <span class="hl-kw">NOT</span> <span class="hl-kw">LIKE</span> <span class="hl-str">'%부장'</span>      <span class="hl-com">-- ② 행 조건</span>
<span class="hl-kw">GROUP</span> <span class="hl-kw">BY</span> title                       <span class="hl-com">-- ③ 직책별로 묶고</span>
<span class="hl-kw">HAVING</span>   <span class="hl-fn">SUM</span>(salary) &gt;= <span class="hl-num">8000</span>         <span class="hl-com">-- ④ 그룹 조건</span>
<span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> <span class="hl-fn">SUM</span>(salary);                <span class="hl-com">-- ⑥ 정렬 (별명 '합계'도 가능)</span></code></pre>
<div class="tw"><table><thead><tr>
<th>title</th>
<th>합계</th>
</tr>
</thead>
<tbody><tr>
<td>사원</td>
<td>8090</td>
</tr>
<tr>
<td>과장</td>
<td>11500</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>ORDER BY에는 별명을 쓸 수 있지만, HAVING에는 별명을 쓸 수 없어요. (HAVING이 SELECT보다 먼저 실행되니까요.)</li>
<li>표의 숫자는 실습용 S_EMP 데이터로 계산한 값이라 교안 그림의 결과와 다를 수 있어요.</li>
</ul>
<h2 id="c-44">실행 순서로 이해하는 규칙</h2>
<p><strong>쓰는 순서와 실행 순서가 다르다</strong>는 것이 핵심이에요.</p>
<div class="tw"><table><thead><tr>
<th>실행 순서</th>
<th>절</th>
<th>하는 일</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>FROM</td>
<td>테이블 선택</td>
</tr>
<tr>
<td>2</td>
<td>WHERE</td>
<td>행(row) 선택</td>
</tr>
<tr>
<td>3</td>
<td>GROUP BY</td>
<td>데이터 묶기</td>
</tr>
<tr>
<td>4</td>
<td>HAVING</td>
<td>그룹 선택</td>
</tr>
<tr>
<td>5</td>
<td>SELECT</td>
<td>컬럼 선택, 그룹 함수 계산</td>
</tr>
<tr>
<td>6</td>
<td>ORDER BY</td>
<td>정렬 (제일 마지막)</td>
</tr>
</tbody>
</table>
</div>
<p>이 순서를 알면 여러 규칙이 한 번에 설명돼요.</p>
<ul>
<li>SELECT에서 붙인 별칭을 WHERE·GROUP BY·HAVING에서 못 쓰고 ORDER BY에서만 쓸 수 있어요(125번). 별칭은 5번에서 생기니까요.</li>
<li>WHERE에 그룹 함수를 못 써요(129번). 그룹은 3번에서 생기니까요.</li>
<li>ROWNUM이 ORDER BY보다 먼저 붙어요(14.10). ROWNUM은 2번, 정렬은 6번이니까요.</li>
</ul>
<h1 id="c-ch-6">6장 JOIN과 SET 연산자</h1>
<h2 id="c-46">JOIN이란 (6.1)</h2>
<p>필요한 데이터가 여러 테이블에 나뉘어 있을 때, 테이블들을 <strong>공통 컬럼으로 이어서</strong> 한 번에 조회하는 것이 JOIN이에요.</p>
<ul>
<li>S_EMP에는 직원의 <code>dept_id</code>(부서 번호)만 있고, 부서 <strong>이름</strong>은 S_DEPT에 있어요.</li>
<li>두 테이블은 <code>s_emp.dept_id = s_dept.id</code>로 연결돼요.</li>
<li>부서 이름을 직원마다 반복해서 저장하지 않고 따로 두는 이유는, 부서 이름이 바뀌어도 S_DEPT 한 곳만 고치면 되게 하려는 것이에요.</li>
</ul>
<div class="tw"><table><thead><tr>
<th>종류</th>
<th>연결 방식</th>
<th>정리된 곳</th>
</tr>
</thead>
<tbody><tr>
<td>EQUIJOIN</td>
<td><code>=</code>로 값이 같은 행끼리</td>
<td>이 절</td>
</tr>
<tr>
<td>NON-EQUIJOIN</td>
<td><code>BETWEEN</code> 등 <code>=</code>가 아닌 조건</td>
<td>6.5</td>
</tr>
<tr>
<td>OUTER JOIN</td>
<td>짝이 없는 행도 포함 <code>(+)</code></td>
<td>6.6</td>
</tr>
<tr>
<td>SELF JOIN</td>
<td>같은 테이블끼리</td>
<td>6.7</td>
</tr>
</tbody>
</table>
</div>
<h2 id="c-47">조인 조건을 빼면: Cartesian Product (6.2)</h2>
<pre><code><span class="hl-kw">SELECT</span> s_emp.name, s_dept.name
<span class="hl-kw">FROM</span>   s_emp, s_dept;     <span class="hl-com">-- WHERE 없음</span></code></pre>
<p>조인 조건이 없으면 오라클은 “모든 직원 × 모든 부서” 조합을 만들어요. 우리 데이터는 직원 25명, 부서 11개라서 <strong>25 × 11 = 275행</strong>이 나오고, 대부분은 직원과 상관없는 부서가 붙은 의미 없는 행이에요. 결과 행 수가 이상하게 많으면 조인 조건이 빠졌는지부터 확인하세요.</p>
<h2 id="c-48">EQUIJOIN (6.3~6.4)</h2>
<pre><code><span class="hl-kw">SELECT</span> s_emp.name, s_emp.dept_id, s_dept.name
<span class="hl-kw">FROM</span>   s_emp, s_dept
<span class="hl-kw">WHERE</span>  s_emp.dept_id = s_dept.id;</code></pre>
<p>교안 예제9의 결과 일부예요.</p>
<div class="tw"><table><thead><tr>
<th>s_emp.name</th>
<th>dept_id</th>
<th>s_dept.name</th>
</tr>
</thead>
<tbody><tr>
<td>박구곤</td>
<td>118</td>
<td>인사부</td>
</tr>
<tr>
<td>손명성</td>
<td>110</td>
<td>기획부</td>
</tr>
<tr>
<td>이은선</td>
<td>102</td>
<td>영업부</td>
</tr>
<tr>
<td>...</td>
<td>...</td>
<td>...</td>
</tr>
</tbody>
</table>
</div>
<p><strong>문법 규칙</strong></p>
<ul>
<li>FROM에 테이블을 쉼표로 나열하고, WHERE에 연결 조건을 써요.</li>
<li>두 테이블에 같은 이름의 컬럼(<code>name</code>, <code>id</code>)이 있으면 <strong>테이블명.컬럼명</strong>으로 어느 쪽인지 밝혀야 해요. 안 그러면 ORA-00918(컬럼의 정의가 애매함) 에러가 나요. 한쪽에만 있는 컬럼은 생략해도 되지만, 붙여 두면 읽기 쉬워요.</li>
<li>테이블이 <strong>N개면 조인 조건은 최소 N−1개</strong>가 필요해요. 3개를 잇는다면 조건이 2개예요.</li>
<li>다른 조건은 AND로 이어 붙여요.</li>
</ul>
<pre><code><span class="hl-com">-- 기획부 직원만</span>
<span class="hl-kw">SELECT</span> s_emp.name, s_dept.name
<span class="hl-kw">FROM</span>   s_emp, s_dept
<span class="hl-kw">WHERE</span>  s_emp.dept_id = s_dept.id      <span class="hl-com">-- 조인 조건</span>
  <span class="hl-kw">AND</span>  s_dept.name = <span class="hl-str">'기획부'</span>;         <span class="hl-com">-- 검색 조건</span></code></pre>
<p><strong>테이블 별명</strong></p>
<p>테이블 이름이 길면 FROM에서 짧은 별명을 주고, 나머지 부분에서는 그 별명을 써요. (자세한 내용은 바로 다음의 “테이블 ALIAS (6.5)”에 있어요.)</p>
<pre><code><span class="hl-kw">SELECT</span> e.name, d.name
<span class="hl-kw">FROM</span>   s_emp e, s_dept d
<span class="hl-kw">WHERE</span>  e.dept_id = d.id;</code></pre>
<h2 id="c-49">참고: ANSI 표준 JOIN 문법</h2>
<p>교안은 오라클 전용 문법(FROM에 쉼표, WHERE에 조건)을 쓰지만, 다른 DB에서도 통하는 표준 문법도 있어요. 시험이나 실무에서 보면 같은 뜻이라는 것만 알아 두세요. (교안 범위 밖)</p>
<pre><code><span class="hl-kw">SELECT</span> e.name, d.name
<span class="hl-kw">FROM</span>   s_emp e <span class="hl-kw">JOIN</span> s_dept d <span class="hl-kw">ON</span> e.dept_id = d.id;</code></pre>
<h2 id="c-50">테이블 ALIAS (6.5)</h2>
<p><code>FROM s_emp e, s_dept d</code>처럼 테이블에 짧은 이름을 붙여요. 한 번 붙이면 그 쿼리 안에서는 테이블 이름 대신 <strong>반드시 ALIAS를 써야</strong> 해요.</p>
<h2 id="c-51">JOIN의 종류 (6.6~6.8)</h2>
<div class="tw"><table><thead><tr>
<th>종류</th>
<th>언제 쓰나</th>
<th>WHERE 조건 예</th>
</tr>
</thead>
<tbody><tr>
<td>EQUIJOIN</td>
<td>두 컬럼 값이 정확히 같을 때 (보통 PK-FK)</td>
<td><code>e.dept_id = d.id</code></td>
</tr>
<tr>
<td>NON-EQUIJOIN</td>
<td>값이 범위 안에 드는지로 연결할 때</td>
<td><code>e.salary BETWEEN g.losal AND g.hisal</code></td>
</tr>
<tr>
<td>OUTER JOIN</td>
<td>짝이 없는 행도 모두 보고 싶을 때</td>
<td><code>e.id(+) = c.sales_rep_id</code></td>
</tr>
<tr>
<td>SELF JOIN</td>
<td>한 테이블 안의 행끼리 연결할 때</td>
<td><code>w.manager_id = m.id</code></td>
</tr>
</tbody>
</table>
</div>
<ul>
<li><strong>OUTER JOIN의 (+)</strong>: 데이터가 <strong>부족한 쪽</strong>에 붙여요. 위 예에서는 담당 직원이 없는 고객도 나와야 하니 직원(e) 쪽에 붙여요. (+)는 한쪽에만 쓰고, IN이나 OR과 함께 쓸 수 없어요.</li>
<li><strong>SELF JOIN</strong>: 같은 테이블을 두 번 쓰므로 ALIAS를 서로 다르게 붙이고, 모든 컬럼 앞에 ALIAS를 써야 해요.</li>
<li>JOIN 조건을 빠뜨리면 모든 행끼리 짝지어지는 Cartesian product가 돼요. 테이블이 N개면 JOIN 조건은 최소 N-1개 필요해요.</li>
</ul>
<p><strong>예시로 보는 세 가지 JOIN</strong></p>
<pre><code><span class="hl-com">-- NON-EQUIJOIN: 급여가 어느 등급 구간에 들어가는지</span>
<span class="hl-kw">SELECT</span> e.name, e.salary, g.grade
<span class="hl-kw">FROM</span>   s_emp e, salgrade g
<span class="hl-kw">WHERE</span>  e.salary <span class="hl-kw">BETWEEN</span> g.losal <span class="hl-kw">AND</span> g.hisal;

<span class="hl-com">-- OUTER JOIN: 직원이 없는 부서도 나오게 (모자라는 쪽 = 직원 쪽에 (+))</span>
<span class="hl-kw">SELECT</span> d.name, e.name
<span class="hl-kw">FROM</span>   s_emp e, s_dept d
<span class="hl-kw">WHERE</span>  e.<span class="hl-fn">dept_id</span>(+) = d.id;

<span class="hl-com">-- SELF JOIN: 직원과 그 직원의 관리자 (같은 테이블을 두 번)</span>
<span class="hl-kw">SELECT</span> w.name <span class="hl-kw">AS</span> 직원, m.name <span class="hl-kw">AS</span> 관리자
<span class="hl-kw">FROM</span>   s_emp w, s_emp m
<span class="hl-kw">WHERE</span>  w.manager_id = m.id;</code></pre>
<ul>
<li><code>(+)</code>는 <strong>값이 모자라는 쪽</strong>(짝이 없을 수 있는 쪽)에 붙여요. 그 쪽 컬럼은 NULL로 채워져 나와요.</li>
<li>SELF JOIN은 테이블 ALIAS가 없으면 두 테이블을 구분할 방법이 없어서, ALIAS가 필수예요.</li>
<li>위 SELF JOIN은 관리자가 없는 사람(manager_id가 NULL)이 빠져요. 그 사람도 보려면 <code>w.manager_id = m.id(+)</code>로 OUTER JOIN을 같이 써요.</li>
</ul>
<h2 id="c-52">JOIN을 쓰는 이유와 종류 정리</h2>
<ul>
<li><strong>왜 테이블을 나눌까?</strong> 테이블을 쪼개면 중복이 없어지고, 읽을 때는 다시 붙여야 해요. 직원마다 부서 이름을 적으면 &#39;기획부&#39;가 계속 중복되니, 부서를 따로 떼어 두고 번호로만 연결해요. 읽을 때 다시 붙이는 것이 JOIN이에요.</li>
<li><strong>연결고리가 있어야 해요.</strong> 보통 PK와 FK가 연결고리예요. 작은 테이블부터 붙이면 성능이 더 좋아질 수 있어요.</li>
<li><strong>INNER vs OUTER</strong>: INNER JOIN(EQUI, NON-EQUI)은 짝이 맞는 것만, OUTER JOIN은 짝이 없는 것도 보여줘요. 예: 배정된 고객이 없는 기사, 기사가 배정되지 않은 고객.</li>
<li><strong>NON-EQUIJOIN</strong>: BETWEEN을 써서 등급을 매길 때 써요.</li>
<li><strong>SELF JOIN</strong>: 같은 테이블끼리 붙이는 재귀 관계예요. 계층 구조일 때 써요. 예: 비상연락망, 사장이 꼭대기인 조직도, 댓글의 답글.</li>
</ul>
<h2 id="c-53">SET 연산자 (6.9~6.11)</h2>
<p>두 SELECT 결과를 위아래로 합치거나 비교해요.</p>
<div class="tw"><table><thead><tr>
<th>연산자</th>
<th>의미</th>
<th>중복 행</th>
</tr>
</thead>
<tbody><tr>
<td>UNION</td>
<td>합집합</td>
<td>한 번만</td>
</tr>
<tr>
<td>UNION ALL</td>
<td>합집합</td>
<td>그대로 모두</td>
</tr>
<tr>
<td>INTERSECT</td>
<td>교집합</td>
<td>한 번만</td>
</tr>
<tr>
<td>MINUS</td>
<td>첫 번째 결과 - 두 번째 결과</td>
<td>한 번만</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>두 SELECT의 컬럼 <strong>개수와 타입</strong>이 같아야 해요.</li>
<li>결과의 컬럼 이름은 <strong>첫 번째 SELECT</strong>를 따라요.</li>
<li>ORDER BY는 <strong>맨 마지막에 한 번만</strong> 써요.</li>
</ul>
<p><strong>예시</strong></p>
<pre><code><span class="hl-com">-- 110부서 직원 + 급여 2000 이상인 직원 (겹치는 사람은 한 번만)</span>
<span class="hl-kw">SELECT</span> name, dept_id <span class="hl-kw">FROM</span> s_emp <span class="hl-kw">WHERE</span> dept_id = <span class="hl-num">110</span>
<span class="hl-kw">UNION</span>
<span class="hl-kw">SELECT</span> name, dept_id <span class="hl-kw">FROM</span> s_emp <span class="hl-kw">WHERE</span> salary &gt;= <span class="hl-num">2000</span>
<span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> name;

<span class="hl-com">-- 직원이 한 명도 없는 부서 번호</span>
<span class="hl-kw">SELECT</span> id      <span class="hl-kw">FROM</span> s_dept
<span class="hl-kw">MINUS</span>
<span class="hl-kw">SELECT</span> dept_id <span class="hl-kw">FROM</span> s_emp;</code></pre>
<p>UNION은 중복을 없애려고 정렬을 한 번 더 하므로, 중복이 없다는 걸 알거나 중복도 보고 싶으면 UNION ALL이 더 빨라요.</p>
<ul>
<li>SET 연산자는 <strong>집합 이론</strong>이 바탕이에요.</li>
<li>속도는 UNION보다 UNION ALL이 훨씬 빨라요. UNION은 중복을 지우려고 결과를 비교하지만, UNION ALL은 무조건 이어 붙이기만 해요.</li>
<li>교안 6.11 예제처럼 110부서와 113부서는 겹치는 사람이 없어요. <strong>교집합이 없다는 걸 알면 UNION ALL을 써야</strong> 결과는 같고 더 빨라요.</li>
</ul>
<h1 id="c-ch-7">7장 SUBQUERY (서브쿼리)</h1>
<h2 id="c-55">서브쿼리의 종류와 예시</h2>
<p>SELECT 안에 들어 있는 또 다른 SELECT예요. 괄호로 감싸고, 서브쿼리 안에는 ORDER BY를 쓸 수 없어요.</p>
<div class="tw"><table><thead><tr>
<th>종류</th>
<th>서브쿼리가 돌려주는 것</th>
<th>함께 쓰는 연산자 / 위치</th>
</tr>
</thead>
<tbody><tr>
<td>Single Row</td>
<td>1행</td>
<td><code>=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&lt;&gt;</code> 등</td>
</tr>
<tr>
<td>Multi Row</td>
<td>여러 행</td>
<td><code>IN</code>, <code>NOT IN</code></td>
</tr>
<tr>
<td>Multi-column</td>
<td>여러 컬럼</td>
<td><code>(salary, dept_id) IN (...)</code></td>
</tr>
<tr>
<td>INLINE VIEW</td>
<td>임시 테이블</td>
<td>FROM절</td>
</tr>
<tr>
<td>HAVING절</td>
<td>비교할 그룹 값</td>
<td><code>HAVING AVG(salary) &gt; (...)</code></td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>서브쿼리 결과가 여러 행인데 <code>=</code>를 쓰면 ORA-01427 에러가 나요. 이럴 때는 <code>IN</code>을 써요.</li>
<li><strong>CREATE + 서브쿼리</strong>: <code>CREATE TABLE 새테이블 AS SELECT ...</code>로 기존 테이블의 일부를 복사해요. <code>WHERE 1 &lt;&gt; 1</code>처럼 항상 거짓인 조건을 쓰면 구조만 복사돼요.</li>
<li><strong>DML + 서브쿼리</strong>: <code>INSERT INTO ... SELECT ...</code>로 여러 행을 한 번에 넣고, <code>UPDATE ... SET 컬럼 = (SELECT ...)</code>로 다른 행의 값을 가져와요.</li>
</ul>
<p><strong>예시</strong></p>
<pre><code><span class="hl-com">-- Single Row: 평균보다 급여가 많은 직원</span>
<span class="hl-kw">SELECT</span> name, salary
<span class="hl-kw">FROM</span>   s_emp
<span class="hl-kw">WHERE</span>  salary &gt; (<span class="hl-kw">SELECT</span> <span class="hl-fn">AVG</span>(salary) <span class="hl-kw">FROM</span> s_emp);

<span class="hl-com">-- Multi Row: '기획부'라는 이름의 부서에 속한 직원 (부서가 여러 개일 수 있으니 IN)</span>
<span class="hl-kw">SELECT</span> name
<span class="hl-kw">FROM</span>   s_emp
<span class="hl-kw">WHERE</span>  dept_id <span class="hl-kw">IN</span> (<span class="hl-kw">SELECT</span> id <span class="hl-kw">FROM</span> s_dept <span class="hl-kw">WHERE</span> name = <span class="hl-str">'기획부'</span>);

<span class="hl-com">-- Multi-column: 부서별 최고 급여를 받는 직원</span>
<span class="hl-kw">SELECT</span> name, dept_id, salary
<span class="hl-kw">FROM</span>   s_emp
<span class="hl-kw">WHERE</span>  (dept_id, salary) <span class="hl-kw">IN</span> (<span class="hl-kw">SELECT</span> dept_id, <span class="hl-fn">MAX</span>(salary)
                             <span class="hl-kw">FROM</span>   s_emp
                             <span class="hl-kw">GROUP</span> <span class="hl-kw">BY</span> dept_id);

<span class="hl-com">-- INLINE VIEW: 부서별 평균을 임시 테이블처럼 쓰기</span>
<span class="hl-kw">SELECT</span> e.name, e.salary, a.avg_sal
<span class="hl-kw">FROM</span>   s_emp e,
       (<span class="hl-kw">SELECT</span> dept_id, <span class="hl-fn">AVG</span>(salary) <span class="hl-kw">AS</span> avg_sal
        <span class="hl-kw">FROM</span>   s_emp
        <span class="hl-kw">GROUP</span> <span class="hl-kw">BY</span> dept_id) a
<span class="hl-kw">WHERE</span>  e.dept_id = a.dept_id
  <span class="hl-kw">AND</span>  e.salary &gt; a.avg_sal;

<span class="hl-com">-- HAVING: 전체 평균보다 부서 평균이 높은 부서</span>
<span class="hl-kw">SELECT</span>   dept_id, <span class="hl-fn">AVG</span>(salary)
<span class="hl-kw">FROM</span>     s_emp
<span class="hl-kw">GROUP</span> <span class="hl-kw">BY</span> dept_id
<span class="hl-kw">HAVING</span>   <span class="hl-fn">AVG</span>(salary) &gt; (<span class="hl-kw">SELECT</span> <span class="hl-fn">AVG</span>(salary) <span class="hl-kw">FROM</span> s_emp);</code></pre>
<p>읽는 요령: <strong>괄호 안부터</strong> 먼저 실행해 보고, 그 결과가 값 하나인지, 여러 행인지, 표인지 확인한 다음 바깥 문장을 읽어요. 인라인 뷰에서 그룹 함수 결과를 바깥에서 쓰려면 <code>avg_sal</code>처럼 <strong>별명을 꼭</strong> 주세요.</p>
<h2 id="c-56">결과 모양에 따라 넣는 곳</h2>
<p>서브쿼리는 &quot;쿼리 안에 쿼리를 집어넣는 것&quot;이에요. 서브쿼리 결과가 <strong>어떤 모양인지</strong>에 따라 넣을 수 있는 곳이 정해져요.</p>
<div class="tw"><table><thead><tr>
<th>결과 모양</th>
<th>넣는 곳</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td>① 표 (여러 행 × 여러 열)</td>
<td>FROM절 (인라인 뷰)</td>
<td>188번, 14.10 ROWNUM</td>
</tr>
<tr>
<td>② 한 행 × 여러 열</td>
<td>다중 컬럼 비교 <code>(a, b) IN</code></td>
<td>187번</td>
</tr>
<tr>
<td>③ 여러 행 × 한 열</td>
<td><code>IN</code>, <code>ANY</code>, <code>ALL</code></td>
<td>186번, 14.9</td>
</tr>
<tr>
<td>④ 값 하나 (스칼라)</td>
<td><code>=</code>, <code>&gt;</code>, <code>&lt;</code></td>
<td>184번</td>
</tr>
</tbody>
</table>
</div>
<p>보통은 서브쿼리가 먼저, 메인 쿼리가 나중에 실행돼요. 상관 서브쿼리만 이 순서가 반대예요(14.8).</p>
<h1 id="c-ch-8">8장 CONSTRAINT (제약조건)</h1>
<h2 id="c-58">8~10장 한눈에 보기</h2>
<p>7장까지는 데이터를 <strong>조회</strong>하는 법(SELECT)을 다뤘어요. 8~10장은 데이터를 <strong>바꿀 때 안전하게 지키는 법</strong>이에요. 세 장은 하나의 질문으로 이어져요.</p>
<ol>
<li><strong>8장 CONSTRAINT:</strong> 잘못된 데이터가 들어오지 못하게 테이블에 <strong>규칙</strong>을 걸어요. 예: 직원 번호는 중복 금지, 급여는 500 이상.</li>
<li><strong>9장 TRANSACTION:</strong> 규칙을 통과한 변경도 바로 확정되지 않아요. 여러 변경을 묶어서 한꺼번에 확정(COMMIT)하거나 취소(ROLLBACK)해요.</li>
<li><strong>10장 DICTIONARY:</strong> 어떤 테이블과 규칙이 걸려 있는지 기록된 <strong>안내데스크</strong>예요. SELECT로 조회해요.</li>
</ol>
<p>한 문장으로: <strong>규칙을 걸고(8장) → 변경을 확정하거나 되돌리고(9장) → 걸린 규칙을 확인한다(10장).</strong></p>
<h2 id="c-59">왜 필요할까요?</h2>
<p>제약조건이 없으면 직원 번호가 같은 직원이 두 명 생기거나, 없는 부서 번호(999)가 입력돼도 막을 방법이 없어요. 제약조건은 테이블에 걸어 두는 <strong>자동 검사 규칙</strong>이에요. INSERT·UPDATE·DELETE를 할 때마다 DB가 알아서 검사하고, 규칙을 어기면 에러를 내며 거부해요. 이렇게 데이터가 올바른 상태로 유지되는 것을 <strong>데이터 무결성</strong>이라고 해요.</p>
<h2 id="c-60">다섯 가지 종류</h2>
<div class="tw"><table><thead><tr>
<th>제약조건</th>
<th>규칙</th>
<th>NULL</th>
<th>실습 테이블 예</th>
</tr>
</thead>
<tbody><tr>
<td>NOT NULL</td>
<td>비워 둘 수 없음</td>
<td>불가</td>
<td>S_EMP.NAME (이름은 반드시 있어야 함)</td>
</tr>
<tr>
<td>UNIQUE</td>
<td>값이 중복되면 안 됨</td>
<td>가능</td>
<td>메일ID를 중복 금지로 만들 때</td>
</tr>
<tr>
<td>PRIMARY KEY</td>
<td>중복 안 됨 + 비워 둘 수 없음. 테이블당 1개</td>
<td>불가</td>
<td>S_EMP.ID, S_DEPT.ID</td>
</tr>
<tr>
<td>FOREIGN KEY</td>
<td>다른 테이블에 있는 값만 허용</td>
<td>가능</td>
<td>S_EMP.DEPT_ID → S_DEPT.ID</td>
</tr>
<tr>
<td>CHECK</td>
<td>직접 정한 조건이 참이어야 함</td>
<td>가능</td>
<td>급여는 500~10000 사이</td>
</tr>
</tbody>
</table>
</div>
<p><strong>PRIMARY KEY = NOT NULL + UNIQUE</strong>라고 외우면 쉬워요. 차이는 PRIMARY KEY는 테이블에 하나뿐이고, 행을 대표하는 이름표 역할을 한다는 점이에요. UNIQUE와 PRIMARY KEY를 걸면 검색을 빠르게 하는 인덱스도 자동으로 만들어져요.</p>
<p>실습 스크립트를 보면 모든 테이블에 <code>PK_S_EMP</code> 같은 PRIMARY KEY가 걸려 있고, ID·NAME 등에는 NOT NULL이 있어요. FOREIGN KEY는 걸려 있지 않아요. 그래서 157번에서 본 것처럼 S_REGION에 없는 지역번호 6을 가진 고객이 들어갈 수 있었던 거예요.</p>
<h2 id="c-61">이름 붙이기</h2>
<p>제약조건에도 이름을 붙여요. 에러가 나면 어느 규칙을 어겼는지 이름으로 알려주기 때문이에요. 보통 <code>테이블_컬럼_종류</code> 형식을 써요.</p>
<ul>
<li><code>emp_id_pk</code>, <code>emp_name_nn</code>, <code>emp_mailid_uk</code>, <code>emp_dept_id_fk</code>, <code>emp_salary_ck</code></li>
</ul>
<p>이름을 생략하면 오라클이 <code>SYS_C0012345</code>처럼 의미 없는 이름을 붙여요. 그러면 에러 메시지만 보고는 무슨 규칙인지 알기 어려워요. 이름은 한 사용자 안에서 중복될 수 없어요.</p>
<h2 id="c-62">걸어 두는 두 가지 위치: 컬럼 레벨 vs 테이블 레벨</h2>
<p>같은 규칙을 <strong>컬럼 정의 바로 옆</strong>에 쓸 수도 있고, <strong>컬럼을 다 쓴 뒤 따로</strong> 쓸 수도 있어요.</p>
<pre><code><span class="hl-com">-- 부모 테이블 (FK가 참조할 테이블이 먼저 있어야 함)</span>
<span class="hl-kw">CREATE</span> <span class="hl-kw">TABLE</span> <span class="hl-fn">dept_t</span> (
  id    <span class="hl-kw">NUMBER</span>(<span class="hl-num">7</span>)    <span class="hl-kw">CONSTRAINT</span> dept_t_id_pk <span class="hl-kw">PRIMARY</span> <span class="hl-kw">KEY</span>,
  name  <span class="hl-kw">VARCHAR2</span>(<span class="hl-num">25</span>) <span class="hl-kw">CONSTRAINT</span> dept_t_name_nn <span class="hl-kw">NOT</span> <span class="hl-kw">NULL</span>
);

<span class="hl-com">-- 자식 테이블</span>
<span class="hl-kw">CREATE</span> <span class="hl-kw">TABLE</span> <span class="hl-fn">emp_t</span> (
  <span class="hl-com">-- ① 컬럼 레벨: 컬럼 바로 뒤에</span>
  id       <span class="hl-kw">NUMBER</span>(<span class="hl-num">7</span>)     <span class="hl-kw">CONSTRAINT</span> emp_t_id_pk <span class="hl-kw">PRIMARY</span> <span class="hl-kw">KEY</span>,
  name     <span class="hl-kw">VARCHAR2</span>(<span class="hl-num">25</span>)  <span class="hl-kw">CONSTRAINT</span> emp_t_name_nn <span class="hl-kw">NOT</span> <span class="hl-kw">NULL</span>,
  mailid   <span class="hl-kw">VARCHAR2</span>(<span class="hl-num">8</span>)   <span class="hl-kw">CONSTRAINT</span> emp_t_mailid_uk <span class="hl-kw">UNIQUE</span>,
  salary   <span class="hl-kw">NUMBER</span>(<span class="hl-num">11</span>,<span class="hl-num">2</span>),
  dept_id  <span class="hl-kw">NUMBER</span>(<span class="hl-num">7</span>),
  <span class="hl-com">-- ② 테이블 레벨: 컬럼을 다 쓴 뒤에, 괄호로 대상 컬럼을 지정</span>
  <span class="hl-kw">CONSTRAINT</span> emp_t_salary_ck <span class="hl-kw">CHECK</span> (salary <span class="hl-kw">BETWEEN</span> <span class="hl-num">500</span> <span class="hl-kw">AND</span> <span class="hl-num">10000</span>),
  <span class="hl-kw">CONSTRAINT</span> emp_t_dept_id_fk <span class="hl-kw">FOREIGN</span> <span class="hl-kw">KEY</span> (dept_id) <span class="hl-kw">REFERENCES</span> <span class="hl-fn">dept_t</span>(id)
);</code></pre>
<div class="tw"><table><thead><tr>
<th></th>
<th>컬럼 레벨</th>
<th>테이블 레벨</th>
</tr>
</thead>
<tbody><tr>
<td>위치</td>
<td>컬럼 정의 바로 뒤</td>
<td>모든 컬럼을 쓴 뒤</td>
</tr>
<tr>
<td>대상 컬럼</td>
<td>그 컬럼 하나</td>
<td><code>(컬럼1, 컬럼2)</code>처럼 여러 개도 가능</td>
</tr>
<tr>
<td>NOT NULL</td>
<td><strong>가능</strong></td>
<td><strong>불가능</strong> (컬럼 레벨로만)</td>
</tr>
<tr>
<td>언제 쓰나</td>
<td>컬럼 하나에 거는 규칙</td>
<td>여러 컬럼을 묶는 규칙 (예: S_ITEM의 PK(ORD_ID, ITEM_ID))</td>
</tr>
</tbody>
</table>
</div>
<p>FOREIGN KEY를 컬럼 레벨로 쓸 때는 <code>FOREIGN KEY</code> 단어 없이 <code>dept_id NUMBER(7) CONSTRAINT ... REFERENCES dept_t(id)</code>처럼 써요.</p>
<h2 id="c-63">FOREIGN KEY 자세히: 부모와 자식</h2>
<p>FOREIGN KEY가 가장 헷갈리는 부분이에요. 부서와 직원으로 생각해 보세요.</p>
<ul>
<li><strong>부모(Parent) = S_DEPT:</strong> 부서 목록을 가지고 있는 쪽</li>
<li><strong>자식(Child) = S_EMP:</strong> 부서 번호를 빌려 쓰는 쪽. <strong>FK는 자식 테이블에 걸어요.</strong></li>
<li>자식의 DEPT_ID에는 부모의 ID에 <strong>있는 값</strong>이나 <strong>NULL</strong>만 들어갈 수 있어요.</li>
</ul>
<p>FK를 걸 때 지켜야 하는 것 세 가지:</p>
<ol>
<li>부모 테이블이 <strong>먼저</strong> 만들어져 있어야 해요. (위 예제에서 dept_t를 먼저 만든 이유)</li>
<li>참조되는 부모 컬럼에는 <strong>PRIMARY KEY나 UNIQUE</strong>가 있어야 해요. 값이 하나로 특정돼야 참조할 수 있기 때문이에요.</li>
<li>두 컬럼의 <strong>데이터 타입이 같아야</strong> 해요.</li>
</ol>
<p><strong>ON DELETE CASCADE:</strong> 보통은 직원이 남아 있는 부서를 지울 수 없어요. FK에 <code>... REFERENCES dept_t(id) ON DELETE CASCADE</code>를 붙이면, 부서를 지울 때 그 부서의 직원들도 <strong>같이 자동으로</strong> 지워져요. 편하지만 한 번에 많이 지워질 수 있어 조심해야 해요.</p>
<h2 id="c-64">CHECK에서 못 쓰는 것</h2>
<p>CHECK는 <strong>그 행 하나만 보고</strong> 참/거짓을 판단할 수 있는 조건이어야 해요. 그래서 아래는 쓸 수 없어요.</p>
<ul>
<li>다른 행의 값 (예: &quot;평균 급여보다 높아야 함&quot;)</li>
<li><code>SYSDATE</code>, <code>USER</code> 처럼 실행할 때마다 값이 달라지는 함수</li>
<li><code>ROWNUM</code>, <code>NEXTVAL</code> 같은 의사컬럼</li>
</ul>
<h2 id="c-65">언제 에러가 나는지 (8.9)</h2>
<p>제약조건은 DML을 실행하는 순간에 검사돼요. 위의 dept_t / emp_t로 예를 들면:</p>
<div class="tw"><table><thead><tr>
<th>상황</th>
<th>예시</th>
<th>오라클 에러</th>
</tr>
</thead>
<tbody><tr>
<td>NOT NULL 컬럼을 비움</td>
<td>name 없이 INSERT</td>
<td>ORA-01400</td>
</tr>
<tr>
<td>PK·UNIQUE 값이 중복</td>
<td>이미 있는 id로 INSERT</td>
<td>ORA-00001</td>
</tr>
<tr>
<td>CHECK 조건 위반</td>
<td>salary를 100으로 INSERT</td>
<td>ORA-02290</td>
</tr>
<tr>
<td>자식에 부모에 없는 값을 입력·수정</td>
<td>emp_t에 dept_id = 999</td>
<td>ORA-02291</td>
</tr>
<tr>
<td>자식이 참조하는 부모 행을 삭제</td>
<td>직원이 남아 있는 부서를 DELETE</td>
<td>ORA-02292</td>
</tr>
</tbody>
</table>
</div>
<p>FK 에러는 방향만 기억하면 돼요. <strong>자식에 넣을 때</strong>는 부모에 값이 있는지, <strong>부모에서 지울 때</strong>는 자식이 쓰고 있는지 검사해요.</p>
<p>참고로 7장의 <code>CREATE TABLE ... AS SELECT</code>로 테이블을 복사하면 NOT NULL만 따라오고 PRIMARY KEY·FOREIGN KEY 같은 다른 제약조건은 복사되지 않아요.</p>
<h2 id="c-66">한 줄 요약</h2>
<ul>
<li><strong>PRIMARY KEY</strong> = NOT NULL + UNIQUE. 반드시 있어야 하고, 중복되면 안 돼요.</li>
<li><strong>FOREIGN KEY</strong>: 참조하는 값이 부모 테이블에 실제로 있는지 확인해서, 테이블 사이의 &#39;관계&#39;를 맺어 줘요.</li>
<li><strong>CHECK</strong>: 값이 지켜야 할 조건이에요. if문처럼 조건식으로 검사해요.</li>
<li>PRIMARY KEY와 UNIQUE를 걸면 같은 이름의 인덱스가 <strong>자동으로</strong> 만들어져요(13장).</li>
</ul>
<h1 id="c-ch-9">9장 TRANSACTION (트랜잭션)</h1>
<h2 id="c-68">트랜잭션이란?</h2>
<p><strong>한 번에 확정하거나 한 번에 취소하는 작업 묶음</strong>이에요. 대표적인 예가 계좌 이체예요.</p>
<ol>
<li>A 계좌에서 10만 원을 빼고 (UPDATE)</li>
<li>B 계좌에 10만 원을 더해요 (UPDATE)</li>
</ol>
<p>1번만 되고 2번 전에 오류가 나면 돈이 사라져요. 그래서 두 UPDATE를 하나의 트랜잭션으로 묶어요. <strong>둘 다 성공하면 COMMIT, 하나라도 문제가 있으면 ROLLBACK</strong>해서 아무 일도 없었던 것처럼 돌려요.</p>
<p>트랜잭션은 첫 번째 DML(INSERT·UPDATE·DELETE)을 실행하면 <strong>자동으로 시작</strong>돼요. 그리고 COMMIT이나 ROLLBACK을 만나면 끝나요. 시작 명령어는 따로 없어요.</p>
<h2 id="c-69">세 가지 명령어</h2>
<div class="tw"><table><thead><tr>
<th>명령어</th>
<th>하는 일</th>
<th>비유</th>
</tr>
</thead>
<tbody><tr>
<td><code>COMMIT</code></td>
<td>지금까지의 변경을 <strong>영구 저장</strong>하고 트랜잭션을 끝냄</td>
<td>문서의 [저장]</td>
</tr>
<tr>
<td><code>ROLLBACK</code></td>
<td>마지막 COMMIT 이후의 변경을 <strong>모두 취소</strong>하고 트랜잭션을 끝냄</td>
<td>저장하지 않고 닫기</td>
</tr>
<tr>
<td><code>SAVEPOINT 이름</code></td>
<td>트랜잭션 중간에 <strong>되돌아올 지점</strong>을 표시함</td>
<td>게임의 중간 저장</td>
</tr>
<tr>
<td><code>ROLLBACK TO 이름</code></td>
<td>그 SAVEPOINT <strong>이후의 변경만</strong> 취소함</td>
<td>중간 저장으로 불러오기</td>
</tr>
</tbody>
</table>
</div>
<p><code>ROLLBACK TO</code>는 트랜잭션을 끝내지 않아요. SAVEPOINT 이전의 변경은 아직 확정되지 않은 채로 남아 있어서, 끝내려면 따로 COMMIT이나 ROLLBACK을 해야 해요.</p>
<h2 id="c-70">한 단계씩 따라가 보기 (교안 9.2 그림)</h2>
<p>207번에서 만든 <code>emp_staff</code>(사원 10명)로 직접 따라 해 볼 수 있어요. 각 단계 뒤에 <code>SELECT * FROM emp_staff;</code>로 확인해 보세요.</p>
<div class="tw"><table><thead><tr>
<th>단계</th>
<th>명령</th>
<th>이 시점의 emp_staff</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td><code>COMMIT;</code></td>
<td>10명. 여기가 출발점</td>
</tr>
<tr>
<td>2</td>
<td><code>INSERT INTO emp_staff VALUES (&#39;홍길동&#39;, &#39;사원&#39;, 900, 110);</code></td>
<td>11명 (홍길동 추가)</td>
</tr>
<tr>
<td>3</td>
<td><code>SAVEPOINT a;</code></td>
<td>변화 없음. 지점 a 표시</td>
</tr>
<tr>
<td>4</td>
<td><code>UPDATE emp_staff SET salary = 1000 WHERE name = &#39;구원상&#39;;</code></td>
<td>구원상 940 → 1000</td>
</tr>
<tr>
<td>5</td>
<td><code>SAVEPOINT b;</code></td>
<td>변화 없음. 지점 b 표시</td>
</tr>
<tr>
<td>6</td>
<td><code>DELETE FROM emp_staff WHERE name = &#39;서정주&#39;;</code></td>
<td>10명 (서정주 삭제)</td>
</tr>
<tr>
<td>7</td>
<td><code>ROLLBACK TO b;</code></td>
<td>6단계만 취소 → 서정주 돌아옴, 11명</td>
</tr>
<tr>
<td>8</td>
<td><code>ROLLBACK TO a;</code></td>
<td>4단계 취소 → 구원상 다시 940. 홍길동은 그대로</td>
</tr>
<tr>
<td>9</td>
<td><code>ROLLBACK;</code></td>
<td>2단계까지 모두 취소 → 1단계와 같은 10명</td>
</tr>
</tbody>
</table>
</div>
<p>9단계 대신 <code>COMMIT;</code>을 하면 8단계 상태(홍길동 추가, 구원상 940)가 영구 저장돼요. COMMIT한 뒤에는 ROLLBACK을 해도 되돌릴 수 없고, SAVEPOINT a·b도 사라져요.</p>
<h2 id="c-71">COMMIT 전과 후, 데이터는 어떤 상태일까요? (9.5~9.7)</h2>
<div class="tw"><table><thead><tr>
<th></th>
<th>COMMIT·ROLLBACK 전</th>
<th>COMMIT 후</th>
<th>ROLLBACK 후</th>
</tr>
</thead>
<tbody><tr>
<td>변경 내용</td>
<td>임시 상태 (되돌릴 수 있음)</td>
<td>DB에 영구 반영</td>
<td>취소되고 이전 값으로 복구</td>
</tr>
<tr>
<td><strong>나</strong>는 볼 수 있나</td>
<td>보임</td>
<td>보임</td>
<td>이전 값이 보임</td>
</tr>
<tr>
<td><strong>다른 사용자</strong>는</td>
<td><strong>안 보임</strong> (변경 전 값이 보임)</td>
<td>보임</td>
<td>이전 값이 보임</td>
</tr>
<tr>
<td>바뀐 행의 Lock</td>
<td>걸려 있음. 다른 사용자는 그 행을 수정 못 함</td>
<td>풀림</td>
<td>풀림</td>
</tr>
</tbody>
</table>
</div>
<p>여기서 자주 하는 오해: 내 화면에서 SELECT로 바뀐 값이 보여도, COMMIT 전에는 <strong>나만 보는 임시 상태</strong>예요. 다른 창(다른 세션)에서 조회하면 변경 전 값이 나와요. 실습 스크립트를 실행한 뒤 <code>COMMIT;</code>까지 해야 한다고 했던 이유도 이것이에요.</p>
<h2 id="c-72">명령하지 않아도 자동으로 일어나는 경우 (9.4)</h2>
<div class="tw"><table><thead><tr>
<th>상황</th>
<th>결과</th>
</tr>
</thead>
<tbody><tr>
<td>DDL 실행 (<code>CREATE</code>, <code>ALTER</code>, <code>DROP</code> 등)</td>
<td><strong>자동 COMMIT</strong></td>
</tr>
<tr>
<td>DCL 실행 (<code>GRANT</code>, <code>REVOKE</code>)</td>
<td><strong>자동 COMMIT</strong></td>
</tr>
<tr>
<td>SQL*Plus를 <code>EXIT</code>로 정상 종료</td>
<td>자동 COMMIT</td>
</tr>
<tr>
<td>창을 강제로 닫거나 시스템 오류</td>
<td>자동 ROLLBACK</td>
</tr>
</tbody>
</table>
</div>
<p><strong>가장 조심할 부분은 DDL의 자동 COMMIT이에요.</strong> 예를 들어 보세요.</p>
<pre><code><span class="hl-kw">DELETE</span> <span class="hl-kw">FROM</span> emp_staff;             <span class="hl-com">-- 실수로 전부 삭제</span>
<span class="hl-kw">CREATE</span> <span class="hl-kw">TABLE</span> <span class="hl-fn">test</span> (id <span class="hl-kw">NUMBER</span>);     <span class="hl-com">-- DDL → 여기서 자동 COMMIT!</span>
<span class="hl-kw">ROLLBACK</span>;                          <span class="hl-com">-- 이미 확정돼서 삭제를 되돌릴 수 없음</span></code></pre>
<p>CREATE TABLE 자체는 새 테이블만 만드는 명령이지만, 그 <strong>앞에 해둔 DELETE까지 같이 확정</strong>돼요. 그래서 DML 작업 중에는 DDL을 섞기 전에 COMMIT할지 ROLLBACK할지 먼저 정해야 해요.</p>
<h2 id="c-73">트랜잭션의 4가지 특징: ACID</h2>
<p>트랜잭션이 지켜야 하는 네 가지 성질이에요. 앞글자를 따서 ACID라고 불러요.</p>
<div class="tw"><table><thead><tr>
<th>특징</th>
<th>뜻</th>
<th>계좌 이체로 보면</th>
</tr>
</thead>
<tbody><tr>
<td><strong>A</strong>tomicity 원자성</td>
<td>전부 성공하거나 전부 취소돼야 함. 일부만 반영되는 일은 없음</td>
<td>출금만 되고 입금은 안 되는 상황은 없음</td>
</tr>
<tr>
<td><strong>C</strong>onsistency 일관성</td>
<td>트랜잭션 전후로 데이터가 규칙(제약조건)에 맞는 상태를 유지함</td>
<td>이체 전후 두 계좌의 합계가 같음. 잔액이 음수가 되지 않음</td>
</tr>
<tr>
<td><strong>I</strong>solation 고립성(격리성)</td>
<td>동시에 실행되는 트랜잭션끼리 서로 끼어들지 않음</td>
<td>이체 중간의 반쯤 끝난 상태를 다른 사람이 보지 못함</td>
</tr>
<tr>
<td><strong>D</strong>urability 지속성</td>
<td>COMMIT된 결과는 영구히 남음</td>
<td>COMMIT 직후 서버가 꺼져도 이체 결과는 유지됨</td>
</tr>
</tbody>
</table>
</div>
<p>원자성을 계좌 이체로 보면, ①입금과 ②출금이 <strong>둘 다 O</strong>면 COMMIT해서 확정하고, <strong>하나라도 X</strong>면 ROLLBACK으로 처음으로 돌아가요. 아래 상자처럼 <strong>O와 X가 섞인 상태는 허용되지 않아요.</strong> 트랜잭션이 진행되는 동안에는 바뀐 행에 자물쇠(Lock)가 걸려 있고, COMMIT하면 풀려요.</p>
<h2 id="c-74">Lock (잠금): R Lock과 W Lock</h2>
<p>여러 사람이 같은 데이터를 동시에 다루면 충돌이 생겨요. Lock은 &quot;내가 쓰는 동안 기다려&quot;라고 표시하는 자물쇠예요. 고립성(I)을 지키는 방법이기도 해요.</p>
<ul>
<li><strong>R Lock (읽기 잠금, 공유 잠금):</strong> 읽는 사람끼리는 데이터를 바꾸지 않으니 <strong>여러 명이 동시에</strong> 걸 수 있어요.</li>
<li><strong>W Lock (쓰기 잠금, 배타 잠금):</strong> 쓰는 사람은 <strong>혼자만</strong> 걸 수 있어요. 다른 사람은 읽기도 쓰기도 기다려요.</li>
</ul>
<p>예를 들어 테이블에 R Lock이 걸려 있을 때, 읽으려는 두 사람(R)은 들어가지만 쓰려는 사람(W)은 막혀요(X).</p>
<div class="tw"><table><thead><tr>
<th>이미 걸린 잠금 ↓ / 새로 요청 →</th>
<th>R Lock</th>
<th>W Lock</th>
</tr>
</thead>
<tbody><tr>
<td>R Lock</td>
<td>가능 (동시에 읽기)</td>
<td>기다림</td>
</tr>
<tr>
<td>W Lock</td>
<td>기다림</td>
<td>기다림</td>
</tr>
</tbody>
</table>
</div>
<p>오라클 참고: 오라클은 평범한 SELECT에는 R Lock을 걸지 않아요. 대신 다른 사람이 COMMIT하기 전에는 <strong>변경 전 값</strong>을 보여줘서, 읽기와 쓰기가 서로 기다리지 않아요(위 9.5 표의 &quot;다른 사용자는 안 보임&quot;). 같은 행을 동시에 UPDATE하는 경우처럼 <strong>W Lock끼리는 오라클에서도 기다려요.</strong></p>
<h2 id="c-75">비관적 잠금 vs 낙관적 잠금</h2>
<p>Lock을 언제 거느냐에 따라 두 가지 전략이 있어요.</p>
<div class="tw"><table><thead><tr>
<th></th>
<th>비관적 잠금 (Pessimistic Lock)</th>
<th>낙관적 잠금 (Optimistic Lock)</th>
</tr>
</thead>
<tbody><tr>
<td>생각</td>
<td>&quot;누군가 분명 동시에 고칠 거야&quot;</td>
<td>&quot;동시에 고칠 일은 드물 거야&quot;</td>
</tr>
<tr>
<td>방법</td>
<td>읽을 때부터 잠금을 걸고, 다 끝날 때까지 다른 사람을 기다리게 함</td>
<td>잠금 없이 읽고, <strong>수정하는 순간에</strong> 그사이 누가 바꿨는지 확인함</td>
</tr>
<tr>
<td>충돌하면</td>
<td>애초에 충돌이 안 생김 (대신 기다림)</td>
<td>수정이 실패하고, 다시 읽어서 재시도함</td>
</tr>
<tr>
<td>장점</td>
<td>확실하게 안전함</td>
<td>기다리는 시간이 없어 빠름</td>
</tr>
<tr>
<td>어울리는 곳</td>
<td>좌석 예매, 재고 차감처럼 충돌이 잦은 곳</td>
<td>게시글 수정처럼 충돌이 드문 곳</td>
</tr>
</tbody>
</table>
</div>
<p>낙관적 잠금은 보통 테이블에 <strong>version 컬럼</strong>을 만들어서 구현해요. 오라클이 제공하는 명령어가 아니라, 아래처럼 SQL로 직접 만드는 방식이에요.</p>
<pre><code><span class="hl-com">-- ① 읽기: 지금 version이 3이라는 것을 기억</span>
<span class="hl-kw">SELECT</span> salary, version <span class="hl-kw">FROM</span> emp_t <span class="hl-kw">WHERE</span> id = <span class="hl-num">1</span>;

<span class="hl-com">-- ② 수정: &quot;version이 아직 3일 때만&quot; 고치고, version을 1 올림</span>
<span class="hl-kw">UPDATE</span> emp_t
<span class="hl-kw">SET</span> salary = <span class="hl-num">3500</span>, version = version + <span class="hl-num">1</span>
<span class="hl-kw">WHERE</span> id = <span class="hl-num">1</span> <span class="hl-kw">AND</span> version = <span class="hl-num">3</span>;
<span class="hl-com">-- 1행 수정됨 → 성공</span>
<span class="hl-com">-- 0행 수정됨 → 그사이 누가 먼저 바꿨음(version이 4가 됨) → ①부터 다시</span></code></pre>
<p>비관적 잠금은 오라클에서 <code>SELECT ... FOR UPDATE</code>로 걸어요. 읽는 순간 그 행에 W Lock이 걸려서, COMMIT·ROLLBACK 전까지 다른 사람은 그 행을 수정하지 못해요. 교안 범위 밖이니 이름만 알아 두면 돼요.</p>
<h2 id="c-76">한 줄 요약</h2>
<ul>
<li><strong>트랜잭션</strong>은 여러 명령을 하나로 묶은 단위예요.</li>
<li>DML은 데이터를 바꾸는 명령이라 COMMIT 전까지 되돌릴 수 있지만, DDL은 구조를 바꾸는 명령이라 명령 하나하나가 바로 COMMIT돼요.</li>
<li>참고: 나중에 Java(JDBC)로 DB를 쓸 때 보는 <code>setAutoCommit(false)</code>는 자동 커밋을 끄고 직접 COMMIT·ROLLBACK하겠다는 설정이에요.</li>
</ul>
<h1 id="c-ch-10">10장 DICTIONARY (데이터 사전)</h1>
<h2 id="c-78">데이터 사전이란?</h2>
<p>DB가 스스로 관리하는 <strong>설명서</strong>예요. 어떤 사용자가 있는지, 누가 어떤 테이블을 가졌는지, 테이블에 어떤 제약조건이 걸려 있는지가 모두 여기에 기록돼요. 8장에서 &quot;모든 Constraint는 데이터 사전에 저장된다&quot;고 한 것이 바로 이것이에요.</p>
<ul>
<li>오라클이 <strong>자동으로 만들고 갱신</strong>해요. CREATE TABLE을 하면 사전에도 그 테이블 정보가 추가돼요.</li>
<li>우리는 <strong>읽기만</strong> 할 수 있어요. 평소처럼 SELECT로 조회해요.</li>
<li>주인은 SYS 계정이에요.</li>
<li>데이터 사전에 담긴 정보를 <strong>메타정보</strong>(데이터에 대한 데이터)라고 해요. 사용자, 테이블, 권한 같은 DB 관리 정보예요.</li>
</ul>
<h2 id="c-79">접두어로 범위를 구분해요</h2>
<p>같은 종류의 정보도 접두어에 따라 <strong>얼마나 넓게 보여주느냐</strong>가 달라져요.</p>
<div class="tw"><table><thead><tr>
<th>접두어</th>
<th>보여주는 범위</th>
<th>예</th>
</tr>
</thead>
<tbody><tr>
<td><code>USER_</code></td>
<td><strong>내가 소유한</strong> 객체</td>
<td><code>USER_TABLES</code> = student가 만든 테이블</td>
</tr>
<tr>
<td><code>ALL_</code></td>
<td>내가 <strong>접근할 수 있는</strong> 객체 (내 것 + 권한을 받은 것)</td>
<td><code>ALL_TABLES</code></td>
</tr>
<tr>
<td><code>DBA_</code></td>
<td>DB의 <strong>모든</strong> 객체. DBA 권한 필요</td>
<td><code>DBA_TABLES</code></td>
</tr>
<tr>
<td><code>V$</code></td>
<td>서버 성능·Lock 같은 <strong>실시간 상태</strong>. 보통 DBA만</td>
<td><code>V$SESSION</code></td>
</tr>
</tbody>
</table>
</div>
<p>범위는 USER_ ⊂ ALL_ ⊂ DBA_ 순서로 넓어져요. 실습할 때는 대부분 <code>USER_</code>만 쓰면 돼요.</p>
<p>접두어가 없는 것도 몇 개 있어요. <code>DICTIONARY</code>는 데이터 사전 전체의 목차, <code>IND</code>는 <code>USER_INDEXES</code>의 짧은 별명(동의어)이에요.</p>
<h2 id="c-80">자주 쓰는 조회 (10.6)</h2>
<pre><code><span class="hl-com">-- ① 목차 보기: USER로 시작하는 사전 뷰 목록</span>
<span class="hl-kw">SELECT</span> * <span class="hl-kw">FROM</span> dictionary <span class="hl-kw">WHERE</span> table_name <span class="hl-kw">LIKE</span> <span class="hl-str">'USER%'</span>;

<span class="hl-com">-- ② 내가 만든 테이블 목록</span>
<span class="hl-kw">SELECT</span> object_name <span class="hl-kw">FROM</span> user_objects <span class="hl-kw">WHERE</span> object_type = <span class="hl-str">'TABLE'</span>;

<span class="hl-com">-- ③ S_EMP에 걸린 제약조건</span>
<span class="hl-kw">SELECT</span> constraint_name, constraint_type, search_condition, r_constraint_name
<span class="hl-kw">FROM</span> user_constraints
<span class="hl-kw">WHERE</span> table_name = <span class="hl-str">'S_EMP'</span>;

<span class="hl-com">-- ④ 제약조건이 어느 컬럼에 걸렸는지</span>
<span class="hl-kw">SELECT</span> constraint_name, column_name
<span class="hl-kw">FROM</span> user_cons_columns
<span class="hl-kw">WHERE</span> table_name = <span class="hl-str">'S_EMP'</span>;</code></pre>
<p>③의 <code>constraint_type</code>은 한 글자로 나와요.</p>
<div class="tw"><table><thead><tr>
<th>글자</th>
<th>뜻</th>
</tr>
</thead>
<tbody><tr>
<td>P</td>
<td>PRIMARY KEY</td>
</tr>
<tr>
<td>U</td>
<td>UNIQUE</td>
</tr>
<tr>
<td>R</td>
<td>FOREIGN KEY (Reference). <code>r_constraint_name</code>에 참조하는 부모의 PK 이름이 나옴</td>
</tr>
<tr>
<td>C</td>
<td>CHECK. <strong>NOT NULL도 C로 나와요.</strong> <code>search_condition</code>에 <code>&quot;NAME&quot; IS NOT NULL</code>처럼 표시돼요</td>
</tr>
</tbody>
</table>
</div>
<p>S_EMP에 ③을 실행하면 <code>PK_S_EMP</code>(P) 하나와, ID·NAME의 NOT NULL 두 개(C, 이름은 <code>SYS_C...</code>)가 나올 거예요. NOT NULL에 이름을 붙이지 않아서 오라클이 자동으로 지은 이름이에요.</p>
<h2 id="c-81">주의: 값은 대문자로</h2>
<p>오라클은 테이블 이름을 <strong>대문자로 저장</strong>해요. <code>create table s_emp</code>처럼 소문자로 만들어도 사전에는 <code>S_EMP</code>로 들어가요. 그래서 조회할 때 따옴표 안의 값은 반드시 대문자로 써야 해요.</p>
<ul>
<li><code>WHERE table_name = &#39;S_EMP&#39;</code> → 결과 나옴</li>
<li><code>WHERE table_name = &#39;s_emp&#39;</code> → <strong>0행</strong> (에러는 안 나지만 아무것도 안 나옴)</li>
</ul>
<p>SQL 키워드는 대소문자를 가리지 않지만, 따옴표 안의 값은 가린다는 것과 같은 원리예요.</p>
<h1 id="c-ch-11">11장 DDL (데이터 정의어)</h1>
<p>DDL은 테이블의 <strong>구조</strong>를 다루는 명령어예요. 가장 중요한 점은 <strong>실행하는 순간 자동 COMMIT돼서 ROLLBACK으로 되돌릴 수 없다</strong>는 것이에요. 9장에서 본 &quot;CREATE하면 앞의 DELETE까지 확정된다&quot;가 모든 DDL에 해당돼요.</p>
<p>아래 예시는 모두 실습 문제에서 만든 <code>emp_t</code>, <code>dept_t</code>를 기준으로 해요.</p>
<h2 id="c-83">명령어 분류 한눈에 보기</h2>
<p>SQL 명령어는 하는 일에 따라 네 가지로 나뉘어요.</p>
<div class="tw"><table><thead><tr>
<th>분류</th>
<th>하는 일</th>
<th>명령어</th>
<th>자동 COMMIT</th>
<th>교안</th>
</tr>
</thead>
<tbody><tr>
<td>DML (조작)</td>
<td>테이블 안의 <strong>데이터</strong>를 다룸</td>
<td>SELECT, INSERT, UPDATE, DELETE</td>
<td>아니오 (ROLLBACK 가능)</td>
<td>2~7장</td>
</tr>
<tr>
<td>TCL (트랜잭션)</td>
<td>DML 변경을 확정·취소</td>
<td>COMMIT, ROLLBACK, SAVEPOINT</td>
<td>-</td>
<td>9장</td>
</tr>
<tr>
<td>DDL (정의)</td>
<td>테이블 같은 <strong>구조(그릇)</strong> 자체를 만들고 고침</td>
<td>CREATE, ALTER, DROP, TRUNCATE, RENAME, COMMENT</td>
<td><strong>예</strong></td>
<td><strong>11장</strong></td>
</tr>
<tr>
<td>DCL (제어)</td>
<td><strong>누가 무엇을 할 수 있는지</strong> 권한을 주고 빼앗음</td>
<td>GRANT, REVOKE</td>
<td><strong>예</strong></td>
<td><strong>12장</strong></td>
</tr>
</tbody>
</table>
</div>
<p>13장은 테이블 말고도 DB에 만들 수 있는 다른 <strong>오브젝트</strong>(시퀀스, 인덱스 등)를 다뤄요. 이것들도 CREATE·DROP으로 만들고 지우니 DDL이에요.</p>
<p>비유하면, 테이블이 <strong>서랍장</strong>이고 데이터가 서랍 안의 <strong>물건</strong>이에요. DML은 물건을 넣고 빼고, DDL은 서랍장을 사고 고치고 버리고, DCL은 서랍 열쇠를 누구에게 줄지 정해요.</p>
<h2 id="c-84">테이블 삭제: DROP TABLE (11.2)</h2>
<pre><code><span class="hl-kw">DROP</span> <span class="hl-kw">TABLE</span> tmp_t;
<span class="hl-kw">DROP</span> <span class="hl-kw">TABLE</span> dept_t <span class="hl-kw">CASCADE</span> <span class="hl-kw">CONSTRAINTS</span>;</code></pre>
<ul>
<li>테이블의 <strong>구조와 데이터, 인덱스가 모두</strong> 사라져요.</li>
<li><strong>CASCADE CONSTRAINTS</strong>가 필요한 경우: 지우려는 테이블이 <strong>부모</strong>여서 다른 테이블의 FK가 참조하고 있을 때예요. <code>dept_t</code>는 <code>emp_t</code>가 참조하니 그냥 DROP하면 에러(ORA-02449)가 나요. CASCADE CONSTRAINTS를 붙이면 <code>emp_t</code>의 FK 제약조건을 지우고 <code>dept_t</code>를 삭제해요. <code>emp_t</code>의 데이터는 그대로 남아요.</li>
<li>처음 받은 실습 스크립트가 <code>DROP TABLE student.S_EMP CASCADE CONSTRAINTS;</code>로 시작했던 이유가 이것이에요. 테이블 사이의 참조 관계와 상관없이 다시 만들 수 있게 한 거예요.</li>
</ul>
<h2 id="c-85">컬럼 추가: ALTER TABLE ... ADD (11.3)</h2>
<pre><code><span class="hl-kw">ALTER</span> <span class="hl-kw">TABLE</span> emp_t
<span class="hl-kw">ADD</span> (phone     <span class="hl-kw">VARCHAR2</span>(<span class="hl-num">15</span>),
     hire_date <span class="hl-kw">DATE</span> <span class="hl-kw">DEFAULT</span> SYSDATE);</code></pre>
<ul>
<li>새 컬럼은 항상 <strong>맨 뒤에</strong> 붙어요. 중간에 끼워 넣을 수는 없어요.</li>
<li>이미 있던 행들의 새 컬럼은 NULL이에요. (DEFAULT를 주면 그 값이 들어가요.)</li>
<li><strong>DEFAULT</strong>: INSERT할 때 그 컬럼을 빼면 자동으로 들어갈 기본값이에요.</li>
</ul>
<h2 id="c-86">컬럼 수정: ALTER TABLE ... MODIFY (11.4)</h2>
<pre><code><span class="hl-kw">ALTER</span> <span class="hl-kw">TABLE</span> emp_t <span class="hl-kw">MODIFY</span> (name <span class="hl-kw">VARCHAR2</span>(<span class="hl-num">50</span>));        <span class="hl-com">-- 크기 늘리기</span>
<span class="hl-kw">ALTER</span> <span class="hl-kw">TABLE</span> emp_t <span class="hl-kw">MODIFY</span> (salary <span class="hl-kw">DEFAULT</span> <span class="hl-num">1000</span>);      <span class="hl-com">-- 기본값 바꾸기</span>
<span class="hl-kw">ALTER</span> <span class="hl-kw">TABLE</span> emp_t <span class="hl-kw">MODIFY</span> (phone <span class="hl-kw">NOT</span> <span class="hl-kw">NULL</span>);           <span class="hl-com">-- NOT NULL 추가</span></code></pre>
<p>MODIFY는 &quot;이미 들어 있는 데이터가 망가지지 않는가&quot;를 기준으로 허용돼요.</p>
<div class="tw"><table><thead><tr>
<th>바꾸려는 것</th>
<th>언제나 가능?</th>
<th>조건</th>
</tr>
</thead>
<tbody><tr>
<td>크기 <strong>늘리기</strong></td>
<td>가능</td>
<td>-</td>
</tr>
<tr>
<td>크기 <strong>줄이기</strong>, 데이터 타입 바꾸기</td>
<td>조건부</td>
<td>그 컬럼이 모두 NULL이거나 테이블이 비어 있을 때</td>
</tr>
<tr>
<td>DEFAULT 바꾸기</td>
<td>가능</td>
<td><strong>앞으로 INSERT하는 행부터</strong> 적용. 기존 행은 그대로</td>
</tr>
<tr>
<td>NOT NULL 추가</td>
<td>조건부</td>
<td>그 컬럼에 NULL이 하나도 없을 때</td>
</tr>
</tbody>
</table>
</div>
<p>위 세 번째 줄(phone NOT NULL)은 방금 추가한 phone이 전부 NULL이라 <strong>에러</strong>가 나요. 먼저 UPDATE로 값을 채운 다음에 해야 해요.</p>
<h2 id="c-87">제약조건 바꾸기 (11.5)</h2>
<p>테이블을 만든 뒤에도 제약조건을 더하거나 빼거나 잠깐 꺼 둘 수 있어요.</p>
<pre><code><span class="hl-com">-- 추가 (테이블 레벨 문법과 같아요)</span>
<span class="hl-kw">ALTER</span> <span class="hl-kw">TABLE</span> emp_t <span class="hl-kw">ADD</span> <span class="hl-kw">CONSTRAINT</span> emp_t_phone_uk <span class="hl-kw">UNIQUE</span> (phone);

<span class="hl-com">-- 삭제 (이름으로 지워요 → 이름을 붙여 두면 편한 이유)</span>
<span class="hl-kw">ALTER</span> <span class="hl-kw">TABLE</span> emp_t <span class="hl-kw">DROP</span> <span class="hl-kw">CONSTRAINT</span> emp_t_phone_uk;

<span class="hl-com">-- 비활성화 / 활성화</span>
<span class="hl-kw">ALTER</span> <span class="hl-kw">TABLE</span> emp_t <span class="hl-kw">DISABLE</span> <span class="hl-kw">CONSTRAINT</span> emp_t_salary_ck;
<span class="hl-kw">ALTER</span> <span class="hl-kw">TABLE</span> emp_t <span class="hl-kw">ENABLE</span>  <span class="hl-kw">CONSTRAINT</span> emp_t_salary_ck;</code></pre>
<ul>
<li><strong>NOT NULL은 ADD CONSTRAINT로 추가할 수 없어요.</strong> NOT NULL은 테이블 레벨로 정의할 수 없기 때문이에요(8장). 대신 위처럼 <code>MODIFY</code>를 써요.</li>
<li><strong>DROP CONSTRAINT ... CASCADE</strong>: 다른 테이블의 FK가 참조하는 PK를 지울 때 필요해요. 예를 들어 <code>dept_t</code>의 PK를 지우려면 CASCADE를 붙여야 하고, 그러면 <code>emp_t</code>의 FK도 같이 지워져요.</li>
<li><strong>DISABLE / ENABLE</strong>: 제약조건을 지우지 않고 잠깐 꺼 두는 거예요. 대량으로 데이터를 옮길 때 검사를 생략해서 빨리 넣으려고 써요. 다시 ENABLE할 때는 <strong>기존 데이터를 검사</strong>해서, 꺼 둔 사이에 규칙을 어긴 데이터가 들어갔으면 에러가 나요.</li>
</ul>
<h2 id="c-88">그 외의 DDL (11.6)</h2>
<pre><code><span class="hl-kw">RENAME</span> emp_t <span class="hl-kw">TO</span> emp_test;                                   <span class="hl-com">-- 이름 바꾸기</span>
<span class="hl-kw">TRUNCATE</span> <span class="hl-kw">TABLE</span> emp_test;                                    <span class="hl-com">-- 데이터만 전부 삭제</span>
<span class="hl-kw">COMMENT</span> <span class="hl-kw">ON</span> <span class="hl-kw">TABLE</span> emp_test <span class="hl-kw">IS</span> <span class="hl-str">'실습용 직원 테이블'</span>;         <span class="hl-com">-- 테이블 설명</span>
<span class="hl-kw">COMMENT</span> <span class="hl-kw">ON</span> <span class="hl-kw">COLUMN</span> emp_test.salary <span class="hl-kw">IS</span> <span class="hl-str">'월급(만원)'</span>;         <span class="hl-com">-- 컬럼 설명</span></code></pre>
<ul>
<li><strong>RENAME</strong>: 테이블·뷰·시퀀스·시노님의 이름을 바꿔요. 주인만 바꿀 수 있어요.</li>
<li><strong>COMMENT</strong>: 테이블이나 컬럼에 메모를 달아요. 달아 둔 메모는 데이터 사전(<code>user_tab_comments</code>, <code>user_col_comments</code>)에서 조회해요.</li>
</ul>
<h2 id="c-89">헷갈리기 쉬운 세 가지: DELETE vs TRUNCATE vs DROP</h2>
<div class="tw"><table><thead><tr>
<th></th>
<th>DELETE</th>
<th>TRUNCATE</th>
<th>DROP</th>
</tr>
</thead>
<tbody><tr>
<td>종류</td>
<td>DML</td>
<td>DDL</td>
<td>DDL</td>
</tr>
<tr>
<td>지우는 것</td>
<td>조건에 맞는 행 (WHERE 가능)</td>
<td><strong>모든 행</strong> (WHERE 불가)</td>
<td>행 + <strong>테이블 구조까지</strong></td>
</tr>
<tr>
<td>테이블은 남나</td>
<td>남음</td>
<td>남음 (빈 테이블)</td>
<td>사라짐</td>
</tr>
<tr>
<td>ROLLBACK</td>
<td><strong>가능</strong></td>
<td>불가능</td>
<td>불가능</td>
</tr>
<tr>
<td>저장 공간</td>
<td>그대로 차지</td>
<td><strong>반환</strong></td>
<td>반환</td>
</tr>
<tr>
<td>속도</td>
<td>느림 (한 행씩 지우고 되돌릴 정보를 남김)</td>
<td>빠름</td>
<td>빠름</td>
</tr>
</tbody>
</table>
</div>
<p>기억법: 서랍장으로 치면 DELETE는 물건을 하나씩 꺼내기, TRUNCATE는 서랍을 통째 비우기, DROP은 서랍장을 버리기예요.</p>
<h1 id="c-ch-12">12장 DCL (데이터 제어어)</h1>
<h2 id="c-91">왜 필요할까요?</h2>
<p>DB 하나를 여러 사용자가 같이 쓰니까, <strong>누가 무엇을 할 수 있는지</strong> 정해야 해요. 예를 들어 신입 사원은 직원 테이블을 볼 수만 있고, 급여는 인사팀만 고칠 수 있게 하는 거예요. DBA가 사용자를 만들고, 필요한 만큼만 권한을 주고(GRANT), 필요 없어지면 빼앗아요(REVOKE).</p>
<p>1장에서 student 계정을 만든 뒤 <code>CREATE SESSION</code> 권한이 없어서 접속이 안 됐던 것, 그래서 GRANT로 권한을 준 것이 바로 이 내용이에요.</p>
<h2 id="c-92">권한(Privilege)의 두 종류</h2>
<div class="tw"><table><thead><tr>
<th></th>
<th>시스템 권한 (System Privilege)</th>
<th>객체 권한 (Object Privilege)</th>
</tr>
</thead>
<tbody><tr>
<td>무엇에 대한 권한</td>
<td>특정 <strong>SQL 문장을 실행</strong>할 수 있는 권한</td>
<td><strong>특정 객체(테이블 등)에</strong> 무엇을 할 수 있는지</td>
</tr>
<tr>
<td>예</td>
<td><code>CREATE SESSION</code>(접속), <code>CREATE TABLE</code>, <code>CREATE SEQUENCE</code>, <code>CREATE VIEW</code></td>
<td><code>SELECT ON s_emp</code>, <code>UPDATE ON s_emp</code></td>
</tr>
<tr>
<td>누가 주나</td>
<td>보통 DBA</td>
<td>그 객체의 <strong>주인</strong>(예: student)이나 DBA</td>
</tr>
<tr>
<td>문법에 ON</td>
<td>없음</td>
<td><strong>ON 객체명</strong> 있음</td>
</tr>
<tr>
<td>재전달 옵션</td>
<td><code>WITH ADMIN OPTION</code></td>
<td><code>WITH GRANT OPTION</code></td>
</tr>
</tbody>
</table>
</div>
<h2 id="c-93">시스템 권한 주고 빼기 (12.3)</h2>
<pre><code><span class="hl-kw">GRANT</span> <span class="hl-kw">CREATE</span> SESSION, <span class="hl-kw">CREATE</span> <span class="hl-kw">TABLE</span> <span class="hl-kw">TO</span> test;     <span class="hl-com">-- 주기</span>
<span class="hl-kw">GRANT</span> <span class="hl-kw">CREATE</span> <span class="hl-kw">TABLE</span> <span class="hl-kw">TO</span> test <span class="hl-kw">WITH</span> <span class="hl-kw">ADMIN</span> <span class="hl-kw">OPTION</span>;   <span class="hl-com">-- 받은 사람도 다른 사람에게 줄 수 있게</span>
<span class="hl-kw">REVOKE</span> <span class="hl-kw">CREATE</span> <span class="hl-kw">TABLE</span> <span class="hl-kw">FROM</span> test;                  <span class="hl-com">-- 빼기 (TO가 아니라 FROM)</span></code></pre>
<h2 id="c-94">객체 권한 주고 빼기 (12.4)</h2>
<pre><code><span class="hl-kw">GRANT</span> <span class="hl-kw">SELECT</span> <span class="hl-kw">ON</span> s_emp <span class="hl-kw">TO</span> test;                          <span class="hl-com">-- 조회만</span>
<span class="hl-kw">GRANT</span> <span class="hl-kw">SELECT</span>, <span class="hl-kw">INSERT</span> <span class="hl-kw">ON</span> s_emp <span class="hl-kw">TO</span> test <span class="hl-kw">WITH</span> <span class="hl-kw">GRANT</span> <span class="hl-kw">OPTION</span>;  <span class="hl-com">-- 재전달 가능</span>
<span class="hl-kw">GRANT</span> <span class="hl-kw">UPDATE</span> (salary) <span class="hl-kw">ON</span> s_emp <span class="hl-kw">TO</span> test;                 <span class="hl-com">-- salary 컬럼만 수정 가능</span>
<span class="hl-kw">GRANT</span> <span class="hl-kw">SELECT</span> <span class="hl-kw">ON</span> s_dept <span class="hl-kw">TO</span> <span class="hl-kw">PUBLIC</span>;                       <span class="hl-com">-- 모든 사용자에게</span>
<span class="hl-kw">GRANT</span> <span class="hl-kw">ALL</span> <span class="hl-kw">ON</span> s_emp <span class="hl-kw">TO</span> test;                             <span class="hl-com">-- 모든 객체 권한</span>
<span class="hl-kw">REVOKE</span> <span class="hl-kw">SELECT</span>, <span class="hl-kw">INSERT</span> <span class="hl-kw">ON</span> s_emp <span class="hl-kw">FROM</span> test;</code></pre>
<ul>
<li>처음 받은 실습 스크립트에도 <code>GRANT SELECT ON student.S_EMP TO TEST WITH GRANT OPTION;</code>이 있었어요. student가 자기 테이블인 S_EMP를 TEST 사용자도 볼 수 있게 해준 거예요.</li>
<li>권한을 받은 test는 남의 테이블이니 <strong>주인 이름을 앞에 붙여서</strong> 써야 해요: <code>SELECT * FROM student.s_emp;</code></li>
<li>객체마다 줄 수 있는 권한이 달라요.</li>
</ul>
<div class="tw"><table><thead><tr>
<th>객체</th>
<th>줄 수 있는 권한</th>
</tr>
</thead>
<tbody><tr>
<td>테이블</td>
<td>SELECT, INSERT, UPDATE, DELETE, ALTER, INDEX, REFERENCES</td>
</tr>
<tr>
<td>뷰</td>
<td>SELECT, INSERT, UPDATE, DELETE</td>
</tr>
<tr>
<td>시퀀스</td>
<td>SELECT, ALTER</td>
</tr>
<tr>
<td>프로시저</td>
<td>EXECUTE</td>
</tr>
</tbody>
</table>
</div>
<h2 id="c-95">WITH ADMIN OPTION vs WITH GRANT OPTION</h2>
<p>둘 다 &quot;받은 권한을 다른 사람에게 다시 줄 수 있게&quot; 하는 옵션이에요. 차이는 <strong>권한을 빼앗을 때</strong>예요. A가 B에게 주고, B가 다시 C에게 준 뒤 A가 B의 권한을 빼앗으면:</p>
<div class="tw"><table><thead><tr>
<th></th>
<th>WITH ADMIN OPTION (시스템 권한)</th>
<th>WITH GRANT OPTION (객체 권한)</th>
</tr>
</thead>
<tbody><tr>
<td>B의 권한</td>
<td>빼앗김</td>
<td>빼앗김</td>
</tr>
<tr>
<td>C의 권한</td>
<td><strong>그대로 남음</strong></td>
<td><strong>같이 빼앗김</strong> (연쇄 회수)</td>
</tr>
</tbody>
</table>
</div>
<h2 id="c-96">ROLE (12.5~12.6)</h2>
<p>ROLE은 <strong>권한을 묶어 놓은 꾸러미</strong>예요. 사용자 3명에게 권한 3개씩 주려면 GRANT를 9번 해야 하지만, 권한 3개를 ROLE 하나로 묶으면 ROLE에 3번, 사용자에게 3번만 주면 돼요. 나중에 권한을 하나 더 주고 싶을 때도 ROLE에만 추가하면 모두에게 반영돼요. (교안 12.5 그림의 왼쪽이 ROLE 없이, 오른쪽이 ROLE을 쓴 경우예요.)</p>
<p>만드는 순서는 항상 세 단계예요.</p>
<pre><code><span class="hl-kw">CREATE</span> <span class="hl-kw">ROLE</span> emp_reader;                          <span class="hl-com">-- ① ROLE 만들기</span>
<span class="hl-kw">GRANT</span> <span class="hl-kw">SELECT</span> <span class="hl-kw">ON</span> s_emp  <span class="hl-kw">TO</span> emp_reader;            <span class="hl-com">-- ② ROLE에 권한 담기</span>
<span class="hl-kw">GRANT</span> <span class="hl-kw">SELECT</span> <span class="hl-kw">ON</span> s_dept <span class="hl-kw">TO</span> emp_reader;
<span class="hl-kw">GRANT</span> emp_reader <span class="hl-kw">TO</span> test;                        <span class="hl-com">-- ③ 사용자(또는 다른 ROLE)에게 주기</span></code></pre>
<ul>
<li>한 사용자가 여러 ROLE을 받을 수 있고, 한 ROLE을 여러 사용자에게 줄 수도 있어요.</li>
<li>ROLE에 다른 ROLE을 넣을 수도 있어요.</li>
<li>오라클에는 <code>CONNECT</code>, <code>RESOURCE</code>, <code>DBA</code>처럼 미리 만들어진 ROLE도 있어요.</li>
<li><code>CREATE ROLE</code>도 시스템 권한이 필요해서, student 계정에서는 에러가 날 수 있어요. 그럴 때는 DBA 계정으로 실습해요.</li>
</ul>
<h2 id="c-97">권한을 확인하는 데이터 사전 (12.7)</h2>
<div class="tw"><table><thead><tr>
<th>뷰</th>
<th>보여주는 것</th>
</tr>
</thead>
<tbody><tr>
<td><code>USER_ROLE_PRIVS</code></td>
<td>내가 받은 ROLE</td>
</tr>
<tr>
<td><code>ROLE_SYS_PRIVS</code></td>
<td>ROLE에 들어 있는 시스템 권한</td>
</tr>
<tr>
<td><code>ROLE_TAB_PRIVS</code></td>
<td>ROLE에 들어 있는 테이블 권한</td>
</tr>
<tr>
<td><code>USER_TAB_PRIVS_MADE</code></td>
<td><strong>내가 남에게 준</strong> 내 객체 권한</td>
</tr>
<tr>
<td><code>USER_TAB_PRIVS_RECD</code></td>
<td><strong>내가 받은</strong> 객체 권한</td>
</tr>
<tr>
<td><code>USER_COL_PRIVS_MADE</code> / <code>_RECD</code></td>
<td>컬럼 단위로 준 / 받은 권한</td>
</tr>
</tbody>
</table>
</div>
<p>MADE는 &#39;내가 만든(준)&#39;, RECD는 received(받은)의 줄임말로 기억하면 돼요.</p>
<h1 id="c-ch-13">13장 OBJECT (시퀀스·인덱스·뷰·시노님)</h1>
<h2 id="c-99">오브젝트 종류 (13.1)</h2>
<p>DB 안에 이름을 붙여 만들어 두는 것들을 오브젝트라고 해요. 테이블도 그중 하나예요.</p>
<div class="tw"><table><thead><tr>
<th>오브젝트</th>
<th>하는 일</th>
<th>비유</th>
</tr>
</thead>
<tbody><tr>
<td>테이블</td>
<td>행과 열로 데이터를 저장하는 기본 단위</td>
<td>서랍장</td>
</tr>
<tr>
<td>시퀀스 (sequence)</td>
<td>겹치지 않는 번호를 자동으로 만듦. 주로 PK 값에 사용</td>
<td>은행 번호표 기계</td>
</tr>
<tr>
<td>인덱스 (index)</td>
<td>검색 속도를 빠르게 함</td>
<td>책 뒤의 찾아보기</td>
</tr>
<tr>
<td>뷰 (view)</td>
<td>테이블에서 골라낸 데이터를 테이블처럼 보여주는 가상 테이블</td>
<td>저장된 SELECT문</td>
</tr>
<tr>
<td>시노님 (synonym)</td>
<td>오브젝트의 또 다른 이름</td>
<td>별명</td>
</tr>
<tr>
<td>프로그램 유닛</td>
<td>PL/SQL로 만든 프로시저, 함수, 트리거, 패키지</td>
<td>저장된 프로그램</td>
</tr>
</tbody>
</table>
</div>
<p>13장에서는 이 중 <strong>시퀀스, 인덱스, 뷰, 시노님</strong>을 차례로 다뤄요.</p>
<h2 id="c-100">SEQUENCE (13.2~13.7)</h2>
<h3 id="c-101">시퀀스는 왜 필요할까요? (13.2)</h3>
<p>직원을 추가할 때마다 사번을 직접 정하려면 &quot;지금 가장 큰 번호 + 1&quot;을 매번 구해야 해요. 두 사람이 동시에 추가하면 같은 번호를 받을 수도 있고요. 시퀀스는 은행 <strong>번호표 기계</strong>처럼 호출할 때마다 다음 번호를 내주고, 여러 사람이 동시에 뽑아도 <strong>절대 같은 번호를 주지 않아요.</strong></p>
<ul>
<li>여러 테이블과 사용자가 같이 쓸 수 있는 공유 오브젝트예요.</li>
<li>번호가 중간에 <strong>건너뛰어질 수 있어요(GAP).</strong> 아래에서 자세히 봐요.</li>
</ul>
<h3 id="c-102">시퀀스 만들기 (13.3)</h3>
<pre><code><span class="hl-kw">CREATE</span> <span class="hl-kw">SEQUENCE</span> emp_t_seq
  <span class="hl-kw">INCREMENT</span> <span class="hl-kw">BY</span> <span class="hl-num">1</span>        <span class="hl-com">-- 1씩 증가</span>
  <span class="hl-kw">START</span> <span class="hl-kw">WITH</span> <span class="hl-num">10</span>         <span class="hl-com">-- 10부터 시작</span>
  <span class="hl-kw">MAXVALUE</span> <span class="hl-num">9999</span>         <span class="hl-com">-- 최대 9999</span>
  <span class="hl-kw">NOCACHE</span>               <span class="hl-com">-- 미리 만들어 두지 않음</span>
  <span class="hl-kw">NOCYCLE</span>;              <span class="hl-com">-- 최대값에 닿으면 멈춤</span></code></pre>
<div class="tw"><table><thead><tr>
<th>옵션</th>
<th>뜻</th>
<th>생략하면</th>
</tr>
</thead>
<tbody><tr>
<td><code>INCREMENT BY n</code></td>
<td>번호 간격. 음수면 줄어듦</td>
<td>1</td>
</tr>
<tr>
<td><code>START WITH n</code></td>
<td>첫 번호</td>
<td>1</td>
</tr>
<tr>
<td><code>MAXVALUE n</code> / <code>NOMAXVALUE</code></td>
<td>최대값 / 사실상 무제한(아주 큰 수)</td>
<td>NOMAXVALUE</td>
</tr>
<tr>
<td><code>MINVALUE n</code> / <code>NOMINVALUE</code></td>
<td>최소값 / 1</td>
<td>NOMINVALUE</td>
</tr>
<tr>
<td><code>CYCLE</code> / <code>NOCYCLE</code></td>
<td>끝에 닿으면 처음부터 다시 / 에러내고 멈춤</td>
<td>NOCYCLE</td>
</tr>
<tr>
<td><code>CACHE n</code> / <code>NOCACHE</code></td>
<td>번호를 n개 미리 만들어 메모리에 둠 / 안 둠</td>
<td>CACHE 20</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li><strong>PK에 쓸 시퀀스는 반드시 NOCYCLE</strong>이어야 해요. CYCLE이면 번호가 다시 1부터 나와서 PK 중복 에러가 나요.</li>
<li><strong>CACHE</strong>는 번호표를 20장 미리 뽑아 두는 것처럼 속도를 높여줘요. 대신 서버가 꺼지면 미리 뽑아 둔 번호가 사라져서 GAP이 생겨요. 또 데이터 사전의 <code>LAST_NUMBER</code>가 실제로 쓴 번호보다 앞서 보여요. 교안에 &quot;NOCACHE일 때만 테이블에서 조회 가능&quot;이라고 한 것이 이 뜻이에요.</li>
</ul>
<p>만든 시퀀스는 데이터 사전에서 확인해요 (13.4).</p>
<pre><code><span class="hl-kw">SELECT</span> sequence_name, min_value, max_value, increment_by, last_number
<span class="hl-kw">FROM</span> user_sequences;</code></pre>
<h3 id="c-103">NEXTVAL과 CURRVAL (13.5)</h3>
<p>시퀀스는 <code>시퀀스명.NEXTVAL</code>, <code>시퀀스명.CURRVAL</code>이라는 <strong>의사 컬럼</strong>으로 써요.</p>
<ul>
<li><strong>NEXTVAL</strong>: 번호표를 <strong>새로 한 장 뽑아요.</strong> 부를 때마다 번호가 올라가요.</li>
<li><strong>CURRVAL</strong>: 내가 <strong>마지막으로 뽑은 번호를 다시 확인</strong>해요. 번호는 올라가지 않아요.</li>
<li>그래서 CURRVAL은 접속한 뒤 <strong>NEXTVAL을 한 번 이상 쓴 다음에만</strong> 쓸 수 있어요. 안 뽑았는데 확인할 번호는 없으니까요.</li>
</ul>
<p>위에서 만든 <code>emp_t_seq</code>로 따라가 보면 이래요. <code>DUAL</code>은 계산 결과만 보고 싶을 때 쓰는, 오라클이 제공하는 1행짜리 테이블이에요.</p>
<div class="tw"><table><thead><tr>
<th>단계</th>
<th>명령</th>
<th>결과</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td><code>SELECT emp_t_seq.CURRVAL FROM dual;</code></td>
<td><strong>에러</strong> (ORA-08002). 아직 뽑은 번호가 없음</td>
</tr>
<tr>
<td>2</td>
<td><code>SELECT emp_t_seq.NEXTVAL FROM dual;</code></td>
<td>10</td>
</tr>
<tr>
<td>3</td>
<td><code>SELECT emp_t_seq.NEXTVAL FROM dual;</code></td>
<td>11</td>
</tr>
<tr>
<td>4</td>
<td><code>SELECT emp_t_seq.CURRVAL FROM dual;</code></td>
<td>11 (그대로)</td>
</tr>
<tr>
<td>5</td>
<td><code>INSERT INTO emp_t (id, name) VALUES (emp_t_seq.NEXTVAL, &#39;홍길동&#39;);</code></td>
<td>id = 12로 입력</td>
</tr>
<tr>
<td>6</td>
<td><code>ROLLBACK;</code></td>
<td>홍길동은 취소. 하지만 <strong>12번은 돌아오지 않음</strong></td>
</tr>
<tr>
<td>7</td>
<td><code>SELECT emp_t_seq.NEXTVAL FROM dual;</code></td>
<td><strong>13</strong> → 12가 비는 GAP 발생</td>
</tr>
</tbody>
</table>
</div>
<p>번호표는 한 번 뽑으면 취소해도 되돌려 넣을 수 없는 것과 같아요. 그래서 시퀀스 번호는 <strong>겹치지 않는 것은 보장하지만, 빈틈없이 이어지는 것은 보장하지 않아요.</strong></p>
<h3 id="c-104">쓸 수 있는 곳과 없는 곳 (13.6)</h3>
<div class="tw"><table><thead><tr>
<th>쓸 수 있음</th>
<th>쓸 수 없음</th>
</tr>
</thead>
<tbody><tr>
<td>서브쿼리가 아닌 SELECT문</td>
<td>뷰의 SELECT절</td>
</tr>
<tr>
<td>INSERT문의 VALUES절</td>
<td>DISTINCT가 있는 SELECT문</td>
</tr>
<tr>
<td>INSERT문의 SELECT절</td>
<td>GROUP BY, HAVING, ORDER BY가 있는 SELECT문</td>
</tr>
<tr>
<td>UPDATE문의 SET절</td>
<td>SELECT·UPDATE·DELETE 안의 서브쿼리</td>
</tr>
<tr>
<td></td>
<td>CREATE TABLE, ALTER TABLE의 DEFAULT값</td>
</tr>
</tbody>
</table>
</div>
<p>어렵게 외울 필요는 없고, &quot;<strong>행마다 한 번씩 번호를 뽑는다는 게 애매해지는 곳에서는 못 쓴다</strong>&quot;고 이해하면 돼요. 예를 들어 DISTINCT나 GROUP BY는 행을 합치니까 번호를 몇 번 뽑아야 하는지 정할 수 없어요.</p>
<h3 id="c-105">시퀀스 변경과 삭제 (13.7)</h3>
<pre><code><span class="hl-kw">ALTER</span> <span class="hl-kw">SEQUENCE</span> emp_t_seq <span class="hl-kw">INCREMENT</span> <span class="hl-kw">BY</span> <span class="hl-num">5</span> <span class="hl-kw">MAXVALUE</span> <span class="hl-num">99999</span>;
<span class="hl-kw">DROP</span> <span class="hl-kw">SEQUENCE</span> emp_t_seq;</code></pre>
<ul>
<li>변경은 <strong>앞으로 뽑을 번호부터</strong> 적용돼요.</li>
<li><strong>START WITH는 바꿀 수 없어요.</strong> 다른 번호부터 시작하려면 DROP하고 다시 CREATE해야 해요.</li>
<li>현재 번호보다 작은 MAXVALUE처럼 말이 안 되는 값으로는 바꿀 수 없어요.</li>
<li>자기 시퀀스이거나 ALTER 권한(삭제는 DROP ANY SEQUENCE 권한)이 있어야 해요.</li>
</ul>
<h2 id="c-106">INDEX (13.8~13.15)</h2>
<h3 id="c-107">인덱스란? (13.8)</h3>
<p>책 뒤에 있는 <strong>찾아보기</strong>(색인)와 같아요. &#39;트랜잭션&#39;이 나오는 쪽을 찾을 때 책을 처음부터 끝까지 넘기는 대신, 찾아보기에서 &#39;트&#39; 항목을 보고 바로 해당 쪽으로 가죠. 인덱스 없이 <code>WHERE name = &#39;이용호&#39;</code>를 실행하면 오라클은 테이블의 모든 행을 처음부터 읽어요(Full Table Scan). name에 인덱스가 있으면 인덱스에서 &#39;이용호&#39;를 찾고 그 행의 위치로 바로 가요.</p>
<ul>
<li>테이블과 <strong>따로 저장되는 별도의 오브젝트</strong>예요. 인덱스를 지워도 테이블 데이터는 그대로예요.</li>
<li>만들어 두기만 하면 <strong>오라클이 알아서</strong> 사용하고 관리해요. SELECT문에 &quot;인덱스를 써라&quot;고 따로 쓸 필요가 없어요.</li>
<li>데이터가 바뀌면 인덱스도 자동으로 같이 고쳐져요.</li>
<li>인덱스를 쓸지 말지는 오라클의 <strong>옵티마이저</strong>가 정해요(아래 13.12).</li>
</ul>
<h3 id="c-108">인덱스의 종류 (13.9)</h3>
<div class="tw"><table><thead><tr>
<th>기준</th>
<th>종류</th>
<th>설명</th>
</tr>
</thead>
<tbody><tr>
<td>만들어지는 방법</td>
<td><strong>Unique Index</strong></td>
<td>PRIMARY KEY나 UNIQUE 제약조건을 걸면 <strong>자동으로</strong> 생김. 값이 유일함을 보장</td>
</tr>
<tr>
<td></td>
<td><strong>Non-Unique Index</strong></td>
<td>사용자가 <code>CREATE INDEX</code>로 직접 만듦. 값이 중복돼도 됨</td>
</tr>
<tr>
<td>컬럼 개수</td>
<td>단일 인덱스</td>
<td>컬럼 하나로 만든 인덱스</td>
</tr>
<tr>
<td></td>
<td>결합 인덱스 (Composite)</td>
<td>여러 컬럼을 묶어 만든 인덱스. 예: <code>(dept_id, title)</code></td>
</tr>
</tbody>
</table>
</div>
<p>8장에서 &quot;PK와 UNIQUE를 걸면 인덱스가 자동으로 만들어진다&quot;고 한 것이 바로 Unique Index예요. S_EMP에는 <code>PK_S_EMP</code>라는 이름의 인덱스가 이미 있어요. 데이터 사전에서 확인해 볼 수 있어요.</p>
<pre><code><span class="hl-kw">SELECT</span> index_name, table_name, uniqueness
<span class="hl-kw">FROM</span> user_indexes            <span class="hl-com">-- 짧게 IND라고 써도 돼요 (10장)</span>
<span class="hl-kw">WHERE</span> table_name = <span class="hl-str">'S_EMP'</span>;</code></pre>
<h3 id="c-109">인덱스의 구조와 B*Tree (13.10~13.11)</h3>
<p>인덱스에는 <strong>컬럼 값</strong>과 그 행의 <strong>주소</strong>(ROWID)가 짝지어 정렬돼 있어요. ROWID는 행이 디스크의 어디에 저장돼 있는지 알려주는 주소예요.</p>
<p>오라클은 이 짝들을 <strong>B*Tree</strong>(균형 트리)라는 나무 모양으로 저장해요. S_EMP의 name에 인덱스를 만들면 대략 이런 모양이에요.</p>
<pre><code>                    [ 루트:  ~서  |  서~ ]
                    /                  \
       [ 가지:  ~김  |  김~서 ]      [ 가지:  서~이  |  이~ ]
          /          \                   /          \
   [ 잎: 강연범→<span class="hl-kw">ROWID</span> ]  [ 잎: 김석우→<span class="hl-kw">ROWID</span> ]  ...    [ 잎: 이용호→<span class="hl-kw">ROWID</span> ]
   [     구원상→<span class="hl-kw">ROWID</span> ]  [     김심선→<span class="hl-kw">ROWID</span> ]         [     전지영→<span class="hl-kw">ROWID</span> ]</code></pre>
<p>&#39;이용호&#39;를 찾는 과정: 루트에서 &quot;서보다 뒤네?&quot; → 오른쪽 가지에서 &quot;이보다 뒤네?&quot; → 잎에서 &#39;이용호&#39;와 ROWID를 찾음 → 그 주소의 행을 바로 읽음. <strong>업다운 게임</strong>처럼 범위를 절반씩 좁혀가는 거예요.</p>
<p>B*Tree의 핵심 특징은 <strong>균형</strong>(Balanced)이에요. 루트에서 어느 잎까지 가든 거치는 단계 수가 같아요. 그래서 찾는 값이 테이블의 앞에 있든 끝에 있든 거의 같은 횟수 안에 찾아요. 디스크를 읽는 횟수(I/O)가 줄어들어 빨라져요.</p>
<p><strong>정보를 찾는 두 가지 방법</strong></p>
<ul>
<li>① <strong>순차 탐색</strong>: 처음부터 하나씩 봄. 데이터가 적을 때 유리</li>
<li>② <strong>인덱스(트리) 탐색</strong>: 정렬된 트리에서 절반씩 좁혀 찾음(이분법). 데이터가 많을 때 유리</li>
<li>트리의 특징: ① 정렬돼 있고 ② 위치 정보(ROWID)를 갖고 있음</li>
</ul>
<h3 id="c-110">옵티마이저: 어떻게 읽을지 정하는 계획가 (13.12)</h3>
<p>SQL을 실행하기 전에 오라클은 &quot;인덱스로 찾을까, 테이블을 통째로 읽을까&quot;를 먼저 정해요. 이 계획을 <strong>실행 계획</strong>(Execution Plan)이라고 해요.</p>
<div class="tw"><table><thead><tr>
<th></th>
<th>규칙 기준 (Rule-based)</th>
<th>비용 기준 (Cost-based)</th>
</tr>
</thead>
<tbody><tr>
<td>판단 기준</td>
<td>정해진 우선순위 규칙 (예: 인덱스가 있으면 쓴다)</td>
<td>테이블·인덱스의 <strong>통계 정보</strong>로 비용을 계산해서 가장 싼 방법</td>
</tr>
<tr>
<td>특징</td>
<td>단순하지만 데이터 양을 고려하지 못함</td>
<td>데이터 양과 분포를 보고 판단함</td>
</tr>
</tbody>
</table>
</div>
<p>요즘 오라클은 비용 기준을 기본으로 써요. 그래서 S_EMP처럼 25행짜리 작은 테이블은 인덱스가 있어도 그냥 통째로 읽는 게 더 싸다고 판단할 수 있어요. 얼마 안 되는 책은 찾아보기보다 그냥 넘겨 보는 게 빠른 것과 같아요.</p>
<p><strong>비유로 이해하기</strong></p>
<ul>
<li>규칙 기준 = <strong>계산기</strong>: 정해진 규칙대로 고정된 답을 냄</li>
<li>비용 기준 = <strong>확률·통계(빅데이터)</strong>: 쌓인 통계를 보고 가장 싼 방법을 고름. 내비게이션이 길을 고르는 방식과 같고, &quot;AI + 통계 = LLM&quot;도 이쪽에 가까워요.</li>
</ul>
<h3 id="c-111">인덱스 만들기와 지우기 (13.13)</h3>
<pre><code><span class="hl-kw">CREATE</span> <span class="hl-kw">INDEX</span> s_emp_name_idx <span class="hl-kw">ON</span> <span class="hl-fn">s_emp</span>(name);                  <span class="hl-com">-- 단일 인덱스 (교안 예제)</span>
<span class="hl-kw">CREATE</span> <span class="hl-kw">INDEX</span> s_emp_dept_title_idx <span class="hl-kw">ON</span> <span class="hl-fn">s_emp</span>(dept_id, title);  <span class="hl-com">-- 결합 인덱스</span>
<span class="hl-kw">DROP</span> <span class="hl-kw">INDEX</span> s_emp_name_idx;</code></pre>
<h3 id="c-112">인덱스가 항상 좋은 건 아니에요</h3>
<div class="tw"><table><thead><tr>
<th>도움이 되는 경우</th>
<th>도움이 안 되거나 손해인 경우</th>
</tr>
</thead>
<tbody><tr>
<td>테이블이 크고, 그중 <strong>일부 행만</strong> 찾을 때</td>
<td>테이블이 작을 때 (S_EMP 25행처럼)</td>
</tr>
<tr>
<td>WHERE절이나 JOIN 조건에 <strong>자주</strong> 쓰는 컬럼</td>
<td>결과가 테이블의 대부분인 조회</td>
</tr>
<tr>
<td>값의 종류가 다양한 컬럼 (이름, 사번)</td>
<td>INSERT·UPDATE·DELETE가 아주 잦은 테이블 → 인덱스도 같이 고쳐야 해서 <strong>느려짐</strong></td>
</tr>
<tr>
<td></td>
<td><code>UPPER(name) = ...</code>처럼 컬럼에 함수를 씌운 조건, <code>LIKE &#39;%호&#39;</code>처럼 앞이 정해지지 않은 검색</td>
</tr>
</tbody>
</table>
</div>
<p>마지막 줄은 찾아보기로 생각하면 쉬워요. 찾아보기는 &#39;트&#39;로 <strong>시작하는</strong> 단어는 찾기 쉽지만, &#39;션&#39;으로 <strong>끝나는</strong> 단어는 찾을 수 없어요. 그래서 70번에서 쓴 <code>LIKE &#39;김%&#39;</code>는 인덱스를 쓸 수 있지만 <code>LIKE &#39;%김%&#39;</code>는 쓸 수 없어요.</p>
<h3 id="c-113">인덱스를 언제 만들까? (13.14~13.15)</h3>
<p>&quot;인덱스는 많으면 많을수록 좋을 것 같지만, 오히려 속도가 느려진다&quot;가 이 부분의 핵심이에요. 인덱스는 저장 공간을 따로 쓰고, 테이블이 바뀔 때마다 같이 고쳐져야 해서 INSERT·UPDATE·DELETE를 느리게 만들어요.</p>
<div class="tw"><table><thead><tr>
<th>만드는 게 좋을 때</th>
<th>만들지 않는 게 좋을 때</th>
</tr>
</thead>
<tbody><tr>
<td>WHERE절이나 JOIN 조건에 자주 쓰는 컬럼</td>
<td>테이블이 작을 때</td>
</tr>
<tr>
<td>값의 종류가 많은(범위가 넓은) 컬럼</td>
<td>조회 조건으로 거의 안 쓰는 컬럼</td>
</tr>
<tr>
<td>NULL이 많은 컬럼 (NULL은 인덱스에 저장되지 않아서 인덱스가 작아짐)</td>
<td>조회 결과가 보통 전체 행의 10~15%를 넘을 때</td>
</tr>
<tr>
<td>테이블이 크고, 찾는 행이 전체의 10~15% 정도일 때</td>
<td>테이블이 자주 바뀔 때</td>
</tr>
</tbody>
</table>
</div>
<p>&quot;NULL이 많은 컬럼&quot;에 대한 교안의 뜻은 &quot;NULL이 아닌 값을 찾을 때 작은 인덱스로 빨리 찾는다&quot;는 것이에요. 반대로 <code>WHERE 컬럼 IS NULL</code>처럼 NULL을 찾는 조건에는 인덱스가 쓰이지 않아요(14.11).</p>
<h2 id="c-114">VIEW (13.16~13.20)</h2>
<p>뷰는 <strong>SELECT문을 이름 붙여 저장해 둔 가상 테이블</strong>이에요. 뷰에는 데이터가 아니라 SQL 문장(문자열)만 저장돼 있어요. 뷰를 조회하면 그때마다 저장된 SELECT가 실행돼서, 항상 테이블의 최신 데이터를 보여줘요. 테이블을 들여다보는 <strong>창문</strong>이라고 생각하면 돼요.</p>
<p>쓰는 이유는 두 가지예요.</p>
<ol>
<li><strong>보안</strong>: 급여 같은 민감한 컬럼을 빼고 뷰를 만들어, 테이블 대신 뷰에만 권한을 줘요.</li>
<li><strong>편리함</strong>: 복잡한 JOIN을 뷰로 만들어 두면, JOIN을 몰라도 <code>SELECT * FROM 뷰이름</code>만으로 결과를 볼 수 있어요.</li>
</ol>
<pre><code><span class="hl-kw">CREATE</span> <span class="hl-kw">OR</span> <span class="hl-kw">REPLACE</span> <span class="hl-kw">VIEW</span> v_emp_dept
<span class="hl-kw">AS</span> <span class="hl-kw">SELECT</span> e.id, e.name, e.salary, d.name <span class="hl-kw">AS</span> dept_name   <span class="hl-com">-- 컬럼 이름이 겹치면 별칭 필수</span>
   <span class="hl-kw">FROM</span> s_emp e, s_dept d
   <span class="hl-kw">WHERE</span> e.dept_id = d.id;

<span class="hl-kw">SELECT</span> * <span class="hl-kw">FROM</span> v_emp_dept <span class="hl-kw">WHERE</span> dept_name = <span class="hl-str">'기획부'</span>;    <span class="hl-com">-- 테이블처럼 사용</span></code></pre>
<div class="tw"><table><thead><tr>
<th>옵션</th>
<th>뜻</th>
</tr>
</thead>
<tbody><tr>
<td><code>OR REPLACE</code></td>
<td>같은 이름의 뷰가 있으면 지우지 않고 정의를 바꿈</td>
</tr>
<tr>
<td><code>FORCE</code></td>
<td>기본 테이블이 아직 없어도 뷰를 만듦 (기본값은 NOFORCE)</td>
</tr>
<tr>
<td><code>WITH CHECK OPTION</code></td>
<td>뷰의 WHERE 조건을 벗어나는 INSERT·UPDATE를 막음</td>
</tr>
<tr>
<td><code>WITH READ ONLY</code></td>
<td>뷰를 통한 DML을 모두 막음 (읽기 전용)</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>뷰 정의에는 JOIN, 그룹 함수, 서브쿼리를 넣을 수 있어요. 교안 기준으로 ORDER BY는 정의에 넣지 않고, 뷰를 조회할 때 붙여요.</li>
<li>뷰로 INSERT·UPDATE·DELETE를 하면 <strong>실제로는 기본 테이블이 바뀌어요.</strong> 창문을 통해 방 안의 물건을 옮기는 것과 같아요.</li>
</ul>
<p><strong>뷰에서 DML이 되는 경우와 안 되는 경우 (13.18)</strong></p>
<p>기준은 &quot;뷰의 한 행이 테이블의 어느 행인지 딱 정해지는가&quot;예요.</p>
<div class="tw"><table><thead><tr>
<th>뷰에 들어 있는 것</th>
<th>막히는 것</th>
<th>이유</th>
</tr>
</thead>
<tbody><tr>
<td>테이블 1개만 쓴 단순한 뷰</td>
<td>없음 (모두 가능)</td>
<td>뷰의 행 = 테이블의 행</td>
</tr>
<tr>
<td>JOIN, 그룹 함수, GROUP BY, DISTINCT</td>
<td>INSERT·UPDATE·DELETE 모두</td>
<td>한 행이 여러 행을 합친 결과라 어느 행을 고칠지 알 수 없음</td>
</tr>
<tr>
<td><code>salary*12</code> 같은 식으로 만든 컬럼</td>
<td>그 컬럼의 UPDATE</td>
<td>24000으로 바꾸라면 salary를 얼마로 바꿔야 할지 불분명</td>
</tr>
<tr>
<td>NOT NULL 컬럼이 뷰에서 빠짐</td>
<td>INSERT</td>
<td>빠진 컬럼에 NULL이 들어가야 하는데 NOT NULL이라 불가</td>
</tr>
</tbody>
</table>
</div>
<pre><code><span class="hl-com">-- WITH CHECK OPTION: 110번 부서만 보이는 뷰에서 다른 부서로 옮기면 에러</span>
<span class="hl-kw">CREATE</span> <span class="hl-kw">VIEW</span> v_dept110 <span class="hl-kw">AS</span>
  <span class="hl-kw">SELECT</span> id, name, dept_id <span class="hl-kw">FROM</span> emp_t <span class="hl-kw">WHERE</span> dept_id = <span class="hl-num">110</span>
  <span class="hl-kw">WITH</span> <span class="hl-kw">CHECK</span> <span class="hl-kw">OPTION</span>;
<span class="hl-kw">UPDATE</span> v_dept110 <span class="hl-kw">SET</span> dept_id = <span class="hl-num">111</span> <span class="hl-kw">WHERE</span> id = <span class="hl-num">1</span>;   <span class="hl-com">-- 거부됨 (뷰에서 사라지게 되므로)</span>

<span class="hl-com">-- 확인과 삭제 (13.20)</span>
<span class="hl-kw">SELECT</span> view_name, text <span class="hl-kw">FROM</span> user_views;   <span class="hl-com">-- text에 저장된 SELECT문이 보임</span>
<span class="hl-kw">DROP</span> <span class="hl-kw">VIEW</span> v_dept110;                      <span class="hl-com">-- 뷰만 지워지고 테이블은 그대로</span></code></pre>
<h2 id="c-115">SYNONYM (13.21)</h2>
<p>오브젝트에 붙이는 <strong>별명</strong>이에요. 12장에서 TEST 사용자는 student의 테이블을 <code>student.s_emp</code>처럼 길게 써야 했죠. 시노님을 만들면 짧은 이름으로 부를 수 있어요.</p>
<pre><code><span class="hl-kw">CREATE</span> <span class="hl-kw">SYNONYM</span> emp <span class="hl-kw">FOR</span> student.s_emp;          <span class="hl-com">-- 나만 쓰는 별명</span>
<span class="hl-kw">CREATE</span> <span class="hl-kw">PUBLIC</span> <span class="hl-kw">SYNONYM</span> emp <span class="hl-kw">FOR</span> student.s_emp;   <span class="hl-com">-- 모든 사용자용 별명 (DBA만 가능)</span>
<span class="hl-kw">SELECT</span> * <span class="hl-kw">FROM</span> emp;
<span class="hl-kw">DROP</span> <span class="hl-kw">SYNONYM</span> emp;</code></pre>
<p>10장의 <code>IND</code>(짧은 별명)와 <code>USER_INDEXES</code>(원래 이름)의 관계가 바로 시노님이에요. 시노님은 이름만 하나 더 만드는 것이고, 뷰처럼 데이터를 골라내거나 바꾸지는 않아요. 시노님을 만들려면 <code>CREATE SYNONYM</code> 권한이 필요해요.</p>
<h1 id="c-ch-14">14장 ADVANCED SQL (고급 SQL)</h1>
<h2 id="c-117">14장 한눈에 보기</h2>
<p>14장은 지금까지 다룬 SELECT를 더 강력하게 쓰는 <strong>고급 기능 모음</strong>이에요. 서로 독립된 주제가 이어지니, 아래 표에서 필요한 부분부터 봐도 돼요.</p>
<div class="tw"><table><thead><tr>
<th>주제</th>
<th>한 줄 요약</th>
<th>교안</th>
</tr>
</thead>
<tbody><tr>
<td>NVL / DECODE / CASE</td>
<td>NULL을 다른 값으로, 값에 따라 다른 결과로 바꾸기</td>
<td>14.1~14.3</td>
</tr>
<tr>
<td>PIVOT / ROLLUP / CUBE / RANK</td>
<td>분석용 표 만들기, 소계·합계, 순위</td>
<td>14.4~14.7</td>
</tr>
<tr>
<td>상관 서브쿼리 / ANY / ALL / EXISTS</td>
<td>바깥 행마다 도는 서브쿼리, 여러 값과 비교하기</td>
<td>14.8~14.9</td>
</tr>
<tr>
<td>ROWID / ROWNUM</td>
<td>행의 주소, 결과에 붙는 번호</td>
<td>14.10</td>
</tr>
<tr>
<td>인덱스 효율적 사용</td>
<td>인덱스가 있어도 안 쓰이는 경우</td>
<td>14.11</td>
</tr>
<tr>
<td>TRIGGER</td>
<td>DML이 일어나면 자동으로 실행되는 프로그램</td>
<td>14.12</td>
</tr>
</tbody>
</table>
</div>
<h2 id="c-118">값을 바꾸는 함수: NVL, DECODE, CASE (14.1~14.3)</h2>
<p>세 함수 모두 <strong>조회 결과에 보이는 값만</strong> 바꿔요. 테이블에 저장된 데이터는 그대로예요.</p>
<h3 id="c-119">NVL: NULL을 다른 값으로 (14.1)</h3>
<p><strong>결측치(비어 있는 값)를 다른 값으로 채우는 함수</strong>예요. <code>NVL(컬럼, 대신할 값)</code>은 컬럼이 NULL이면 대신할 값을, 아니면 원래 값을 돌려줘요.</p>
<pre><code><span class="hl-kw">SELECT</span> name, <span class="hl-fn">NVL</span>(credit_rating, <span class="hl-str">'미평가'</span>) <span class="hl-kw">AS</span> 신용등급
<span class="hl-kw">FROM</span> s_customer;                        <span class="hl-com">-- 15명 모두 '미평가'</span></code></pre>
<p>왜 필요할까요? NULL이 끼면 계산 결과도 NULL이 돼요. 예를 들어 보너스가 NULL인 직원의 <code>급여 + 보너스</code>는 NULL이에요. <code>급여 + NVL(보너스, 0)</code>처럼 쓰면 제대로 계산돼요.</p>
<p><strong>주의: 두 값의 데이터 타입이 같아야 해요.</strong> 숫자 컬럼에 <code>NVL(salary, &#39;없음&#39;)</code>처럼 문자를 넣으면 에러가 나요. 숫자는 숫자로, 날짜는 날짜로, 문자는 문자로 채워요.</p>
<h3 id="c-120">DECODE: 값에 따라 다른 결과 (14.2)</h3>
<p><strong>오라클에만 있는 함수</strong>이고, 오래된 함수지만 자주 보여요. 프로그래밍의 <strong>삼항 연산자</strong>나 if-else와 비슷해요.</p>
<pre><code><span class="hl-fn">DECODE</span>(값, 비교값<span class="hl-num">1</span>, 결과<span class="hl-num">1</span>, 비교값<span class="hl-num">2</span>, 결과<span class="hl-num">2</span>, ..., 기본값)
<span class="hl-com">-- 값 = 비교값1이면 결과1, 값 = 비교값2이면 결과2, 모두 아니면 기본값 (생략하면 NULL)</span>

<span class="hl-kw">SELECT</span> name, dept_id,
       <span class="hl-fn">DECODE</span>(dept_id, <span class="hl-num">101</span>, <span class="hl-str">'총무부'</span>, <span class="hl-num">102</span>, <span class="hl-str">'영업부'</span>, <span class="hl-num">110</span>, <span class="hl-str">'기획부'</span>, <span class="hl-num">118</span>, <span class="hl-str">'인사부'</span>, <span class="hl-str">'기타'</span>) <span class="hl-kw">AS</span> 부서
<span class="hl-kw">FROM</span> s_emp;</code></pre>
<p>DECODE는 <strong>같은지(=)만</strong> 비교할 수 있어요. &quot;3000 이상&quot;처럼 범위를 비교할 수 없어서, 아래처럼 요령을 부려요.</p>
<pre><code><span class="hl-fn">DECODE</span>(<span class="hl-fn">TRUNC</span>(salary/<span class="hl-num">1000</span>), <span class="hl-num">0</span>, <span class="hl-str">'E'</span>, <span class="hl-num">1</span>, <span class="hl-str">'D'</span>, <span class="hl-num">2</span>, <span class="hl-str">'C'</span>, <span class="hl-num">3</span>, <span class="hl-str">'B'</span>, <span class="hl-str">'A'</span>)</code></pre>
<ul>
<li><code>TRUNC(salary/1000)</code>은 급여의 천의 자리예요. 2400 → 2, 940 → 0, 5000 → 5</li>
<li>그 다음 천의 자리를 <strong>같은지</strong>로 비교해요. 5 이상은 어느 값에도 없으니 기본값 &#39;A&#39;가 돼요.</li>
<li>급여가 0인 직원도 TRUNC(0/1000) = 0이라 &#39;E&#39;가 돼요. 그래서 6.6장의 SALGRADE NON-EQUIJOIN(21행)과 달리 25행이 모두 나와요.</li>
</ul>
<h3 id="c-121">CASE: 조건에 따라 다른 결과 (14.3)</h3>
<p>DECODE와 하는 일은 같지만, 오라클뿐 아니라 모든 DB에서 쓰는 <strong>표준 SQL</strong>이고 범위 비교도 돼요. 두 가지 형태가 있어요.</p>
<pre><code><span class="hl-com">-- ① 값 비교형: DECODE와 같은 방식</span>
<span class="hl-kw">CASE</span> dept_id <span class="hl-kw">WHEN</span> <span class="hl-num">101</span> <span class="hl-kw">THEN</span> <span class="hl-str">'총무부'</span>
             <span class="hl-kw">WHEN</span> <span class="hl-num">102</span> <span class="hl-kw">THEN</span> <span class="hl-str">'영업부'</span>
             <span class="hl-kw">ELSE</span> <span class="hl-str">'기타'</span>
<span class="hl-kw">END</span>

<span class="hl-com">-- ② 조건식형: 범위도 가능</span>
<span class="hl-kw">CASE</span> <span class="hl-kw">WHEN</span> salary &gt;= <span class="hl-num">3000</span> <span class="hl-kw">THEN</span> <span class="hl-str">'고액'</span>
     <span class="hl-kw">WHEN</span> salary &gt;= <span class="hl-num">1000</span> <span class="hl-kw">THEN</span> <span class="hl-str">'보통'</span>
     <span class="hl-kw">ELSE</span> <span class="hl-str">'낮음'</span>
<span class="hl-kw">END</span></code></pre>
<ul>
<li>WHEN은 <strong>위에서부터 차례로</strong> 검사하고, 처음으로 참인 것을 골라요. 위 ②에서 3500은 &#39;고액&#39;에서 멈추니까, 두 번째 WHEN에 <code>salary &lt; 3000</code>을 따로 쓸 필요가 없어요. 순서를 바꾸면 결과가 달라져요.</li>
<li>끝에 반드시 <code>END</code>를 써요. 결과 컬럼 이름이 길게 나오니 <code>END AS 급여구간</code>처럼 별칭을 붙이세요.</li>
<li>교안 190쪽 두 번째 예제는 조건이 모든 급여를 덮어서, ELSE &#39;Medium&#39;은 급여가 NULL일 때만 나와요.</li>
</ul>
<div class="tw"><table><thead><tr>
<th></th>
<th>DECODE</th>
<th>CASE</th>
</tr>
</thead>
<tbody><tr>
<td>쓸 수 있는 DB</td>
<td>오라클만</td>
<td>모든 DB (표준)</td>
</tr>
<tr>
<td>비교 방식</td>
<td>같은지만 (=)</td>
<td>=, &gt;, &lt;, BETWEEN, LIKE 등 모두</td>
</tr>
<tr>
<td>길이</td>
<td>짧음</td>
<td>길지만 읽기 쉬움</td>
</tr>
</tbody>
</table>
</div>
<h2 id="c-122">분석 함수: PIVOT, ROLLUP, CUBE, RANK (14.4~14.7)</h2>
<p>분석 함수는 <strong>집계 함수</strong>로 <strong>분석용 데이터</strong>를 만드는 기능이에요. 다차원 분석이나 DW(데이터 웨어하우스)처럼, 회사에서 보고서나 통계표를 만들 때 써요. DB 기능을 이용하면 애플리케이션 코드가 짧아지고, 값이 변하는 추이를 한눈에 볼 수 있어요.</p>
<h3 id="c-123">PIVOT: 행을 열로 돌리기 (14.4)</h3>
<p>GROUP BY 결과는 세로로 길게 나와요. PIVOT은 그중 한 컬럼의 값들을 <strong>가로(열) 제목으로 돌려서</strong> 표 모양으로 만들어요. 엑셀의 피벗 테이블과 같아요.</p>
<pre><code><span class="hl-kw">SELECT</span> * <span class="hl-kw">FROM</span> (<span class="hl-kw">SELECT</span> dept_id, title <span class="hl-kw">FROM</span> s_emp)       <span class="hl-com">-- ① 필요한 컬럼만 고르기</span>
<span class="hl-kw">PIVOT</span> (
  <span class="hl-fn">COUNT</span>(*)                                              <span class="hl-com">-- ② 칸에 들어갈 값</span>
  <span class="hl-kw">FOR</span> title <span class="hl-kw">IN</span> (<span class="hl-str">'사원'</span> <span class="hl-kw">AS</span> 사원, <span class="hl-str">'과장'</span> <span class="hl-kw">AS</span> 과장,
                <span class="hl-str">'영업대표이사'</span> <span class="hl-kw">AS</span> 영업대표이사)      <span class="hl-com">-- ③ 열로 만들 값들</span>
)
<span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> dept_id;</code></pre>
<p>실습 데이터의 결과 일부는 이래요. (전체 11행)</p>
<div class="tw"><table><thead><tr>
<th>DEPT_ID</th>
<th>사원</th>
<th>과장</th>
<th>영업대표이사</th>
</tr>
</thead>
<tbody><tr>
<td>102</td>
<td>0</td>
<td>0</td>
<td>1</td>
</tr>
<tr>
<td>106</td>
<td>1</td>
<td>0</td>
<td>1</td>
</tr>
<tr>
<td>110</td>
<td>2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>113</td>
<td>3</td>
<td>2</td>
<td>0</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li><strong>① 안쪽 SELECT에는 필요한 컬럼만</strong> 넣어야 해요. PIVOT은 나머지 컬럼(여기서는 dept_id)을 기준으로 묶기 때문에, <code>SELECT * FROM s_emp</code>를 넣으면 name, salary까지 기준이 돼서 표가 망가져요.</li>
<li><strong>③ IN 목록은 실제 데이터 값과 글자까지 같아야</strong> 해요.</li>
<li>PIVOT은 오라클 11g부터 있어요. 그 전에는 <strong>DECODE로 같은 기능</strong>을 만들었어요(교안 192쪽).</li>
</ul>
<pre><code><span class="hl-kw">SELECT</span> dept_id,
       <span class="hl-fn">COUNT</span>(<span class="hl-fn">DECODE</span>(title, <span class="hl-str">'사원'</span>, <span class="hl-num">0</span>)) <span class="hl-kw">AS</span> 사원,
       <span class="hl-fn">COUNT</span>(<span class="hl-fn">DECODE</span>(title, <span class="hl-str">'과장'</span>, <span class="hl-num">0</span>)) <span class="hl-kw">AS</span> 과장
<span class="hl-kw">FROM</span> s_emp
<span class="hl-kw">GROUP</span> <span class="hl-kw">BY</span> dept_id
<span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> dept_id;</code></pre>
<p>이 방법의 원리: <code>DECODE(title, &#39;사원&#39;, 0)</code>은 사원이면 0, 아니면 기본값이 없으니 NULL이에요. COUNT는 NULL을 세지 않으니(4.25) <strong>사원인 행만</strong> 세게 돼요. 0 대신 아무 값이나 넣어도 같아요.</p>
<h3 id="c-124">ROLLUP과 CUBE: 소계와 합계 (14.5~14.6)</h3>
<p>GROUP BY에 더해서 <strong>소계와 총합계 행을 자동으로 추가</strong>해 줘요. 추가된 행에서는 묶지 않은 컬럼이 (null)로 표시돼요.</p>
<pre><code><span class="hl-kw">SELECT</span> dept_id, title, <span class="hl-fn">COUNT</span>(*) <span class="hl-kw">FROM</span> s_emp
<span class="hl-kw">WHERE</span> dept_id <span class="hl-kw">IN</span> (<span class="hl-num">112</span>, <span class="hl-num">113</span>)
<span class="hl-kw">GROUP</span> <span class="hl-kw">BY</span> <span class="hl-kw">ROLLUP</span>(dept_id, title)       <span class="hl-com">-- 또는 CUBE(dept_id, title)</span>
<span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> dept_id;</code></pre>
<div class="tw"><table><thead><tr>
<th>DEPT_ID</th>
<th>TITLE</th>
<th>COUNT</th>
<th>의미</th>
<th>ROLLUP</th>
<th>CUBE</th>
</tr>
</thead>
<tbody><tr>
<td>112</td>
<td>과장</td>
<td>1</td>
<td>보통 그룹</td>
<td>O</td>
<td>O</td>
</tr>
<tr>
<td>112</td>
<td>사원</td>
<td>2</td>
<td>보통 그룹</td>
<td>O</td>
<td>O</td>
</tr>
<tr>
<td>112</td>
<td>(null)</td>
<td>3</td>
<td>112부서 소계</td>
<td>O</td>
<td>O</td>
</tr>
<tr>
<td>113</td>
<td>과장</td>
<td>2</td>
<td>보통 그룹</td>
<td>O</td>
<td>O</td>
</tr>
<tr>
<td>113</td>
<td>사원</td>
<td>3</td>
<td>보통 그룹</td>
<td>O</td>
<td>O</td>
</tr>
<tr>
<td>113</td>
<td>(null)</td>
<td>5</td>
<td>113부서 소계</td>
<td>O</td>
<td>O</td>
</tr>
<tr>
<td>(null)</td>
<td>과장</td>
<td>3</td>
<td>과장 전체 (직책별 소계)</td>
<td>X</td>
<td><strong>O</strong></td>
</tr>
<tr>
<td>(null)</td>
<td>사원</td>
<td>5</td>
<td>사원 전체 (직책별 소계)</td>
<td>X</td>
<td><strong>O</strong></td>
</tr>
<tr>
<td>(null)</td>
<td>(null)</td>
<td>8</td>
<td>총합계</td>
<td>O</td>
<td>O</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li><strong>ROLLUP(a, b)</strong>: 앞에 쓴 컬럼(a)을 기준으로만 소계를 내요. 오른쪽부터 하나씩 말아 올리듯(roll up) (a,b) → (a) → 전체 순서로 묶어요. 그래서 <strong>컬럼 순서가 중요</strong>해요.</li>
<li><strong>CUBE(a, b)</strong>: 가능한 모든 조합으로 소계를 내요. (a,b), (a), (b), 전체. ROLLUP보다 직책별 소계가 더 있어요.</li>
</ul>
<h3 id="c-125">RANK: 순위 매기기 (14.7)</h3>
<pre><code><span class="hl-com">-- 전체 순위</span>
<span class="hl-kw">SELECT</span> name, salary, <span class="hl-fn">RANK</span>() <span class="hl-kw">OVER</span> (<span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> salary <span class="hl-kw">DESC</span>) <span class="hl-kw">AS</span> 순위 <span class="hl-kw">FROM</span> s_emp;

<span class="hl-com">-- 부서별 순위: PARTITION BY로 그룹을 나누면 그룹마다 1위부터 다시</span>
<span class="hl-kw">SELECT</span> dept_id, name, salary,
       <span class="hl-fn">RANK</span>() <span class="hl-kw">OVER</span> (<span class="hl-kw">PARTITION</span> <span class="hl-kw">BY</span> dept_id <span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> salary <span class="hl-kw">DESC</span>) <span class="hl-kw">AS</span> 부서내순위
<span class="hl-kw">FROM</span> s_emp;</code></pre>
<ul>
<li><code>OVER ( )</code> 안에 <strong>무엇을 기준으로 순위를 매길지</strong> 써요. ORDER BY는 순위 기준, PARTITION BY는 순위를 따로 매길 그룹이에요.</li>
<li><strong>GROUP BY와 달리 행이 줄어들지 않아요.</strong> 25명이 그대로 나오고 순위 컬럼만 붙어요.</li>
<li><strong>같은 값은 같은 순위</strong>이고, 그만큼 다음 순위를 건너뛰어요. 실습 데이터에서 손명성·서의홍(3000)이 둘 다 4위이고, 다음 김석우(2650)는 5위가 아니라 <strong>6위</strong>예요.</li>
<li>참고(교안 밖): 건너뛰지 않게 하려면 <code>DENSE_RANK()</code>, 같은 값이어도 1, 2, 3으로 번호를 매기려면 <code>ROW_NUMBER()</code>를 써요.</li>
</ul>
<h2 id="c-126">고급 서브쿼리 (14.8~14.9)</h2>
<h3 id="c-127">상관 서브쿼리 (14.8)</h3>
<p>7장에서 배운 서브쿼리는 <strong>괄호 안이 먼저, 한 번만</strong> 실행됐어요. 상관 서브쿼리는 서브쿼리 안에서 <strong>바깥 쿼리의 컬럼을 빌려 쓰기</strong> 때문에, 메인 쿼리가 먼저 실행되고 바깥 행마다 서브쿼리가 다시 실행돼요.</p>
<pre><code><span class="hl-com">-- 자기 부서 평균보다 급여가 적은 직원 (교안 198쪽)</span>
<span class="hl-kw">SELECT</span> name, salary, dept_id
<span class="hl-kw">FROM</span> s_emp o
<span class="hl-kw">WHERE</span> salary &lt; (<span class="hl-kw">SELECT</span> <span class="hl-fn">AVG</span>(salary)
                <span class="hl-kw">FROM</span> s_emp
                <span class="hl-kw">WHERE</span> dept_id = o.dept_id);   <span class="hl-com">-- 바깥의 o.dept_id를 빌려 씀</span></code></pre>
<p>교안 197쪽의 그림(GET → EXECUTE → USE)을 실습 데이터로 따라가 보면 이래요.</p>
<div class="tw"><table><thead><tr>
<th>바깥 행 (GET)</th>
<th>그 행의 dept_id로 서브쿼리 실행 (EXECUTE)</th>
<th>조건 비교 (USE)</th>
<th>결과</th>
</tr>
</thead>
<tbody><tr>
<td>박구곤 5000</td>
<td>118부서 평균 = 4100</td>
<td>5000 &lt; 4100 ?</td>
<td>제외</td>
</tr>
<tr>
<td>손명성 3000</td>
<td>110부서 평균 = 1585</td>
<td>3000 &lt; 1585 ?</td>
<td>제외</td>
</tr>
<tr>
<td>김심선 3200</td>
<td>118부서 평균 = 4100</td>
<td>3200 &lt; 4100 ?</td>
<td><strong>포함</strong></td>
</tr>
<tr>
<td>...</td>
<td>...</td>
<td>...</td>
<td>25명을 다 돌 때까지 반복</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>결과는 12명이에요. 같은 &quot;평균보다 적은 직원&quot;이라도, 7장처럼 전체 평균과 비교하는 것과 부서마다 다른 평균과 비교하는 것은 결과가 달라요.</li>
<li><strong>메모이제이션</strong>(참고): 박구곤과 김심선은 둘 다 118부서라 같은 평균을 두 번 구해야 해요. 이때 한 번 계산한 4100을 메모해 두고 다시 쓰면 빨라져요.</li>
<li>바깥 테이블에는 반드시 <strong>별명</strong>(여기서는 <code>o</code>)을 붙여야 해요. 안쪽도 s_emp라서, 별명이 없으면 어느 쪽 dept_id인지 구분할 수 없어요.</li>
</ul>
<h3 id="c-128">여러 값과 비교하는 연산자 (14.9)</h3>
<p>7장에서는 서브쿼리 결과가 여러 개면 IN만 썼어요. 14장은 여기에 ANY, ALL, EXISTS를 더해요.</p>
<p><strong>ANY와 ALL</strong>은 <code>&gt;</code>, <code>&lt;</code> 같은 비교 연산자와 같이 써요. 예를 들어 서브쿼리가 부서별 평균 11개(최솟값 0, 최댓값 4100)를 돌려준다고 하면:</p>
<div class="tw"><table><thead><tr>
<th>쓰는 법</th>
<th>뜻</th>
<th>결국 이것과 같아요</th>
</tr>
</thead>
<tbody><tr>
<td><code>&gt; ANY (...)</code></td>
<td>그중 <strong>하나라도</strong> 보다 크면</td>
<td>최솟값보다 크다 (&gt; 0)</td>
</tr>
<tr>
<td><code>&gt; ALL (...)</code></td>
<td><strong>모두</strong>보다 크면</td>
<td>최댓값보다 크다 (&gt; 4100)</td>
</tr>
<tr>
<td><code>&lt; ANY (...)</code></td>
<td>그중 하나라도 보다 작으면</td>
<td>최댓값보다 작다 (&lt; 4100)</td>
</tr>
<tr>
<td><code>&lt; ALL (...)</code></td>
<td>모두보다 작으면</td>
<td>최솟값보다 작다 (&lt; 0)</td>
</tr>
<tr>
<td><code>= ANY (...)</code></td>
<td>그중 하나와 같으면</td>
<td><code>IN</code>과 같음</td>
</tr>
</tbody>
</table>
</div>
<p>교안 200쪽 예제 <code>salary &lt; ANY (부서별 평균)</code>은 결국 &quot;급여 &lt; 4100&quot;이라서, 5000(박구곤)만 빠지고 24명이 나와요.</p>
<p><strong>EXISTS</strong>는 &quot;<strong>있으면 true, 없으면 false</strong>&quot;예요. 서브쿼리가 돌려주는 값은 보지 않고, 행이 하나라도 있는지만 봐요. 보통 상관 서브쿼리와 함께 써요.</p>
<pre><code><span class="hl-com">-- 다른 사람의 관리자인 직원 (교안 201쪽) → 박구곤, 손명성, 신종필</span>
<span class="hl-kw">SELECT</span> id, name, title, dept_id
<span class="hl-kw">FROM</span> s_emp e
<span class="hl-kw">WHERE</span> <span class="hl-kw">EXISTS</span> (<span class="hl-kw">SELECT</span> <span class="hl-str">'X'</span> <span class="hl-kw">FROM</span> s_emp <span class="hl-kw">WHERE</span> manager_id = e.id);</code></pre>
<ul>
<li>서브쿼리의 SELECT에는 무엇을 써도 결과가 같아서, 관습적으로 <code>&#39;X&#39;</code>나 <code>1</code> 같은 상수를 써요. 있는지만 확인하니까요.</li>
<li>찾는 행을 하나 발견하면 <strong>더 찾지 않고 바로 멈춰요.</strong> 그래서 데이터가 많을 때 빨라요.</li>
</ul>
<h3 id="c-129">NOT IN의 함정과 NOT EXISTS (14.9)</h3>
<p>교안 202쪽의 &quot;NOT IN은 NULL이 RETURN될 때 FALSE가 됨&quot;은 꼭 기억해 둘 내용이에요.</p>
<p><code>x NOT IN (10, 20, NULL)</code>은 <code>x &lt;&gt; 10 AND x &lt;&gt; 20 AND x &lt;&gt; NULL</code>과 같아요. 72번에서 본 것처럼 NULL과의 비교는 참도 거짓도 아닌 &quot;모름&quot;이라서, 전체가 참이 될 수 없어요. 그래서 <strong>서브쿼리 결과에 NULL이 하나라도 있으면 NOT IN은 항상 0행</strong>이에요.</p>
<pre><code><span class="hl-com">-- S_CUSTOMER의 credit_rating은 전부 NULL</span>
<span class="hl-kw">SELECT</span> name <span class="hl-kw">FROM</span> s_emp
<span class="hl-kw">WHERE</span> mailid <span class="hl-kw">NOT</span> <span class="hl-kw">IN</span> (<span class="hl-kw">SELECT</span> credit_rating <span class="hl-kw">FROM</span> s_customer);        <span class="hl-com">-- 0행</span>

<span class="hl-kw">SELECT</span> name <span class="hl-kw">FROM</span> s_emp e
<span class="hl-kw">WHERE</span> <span class="hl-kw">NOT</span> <span class="hl-kw">EXISTS</span> (<span class="hl-kw">SELECT</span> <span class="hl-str">'X'</span> <span class="hl-kw">FROM</span> s_customer c
                  <span class="hl-kw">WHERE</span> c.credit_rating = e.mailid);               <span class="hl-com">-- 25행</span></code></pre>
<p>NOT EXISTS는 &quot;조건에 맞는 행이 없다&quot;만 보기 때문에 NULL에 영향을 받지 않아요. 서브쿼리 결과에 NULL이 있을 수 있다면 NOT IN 대신 NOT EXISTS를 쓰세요.</p>
<h2 id="c-130">ROWID·ROWNUM, 인덱스 효율적 사용, TRIGGER (14.10~14.12)</h2>
<h3 id="c-131">ROWID: 행의 주소 (14.10)</h3>
<p>ROWID는 <strong>행의 주소</strong>예요. ROWID를 안다는 것은 행의 위치를 안다는 뜻이에요. 모든 행에는 디스크의 어디에 저장돼 있는지 알려주는 고유한 주소가 있어요. 테이블에 컬럼으로 만든 적은 없지만 SELECT하면 볼 수 있어서 <strong>의사 컬럼</strong>(가짜 컬럼)이라고 해요. 시퀀스의 NEXTVAL도 같은 종류예요.</p>
<pre><code><span class="hl-kw">SELECT</span> <span class="hl-kw">ROWID</span>, name <span class="hl-kw">FROM</span> s_emp;     <span class="hl-com">-- 예: AAAMfPAAEAAAAAgAAA</span></code></pre>
<div class="tw"><table><thead><tr>
<th>자리</th>
<th>뜻</th>
<th>비유</th>
</tr>
</thead>
<tbody><tr>
<td>앞 6자리</td>
<td>오브젝트 번호. 같은 테이블이면 모두 같음</td>
<td>건물</td>
</tr>
<tr>
<td>다음 3자리</td>
<td>상대 파일 번호. 어느 데이터 파일인지</td>
<td>층</td>
</tr>
<tr>
<td>다음 6자리</td>
<td>블록 번호. 파일 안의 어느 블록인지</td>
<td>호수</td>
</tr>
<tr>
<td>마지막 3자리</td>
<td>데이터 번호. 블록 안에서 몇 번째인지</td>
<td>방 안의 자리</td>
</tr>
</tbody>
</table>
</div>
<p>13장에서 본 것처럼 <strong>인덱스가 저장하는 것이 바로 이 ROWID</strong>예요. 인덱스는 &quot;① 정렬된 값 + ② 위치(ROWID)&quot;를 저장한 것이라고 정리할 수 있어요. ROWID를 알면 그 행을 가장 빠르게 읽을 수 있어요.</p>
<h3 id="c-132">ROWNUM: 결과에 붙는 번호 (14.10)</h3>
<p>ROWNUM은 테이블에 저장된 번호가 아니라, <strong>행을 읽어 나갈 때 생기는</strong> 번호예요. 정확한 순서는 이래요.</p>
<ol>
<li>테이블에서 행을 하나 읽음</li>
<li>WHERE 조건을 통과하면 그 행에 ROWNUM을 붙임 (1, 2, 3 ...)</li>
<li>모든 행을 다 고른 뒤 <strong>마지막에</strong> ORDER BY로 정렬</li>
</ol>
<p>여기서 두 가지 함정이 생겨요.</p>
<p><strong>함정 1: ROWNUM이 ORDER BY보다 먼저 붙어요.</strong></p>
<pre><code><span class="hl-com">-- 잘못된 방식: 테이블에서 먼저 읽힌 5명(사번 1~5)을 고른 뒤 그 5명만 정렬</span>
<span class="hl-kw">SELECT</span> name <span class="hl-kw">FROM</span> s_emp
<span class="hl-kw">WHERE</span> <span class="hl-kw">ROWNUM</span> &lt;= <span class="hl-num">5</span>
<span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> name;          <span class="hl-com">-- 김심선, 박구곤, 서의홍, 손명성, 이은선  ← 사전순 첫 5명이 아님</span>

<span class="hl-com">-- 올바른 방식: 인라인 뷰(7.6)에서 먼저 정렬하고, 바깥에서 5명을 자름</span>
<span class="hl-kw">SELECT</span> name
<span class="hl-kw">FROM</span> (<span class="hl-kw">SELECT</span> name <span class="hl-kw">FROM</span> s_emp <span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> name)
<span class="hl-kw">WHERE</span> <span class="hl-kw">ROWNUM</span> &lt;= <span class="hl-num">5</span>;      <span class="hl-com">-- 강연범, 구원상, 김석우, 김심선, 김정미</span></code></pre>
<p>&quot;급여 상위 3명&quot;처럼 <strong>정렬한 뒤 앞에서부터 몇 개</strong>를 뽑는 문제는 항상 인라인 뷰를 써야 해요.</p>
<p><strong>함정 2: ROWNUM = 2, ROWNUM &gt; 1은 0행이에요.</strong> 첫 행이 읽히면 ROWNUM 1을 받아요. 1 = 2는 거짓이라 탈락하고, 다음 행이 다시 1을 받아요. 이렇게 모든 행이 1번에서 탈락해서 2번은 영원히 생기지 않아요. <code>ROWNUM = 1</code>과 <code>ROWNUM &lt;= n</code>만 예상대로 동작해요.</p>
<h3 id="c-133">인덱스가 있는데도 안 쓰이는 경우 (14.11)</h3>
<p>인덱스는 <strong>같은 값을 찾는</strong> 도구이고, 조건에서 컬럼을 <strong>변형하면 안 돼요</strong>. 인덱스에는 컬럼의 <strong>원래 값</strong>이 정렬돼 있어요. 그래서 컬럼을 가공하거나, &quot;아닌 것&quot;을 찾거나, NULL을 찾으면 인덱스에서 바로 찾을 수 없어요.</p>
<div class="tw"><table><thead><tr>
<th>경우</th>
<th>인덱스를 못 씀</th>
<th>인덱스를 씀</th>
</tr>
</thead>
<tbody><tr>
<td>컬럼에 계산</td>
<td><code>WHERE salary*12 = 24000</code></td>
<td><code>WHERE salary = 24000/12</code> (계산을 반대쪽으로)</td>
</tr>
<tr>
<td>컬럼에 함수</td>
<td><code>WHERE TO_CHAR(start_date, &#39;YYYY&#39;) = &#39;2016&#39;</code></td>
<td><code>WHERE start_date &gt;= TO_DATE(&#39;2016-01-01&#39;, &#39;YYYY-MM-DD&#39;) AND start_date &lt; TO_DATE(&#39;2017-01-01&#39;, &#39;YYYY-MM-DD&#39;)</code> (71번에서 쓴 방식)</td>
</tr>
<tr>
<td>컬럼에 함수</td>
<td><code>WHERE SUBSTR(name, 1, 1) = &#39;김&#39;</code></td>
<td><code>WHERE name LIKE &#39;김%&#39;</code></td>
</tr>
<tr>
<td>부정 조건</td>
<td><code>WHERE title &lt;&gt; &#39;사원&#39;</code></td>
<td>찾고 싶은 값을 긍정형으로 쓰기 (아래 설명)</td>
</tr>
<tr>
<td>NULL 비교</td>
<td><code>WHERE mailid IS NULL</code></td>
<td>NULL은 인덱스에 저장되지 않아서 불가</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li><strong><code>LIKE &#39;%부장&#39;</code>처럼 앞이 %인 조건은 인덱스를 쓸 수 없어요.</strong> 찾아보기에서 &#39;장&#39;으로 끝나는 단어를 찾을 수 없는 것과 같아요. <code>&#39;부장%&#39;</code>으로 쓰면 인덱스는 쓰지만, &quot;부장으로 <strong>시작</strong>하는 직책&quot;을 찾게 돼서 뜻이 달라져요. 끝부분으로 찾는 조건은 인덱스로 빠르게 만들기 어렵다는 점을 기억하세요.</li>
<li><strong>부정 → 긍정</strong>: 인덱스는 &quot;같은 것&quot;을 찾는 도구라서, &quot;사원이 아닌 직원&quot;처럼 찾지 않을 값을 말하면 결국 전부 읽어야 해요. 교안 209쪽은 NOT EXISTS로 바꿔서 서브쿼리가 &quot;사원과 같은 것&quot;을 찾게 한 예제예요. 핵심은 <strong>인덱스 컬럼은 =로 찾도록 조건을 바꾼다</strong>는 것이에요.</li>
<li>이 모든 조건을 지켜도 마지막은 <strong>옵티마이저가 결정</strong>해요. 테이블이 작으면 인덱스를 안 쓸 수도 있어요.</li>
</ul>
<h3 id="c-134">TRIGGER: 자동으로 실행되는 프로그램 (14.12)</h3>
<p>트리거는 <strong>이벤트가 발생하면 자동으로 실행</strong>되는 프로그램이에요. 우리가 따로 실행하지 않아도 다음 작업이 저절로 이어져요. 트리거는 누가 호출하는 것이 아니라, 테이블에 INSERT·UPDATE·DELETE가 일어나면 DB가 알아서 실행해요. 현관문의 동작 감지 센서등처럼 &quot;이 일이 생기면 저절로 이것을 한다&quot;는 규칙이에요.</p>
<div class="tw"><table><thead><tr>
<th>분류 기준</th>
<th>종류</th>
<th>언제 실행</th>
<th>어울리는 일</th>
</tr>
</thead>
<tbody><tr>
<td>타이밍</td>
<td>BEFORE</td>
<td>DML <strong>전에</strong></td>
<td>입력 값 검사, 조건에 따라 DML 막기</td>
</tr>
<tr>
<td>타이밍</td>
<td>AFTER</td>
<td>DML <strong>후에</strong></td>
<td>변경 이력(로그) 남기기, 다른 테이블 같이 고치기</td>
</tr>
<tr>
<td>횟수</td>
<td>STATEMENT</td>
<td>문장당 <strong>한 번</strong></td>
<td>&quot;누가 언제 UPDATE를 실행했다&quot; 기록</td>
</tr>
<tr>
<td>횟수</td>
<td>ROW (<code>FOR EACH ROW</code>)</td>
<td>바뀐 <strong>행마다</strong></td>
<td>&quot;이 직원의 급여가 얼마에서 얼마로&quot; 기록</td>
</tr>
</tbody>
</table>
</div>
<p>예를 들어 UPDATE 한 문장으로 10명의 급여를 바꾸면 STATEMENT 트리거는 1번, ROW 트리거는 10번 실행돼요. 타이밍과 횟수를 조합해서 &quot;AFTER ROW 트리거&quot;처럼 불러요.</p>
<pre><code><span class="hl-com">-- 참고: emp_t의 급여가 바뀔 때마다 이력을 남기는 AFTER ROW 트리거</span>
<span class="hl-com">-- (sal_log 테이블이 먼저 있어야 해요. BEGIN~END 부분은 PL/SQL이에요.)</span>
<span class="hl-kw">CREATE</span> <span class="hl-kw">OR</span> <span class="hl-kw">REPLACE</span> <span class="hl-kw">TRIGGER</span> emp_t_sal_trg
<span class="hl-kw">AFTER</span> <span class="hl-kw">UPDATE</span> OF salary <span class="hl-kw">ON</span> emp_t
<span class="hl-kw">FOR</span> <span class="hl-kw">EACH</span> <span class="hl-kw">ROW</span>
<span class="hl-kw">BEGIN</span>
  <span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> sal_log <span class="hl-kw">VALUES</span> (:OLD.id, :OLD.salary, :NEW.salary, SYSDATE);
<span class="hl-kw">END</span>;
/</code></pre>
<ul>
<li><code>:OLD</code>는 바뀌기 전 값, <code>:NEW</code>는 바뀐 뒤 값이에요. 행마다 값이 다르니 ROW 트리거에서만 쓸 수 있어요.</li>
<li>트리거는 눈에 보이지 않게 동작해서, 너무 많이 만들면 &quot;왜 이 데이터가 바뀌었지?&quot;를 찾기 어려워져요. 꼭 필요한 곳에만 써요.</li>
</ul>
`;
