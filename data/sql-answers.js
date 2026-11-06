// SQL 정답 (채점할 때 정답 SQL을 실행해 결과를 비교해요)
var W = window.W = window.W || {};
W.answers = [
  {
    n: 1,
    sql: String.raw`-- 기본 단위: 테이블(TABLE)        예: S_DEPT 전체
-- 가로 한 줄: 행(row, 레코드)       예: 101, 총무부, 1
-- 세로 한 줄: 열(column, 컬럼)      예: NAME 열 (총무부, 영업부, 기획부 ...)`,
    mode: "self",
    kw: ["테이블|TABLE", "행|ROW|레코드", "열|COLUMN|컬럼"],
    lv: 1,
    exp: String.raw`<p>관계형 데이터베이스는 데이터를 표(테이블)로 저장하고, 테이블끼리의 관계로 연결해요. 행은 한 건의 데이터, 열은 한 종류의 데이터예요. 열마다 데이터 타입과 크기가 정해져 있어요.</p>
`
  },
  {
    n: 2,
    sql: "SELECT * FROM s_dept;   -- 11행, 3열(ID, NAME, REGION_ID)",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p><code>*</code>는 모든 열이라는 뜻이에요. 부서는 11개(행 11개)이고, 각 부서는 ID, NAME, REGION_ID 세 가지 정보(열 3개)를 가져요.</p>
`
  },
  {
    n: 3,
    sql: String.raw`-- Primary Key: ID (사번)
-- NAME은 동명이인이 생길 수 있어서, 값이 같은 행이 둘 이상 나올 수 있어요.
-- Primary Key는 중복되면 안 되고 비어 있어도 안 돼요.`,
    mode: "self",
    kw: ["ID", "중복|동명이인"],
    lv: 1,
    exp: String.raw`<p>PK는 &quot;각 행을 유일하게 구별하는 값&quot;이에요. 지금 데이터에 같은 이름이 없더라도, 앞으로 같은 이름의 직원이 입사할 수 있으니 이름은 PK로 쓰기에 알맞지 않아요. 실습 스크립트에서도 S_EMP의 PK는 ID(PK_S_EMP)예요.</p>
`
  },
  {
    n: 4,
    sql: String.raw`-- Foreign Key (외래 키)
-- DEPT_ID    → S_DEPT.ID   (직원이 속한 부서)
-- MANAGER_ID → S_EMP.ID    (직원의 상사, 같은 테이블을 가리킴)`,
    mode: "self",
    kw: ["FOREIGN KEY|FK|외래", "DEPT_ID", "MANAGER_ID"],
    lv: 1,
    exp: String.raw`<p>Foreign Key는 다른 테이블(또는 같은 테이블)의 PK 값을 참조해서 테이블 사이의 관계를 만들어요. 실습 스크립트에는 FK 제약조건이 실제로 걸려 있지는 않지만, 두 컬럼 모두 FK 역할을 해요. MANAGER_ID처럼 같은 테이블을 가리키는 관계는 6장의 SELF JOIN으로 읽어요.</p>
`
  },
  {
    n: 5,
    sql: String.raw`-- COMMISION_PCT: 모두 0  → 값이 "있고", 그 값이 0
-- CREDIT_RATING: 모두 (null) → 값이 "없음"(모름)`,
    mode: "self",
    kw: ["NULL", "0"],
    lv: 1,
    exp: String.raw`<p>0은 숫자 값이고, NULL은 값이 아예 없다는 뜻이에요. 그래서 NULL은 <code>= NULL</code>로 찾을 수 없고(3장 IS NULL), 계산에 섞이면 결과도 NULL이 되며(3장), 그룹 함수에서 빠져요(4장). 오라클은 빈 문자열 &#39;&#39;도 NULL로 저장해요.</p>
`
  },
  {
    n: 6,
    sql: "SELECT name FROM s_dept WHERE id = 110;   -- 기획부",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>WHERE로 행을 고르고(3장), SELECT로 열을 고르면 그 둘이 만나는 필드 하나가 나와요.</p>
`
  },
  {
    n: 7,
    sql: String.raw`-- Primary Key : ID
-- SALES_REP_ID → S_EMP.ID     (담당 직원)
-- REGION_ID    → S_REGION.ID  (고객의 지역)`,
    mode: "self",
    kw: ["ID", "SALES_REP_ID", "REGION_ID"],
    lv: 2,
    exp: String.raw`<p>이름이 <code>_ID</code>로 끝나는 컬럼은 대개 다른 테이블의 PK를 가리켜요. 이렇게 번호로 이어 두면 JOIN(6장)으로 다시 붙여 읽을 수 있어요.</p>
`
  },
  {
    n: 8,
    sql: String.raw`-- 문제점
-- 1) 같은 부서 이름과 지역이 직원 수만큼 반복 저장돼요(중복).
-- 2) 부서 이름이 바뀌면 그 부서 직원의 행을 모두 고쳐야 하고, 하나라도 빠뜨리면 값이 서로 달라져요.
-- 테이블을 나누면 부서 정보는 S_DEPT 한 곳에만 있고, 직원은 부서 번호만 가져요.
-- 읽을 때는 JOIN으로 다시 붙여요.`,
    mode: "self",
    kw: ["중복", "JOIN|붙"],
    lv: 2,
    exp: String.raw`<p>&quot;쪼개면 중복이 없어지고, 읽을 때는 다시 붙인다&quot;가 관계형 DB의 기본 생각이에요.</p>
`
  },
  {
    n: 9,
    sql: String.raw`-- (가) 0     : 값이 정해져 있고, 그 값이 0
-- (나) NULL  : 아직 정해지지 않음
-- (다) NULL  : 값이 있지만 알 수 없음`,
    mode: "self",
    kw: ["0", "NULL"],
    lv: 2,
    exp: String.raw`<p>NULL은 &quot;없음&quot; 또는 &quot;모름&quot;이에요. 0은 엄연한 값이라서 평균을 낼 때도 0은 포함되고 NULL은 빠져요(4장).</p>
`
  },
  {
    n: 10,
    sql: "SELECT COUNT(*), COUNT(DISTINCT id) FROM s_dept;   -- 11, 11",
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>두 값이 같으면 중복된 ID가 없다는 뜻이에요. COUNT(DISTINCT 컬럼)은 4장에서 자세히 다뤄요.</p>
`
  },
  {
    n: 11,
    sql: String.raw`-- DBMS : 데이터베이스를 만들고 관리하는 프로그램
-- RDBMS: 데이터를 테이블과 관계로 관리하는 DBMS
-- SQL  : RDBMS에 명령을 내리는 표준 언어
-- 오라클은 RDBMS예요.`,
    mode: "self",
    kw: ["RDBMS", "SQL"],
    lv: 2,
    exp: String.raw`<p>RDBMS가 &quot;프로그램&quot;, SQL이 그 프로그램과 대화하는 &quot;언어&quot;예요.</p>
`
  },
  {
    n: 12,
    sql: "SELECT COUNT(*), COUNT(DISTINCT phone) FROM s_customer;   -- 15, 14 → PK 불가",
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>행은 15개인데 서로 다른 전화번호는 14개라서, 같은 번호를 쓰는 고객이 있어요. 중복이 있으면 PK로 쓸 수 없어요.</p>
`
  },
  {
    n: 13,
    sql: String.raw`SELECT phone, COUNT(*)
FROM s_customer
GROUP BY phone
HAVING COUNT(*) > 1;   -- 010-2222-1111, 2`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>같은 값끼리 묶어서(GROUP BY) 2개 이상인 묶음만 남기면(HAVING) 중복 값을 찾을 수 있어요. 데이터를 정리하거나 제약조건을 걸기 전에 자주 쓰는 방법이에요.</p>
`
  },
  {
    n: 14,
    sql: String.raw`SELECT name, region_id
FROM s_customer
WHERE region_id NOT IN (SELECT id FROM s_region);   -- 최계윤, 6`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>실습 스크립트에는 FK 제약조건이 걸려 있지 않아서, 부모에 없는 값(6)이 들어가 있어요. FK를 걸었다면 이 행은 처음부터 들어갈 수 없었어요(8장).</p>
`
  },
  {
    n: 15,
    sql: String.raw`SELECT name, sales_rep_id
FROM s_customer
WHERE sales_rep_id NOT IN (SELECT id FROM s_emp);   -- 고정환, 0`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>0번 직원은 없어요. &quot;담당자 없음&quot;을 0으로 표시한 것인데, 관계형 DB에서는 이런 경우 NULL을 쓰는 것이 원칙이에요. NULL이면 FK 제약조건에도 걸리지 않아요.</p>
`
  },
  {
    n: 16,
    sql: String.raw`SELECT name, title, manager_id
FROM s_emp
WHERE manager_id NOT IN (SELECT id FROM s_emp);   -- 박구곤 사장, 0`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>같은 테이블을 가리키는 FK(자기 참조)예요. 사장처럼 상사가 없는 사람은 0 대신 NULL로 두는 것이 자연스러워요.</p>
`
  },
  {
    n: 17,
    sql: String.raw`-- (가) UNKNOWN
-- (나) UNKNOWN
-- (다) UNKNOWN  (TRUE AND UNKNOWN)
-- (라) TRUE     (TRUE OR 무엇이든 TRUE)
-- (마) UNKNOWN  (NOT UNKNOWN도 UNKNOWN)`,
    mode: "self",
    kw: ["UNKNOWN", "TRUE"],
    lv: 3,
    exp: String.raw`<p>NULL과의 비교는 항상 UNKNOWN이고, WHERE는 TRUE인 행만 남겨요. 그래서 NULL을 찾을 때는 IS NULL을 써야 해요.</p>
`
  },
  {
    n: 18,
    sql: String.raw`-- 0, 0, 15
-- 신용등급이 모두 NULL이라 = NULL도, <> 'A'도 UNKNOWN이 되어 한 행도 남지 않아요.
-- IS NULL만 NULL을 찾을 수 있어요.`,
    mode: "self",
    kw: ["0", "15"],
    lv: 3,
    exp: String.raw`<p>&quot;A가 아닌 고객&quot;에 NULL인 고객까지 넣고 싶다면 <code>credit_rating &lt;&gt; &#39;A&#39; OR credit_rating IS NULL</code>처럼 따로 써야 해요.</p>
`
  },
  {
    n: 19,
    sql: String.raw`-- student (sno PK, name, grade)
-- course  (cno PK, cname, credit)
-- enroll  (sno FK → student.sno, cno FK → course.cno, score)
--          PK는 (sno, cno) 두 컬럼을 합친 것`,
    mode: "self",
    kw: ["STUDENT", "COURSE", "ENROLL", "PK|PRIMARY"],
    lv: 3,
    exp: String.raw`<p>&quot;여러 대 여러&quot; 관계는 가운데에 연결 테이블(enroll)을 두고, 양쪽 PK를 FK로 가져와요. 두 FK를 합친 것이 연결 테이블의 PK가 돼요(8장의 복합 키).</p>
`
  },
  {
    n: 20,
    sql: String.raw`-- (가) SQL
-- (나) SQL*Plus
-- (다) PL/SQL  (14장의 TRIGGER가 PL/SQL로 만들어져요)`,
    mode: "self",
    kw: ["SQL*PLUS", "PL/SQL"],
    lv: 1,
    exp: String.raw`<p>SQL은 어느 RDBMS에서나 쓰는 표준 언어이고, SQL*Plus는 그 SQL을 실행하는 프로그램이에요. PL/SQL은 오라클에서만 쓰는 확장 언어예요.</p>
`
  },
  {
    n: 21,
    sql: String.raw`-- SYS: 최고 관리자. DB 운영에 필요한 기본 테이블과 데이터 사전의 주인
-- SYSTEM: DB 관리용 DBA 계정. 모든 시스템 권한을 가짐
-- 관리용 계정에서 실수로 중요한 객체를 바꾸거나 지우면 DB 전체에 문제가 생길 수 있어요.
-- 그래서 필요한 권한만 가진 일반 사용자(student)를 따로 만들어 실습해요.`,
    mode: "self",
    kw: ["SYS", "SYSTEM", "관리|DBA"],
    lv: 1,
    exp: String.raw`<p>관리자 계정은 권한이 너무 넓어서 실수의 영향도 커요. 일을 할 때는 필요한 권한만 가진 계정을 쓰는 것이 기본 원칙이에요.</p>
`
  },
  {
    n: 22,
    sql: String.raw`CREATE USER study IDENTIFIED BY 1234
  DEFAULT TABLESPACE users
  TEMPORARY TABLESPACE temp;`,
    mode: "self",
    kw: ["CREATE USER", "IDENTIFIED BY", "DEFAULT TABLESPACE", "TEMPORARY TABLESPACE"],
    lv: 1,
    exp: String.raw`<p>TABLESPACE는 데이터를 저장하는 논리적인 공간이에요. 임시 TABLESPACE를 지정하지 않으면 SYSTEM TABLESPACE를 쓰게 되니 따로 지정해요. 사용자 관리 명령은 브라우저 실행기에서 실행되지 않으니 오라클에서 확인하세요.</p>
`
  },
  {
    n: 23,
    sql: String.raw`-- 만든 직후에는 CREATE SESSION 권한이 없어서 접속이 거부돼요. (ORA-01045)

GRANT connect, resource TO study;   -- 접속 + 테이블 만들기 등
REVOKE resource FROM study;         -- resource ROLE만 회수`,
    mode: "self",
    kw: ["GRANT", "CONNECT", "RESOURCE", "REVOKE"],
    lv: 1,
    exp: String.raw`<p>사용자를 만드는 것과 권한을 주는 것은 별개예요. connect와 resource는 오라클이 미리 만들어 둔 ROLE(권한 꾸러미)이고, 12장에서 자세히 다뤄요.</p>
`
  },
  {
    n: 24,
    sql: String.raw`ALTER USER study IDENTIFIED BY abcd;
DROP USER study;`,
    mode: "self",
    kw: ["ALTER USER", "IDENTIFIED BY", "DROP USER"],
    lv: 2,
    exp: String.raw`<p>사용자 비밀번호 변경은 ALTER USER, 삭제는 DROP USER예요. 사용자가 만든 객체가 남아 있으면 DROP USER가 실패하는데, 그 경우는 고급 문제에서 다뤄요.</p>
`
  },
  {
    n: 25,
    sql: String.raw`-- 할 수 있음: 접속(CONNECT), 테이블·시퀀스 만들기(RESOURCE)
-- 할 수 없음: 뷰 만들기. 요즘 오라클의 RESOURCE ROLE에는 CREATE VIEW가 들어 있지 않아요.
--            GRANT CREATE VIEW TO study; 를 따로 받아야 해요.`,
    mode: "self",
    kw: ["CREATE VIEW"],
    lv: 2,
    exp: String.raw`<p>ROLE은 권한 꾸러미라서, 안에 무엇이 들어 있는지 알아야 해요. 부족한 권한은 따로 GRANT해요(12장).</p>
`
  },
  {
    n: 26,
    sql: String.raw`-- 정렬(ORDER BY, GROUP BY) 같은 작업은 잠깐 쓰는 임시 공간이 필요해요.
-- 지정하지 않으면 SYSTEM TABLESPACE를 쓰게 되어, DB 운영에 중요한 공간을 차지하고 부담을 줘요.
-- 그래서 임시 작업용 TEMP TABLESPACE를 따로 지정해요.`,
    mode: "self",
    kw: ["SYSTEM", "임시|TEMP"],
    lv: 2,
    exp: String.raw`<p>TABLESPACE는 데이터를 저장하는 논리적인 공간이에요. 관리용 공간(SYSTEM)과 사용자 공간(USERS), 임시 공간(TEMP)을 나눠 쓰는 것이 기본이에요.</p>
`
  },
  {
    n: 27,
    sql: String.raw`-- (가) SQL
-- (나) PL/SQL (IF 같은 프로그램 로직)
-- (다) SQL
-- (라) PL/SQL`,
    mode: "self",
    kw: ["PL/SQL"],
    lv: 2,
    exp: String.raw`<p>SQL은 한 문장으로 데이터를 조회·조작하고, PL/SQL은 BEGIN ~ END 블록 안에 IF·반복문 같은 로직을 쓸 수 있어요.</p>
`
  },
  {
    n: 28,
    sql: String.raw`-- ;  : SQL 문장이 끝났으니 실행하라는 표시
-- /  : 방금 입력한(버퍼에 있는) 문장이나 PL/SQL 블록을 실행하라는 표시
--      트리거처럼 BEGIN ~ END가 있는 PL/SQL은 마지막에 / 를 써서 실행해요.`,
    mode: "self",
    kw: [";", "/"],
    lv: 2,
    exp: String.raw`<p>SQL*Plus는 실행 도구라서, 어디까지가 한 명령인지 알려 줘야 해요.</p>
`
  },
  {
    n: 29,
    sql: String.raw`CREATE ROLE dev_role;
GRANT CREATE SESSION, CREATE TABLE, CREATE VIEW TO dev_role;

CREATE USER dev1 IDENTIFIED BY 1234;
CREATE USER dev2 IDENTIFIED BY 1234;
CREATE USER dev3 IDENTIFIED BY 1234;

GRANT dev_role TO dev1, dev2, dev3;`,
    mode: "self",
    kw: ["CREATE ROLE", "CREATE USER", "GRANT DEV_ROLE"],
    lv: 3,
    exp: String.raw`<p>권한 3개를 3명에게 따로 주면 GRANT를 9번 해야 하지만, ROLE을 쓰면 ROLE에 3번, 사용자에게 1번이면 돼요. 나중에 권한을 바꿀 때도 ROLE만 고치면 돼요.</p>
`
  },
  {
    n: 30,
    sql: String.raw`-- 에러: ORA-01922 (CASCADE를 지정해야 함)
-- study가 가진 객체(테이블 등)가 남아 있어서 사용자만 지울 수 없어요.

DROP USER study CASCADE;   -- 사용자의 객체까지 모두 함께 삭제`,
    mode: "self",
    kw: ["CASCADE"],
    lv: 3,
    exp: String.raw`<p>CASCADE는 &quot;딸린 것까지 함께&quot;라는 뜻이에요. 객체가 모두 사라지니 되돌릴 수 없어요.</p>
`
  },
  {
    n: 31,
    sql: String.raw`-- 쓸 수 없음
-- (나) 2026_emp : 숫자로 시작함 (문자로 시작해야 해요)
-- (다) emp-list : '-'는 쓸 수 없는 문자예요 (A-Z, 0-9, _, $, # 만 가능)
-- (라) select   : 예약어예요
-- 쓸 수 있음: (가), (마)`,
    mode: "self",
    kw: ["나", "다", "라"],
    lv: 1,
    exp: String.raw`<p>이름은 문자로 시작하고, 30자 이내, A-Z·a-z·0-9·_·$·#만 쓸 수 있어요. 예약어와 같은 사용자의 다른 객체 이름과 겹치는 이름도 안 돼요.</p>
`
  },
  {
    n: 32,
    sql: String.raw`-- (가) VARCHAR2(20)  : 길이가 다르니 가변 길이
-- (나) CHAR(1)       : 길이가 항상 같으니 고정 길이
-- (다) NUMBER(7,2)   : 전체 7자리 중 소수 2자리
-- (라) DATE`,
    mode: "self",
    kw: ["VARCHAR2", "CHAR", "NUMBER(7,2)|NUMBER(7, 2)", "DATE"],
    lv: 1,
    exp: String.raw`<p>NUMBER(p, s)의 p는 소수 부분까지 포함한 전체 자릿수예요. 99999.99는 정수 5자리 + 소수 2자리라서 NUMBER(7,2)예요.</p>
`
  },
  {
    n: 33,
    sql: String.raw`-- CHAR(10)     : 'abc       '  (10칸을 채우려고 뒤에 공백 7칸이 붙어요)
-- VARCHAR2(10) : 'abc'         (넣은 3글자만 저장해요)
-- 길이가 제각각인 값에는 VARCHAR2가 알맞아요.`,
    mode: "self",
    kw: ["공백", "VARCHAR2"],
    lv: 1,
    exp: String.raw`<p>CHAR는 고정 길이라 항상 지정한 크기만큼 공간을 쓰고, VARCHAR2는 넣은 만큼만 써요. CHAR 값끼리 비교할 때 뒤 공백 때문에 헷갈리는 일도 생겨서, 일반 문자는 VARCHAR2를 써요.</p>
`
  },
  {
    n: 34,
    sql: "-- 999.99  (전체 5자리 중 소수 2자리 → 정수 부분은 3자리)",
    mode: "self",
    kw: ["999.99"],
    lv: 1,
    exp: String.raw`<p>NUMBER(p, s)에서 p는 소수 부분까지 포함한 전체 자릿수예요.</p>
`
  },
  {
    n: 35,
    sql: String.raw`-- 'abcdef'(6자) : 에러 ORA-12899 (값이 컬럼 크기보다 큼)
-- 'ab'           : 'ab   '처럼 뒤에 공백 3칸이 붙어 5자로 저장`,
    mode: "self",
    kw: ["12899|크기", "공백"],
    lv: 2,
    exp: String.raw`<p>CHAR와 VARCHAR2 모두 정해진 크기보다 긴 값은 넣을 수 없어요. 짧은 값은 CHAR만 공백으로 채워요.</p>
`
  },
  {
    n: 36,
    sql: String.raw`-- '2025-13-01' : 에러 ORA-01843 (13월은 없음)
-- '2025-02-30' : 에러 ORA-01839 (그 달에 없는 날짜)`,
    mode: "self",
    kw: ["01843|13월", "에러"],
    lv: 2,
    exp: String.raw`<p>DATE 타입은 실제로 존재하는 날짜만 저장할 수 있어요. 문자로 저장했다면 이런 잘못된 값도 그냥 들어가 버려요. 날짜는 DATE로 저장해야 하는 이유예요.</p>
`
  },
  {
    n: 37,
    sql: String.raw`-- NUMBER(7,2) ← 12345.678 : 12345.68 (소수 둘째 자리로 반올림해서 저장)
-- NUMBER(5,2) ← 12345.6   : 에러 ORA-01438 (정수 부분은 3자리까지만 가능)`,
    mode: "self",
    kw: ["12345.68", "01438|에러"],
    lv: 3,
    exp: String.raw`<p>소수 자릿수(s)를 넘는 부분은 반올림되지만, 정수 부분(p - s)을 넘으면 에러가 나요.</p>
`
  },
  {
    n: 38,
    sql: String.raw`SELECT * FROM "Emp List";   -- 항상 큰따옴표와 대소문자까지 똑같이 써야 해요
SELECT * FROM emp list;     -- 에러
SELECT * FROM "EMP LIST";   -- 에러 (대소문자가 다름)`,
    mode: "self",
    kw: ["\""],
    lv: 3,
    exp: String.raw`<p>큰따옴표로 감싼 이름은 대소문자와 띄어쓰기를 그대로 기억해서, 쓸 때마다 똑같이 감싸야 해요. 이름 규칙(문자로 시작, 영문·숫자·_·$·#)을 지키는 이름을 쓰는 것이 좋아요.</p>
`
  },
  {
    n: 39,
    sql: String.raw`CREATE TABLE student_ex (
  id         NUMBER(5),
  name       VARCHAR2(20),
  grade      NUMBER(1) DEFAULT 1,
  enter_date DATE      DEFAULT SYSDATE
);

DESC student_ex;`,
    mode: "self",
    kw: ["CREATE TABLE", "NUMBER(5)", "VARCHAR2(20)", "DEFAULT 1", "DEFAULT SYSDATE"],
    lv: 1,
    exp: String.raw`<p>DEFAULT는 INSERT할 때 그 컬럼에 값을 주지 않으면 들어갈 기본값이에요. 이 문제는 브라우저 실행기에서도 실행돼요. 다음 문제들은 이 테이블을 쓰니 먼저 실행해 두세요(채점은 이 테이블이 있는 상태에서 따로 해요).</p>
`
  },
  {
    n: 40,
    sql: String.raw`CREATE TABLE book_t (
  isbn     CHAR(13),
  title    VARCHAR2(100),
  price    NUMBER(7)  DEFAULT 0,
  pub_date DATE,
  stock    NUMBER(3)  DEFAULT 0
);
-- ISBN은 길이가 항상 13자로 같아서 고정 길이 CHAR가 알맞아요.
-- 숫자처럼 보여도 계산하지 않고, 앞자리 0이 사라지면 안 되니 문자로 저장해요.`,
    mode: "self",
    kw: ["CHAR(13)", "VARCHAR2(100)", "DEFAULT 0", "DATE"],
    lv: 3,
    exp: String.raw`<p>전화번호, 우편번호, ISBN처럼 계산하지 않는 &quot;번호&quot;는 문자 타입이 알맞아요. NUMBER로 저장하면 앞의 0이 사라져요.</p>
`
  },
  {
    n: 41,
    sql: String.raw`INSERT INTO student_ex (id, name) VALUES (1, '홍길동');

SELECT id, name, grade FROM student_ex;   -- grade = 1 (DEFAULT)`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE student_ex (
  id         NUMBER(5),
  name       VARCHAR2(20),
  grade      NUMBER(1) DEFAULT 1,
  enter_date DATE      DEFAULT SYSDATE
)`,
    exp: String.raw`<p>컬럼 목록에 없는 컬럼은 DEFAULT 값이, DEFAULT가 없으면 NULL이 들어가요. grade는 DEFAULT 1, enter_date는 오늘 날짜가 들어가요.</p>
`
  },
  {
    n: 42,
    sql: String.raw`INSERT INTO student_ex
VALUES (2, '김철수', 3, TO_DATE('2023-03-02', 'YYYY-MM-DD'));

SELECT id, name, grade, TO_CHAR(enter_date, 'YYYY-MM-DD') FROM student_ex;`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE student_ex (
  id         NUMBER(5),
  name       VARCHAR2(20),
  grade      NUMBER(1) DEFAULT 1,
  enter_date DATE      DEFAULT SYSDATE
)`,
    exp: String.raw`<p>컬럼 목록을 빼면 테이블의 모든 컬럼에, 만든 순서대로 값을 줘야 해요. 날짜는 TO_DATE로 형식을 지정해 넣는 것이 안전해요.</p>
`
  },
  {
    n: 43,
    sql: String.raw`UPDATE student_ex SET grade = 2 WHERE grade = 1;

SELECT id, name, grade FROM student_ex ORDER BY id;`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE student_ex (
  id         NUMBER(5),
  name       VARCHAR2(20),
  grade      NUMBER(1) DEFAULT 1,
  enter_date DATE      DEFAULT SYSDATE
);
INSERT INTO student_ex VALUES (1, '홍길동', 1, TO_DATE('2025-03-04', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (2, '김철수', 3, TO_DATE('2023-03-02', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (3, '이영희', 2, TO_DATE('2024-03-04', 'YYYY-MM-DD'))`,
    order: [0],
    exp: String.raw`<p>UPDATE는 WHERE에 맞는 행만 바꿔요. 실행하기 전에 같은 WHERE로 SELECT를 먼저 해 보면 몇 행이 바뀔지 알 수 있어요.</p>
`
  },
  {
    n: 44,
    sql: String.raw`UPDATE student_ex
SET name = '김철민', grade = 4
WHERE id = 2;

SELECT id, name, grade FROM student_ex ORDER BY id;`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE student_ex (
  id         NUMBER(5),
  name       VARCHAR2(20),
  grade      NUMBER(1) DEFAULT 1,
  enter_date DATE      DEFAULT SYSDATE
);
INSERT INTO student_ex VALUES (1, '홍길동', 1, TO_DATE('2025-03-04', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (2, '김철수', 3, TO_DATE('2023-03-02', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (3, '이영희', 2, TO_DATE('2024-03-04', 'YYYY-MM-DD'))`,
    order: [0],
    exp: String.raw`<p>SET에 바꿀 컬럼을 쉼표로 나열하면 여러 컬럼을 한 번에 바꿀 수 있어요. 한 학생만 바꿀 때는 겹치지 않는 값(id)으로 WHERE를 거는 것이 안전해요.</p>
`
  },
  {
    n: 45,
    sql: String.raw`DELETE FROM student_ex WHERE grade >= 3;

SELECT id, name, grade FROM student_ex ORDER BY id;`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE student_ex (
  id         NUMBER(5),
  name       VARCHAR2(20),
  grade      NUMBER(1) DEFAULT 1,
  enter_date DATE      DEFAULT SYSDATE
);
INSERT INTO student_ex VALUES (1, '홍길동', 1, TO_DATE('2025-03-04', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (2, '김철수', 3, TO_DATE('2023-03-02', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (3, '이영희', 2, TO_DATE('2024-03-04', 'YYYY-MM-DD'))`,
    order: [0],
    exp: String.raw`<p>DELETE는 WHERE에 맞는 행을 지우고, 테이블 구조는 남겨요. COMMIT 전이라면 ROLLBACK으로 되돌릴 수 있어요(9장).</p>
`
  },
  {
    n: 46,
    sql: String.raw`-- WHERE가 없어서 모든 학생의 학년이 1로 바뀌어요.

-- 습관: 바꾸기 전에 같은 WHERE로 먼저 조회해서 대상 행을 확인
SELECT * FROM student_ex WHERE grade = 3;
UPDATE student_ex SET grade = 1 WHERE grade = 3;

-- COMMIT 전이라면 되돌리기
ROLLBACK;`,
    mode: "self",
    kw: ["WHERE", "ROLLBACK"],
    lv: 2,
    exp: String.raw`<p>UPDATE와 DELETE는 WHERE를 빼면 테이블 전체에 적용돼요. DML은 COMMIT 전까지 ROLLBACK으로 되돌릴 수 있지만, COMMIT한 뒤에는 되돌릴 수 없어요.</p>
`
  },
  {
    n: 47,
    sql: String.raw`UPDATE student_ex
SET grade = grade + 1,
    enter_date = TO_DATE('2024-03-02', 'YYYY-MM-DD')
WHERE id = 3;

SELECT id, name, grade, TO_CHAR(enter_date, 'YYYY-MM-DD') FROM student_ex ORDER BY id;`,
    mode: "auto",
    lv: 2,
    setup: String.raw`CREATE TABLE student_ex (id NUMBER(5), name VARCHAR2(20), grade NUMBER(1) DEFAULT 1, enter_date DATE DEFAULT SYSDATE);
INSERT INTO student_ex VALUES (1, '홍길동', 1, TO_DATE('2025-03-04', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (2, '김철수', 3, TO_DATE('2023-03-02', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (3, '이영희', 2, TO_DATE('2024-03-04', 'YYYY-MM-DD'))`,
    order: [0],
    exp: String.raw`<p>SET 오른쪽에는 <code>grade + 1</code>처럼 원래 값을 쓴 계산식도 쓸 수 있어요.</p>
`
  },
  {
    n: 48,
    sql: String.raw`DELETE FROM student_ex
WHERE enter_date >= TO_DATE('2024-01-01', 'YYYY-MM-DD');

SELECT id, name FROM student_ex ORDER BY id;`,
    mode: "auto",
    lv: 2,
    setup: String.raw`CREATE TABLE student_ex (id NUMBER(5), name VARCHAR2(20), grade NUMBER(1) DEFAULT 1, enter_date DATE DEFAULT SYSDATE);
INSERT INTO student_ex VALUES (1, '홍길동', 1, TO_DATE('2025-03-04', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (2, '김철수', 3, TO_DATE('2023-03-02', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (3, '이영희', 2, TO_DATE('2024-03-04', 'YYYY-MM-DD'))`,
    order: [0],
    exp: String.raw`<p>DELETE의 WHERE에도 날짜 비교를 쓸 수 있어요. 지우기 전에 같은 WHERE로 SELECT해서 대상을 먼저 확인하는 습관을 들이세요.</p>
`
  },
  {
    n: 49,
    sql: String.raw`UPDATE student_ex SET grade = grade + 1;

SELECT id, name, grade FROM student_ex ORDER BY id;`,
    mode: "auto",
    lv: 2,
    setup: String.raw`CREATE TABLE student_ex (id NUMBER(5), name VARCHAR2(20), grade NUMBER(1) DEFAULT 1, enter_date DATE DEFAULT SYSDATE);
INSERT INTO student_ex VALUES (1, '홍길동', 1, TO_DATE('2025-03-04', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (2, '김철수', 3, TO_DATE('2023-03-02', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (3, '이영희', 2, TO_DATE('2024-03-04', 'YYYY-MM-DD'))`,
    order: [0],
    exp: String.raw`<p>모든 행을 바꾸는 것이 목적일 때만 WHERE를 생략해요. 실수로 빠뜨린 것인지 일부러 뺀 것인지 항상 다시 확인하세요.</p>
`
  },
  {
    n: 50,
    sql: String.raw`INSERT INTO student_ex (id, name) VALUES (4, '박민수');
INSERT INTO student_ex VALUES (5, '최별', 2, TO_DATE('2024-03-04', 'YYYY-MM-DD'));

SELECT id, name, grade FROM student_ex ORDER BY id;   -- 박민수의 grade는 DEFAULT 1`,
    mode: "auto",
    lv: 2,
    setup: "CREATE TABLE student_ex (id NUMBER(5), name VARCHAR2(20), grade NUMBER(1) DEFAULT 1, enter_date DATE DEFAULT SYSDATE)",
    order: [0],
    exp: String.raw`<p>INSERT 한 문장은 한 행만 넣어요. 컬럼 목록을 쓰면 빠진 컬럼에 DEFAULT가, 목록 없이 쓰면 모든 컬럼 값을 순서대로 줘야 해요.</p>
`
  },
  {
    n: 51,
    sql: String.raw`-- 에러: ORA-00947 (값의 수가 충분하지 않음). 컬럼은 4개인데 값은 3개예요.

-- 방법 1: 넣을 컬럼을 지정
INSERT INTO student_ex (id, name, grade) VALUES (5, '최별', 2);
-- 방법 2: 모든 컬럼 값을 주기
INSERT INTO student_ex VALUES (5, '최별', 2, SYSDATE);`,
    mode: "self",
    kw: ["00947", "(ID, NAME, GRADE)|SYSDATE"],
    lv: 2,
    exp: String.raw`<p>컬럼 목록을 생략하면 테이블의 모든 컬럼에 값을 줘야 해요. 값이 더 많으면 ORA-00913(값의 수가 너무 많음)이 나요.</p>
`
  },
  {
    n: 52,
    sql: String.raw`-- 문자 값 정달에 작은따옴표가 없어서, 오라클이 정달을 컬럼 이름으로 읽어요. (ORA-00984)
INSERT INTO student_ex (id, name) VALUES (6, '정달');`,
    mode: "self",
    kw: ["'정달'"],
    lv: 2,
    exp: String.raw`<p>문자와 날짜 값은 작은따옴표로 감싸고, 숫자는 따옴표 없이 써요. 큰따옴표는 값이 아니라 이름(별명, 컬럼)에 써요.</p>
`
  },
  {
    n: 53,
    sql: String.raw`UPDATE student_ex SET grade = 4 WHERE id IN (1, 3);

SELECT id, name, grade FROM student_ex ORDER BY id;`,
    mode: "auto",
    lv: 2,
    setup: String.raw`CREATE TABLE student_ex (id NUMBER(5), name VARCHAR2(20), grade NUMBER(1) DEFAULT 1, enter_date DATE DEFAULT SYSDATE);
INSERT INTO student_ex VALUES (1, '홍길동', 1, TO_DATE('2025-03-04', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (2, '김철수', 3, TO_DATE('2023-03-02', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (3, '이영희', 2, TO_DATE('2024-03-04', 'YYYY-MM-DD'))`,
    order: [0],
    exp: String.raw`<p>UPDATE와 DELETE의 WHERE에도 SELECT와 똑같은 조건(IN, BETWEEN, LIKE 등)을 쓸 수 있어요.</p>
`
  },
  {
    n: 54,
    sql: String.raw`DELETE FROM student_ex WHERE grade = 3;
UPDATE student_ex SET grade = grade + 1;
INSERT INTO student_ex (id, name) VALUES (4, '박민수');

SELECT id, name, grade FROM student_ex ORDER BY id;`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE student_ex (id NUMBER(5), name VARCHAR2(20), grade NUMBER(1) DEFAULT 1, enter_date DATE DEFAULT SYSDATE);
INSERT INTO student_ex VALUES (1, '홍길동', 1, TO_DATE('2025-03-04', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (2, '김철수', 3, TO_DATE('2023-03-02', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (3, '이영희', 2, TO_DATE('2024-03-04', 'YYYY-MM-DD'))`,
    order: [0],
    exp: String.raw`<p>순서가 중요해요. 학년을 먼저 올리면 2학년이던 이영희가 3학년이 되어 함께 지워져요. 신입생은 학년을 올린 뒤에 넣어야 1학년으로 남아요.</p>
`
  },
  {
    n: 55,
    sql: String.raw`UPDATE book_t SET price = price * 0.9 WHERE stock = 0;

SELECT title, price FROM book_t ORDER BY title;`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE book_t (isbn CHAR(13), title VARCHAR2(100), price NUMBER(7), pub_date DATE, stock NUMBER(3));
INSERT INTO book_t VALUES ('9788900000011', 'SQL 첫걸음', 18000, TO_DATE('2019-05-01', 'YYYY-MM-DD'), 0);
INSERT INTO book_t VALUES ('9788900000028', '오라클 정석', 32000, TO_DATE('2021-03-15', 'YYYY-MM-DD'), 5);
INSERT INTO book_t VALUES ('9788900000035', '데이터 모델링', 27000, TO_DATE('2018-11-20', 'YYYY-MM-DD'), 0);
INSERT INTO book_t VALUES ('9788900000042', '자바 입문', 22000, TO_DATE('2022-01-10', 'YYYY-MM-DD'), 12)`,
    order: [0],
    exp: String.raw`<p>가격 컬럼이 NUMBER(7)이라 소수점이 생기면 반올림돼서 저장돼요. 여기서는 16200, 24300처럼 딱 떨어져요.</p>
`
  },
  {
    n: 56,
    sql: String.raw`DELETE FROM book_t
WHERE price >= 20000
  AND pub_date < TO_DATE('2020-01-01', 'YYYY-MM-DD');

SELECT title FROM book_t ORDER BY title;`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE book_t (isbn CHAR(13), title VARCHAR2(100), price NUMBER(7), pub_date DATE, stock NUMBER(3));
INSERT INTO book_t VALUES ('9788900000011', 'SQL 첫걸음', 18000, TO_DATE('2019-05-01', 'YYYY-MM-DD'), 0);
INSERT INTO book_t VALUES ('9788900000028', '오라클 정석', 32000, TO_DATE('2021-03-15', 'YYYY-MM-DD'), 5);
INSERT INTO book_t VALUES ('9788900000035', '데이터 모델링', 27000, TO_DATE('2018-11-20', 'YYYY-MM-DD'), 0);
INSERT INTO book_t VALUES ('9788900000042', '자바 입문', 22000, TO_DATE('2022-01-10', 'YYYY-MM-DD'), 12)`,
    order: [0],
    exp: String.raw`<p>조건 두 개를 모두 만족하는 &#39;데이터 모델링&#39;만 지워져요. AND와 OR를 바꿔 쓰면 지워지는 책이 완전히 달라지니 주의하세요.</p>
`
  },
  {
    n: 57,
    sql: String.raw`UPDATE swap_t SET a = b, b = a;

SELECT a, b FROM swap_t ORDER BY a;   -- (2, 1), (4, 3) : 두 값이 서로 바뀜`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE swap_t (a NUMBER, b NUMBER);
INSERT INTO swap_t VALUES (1, 2);
INSERT INTO swap_t VALUES (3, 4)`,
    order: [0],
    exp: String.raw`<p>SET의 오른쪽은 모두 &quot;바꾸기 전 값&quot;으로 계산돼요. 그래서 b = a의 a는 이미 바뀐 값이 아니라 원래 값이에요. 프로그래밍 언어처럼 임시 변수가 필요하지 않아요.</p>
`
  },
  {
    n: 58,
    sql: String.raw`UPDATE student_ex SET grade = 3 WHERE grade = 2;   -- 먼저 2학년 → 3학년
UPDATE student_ex SET grade = 2 WHERE grade = 1;   -- 그다음 1학년 → 2학년

SELECT id, name, grade FROM student_ex ORDER BY id;`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE student_ex (id NUMBER(5), name VARCHAR2(20), grade NUMBER(1) DEFAULT 1, enter_date DATE DEFAULT SYSDATE);
INSERT INTO student_ex VALUES (1, '홍길동', 1, TO_DATE('2025-03-04', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (2, '김철수', 3, TO_DATE('2023-03-02', 'YYYY-MM-DD'));
INSERT INTO student_ex VALUES (3, '이영희', 2, TO_DATE('2024-03-04', 'YYYY-MM-DD'))`,
    order: [0],
    exp: String.raw`<p>1학년을 먼저 2학년으로 올리면, 두 번째 UPDATE에서 그 학생까지 3학년이 돼요. 이런 문제는 14장의 CASE로 한 번에 <code>SET grade = CASE grade WHEN 1 THEN 2 WHEN 2 THEN 3 ELSE grade END</code>처럼 풀 수도 있어요.</p>
`
  },
  {
    n: 59,
    sql: String.raw`-- DELETE FROM student_ex; : 모든 행을 지우지만 테이블(구조)은 남아요.
--                            DML이라 COMMIT 전이면 ROLLBACK으로 되돌릴 수 있어요.
-- DROP TABLE student_ex;   : 테이블 자체(구조와 데이터)를 없애요.
--                            DDL이라 자동 COMMIT되어 ROLLBACK할 수 없어요.`,
    mode: "self",
    kw: ["ROLLBACK", "구조|테이블"],
    lv: 3,
    exp: String.raw`<p>데이터만 지울지, 테이블까지 없앨지에 따라 명령이 달라요. 11장에서 TRUNCATE까지 셋을 비교해요.</p>
`
  },
  {
    n: 60,
    sql: String.raw`INSERT INTO student_ex (id, name, grade) VALUES (7, '정달', NULL);

SELECT id, name, grade FROM student_ex;   -- grade는 NULL`,
    mode: "auto",
    lv: 3,
    setup: "CREATE TABLE student_ex (id NUMBER(5), name VARCHAR2(20), grade NUMBER(1) DEFAULT 1, enter_date DATE DEFAULT SYSDATE)",
    exp: String.raw`<p>DEFAULT는 그 컬럼을 아예 언급하지 않았을 때만 들어가요. NULL을 직접 넣으면 NULL이 저장돼요. 기본값을 쓰고 싶으면 컬럼 목록에서 빼거나 값 자리에 DEFAULT라고 써요.</p>
`
  },
  {
    n: 61,
    sql: "SELECT * FROM s_emp;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p><code>*</code>는 &quot;모든 컬럼&quot;이라는 뜻이에요. 컬럼은 테이블을 만들 때 정한 순서대로 나와요.</p>
`
  },
  {
    n: 62,
    sql: "SELECT name, title, salary FROM s_emp;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>필요한 컬럼만 쉼표로 나열하면, 쓴 순서대로 결과에 나와요.</p>
`
  },
  {
    n: 63,
    sql: "SELECT name, salary * 12 AS 연봉 FROM s_emp;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>계산식 뒤에 <code>AS 별명</code>을 붙이면 결과의 머리글이 바뀌어요. AS는 생략해도 되고, 띄어쓰기가 들어간 별명은 큰따옴표로 감싸요.</p>
`
  },
  {
    n: 64,
    sql: "SELECT DISTINCT title FROM s_emp;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>DISTINCT는 SELECT 바로 뒤에 써서 중복된 행을 한 번만 보여줘요. 직책은 사장, 기획부장, 영업부장, 총무부장, 인사부장, 과장, 영업대표이사, 사원으로 8가지예요.</p>
`
  },
  {
    n: 65,
    sql: "SELECT DISTINCT dept_id, title FROM s_emp;",
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>DISTINCT는 뒤에 오는 컬럼 전체의 조합에 적용돼요. 컬럼마다 따로 중복을 없애는 것이 아니에요. 5장의 <code>GROUP BY dept_id, title</code>과 행 수가 같아요.</p>
`
  },
  {
    n: 66,
    sql: "SELECT name, salary FROM s_emp WHERE salary >= 3000;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>&quot;이상&quot;은 <code>&gt;=</code>예요. 3000인 사람(손명성, 서의홍)도 포함돼서 5명이에요.</p>
`
  },
  {
    n: 67,
    sql: "SELECT * FROM s_emp WHERE dept_id = 110;",
    mode: "auto",
    lv: 1,
    check: "SELECT name FROM s_emp WHERE dept_id = 110",
    exp: String.raw`<p>숫자는 따옴표 없이 비교해요. 110번 부서는 손명성, 전지영, 이기철, 구원상 4명이에요.</p>
`
  },
  {
    n: 68,
    sql: "SELECT name, salary FROM s_emp WHERE salary BETWEEN 1000 AND 2500;",
    mode: "auto",
    lv: 1,
    check: "SELECT name FROM s_emp WHERE salary BETWEEN 1000 AND 2500",
    exp: String.raw`<p><code>BETWEEN a AND b</code>는 양 끝을 포함해요(a 이상 b 이하). 작은 값을 앞에 써야 해요.</p>
`
  },
  {
    n: 69,
    sql: "SELECT * FROM s_emp WHERE dept_id IN (101, 102, 118);",
    mode: "auto",
    lv: 1,
    check: "SELECT name FROM s_emp WHERE dept_id IN (101, 102, 118)",
    exp: String.raw`<p>IN은 목록 중 하나와 같으면 참이에요. <code>dept_id = 101 OR dept_id = 102 OR dept_id = 118</code>과 같은 뜻이에요.</p>
`
  },
  {
    n: 70,
    sql: "SELECT * FROM s_emp WHERE name LIKE '김%';",
    mode: "auto",
    lv: 1,
    check: "SELECT name FROM s_emp WHERE name LIKE '김%'",
    exp: String.raw`<p><code>%</code>는 0글자 이상 아무 글자예요. &#39;김%&#39;는 &#39;김&#39;으로 시작하는 값이에요(김심선, 김정미, 김석우).</p>
`
  },
  {
    n: 71,
    sql: String.raw`SELECT * FROM s_emp
WHERE start_date >= TO_DATE('2016-01-01', 'YYYY-MM-DD')
  AND start_date <  TO_DATE('2017-01-01', 'YYYY-MM-DD');`,
    mode: "auto",
    lv: 2,
    check: "SELECT name FROM s_emp WHERE start_date >= TO_DATE('2016-01-01','YYYY-MM-DD') AND start_date < TO_DATE('2017-01-01','YYYY-MM-DD')",
    exp: String.raw`<p>DATE에는 시간도 들어 있어서 &quot;다음 해 1월 1일 미만&quot;으로 쓰는 게 안전해요. <code>TO_CHAR(start_date, &#39;YYYY&#39;) = &#39;2016&#39;</code>도 결과는 같지만, 컬럼에 함수를 씌우면 인덱스를 못 써요(421번 문제).</p>
`
  },
  {
    n: 72,
    sql: "SELECT * FROM s_customer WHERE credit_rating IS NULL;",
    mode: "auto",
    lv: 2,
    check: "SELECT name FROM s_customer WHERE credit_rating IS NULL",
    exp: String.raw`<p>오라클은 빈 문자열 &#39;&#39;을 NULL로 저장해요. 그래서 <code>= &#39;&#39;</code>는 <code>= NULL</code>과 같고, NULL과의 비교는 참도 거짓도 아닌 &quot;알 수 없음&quot;이라 한 행도 안 나와요. NULL은 항상 <code>IS NULL</code>로 찾아요.</p>
`
  },
  {
    n: 73,
    sql: String.raw`SELECT name, dept_id, salary
FROM s_emp
WHERE (dept_id = 110 OR dept_id = 113)
  AND salary >= 1000;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>AND가 OR보다 먼저 묶이기 때문에, 괄호가 없으면 &quot;110 전체 + (113이면서 1000 이상)&quot;이 돼요. <code>dept_id IN (110, 113)</code>으로 쓰면 괄호 걱정이 없어요.</p>
`
  },
  {
    n: 74,
    sql: String.raw`SELECT name, title, salary
FROM s_emp
WHERE title <> '사원'
  AND salary < 2000;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>급여가 0인 영업대표이사들이 여기에 해당해요. 부정 조건과 비교 조건을 AND로 이어요.</p>
`
  },
  {
    n: 75,
    sql: String.raw`SELECT name
FROM s_emp
WHERE name LIKE '이%'
   OR name LIKE '%철';`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>&#39;%철&#39;은 &#39;철&#39;로 끝나는 값이에요. 두 패턴 중 하나만 맞아도 되니 OR로 이어요.</p>
`
  },
  {
    n: 76,
    sql: "SELECT name FROM s_emp WHERE name LIKE '_정%';",
    mode: "auto",
    lv: 2,
    exp: String.raw`<p><code>_</code>는 정확히 한 글자예요. &#39;_정%&#39;는 &quot;아무 글자 하나 + 정 + 나머지&quot;예요.</p>
`
  },
  {
    n: 77,
    sql: String.raw`SELECT name, mailid, dept_id
FROM s_emp
WHERE mailid LIKE '%un%'
  AND dept_id BETWEEN 102 AND 106;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>LIKE와 BETWEEN을 AND로 함께 써요. BETWEEN은 양 끝(102, 106)을 포함해요.</p>
`
  },
  {
    n: 78,
    sql: String.raw`SELECT name, title, dept_id
FROM s_emp
WHERE (title = '과장' OR title = '사원')
  AND dept_id = 113;
-- 원래 식은 title = '과장' OR (title = '사원' AND dept_id = 113)으로 해석돼서
-- 다른 부서의 과장까지 모두 나와요.`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>AND가 OR보다 먼저 계산돼요. AND와 OR를 섞을 때는 항상 괄호를 쳐서 뜻을 분명히 하세요.</p>
`
  },
  {
    n: 79,
    sql: String.raw`SELECT name
FROM s_customer
WHERE credit_rating <> 'A'
   OR credit_rating IS NULL;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>NULL과의 비교는 UNKNOWN이라 <code>&lt;&gt; &#39;A&#39;</code>도 참이 되지 않아요. NULL인 행을 포함하려면 IS NULL을 OR로 따로 붙여요. 14장의 NVL로 <code>NVL(credit_rating, &#39;X&#39;) &lt;&gt; &#39;A&#39;</code>처럼 쓸 수도 있어요.</p>
`
  },
  {
    n: 80,
    sql: String.raw`SELECT name
FROM s_emp
WHERE start_date >= TO_DATE('2016-06-17', 'YYYY-MM-DD')
  AND start_date <  TO_DATE('2016-06-18', 'YYYY-MM-DD');`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p><code>= TO_DATE(&#39;2016-06-17&#39;, ...)</code>은 그날 0시 0분 0초만 찾아요. 오후에 입력된 데이터는 빠지니, 하루를 찾을 때는 &quot;그날 이상, 다음 날 미만&quot;으로 써요.</p>
`
  },
  {
    n: 81,
    sql: String.raw`SELECT name, mailid
FROM s_emp
WHERE mailid LIKE 'j%'
   OR mailid LIKE 'J%';`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>따옴표 안의 값은 대소문자를 가려요. 4장의 함수로 <code>UPPER(mailid) LIKE &#39;J%&#39;</code>처럼 쓰면 한 번에 찾을 수 있지만, 이렇게 컬럼을 가공하면 인덱스를 못 써요(14장).</p>
`
  },
  {
    n: 82,
    sql: String.raw`SELECT name, salary
FROM s_emp
WHERE salary BETWEEN 1000 AND 2500;
-- BETWEEN a AND b 는 salary >= a AND salary <= b 라서
-- a가 b보다 크면 두 조건을 동시에 만족하는 값이 없어요.`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>BETWEEN은 항상 작은 값을 앞에 써요. 에러가 나지 않고 0행만 나와서 실수를 알아채기 어려워요.</p>
`
  },
  {
    n: 83,
    sql: String.raw`SELECT name, salary FROM s_emp
WHERE title = '사원'
ORDER BY salary DESC;`,
    mode: "auto",
    lv: 1,
    check: "SELECT name, salary FROM s_emp WHERE title = '사원' ORDER BY salary DESC",
    order: [1],
    exp: String.raw`<p>내림차순은 <code>DESC</code>예요. ORDER BY는 문장의 맨 마지막에 와요. 급여가 같은 사람(795)끼리의 순서는 정해져 있지 않아요.</p>
`
  },
  {
    n: 84,
    sql: String.raw`SELECT * FROM s_emp
ORDER BY dept_id ASC, salary DESC;`,
    mode: "auto",
    lv: 1,
    check: "SELECT name, dept_id, salary FROM s_emp ORDER BY dept_id, salary DESC",
    order: [1, 2],
    exp: String.raw`<p>정렬 기준을 쉼표로 여러 개 쓰면, 앞 기준이 같을 때 다음 기준으로 정렬해요. ASC는 기본값이라 생략해도 돼요.</p>
`
  },
  {
    n: 85,
    sql: String.raw`SELECT name, start_date
FROM s_emp
WHERE start_date >= TO_DATE('2016-01-01', 'YYYY-MM-DD')
  AND start_date <  TO_DATE('2016-07-01', 'YYYY-MM-DD')
ORDER BY start_date;`,
    mode: "auto",
    lv: 2,
    order: [1],
    exp: String.raw`<p>&quot;6월 30일까지&quot;는 &quot;7월 1일 미만&quot;으로 쓰는 것이 안전해요. 날짜에 시간이 들어 있어도 빠지지 않아요.</p>
`
  },
  {
    n: 86,
    sql: String.raw`SELECT dept_id, name
FROM s_emp
ORDER BY dept_id DESC, name;`,
    mode: "auto",
    lv: 2,
    order: [0, 1],
    exp: String.raw`<p>ASC와 DESC는 컬럼마다 따로 정해요. name 뒤에는 아무것도 쓰지 않았으니 기본값 ASC예요.</p>
`
  },
  {
    n: 87,
    sql: String.raw`SELECT name, salary * 12 AS 연봉
FROM s_emp
WHERE salary * 12 >= 30000
ORDER BY 연봉 DESC;`,
    mode: "auto",
    lv: 2,
    order: [1],
    exp: String.raw`<p>WHERE에서는 별명(연봉)을 쓸 수 없어서 식을 그대로 다시 써요. ORDER BY에서는 별명을 쓸 수 있어요.</p>
`
  },
  {
    n: 88,
    sql: String.raw`SELECT name, salary / 30 AS 일급
FROM s_emp
WHERE salary / 30 >= 100
ORDER BY 일급 DESC;`,
    mode: "auto",
    lv: 3,
    order: [1],
    exp: String.raw`<p>별명은 SELECT가 실행된 뒤에 생겨서 WHERE에서는 쓸 수 없고 ORDER BY에서만 쓸 수 있어요. <code>WHERE salary &gt;= 3000</code>처럼 계산을 반대쪽으로 옮겨 써도 결과는 같아요.</p>
`
  },
  {
    n: 89,
    sql: String.raw`SELECT name, dept_id, salary
FROM s_emp
ORDER BY 2, 3 DESC, 1;`,
    mode: "auto",
    lv: 3,
    order: [1, 2, 0],
    exp: String.raw`<p>ORDER BY 2는 SELECT의 두 번째 컬럼(dept_id)이에요. 편하지만 SELECT 목록을 바꾸면 정렬 기준도 바뀌니 주의하세요.</p>
`
  },
  {
    n: 90,
    sql: "SELECT name || ' ' || title AS 직원정보 FROM s_emp;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p><code>||</code>는 앞뒤 값을 이어 붙여요. 가운데 공백 <code>&#39; &#39;</code>을 넣어야 &#39;박구곤 사장&#39;처럼 띄어져요.</p>
`
  },
  {
    n: 91,
    sql: "SELECT * FROM s_emp WHERE title <> '사원';",
    mode: "auto",
    lv: 1,
    check: "SELECT name FROM s_emp WHERE title <> '사원'",
    exp: String.raw`<p>&quot;같지 않다&quot;는 <code>&lt;&gt;</code>, <code>!=</code>, <code>^=</code> 모두 같은 뜻이에요. <code>NOT title = &#39;사원&#39;</code>으로도 쓸 수 있어요.</p>
`
  },
  {
    n: 92,
    sql: String.raw`SELECT name, dept_id
FROM s_emp
WHERE dept_id NOT IN (110);   -- 또는 dept_id <> 110
-- NOT IN (110, NULL)은 dept_id <> 110 AND dept_id <> NULL 이고,
-- dept_id <> NULL은 항상 UNKNOWN이라 전체가 참이 될 수 없어요.`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>NOT IN 목록에 NULL이 하나라도 있으면 결과는 항상 0행이에요. 서브쿼리 결과에 NULL이 섞일 때 자주 생기는 함정이에요(14장).</p>
`
  },
  {
    n: 93,
    sql: String.raw`SELECT name || '(' || title || ') - ' || dept_id AS 직원
FROM s_emp
WHERE dept_id = 110
ORDER BY name;`,
    mode: "auto",
    lv: 3,
    order: [0],
    exp: String.raw`<p><code>||</code>로 여러 컬럼과 문자를 이어 붙일 수 있어요. 숫자(dept_id)도 자동으로 문자로 바뀌어 이어져요.</p>
`
  },
  {
    n: 94,
    sql: "SELECT name, LENGTH(name), UPPER(mailid) FROM s_emp;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>LENGTH는 글자 수, UPPER는 대문자로 바꾼 값을 돌려주는 단일행 함수예요. 행마다 하나씩 결과가 나와서 25행이에요.</p>
`
  },
  {
    n: 95,
    sql: String.raw`SELECT name,
       ROUND(salary / 30, 1) AS 일급_반올림,
       TRUNC(salary / 30)    AS 일급_버림
FROM s_emp;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>ROUND(값, 1)은 소수 첫째 자리까지 반올림, TRUNC(값)은 소수점 아래를 모두 버려요. 둘째 인자를 생략하면 0(정수)이에요.</p>
`
  },
  {
    n: 96,
    sql: String.raw`SELECT name, TRUNC(MONTHS_BETWEEN(SYSDATE, start_date)) AS 근무개월
FROM s_emp;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>MONTHS_BETWEEN(늦은 날, 이른 날)이라 SYSDATE를 앞에 써야 양수가 나와요. 결과는 소수라서 TRUNC로 버려요. 오늘 날짜 기준이라 실행하는 날마다 값이 달라져요.</p>
`
  },
  {
    n: 97,
    sql: String.raw`SELECT name, TO_CHAR(start_date, 'YYYY"년" MM"월" DD"일"') AS 입사일
FROM s_emp;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>형식 안에 글자를 그대로 넣을 때는 큰따옴표로 감싸요. 형식 전체는 작은따옴표예요.</p>
`
  },
  {
    n: 98,
    sql: "SELECT name, SUBSTR(name, 1, 1) AS 성 FROM s_emp;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>SUBSTR(문자, 시작 위치, 길이)는 시작 위치부터 길이만큼 잘라요. 위치는 1부터 세요.</p>
`
  },
  {
    n: 99,
    sql: "SELECT name, LPAD(mailid, 10, '*') FROM s_emp;   -- kugon → *****kugon",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>LPAD(문자, 전체 칸, 채울 문자)는 왼쪽을 채워요. 오른쪽을 채우려면 RPAD예요. 숫자 앞에 0을 채울 때도 자주 써요.</p>
`
  },
  {
    n: 100,
    sql: "SELECT id, name FROM s_emp WHERE MOD(id, 2) = 0;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>MOD(a, b)는 a를 b로 나눈 나머지예요. 2로 나눈 나머지가 0이면 짝수, 1이면 홀수예요.</p>
`
  },
  {
    n: 101,
    sql: "SELECT name, start_date, TO_CHAR(start_date, 'DAY') AS 요일 FROM s_emp;   -- 박구곤: 화요일",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>TO_CHAR의 날짜 형식에서 DAY는 요일 전체(화요일), DY는 줄임(화)이에요. 오라클의 언어 설정이 영어면 TUESDAY처럼 나와요.</p>
`
  },
  {
    n: 102,
    sql: String.raw`SELECT name, TO_CHAR(ADD_MONTHS(start_date, 3), 'YYYY-MM-DD') AS 수습종료일
FROM s_emp;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>함수는 안쪽부터 계산돼요. ADD_MONTHS로 3개월 뒤 날짜를 구한 뒤, TO_CHAR로 원하는 형식의 문자로 바꿔요.</p>
`
  },
  {
    n: 103,
    sql: "SELECT name, REPLACE(title, '부장', '팀장') AS 새직책 FROM s_emp;   -- 기획부장 → 기획팀장",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>REPLACE(문자, 찾을 문자열, 바꿀 문자열)은 찾은 부분을 모두 바꿔요. 테이블의 데이터는 그대로이고, 조회 결과만 바뀌어 보여요.</p>
`
  },
  {
    n: 104,
    sql: "SELECT name, phone, LENGTH(phone) FROM s_customer;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>LENGTH는 &#39;-&#39;도 한 글자로 세요. 전화번호 형식이 제각각이라 길이도 다르게 나와요.</p>
`
  },
  {
    n: 105,
    sql: "SELECT name, UPPER(mailid), INITCAP(mailid) FROM s_emp;   -- kugon → KUGON, Kugon",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>UPPER는 전부 대문자, INITCAP은 단어의 첫 글자만 대문자예요. 저장된 값은 바뀌지 않아요.</p>
`
  },
  {
    n: 106,
    sql: "SELECT name, TO_CHAR(salary, '99,999') AS 급여 FROM s_emp;",
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>숫자 형식의 9는 숫자 한 자리, 쉼표는 천 단위 구분이에요. 자릿수가 형식보다 길면 ####으로 나오니 넉넉하게 줘요. 오라클은 부호 자리 때문에 앞에 공백 한 칸이 붙어요.</p>
`
  },
  {
    n: 107,
    sql: String.raw`SELECT name, TRUNC(MONTHS_BETWEEN(SYSDATE, start_date) / 12) AS 근무연수
FROM s_emp;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>개월 수를 12로 나누면 연수가 나와요. 오늘 날짜 기준이라 실행하는 날마다 값이 달라질 수 있어요.</p>
`
  },
  {
    n: 108,
    sql: "SELECT name, start_date, LAST_DAY(start_date) AS 말일 FROM s_emp;",
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>LAST_DAY는 그 달의 마지막 날짜를 돌려줘요. 2016년 2월이면 29일이에요(윤년).</p>
`
  },
  {
    n: 109,
    sql: "SELECT name, SUBSTR(phone, -4) AS 뒷자리 FROM s_customer;",
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>SUBSTR의 시작 위치가 음수면 뒤에서부터 세요. 길이를 생략하면 끝까지 잘라요. 전화번호 길이가 제각각이어도 뒤 4자리는 정확히 나와요.</p>
`
  },
  {
    n: 110,
    sql: "SELECT name, TO_CHAR(start_date, 'YY/MM/DD (DY)') AS 입사일 FROM s_emp;",
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>DY는 요일 줄임(금), DAY는 전체(금요일)예요. 형식 안의 괄호와 공백은 그대로 출력돼요.</p>
`
  },
  {
    n: 111,
    sql: "SELECT name, SUBSTR(mailid, 1, 3) || '***' AS 메일ID FROM s_emp;",
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>개인정보를 가릴 때 자주 쓰는 방법이에요. 실제 데이터는 그대로이고 조회 결과만 바뀌어요.</p>
`
  },
  {
    n: 112,
    sql: String.raw`SELECT name, SUBSTR(phone, 1, 4) || '****-' || SUBSTR(phone, -4) AS 전화번호
FROM s_customer;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>SUBSTR을 두 번 쓰고 사이에 가림 문자를 이어 붙여요. 가운데 자리 수가 달라도 형식이 일정하게 나와요.</p>
`
  },
  {
    n: 113,
    sql: "SELECT name, LAST_DAY(ADD_MONTHS(start_date, 1)) AS 첫급여일 FROM s_emp;",
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>함수는 안쪽부터 계산돼요. ADD_MONTHS로 한 달 뒤로 옮긴 다음 LAST_DAY로 그 달의 말일을 구해요.</p>
`
  },
  {
    n: 114,
    sql: String.raw`SELECT name,
       ADD_MONTHS(start_date, 12) AS 일주년,
       TO_CHAR(ADD_MONTHS(start_date, 12), 'DAY') AS 요일
FROM s_emp;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>1년 뒤는 <code>start_date + 365</code>보다 ADD_MONTHS(…, 12)가 정확해요. 윤년이 끼어 있으면 365일 뒤가 같은 날짜가 아닐 수 있어요.</p>
`
  },
  {
    n: 115,
    sql: "SELECT name, salary, ROUND(salary, -2), TRUNC(salary, -2) FROM s_emp;",
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>자리 인자가 음수면 정수 부분에서 반올림·버림해요. -2는 십의 자리에서 반올림해서 백 단위로 맞춰요.</p>
`
  },
  {
    n: 116,
    sql: String.raw`SELECT name,
       TRUNC(SYSDATE - start_date)     AS 근무일수,
       TRUNC((SYSDATE - start_date) / 7) AS 근무주수
FROM s_emp;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>날짜끼리 빼면 일수가 나와요. SYSDATE에는 시간이 들어 있어서 소수가 붙으니 TRUNC로 버려요.</p>
`
  },
  {
    n: 117,
    sql: "SELECT name || ' <' || mailid || '@company.com>' AS 이메일 FROM s_emp;",
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>CONCAT은 인자가 2개뿐이라 여러 개를 이을 때는 <code>||</code>가 편해요.</p>
`
  },
  {
    n: 118,
    sql: String.raw`SELECT name, start_date
FROM s_emp
WHERE TO_CHAR(start_date, 'YYYYMM') = '201602';`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>형식 &#39;YYYYMM&#39;은 &#39;201602&#39;처럼 붙여서 나와요. 비교하는 문자도 같은 모양이어야 해요. 인덱스를 쓰려면 날짜 범위 조건이 더 좋아요(14장).</p>
`
  },
  {
    n: 119,
    sql: String.raw`SELECT COUNT(*), SUM(salary), AVG(salary), MAX(salary), MIN(salary)
FROM s_emp;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>그룹 함수만 쓰고 GROUP BY가 없으면 테이블 전체가 한 그룹이 되어 1행이 나와요.</p>
`
  },
  {
    n: 120,
    sql: "SELECT COUNT(*), COUNT(credit_rating) FROM s_customer;",
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>COUNT(<em>)는 행 개수(15), COUNT(컬럼)은 그 컬럼이 NULL이 아닌 행 개수예요. 신용등급이 모두 비어 있어서 0이 나와요. 그룹 함수는 COUNT(</em>)만 빼고 NULL을 무시해요.</p>
`
  },
  {
    n: 121,
    sql: "SELECT COUNT(*), COUNT(commision_pct), ROUND(AVG(salary), 2) FROM s_emp;",
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>COUNT(컬럼)은 NULL이 아닌 값만 세요. 커미션은 모두 0(NULL이 아님)이라 25명 모두 세져요. 0과 NULL은 다르다는 점을 다시 확인할 수 있어요.</p>
`
  },
  {
    n: 122,
    sql: String.raw`SELECT ROUND(MONTHS_BETWEEN(MAX(start_date), MIN(start_date)), 1) AS 개월차이
FROM s_emp;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>그룹 함수 결과를 단일행 함수의 인자로 넣을 수 있어요. 안쪽 MAX와 MIN이 먼저 계산돼요.</p>
`
  },
  {
    n: 123,
    sql: String.raw`SELECT COUNT(DISTINCT dept_id), COUNT(DISTINCT title), COUNT(DISTINCT TO_CHAR(start_date, 'YYYY'))
FROM s_emp;   -- 11, 8, 2`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>COUNT(DISTINCT …) 안에 함수식을 넣을 수도 있어요. 입사 연도는 2015년과 2016년 두 가지예요.</p>
`
  },
  {
    n: 124,
    sql: String.raw`SELECT dept_id, COUNT(*), AVG(salary)
FROM s_emp
GROUP BY dept_id
ORDER BY dept_id;`,
    mode: "auto",
    lv: 1,
    order: [0],
    exp: String.raw`<p>GROUP BY dept_id로 부서별 묶음을 만들면 묶음 하나당 한 줄이 나와요. SELECT에는 GROUP BY에 쓴 컬럼과 그룹 함수만 올 수 있어요.</p>
`
  },
  {
    n: 125,
    sql: String.raw`SELECT title, COUNT(*)
FROM s_emp
GROUP BY title
HAVING COUNT(*) >= 3;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>그룹 결과(인원 수)로 거르는 조건은 WHERE가 아니라 HAVING에 써요. 과장 5명, 영업대표이사 5명, 사원 10명이에요.</p>
`
  },
  {
    n: 126,
    sql: String.raw`SELECT title, MAX(salary)
FROM s_emp
WHERE title <> '사장'
GROUP BY title
HAVING MAX(salary) >= 2500
ORDER BY MAX(salary) DESC;`,
    mode: "auto",
    lv: 2,
    order: [1],
    exp: String.raw`<p>&#39;사장 제외&#39;는 행 조건이라 WHERE, &#39;최고 급여 2500 이상&#39;은 그룹 조건이라 HAVING이에요. 실행 순서는 FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY예요.</p>
`
  },
  {
    n: 127,
    sql: String.raw`SELECT dept_id, title, COUNT(*)
FROM s_emp
GROUP BY dept_id, title
ORDER BY dept_id, title;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>GROUP BY에 컬럼을 두 개 쓰면 (부서, 직책) 조합이 같은 행끼리 묶여요.</p>
`
  },
  {
    n: 128,
    sql: String.raw`SELECT dept_id, COUNT(*)
FROM s_emp
WHERE start_date >= TO_DATE('2016-01-01', 'YYYY-MM-DD')
  AND start_date <  TO_DATE('2017-01-01', 'YYYY-MM-DD')
GROUP BY dept_id;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>행을 먼저 거르는 조건(2016년 입사)은 WHERE에 써요. 묶기 전에 걸러지니 2015년 입사자는 세지 않아요.</p>
`
  },
  {
    n: 129,
    sql: String.raw`SELECT dept_id, COUNT(*)
FROM s_emp
GROUP BY dept_id
HAVING COUNT(*) >= 3;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>WHERE는 그룹을 만들기 전에 실행돼서, 그 시점에는 COUNT(*)를 계산할 수 없어요(ORA-00934). 그룹 함수를 쓰는 조건은 GROUP BY 뒤의 HAVING으로 옮겨요. 110, 111, 112, 113번 부서가 나와요.</p>
`
  },
  {
    n: 130,
    sql: String.raw`SELECT dept_id, MAX(salary), MIN(salary), MAX(salary) - MIN(salary) AS 차이
FROM s_emp
GROUP BY dept_id;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>그룹 함수끼리 계산할 수도 있어요. 직원이 한 명뿐인 부서는 최고와 최저가 같아서 차이가 0이에요.</p>
`
  },
  {
    n: 131,
    sql: String.raw`SELECT TO_CHAR(start_date, 'YYYY') AS 입사연도, COUNT(*)
FROM s_emp
GROUP BY TO_CHAR(start_date, 'YYYY');   -- 2015: 6명, 2016: 19명`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>컬럼을 가공한 값으로도 묶을 수 있어요. GROUP BY에는 별명(입사연도)을 쓸 수 없어서 식을 그대로 한 번 더 써요.</p>
`
  },
  {
    n: 132,
    sql: String.raw`SELECT title, ROUND(AVG(salary), 1) AS 평균급여
FROM s_emp
GROUP BY title
ORDER BY AVG(salary) DESC;`,
    mode: "auto",
    lv: 2,
    order: [1],
    exp: String.raw`<p>그룹 함수를 단일행 함수로 감쌀 수 있어요. ORDER BY에는 그룹 함수나 별명(평균급여)을 쓸 수 있어요.</p>
`
  },
  {
    n: 133,
    sql: String.raw`SELECT dept_id, COUNT(*), SUM(salary)
FROM s_emp
GROUP BY dept_id
HAVING SUM(salary) >= 5000
ORDER BY dept_id;`,
    mode: "auto",
    lv: 2,
    order: [0],
    exp: String.raw`<p>그룹 결과로 거르는 조건은 HAVING에 써요.</p>
`
  },
  {
    n: 134,
    sql: String.raw`SELECT dept_id, AVG(salary)
FROM s_emp
WHERE salary > 0
GROUP BY dept_id;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>WHERE는 묶기 전에 행을 걸러요. 103번, 105번 부서는 직원이 모두 급여 0이라 묶을 행이 하나도 남지 않아서 결과에서 아예 빠져요.</p>
`
  },
  {
    n: 135,
    sql: "SELECT title, COUNT(*) FROM s_emp GROUP BY title;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>GROUP BY title로 같은 직책끼리 묶고, 묶음마다 COUNT(*)로 행을 세요.</p>
`
  },
  {
    n: 136,
    sql: "SELECT dept_id, SUM(salary) FROM s_emp GROUP BY dept_id ORDER BY dept_id;",
    mode: "auto",
    lv: 1,
    order: [0],
    exp: String.raw`<p>ORDER BY는 GROUP BY 뒤, 맨 마지막에 써요.</p>
`
  },
  {
    n: 137,
    sql: "SELECT region_id, COUNT(*) FROM s_dept GROUP BY region_id;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>1번 지역(서울)에는 총무부, 영업부, 기획부, 인사부가 모두 있어서 4개예요.</p>
`
  },
  {
    n: 138,
    sql: "SELECT sales_rep_id, COUNT(*) FROM s_customer GROUP BY sales_rep_id;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>담당자가 0으로 적힌 고객도 하나의 묶음이 돼요. GROUP BY는 값이 같으면 무엇이든 묶어요(NULL끼리도 한 묶음이 돼요).</p>
`
  },
  {
    n: 139,
    sql: String.raw`SELECT title, AVG(salary)
FROM s_emp
WHERE title IN ('과장', '사원')
GROUP BY title;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>WHERE가 먼저 행을 거르고, 남은 행으로 GROUP BY가 묶어요.</p>
`
  },
  {
    n: 140,
    sql: String.raw`SELECT dept_id, COUNT(*)
FROM s_emp
GROUP BY dept_id
HAVING COUNT(*) >= 3;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>묶은 결과에 거는 조건은 HAVING이에요. WHERE에는 그룹 함수를 쓸 수 없어요.</p>
`
  },
  {
    n: 141,
    sql: "SELECT region_id, COUNT(*) FROM s_customer GROUP BY region_id ORDER BY region_id;",
    mode: "auto",
    lv: 1,
    order: [0],
    exp: String.raw`<p>S_REGION에 없는 6번 지역 고객도 하나의 묶음으로 나와요.</p>
`
  },
  {
    n: 142,
    sql: String.raw`SELECT TO_CHAR(start_date, 'YYYY-MM') AS 입사연월, COUNT(*)
FROM s_emp
GROUP BY TO_CHAR(start_date, 'YYYY-MM')
HAVING COUNT(*) >= 2
ORDER BY 입사연월;`,
    mode: "auto",
    lv: 2,
    order: [0],
    exp: String.raw`<p>GROUP BY에는 별명(입사연월)을 쓸 수 없어서 식을 그대로 다시 써요. ORDER BY에서는 별명을 쓸 수 있어요.</p>
`
  },
  {
    n: 143,
    sql: String.raw`SELECT dept_id, COUNT(*)
FROM s_emp
WHERE title = '사원'
GROUP BY dept_id
HAVING COUNT(*) >= 2;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>행에 대한 조건(사원만)은 WHERE, 묶음에 대한 조건(2명 이상)은 HAVING이에요. 실행 순서는 FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY예요.</p>
`
  },
  {
    n: 144,
    sql: "SELECT MAX(COUNT(*)) FROM s_emp GROUP BY dept_id;   -- 5",
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>오라클에서는 GROUP BY가 있을 때 그룹 함수를 두 번까지 겹쳐 쓸 수 있어요. 이때 SELECT에는 dept_id 같은 일반 컬럼을 함께 쓸 수 없어요.</p>
`
  },
  {
    n: 145,
    sql: String.raw`SELECT dept_id, COUNT(*)
FROM s_emp
GROUP BY dept_id
HAVING COUNT(*) = (SELECT MAX(COUNT(*)) FROM s_emp GROUP BY dept_id);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p><code>SELECT dept_id, MAX(COUNT(*))</code>처럼 쓰면 ORA-00937 에러가 나요. 가장 큰 값을 먼저 구하고, 그 값과 같은 묶음을 HAVING으로 찾는 두 단계로 풀어요.</p>
`
  },
  {
    n: 146,
    sql: String.raw`SELECT title, ROUND(AVG(salary)) AS 평균
FROM s_emp
WHERE salary > 0
GROUP BY title
HAVING AVG(salary) >= 2000
ORDER BY 평균 DESC;`,
    mode: "auto",
    lv: 3,
    order: [1],
    exp: String.raw`<p>영업대표이사는 급여 0인 3명을 빼면 평균이 2550이 돼서 결과에 들어와요. WHERE로 무엇을 빼느냐에 따라 평균이 달라져요.</p>
`
  },
  {
    n: 147,
    sql: String.raw`SELECT dept_id, MIN(start_date), MAX(start_date),
       ROUND(MONTHS_BETWEEN(MAX(start_date), MIN(start_date))) AS 개월
FROM s_emp
GROUP BY dept_id
HAVING COUNT(*) >= 2
ORDER BY dept_id;`,
    mode: "auto",
    lv: 3,
    order: [0],
    exp: String.raw`<p>그룹 함수 결과를 단일행 함수에 다시 넣을 수 있어요. HAVING의 조건(COUNT)은 SELECT에 없는 그룹 함수여도 괜찮아요.</p>
`
  },
  {
    n: 148,
    sql: String.raw`SELECT TO_CHAR(start_date, 'YYYY') AS 연도, title, COUNT(*) AS 인원
FROM s_emp
GROUP BY TO_CHAR(start_date, 'YYYY'), title
ORDER BY 연도, 인원 DESC;`,
    mode: "auto",
    lv: 3,
    order: [0, 2],
    exp: String.raw`<p>GROUP BY에 식과 컬럼을 함께 써서 두 기준으로 묶어요. 인원이 같은 직책끼리의 순서는 정해져 있지 않아요.</p>
`
  },
  {
    n: 149,
    sql: String.raw`-- ORA-00979 (GROUP BY 표현식이 아님)
-- 묶음 하나에 이름이 여러 개라 name을 하나로 보여줄 수 없어요.
SELECT dept_id, COUNT(*)
FROM s_emp
GROUP BY dept_id;`,
    mode: "self",
    kw: ["00979", "GROUP BY DEPT_ID"],
    lv: 3,
    exp: String.raw`<p>GROUP BY가 있으면 SELECT에는 GROUP BY에 쓴 컬럼과 그룹 함수만 올 수 있어요.</p>
`
  },
  {
    n: 150,
    sql: String.raw`SELECT dept_id, COUNT(*)
FROM s_emp
WHERE salary >= 1000
GROUP BY dept_id
HAVING COUNT(*) >= 2;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>&quot;급여 1000 이상&quot;은 직원 한 명 한 명에 대한 조건이라 WHERE, &quot;2명 이상&quot;은 묶음에 대한 조건이라 HAVING이에요. 112번 부서는 1000 이상인 직원이 신기웅 한 명뿐이라 빠져요.</p>
`
  },
  {
    n: 151,
    sql: "SELECT MAX(AVG(salary)), MIN(AVG(salary)) FROM s_emp GROUP BY dept_id;   -- 4100, 0",
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>118번 부서(사장, 인사부장)의 평균이 가장 높고, 직원이 급여 0인 한 명뿐인 103·105번 부서의 평균이 0이에요.</p>
`
  },
  {
    n: 152,
    sql: String.raw`SELECT SUBSTR(name, 1, 1) AS 성, COUNT(*) AS 인원
FROM s_emp
GROUP BY SUBSTR(name, 1, 1)
HAVING COUNT(*) >= 2
ORDER BY 인원 DESC;`,
    mode: "auto",
    lv: 3,
    order: [1],
    exp: String.raw`<p>단일행 함수로 만든 값으로도 묶을 수 있어요. GROUP BY와 SELECT의 식을 똑같이 써야 해요.</p>
`
  },
  {
    n: 153,
    sql: String.raw`-- (가) 급여 0인 직원을 빼고 평균을 내요. 그래서 평균 값이 커지고,
--     급여 0인 직원만 있는 103·105번 부서는 아예 묶음이 생기지 않아요. (9행)
-- (나) 모든 직원으로 평균을 낸 뒤, 평균이 0인 부서만 빼요.
--     110번 부서 평균은 이기철(0)까지 넣어서 계산돼요. (9행)
-- 행 수는 같지만 평균 값이 달라요.`,
    mode: "self",
    kw: ["WHERE", "HAVING", "평균"],
    lv: 3,
    exp: String.raw`<p>WHERE는 &quot;평균을 내기 전에 누구를 뺄지&quot;, HAVING은 &quot;평균을 낸 뒤 어떤 묶음을 뺄지&quot;를 정해요.</p>
`
  },
  {
    n: 154,
    sql: String.raw`SELECT s_emp.name, s_emp.title, s_dept.name
FROM s_emp, s_dept
WHERE s_emp.dept_id = s_dept.id;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>두 테이블 모두 name 컬럼이 있어서 <code>테이블명.컬럼명</code>으로 구분해야 해요. 조인 조건은 직원의 부서번호와 부서 테이블의 id가 같다는 것이에요.</p>
`
  },
  {
    n: 155,
    sql: String.raw`SELECT s_dept.id, s_dept.name, s_region.name
FROM s_dept, s_region
WHERE s_dept.region_id = s_region.id;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>S_DEPT의 region_id가 S_REGION의 id를 가리켜요. 부서 11개가 모두 지역과 짝이 있어서 11행이에요.</p>
`
  },
  {
    n: 156,
    sql: String.raw`SELECT s_emp.name, s_emp.salary
FROM s_emp, s_dept
WHERE s_emp.dept_id = s_dept.id
  AND s_dept.name = '영업부';`,
    mode: "auto",
    lv: 2,
    check: "SELECT s_emp.name FROM s_emp, s_dept WHERE s_emp.dept_id = s_dept.id AND s_dept.name = '영업부'",
    exp: String.raw`<p>조인 조건과 검색 조건을 AND로 이어요. &#39;영업부&#39;라는 이름의 부서가 102~106번으로 5개라서, 그 부서 직원 7명이 나와요.</p>
`
  },
  {
    n: 157,
    sql: String.raw`SELECT s_customer.name, s_region.name
FROM s_customer, s_region
WHERE s_customer.region_id = s_region.id;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>고객 &#39;최계윤&#39;의 region_id가 6인데 S_REGION에는 6번 지역이 없어요. EQUIJOIN은 짝이 있는 행만 보여줘서 14행이 나와요. 짝이 없는 행까지 보려면 OUTER JOIN(166번)을 써요.</p>
`
  },
  {
    n: 158,
    sql: String.raw`SELECT s_emp.name, s_dept.name, s_region.name
FROM s_emp, s_dept, s_region
WHERE s_emp.dept_id = s_dept.id
  AND s_dept.region_id = s_region.id;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>테이블이 N개면 조인 조건은 최소 N-1개예요. 3개를 잇는 데는 조건 2개가 필요해요.</p>
`
  },
  {
    n: 159,
    sql: "SELECT s_emp.name, s_dept.name FROM s_emp, s_dept;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>조인 조건이 없으면 모든 직원 × 모든 부서 조합이 나와요. 25 × 11 = 275행이고, 이런 결과를 카티션 곱(Cartesian Product)이라고 해요.</p>
`
  },
  {
    n: 160,
    sql: String.raw`SELECT s_customer.name, s_emp.name
FROM s_customer, s_emp
WHERE s_customer.sales_rep_id = s_emp.id;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>두 테이블에 모두 name 컬럼이 있어서 테이블 이름을 앞에 붙여 구분해요. 담당자 번호가 0인 고정환은 짝이 없어서 빠져요.</p>
`
  },
  {
    n: 161,
    sql: String.raw`SELECT s_dept.id, s_dept.name
FROM s_dept, s_region
WHERE s_dept.region_id = s_region.id
  AND s_region.name = '서울특별시';`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>JOIN 조건과 일반 조건을 AND로 함께 써요.</p>
`
  },
  {
    n: 162,
    sql: String.raw`SELECT e.name, e.title, d.name
FROM s_emp e, s_dept d
WHERE e.dept_id = d.id;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>FROM에서 테이블 뒤에 별명을 붙이면 나머지 부분에서는 그 별명을 써야 해요. 오라클에서 테이블 별명 앞에는 AS를 쓰지 않아요.</p>
`
  },
  {
    n: 163,
    sql: String.raw`SELECT e.name, d.name, r.name
FROM s_emp e, s_dept d, s_region r
WHERE e.dept_id = d.id
  AND d.region_id = r.id
  AND r.name = '경기도';`,
    mode: "auto",
    lv: 2,
    check: "SELECT e.name FROM s_emp e, s_dept d, s_region r WHERE e.dept_id = d.id AND d.region_id = r.id AND r.name = '경기도'",
    exp: String.raw`<p>경기도(2번 지역)에는 103번 영업부와 111번 기획부가 있어요. 그 두 부서 직원인 안은경, 김정미, 서정주, 안창환 4명이에요.</p>
`
  },
  {
    n: 164,
    sql: String.raw`SELECT e.name, e.salary, g.grade
FROM s_emp e, salgrade g
WHERE e.salary BETWEEN g.losal AND g.hisal;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>NON-EQUIJOIN은 = 대신 BETWEEN 같은 조건으로 이어요. 급여가 0인 4명(안은경, 박성규, 신종필, 이기철)은 가장 낮은 구간(500~999)에도 들지 않아서 빠지고 21행이 나와요.</p>
`
  },
  {
    n: 165,
    sql: String.raw`SELECT g.grade, COUNT(*)
FROM s_emp e, salgrade g
WHERE e.salary BETWEEN g.losal AND g.hisal
GROUP BY g.grade
ORDER BY g.grade;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>JOIN으로 등급을 붙인 다음 등급별로 묶어요. A 1, B 4, C 7, D 2, E 7명이에요.</p>
`
  },
  {
    n: 166,
    sql: String.raw`SELECT c.name, r.name
FROM s_customer c, s_region r
WHERE c.region_id = r.id(+);`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>(+)는 값이 모자라는 쪽, 즉 짝이 없을 수 있는 쪽에 붙여요. 지역 정보가 없을 수 있으니 지역 쪽(r.id)에 붙여요. 최계윤은 지역 이름이 NULL로 나와요.</p>
`
  },
  {
    n: 167,
    sql: String.raw`SELECT e.name, c.name
FROM s_emp e, s_customer c
WHERE e.id = c.sales_rep_id(+);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>모든 직원이 나와야 하니 고객 쪽에 (+)를 붙여요. 고객을 담당하는 5명은 고객 수만큼(14행), 담당 고객이 없는 20명은 한 줄씩 나와서 34행이에요.</p>
`
  },
  {
    n: 168,
    sql: String.raw`SELECT w.name AS 직원, m.name AS 상사
FROM s_emp w, s_emp m
WHERE w.manager_id = m.id;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>같은 테이블을 별명 두 개로 두 번 읽어요(SELF JOIN). 박구곤(사장)은 manager_id가 0이라 id가 0인 직원이 없어서 빠져요. 모두 보려면 <code>m.id(+)</code>로 OUTER JOIN을 써요.</p>
`
  },
  {
    n: 169,
    sql: String.raw`SELECT e.name, e.salary
FROM s_emp e, s_emp s
WHERE s.name = '손명성'
  AND e.salary > s.salary;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>s는 &#39;손명성&#39; 한 사람으로 고정하고, e는 전체 직원이에요. 손명성의 급여(3000)보다 많은 박구곤, 이은선, 김심선 3명이에요.</p>
`
  },
  {
    n: 170,
    sql: String.raw`SELECT e.name, d.name
FROM s_emp e, s_dept d
WHERE e.dept_id = d.id
  AND e.dept_id = 113;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>FROM에서 ALIAS를 정하면 쿼리 전체에서 테이블 이름 대신 ALIAS를 써야 해요.</p>
`
  },
  {
    n: 171,
    sql: String.raw`SELECT c.name, r.name
FROM s_customer c, s_region r
WHERE c.region_id = r.id
  AND r.name = '부산/경상';`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>최계윤은 주소가 부산/경상이지만 지역번호가 6이라 S_REGION과 짝이 없어서 빠져요.</p>
`
  },
  {
    n: 172,
    sql: String.raw`SELECT e.name, e.salary
FROM s_emp e, salgrade s
WHERE e.salary BETWEEN s.losal AND s.hisal
  AND s.grade = 'C';`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>=가 아닌 범위로 짝을 맞추는 NON-EQUIJOIN이에요.</p>
`
  },
  {
    n: 173,
    sql: String.raw`SELECT e.name, d.name, r.name, s.grade
FROM s_emp e, s_dept d, s_region r, salgrade s
WHERE e.dept_id = d.id
  AND d.region_id = r.id
  AND e.salary BETWEEN s.losal AND s.hisal
  AND s.grade IN ('A', 'B');`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>테이블이 4개면 JOIN 조건이 최소 3개 필요해요. 하나라도 빠지면 그 부분에서 카티션 곱이 생겨요.</p>
`
  },
  {
    n: 174,
    sql: String.raw`SELECT r.name, COUNT(*) AS 인원
FROM s_emp e, s_dept d, s_region r
WHERE e.dept_id = d.id
  AND d.region_id = r.id
GROUP BY r.name
ORDER BY 인원 DESC;`,
    mode: "auto",
    lv: 3,
    order: [1],
    exp: String.raw`<p>JOIN한 결과도 하나의 테이블처럼 GROUP BY로 묶을 수 있어요.</p>
`
  },
  {
    n: 175,
    sql: String.raw`SELECT e.name, COUNT(c.id) AS 고객수
FROM s_emp e, s_customer c
WHERE e.id = c.sales_rep_id(+)
GROUP BY e.id, e.name;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>OUTER JOIN으로 짝이 없는 직원도 남기고, COUNT(<em>) 대신 COUNT(c.id)를 써야 해요. 짝이 없는 행은 c.id가 NULL이라 0으로 세지고, COUNT(</em>)로 세면 1이 돼요. 이름이 같은 직원이 있을 수 있으니 id로 묶어요.</p>
`
  },
  {
    n: 176,
    sql: String.raw`SELECT e.name, e.dept_id, m.name AS 상사, m.dept_id AS 상사부서
FROM s_emp e, s_emp m
WHERE e.manager_id = m.id
  AND e.dept_id <> m.dept_id;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>SELF JOIN에서는 JOIN 조건(manager_id = id) 말고도 두 역할의 컬럼끼리 비교하는 조건을 더 걸 수 있어요. 손명성(110번 부서)이 111~113번 부서 직원의 상사이기도 해서 여러 명이 나와요.</p>
`
  },
  {
    n: 177,
    sql: String.raw`SELECT e.name, e.start_date, m.name AS 상사, m.start_date AS 상사입사일
FROM s_emp e, s_emp m
WHERE e.manager_id = m.id
  AND e.start_date < m.start_date;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>2016-10-09에 입사한 신종필보다 먼저 들어온 부하 강연범만 나와요. 같은 테이블을 두 역할(직원 e, 상사 m)로 읽는다고 생각하면 쉬워요.</p>
`
  },
  {
    n: 178,
    sql: String.raw`SELECT e.name, e.salary, s.grade
FROM s_emp e, salgrade s
WHERE e.salary BETWEEN s.losal(+) AND s.hisal(+);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>NON-EQUIJOIN에도 OUTER JOIN을 걸 수 있어요. 짝이 없을 수 있는 SALGRADE 쪽 컬럼 모두에 (+)를 붙여요. 급여 0인 4명은 등급이 NULL로 나와요.</p>
`
  },
  {
    n: 179,
    sql: String.raw`SELECT name, title FROM s_emp WHERE dept_id = 110
UNION          -- 8행 (UNION ALL 9행, INTERSECT 1행, MINUS 3행)
SELECT name, title FROM s_emp WHERE title = '과장';`,
    mode: "self",
    kw: ["UNION", "UNION ALL", "INTERSECT", "MINUS"],
    lv: 2,
    exp: String.raw`<p>A는 4행(손명성, 전지영, 이기철, 구원상), B는 5행이고 전지영이 양쪽에 다 있어요.</p>
<ul>
<li>UNION: 중복을 한 번만 → 8행</li>
<li>UNION ALL: 중복도 그대로 → 9행</li>
<li>INTERSECT: 양쪽에 다 있는 것 → 1행(전지영)</li>
<li>MINUS: A에만 있는 것 → 3행</li>
</ul>
<p>위의 UNION 자리에 나머지 세 연산자를 넣어 실행해 보세요.</p>
`
  },
  {
    n: 180,
    sql: String.raw`SELECT name FROM s_emp
UNION
SELECT name FROM s_customer;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>직원 25명과 고객 15명 중 겹치는 이름이 없어서 40행이 나와요. 두 SELECT의 컬럼 수와 타입이 맞아야 해요.</p>
`
  },
  {
    n: 181,
    sql: String.raw`SELECT sales_rep_id FROM s_customer
INTERSECT
SELECT id FROM s_emp;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>INTERSECT는 두 결과에 모두 있는 값만 남기고, 중복도 없애요. 0번은 S_EMP에 없어서 빠져요.</p>
`
  },
  {
    n: 182,
    sql: String.raw`SELECT name FROM s_emp WHERE title = '과장'
UNION
SELECT name FROM s_emp WHERE dept_id = 110;
-- UNION ALL은 9행: 110번 부서의 과장 전지영이 두 번 나와요.`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>UNION은 중복을 없애고, UNION ALL은 그대로 모두 보여줘요. 같은 테이블에서 조건만 다르면 <code>WHERE title = &#39;과장&#39; OR dept_id = 110</code>으로도 같은 결과가 나와요.</p>
`
  },
  {
    n: 183,
    sql: String.raw`SELECT name FROM s_emp
MINUS
SELECT m.name
FROM s_emp e, s_emp m
WHERE e.manager_id = m.id;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>전체 직원에서 &quot;누군가의 상사인 직원&quot;(박구곤, 손명성, 신종필)을 빼요. 7장의 NOT EXISTS로도 풀 수 있어요.</p>
`
  },
  {
    n: 184,
    sql: String.raw`SELECT name, salary
FROM s_emp
WHERE salary > (SELECT AVG(salary) FROM s_emp);`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>서브쿼리가 평균 급여 값 하나를 돌려주고, 바깥 쿼리가 그 값과 비교해요. 그룹 함수는 WHERE에 바로 쓸 수 없지만 서브쿼리 안에서는 쓸 수 있어요.</p>
`
  },
  {
    n: 185,
    sql: String.raw`SELECT name, start_date
FROM s_emp
WHERE start_date = (SELECT MAX(start_date) FROM s_emp);`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>가장 최근 입사일은 MAX(start_date)예요. 날짜도 크기 비교가 돼서 MAX, MIN을 쓸 수 있어요. 신종필(2016-10-09)이에요.</p>
`
  },
  {
    n: 186,
    sql: String.raw`SELECT name, dept_id
FROM s_emp
WHERE dept_id IN (SELECT id FROM s_dept WHERE name = '기획부');`,
    mode: "auto",
    lv: 2,
    check: "SELECT name FROM s_emp WHERE dept_id IN (SELECT id FROM s_dept WHERE name = '기획부')",
    exp: String.raw`<p>기획부는 110~113번으로 4개라 서브쿼리가 여러 행을 돌려줘요. 이럴 때 =를 쓰면 ORA-01427 에러가 나니 IN을 써요.</p>
`
  },
  {
    n: 187,
    sql: String.raw`SELECT name, title, salary
FROM s_emp
WHERE (title, salary) IN (SELECT title, MAX(salary)
                          FROM s_emp
                          GROUP BY title);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>(직책, 급여) 두 값을 한 쌍으로 비교해요. 직책은 8개인데, 과장 중 2400을 받는 사람이 2명(전지영, 김정미)이라 9행이에요. salary만 비교하면 다른 직책의 최고 급여와 우연히 같은 사람도 섞여요.</p>
`
  },
  {
    n: 188,
    sql: String.raw`SELECT e.name, d.name
FROM (SELECT name, dept_id FROM s_emp WHERE salary >= 2000) e,
     s_dept d
WHERE e.dept_id = d.id;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>FROM절의 서브쿼리는 임시 테이블처럼 쓰여요(INLINE VIEW). 별명(e)을 붙여서 일반 테이블처럼 조인해요.</p>
`
  },
  {
    n: 189,
    sql: String.raw`SELECT dept_id, AVG(salary)
FROM s_emp
GROUP BY dept_id
HAVING AVG(salary) > (SELECT AVG(salary) FROM s_emp);`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>HAVING에도 서브쿼리를 쓸 수 있어요. 전체 평균(약 1695)보다 부서 평균이 높은 101, 102, 104, 118번 부서예요.</p>
`
  },
  {
    n: 190,
    sql: String.raw`SELECT name
FROM s_emp
WHERE dept_id = (SELECT dept_id FROM s_emp WHERE name = '안창환')
  AND name <> '안창환';`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>서브쿼리가 안창환의 부서번호(111) 하나를 돌려주니 =로 비교해요. 본인을 빼는 조건은 바깥 쿼리의 WHERE에 AND로 붙여요.</p>
`
  },
  {
    n: 191,
    sql: String.raw`SELECT name
FROM s_region
WHERE id IN (SELECT region_id FROM s_dept WHERE name = '영업부');`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>영업부는 102~106번으로 5개이고, 각각 다른 지역에 있어서 서브쿼리가 여러 행을 돌려줘요. 그래서 IN을 써요.</p>
`
  },
  {
    n: 192,
    sql: String.raw`SELECT name, salary
FROM s_emp
WHERE title = '사원'
  AND salary = (SELECT MIN(salary) FROM s_emp WHERE title = '사원');`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>서브쿼리 안에도 WHERE를 쓸 수 있어요. 바깥 쿼리에도 <code>title = &#39;사원&#39;</code>을 써야, 다른 직책이면서 우연히 같은 급여(0)를 받는 직원이 섞이지 않아요.</p>
`
  },
  {
    n: 193,
    sql: String.raw`SELECT name
FROM s_emp
WHERE id IN (SELECT sales_rep_id FROM s_customer);`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>서브쿼리가 고객 담당 직원 번호 목록(중복 포함)을 돌려주고, IN은 그중 하나와 같으면 참이에요. 목록에 같은 번호가 여러 번 있어도 직원은 한 번만 나와요. 14장의 EXISTS로도 같은 결과를 낼 수 있어요.</p>
`
  },
  {
    n: 194,
    sql: String.raw`SELECT name, title
FROM s_emp
WHERE title = (SELECT title FROM s_emp WHERE name = '이용호');`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>서브쿼리가 먼저 실행돼서 &#39;사원&#39;을 돌려주고, 바깥 쿼리는 <code>title = &#39;사원&#39;</code>처럼 동작해요. 이용호 본인도 포함돼요.</p>
`
  },
  {
    n: 195,
    sql: String.raw`SELECT name, salary
FROM s_emp
WHERE salary = (SELECT MAX(salary) FROM s_emp);`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>WHERE에는 그룹 함수를 바로 쓸 수 없어서, 최댓값을 서브쿼리로 먼저 구해요.</p>
`
  },
  {
    n: 196,
    sql: String.raw`SELECT name, start_date
FROM s_emp
WHERE start_date < (SELECT start_date FROM s_emp WHERE name = '김정미');`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>서브쿼리는 비교할 값을 하나 돌려주니 <code>&lt;</code> 같은 단일행 비교 연산자를 쓸 수 있어요.</p>
`
  },
  {
    n: 197,
    sql: String.raw`SELECT name, salary
FROM s_emp
WHERE salary < (SELECT AVG(salary) FROM s_emp);`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>평균(1695.6)보다 많은 직원 12명과 합치면 25명이에요. 평균과 정확히 같은 직원은 없어요.</p>
`
  },
  {
    n: 198,
    sql: String.raw`SELECT id, name
FROM s_dept
WHERE region_id = (SELECT id FROM s_region WHERE name = '서울특별시');`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>JOIN으로 풀었던 문제를 서브쿼리로 바꿔 쓸 수 있어요. 결과에 S_REGION의 컬럼이 필요 없으면 서브쿼리가 더 간단해요.</p>
`
  },
  {
    n: 199,
    sql: String.raw`SELECT name, title
FROM s_emp
WHERE id = (SELECT sales_rep_id FROM s_customer WHERE name = '장창식');`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>서브쿼리는 다른 테이블의 값을 가져와서 비교할 때도 써요.</p>
`
  },
  {
    n: 200,
    sql: String.raw`SELECT name, dept_id
FROM s_emp
WHERE dept_id NOT IN (SELECT id FROM s_dept WHERE name = '영업부');`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>영업부는 5개라 서브쿼리가 여러 행을 돌려줘요. 그래서 <code>&lt;&gt;</code> 대신 NOT IN을 써요.</p>
`
  },
  {
    n: 201,
    sql: String.raw`SELECT name, dept_id, salary
FROM s_emp
WHERE (dept_id, salary) IN (SELECT dept_id, MIN(salary) FROM s_emp GROUP BY dept_id);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p><code>salary IN (SELECT MIN(salary) ...)</code>만 쓰면 다른 부서의 최저 급여와 우연히 같은 직원도 나와요. 부서번호를 함께 비교해야 정확해요.</p>
`
  },
  {
    n: 202,
    sql: String.raw`SELECT e.name, e.dept_id, e.salary
FROM s_emp e
WHERE e.salary > (SELECT AVG(salary) FROM s_emp WHERE dept_id = e.dept_id);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>서브쿼리 안의 <code>e.dept_id</code>는 바깥 쿼리에서 지금 보고 있는 직원의 부서예요. 직원마다 서브쿼리가 다시 계산돼요.</p>
`
  },
  {
    n: 203,
    sql: String.raw`SELECT e.name
FROM s_emp e
WHERE EXISTS (SELECT 1 FROM s_emp m WHERE m.manager_id = e.id);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>EXISTS는 서브쿼리 결과가 한 행이라도 있으면 참이에요. 무엇을 SELECT하는지는 중요하지 않아서 보통 1을 써요.</p>
`
  },
  {
    n: 204,
    sql: String.raw`SELECT e.name
FROM s_emp e
WHERE NOT EXISTS (SELECT 1 FROM s_customer c WHERE c.sales_rep_id = e.id);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>NOT IN과 달리 NOT EXISTS는 서브쿼리에 NULL이 섞여 있어도 결과가 0행이 되는 함정이 없어요.</p>
`
  },
  {
    n: 205,
    sql: String.raw`SELECT d.id, d.name, ROUND(a.avg_sal) AS 평균
FROM s_dept d,
     (SELECT dept_id, AVG(salary) AS avg_sal FROM s_emp GROUP BY dept_id) a
WHERE d.id = a.dept_id
ORDER BY d.id;`,
    mode: "auto",
    lv: 3,
    order: [0],
    exp: String.raw`<p>INLINE VIEW에서 그룹 함수 결과에는 별명(avg_sal)을 붙여야 바깥에서 컬럼처럼 쓸 수 있어요.</p>
`
  },
  {
    n: 206,
    sql: String.raw`SELECT name, dept_id
FROM s_emp
WHERE dept_id IN (SELECT dept_id
                  FROM s_emp
                  GROUP BY dept_id
                  HAVING COUNT(*) = (SELECT MAX(COUNT(*)) FROM s_emp GROUP BY dept_id));`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>서브쿼리 안에 서브쿼리를 또 넣었어요. 가장 안쪽부터 &quot;최대 인원(5) → 그 인원의 부서(113) → 그 부서 직원&quot; 순서로 읽으면 돼요.</p>
`
  },
  {
    n: 207,
    sql: String.raw`CREATE TABLE emp_staff AS
SELECT name, title, salary, dept_id
FROM s_emp
WHERE title = '사원';

SELECT * FROM emp_staff;   -- 10행`,
    mode: "self",
    kw: ["CREATE TABLE", "AS SELECT", "'사원'"],
    lv: 2,
    exp: String.raw`<p><code>CREATE TABLE ... AS SELECT</code>는 SELECT 결과로 새 테이블을 만들어요. 컬럼 이름과 타입은 SELECT에서 가져오고, NOT NULL 말고 다른 제약조건은 복사되지 않아요.</p>
`
  },
  {
    n: 208,
    sql: String.raw`CREATE TABLE emp_old AS
SELECT * FROM s_emp WHERE 1 <> 1;     -- 구조만 복사

INSERT INTO emp_old
SELECT * FROM s_emp
WHERE start_date < TO_DATE('2016-01-01', 'YYYY-MM-DD');   -- 6개 행

SELECT * FROM emp_old;`,
    mode: "self",
    kw: ["1 <> 1|1<>1|1 = 2|1=2", "INSERT INTO", "SELECT"],
    lv: 2,
    exp: String.raw`<p><code>WHERE 1 &lt;&gt; 1</code>은 항상 거짓이라 행은 하나도 안 오고 구조만 만들어져요. <code>INSERT INTO ... SELECT</code>는 VALUES 없이 조회 결과 전체를 한 번에 넣어요.</p>
`
  },
  {
    n: 209,
    sql: String.raw`UPDATE emp_staff
SET salary = (SELECT salary FROM emp_staff WHERE name = '서정주')
WHERE name = '구원상';

SELECT name, salary FROM emp_staff WHERE name IN ('구원상', '서정주');  -- 둘 다 1200`,
    mode: "self",
    kw: ["UPDATE", "SET", "WHERE"],
    lv: 2,
    exp: String.raw`<p>SET 오른쪽에 값 대신 서브쿼리를 쓰면 그 결과(1200)가 들어가요. 서브쿼리는 값 하나만 돌려줘야 해요. WHERE를 빼면 모든 사원의 급여가 1200이 되니 주의해요.</p>
`
  },
  {
    n: 210,
    sql: String.raw`CREATE TABLE dept_copy AS SELECT * FROM s_dept;

SELECT * FROM dept_copy;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>CREATE TABLE ... AS SELECT는 구조와 데이터를 한 번에 복사해요. NOT NULL 말고 다른 제약조건은 복사되지 않아요.</p>
`
  },
  {
    n: 211,
    sql: String.raw`UPDATE emp_c
SET salary = (SELECT MIN(salary) FROM emp_c WHERE title = '사원' AND salary > 0)
WHERE salary = 0;

SELECT name, salary FROM emp_c WHERE salary < 800 ORDER BY name;`,
    mode: "auto",
    lv: 3,
    setup: "CREATE TABLE emp_c AS SELECT id, name, title, dept_id, salary FROM s_emp",
    order: [0],
    exp: String.raw`<p>SET 오른쪽에 서브쿼리를 쓸 수 있어요. 서브쿼리는 UPDATE 전의 값으로 한 번 계산돼서(750) 4명 모두에게 똑같이 들어가요.</p>
`
  },
  {
    n: 212,
    sql: String.raw`DELETE FROM emp_c
WHERE dept_id IN (SELECT id FROM s_dept WHERE name = '기획부');

SELECT COUNT(*) FROM emp_c;   -- 10`,
    mode: "auto",
    lv: 3,
    setup: "CREATE TABLE emp_c AS SELECT id, name, title, dept_id, salary FROM s_emp",
    exp: String.raw`<p>기획부가 4개라 IN을 써요. 지우기 전에 같은 WHERE로 SELECT해서 15명이 맞는지 먼저 확인해 보세요.</p>
`
  },
  {
    n: 213,
    sql: String.raw`CREATE TABLE dept_stat AS
SELECT dept_id, COUNT(*) AS cnt, SUM(salary) AS total
FROM s_emp
GROUP BY dept_id;

SELECT * FROM dept_stat ORDER BY dept_id;`,
    mode: "auto",
    lv: 3,
    order: [0],
    exp: String.raw`<p>CREATE TABLE ... AS SELECT의 SELECT에 그룹 함수를 쓰면, 별명이 새 테이블의 컬럼 이름이 돼요. 별명이 없으면 <code>COUNT(*)</code> 같은 식은 컬럼 이름이 될 수 없어서 에러가 나요.</p>
`
  },
  {
    n: 214,
    sql: String.raw`-- (가) UNIQUE
-- (나) NOT NULL
-- (다) FOREIGN KEY
-- (라) CHECK (age >= 0)
-- (마) PRIMARY KEY`,
    mode: "self",
    kw: ["UNIQUE", "NOT NULL", "FOREIGN KEY", "CHECK", "PRIMARY KEY"],
    lv: 1,
    exp: String.raw`<p>PRIMARY KEY는 NOT NULL과 UNIQUE를 합친 것이고, 테이블당 하나만 둘 수 있어요. UNIQUE는 NULL을 허용한다는 점이 PRIMARY KEY와 달라요.</p>
`
  },
  {
    n: 215,
    sql: String.raw`-- NOT NULL은 테이블 레벨로 쓸 수 없어요. 컬럼 정의 옆으로 옮겨요.
CREATE TABLE member_t (
  id   NUMBER(5),
  name VARCHAR2(20) CONSTRAINT member_t_name_nn NOT NULL,
  CONSTRAINT member_t_id_pk PRIMARY KEY (id)
);`,
    mode: "self",
    kw: ["NOT NULL"],
    lv: 1,
    exp: String.raw`<p>PRIMARY KEY, UNIQUE, CHECK, FOREIGN KEY는 컬럼 레벨과 테이블 레벨 모두 쓸 수 있지만, NOT NULL은 컬럼 레벨로만 쓸 수 있어요.</p>
`
  },
  {
    n: 216,
    sql: String.raw`-- NOT NULL    : 값이 반드시 있어야 함
-- UNIQUE      : 같은 값이 두 번 들어갈 수 없음 (NULL은 여러 개 가능)
-- PRIMARY KEY : 행을 구분하는 컬럼. UNIQUE + NOT NULL
-- FOREIGN KEY : 다른 테이블(부모)의 PK나 UNIQUE 값만 넣을 수 있음
-- CHECK       : 정해 둔 조건을 만족하는 값만 넣을 수 있음`,
    mode: "self",
    kw: ["NOT NULL", "UNIQUE", "PRIMARY KEY", "FOREIGN KEY", "CHECK"],
    lv: 1,
    exp: String.raw`<p>제약조건은 잘못된 데이터가 처음부터 들어오지 못하게 DB가 막아 주는 규칙이에요.</p>
`
  },
  {
    n: 217,
    sql: String.raw`-- PRIMARY KEY : NULL을 넣을 수 없어요. 테이블에 하나만 만들 수 있어요.
-- UNIQUE      : NULL을 넣을 수 있어요. 여러 개 만들 수 있어요.`,
    mode: "self",
    kw: ["NULL", "하나|1개"],
    lv: 1,
    exp: String.raw`<p>PK는 행의 &quot;대표 이름표&quot;라 하나뿐이고, 이메일·주민번호처럼 중복만 막고 싶은 컬럼에는 UNIQUE를 써요.</p>
`
  },
  {
    n: 218,
    sql: "-- NOT NULL",
    mode: "self",
    kw: ["NOT NULL"],
    lv: 1,
    exp: String.raw`<p>NOT NULL은 컬럼 하나에 대한 규칙이라 컬럼 옆에만 써요. 나중에 추가할 때도 ADD가 아니라 MODIFY를 써요(11장).</p>
`
  },
  {
    n: 219,
    sql: String.raw`-- 에러가 났을 때 어떤 테이블의 어떤 제약조건에 걸렸는지 이름만 보고 바로 알 수 있어요.
-- 나중에 삭제하거나 끌 때(DROP, DISABLE) 이름으로 지정하기 쉬워요.
-- 이름을 붙이지 않으면 SYS_C0012345 같은 이름이 자동으로 붙어요.`,
    mode: "self",
    kw: ["SYS_C"],
    lv: 1,
    exp: String.raw`<p>보통 <code>테이블_컬럼_종류</code>(pk, uk, fk, ck, nn) 규칙으로 이름을 붙여요.</p>
`
  },
  {
    n: 220,
    sql: String.raw`-- ORA-00001 : UNIQUE 또는 PRIMARY KEY (중복 값)
-- ORA-01400 : NOT NULL 또는 PRIMARY KEY (NULL을 넣음)
-- ORA-02290 : CHECK
-- ORA-02291 : FOREIGN KEY (자식에 넣으려는 값이 부모에 없음)
-- ORA-02292 : FOREIGN KEY (지우려는 부모 행을 자식이 참조하고 있음)`,
    mode: "self",
    kw: ["00001", "01400", "02290", "02291", "02292"],
    lv: 2,
    exp: String.raw`<p>02291은 &quot;부모 키가 없음&quot;, 02292는 &quot;자식 레코드가 있음&quot;이에요. 둘 다 FK지만 방향이 반대예요.</p>
`
  },
  {
    n: 221,
    sql: String.raw`CREATE TABLE dept_t (
  id   NUMBER(7)    CONSTRAINT dept_t_id_pk   PRIMARY KEY,
  name VARCHAR2(25) CONSTRAINT dept_t_name_nn NOT NULL
);`,
    mode: "self",
    kw: ["PRIMARY KEY", "NOT NULL", "CONSTRAINT"],
    lv: 1,
    exp: String.raw`<p>컬럼 레벨은 컬럼 정의 바로 옆에 <code>CONSTRAINT 이름 종류</code>로 써요. 이름 규칙은 <code>테이블_컬럼_종류</code>예요.</p>
`
  },
  {
    n: 222,
    sql: String.raw`CREATE TABLE emp_t (
  id      NUMBER(7)     CONSTRAINT emp_t_id_pk     PRIMARY KEY,
  name    VARCHAR2(25)  CONSTRAINT emp_t_name_nn   NOT NULL,
  mailid  VARCHAR2(8)   CONSTRAINT emp_t_mailid_uk UNIQUE,
  salary  NUMBER(11,2),
  dept_id NUMBER(7),
  CONSTRAINT emp_t_salary_ck  CHECK (salary BETWEEN 500 AND 10000),
  CONSTRAINT emp_t_dept_id_fk FOREIGN KEY (dept_id) REFERENCES dept_t(id)
);`,
    mode: "self",
    kw: ["CHECK", "FOREIGN KEY", "REFERENCES", "UNIQUE", "PRIMARY KEY", "NOT NULL"],
    lv: 2,
    exp: String.raw`<p>테이블 레벨은 컬럼을 다 쓴 뒤에 따로 써요. FOREIGN KEY는 테이블 레벨에서 <code>FOREIGN KEY (컬럼) REFERENCES 부모(컬럼)</code> 형태예요. NOT NULL은 컬럼 레벨로만 쓸 수 있어요. 부모 테이블 dept_t를 먼저 만들어야 해요.</p>
`
  },
  {
    n: 223,
    sql: String.raw`INSERT INTO dept_t (id, name)
SELECT id, name FROM s_dept;     -- 11개 행이 삽입되었습니다.

COMMIT;`,
    mode: "self",
    kw: ["INSERT INTO dept_t", "SELECT", "COMMIT"],
    lv: 1,
    exp: String.raw`<p>S_DEPT에는 region_id까지 3개 컬럼이 있지만 dept_t는 2개라서, 넣을 컬럼을 명시해서 맞춰요.</p>
`
  },
  {
    n: 224,
    sql: String.raw`-- a 성공
-- b ORA-00001 : PRIMARY KEY(emp_t_id_pk) 위반, id 1이 이미 있음
-- c ORA-01400 : NOT NULL(emp_t_name_nn) 위반, name에 NULL
-- d ORA-00001 : UNIQUE(emp_t_mailid_uk) 위반, mailid 'kim' 중복
-- e ORA-02290 : CHECK(emp_t_salary_ck) 위반, 급여 100 < 500
-- f ORA-02291 : FOREIGN KEY(emp_t_dept_id_fk) 위반, 부모에 999번 부서가 없음
COMMIT;`,
    mode: "self",
    kw: ["00001", "01400", "02290", "02291"],
    lv: 2,
    exp: String.raw`<p>에러 메시지 괄호 안에 위반한 제약조건 이름(STUDENT.EMP_T_ID_PK 등)이 나와요. 이름을 붙여 두면 무엇이 문제인지 바로 알 수 있어요. 끝나면 emp_t에는 김철수 한 명만 남아요.</p>
`
  },
  {
    n: 225,
    sql: String.raw`-- 에러: ORA-02292 (자식 레코드가 발견되었습니다)
-- emp_t의 김철수가 110번 부서를 참조하고 있어서 부모 행을 지울 수 없어요.

-- 방법 1: 자식 행을 먼저 지우거나 다른 부서로 옮긴 뒤 부모를 지운다
DELETE FROM emp_t WHERE dept_id = 110;
DELETE FROM dept_t WHERE id = 110;

-- 방법 2: FK를 ON DELETE CASCADE로 다시 만든다 (부모를 지우면 자식도 같이 지워짐)
ALTER TABLE emp_t DROP CONSTRAINT emp_t_dept_id_fk;
ALTER TABLE emp_t ADD CONSTRAINT emp_t_dept_id_fk
  FOREIGN KEY (dept_id) REFERENCES dept_t(id) ON DELETE CASCADE;`,
    mode: "self",
    kw: ["02292", "CASCADE"],
    lv: 2,
    exp: String.raw`<p>FK는 &quot;자식이 가리키는 부모는 반드시 있어야 한다&quot;는 규칙이라, 참조되고 있는 부모 행은 지울 수 없어요. 자식 쪽을 정리하거나 ON DELETE CASCADE를 써요.</p>
`
  },
  {
    n: 226,
    sql: String.raw`CREATE TABLE prod_t (
  id    NUMBER(5)    CONSTRAINT prod_t_id_pk PRIMARY KEY,
  name  VARCHAR2(20) NOT NULL,
  price NUMBER(7)    CONSTRAINT prod_t_price_ck CHECK (price >= 0)
);
INSERT INTO prod_t VALUES (1, '연필', 500);
INSERT INTO prod_t VALUES (2, '공책', 1200);

SELECT * FROM prod_t ORDER BY id;`,
    mode: "auto",
    lv: 1,
    order: [0],
    exp: String.raw`<p>컬럼 레벨 제약조건은 <code>CONSTRAINT 이름 종류</code> 순서로 컬럼 정의 바로 뒤에 써요.</p>
`
  },
  {
    n: 227,
    sql: "gender CHAR(1) CONSTRAINT member_t_gender_ck CHECK (gender IN ('M', 'F'))",
    mode: "self",
    kw: ["CHECK", "IN"],
    lv: 1,
    exp: String.raw`<p>CHECK 안에는 WHERE에 쓰는 조건식을 그대로 쓸 수 있어요. 단, NULL은 CHECK를 통과하니 반드시 값이 있어야 하면 NOT NULL도 함께 걸어요.</p>
`
  },
  {
    n: 228,
    sql: String.raw`ALTER TABLE emp_t ADD CONSTRAINT emp_t_email_uk UNIQUE (email);
ALTER TABLE emp_t MODIFY (name CONSTRAINT emp_t_name_nn NOT NULL);`,
    mode: "self",
    kw: ["ADD CONSTRAINT", "UNIQUE", "MODIFY", "NOT NULL"],
    lv: 2,
    exp: String.raw`<p>다른 제약조건은 ADD CONSTRAINT로 더하지만, NOT NULL은 컬럼의 성질을 바꾸는 것이라 MODIFY를 써요.</p>
`
  },
  {
    n: 229,
    sql: String.raw`ALTER TABLE emp_t DISABLE CONSTRAINT emp_t_salary_ck;
ALTER TABLE emp_t ENABLE  CONSTRAINT emp_t_salary_ck;
ALTER TABLE emp_t DROP    CONSTRAINT emp_t_salary_ck;`,
    mode: "self",
    kw: ["DISABLE", "ENABLE", "DROP CONSTRAINT"],
    lv: 2,
    exp: String.raw`<p>많은 데이터를 한꺼번에 넣을 때 잠깐 끄기도 해요. 다시 켤 때 이미 규칙을 어기는 데이터가 있으면 ENABLE이 실패해요.</p>
`
  },
  {
    n: 230,
    sql: String.raw`CREATE TABLE student_t (
  sno   NUMBER(5)    CONSTRAINT student_t_sno_pk   PRIMARY KEY,
  name  VARCHAR2(20) CONSTRAINT student_t_name_nn  NOT NULL,
  email VARCHAR2(40) CONSTRAINT student_t_email_uk UNIQUE,
  grade NUMBER(1)    CONSTRAINT student_t_grade_ck CHECK (grade BETWEEN 1 AND 4)
);`,
    mode: "self",
    kw: ["PRIMARY KEY", "NOT NULL", "UNIQUE", "CHECK"],
    lv: 2,
    exp: String.raw`<p>이름 규칙은 <code>테이블_컬럼_종류</code>(pk, nn, uk, ck, fk)예요. 브라우저 실행기에서도 만들 수 있으니, 만든 뒤 grade에 5를 넣어 보는 등 일부러 규칙을 어겨 보세요.</p>
`
  },
  {
    n: 231,
    sql: String.raw`CREATE TABLE enroll_t (
  sno       NUMBER(5),
  course_id VARCHAR2(10),
  score     NUMBER(3),
  CONSTRAINT enroll_t_pk        PRIMARY KEY (sno, course_id),
  CONSTRAINT enroll_t_sno_fk    FOREIGN KEY (sno) REFERENCES student_t(sno),
  CONSTRAINT enroll_t_score_ck  CHECK (score BETWEEN 0 AND 100)
);`,
    mode: "self",
    kw: ["PRIMARY KEY (SNO, COURSE_ID)|PRIMARY KEY(SNO, COURSE_ID)|PRIMARY KEY (SNO,COURSE_ID)", "FOREIGN KEY", "REFERENCES STUDENT_T", "CHECK"],
    lv: 3,
    exp: String.raw`<p>여러 컬럼을 합친 PRIMARY KEY(복합 키)는 테이블 레벨로만 만들 수 있어요. &quot;한 학생이 같은 과목을 두 번 수강할 수 없다&quot;는 규칙이 돼요. 부모 테이블(student_t)을 먼저 만들어야 해요.</p>
`
  },
  {
    n: 232,
    sql: String.raw`-- ON DELETE CASCADE가 없을 때:
--   자식(enroll_t)이 참조하고 있어서 부모 행을 지울 수 없어요. (ORA-02292)
-- ON DELETE CASCADE가 있을 때:
--   학생이 지워지면서 그 학생의 enroll_t 수강 기록도 자동으로 같이 지워져요.

CONSTRAINT enroll_t_sno_fk FOREIGN KEY (sno)
  REFERENCES student_t(sno) ON DELETE CASCADE`,
    mode: "self",
    kw: ["02292|지울 수 없", "CASCADE"],
    lv: 2,
    exp: String.raw`<p>ON DELETE CASCADE는 편하지만, 부모 하나를 지우면 자식이 한꺼번에 사라지니 신중하게 써야 해요.</p>
`
  },
  {
    n: 233,
    sql: String.raw`CREATE TABLE team_t (
  id   NUMBER(3) CONSTRAINT team_t_id_pk PRIMARY KEY,
  name VARCHAR2(20)
);
CREATE TABLE player_t (
  id      NUMBER(3) CONSTRAINT player_t_id_pk PRIMARY KEY,
  name    VARCHAR2(20),
  team_id NUMBER(3),
  CONSTRAINT player_t_team_fk FOREIGN KEY (team_id) REFERENCES team_t(id) ON DELETE CASCADE
);
INSERT INTO team_t VALUES (1, '청룡');
INSERT INTO team_t VALUES (2, '백호');
INSERT INTO player_t VALUES (1, '김하늘', 1);
INSERT INTO player_t VALUES (2, '이바다', 1);
INSERT INTO player_t VALUES (3, '박구름', 2);

DELETE FROM team_t WHERE id = 1;
SELECT * FROM player_t;   -- 박구름만 남음`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>ON DELETE CASCADE가 없으면 1번 팀을 지울 때 ORA-02292가 나요. 있으면 부모와 함께 자식 행이 자동으로 지워져요.</p>
`
  },
  {
    n: 234,
    sql: String.raw`-- ON DELETE SET NULL : 자식 행은 남고, FK 컬럼 값만 NULL로 바뀌어요.
--   예) 부서가 없어져도 직원은 남아야 할 때 (부서번호만 비움)
-- ON DELETE CASCADE  : 자식 행까지 함께 지워져요.
--   예) 주문이 지워지면 주문 상세도 의미가 없을 때`,
    mode: "self",
    kw: ["NULL", "CASCADE"],
    lv: 2,
    exp: String.raw`<p>자식 행이 부모 없이도 의미가 있으면 SET NULL, 부모 없이는 의미가 없으면 CASCADE를 골라요. FK 컬럼이 NOT NULL이면 SET NULL은 쓸 수 없어요.</p>
`
  },
  {
    n: 235,
    sql: String.raw`CREATE TABLE order_item_t (
  ord_id  NUMBER(7),
  item_no NUMBER(3),
  qty     NUMBER(5),
  CONSTRAINT order_item_t_pk     PRIMARY KEY (ord_id, item_no),
  CONSTRAINT order_item_t_qty_ck CHECK (qty >= 1)
);`,
    mode: "self",
    kw: ["PRIMARY KEY (ORD_ID, ITEM_NO)", "CHECK"],
    lv: 3,
    exp: String.raw`<p>두 컬럼을 합쳐서 하나의 PK로 만드는 복합 키예요. 여러 컬럼에 걸친 제약조건은 테이블 레벨로만 쓸 수 있어요.</p>
`
  },
  {
    n: 236,
    sql: String.raw`ALTER TABLE emp_t
ADD CONSTRAINT emp_t_mgr_fk FOREIGN KEY (manager_id) REFERENCES emp_t(id);

-- 상사가 없는 직원은 manager_id에 NULL을 넣어요.
-- 0처럼 없는 번호를 넣으면 FK 에러(ORA-02291)가 나요.`,
    mode: "self",
    kw: ["REFERENCES EMP_T", "NULL"],
    lv: 3,
    exp: String.raw`<p>자기 자신을 참조하는 FK예요. FK 컬럼의 NULL은 &quot;참조하는 대상 없음&quot;이라 검사를 통과해요.</p>
`
  },
  {
    n: 237,
    sql: String.raw`-- 이미 같은 전화번호를 가진 행이 있어서 UNIQUE를 만들 수 없어요.

SELECT phone, COUNT(*)
FROM cust_t
GROUP BY phone
HAVING COUNT(*) > 1;   -- 010-2222-1111이 2번`,
    mode: "self",
    kw: ["GROUP BY", "HAVING"],
    lv: 3,
    exp: String.raw`<p>제약조건을 나중에 추가할 때는 기존 데이터도 규칙을 지켜야 해요. 중복 데이터를 먼저 정리한 뒤 다시 추가해요.</p>
`
  },
  {
    n: 238,
    sql: String.raw`INSERT INTO member_t VALUES (3, NULL, '박구름', 30);
INSERT INTO member_t VALUES (4, NULL, '정달', NULL);

SELECT id, name FROM member_t ORDER BY id;
-- (가) age 13 → CHECK 위반   (다) id 1 → PK 중복   (마) email 중복 → UNIQUE 위반
-- (나)(라) UNIQUE 컬럼의 NULL은 여러 개 가능, CHECK는 NULL이면 통과`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE member_t (
  id    NUMBER(3)    CONSTRAINT member_t_id_pk PRIMARY KEY,
  email VARCHAR2(30) CONSTRAINT member_t_email_uk UNIQUE,
  name  VARCHAR2(20) CONSTRAINT member_t_name_nn NOT NULL,
  age   NUMBER(3)    CONSTRAINT member_t_age_ck CHECK (age BETWEEN 14 AND 120)
);
INSERT INTO member_t VALUES (1, 'sky@a.com', '김하늘', 20)`,
    order: [0],
    exp: String.raw`<p>함정은 (나)와 (라)예요. UNIQUE는 NULL끼리 중복으로 보지 않고, CHECK는 조건이 UNKNOWN(NULL)이면 막지 않아요.</p>
`
  },
  {
    n: 239,
    sql: String.raw`-- NULL은 에러가 나지 않고 들어가요. NULL > 0은 UNKNOWN이고, CHECK는 FALSE일 때만 막아요.
-- 반드시 값을 받으려면 NOT NULL을 함께 걸어요.
salary NUMBER(7) CONSTRAINT emp_t_salary_nn NOT NULL
                 CONSTRAINT emp_t_salary_ck CHECK (salary > 0)`,
    mode: "self",
    kw: ["NOT NULL", "UNKNOWN|통과"],
    lv: 3,
    exp: String.raw`<p>WHERE는 TRUE인 행만 남기지만, CHECK는 FALSE인 값만 막아요. 그래서 NULL은 CHECK를 통과해요.</p>
`
  },
  {
    n: 240,
    sql: String.raw`-- 에러가 나요. (ORA-02270: 일치하는 PK나 UNIQUE 키가 없음)
-- FK가 참조할 수 있는 부모 컬럼은 PRIMARY KEY나 UNIQUE가 걸린 컬럼뿐이에요.`,
    mode: "self",
    kw: ["PRIMARY KEY|PK", "UNIQUE"],
    lv: 3,
    exp: String.raw`<p>부모 값이 중복될 수 있으면 자식이 어느 행을 가리키는지 알 수 없어서예요. 타입도 맞아야 해요(숫자 컬럼이 문자 컬럼을 참조할 수 없어요).</p>
`
  },
  {
    n: 241,
    sql: String.raw`-- 에러: ORA-02449 (외래 키가 참조하는 고유/기본 키가 있음)
DROP TABLE dept_t CASCADE CONSTRAINTS;
-- 부모 테이블이 지워지고, 자식 테이블의 FK 제약조건만 함께 사라져요.
-- emp_t 테이블과 데이터는 그대로 남아요.`,
    mode: "self",
    kw: ["CASCADE CONSTRAINTS"],
    lv: 3,
    exp: String.raw`<p>CASCADE CONSTRAINTS는 자식 데이터를 지우는 게 아니라 &quot;걸려 있는 FK 제약조건&quot;을 지워요. ON DELETE CASCADE와 헷갈리지 마세요.</p>
`
  },
  {
    n: 242,
    sql: String.raw`CREATE TABLE book_t2 (
  isbn  CHAR(13)      CONSTRAINT book_t2_isbn_pk PRIMARY KEY,
  title VARCHAR2(100) CONSTRAINT book_t2_title_nn NOT NULL,
  price NUMBER(7)     CONSTRAINT book_t2_price_ck CHECK (price >= 0)
);
CREATE TABLE loan_t (
  loan_no     NUMBER(7),
  isbn        CHAR(13),
  loan_date   DATE CONSTRAINT loan_t_date_nn NOT NULL,
  return_date DATE,
  CONSTRAINT loan_t_no_pk   PRIMARY KEY (loan_no),
  CONSTRAINT loan_t_isbn_fk FOREIGN KEY (isbn) REFERENCES book_t2(isbn),
  CONSTRAINT loan_t_ret_ck  CHECK (return_date >= loan_date)
);`,
    mode: "self",
    kw: ["PRIMARY KEY", "REFERENCES BOOK_T2", "CHECK (RETURN_DATE >= LOAN_DATE)|RETURN_DATE >= LOAN_DATE"],
    lv: 3,
    exp: String.raw`<p>두 컬럼을 비교하는 CHECK는 테이블 레벨로 써요. 반납일이 NULL이면 비교 결과가 UNKNOWN이라 통과하니, &quot;비어 있어도 된다&quot;는 규칙도 저절로 지켜져요.</p>
`
  },
  {
    n: 243,
    sql: String.raw`CREATE TABLE dpt_t (id NUMBER(3) CONSTRAINT dpt_t_id_pk PRIMARY KEY);
CREATE TABLE stf_t (
  id     NUMBER(3) CONSTRAINT stf_t_id_pk PRIMARY KEY,
  name   VARCHAR2(20),
  dpt_id NUMBER(3),
  CONSTRAINT stf_t_dpt_fk FOREIGN KEY (dpt_id) REFERENCES dpt_t(id) ON DELETE SET NULL
);
INSERT INTO dpt_t VALUES (10);
INSERT INTO dpt_t VALUES (20);
INSERT INTO stf_t VALUES (1, '김하늘', 10);
INSERT INTO stf_t VALUES (2, '이바다', 20);

DELETE FROM dpt_t WHERE id = 10;
SELECT id, name, dpt_id FROM stf_t ORDER BY id;   -- 김하늘의 dpt_id가 NULL`,
    mode: "auto",
    lv: 3,
    order: [0],
    exp: String.raw`<p>직원 행은 그대로 남고 FK 컬럼만 NULL이 돼요. ON DELETE CASCADE였다면 김하늘 행이 지워졌을 거예요.</p>
`
  },
  {
    n: 244,
    sql: String.raw`-- ① ROLLBACK TO s1 시점: 2행 (김철수 + 한지민), 김철수 급여 3000
--    s1 이후의 UPDATE와 DELETE만 취소되고, s1 전의 INSERT는 남아 있어요.
-- ② ROLLBACK 시점: 1행 (김철수), 급여 3000
--    마지막 COMMIT 이후의 변경(INSERT 포함)이 모두 취소돼요.`,
    mode: "self",
    kw: ["2", "1", "3000"],
    lv: 2,
    exp: String.raw`<p>ROLLBACK TO 세이브포인트는 그 지점 이후만 되돌리고 트랜잭션은 계속돼요. 그냥 ROLLBACK은 마지막 COMMIT 이후 전부를 되돌려요. 이 문제는 브라우저 실행기에서도 그대로 따라 해 볼 수 있어요(221~224번을 먼저 실행해 두세요).</p>
`
  },
  {
    n: 245,
    sql: String.raw`-- ① 9행  : b 이후의 DELETE(급여 900 미만 3명)만 취소. 이기철은 여전히 삭제된 상태
-- ② 795   : a 이후의 UPDATE(+100)까지 취소돼서 원래 급여로
-- ③ 10행  : 마지막 COMMIT 이후 전부 취소. 이기철도 돌아옴`,
    mode: "self",
    kw: ["9", "795", "10"],
    lv: 3,
    exp: String.raw`<p>ROLLBACK TO는 그 세이브포인트 이후만 되돌리고 트랜잭션은 계속돼요. 그냥 ROLLBACK은 마지막 COMMIT 이후 전부를 되돌려요. 브라우저 실행기에서도 그대로 따라 해 볼 수 있어요.</p>
`
  },
  {
    n: 246,
    sql: String.raw`-- COMMIT   : 지금까지의 변경을 DB에 확정해요. 다른 사용자도 볼 수 있게 돼요.
-- ROLLBACK : 마지막 COMMIT 이후의 변경을 모두 취소해요.`,
    mode: "self",
    kw: ["확정|저장", "취소"],
    lv: 1,
    exp: String.raw`<p>COMMIT한 뒤에는 ROLLBACK으로 되돌릴 수 없어요.</p>
`
  },
  {
    n: 247,
    sql: String.raw`INSERT INTO tx_t VALUES (2, '추가');
ROLLBACK;

SELECT * FROM tx_t;   -- (1, '처음')만 남음`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE tx_t (id NUMBER(3), memo VARCHAR2(20));
INSERT INTO tx_t VALUES (1, '처음');
COMMIT`,
    exp: String.raw`<p>COMMIT하지 않은 INSERT는 ROLLBACK으로 취소돼요.</p>
`
  },
  {
    n: 248,
    sql: String.raw`INSERT INTO tx_t VALUES (2, '추가');
COMMIT;
ROLLBACK;

SELECT * FROM tx_t ORDER BY id;   -- 두 행 모두 남음`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE tx_t (id NUMBER(3), memo VARCHAR2(20));
INSERT INTO tx_t VALUES (1, '처음');
COMMIT`,
    order: [0],
    exp: String.raw`<p>ROLLBACK은 마지막 COMMIT 이후만 취소해요. 이미 COMMIT한 변경은 되돌릴 수 없어요.</p>
`
  },
  {
    n: 249,
    sql: String.raw`-- 시작: 앞의 트랜잭션이 끝난 뒤 첫 DML(INSERT, UPDATE, DELETE)을 실행할 때
-- 끝: COMMIT 또는 ROLLBACK을 실행할 때
--     DDL·DCL을 실행할 때(자동 COMMIT)
--     정상 종료(자동 COMMIT), 비정상 종료(자동 ROLLBACK)`,
    mode: "self",
    kw: ["DML", "COMMIT", "ROLLBACK"],
    lv: 1,
    exp: String.raw`<p>트랜잭션은 &quot;함께 성공하거나 함께 취소되는 작업 묶음&quot;이에요. SELECT는 데이터를 바꾸지 않아서 트랜잭션을 시작하지 않아요.</p>
`
  },
  {
    n: 250,
    sql: String.raw`INSERT INTO tx_t VALUES (2, 'A');
SAVEPOINT s1;
INSERT INTO tx_t VALUES (3, 'B');
ROLLBACK TO s1;

SELECT * FROM tx_t ORDER BY id;   -- 1, 2만 남음`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE tx_t (id NUMBER(3), memo VARCHAR2(20));
INSERT INTO tx_t VALUES (1, '처음');
COMMIT`,
    order: [0],
    exp: String.raw`<p>ROLLBACK TO는 SAVEPOINT 이후의 변경만 취소하고, 트랜잭션은 계속돼요. (2, &#39;A&#39;)는 아직 COMMIT 전이라 이어서 ROLLBACK하면 사라져요.</p>
`
  },
  {
    n: 251,
    sql: String.raw`INSERT INTO tx_t VALUES (2, 'A');
SAVEPOINT s1;
INSERT INTO tx_t VALUES (3, 'B');
SAVEPOINT s2;
UPDATE tx_t SET memo = '수정' WHERE id = 1;
ROLLBACK TO s2;
DELETE FROM tx_t WHERE id = 2;
ROLLBACK TO s1;
SELECT * FROM tx_t ORDER BY id;   -- (1, '처음'), (2, 'A')`,
    mode: "auto",
    lv: 2,
    setup: String.raw`CREATE TABLE tx_t (id NUMBER(3), memo VARCHAR2(20));
INSERT INTO tx_t VALUES (1, '처음');
COMMIT`,
    order: [0],
    exp: String.raw`<p>ROLLBACK TO s1은 s1 이후의 모든 변경(3번 INSERT, 2번 DELETE)을 취소해요. 1번의 &#39;수정&#39;은 이미 s2로 취소됐어요.</p>
`
  },
  {
    n: 252,
    sql: String.raw`-- ROLLBACK TO c : 에러(ORA-01086). b 이후에 만든 c는 함께 사라졌어요.
-- ROLLBACK TO a : 돼요. a는 b보다 앞이라 남아 있어요.`,
    mode: "self",
    kw: ["01086|에러"],
    lv: 2,
    exp: String.raw`<p>ROLLBACK TO는 그 SAVEPOINT 이후에 만든 SAVEPOINT도 함께 없애요. 그 SAVEPOINT 자신은 남아요.</p>
`
  },
  {
    n: 253,
    sql: String.raw`UPDATE account_t SET balance = balance - 3000 WHERE no = 'A';
UPDATE account_t SET balance = balance + 3000 WHERE no = 'B';
COMMIT;

UPDATE account_t SET balance = balance + 1000 WHERE no = 'A';
-- UPDATE account_t SET balance = balance - 1000 WHERE no = 'C';  → CHECK 위반(ORA-02290)
ROLLBACK;   -- 입금만 반영되는 것을 막으려고 두 번째 이체 전체를 취소

SELECT no, balance FROM account_t ORDER BY no;   -- A 7000, B 8000, C 0`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE account_t (no VARCHAR2(5) PRIMARY KEY, owner VARCHAR2(20), balance NUMBER(9) CHECK (balance >= 0));
INSERT INTO account_t VALUES ('A', '김하늘', 10000);
INSERT INTO account_t VALUES ('B', '이바다', 5000);
INSERT INTO account_t VALUES ('C', '박구름', 0);
COMMIT`,
    order: [0],
    exp: String.raw`<p>이체는 출금과 입금이 함께 성공해야 해요. 한쪽이 실패하면 ROLLBACK으로 이미 실행한 쪽까지 취소해야 원자성이 지켜져요.</p>
`
  },
  {
    n: 254,
    sql: String.raw`UPDATE account_t SET balance = balance - 2000 WHERE no = 'A';
SAVEPOINT p1;
UPDATE account_t SET balance = balance + 2000 WHERE no = 'B';
SAVEPOINT p2;
UPDATE account_t SET balance = balance + 500 WHERE no = 'C';
ROLLBACK TO p1;
UPDATE account_t SET balance = balance + 2000 WHERE no = 'C';
COMMIT;
ROLLBACK;
SELECT no, balance FROM account_t ORDER BY no;   -- A 8000, B 5000, C 2000`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE account_t (no VARCHAR2(5) PRIMARY KEY, owner VARCHAR2(20), balance NUMBER(9) CHECK (balance >= 0));
INSERT INTO account_t VALUES ('A', '김하늘', 10000);
INSERT INTO account_t VALUES ('B', '이바다', 5000);
INSERT INTO account_t VALUES ('C', '박구름', 0);
COMMIT`,
    order: [0],
    exp: String.raw`<p>ROLLBACK TO p1로 B와 C의 변경이 취소되고, 받는 사람을 C로 바꿔 다시 입금한 뒤 COMMIT했어요. 마지막 ROLLBACK은 COMMIT 뒤라 취소할 것이 없어요.</p>
`
  },
  {
    n: 255,
    sql: String.raw`-- (가) Durability  지속성: COMMIT한 내용은 장애가 나도 남는다
-- (나) Atomicity   원자성: 전부 성공하거나 전부 취소된다
-- (다) Isolation   독립성(고립성): COMMIT 전 변경은 다른 사용자에게 보이지 않는다
-- (라) Consistency 일관성: 규칙(제약조건)에 어긋난 상태로 바뀌지 않는다`,
    mode: "self",
    kw: ["Durability|지속", "Atomicity|원자", "Isolation|독립|고립", "Consistency|일관"],
    lv: 1,
    exp: String.raw`<p>ACID는 원자성, 일관성, 독립성, 지속성의 앞 글자예요. &quot;다 되거나 하나도 안 되거나&quot;가 원자성, &quot;COMMIT하면 영원히&quot;가 지속성이에요.</p>
`
  },
  {
    n: 256,
    sql: String.raw`-- (가) Atomicity   원자성
-- (나) Isolation   고립성(격리성)
-- (다) Consistency 일관성
-- (라) Durability  지속성`,
    mode: "self",
    kw: ["Atomicity|원자", "Isolation|고립|격리|독립", "Consistency|일관", "Durability|지속"],
    lv: 1,
    exp: String.raw`<p>&quot;전부 아니면 전무&quot;는 원자성, &quot;규칙을 지키는 상태 유지&quot;는 일관성, &quot;서로 끼어들지 않음&quot;은 고립성, &quot;COMMIT하면 영원히&quot;는 지속성이에요.</p>
`
  },
  {
    n: 257,
    sql: String.raw`-- 2. 창 B: 3000 (COMMIT 전의 값이 보임)
-- 3. 창 B: 멈춤(대기). 창 A가 그 행에 W Lock을 걸고 있어서 기다려요.
-- 4. 창 A COMMIT → Lock이 풀리고 창 B의 UPDATE가 실행돼요(1행 업데이트).
-- 5. 창 B COMMIT 후: 두 창 모두 4500`,
    mode: "self",
    kw: ["3000", "4500"],
    lv: 3,
    exp: String.raw`<p>읽기는 막히지 않고 COMMIT된 값(변경 전 값)을 보여줘요. 같은 행을 동시에 바꾸려 하면 나중에 온 쪽이 먼저 온 쪽의 COMMIT이나 ROLLBACK을 기다려요. 최종 값은 마지막으로 COMMIT한 B의 4500이에요.</p>
`
  },
  {
    n: 258,
    sql: String.raw`-- 다른 창에서는 COMMIT 전의 원래 값 5000이 보여요.
-- 내 창에서 COMMIT한 뒤부터 다른 창에서도 9999가 보여요.

ROLLBACK;   -- 실습 데이터를 원래대로`,
    mode: "self",
    kw: ["5000", "COMMIT"],
    lv: 2,
    exp: String.raw`<p>COMMIT 전의 변경은 나만 보는 임시 상태예요. 이것이 ACID의 고립성(Isolation)이에요. 오라클은 다른 사용자에게 변경 전 값을 보여줘서, 읽는 쪽이 기다리지 않게 해요.</p>
`
  },
  {
    n: 259,
    sql: String.raw`-- 비관적 잠금: (가), (다)  동시에 같은 데이터를 고칠 일이 잦고, 충돌하면 손해가 커요
-- 낙관적 잠금: (나), (라)  충돌이 드물어서, 기다리지 않고 수정할 때만 확인하는 편이 빨라요`,
    mode: "self",
    kw: ["비관", "낙관"],
    lv: 2,
    exp: String.raw`<p>비관적 잠금은 읽을 때부터 잠가서 확실하지만 기다리는 시간이 생기고, 낙관적 잠금은 잠그지 않고 수정할 때 충돌을 확인해서 빠르지만 충돌하면 다시 해야 해요.</p>
`
  },
  {
    n: 260,
    sql: String.raw`UPDATE emp_t
SET salary = 3000, version = version + 1
WHERE id = 1 AND version = 5;

-- 0행 수정: 내가 읽은 뒤 다른 사람이 먼저 고쳐서 version이 바뀌었다는 뜻.
--          다시 읽어서(SELECT) 최신 값과 version으로 재시도해요.`,
    mode: "self",
    kw: ["VERSION = 5|VERSION=5", "VERSION + 1|VERSION+1"],
    lv: 3,
    exp: String.raw`<p>낙관적 잠금은 오라클 명령어가 아니라 version 같은 컬럼으로 직접 만드는 방식이에요. WHERE에 &quot;내가 읽은 version&quot;을 넣어서, 그사이 바뀌었으면 수정되지 않게 해요.</p>
`
  },
  {
    n: 261,
    sql: String.raw`-- A Atomicity   (원자성) : 전부 성공하거나 전부 취소
-- C Consistency (일관성) : 트랜잭션 전후로 데이터가 규칙(제약조건)을 지킴
-- I Isolation   (고립성) : 동시에 실행되는 트랜잭션끼리 서로 끼어들지 않음
-- D Durability  (지속성) : COMMIT한 결과는 장애가 나도 남음`,
    mode: "self",
    kw: ["원자성|ATOMICITY", "일관성|CONSISTENCY", "고립성|격리성|ISOLATION", "지속성|영속성|DURABILITY"],
    lv: 1,
    exp: String.raw`<p>이체를 떠올리면 쉬워요. 출금과 입금이 함께 되거나 함께 취소되는 것이 원자성이에요.</p>
`
  },
  {
    n: 262,
    sql: String.raw`-- 다른 사용자: 바뀌기 전 값(마지막 COMMIT 값)이 보여요.
-- 나 자신    : 바뀐 값이 보여요.`,
    mode: "self",
    kw: ["COMMIT", "나"],
    lv: 1,
    exp: String.raw`<p>COMMIT 전의 변경은 나에게만 보여요. 확정되지 않은 값을 다른 사람이 보지 못하게 하는 것이 고립성(Isolation)이에요.</p>
`
  },
  {
    n: 263,
    sql: String.raw`-- ① 바로 실행돼요. 오라클은 행 단위로 Lock을 걸어서, 다른 행은 수정할 수 있어요.
-- ② 기다려요(멈춘 것처럼 보임). 창 A가 COMMIT이나 ROLLBACK을 하면 그때 실행돼요.`,
    mode: "self",
    kw: ["행", "기다"],
    lv: 2,
    exp: String.raw`<p>Lock은 테이블 전체가 아니라 바꾸는 행에만 걸려요. 같은 행을 동시에 바꾸려 할 때만 기다려요.</p>
`
  },
  {
    n: 264,
    sql: String.raw`-- 교착 상태(Deadlock): 서로 상대가 가진 Lock을 기다리느라 둘 다 영원히 기다리게 돼요.
-- 오라클은 이를 알아채고 한쪽 문장을 실패시켜요(ORA-00060).
-- 실패한 쪽은 그 문장만 취소되고, 트랜잭션은 남아 있으니 COMMIT이나 ROLLBACK을 해야 해요.`,
    mode: "self",
    kw: ["교착|DEADLOCK", "00060|한쪽"],
    lv: 3,
    exp: String.raw`<p>교착 상태를 줄이려면 여러 행을 바꿀 때 항상 같은 순서(예: 번호가 작은 행부터)로 바꾸는 것이 좋아요.</p>
`
  },
  {
    n: 265,
    sql: String.raw`-- 두 번 팔렸는데 재고는 4가 돼요(한 번의 변경이 사라짐, Lost Update).
-- 읽은 값을 그대로 쓰지 말고, DB에서 계산하게 바꿔요.
UPDATE product_t SET stock = stock - 1 WHERE id = 1 AND stock > 0;
-- 뒤에 실행한 사람은 앞 사람이 COMMIT할 때까지 기다렸다가, 바뀐 값(4)에서 1을 빼요.`,
    mode: "self",
    kw: ["STOCK - 1|STOCK-1"],
    lv: 3,
    exp: String.raw`<p><code>stock = stock - 1</code>처럼 쓰면 Lock이 풀린 뒤 최신 값으로 다시 계산돼요. 낙관적 잠금(version 컬럼)이나 비관적 잠금(SELECT ... FOR UPDATE)으로 풀 수도 있어요.</p>
`
  },
  {
    n: 266,
    sql: String.raw`-- 1) 바꾼 행에 Lock이 계속 걸려 있어서, 그 행을 바꾸려는 다른 사람이 계속 기다려요.
-- 2) 다른 사람은 바뀌기 전 값만 보게 돼서, 서로 다른 데이터를 보고 일하게 돼요.
-- 3) 이 사이에 장애가 나면 작업 전체가 ROLLBACK돼요.
-- 작업 단위가 끝나면 바로 COMMIT(또는 ROLLBACK)해서 트랜잭션을 짧게 유지해요.`,
    mode: "self",
    kw: ["LOCK|잠금", "기다"],
    lv: 3,
    exp: String.raw`<p>트랜잭션은 짧을수록 좋아요. 오래 열려 있는 트랜잭션은 Lock 대기의 가장 흔한 원인이에요.</p>
`
  },
  {
    n: 267,
    sql: String.raw`-- 자동 COMMIT  : CREATE TABLE, GRANT, TRUNCATE (DDL·DCL), EXIT로 정상 종료
-- 자동 ROLLBACK: 창 강제 종료, 컴퓨터 꺼짐 (비정상 종료)
-- 그대로 진행  : INSERT, UPDATE (DML은 COMMIT이나 ROLLBACK을 할 때까지 트랜잭션이 이어짐)`,
    mode: "self",
    kw: ["CREATE", "GRANT", "TRUNCATE", "EXIT|정상"],
    lv: 2,
    exp: String.raw`<p>DDL과 DCL은 실행 전에 자동으로 COMMIT돼서, 그 앞에 해 둔 DML까지 확정돼요.</p>
`
  },
  {
    n: 268,
    sql: String.raw`-- 김철수는 지워진 상태로 남아요.
-- CREATE TABLE은 DDL이라 실행 전에 자동으로 COMMIT돼요.
-- 그래서 DELETE가 확정되고, 뒤의 ROLLBACK은 되돌릴 것이 없어요.`,
    mode: "self",
    kw: ["COMMIT", "DDL"],
    lv: 2,
    exp: String.raw`<p>DDL(CREATE, ALTER, DROP, TRUNCATE, RENAME)과 DCL(GRANT, REVOKE)은 자동 COMMIT을 일으켜요. DML 중간에 DDL을 실행하면 앞의 DML까지 확정되니 주의해요.</p>
`
  },
  {
    n: 269,
    sql: String.raw`-- 자동으로 COMMIT돼요.
-- DDL(CREATE, ALTER, DROP, TRUNCATE 등)은 실행되기 전에 앞의 트랜잭션을 COMMIT해요.`,
    mode: "self",
    kw: ["COMMIT"],
    lv: 1,
    exp: String.raw`<p>DDL을 실행한 뒤에는 앞의 DML을 ROLLBACK할 수 없어요. 실습할 때 자주 겪는 함정이에요.</p>
`
  },
  {
    n: 270,
    sql: String.raw`DELETE FROM tx_t WHERE id = 1;
CREATE TABLE tmp_x (a NUMBER);
ROLLBACK;

SELECT COUNT(*) FROM tx_t;   -- 0`,
    mode: "auto",
    lv: 2,
    setup: String.raw`CREATE TABLE tx_t (id NUMBER(3), memo VARCHAR2(20));
INSERT INTO tx_t VALUES (1, '처음');
COMMIT`,
    exp: String.raw`<p>CREATE TABLE이 실행되면서 앞의 DELETE가 자동 COMMIT됐어요. 그래서 ROLLBACK해도 되돌릴 것이 없어요.</p>
`
  },
  {
    n: 271,
    sql: String.raw`-- ① 정상 종료  : 자동 COMMIT (SQL*Plus 기본 동작)
-- ② 비정상 종료: 자동 ROLLBACK`,
    mode: "self",
    kw: ["COMMIT", "ROLLBACK"],
    lv: 2,
    exp: String.raw`<p>확정되지 않은 작업이 장애 때문에 반쯤 남는 일이 없도록, 비정상 종료 시에는 취소돼요. 도구에 따라 정상 종료 동작이 다를 수 있으니 직접 COMMIT하는 습관을 들이세요.</p>
`
  },
  {
    n: 272,
    sql: String.raw`INSERT INTO tx_t VALUES (2, 'A');
TRUNCATE TABLE tx_t;
ROLLBACK;

SELECT COUNT(*) FROM tx_t;   -- 0`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE tx_t (id NUMBER(3), memo VARCHAR2(20));
INSERT INTO tx_t VALUES (1, '처음');
COMMIT`,
    exp: String.raw`<p>TRUNCATE는 DDL이라 앞의 INSERT를 COMMIT하고, 자기 자신도 바로 확정돼요. <code>DELETE FROM tx_t;</code>였다면 ROLLBACK으로 INSERT까지 모두 취소되어 1행(처음)이 남았을 거예요.</p>
`
  },
  {
    n: 273,
    sql: String.raw`UPDATE tx_t SET memo = '하나' WHERE id = 1;
CREATE TABLE tmp_y (a NUMBER);        -- 자동 COMMIT: '하나' 확정
INSERT INTO tx_t VALUES (2, '둘');
SAVEPOINT s1;
INSERT INTO tx_t VALUES (3, '셋');
ROLLBACK TO s1;                       -- 3번 취소
DROP TABLE tmp_y;                     -- 자동 COMMIT: 2번 확정
ROLLBACK;                             -- 취소할 것 없음
SELECT * FROM tx_t ORDER BY id;       -- (1, '하나'), (2, '둘')`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE tx_t (id NUMBER(3), memo VARCHAR2(20));
INSERT INTO tx_t VALUES (1, '처음');
COMMIT`,
    order: [0],
    exp: String.raw`<p>DDL을 만날 때마다 그 앞까지가 COMMIT돼요. DROP TABLE도 DDL이라 2번 INSERT를 확정해 버려요.</p>
`
  },
  {
    n: 274,
    sql: String.raw`SELECT table_name FROM user_tables;
-- 또는
SELECT * FROM tab;`,
    mode: "self",
    kw: ["USER_TABLES|TAB"],
    lv: 1,
    exp: String.raw`<p>USER_TABLES는 내가 가진 테이블 목록이에요. 테이블 이름은 대문자로 저장돼 있어요.</p>
`
  },
  {
    n: 275,
    sql: String.raw`SELECT owner, table_name FROM all_tables;

-- USER_ : 내가 소유한 객체
-- ALL_  : 내가 접근할 수 있는 객체 (내 것 + 권한을 받은 것)
-- DBA_  : DB의 모든 객체 (DBA 권한 필요)`,
    mode: "self",
    kw: ["ALL_TABLES"],
    lv: 1,
    exp: String.raw`<p>범위는 USER_ ⊂ ALL_ ⊂ DBA_ 순서로 넓어져요. ALL_TABLES에는 주인(OWNER) 컬럼이 있어서 누구의 테이블인지 함께 볼 수 있어요.</p>
`
  },
  {
    n: 276,
    sql: String.raw`SELECT table_name, comments
FROM dictionary
WHERE table_name LIKE 'USER_CONS%';
-- USER_CONSTRAINTS, USER_CONS_COLUMNS 등`,
    mode: "self",
    kw: ["DICTIONARY", "LIKE 'USER_CONS%'"],
    lv: 1,
    exp: String.raw`<p>DICTIONARY는 데이터 사전 전체의 목차예요. 어떤 사전 뷰가 있는지 모를 때 LIKE로 찾아보면 돼요. 값은 대문자로 써야 해요.</p>
`
  },
  {
    n: 277,
    sql: String.raw`SELECT column_name, data_type, data_length, nullable
FROM user_tab_columns
WHERE table_name = 'S_EMP';`,
    mode: "self",
    kw: ["USER_TAB_COLUMNS", "'S_EMP'"],
    lv: 1,
    exp: String.raw`<p>USER_TAB_COLUMNS는 내 테이블의 컬럼 정보를 담고 있어요. DESC가 보여주는 내용도 여기서 가져와요. nullable이 N이면 NOT NULL이에요.</p>
`
  },
  {
    n: 278,
    sql: String.raw`SELECT object_type, COUNT(*)
FROM user_objects
GROUP BY object_type;`,
    mode: "self",
    kw: ["USER_OBJECTS", "GROUP BY"],
    lv: 2,
    exp: String.raw`<p>USER_OBJECTS에는 테이블뿐 아니라 인덱스, 시퀀스, 뷰 같은 모든 객체가 들어 있어요. 데이터 사전도 평범한 SELECT라서 GROUP BY를 그대로 쓸 수 있어요.</p>
`
  },
  {
    n: 279,
    sql: String.raw`-- 오라클은 테이블 이름을 대문자로 저장해요. 's_emp'와 'S_EMP'는 다른 값이에요.
SELECT * FROM user_constraints WHERE table_name = 'S_EMP';`,
    mode: "self",
    kw: ["'S_EMP'"],
    lv: 1,
    exp: String.raw`<p>SQL 키워드나 테이블 이름 자체는 대소문자를 가리지 않지만, 따옴표 안의 값은 글자 그대로 비교해요. 데이터 사전을 조회할 때는 값을 대문자로 쓰세요.</p>
`
  },
  {
    n: 280,
    sql: String.raw`SELECT constraint_name, constraint_type, search_condition
FROM user_constraints
WHERE table_name = 'EMP_T';
-- P 1개(id), U 1개(mailid), R 1개(dept_id), C 2개(name NOT NULL, salary CHECK)`,
    mode: "self",
    kw: ["USER_CONSTRAINTS", "'EMP_T'"],
    lv: 2,
    exp: String.raw`<p>NOT NULL은 따로 종류가 없고 C(CHECK)로 나와요. 조건 칸에 &quot;NAME&quot; IS NOT NULL처럼 보여요. table_name 값은 반드시 대문자로 써요.</p>
`
  },
  {
    n: 281,
    sql: String.raw`SELECT c.constraint_name, c.constraint_type, cc.column_name
FROM user_constraints c, user_cons_columns cc
WHERE c.constraint_name = cc.constraint_name
  AND c.table_name = 'EMP_T';`,
    mode: "self",
    kw: ["USER_CONS_COLUMNS", "CONSTRAINT_NAME"],
    lv: 3,
    exp: String.raw`<p>USER_CONSTRAINTS에는 컬럼 이름이 없고, USER_CONS_COLUMNS에 있어요. 두 뷰를 constraint_name으로 조인하면 한 번에 볼 수 있어요.</p>
`
  },
  {
    n: 282,
    sql: String.raw`SELECT constraint_name, constraint_type
FROM user_constraints
WHERE table_name = 'S_EMP'
  AND constraint_name LIKE 'SYS_C%';
-- ID, NAME의 NOT NULL (종류 C)`,
    mode: "self",
    kw: ["LIKE 'SYS_C%'", "'S_EMP'"],
    lv: 2,
    exp: String.raw`<p>제약조건을 만들 때 이름을 붙이지 않으면 오라클이 SYS_C로 시작하는 이름을 자동으로 지어요. 실습 스크립트에서 NOT NULL에는 이름을 붙이지 않아서 이렇게 나와요. 나중에 무엇인지 알아보기 어려우니 직접 이름을 붙이는 것이 좋아요.</p>
`
  },
  {
    n: 283,
    sql: String.raw`SELECT * FROM ind;
SELECT * FROM user_indexes;
-- IND는 USER_INDEXES의 짧은 별명(시노님)이라 같은 내용이 나와요.`,
    mode: "self",
    kw: ["시노님|SYNONYM|별명"],
    lv: 1,
    exp: String.raw`<p>이렇게 객체에 붙인 다른 이름을 시노님(SYNONYM)이라고 해요(13장). TAB(USER_TABLES 대신)도 비슷하게 쓰는 짧은 이름이에요.</p>
`
  },
  {
    n: 284,
    sql: String.raw`SELECT table_name
FROM user_tables
WHERE table_name LIKE 'S\_%' ESCAPE '\';`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p><code>LIKE &#39;S_%&#39;</code>라고 쓰면 <code>_</code>가 아무 글자나 뜻해서 SALGRADE까지 나와요. 진짜 밑줄을 찾으려면 ESCAPE로 표시해요. 데이터 사전의 이름은 대문자로 저장돼서 &#39;S_%&#39;도 대문자로 써요.</p>
`
  },
  {
    n: 285,
    sql: String.raw`-- USER_ : 내가 가진(내 소유) 객체
-- ALL_  : 내가 접근할 수 있는 객체 (내 것 + 권한을 받은 다른 사용자의 것)
-- DBA_  : DB 전체의 객체 (관리자만 조회 가능)`,
    mode: "self",
    kw: ["USER_", "ALL_", "DBA_"],
    lv: 1,
    exp: String.raw`<p>범위는 USER_ ⊂ ALL_ ⊂ DBA_ 순으로 넓어져요. ALL_ 뷰에는 주인을 알려주는 OWNER 컬럼이 있어요.</p>
`
  },
  {
    n: 286,
    sql: String.raw`-- 오라클(DBMS)이 자동으로 만들고 관리해요. 소유자는 SYS예요.
-- 사용자는 SELECT만 할 수 있어요.
-- CREATE TABLE처럼 DDL을 실행하면 오라클이 알아서 데이터 사전을 바꿔요.`,
    mode: "self",
    kw: ["SELECT|읽기", "SYS|오라클"],
    lv: 1,
    exp: String.raw`<p>데이터 사전은 &quot;DB에 대한 데이터(메타데이터)&quot;를 담은 읽기 전용 테이블과 뷰예요.</p>
`
  },
  {
    n: 287,
    sql: "SELECT COUNT(*) FROM user_tables;   -- 8",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>데이터 사전도 보통의 테이블처럼 WHERE, COUNT, ORDER BY를 쓸 수 있어요.</p>
`
  },
  {
    n: 288,
    sql: String.raw`CREATE VIEW v_emp_name AS SELECT id, name FROM s_emp;

SELECT view_name FROM user_views;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>뷰를 만들면 오라클이 USER_VIEWS에 뷰 이름과 SELECT문을 저장해요. 뷰는 데이터가 아니라 &quot;저장된 SELECT문&quot;이에요.</p>
`
  },
  {
    n: 289,
    sql: String.raw`SELECT column_name, data_type
FROM user_tab_columns
WHERE table_name = 'EMP_T'
  AND nullable = 'N';`,
    mode: "self",
    kw: ["USER_TAB_COLUMNS", "NULLABLE", "'EMP_T'"],
    lv: 2,
    exp: String.raw`<p>NULLABLE 컬럼은 &#39;Y&#39; 또는 &#39;N&#39;이에요. PRIMARY KEY 컬럼도 NOT NULL이라 &#39;N&#39;으로 나와요.</p>
`
  },
  {
    n: 290,
    sql: String.raw`-- P : PRIMARY KEY
-- U : UNIQUE
-- R : FOREIGN KEY (Reference)
-- C : CHECK
-- NOT NULL은 CHECK의 한 종류라서 C로 나와요. (SEARCH_CONDITION에 "컬럼 IS NOT NULL")`,
    mode: "self",
    kw: ["PRIMARY", "UNIQUE", "FOREIGN|REFERENCE", "CHECK"],
    lv: 2,
    exp: String.raw`<p>FK가 F가 아니라 R인 이유는 &quot;다른 테이블을 참조(Reference)한다&quot;는 뜻이라서예요.</p>
`
  },
  {
    n: 291,
    sql: String.raw`SELECT sequence_name, increment_by, last_number
FROM user_sequences;`,
    mode: "self",
    kw: ["USER_SEQUENCES"],
    lv: 2,
    exp: String.raw`<p>CACHE를 쓰면 LAST_NUMBER는 메모리에 미리 올려 둔 번호까지 반영돼서, 실제로 쓴 번호보다 클 수 있어요.</p>
`
  },
  {
    n: 292,
    sql: String.raw`SELECT index_name, column_name, column_position
FROM user_ind_columns
WHERE table_name = 'S_EMP';`,
    mode: "self",
    kw: ["USER_IND_COLUMNS", "'S_EMP'"],
    lv: 2,
    exp: String.raw`<p>USER_INDEXES는 인덱스 자체(이름, UNIQUE 여부)를, USER_IND_COLUMNS는 인덱스에 들어간 컬럼을 보여줘요. 결합 인덱스는 컬럼 순서(COLUMN_POSITION)도 중요해요.</p>
`
  },
  {
    n: 293,
    sql: String.raw`SELECT table_name
FROM user_tables
WHERE table_name NOT IN ('S_ITEM', 'S_ORD', 'S_PRODUCT')
ORDER BY table_name;`,
    mode: "auto",
    lv: 2,
    order: [0],
    exp: String.raw`<p>데이터 사전의 테이블 이름은 대문자라서, 비교하는 값도 대문자로 써야 해요.</p>
`
  },
  {
    n: 294,
    sql: String.raw`-- 내가 준 권한   : USER_TAB_PRIVS_MADE
-- 내가 받은 권한 : USER_TAB_PRIVS_RECD
-- (둘 다 합쳐서 보려면 USER_TAB_PRIVS)`,
    mode: "self",
    kw: ["USER_TAB_PRIVS_MADE", "USER_TAB_PRIVS_RECD"],
    lv: 2,
    exp: String.raw`<p>MADE는 &quot;만든(준)&quot;, RECD는 &quot;받은(received)&quot;의 줄임이에요. 시스템 권한은 USER_SYS_PRIVS에서 봐요.</p>
`
  },
  {
    n: 295,
    sql: String.raw`SELECT c.constraint_name, c.r_constraint_name, p.table_name AS 부모테이블
FROM user_constraints c, user_constraints p
WHERE c.r_constraint_name = p.constraint_name
  AND c.table_name = 'EMP_T'
  AND c.constraint_type = 'R';`,
    mode: "self",
    kw: ["R_CONSTRAINT_NAME", "'R'"],
    lv: 3,
    exp: String.raw`<p>FK 행의 R_CONSTRAINT_NAME은 참조하는 부모 PK의 이름이에요. 같은 데이터 사전을 SELF JOIN해서 부모 테이블 이름을 찾아요.</p>
`
  },
  {
    n: 296,
    sql: String.raw`SELECT table_name
FROM user_tables
WHERE table_name NOT IN (SELECT table_name
                         FROM user_constraints
                         WHERE constraint_type = 'P');`,
    mode: "self",
    kw: ["USER_TABLES", "USER_CONSTRAINTS", "'P'"],
    lv: 3,
    exp: String.raw`<p>데이터 사전끼리도 서브쿼리로 엮을 수 있어요. 실습 스크립트의 S_ 테이블처럼 PK 없이 만든 테이블을 찾을 때 쓸 수 있어요.</p>
`
  },
  {
    n: 297,
    sql: String.raw`SELECT table_name, COUNT(*) AS 컬럼수
FROM user_tab_columns
GROUP BY table_name
ORDER BY 컬럼수 DESC;`,
    mode: "self",
    kw: ["USER_TAB_COLUMNS", "GROUP BY"],
    lv: 3,
    exp: String.raw`<p>USER_TAB_COLUMNS에는 뷰의 컬럼도 들어 있어요. 테이블만 보려면 <code>table_name IN (SELECT table_name FROM user_tables)</code> 조건을 더해요.</p>
`
  },
  {
    n: 298,
    sql: String.raw`-- 큰따옴표 없이 만든 이름은 대문자(EMP_TEST)로 저장돼요.
SELECT table_name FROM user_tables WHERE table_name = 'EMP_TEST';
-- 큰따옴표로 만들면 쓴 그대로(Emp_Test) 저장돼서 'Emp_Test'로 찾아야 해요.`,
    mode: "self",
    kw: ["'EMP_TEST'"],
    lv: 3,
    exp: String.raw`<p>SQL 문장은 대소문자를 가리지 않지만, 데이터 사전에 들어 있는 &quot;값&quot;은 대소문자를 가려요.</p>
`
  },
  {
    n: 299,
    sql: String.raw`SELECT object_name, object_type, created
FROM user_objects
WHERE created >= SYSDATE - 1
ORDER BY created DESC;`,
    mode: "self",
    kw: ["USER_OBJECTS", "SYSDATE - 1|SYSDATE-1"],
    lv: 3,
    exp: String.raw`<p>SYSDATE - 1은 &quot;지금부터 24시간 전&quot;이에요. CREATED 컬럼이 DATE라서 날짜 계산을 그대로 쓸 수 있어요.</p>
`
  },
  {
    n: 300,
    sql: String.raw`CREATE VIEW v_a AS SELECT name FROM s_emp;
CREATE VIEW v_b AS SELECT name FROM s_dept;

SELECT table_name FROM user_tables
UNION
SELECT view_name FROM user_views
ORDER BY 1;`,
    mode: "auto",
    lv: 3,
    order: [0],
    exp: String.raw`<p>실제 오라클에서는 USER_OBJECTS 하나로 <code>WHERE object_type IN (&#39;TABLE&#39;, &#39;VIEW&#39;)</code>처럼 조회할 수도 있어요. SET 연산자의 ORDER BY는 맨 마지막에 한 번만 써요.</p>
`
  },
  {
    n: 301,
    sql: String.raw`SELECT column_name, comments FROM user_col_comments WHERE table_name = 'S_EMP';
SELECT comments FROM user_tab_comments WHERE table_name = 'S_EMP';`,
    mode: "self",
    kw: ["USER_COL_COMMENTS", "USER_TAB_COMMENTS"],
    lv: 3,
    exp: String.raw`<p>COMMENT ON으로 단 설명은 USER_TAB_COMMENTS(테이블)와 USER_COL_COMMENTS(컬럼)에 저장돼요.</p>
`
  },
  {
    n: 302,
    sql: String.raw`SELECT constraint_name, search_condition
FROM user_constraints
WHERE table_name = 'EMP_T'
  AND constraint_type = 'C'
  AND constraint_name NOT LIKE '%NN';   -- 이름 규칙(_nn)을 지켰을 때
-- 또는 조건식을 보고 "IS NOT NULL"로 된 것을 빼요.`,
    mode: "self",
    kw: ["'C'", "NN|NOT NULL"],
    lv: 3,
    exp: String.raw`<p>NOT NULL도 C로 나와서 구분하기 어려워요. 제약조건 이름 규칙을 지켜 두면 이런 조회가 쉬워져요. (SEARCH_CONDITION은 LONG 타입이라 LIKE를 바로 쓸 수 없어요.)</p>
`
  },
  {
    n: 303,
    sql: String.raw`SELECT table_name, constraint_name
FROM user_constraints
WHERE constraint_type = 'R'
  AND r_constraint_name IN (SELECT constraint_name
                            FROM user_constraints
                            WHERE table_name = 'DEPT_T'
                              AND constraint_type IN ('P', 'U'));`,
    mode: "self",
    kw: ["R_CONSTRAINT_NAME", "'DEPT_T'", "'R'"],
    lv: 3,
    exp: String.raw`<p>자식의 FK는 부모의 PK(또는 UNIQUE) 이름을 R_CONSTRAINT_NAME에 기억해요. 부모의 PK 이름을 먼저 찾고, 그 이름을 가리키는 FK를 찾아요.</p>
`
  },
  {
    n: 304,
    sql: String.raw`ALTER TABLE emp_t ADD (
  phone     VARCHAR2(15),
  hire_date DATE DEFAULT SYSDATE
);`,
    mode: "self",
    kw: ["ALTER TABLE", "ADD", "DEFAULT SYSDATE"],
    lv: 1,
    exp: String.raw`<p>ADD로 여러 컬럼을 괄호 안에 한 번에 넣을 수 있어요. 새 컬럼은 항상 맨 뒤에 붙어요.</p>
`
  },
  {
    n: 305,
    sql: String.raw`ALTER TABLE emp_t MODIFY (
  name   VARCHAR2(50),
  salary DEFAULT 1000
);`,
    mode: "self",
    kw: ["MODIFY", "VARCHAR2(50)", "DEFAULT 1000"],
    lv: 2,
    exp: String.raw`<p>MODIFY로 크기, 타입, 기본값을 바꿔요. 크기를 늘리는 건 언제나 되지만, 줄이거나 타입을 바꾸려면 컬럼이 비어 있어야 할 수 있어요. 기본값 변경은 그 뒤에 들어오는 행부터 적용돼요.</p>
`
  },
  {
    n: 306,
    sql: String.raw`ALTER TABLE emp_t ADD CONSTRAINT emp_t_phone_uk UNIQUE (phone);

SELECT constraint_name, constraint_type
FROM user_constraints
WHERE table_name = 'EMP_T';

ALTER TABLE emp_t DROP CONSTRAINT emp_t_phone_uk;`,
    mode: "self",
    kw: ["ADD CONSTRAINT", "UNIQUE", "DROP CONSTRAINT"],
    lv: 2,
    exp: String.raw`<p>제약조건 추가는 <code>ADD CONSTRAINT 이름 종류 (컬럼)</code>, 삭제는 <code>DROP CONSTRAINT 이름</code>이에요. 이름을 붙여 둬야 지울 때 편해요.</p>
`
  },
  {
    n: 307,
    sql: String.raw`-- ③ 에러: ORA-02293 (체크 제약조건을 검증할 수 없음)
-- 꺼 둔 사이 ②에서 급여 100인 행이 들어갔고,
-- ENABLE은 기존 데이터까지 검사하기 때문에 실패해요.

-- 해결: 규칙에 어긋난 행을 고치거나 지운 뒤 다시 ENABLE
UPDATE emp_t SET salary = 500 WHERE id = 1;   -- 또는 DELETE
ALTER TABLE emp_t ENABLE CONSTRAINT emp_t_salary_ck;`,
    mode: "self",
    kw: ["02293|위반", "ENABLE"],
    lv: 3,
    exp: String.raw`<p>DISABLE하면 그동안은 검사를 안 해요. 다시 ENABLE할 때는 이미 들어 있는 행도 전부 검사해서, 하나라도 어긋나면 켜지지 않아요.</p>
`
  },
  {
    n: 308,
    sql: String.raw`-- ① 2행 : DELETE는 DML이라 ROLLBACK으로 되돌아와요.
-- ② 0행 : TRUNCATE는 DDL이라 자동 COMMIT돼서 되돌릴 수 없어요.
-- ③ 테이블은 남아 있어요. TRUNCATE는 데이터만 지우고 구조는 남겨요.`,
    mode: "self",
    kw: ["2", "0"],
    lv: 2,
    exp: String.raw`<p>DELETE는 행 단위로 지우고 ROLLBACK이 가능해요. TRUNCATE는 모든 행을 한 번에 지우고 되돌릴 수 없어요. DROP은 테이블 자체를 없애요.</p>
`
  },
  {
    n: 309,
    sql: String.raw`RENAME tmp_t TO tmp_test;
DROP TABLE tmp_test;
SELECT table_name FROM user_tables;`,
    mode: "self",
    kw: ["RENAME", "DROP TABLE"],
    lv: 1,
    exp: String.raw`<p>RENAME 옛이름 TO 새이름으로 바꿔요. DROP TABLE은 구조와 데이터를 모두 지우는 DDL이라 되돌릴 수 없어요(휴지통 기능은 교안 밖).</p>
`
  },
  {
    n: 310,
    sql: String.raw`COMMENT ON TABLE emp_t IS '실습용 직원 테이블';
COMMENT ON COLUMN emp_t.salary IS '월급(만원)';

SELECT * FROM user_tab_comments WHERE table_name = 'EMP_T';
SELECT * FROM user_col_comments WHERE table_name = 'EMP_T';`,
    mode: "self",
    kw: ["COMMENT ON TABLE", "COMMENT ON COLUMN", "USER_TAB_COMMENTS|USER_COL_COMMENTS"],
    lv: 1,
    exp: String.raw`<p>테이블 설명은 USER_TAB_COMMENTS, 컬럼 설명은 USER_COL_COMMENTS에서 볼 수 있어요. 컬럼은 <code>테이블.컬럼</code>으로 지정해요.</p>
`
  },
  {
    n: 311,
    sql: String.raw`-- 에러: ORA-02449 (외래 키에 의해 참조되는 고유/기본 키가 테이블에 있습니다)
-- emp_t의 FK가 dept_t(id)를 참조하고 있어서 부모 테이블을 지울 수 없어요.

DROP TABLE dept_t CASCADE CONSTRAINTS;   -- (실행하지 마세요)
-- dept_t는 지워지고, emp_t에 걸린 FK 제약조건(emp_t_dept_id_fk)만 같이 지워져요.
-- emp_t 테이블과 데이터는 그대로 남아요.`,
    mode: "self",
    kw: ["02449", "CASCADE CONSTRAINTS"],
    lv: 2,
    exp: String.raw`<p>CASCADE CONSTRAINTS는 자식 테이블을 지우는 게 아니라, 자식에 걸린 FK 규칙만 없애요.</p>
`
  },
  {
    n: 312,
    sql: String.raw`CREATE TABLE dept_copy AS SELECT * FROM s_dept;   -- 11행 복사
RENAME dept_copy TO dept_bak;
TRUNCATE TABLE dept_bak;                            -- 데이터만 전부 삭제, 구조는 남음
SELECT COUNT(*) FROM dept_bak;                      -- 0
DROP TABLE dept_bak;                                -- 테이블 자체 삭제`,
    mode: "self",
    kw: ["AS SELECT", "RENAME", "TRUNCATE", "DROP TABLE"],
    lv: 2,
    exp: String.raw`<p>RENAME, TRUNCATE, DROP은 모두 DDL이라 자동 COMMIT되고 ROLLBACK할 수 없어요. 브라우저 실행기에서도 순서대로 실행해 볼 수 있어요.</p>
`
  },
  {
    n: 313,
    sql: String.raw`ALTER TABLE dept_t ADD CONSTRAINT dept_t_name_uk UNIQUE (name);
-- 실패: ORA-02299 (중복 키가 있어서 제약조건을 검증할 수 없음)
-- dept_t에는 '영업부'가 5개, '기획부'가 4개 들어 있어서 이미 중복이 있어요.`,
    mode: "self",
    kw: ["ADD CONSTRAINT", "UNIQUE", "중복"],
    lv: 3,
    exp: String.raw`<p>제약조건을 추가할 때는 이미 들어 있는 데이터도 검사해요. 규칙에 어긋나는 행이 하나라도 있으면 추가할 수 없어요. 먼저 데이터를 정리하거나 다른 컬럼 조합으로 규칙을 정해야 해요.</p>
`
  },
  {
    n: 314,
    sql: String.raw`-- (가) TRUNCATE : 전부 한 번에, 빠르게. 구조는 남음
-- (나) DELETE   : WHERE로 일부만 지울 수 있는 것은 DELETE뿐
-- (다) DROP     : 테이블 자체를 삭제
-- (라) DELETE   : DML이라 COMMIT 전이면 ROLLBACK 가능`,
    mode: "self",
    kw: ["TRUNCATE", "DELETE", "DROP"],
    lv: 1,
    exp: String.raw`<p>TRUNCATE와 DROP은 DDL이라 되돌릴 수 없어요. 일부만 지우거나 되돌릴 가능성이 있으면 DELETE를 써요.</p>
`
  },
  {
    n: 315,
    sql: String.raw`-- CREATE, ALTER, DROP, RENAME, TRUNCATE, COMMENT
-- 실행되기 전에 앞의 트랜잭션이 자동으로 COMMIT되고, DDL 자신도 바로 확정돼요.`,
    mode: "self",
    kw: ["CREATE", "ALTER", "DROP", "TRUNCATE"],
    lv: 1,
    exp: String.raw`<p>DDL은 데이터가 아니라 &quot;구조&quot;를 정의하는 명령이에요. ROLLBACK으로 되돌릴 수 없어요.</p>
`
  },
  {
    n: 316,
    sql: String.raw`ALTER TABLE mem_t ADD (email VARCHAR2(30));

SELECT id, name, email FROM mem_t ORDER BY id;   -- email은 모두 NULL`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE mem_t (id NUMBER(5), name VARCHAR2(20), phone VARCHAR2(15), memo VARCHAR2(100));
INSERT INTO mem_t VALUES (1, '김하늘', '010-1111-2222', '첫 가입');
INSERT INTO mem_t VALUES (2, '이바다', NULL, NULL)`,
    order: [0],
    exp: String.raw`<p>새 컬럼은 맨 뒤에 붙고, 이미 있던 행의 값은 NULL(기본값이 있으면 기본값)이 돼요.</p>
`
  },
  {
    n: 317,
    sql: String.raw`ALTER TABLE mem_t DROP COLUMN memo;

SELECT * FROM mem_t ORDER BY id;`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE mem_t (id NUMBER(5), name VARCHAR2(20), phone VARCHAR2(15), memo VARCHAR2(100));
INSERT INTO mem_t VALUES (1, '김하늘', '010-1111-2222', '첫 가입');
INSERT INTO mem_t VALUES (2, '이바다', NULL, NULL)`,
    order: [0],
    exp: String.raw`<p>컬럼을 지우면 그 컬럼의 데이터도 모두 사라지고 되돌릴 수 없어요.</p>
`
  },
  {
    n: 318,
    sql: String.raw`RENAME mem_t TO member_old;

SELECT id, name FROM member_old ORDER BY id;`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE mem_t (id NUMBER(5), name VARCHAR2(20), phone VARCHAR2(15), memo VARCHAR2(100));
INSERT INTO mem_t VALUES (1, '김하늘', '010-1111-2222', '첫 가입');
INSERT INTO mem_t VALUES (2, '이바다', NULL, NULL)`,
    order: [0],
    exp: String.raw`<p>RENAME 옛이름 TO 새이름이에요. <code>ALTER TABLE mem_t RENAME TO member_old;</code>로 써도 돼요.</p>
`
  },
  {
    n: 319,
    sql: String.raw`ALTER TABLE mem_t RENAME COLUMN phone TO tel;

SELECT id, tel FROM mem_t ORDER BY id;`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE mem_t (id NUMBER(5), name VARCHAR2(20), phone VARCHAR2(15), memo VARCHAR2(100));
INSERT INTO mem_t VALUES (1, '김하늘', '010-1111-2222', '첫 가입');
INSERT INTO mem_t VALUES (2, '이바다', NULL, NULL)`,
    order: [0],
    exp: String.raw`<p>컬럼 이름만 바뀌고 데이터는 그대로예요.</p>
`
  },
  {
    n: 320,
    sql: String.raw`TRUNCATE TABLE mem_t;

SELECT COUNT(*) FROM mem_t;   -- 0`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE mem_t (id NUMBER(5), name VARCHAR2(20), phone VARCHAR2(15), memo VARCHAR2(100));
INSERT INTO mem_t VALUES (1, '김하늘', '010-1111-2222', '첫 가입');
INSERT INTO mem_t VALUES (2, '이바다', NULL, NULL)`,
    exp: String.raw`<p>TRUNCATE는 구조는 남기고 데이터만 한 번에 비워요. DDL이라 ROLLBACK할 수 없어요.</p>
`
  },
  {
    n: 321,
    sql: String.raw`ALTER TABLE mem_t ADD (point NUMBER(5) DEFAULT 100);
INSERT INTO mem_t (id, name) VALUES (3, '박구름');

SELECT id, name, point FROM mem_t ORDER BY id;   -- 세 명 모두 100`,
    mode: "auto",
    lv: 2,
    setup: String.raw`CREATE TABLE mem_t (id NUMBER(5), name VARCHAR2(20), phone VARCHAR2(15), memo VARCHAR2(100));
INSERT INTO mem_t VALUES (1, '김하늘', '010-1111-2222', '첫 가입');
INSERT INTO mem_t VALUES (2, '이바다', NULL, NULL)`,
    order: [0],
    exp: String.raw`<p>오라클은 DEFAULT를 붙여 컬럼을 추가하면 이미 있던 행에도 기본값을 채워 줘요. DEFAULT 없이 추가했다면 1, 2번은 NULL이에요.</p>
`
  },
  {
    n: 322,
    sql: String.raw`ALTER TABLE mem_t MODIFY (name VARCHAR2(5));
-- 이미 5자(바이트)보다 긴 값이 있으면 ORA-01441 에러가 나요.
-- 줄이려는 크기보다 긴 값이 하나도 없을 때(또는 컬럼이 비어 있을 때)만 줄일 수 있어요.`,
    mode: "self",
    kw: ["MODIFY", "01441|긴 값|비어"],
    lv: 2,
    exp: String.raw`<p>크기를 늘리는 것은 언제든 되지만, 줄이거나 타입을 바꿀 때는 기존 데이터가 걸림돌이 돼요.</p>
`
  },
  {
    n: 323,
    sql: String.raw`-- 그 컬럼의 값이 모두 NULL이어야(또는 테이블이 비어 있어야) 타입을 바꿀 수 있어요.
-- 값이 있으면 ORA-01439 에러가 나요.
-- 값을 살리려면 새 컬럼을 만들어 TO_NUMBER로 옮긴 뒤 옛 컬럼을 지워요.`,
    mode: "self",
    kw: ["NULL|비어", "01439"],
    lv: 2,
    exp: String.raw`<p>타입을 바꾸는 일은 데이터 변환이 필요해서, 오라클이 자동으로 해 주지 않아요.</p>
`
  },
  {
    n: 324,
    sql: String.raw`DELETE FROM mem_t WHERE id <> 2;
ALTER TABLE mem_t DROP COLUMN phone;
ALTER TABLE mem_t DROP COLUMN memo;

SELECT * FROM mem_t;`,
    mode: "auto",
    lv: 2,
    setup: String.raw`CREATE TABLE mem_t (id NUMBER(5), name VARCHAR2(20), phone VARCHAR2(15), memo VARCHAR2(100));
INSERT INTO mem_t VALUES (1, '김하늘', '010-1111-2222', '첫 가입');
INSERT INTO mem_t VALUES (2, '이바다', NULL, NULL)`,
    exp: String.raw`<p>DML(DELETE) 뒤에 DDL(ALTER)을 실행하면 DELETE가 자동으로 COMMIT돼요. 지운 행은 더 이상 되돌릴 수 없어요.</p>
`
  },
  {
    n: 325,
    sql: String.raw`CREATE TABLE emp_sal AS SELECT id, name, salary FROM s_emp;
ALTER TABLE emp_sal RENAME COLUMN salary TO pay;

SELECT name, pay FROM emp_sal WHERE pay >= 3000 ORDER BY pay DESC;`,
    mode: "auto",
    lv: 2,
    order: [1],
    exp: String.raw`<p>CREATE TABLE ... AS SELECT로 만든 테이블도 보통 테이블처럼 ALTER할 수 있어요.</p>
`
  },
  {
    n: 326,
    sql: String.raw`ALTER TABLE mem_t ADD (phone2 VARCHAR2(11));
UPDATE mem_t SET phone2 = REPLACE(phone, '-', '');
ALTER TABLE mem_t DROP COLUMN phone;
ALTER TABLE mem_t RENAME COLUMN phone2 TO phone;

SELECT id, phone FROM mem_t ORDER BY id;   -- 01011112222, NULL`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE mem_t (id NUMBER(5), name VARCHAR2(20), phone VARCHAR2(15), memo VARCHAR2(100));
INSERT INTO mem_t VALUES (1, '김하늘', '010-1111-2222', '첫 가입');
INSERT INTO mem_t VALUES (2, '이바다', NULL, NULL)`,
    order: [0],
    exp: String.raw`<p>컬럼의 타입이나 형식을 크게 바꿀 때 쓰는 순서예요(새 컬럼 → 값 옮기기 → 옛 컬럼 삭제 → 이름 바꾸기). 컬럼 위치는 맨 뒤로 바뀌어요.</p>
`
  },
  {
    n: 327,
    sql: String.raw`--            지우는 대상     WHERE   ROLLBACK   종류
-- DELETE     데이터          가능     가능       DML
-- TRUNCATE   데이터(전부)    불가     불가       DDL
-- DROP       구조 + 데이터   불가     불가       DDL`,
    mode: "self",
    kw: ["DML", "DDL", "ROLLBACK"],
    lv: 3,
    exp: String.raw`<p>TRUNCATE는 행을 하나씩 지우지 않고 공간을 통째로 비워서 DELETE보다 훨씬 빨라요. 대신 되돌릴 수 없어요.</p>
`
  },
  {
    n: 328,
    sql: String.raw`ALTER TABLE emp_t DROP COLUMN id CASCADE CONSTRAINTS;
-- 이 컬럼에 걸린 PK와, 이 PK를 참조하는 자식 테이블의 FK 제약조건이 함께 지워져요.
-- 자식 테이블의 데이터와 컬럼은 남아요.`,
    mode: "self",
    kw: ["CASCADE CONSTRAINTS"],
    lv: 3,
    exp: String.raw`<p>테이블을 지울 때와 마찬가지로, 컬럼을 지울 때도 걸려 있는 제약조건 때문에 막힐 수 있어요.</p>
`
  },
  {
    n: 329,
    sql: String.raw`INSERT INTO mem_t (id, name) VALUES (3, '박구름');
ALTER TABLE mem_t ADD (point NUMBER(5) DEFAULT 0);   -- 자동 COMMIT: 3번 INSERT 확정
DELETE FROM mem_t WHERE id = 1;
ROLLBACK;                                            -- DELETE만 취소

SELECT id, name FROM mem_t ORDER BY id;   -- 1, 2, 3`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE mem_t (id NUMBER(5), name VARCHAR2(20), phone VARCHAR2(15), memo VARCHAR2(100));
INSERT INTO mem_t VALUES (1, '김하늘', '010-1111-2222', '첫 가입');
INSERT INTO mem_t VALUES (2, '이바다', NULL, NULL)`,
    order: [0],
    exp: String.raw`<p>ROLLBACK은 마지막 COMMIT 이후만 취소해요. ALTER가 자동 COMMIT을 했으니 그 뒤의 DELETE만 취소되고, 박구름은 남아요.</p>
`
  },
  {
    n: 330,
    sql: String.raw`-- 이미 있는 행에는 grade 값이 없어서(NULL) NOT NULL을 지킬 수 없어요. (ORA-01758)
-- 방법 1: 기본값을 함께 줘요.
ALTER TABLE mem_t ADD (grade NUMBER(1) DEFAULT 1 NOT NULL);
-- 방법 2: NOT NULL 없이 추가 → UPDATE로 값 채우기 → MODIFY로 NOT NULL 추가`,
    mode: "self",
    kw: ["DEFAULT", "01758|기존|이미"],
    lv: 3,
    exp: String.raw`<p>빈 테이블이면 바로 추가할 수 있어요. 데이터가 있을 때는 기존 행을 어떻게 채울지 먼저 정해야 해요.</p>
`
  },
  {
    n: 331,
    sql: String.raw`CREATE TABLE dept_x AS SELECT * FROM s_dept;
UPDATE dept_x SET name = name || '-' || region_id;
ALTER TABLE dept_x DROP COLUMN region_id;

SELECT * FROM dept_x WHERE name LIKE '영업부%' ORDER BY id;`,
    mode: "auto",
    lv: 3,
    order: [0],
    exp: String.raw`<p>컬럼을 지우기 전에 그 값을 다른 컬럼에 옮겨 두면 정보를 잃지 않아요. 순서를 바꾸면 region_id가 이미 없어서 UPDATE가 실패해요.</p>
`
  },
  {
    n: 332,
    sql: String.raw`-- SET UNUSED : 컬럼을 "안 쓰는 것"으로 표시만 해서 바로 안 보이게 해요. 실제 공간 정리는 하지 않아 빨라요.
--              나중에 한가할 때 ALTER TABLE ... DROP UNUSED COLUMNS; 로 실제로 지워요.
-- DROP COLUMN: 모든 행에서 그 컬럼 값을 지우는 작업을 바로 해서, 큰 테이블에서는 오래 걸려요.
-- 둘 다 되돌릴 수는 없어요.`,
    mode: "self",
    kw: ["DROP UNUSED", "표시|안 보"],
    lv: 3,
    exp: String.raw`<p>교안 범위를 조금 넘는 내용이지만, 큰 테이블을 다룰 때 알아 두면 좋아요.</p>
`
  },
  {
    n: 333,
    sql: String.raw`CREATE TABLE mem_bak AS SELECT * FROM mem_t;
TRUNCATE TABLE mem_t;
INSERT INTO mem_t SELECT * FROM mem_bak WHERE id = 1;

SELECT id, name FROM mem_t;`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE mem_t (id NUMBER(5), name VARCHAR2(20), phone VARCHAR2(15), memo VARCHAR2(100));
INSERT INTO mem_t VALUES (1, '김하늘', '010-1111-2222', '첫 가입');
INSERT INTO mem_t VALUES (2, '이바다', NULL, NULL)`,
    exp: String.raw`<p>TRUNCATE는 되돌릴 수 없으니, 지우기 전에 CREATE TABLE ... AS SELECT로 백업을 만들어 두는 습관이 좋아요. 구조가 같으니 INSERT ... SELECT *로 바로 옮길 수 있어요.</p>
`
  },
  {
    n: 334,
    sql: "GRANT CREATE TABLE, CREATE VIEW TO test;",
    mode: "self",
    kw: ["GRANT", "CREATE TABLE", "CREATE VIEW", "TO TEST"],
    lv: 1,
    exp: String.raw`<p>시스템 권한은 ON 없이 <code>GRANT 권한 TO 사용자</code>로 줘요. 여러 권한을 쉼표로 한 번에 줄 수 있어요. 시스템 권한은 보통 DBA가 줘요.</p>
`
  },
  {
    n: 335,
    sql: "REVOKE CREATE TABLE, CREATE VIEW FROM test;",
    mode: "self",
    kw: ["REVOKE", "FROM TEST"],
    lv: 1,
    exp: String.raw`<p>회수는 TO 대신 FROM을 써요. 시스템 권한을 빼앗아도 TEST가 이미 만든 테이블이 지워지지는 않아요.</p>
`
  },
  {
    n: 336,
    sql: String.raw`-- 시스템 권한: CREATE SESSION, CREATE SEQUENCE, DROP ANY TABLE
-- 객체 권한  : SELECT ON s_emp, UPDATE ON emp_t, ALTER ON emp_t_seq`,
    mode: "self",
    kw: ["CREATE SESSION", "DROP ANY TABLE", "ON"],
    lv: 1,
    exp: String.raw`<p>시스템 권한은 &quot;어떤 SQL 문장을 실행할 수 있는가&quot;, 객체 권한은 &quot;특정 객체에 무엇을 할 수 있는가&quot;예요. 객체 권한에는 항상 ON 객체가 붙어요.</p>
`
  },
  {
    n: 337,
    sql: String.raw`GRANT SELECT ON emp_t TO test;
SELECT * FROM user_tab_privs_made;

REVOKE SELECT ON emp_t FROM test;
SELECT * FROM user_tab_privs_made;`,
    mode: "self",
    kw: ["GRANT SELECT ON", "REVOKE", "USER_TAB_PRIVS_MADE"],
    lv: 1,
    exp: String.raw`<p>객체 권한은 <code>GRANT 권한 ON 객체 TO 사용자</code>, 회수는 <code>REVOKE 권한 ON 객체 FROM 사용자</code>예요. 내가 준 권한은 USER_TAB_PRIVS_MADE, 받은 권한은 USER_TAB_PRIVS_RECD에서 봐요.</p>
`
  },
  {
    n: 338,
    sql: String.raw`GRANT UPDATE (salary) ON emp_t TO test;
SELECT * FROM user_col_privs_made;

REVOKE UPDATE ON emp_t FROM test;`,
    mode: "self",
    kw: ["UPDATE (SALARY)|UPDATE(SALARY)", "USER_COL_PRIVS_MADE", "REVOKE"],
    lv: 2,
    exp: String.raw`<p>UPDATE는 컬럼을 지정해서 줄 수 있어요. 컬럼 단위 권한은 USER_COL_PRIVS_MADE에서 봐요. 회수할 때는 컬럼을 지정할 수 없어서 UPDATE 권한 전체를 빼요.</p>
`
  },
  {
    n: 339,
    sql: "GRANT SELECT ON s_dept TO PUBLIC;",
    mode: "self",
    kw: ["GRANT SELECT ON", "PUBLIC"],
    lv: 1,
    exp: String.raw`<p>PUBLIC은 &quot;모든 사용자&quot;를 뜻해요. 지금 있는 사용자뿐 아니라 앞으로 만들어질 사용자에게도 적용돼요.</p>
`
  },
  {
    n: 340,
    sql: "GRANT INSERT, DELETE ON emp_t TO test WITH GRANT OPTION;",
    mode: "self",
    kw: ["INSERT", "DELETE", "ON EMP_T", "WITH GRANT OPTION"],
    lv: 2,
    exp: String.raw`<p>객체 권한을 다시 줄 수 있게 하려면 WITH GRANT OPTION을 붙여요. 이렇게 준 권한을 회수하면, TEST가 다른 사람에게 준 권한도 함께 회수돼요(341번).</p>
`
  },
  {
    n: 341,
    sql: String.raw`-- (가) WITH GRANT OPTION (객체 권한): C의 권한도 함께 회수돼요.
-- (나) WITH ADMIN OPTION (시스템 권한): C의 권한은 그대로 남아요.`,
    mode: "self",
    kw: ["회수|사라", "남"],
    lv: 3,
    exp: String.raw`<p>객체 권한은 회수가 연쇄적으로 이어지고, 시스템 권한은 이어지지 않아요. &quot;Grant는 같이 사라지고, Admin은 남는다&quot;로 외우면 쉬워요.</p>
`
  },
  {
    n: 342,
    sql: "GRANT SELECT, UPDATE ON s_dept TO test;",
    mode: "self",
    kw: ["GRANT", "ON S_DEPT", "TO TEST"],
    lv: 1,
    exp: String.raw`<p>객체 권한은 <code>GRANT 권한, 권한 ON 객체 TO 사용자</code> 형식이에요. 여러 권한을 쉼표로 이어 쓸 수 있어요.</p>
`
  },
  {
    n: 343,
    sql: String.raw`-- GRANT  : 권한을 줘요.
-- REVOKE : 권한을 빼앗아요.`,
    mode: "self",
    kw: ["GRANT", "REVOKE"],
    lv: 1,
    exp: String.raw`<p>DCL은 &quot;누가 무엇을 할 수 있는지&quot;를 정하는 명령이에요. DDL처럼 실행하면 자동 COMMIT돼요.</p>
`
  },
  {
    n: 344,
    sql: String.raw`SELECT * FROM student.s_emp;
-- 다른 사용자의 객체는 "소유자.객체" 형식으로 써요.`,
    mode: "self",
    kw: ["STUDENT.S_EMP"],
    lv: 1,
    exp: String.raw`<p>소유자를 빼고 쓰면 TEST 자신의 s_emp를 찾아서 ORA-00942가 나요. 매번 소유자를 쓰기 번거로우면 시노님(13장)을 만들어요.</p>
`
  },
  {
    n: 345,
    sql: "REVOKE ALL ON s_dept FROM test;",
    mode: "self",
    kw: ["REVOKE", "ALL", "FROM TEST"],
    lv: 1,
    exp: String.raw`<p>ALL은 그 객체에 줄 수 있는 모든 권한(SELECT, INSERT, UPDATE, DELETE 등)이에요. REVOKE는 TO가 아니라 FROM을 써요.</p>
`
  },
  {
    n: 346,
    sql: String.raw`GRANT UPDATE (name, salary) ON emp_t TO test;
-- INSERT도 컬럼을 지정해서 줄 수 있어요: GRANT INSERT (id, name) ON emp_t TO test;
-- SELECT와 DELETE는 컬럼 단위로 줄 수 없어요.`,
    mode: "self",
    kw: ["UPDATE (NAME, SALARY)|UPDATE(NAME, SALARY)|UPDATE (NAME,SALARY)"],
    lv: 2,
    exp: String.raw`<p>컬럼 단위 권한은 USER_COL_PRIVS_MADE에서 확인해요. 특정 컬럼만 보여주고 싶으면 그 컬럼만 담은 뷰를 만들어 SELECT 권한을 줘요.</p>
`
  },
  {
    n: 347,
    sql: String.raw`-- WITH GRANT OPTION : 객체 권한에 붙여요. (GRANT SELECT ON s_emp TO test WITH GRANT OPTION;)
--   빼앗으면 그 사용자가 다시 준 권한도 함께 사라져요(연쇄 회수).
-- WITH ADMIN OPTION : 시스템 권한에 붙여요. (GRANT CREATE TABLE TO test WITH ADMIN OPTION;)
--   빼앗아도 그 사용자가 다른 사람에게 준 권한은 남아요.`,
    mode: "self",
    kw: ["객체", "시스템", "연쇄|함께"],
    lv: 2,
    exp: String.raw`<p>&quot;객체는 GRANT, 시스템은 ADMIN&quot;으로 외우고, 회수할 때 연쇄 여부가 반대라는 점을 기억하세요.</p>
`
  },
  {
    n: 348,
    sql: String.raw`-- 주인에게서 그 권한을 WITH GRANT OPTION으로 받았어야 해요.
-- 또는 GRANT ANY OBJECT PRIVILEGE 같은 관리자 시스템 권한이 있어야 해요.`,
    mode: "self",
    kw: ["WITH GRANT OPTION"],
    lv: 2,
    exp: String.raw`<p>기본적으로 객체 권한은 그 객체의 주인만 줄 수 있어요.</p>
`
  },
  {
    n: 349,
    sql: String.raw`-- 없어요. PUBLIC에 준 권한은 모든 사용자가 PUBLIC을 통해 갖는 것이라,
-- REVOKE SELECT ON s_dept FROM test; 는 효과가 없어요(또는 에러).
-- 빼려면 PUBLIC에서 빼고(REVOKE ... FROM PUBLIC), 필요한 사람에게만 다시 줘요.`,
    mode: "self",
    kw: ["FROM PUBLIC"],
    lv: 2,
    exp: String.raw`<p>PUBLIC은 &quot;모든 사용자&quot;를 뜻하는 특별한 묶음이에요. 꼭 필요할 때만 쓰세요.</p>
`
  },
  {
    n: 350,
    sql: String.raw`-- B: 만들 수 없어요. (권한이 빠짐)
-- C: 만들 수 있어요. 시스템 권한은 연쇄 회수되지 않아요.
-- B가 이미 만든 테이블은 그대로 남아요. 권한은 "만드는 행위"에 대한 것이에요.`,
    mode: "self",
    kw: ["연쇄|남아|남"],
    lv: 3,
    exp: String.raw`<p>객체 권한(WITH GRANT OPTION)이었다면 C의 권한도 함께 사라졌을 거예요.</p>
`
  },
  {
    n: 351,
    sql: String.raw`-- 뷰를 만들 때는 ROLE로 받은 권한이 인정되지 않아요.
-- TEST가 emp_t의 SELECT 권한을 ROLE을 통해 받았다면, 직접 받아야 해요.
GRANT SELECT ON emp_t TO test;`,
    mode: "self",
    kw: ["ROLE", "직접"],
    lv: 3,
    exp: String.raw`<p>뷰, 프로시저처럼 저장되는 객체는 주인이 &quot;직접 받은&quot; 권한만으로 만들어져요. ROLE은 켜고 끌 수 있어서, 저장 객체의 근거로 쓰이지 않아요.</p>
`
  },
  {
    n: 352,
    sql: String.raw`CREATE VIEW v_emp_public AS
SELECT id, name, title, dept_id FROM s_emp;

GRANT SELECT ON v_emp_public TO intern;
-- S_EMP 자체에는 권한을 주지 않아요.`,
    mode: "self",
    kw: ["CREATE VIEW", "GRANT SELECT ON"],
    lv: 3,
    exp: String.raw`<p>SELECT는 컬럼 단위로 줄 수 없어서, 보여줄 컬럼만 담은 뷰를 만들고 뷰에 권한을 줘요. 뷰가 보안 도구로 쓰이는 대표적인 예예요.</p>
`
  },
  {
    n: 353,
    sql: String.raw`-- ANY가 붙으면 내 것뿐 아니라 DB 안의 모든 사용자의 테이블에 적용돼요.
-- DROP ANY TABLE을 받은 사용자는 다른 사람의 테이블도 지울 수 있어요.`,
    mode: "self",
    kw: ["모든|다른 사용자"],
    lv: 3,
    exp: String.raw`<p>&quot;최소 권한 원칙&quot;: 꼭 필요한 권한만, 필요한 범위에만 주는 것이 안전해요.</p>
`
  },
  {
    n: 354,
    sql: String.raw`GRANT SELECT ON s_emp      TO audit;
GRANT SELECT ON s_customer TO audit;
GRANT INSERT (id, name) ON emp_t TO clerk;
GRANT SELECT ON emp_t TO manager WITH GRANT OPTION;`,
    mode: "self",
    kw: ["TO AUDIT", "INSERT (ID, NAME)|INSERT(ID, NAME)|INSERT (ID,NAME)", "WITH GRANT OPTION"],
    lv: 3,
    exp: String.raw`<p>객체 권한은 한 번에 객체 하나에만 줄 수 있어서, 테이블이 둘이면 GRANT도 두 번이에요.</p>
`
  },
  {
    n: 355,
    sql: String.raw`REVOKE CREATE SESSION FROM olduser;
-- (CONNECT ROLE로 받았다면 REVOKE connect FROM olduser;)
-- 또는 계정을 잠가요: ALTER USER olduser ACCOUNT LOCK;`,
    mode: "self",
    kw: ["CREATE SESSION|CONNECT|ACCOUNT LOCK"],
    lv: 3,
    exp: String.raw`<p>DROP USER ... CASCADE는 그 사용자의 객체까지 모두 지워요. 객체를 살려야 하면 접속 권한만 빼거나 계정을 잠가요.</p>
`
  },
  {
    n: 356,
    sql: String.raw`CREATE ROLE hr_role;
GRANT SELECT, UPDATE ON s_emp TO hr_role;
GRANT hr_role TO test;`,
    mode: "self",
    kw: ["CREATE ROLE", "TO HR_ROLE", "GRANT HR_ROLE TO"],
    lv: 2,
    exp: String.raw`<p>ROLE은 권한 꾸러미예요. ROLE을 만들고 → ROLE에 권한을 넣고 → 사용자에게 ROLE을 줘요. 나중에 ROLE에 권한을 더하면 그 ROLE을 받은 모든 사용자에게 바로 적용돼요.</p>
`
  },
  {
    n: 357,
    sql: String.raw`SELECT * FROM user_sys_privs;    -- 나에게 직접 준 시스템 권한
SELECT * FROM user_role_privs;   -- 나에게 준 ROLE (CONNECT, RESOURCE 등)`,
    mode: "self",
    kw: ["USER_SYS_PRIVS", "USER_ROLE_PRIVS"],
    lv: 2,
    exp: String.raw`<p>ROLE로 받은 권한은 USER_SYS_PRIVS에 하나하나 나오지 않고, USER_ROLE_PRIVS에 ROLE 이름으로 나와요.</p>
`
  },
  {
    n: 358,
    sql: String.raw`-- ROLE: 여러 권한을 하나로 묶어 이름을 붙인 것
-- 예: CONNECT (접속), RESOURCE (테이블·시퀀스 등 객체 만들기), DBA (관리자)`,
    mode: "self",
    kw: ["CONNECT", "RESOURCE"],
    lv: 1,
    exp: String.raw`<p>권한을 사람마다 하나씩 주는 대신 ROLE 하나만 주면 돼서 관리가 쉬워요.</p>
`
  },
  {
    n: 359,
    sql: String.raw`CREATE ROLE report_role;
GRANT SELECT ON s_emp  TO report_role;
GRANT SELECT ON s_dept TO report_role;
GRANT report_role TO test;

REVOKE SELECT ON s_dept FROM report_role;
-- TEST는 따로 바꿀 필요 없어요. ROLE이 바뀌면 그 ROLE을 받은 사용자 모두에게 반영돼요.`,
    mode: "self",
    kw: ["CREATE ROLE", "GRANT REPORT_ROLE TO TEST", "REVOKE SELECT ON S_DEPT FROM REPORT_ROLE"],
    lv: 2,
    exp: String.raw`<p>ROLE의 가장 큰 장점이에요. 권한을 받은 사람이 100명이어도 ROLE 하나만 고치면 돼요.</p>
`
  },
  {
    n: 360,
    sql: String.raw`SELECT role, privilege FROM role_sys_privs;
-- 내가 받은 ROLE 목록은 USER_ROLE_PRIVS에서 봐요.`,
    mode: "self",
    kw: ["ROLE_SYS_PRIVS"],
    lv: 2,
    exp: String.raw`<p>ROLE_SYS_PRIVS(ROLE에 든 시스템 권한), ROLE_TAB_PRIVS(ROLE에 든 객체 권한)를 보면 ROLE의 내용물을 알 수 있어요.</p>
`
  },
  {
    n: 361,
    sql: String.raw`CREATE ROLE base_role;
GRANT CREATE SESSION TO base_role;

CREATE ROLE dev_role;
GRANT base_role TO dev_role;
GRANT CREATE TABLE TO dev_role;

GRANT dev_role TO dev1;   -- dev1은 CREATE SESSION과 CREATE TABLE을 모두 가져요`,
    mode: "self",
    kw: ["GRANT BASE_ROLE TO DEV_ROLE", "GRANT DEV_ROLE TO DEV1"],
    lv: 3,
    exp: String.raw`<p>ROLE을 겹쳐서 쓰면 공통 권한은 한 곳(base_role)에서만 관리할 수 있어요.</p>
`
  },
  {
    n: 362,
    sql: String.raw`-- ROLE은 접속할 때 켜져요. 이미 접속한 세션에는 새로 받은 ROLE이 바로 켜지지 않을 수 있어요.
-- 다시 접속하거나, SET ROLE dev_role; 로 켜면 돼요.
-- (직접 받은 시스템·객체 권한은 바로 적용돼요.)`,
    mode: "self",
    kw: ["다시 접속|재접속|SET ROLE"],
    lv: 3,
    exp: String.raw`<p>권한을 줬는데 안 된다면, 다시 접속해 보는 것이 첫 번째 확인 방법이에요.</p>
`
  },
  {
    n: 363,
    sql: String.raw`SELECT * FROM user_sys_privs;    -- 직접 받은 시스템 권한
SELECT * FROM user_tab_privs;    -- 받은(또는 준) 객체 권한
SELECT * FROM user_role_privs;   -- 받은 ROLE
-- ROLE 안의 권한까지 보려면 ROLE_SYS_PRIVS, ROLE_TAB_PRIVS도 봐요.
-- 지금 세션에서 실제로 쓸 수 있는 권한 전체: SESSION_PRIVS`,
    mode: "self",
    kw: ["USER_SYS_PRIVS", "USER_TAB_PRIVS", "USER_ROLE_PRIVS"],
    lv: 3,
    exp: String.raw`<p>권한은 직접 받은 것과 ROLE로 받은 것이 섞여 있어서, 여러 사전을 함께 봐야 전체를 알 수 있어요.</p>
`
  },
  {
    n: 364,
    sql: String.raw`CREATE SEQUENCE emp_t_seq
  START WITH 100
  INCREMENT BY 10
  MAXVALUE 990
  NOCYCLE
  NOCACHE;

SELECT * FROM user_sequences;`,
    mode: "self",
    kw: ["START WITH 100", "INCREMENT BY 10", "MAXVALUE 990", "NOCACHE"],
    lv: 1,
    exp: String.raw`<p>NOCYCLE이면 990에 다다른 뒤 더 부르면 에러가 나요. NOCACHE는 번호를 미리 메모리에 만들어 두지 않는다는 뜻이에요. 기본값은 CACHE 20이에요.</p>
`
  },
  {
    n: 365,
    sql: String.raw`-- 1. 에러 ORA-08002: 이 세션에서 NEXTVAL을 아직 한 번도 안 불러서 CURRVAL이 없어요.
-- 2. 100, 110, 120
-- 3. 120 (CURRVAL은 번호를 올리지 않고 마지막 값을 보여줘요)`,
    mode: "self",
    kw: ["08002", "100", "120"],
    lv: 2,
    exp: String.raw`<p>CURRVAL은 &quot;내 세션에서 마지막으로 받은 번호&quot;라서, 접속한 뒤 NEXTVAL을 먼저 한 번 불러야 해요.</p>
`
  },
  {
    n: 366,
    sql: String.raw`INSERT INTO emp_t (id, name, salary, dept_id) VALUES (emp_t_seq.NEXTVAL, '가', 1000, 110); -- 130
INSERT INTO emp_t (id, name, salary, dept_id) VALUES (emp_t_seq.NEXTVAL, '나', 1000, 110); -- 140
INSERT INTO emp_t (id, name, salary, dept_id) VALUES (emp_t_seq.NEXTVAL, '다', 1000, 110); -- 150
COMMIT;
INSERT INTO emp_t (id, name, salary, dept_id) VALUES (emp_t_seq.NEXTVAL, '라', 1000, 110); -- 160
ROLLBACK;
INSERT INTO emp_t (id, name, salary, dept_id) VALUES (emp_t_seq.NEXTVAL, '마', 1000, 110); -- 170`,
    mode: "self",
    kw: ["NEXTVAL", "170"],
    lv: 3,
    exp: String.raw`<p>정답은 170이에요. 시퀀스는 트랜잭션과 상관없이 번호를 내주기 때문에 ROLLBACK해도 160은 돌아오지 않아요. 그래서 시퀀스 번호에는 중간에 빈 번호가 생길 수 있어요.</p>
`
  },
  {
    n: 367,
    sql: String.raw`ALTER SEQUENCE emp_t_seq START WITH 1;
-- 에러 ORA-02283: 시작 번호는 바꿀 수 없어요.

-- 1부터 다시 시작하려면 지우고 다시 만들어요.
DROP SEQUENCE emp_t_seq;
CREATE SEQUENCE emp_t_seq START WITH 1 INCREMENT BY 1 NOCACHE;`,
    mode: "self",
    kw: ["02283", "DROP SEQUENCE", "CREATE SEQUENCE"],
    lv: 2,
    exp: String.raw`<p>ALTER SEQUENCE로는 증가값, 최댓값, CYCLE, CACHE만 바꿀 수 있어요. START WITH는 만들 때만 정할 수 있어요.</p>
`
  },
  {
    n: 368,
    sql: String.raw`CREATE SEQUENCE order_seq START WITH 1 INCREMENT BY 1;
SELECT order_seq.NEXTVAL FROM dual;   -- 1`,
    mode: "self",
    kw: ["CREATE SEQUENCE", "NEXTVAL"],
    lv: 1,
    exp: String.raw`<p>START WITH와 INCREMENT BY를 생략해도 기본값이 1이라 <code>CREATE SEQUENCE order_seq;</code>만 써도 같아요.</p>
`
  },
  {
    n: 369,
    sql: String.raw`-- NEXTVAL : 다음 번호를 새로 발급해요(시퀀스 값이 커짐).
-- CURRVAL : 지금 세션에서 마지막으로 발급받은 번호를 다시 보여줘요(값이 바뀌지 않음).`,
    mode: "self",
    kw: ["NEXTVAL", "CURRVAL"],
    lv: 1,
    exp: String.raw`<p>CURRVAL은 그 세션에서 NEXTVAL을 한 번이라도 실행한 뒤에만 쓸 수 있어요.</p>
`
  },
  {
    n: 370,
    sql: String.raw`-- CYCLE  : 1, 2, 3, 1, 2   (MAXVALUE 다음에 MINVALUE(기본 1)부터 다시)
-- NOCYCLE: 1, 2, 3, 그다음은 에러(ORA-08004: MAXVALUE 초과)`,
    mode: "self",
    kw: ["1, 2, 3, 1, 2|1,2,3,1,2", "08004|에러"],
    lv: 2,
    exp: String.raw`<p>PK 번호를 만드는 시퀀스에 CYCLE을 쓰면 같은 번호가 다시 나와서 중복 에러가 나요. PK용 시퀀스는 NOCYCLE로 만들어요.</p>
`
  },
  {
    n: 371,
    sql: String.raw`-- 1) NEXTVAL로 번호를 받은 INSERT를 ROLLBACK했어요. 시퀀스는 ROLLBACK되지 않아요.
-- 2) CACHE로 미리 메모리에 올려 둔 번호가 DB 재시작 때 사라졌어요(20개씩 건너뜀).
-- 3) 다른 테이블이나 다른 사람이 같은 시퀀스에서 번호를 가져갔어요.`,
    mode: "self",
    kw: ["ROLLBACK", "CACHE"],
    lv: 3,
    exp: String.raw`<p>시퀀스는 &quot;중복 없는 번호&quot;를 보장할 뿐, &quot;빈틈없는 번호&quot;는 보장하지 않아요. 빈틈이 없어야 하는 번호(예: 세금계산서 번호)는 다른 방법이 필요해요.</p>
`
  },
  {
    n: 372,
    sql: String.raw`INSERT INTO emp_t (id, name) VALUES (emp_t_seq.NEXTVAL, '정달');
INSERT INTO cust_t (id, name, rep_id) VALUES (1, '새고객', emp_t_seq.CURRVAL);
COMMIT;`,
    mode: "self",
    kw: ["NEXTVAL", "CURRVAL"],
    lv: 3,
    exp: String.raw`<p>CURRVAL은 &quot;이 세션에서 마지막으로 받은 번호&quot;라서, 다른 사람이 그 사이에 NEXTVAL을 해도 내 값은 바뀌지 않아요.</p>
`
  },
  {
    n: 373,
    sql: String.raw`SELECT index_name, uniqueness
FROM user_indexes
WHERE table_name = 'S_EMP';
-- PK_S_EMP  UNIQUE`,
    mode: "self",
    kw: ["USER_INDEXES", "'S_EMP'"],
    lv: 1,
    exp: String.raw`<p>PRIMARY KEY나 UNIQUE 제약조건을 만들면 오라클이 중복 검사를 빠르게 하려고 같은 이름의 UNIQUE 인덱스를 자동으로 만들어요.</p>
`
  },
  {
    n: 374,
    sql: String.raw`CREATE INDEX s_emp_name_idx       ON s_emp (name);
CREATE INDEX s_emp_dept_title_idx ON s_emp (dept_id, title);

SELECT index_name, uniqueness FROM user_indexes WHERE table_name = 'S_EMP';
-- 3행: PK_S_EMP(UNIQUE), 새 인덱스 2개(NONUNIQUE)

DROP INDEX s_emp_name_idx;
DROP INDEX s_emp_dept_title_idx;`,
    mode: "self",
    kw: ["CREATE INDEX", "DROP INDEX"],
    lv: 2,
    exp: String.raw`<p>CREATE INDEX로 만든 일반 인덱스는 중복을 허용해서 NONUNIQUE예요. 결합 인덱스는 앞 컬럼(dept_id)이 조건에 있어야 잘 쓰여요.</p>
`
  },
  {
    n: 375,
    sql: String.raw`-- 쓸 수 있음: (가) = 비교, (나) LIKE '김%' (앞부분이 고정돼 있음)
-- 쓸 수 없음: (다) LIKE '%호' (앞이 %라 어디서부터 찾을지 모름)
--            (라) SUBSTR(name, 1, 1) (컬럼에 함수를 씌우면 인덱스를 못 씀)`,
    mode: "self",
    kw: ["가", "나", "다", "라"],
    lv: 2,
    exp: String.raw`<p>인덱스는 값을 정렬해 둔 목차라서, 앞부분이 정해져 있어야 찾아갈 수 있어요. 컬럼을 가공하면 목차의 값과 달라지니 쓰지 못해요. (라)는 <code>name LIKE &#39;김%&#39;</code>로 바꾸면 돼요.</p>
`
  },
  {
    n: 376,
    sql: String.raw`-- 조회를 빠르게 하려고 만들어요.
-- 책의 "찾아보기(색인)"처럼, 값과 그 값이 있는 위치(ROWID)를 정렬해 두어서
-- 처음부터 끝까지 다 읽지 않고 바로 찾아갈 수 있어요.`,
    mode: "self",
    kw: ["빠르|속도", "색인|찾아보기"],
    lv: 1,
    exp: String.raw`<p>대신 INSERT·UPDATE·DELETE 때마다 인덱스도 고쳐야 해서, DML은 조금 느려지고 저장 공간도 더 들어요.</p>
`
  },
  {
    n: 377,
    sql: String.raw`-- (나) 행이 적으면 전체를 읽어도 빨라서 인덱스가 필요 없어요.
-- (다) 값의 종류가 적으면 한 값이 전체의 절반이라, 인덱스로 찾아도 거의 다 읽어요.
-- (라) DML이 아주 많으면 인덱스 관리 비용이 커서 오히려 느려질 수 있어요.
-- (가)는 인덱스가 효과적인 경우예요.`,
    mode: "self",
    lv: 2,
    exp: String.raw`<p>인덱스는 &quot;많은 행 중 조금만 골라낼 때&quot; 효과가 커요.</p>
`
  },
  {
    n: 378,
    sql: String.raw`-- (가) 쓸 수 있어요. 두 컬럼을 모두 써요.
-- (나) 쓸 수 있어요. 첫 번째 컬럼만 써도 돼요.
-- (다) 잘 쓸 수 없어요. 첫 번째 컬럼(dept_id) 없이 두 번째 컬럼만으로는 정렬 순서를 따라갈 수 없어요.`,
    mode: "self",
    lv: 3,
    exp: String.raw`<p>결합 인덱스는 전화번호부처럼 &quot;성 → 이름&quot; 순으로 정렬돼 있어요. 이름만으로는 찾기 어려워요. 그래서 자주 쓰는 컬럼을 앞에 둬요.</p>
`
  },
  {
    n: 379,
    sql: String.raw`CREATE VIEW v_staff AS
SELECT id, name, salary, dept_id
FROM s_emp
WHERE title = '사원';

SELECT * FROM v_staff;   -- 10행`,
    mode: "self",
    kw: ["CREATE VIEW", "AS", "SELECT"],
    lv: 1,
    exp: String.raw`<p>뷰는 SELECT문을 이름 붙여 저장해 둔 가상 테이블이에요. 데이터를 따로 갖지 않고, 조회할 때마다 원본 테이블에서 가져와요. 이 문제는 브라우저 실행기에서도 실행돼요.</p>
`
  },
  {
    n: 380,
    sql: String.raw`CREATE VIEW v_emp_region AS
SELECT e.name AS emp_name, d.name AS dept_name, r.name AS region_name
FROM s_emp e, s_dept d, s_region r
WHERE e.dept_id = d.id
  AND d.region_id = r.id;

SELECT * FROM v_emp_region WHERE region_name = '서울특별시';   -- 9행`,
    mode: "self",
    kw: ["CREATE VIEW", "AS EMP_NAME|별명|AS", "'서울특별시'"],
    lv: 2,
    exp: String.raw`<p>세 테이블에 모두 name이 있어서 별명 없이 만들면 뷰 컬럼 이름이 겹쳐 에러(ORA-00957)가 나요. 뷰를 만들어 두면 복잡한 조인을 테이블처럼 간단히 조회할 수 있어요.</p>
`
  },
  {
    n: 381,
    sql: String.raw`CREATE VIEW v_dept_avg AS
SELECT dept_id, COUNT(*) AS cnt, AVG(salary) AS avg_sal
FROM s_emp
GROUP BY dept_id;

UPDATE v_dept_avg SET avg_sal = 2000 WHERE dept_id = 110;
-- 에러 ORA-01732: 이 뷰에서는 데이터 조작이 불가능해요`,
    mode: "self",
    kw: ["GROUP BY", "01732|불가|안 돼"],
    lv: 3,
    exp: String.raw`<p>그룹 함수나 GROUP BY로 만든 값은 원본의 어느 행을 바꿔야 할지 정할 수 없어서 DML이 안 돼요(복합 뷰). DISTINCT, 집합 연산자가 들어간 뷰도 마찬가지예요.</p>
`
  },
  {
    n: 382,
    sql: String.raw`INSERT INTO emp_t (id, name, salary, dept_id) VALUES (10, '홍길동', 2000, 110);
COMMIT;

CREATE VIEW v_emp_t_110 AS
SELECT * FROM emp_t WHERE dept_id = 110
WITH CHECK OPTION;

UPDATE v_emp_t_110 SET dept_id = 111 WHERE id = 10;
-- 에러 ORA-01402: 뷰의 WITH CHECK OPTION의 조건에 위배돼요

UPDATE v_emp_t_110 SET salary = 2500 WHERE id = 10;   -- 성공`,
    mode: "self",
    kw: ["WITH CHECK OPTION", "01402|위배"],
    lv: 3,
    exp: String.raw`<p>WITH CHECK OPTION은 뷰를 통해 바꾼 결과가 뷰의 조건(dept_id = 110)을 벗어나지 못하게 막아요. 급여는 바꿔도 여전히 110번 부서라 허용돼요.</p>
`
  },
  {
    n: 383,
    sql: String.raw`CREATE OR REPLACE VIEW v_staff AS
SELECT id, name, salary, dept_id
FROM s_emp
WHERE title = '사원'
WITH READ ONLY;

DELETE FROM v_staff;
-- 에러 ORA-42399 (예전 버전은 ORA-01733/01752): 읽기 전용 뷰에서는 DML을 할 수 없어요`,
    mode: "self",
    kw: ["OR REPLACE", "WITH READ ONLY"],
    lv: 2,
    exp: String.raw`<p>OR REPLACE는 같은 이름의 뷰가 있으면 바꿔 줘요. WITH READ ONLY를 붙이면 그 뷰로는 조회만 할 수 있어요.</p>
`
  },
  {
    n: 384,
    sql: String.raw`SELECT view_name, text FROM user_views;

DROP VIEW v_staff;
DROP VIEW v_emp_region;
DROP VIEW v_dept_avg;
DROP VIEW v_emp_t_110;

SELECT COUNT(*) FROM s_emp;   -- 25, 그대로`,
    mode: "self",
    kw: ["USER_VIEWS", "DROP VIEW"],
    lv: 2,
    exp: String.raw`<p>USER_VIEWS의 TEXT 컬럼에 뷰를 만든 SELECT문이 저장돼 있어요. 뷰는 SELECT문만 저장하니, 지워도 원본 테이블에는 영향이 없어요.</p>
`
  },
  {
    n: 385,
    sql: String.raw`CREATE SYNONYM emp FOR s_emp;
SELECT * FROM emp;
DROP SYNONYM emp;`,
    mode: "self",
    kw: ["CREATE SYNONYM", "FOR", "DROP SYNONYM"],
    lv: 1,
    exp: String.raw`<p>시노님은 객체의 별명이에요. 다른 사용자의 테이블을 <code>student.s_emp</code>처럼 길게 쓰지 않으려고 주로 써요. 모두가 쓰게 하려면 PUBLIC SYNONYM을 만들어요(권한 필요).</p>
`
  },
  {
    n: 386,
    sql: String.raw`CREATE VIEW v_dept110 AS
SELECT name, title FROM s_emp WHERE dept_id = 110;

SELECT * FROM v_dept110;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>뷰는 SELECT문에 이름을 붙여 저장한 것이에요. 조회할 때마다 안의 SELECT가 실행돼요.</p>
`
  },
  {
    n: 387,
    sql: String.raw`CREATE VIEW v_cust_phone AS
SELECT name, phone FROM s_customer;

SELECT * FROM v_cust_phone WHERE phone LIKE '010-2222%';`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>뷰도 테이블처럼 WHERE를 붙여 조회할 수 있어요.</p>
`
  },
  {
    n: 388,
    sql: String.raw`-- 1) 보안: 보여주고 싶은 행과 컬럼만 뷰로 만들어 권한을 줄 수 있어요.
-- 2) 편리: 복잡한 JOIN이나 계산을 뷰로 저장해 두면 간단한 SELECT로 쓸 수 있어요.`,
    mode: "self",
    kw: ["보안", "편리|간단|복잡"],
    lv: 1,
    exp: String.raw`<p>뷰는 데이터를 따로 저장하지 않아서, 원래 테이블이 바뀌면 뷰의 결과도 바로 바뀌어요.</p>
`
  },
  {
    n: 389,
    sql: String.raw`CREATE VIEW v_dname_sum AS
SELECT d.name AS dname, COUNT(*) AS cnt, SUM(e.salary) AS total
FROM s_emp e, s_dept d
WHERE e.dept_id = d.id
GROUP BY d.name;

SELECT dname, cnt FROM v_dname_sum WHERE cnt >= 5;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>뷰 안에 GROUP BY가 있으면 바깥에서는 그룹 결과에 WHERE를 걸 수 있어요. HAVING을 쓰지 않아도 돼요. 기획부(15명)와 영업부(7명)가 나와요.</p>
`
  },
  {
    n: 390,
    sql: String.raw`-- 보이지 않아요.
-- 뷰를 만들 때 *는 그 시점의 컬럼 목록으로 바뀌어 저장돼요.
-- 새 컬럼까지 보려면 CREATE OR REPLACE VIEW로 뷰를 다시 만들어요.`,
    mode: "self",
    kw: ["OR REPLACE|다시"],
    lv: 3,
    exp: String.raw`<p>USER_VIEWS의 TEXT를 보면 *가 아닌 실제 컬럼 이름으로 저장된 것을 확인할 수 있어요.</p>
`
  },
  {
    n: 391,
    sql: String.raw`CREATE VIEW v_emp_grade AS
SELECT e.name AS ename, d.name AS dname, s.grade
FROM s_emp e, s_dept d, salgrade s
WHERE e.dept_id = d.id
  AND e.salary BETWEEN s.losal AND s.hisal;

SELECT grade, COUNT(*) FROM v_emp_grade GROUP BY grade ORDER BY grade;`,
    mode: "auto",
    lv: 3,
    order: [0],
    exp: String.raw`<p>복잡한 3중 JOIN을 뷰로 숨기면, 그다음 분석 쿼리는 테이블 하나를 다루듯 쓸 수 있어요. 급여 0인 직원은 등급이 없어서 뷰에서 빠져요.</p>
`
  },
  {
    n: 392,
    sql: String.raw`-- 에러가 나요(ORA-01732: 이 뷰에는 DML을 할 수 없음).
-- 뷰로 DML을 할 수 없는 경우:
-- 1) 그룹 함수나 GROUP BY가 있을 때
-- 2) DISTINCT가 있을 때
-- 3) 계산식으로 만든 컬럼을 바꾸려 할 때 (예: salary * 12)
-- 그 밖에 WITH READ ONLY로 만든 뷰, ROWNUM이 있는 뷰 등`,
    mode: "self",
    kw: ["GROUP BY|그룹", "DISTINCT"],
    lv: 3,
    exp: String.raw`<p>뷰의 한 행이 원래 테이블의 어느 한 행과 정확히 짝지어지지 않으면 DML을 할 수 없어요.</p>
`
  },
  {
    n: 393,
    sql: String.raw`-- TEST 한 명 (TEST로 접속해서)
CREATE SYNONYM emp FOR student.s_emp;
-- 모든 사용자 (관리자 권한 필요)
CREATE PUBLIC SYNONYM emp FOR student.s_emp;

-- 시노님은 이름만 바꿔 줄 뿐 권한을 주지 않아요.
-- GRANT SELECT ON s_emp TO test; 가 따로 있어야 해요.`,
    mode: "self",
    kw: ["CREATE SYNONYM", "PUBLIC SYNONYM", "GRANT"],
    lv: 3,
    exp: String.raw`<p>시노님은 &quot;별명&quot;일 뿐이에요. 권한이 없으면 시노님으로 조회해도 ORA-00942가 나요.</p>
`
  },
  {
    n: 394,
    sql: String.raw`SELECT name, NVL(credit_rating, '미평가') AS 신용등급
FROM s_customer;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>NVL(값, 대신할 값)은 값이 NULL일 때만 대신할 값을 보여줘요. 두 값의 데이터 타입이 같아야 해요(문자 컬럼이면 문자).</p>
`
  },
  {
    n: 395,
    sql: String.raw`SELECT e.name, NVL(c.name, '담당 고객 없음') AS 고객
FROM s_emp e, s_customer c
WHERE e.id = c.sales_rep_id(+);`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>OUTER JOIN으로 짝이 없어 NULL이 된 고객 이름을 NVL로 바꿔요. 행 수는 167번과 같은 34행이에요.</p>
`
  },
  {
    n: 396,
    sql: String.raw`SELECT name,
       DECODE(dept_id, 101, '총무부',
                       102, '영업부', 103, '영업부', 104, '영업부', 105, '영업부', 106, '영업부',
                       110, '기획부', 111, '기획부', 112, '기획부', 113, '기획부',
                       118, '인사부') AS 부서
FROM s_emp;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>DECODE(식, 값1, 결과1, 값2, 결과2, ..., 그 외)는 &quot;같은 값&quot;만 비교할 수 있어서 102~106을 하나씩 다 써야 해요. 범위로 나누고 싶으면 CASE가 편해요.</p>
`
  },
  {
    n: 397,
    sql: String.raw`SELECT CASE WHEN salary >= 3000 THEN '고액'
            WHEN salary >= 1000 THEN '보통'
            ELSE '낮음'
       END AS 구간,
       COUNT(*)
FROM s_emp
GROUP BY CASE WHEN salary >= 3000 THEN '고액'
              WHEN salary >= 1000 THEN '보통'
              ELSE '낮음'
         END;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>CASE는 위에서부터 처음 맞는 WHEN 하나만 적용돼요. 그래서 두 번째 조건에 &quot;3000 미만&quot;을 따로 쓸 필요가 없어요. GROUP BY에는 별명을 쓸 수 없어서 CASE식을 그대로 한 번 더 써요.</p>
`
  },
  {
    n: 398,
    sql: String.raw`SELECT name, salary,
       CASE WHEN salary >= 4000 THEN 'A'
            WHEN salary >= 3000 THEN 'B'
            WHEN salary >= 2000 THEN 'C'
            WHEN salary >= 1000 THEN 'D'
            ELSE 'E'
       END AS 급여등급
FROM s_emp;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>DECODE(TRUNC(salary/1000), 0, &#39;E&#39;, ...)는 급여 0도 TRUNC(0/1000) = 0이라 &#39;E&#39;가 되어 25명이 모두 나와요. SALGRADE의 E등급은 500<del>999라서 급여 0인 4명은 어느 구간에도 들지 않고 빠져 21행이에요. 기준이 &quot;0</del>999&quot;인지 &quot;500~999&quot;인지가 달라요.</p>
`
  },
  {
    n: 399,
    sql: "SELECT name, NVL(commision_pct, 0) FROM s_emp;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>NVL(값, 대신할 값)은 값이 NULL일 때만 대신할 값을 돌려줘요. 실습 데이터는 커미션이 모두 0이라 결과는 같지만, NULL이 섞인 계산에서 꼭 필요해요.</p>
`
  },
  {
    n: 400,
    sql: String.raw`SELECT name, DECODE(sales_rep_id, 0, '담당 없음', '담당 있음') AS 담당
FROM s_customer;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>DECODE(값, 비교값, 같을 때, 다를 때)예요. 마지막 인자가 &quot;그 밖의 모든 경우&quot;예요.</p>
`
  },
  {
    n: 401,
    sql: String.raw`SELECT name,
       CASE title WHEN '사원' THEN 'STAFF'
                  WHEN '과장' THEN 'MANAGER'
                  ELSE 'ETC' END AS 구분
FROM s_emp;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p><code>CASE 컬럼 WHEN 값 THEN 결과 ... ELSE 결과 END</code>는 DECODE와 같은 일을 해요. END를 빠뜨리지 마세요.</p>
`
  },
  {
    n: 402,
    sql: String.raw`SELECT name, salary,
       CASE WHEN salary = 0 THEN '미지급' ELSE '지급' END AS 상태
FROM s_emp;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p><code>CASE WHEN 조건 THEN ...</code>은 WHEN 뒤에 어떤 조건식이든 쓸 수 있어서 DECODE보다 유연해요.</p>
`
  },
  {
    n: 403,
    sql: String.raw`SELECT *
FROM (SELECT dept_id, title FROM s_emp)
PIVOT (COUNT(*) FOR title IN ('사원' AS 사원, '과장' AS 과장, '영업대표이사' AS 영업대표이사))
ORDER BY dept_id;`,
    mode: "self",
    kw: ["PIVOT", "FOR TITLE IN"],
    lv: 2,
    exp: String.raw`<p>PIVOT은 FOR 컬럼의 값들을 열로 펼쳐요. 우리 데이터의 부장 직책은 &#39;기획부장&#39;, &#39;영업부장&#39;처럼 부서 이름이 붙어 있어서, &#39;부장&#39;과 정확히 같은 값이 없어 0이 나와요. PIVOT은 브라우저 실행기에서 지원하지 않으니 오라클에서 실행해 보세요.</p>
`
  },
  {
    n: 404,
    sql: String.raw`SELECT dept_id,
       COUNT(DECODE(title, '사원', 1))         AS 사원,
       COUNT(DECODE(title, '과장', 1))         AS 과장,
       COUNT(DECODE(title, '영업대표이사', 1)) AS 영업대표이사
FROM s_emp
GROUP BY dept_id
ORDER BY dept_id;`,
    mode: "auto",
    lv: 3,
    order: [0],
    exp: String.raw`<p>DECODE는 조건에 맞으면 1, 아니면 NULL을 돌려주고, COUNT는 NULL을 세지 않아요. 그래서 직책별 인원이 세어져요. <code>SUM(DECODE(title, &#39;사원&#39;, 1, 0))</code>으로도 같아요.</p>
`
  },
  {
    n: 405,
    sql: String.raw`SELECT dept_id, title, COUNT(*)
FROM s_emp
WHERE dept_id BETWEEN 110 AND 113
GROUP BY ROLLUP(dept_id, title);
-- title이 NULL인 행  = 부서별 소계 (4행)
-- 둘 다 NULL인 마지막 행 = 총합계 (1행)
-- 나머지 9행 = 부서·직책별 인원`,
    mode: "self",
    kw: ["ROLLUP", "GROUP BY"],
    lv: 2,
    exp: String.raw`<p>ROLLUP(a, b)는 (a, b)별 → a별 소계 → 전체 총계를 차례로 만들어요. 9 + 4 + 1 = 14행이에요. ROLLUP은 브라우저 실행기에서 지원하지 않아요.</p>
`
  },
  {
    n: 406,
    sql: String.raw`SELECT dept_id, title, COUNT(*)
FROM s_emp
WHERE dept_id BETWEEN 110 AND 113
GROUP BY CUBE(dept_id, title);
-- 17행: ROLLUP의 14행 + 직책별 합계 3행(기획부장, 과장, 사원)`,
    mode: "self",
    kw: ["CUBE"],
    lv: 2,
    exp: String.raw`<p>CUBE는 가능한 모든 조합의 소계를 만들어서, 부서별 소계에 더해 dept_id가 NULL인 &quot;직책별 합계&quot;까지 나와요.</p>
`
  },
  {
    n: 407,
    sql: String.raw`SELECT name, salary, RANK() OVER (ORDER BY salary DESC) AS 순위
FROM s_emp;
-- 김석우: 6위`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>손명성과 서의홍이 3000으로 공동 4위예요. RANK는 동점자 수만큼 다음 순위를 건너뛰어서(4, 4, 6) 김석우는 6위예요.</p>
`
  },
  {
    n: 408,
    sql: String.raw`SELECT *
FROM (SELECT dept_id, name, salary,
             RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rnk
      FROM s_emp)
WHERE rnk = 1;`,
    mode: "auto",
    lv: 3,
    check: "SELECT dept_id, name, salary FROM (SELECT dept_id, name, salary, RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rnk FROM s_emp) WHERE rnk = 1",
    exp: String.raw`<p>RANK 같은 분석 함수는 WHERE에 바로 쓸 수 없어서 인라인 뷰로 감싼 뒤 걸러요. 113번 부서는 이상헌과 최순철이 2300으로 공동 1위라 11개 부서에서 12행이 나와요.</p>
`
  },
  {
    n: 409,
    sql: String.raw`SELECT name, salary, RANK() OVER (ORDER BY salary DESC) AS 순위
FROM s_emp
ORDER BY 순위;`,
    mode: "auto",
    lv: 1,
    order: [2],
    exp: String.raw`<p>RANK는 같은 값이면 같은 순위를 주고, 그다음 순위는 건너뛰어요(1, 2, 3, 4, 4, 6 …).</p>
`
  },
  {
    n: 410,
    sql: String.raw`SELECT name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS 순위
FROM s_emp
ORDER BY 순위;   -- 김석우: RANK 6위, DENSE_RANK 5위`,
    mode: "auto",
    lv: 1,
    order: [2],
    exp: String.raw`<p>DENSE_RANK는 같은 순위가 있어도 다음 순위를 건너뛰지 않아요(1, 2, 3, 4, 4, 5 …).</p>
`
  },
  {
    n: 411,
    sql: String.raw`SELECT e.name, e.salary, e.dept_id
FROM s_emp e
WHERE e.salary > (SELECT AVG(x.salary)
                  FROM s_emp x
                  WHERE x.dept_id = e.dept_id);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>상관 서브쿼리는 바깥 행(e)의 값을 안에서 써서, 바깥 행마다 따로 실행돼요. &quot;자기 부서&quot; 평균을 구하려면 안쪽에서 <code>x.dept_id = e.dept_id</code>로 연결해요.</p>
`
  },
  {
    n: 412,
    sql: String.raw`SELECT name, salary FROM s_emp
WHERE salary > ALL (SELECT AVG(salary) FROM s_emp GROUP BY dept_id);   -- 1행
-- 같은 뜻: salary > (SELECT MAX(AVG(salary)) FROM s_emp GROUP BY dept_id)

SELECT name, salary FROM s_emp
WHERE salary > ANY (SELECT AVG(salary) FROM s_emp GROUP BY dept_id);   -- 21행
-- 같은 뜻: salary > (SELECT MIN(AVG(salary)) FROM s_emp GROUP BY dept_id)`,
    mode: "self",
    kw: ["ALL", "ANY", "MAX", "MIN"],
    lv: 3,
    exp: String.raw`<p><code>&gt; ALL</code>은 &quot;모든 값보다 크다&quot; = 최댓값보다 커요. <code>&gt; ANY</code>는 &quot;하나라도 보다 크다&quot; = 최솟값보다 커요. 브라우저 실행기는 ANY/ALL을 지원하지 않지만, MAX/MIN 버전은 실행할 수 있어요.</p>
`
  },
  {
    n: 413,
    sql: String.raw`SELECT e.name
FROM s_emp e
WHERE EXISTS (SELECT 'X' FROM s_customer c WHERE c.sales_rep_id = e.id);`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>EXISTS는 서브쿼리 결과가 한 행이라도 있으면 참이에요. SELECT 목록은 무엇이든 상관없어서 보통 &#39;X&#39;나 1을 써요. 최정선, 안은경, 김석우, 박성규, 신종필 5명이에요.</p>
`
  },
  {
    n: 414,
    sql: String.raw`SELECT e.name
FROM s_emp e
WHERE NOT EXISTS (SELECT 'X' FROM s_customer c WHERE c.sales_rep_id = e.id);`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>413번의 반대예요. 담당 고객이 한 명도 없는 직원 20명이 나와요.</p>
`
  },
  {
    n: 415,
    sql: String.raw`-- 첫 번째: 0행, 두 번째: 25행
-- credit_rating은 모두 NULL이에요.
-- mailid NOT IN (NULL, NULL, ...)은 mailid <> NULL AND ... 이고,
-- NULL과의 비교는 항상 "알 수 없음"이라 어떤 행도 참이 되지 않아요.
-- NOT EXISTS는 "같은 값을 가진 행이 있는가"만 보니 NULL에 영향받지 않아요.`,
    mode: "self",
    kw: ["0", "25", "NULL"],
    lv: 3,
    exp: String.raw`<p>NOT IN의 목록에 NULL이 하나라도 섞이면 결과가 0행이 돼요. NULL이 있을 수 있는 컬럼에는 NOT EXISTS를 쓰거나, 서브쿼리에 <code>WHERE credit_rating IS NOT NULL</code>을 붙여요. 두 쿼리 모두 브라우저에서 실행해 볼 수 있어요.</p>
`
  },
  {
    n: 416,
    sql: String.raw`SELECT e.name, e.title
FROM s_emp e
WHERE EXISTS (SELECT 1 FROM s_emp m WHERE m.manager_id = e.id);`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>EXISTS 서브쿼리는 행이 있는지만 확인하고 멈춰서, 값 목록을 모두 만드는 IN보다 빠를 때가 많아요.</p>
`
  },
  {
    n: 417,
    sql: String.raw`-- 교안 쿼리: ROWNUM이 정렬 전에 붙어서, 먼저 읽힌 5명(사번 1~5)을 정렬한 결과예요.
SELECT ROWNUM, name FROM s_emp WHERE ROWNUM <= 5 ORDER BY name;

-- 고친 쿼리: 인라인 뷰에서 먼저 정렬하고 바깥에서 ROWNUM으로 자르기
SELECT ROWNUM, name
FROM (SELECT name FROM s_emp ORDER BY name)
WHERE ROWNUM <= 5;   -- 강연범, 구원상, 김석우, 김심선, 김정미`,
    mode: "self",
    kw: ["ROWNUM", "ORDER BY", "FROM ("],
    lv: 3,
    exp: String.raw`<p>ROWNUM은 WHERE를 통과하는 순서대로 붙고, ORDER BY는 그 뒤에 실행돼요. &quot;정렬한 뒤 상위 N개&quot;를 원하면 반드시 인라인 뷰 안에서 먼저 정렬해요. ROWNUM은 브라우저 실행기에서 지원하지 않아요.</p>
`
  },
  {
    n: 418,
    sql: String.raw`SELECT name, salary
FROM (SELECT name, salary FROM s_emp ORDER BY salary DESC)
WHERE ROWNUM <= 3;   -- 박구곤 5000, 이은선 3500, 김심선 3200`,
    mode: "self",
    kw: ["ROWNUM <= 3|ROWNUM<=3|ROWNUM < 4", "ORDER BY SALARY DESC"],
    lv: 2,
    exp: String.raw`<p>417번과 같은 원리예요. 인라인 뷰에서 급여 내림차순으로 정렬한 뒤 앞의 3행만 남겨요.</p>
`
  },
  {
    n: 419,
    sql: String.raw`SELECT name FROM s_emp WHERE ROWNUM = 2;   -- 0행

-- 사번 순서로 두 번째 직원
SELECT name
FROM (SELECT ROWNUM AS rn, name
      FROM (SELECT name FROM s_emp ORDER BY id))
WHERE rn = 2;   -- 손명성`,
    mode: "self",
    kw: ["ROWNUM", "RN|별명"],
    lv: 3,
    exp: String.raw`<p>첫 행은 ROWNUM 1이라 조건(=2)에 걸려 버려지고, 다음 행이 다시 1번이 돼요. 그래서 2번은 영원히 오지 않아요. ROWNUM에 별명을 붙여 한 번 더 감싸면 일반 컬럼처럼 비교할 수 있어요.</p>
`
  },
  {
    n: 420,
    sql: String.raw`SELECT ROWID, name FROM s_emp;

SELECT name FROM s_emp WHERE ROWID = 'AAAE...';   -- 복사한 값 붙여넣기`,
    mode: "self",
    kw: ["ROWID"],
    lv: 2,
    exp: String.raw`<p>ROWID는 행이 저장된 실제 위치(주소)예요. 앞 6자리는 데이터 오브젝트 번호(어느 테이블)라서 같은 테이블의 행은 모두 같아요. 그 뒤로 파일 번호, 블록 번호, 블록 안의 행 번호가 이어져요. ROWID로 찾는 것이 행 하나를 찾는 가장 빠른 방법이에요.</p>
`
  },
  {
    n: 421,
    sql: String.raw`-- (가) 컬럼을 계산하지 말고 상수 쪽을 계산
WHERE salary >= 36000 / 12          -- 5행

-- (나) 함수 대신 LIKE (앞부분 고정)
WHERE name LIKE '김%'               -- 3행

-- (다) 컬럼을 그대로 두고 날짜 범위로
WHERE start_date >= TO_DATE('2016-01-01', 'YYYY-MM-DD')
  AND start_date <  TO_DATE('2017-01-01', 'YYYY-MM-DD')   -- 19행`,
    mode: "self",
    kw: ["36000 / 12|36000/12|3000", "LIKE", "TO_DATE"],
    lv: 3,
    exp: String.raw`<p>인덱스를 쓰려면 조건의 왼쪽 컬럼을 가공하지 않아야 해요. 계산이나 함수는 오른쪽 값에 적용하도록 바꿔요. 세 조건 모두 브라우저에서 실행해서 행 수를 확인할 수 있어요.</p>
`
  },
  {
    n: 422,
    sql: String.raw`-- (가) AFTER + ROW : 바뀐 행마다, 바뀐 뒤에 :OLD.salary, :NEW.salary를 기록
-- (나) BEFORE + STATEMENT : 문장이 실행되기 전에 한 번 검사해서 막기
-- (다) AFTER + STATEMENT : 몇 행이 지워지든 한 번만 기록`,
    mode: "self",
    kw: ["AFTER", "BEFORE", "ROW", "STATEMENT"],
    lv: 3,
    exp: String.raw`<p>행마다 값(이전 값, 새 값)이 필요하면 ROW, 문장 단위로 한 번이면 STATEMENT예요. 막는 용도는 실행 전(BEFORE), 기록은 실행이 끝난 뒤(AFTER)가 자연스러워요. (다)는 BEFORE STATEMENT도 정답으로 볼 수 있어요.</p>
`
  },
  {
    n: 423,
    sql: String.raw`-- ROWNUM : 조회 결과에 나온 순서대로 1, 2, 3 … 을 붙인 가짜 컬럼. 쿼리마다 달라질 수 있어요.
-- ROWID  : 행이 실제로 저장된 위치를 나타내는 주소. 행마다 고유하고, 행이 그 자리에 있는 동안 바뀌지 않아요.`,
    mode: "self",
    kw: ["ROWNUM", "ROWID", "위치|주소"],
    lv: 1,
    exp: String.raw`<p>둘 다 테이블에 저장된 컬럼은 아니지만 SELECT에서 컬럼처럼 쓸 수 있어요(의사 컬럼, Pseudo Column).</p>
`
  },
  {
    n: 424,
    sql: String.raw`-- 테이블에 INSERT·UPDATE·DELETE가 일어날 때 자동으로 실행되는 PL/SQL 블록이에요.
-- 예: 직원의 급여가 바뀔 때마다 변경 전·후 급여를 기록 테이블에 남긴다.`,
    mode: "self",
    kw: ["자동", "INSERT|UPDATE|DELETE"],
    lv: 1,
    exp: String.raw`<p>사람이 따로 실행하지 않아도 &quot;이벤트가 생기면 자동으로&quot; 실행된다는 점이 특징이에요.</p>
`
  },
  {
    n: 425,
    sql: "SELECT name, salary FROM s_emp WHERE title = '과장' ORDER BY salary DESC;",
    mode: "auto",
    lv: 1,
    order: [1],
    exp: String.raw`<p>WHERE로 행을 고르고 ORDER BY ... DESC로 내림차순 정렬해요. 급여가 같은 사람끼리의 순서는 정해져 있지 않아요.</p>
`
  },
  {
    n: 426,
    sql: "SELECT id FROM s_dept WHERE name = '기획부';   -- 110, 111, 112, 113",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>같은 이름의 부서가 지역마다 따로 있어서 여러 행이 나와요. 문자 값은 작은따옴표로 감싸요.</p>
`
  },
  {
    n: 427,
    sql: "SELECT COUNT(*) FROM s_emp WHERE salary < 1000;   -- 11",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>&quot;미만&quot;은 <code>&lt;</code>예요. WHERE로 먼저 거른 뒤 COUNT(*)로 남은 행을 세요. 급여가 0인 4명도 1000 미만이라 포함돼요.</p>
`
  },
  {
    n: 428,
    sql: "SELECT name, mailid FROM s_emp WHERE mailid LIKE 'jung%';",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>&#39;jung%&#39;는 jung으로 시작하는 모든 값이에요. 문자 비교는 대소문자를 가려서 &#39;JUNG%&#39;로 쓰면 나오지 않아요.</p>
`
  },
  {
    n: 429,
    sql: "SELECT name FROM s_customer WHERE LENGTH(name) = 2;   -- 장혁",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>단일행 함수는 WHERE에서도 쓸 수 있어요. <code>name LIKE &#39;__&#39;</code>(밑줄 두 개)로도 같은 결과를 낼 수 있어요.</p>
`
  },
  {
    n: 430,
    sql: "SELECT name FROM s_region WHERE name LIKE '%/%';",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>앞뒤에 %를 붙이면 &quot;어디든 들어 있는&quot; 값을 찾아요.</p>
`
  },
  {
    n: 431,
    sql: String.raw`SELECT COUNT(*)
FROM s_emp
WHERE start_date = TO_DATE('2016-06-17', 'YYYY-MM-DD');   -- 12`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>실습 데이터의 입사일은 시간이 0시 0분이라 =로 비교해도 돼요. 시간이 섞여 있을 수 있다면 <code>&gt;= 그날 AND &lt; 다음날</code>로 쓰는 것이 안전해요.</p>
`
  },
  {
    n: 432,
    sql: String.raw`SELECT name, salary * 12 AS 연봉
FROM s_emp
ORDER BY 연봉 DESC;`,
    mode: "auto",
    lv: 1,
    order: [1],
    exp: String.raw`<p>ORDER BY에는 SELECT에서 붙인 별명을 쓸 수 있어요. ORDER BY가 SELECT보다 나중에 실행되기 때문이에요.</p>
`
  },
  {
    n: 433,
    sql: String.raw`SELECT dept_id, COUNT(*)
FROM s_emp
GROUP BY dept_id
ORDER BY COUNT(*) DESC;`,
    mode: "auto",
    lv: 1,
    order: [1],
    exp: String.raw`<p>GROUP BY로 묶은 뒤 그룹 함수 결과로도 정렬할 수 있어요. 113번 부서가 5명으로 가장 많아요.</p>
`
  },
  {
    n: 434,
    sql: "SELECT name, phone FROM s_customer ORDER BY name;",
    mode: "auto",
    lv: 1,
    order: [0],
    exp: String.raw`<p>오름차순(ASC)은 기본값이라 생략할 수 있어요. 한글은 가나다순으로 정렬돼요.</p>
`
  },
  {
    n: 435,
    sql: "SELECT name, phone FROM s_customer WHERE name LIKE '정%';",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>&#39;정%&#39;는 &#39;정&#39;으로 시작하는 모든 값이에요.</p>
`
  },
  {
    n: 436,
    sql: "SELECT name, salary FROM s_emp WHERE dept_id = 113 AND salary >= 1000;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>두 조건을 모두 만족해야 하니 AND로 이어요.</p>
`
  },
  {
    n: 437,
    sql: "SELECT AVG(salary), MAX(salary), MIN(salary) FROM s_emp;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>GROUP BY 없이 그룹 함수만 쓰면 테이블 전체가 하나의 묶음이 돼서 1행이 나와요.</p>
`
  },
  {
    n: 438,
    sql: "SELECT name, TO_CHAR(start_date, 'YYYY\"년\" MM\"월\" DD\"일\"') AS 입사일 FROM s_emp;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>형식 안에 글자를 그대로 넣으려면 큰따옴표로 감싸요.</p>
`
  },
  {
    n: 439,
    sql: "SELECT id, name FROM s_region WHERE id >= 3;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>숫자 비교는 따옴표 없이 써요.</p>
`
  },
  {
    n: 440,
    sql: String.raw`SELECT sales_rep_id, COUNT(*)
FROM s_customer
GROUP BY sales_rep_id
HAVING COUNT(*) >= 2;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>묶은 뒤의 조건은 HAVING에 써요.</p>
`
  },
  {
    n: 441,
    sql: String.raw`SELECT e.name, e.title
FROM s_emp e, s_dept d
WHERE e.dept_id = d.id
  AND d.name = '인사부';`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>부서 이름은 S_DEPT에만 있어서 JOIN이 필요해요.</p>
`
  },
  {
    n: 442,
    sql: "SELECT COUNT(*) FROM s_emp WHERE salary BETWEEN 2000 AND 3000;   -- 9",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>BETWEEN은 양 끝값(2000, 3000)을 포함해요. 급여가 3000인 손명성과 서의홍도 들어가요.</p>
`
  },
  {
    n: 443,
    sql: "SELECT name, mailid FROM s_emp WHERE LENGTH(mailid) >= 7;",
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>WHERE에도 단일행 함수를 쓸 수 있어요.</p>
`
  },
  {
    n: 444,
    sql: String.raw`SELECT address, COUNT(*) AS 고객수
FROM s_customer
GROUP BY address
ORDER BY 고객수 DESC;`,
    mode: "auto",
    lv: 1,
    order: [1],
    exp: String.raw`<p>ORDER BY에는 별명(고객수)을 쓸 수 있어요.</p>
`
  },
  {
    n: 445,
    sql: String.raw`SELECT r.name, COUNT(*)
FROM s_dept d, s_region r
WHERE d.region_id = r.id
GROUP BY r.name;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>JOIN으로 지역 이름을 붙인 뒤 지역 이름으로 묶어요. 서울특별시에 101, 102, 110, 118번 부서가 있어서 4개예요.</p>
`
  },
  {
    n: 446,
    sql: String.raw`SELECT d.name, COUNT(*)
FROM s_emp e, s_dept d
WHERE e.dept_id = d.id
GROUP BY d.name;   -- 기획부 15, 영업부 7, 인사부 2, 총무부 1`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>부서 번호가 아니라 부서 이름으로 묶으면, 번호는 달라도 이름이 같은 부서가 한 그룹이 돼요.</p>
`
  },
  {
    n: 447,
    sql: String.raw`SELECT dept_id, COUNT(*)
FROM s_emp
GROUP BY dept_id
HAVING COUNT(*) = (SELECT MAX(COUNT(*)) FROM s_emp GROUP BY dept_id);   -- 113, 5`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>서브쿼리에서 그룹 함수를 겹쳐 써서(MAX(COUNT(*))) 부서별 인원 중 최댓값을 구하고, HAVING에서 그 값과 같은 그룹만 남겨요. 그룹 함수를 겹쳐 쓸 때는 GROUP BY가 꼭 있어야 해요.</p>
`
  },
  {
    n: 448,
    sql: String.raw`SELECT e.name, e.salary, r.name
FROM s_emp e, s_dept d, s_region r
WHERE e.dept_id = d.id
  AND d.region_id = r.id
  AND e.salary >= 2000;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>직원 → 부서 → 지역으로 두 번 이어야 해서 조인 조건이 2개예요. 검색 조건은 AND로 이어 붙여요.</p>
`
  },
  {
    n: 449,
    sql: String.raw`SELECT m.name AS 상사, COUNT(*) AS 부하수
FROM s_emp w, s_emp m
WHERE w.manager_id = m.id
GROUP BY m.name;   -- 박구곤 9, 손명성 14, 신종필 1`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>SELF JOIN으로 직원(w)마다 상사(m)를 붙인 뒤, 상사 이름으로 묶어서 세요.</p>
`
  },
  {
    n: 450,
    sql: String.raw`SELECT name, start_date
FROM s_emp
WHERE TO_CHAR(start_date, 'MM') = '03';`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>TO_CHAR로 월만 뽑아서 문자 &#39;03&#39;과 비교해요. &#39;MM&#39;은 두 자리라 &#39;3&#39;이 아니라 &#39;03&#39;으로 써야 해요.</p>
`
  },
  {
    n: 451,
    sql: String.raw`SELECT e.name, d.name
FROM s_emp e, s_dept d, salgrade g
WHERE e.dept_id = d.id
  AND e.salary BETWEEN g.losal AND g.hisal
  AND g.grade = 'C';`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>EQUIJOIN(부서)과 NON-EQUIJOIN(급여 등급)을 한 문장에 함께 쓸 수 있어요.</p>
`
  },
  {
    n: 452,
    sql: String.raw`SELECT title, COUNT(*), AVG(salary)
FROM s_emp
GROUP BY title
HAVING AVG(salary) >= 1000
   AND COUNT(*) >= 2;   -- 과장, 영업대표이사`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>HAVING에도 AND로 여러 그룹 조건을 쓸 수 있어요. 사원은 10명이지만 평균이 809라서 빠져요.</p>
`
  },
  {
    n: 453,
    sql: String.raw`SELECT r.name, COUNT(*)
FROM s_customer c, s_region r
WHERE c.region_id = r.id
GROUP BY r.name;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>EQUIJOIN은 짝이 있는 행만 남겨서, S_REGION에 없는 지역(6번)의 고객 최계윤은 자연스럽게 빠져요.</p>
`
  },
  {
    n: 454,
    sql: String.raw`SELECT e.name, d.name, e.salary
FROM s_emp e, s_dept d
WHERE e.dept_id = d.id
  AND (e.dept_id, e.salary) IN (SELECT dept_id, MAX(salary)
                                FROM s_emp
                                GROUP BY dept_id);`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>(부서, 급여) 쌍을 함께 비교해야 다른 부서의 최고 급여와 우연히 같은 사람이 섞이지 않아요. 113번 부서는 2300을 받는 사람이 둘이라 부서는 11개인데 12행이에요.</p>
`
  },
  {
    n: 455,
    sql: String.raw`SELECT d.id, d.name, MAX(e.salary)
FROM s_emp e, s_dept d
WHERE e.dept_id = d.id
GROUP BY d.id, d.name
ORDER BY d.id;`,
    mode: "auto",
    lv: 2,
    order: [0],
    exp: String.raw`<p>SELECT에 쓴 일반 컬럼(d.id, d.name)은 모두 GROUP BY에도 써야 해요.</p>
`
  },
  {
    n: 456,
    sql: String.raw`SELECT TO_CHAR(start_date, 'DAY') AS 요일, COUNT(*)
FROM s_emp
GROUP BY TO_CHAR(start_date, 'DAY');`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>TO_CHAR로 만든 값으로 묶을 수 있어요. 2016-06-17(금요일)에 입사한 직원이 많아서 금요일이 가장 많아요.</p>
`
  },
  {
    n: 457,
    sql: String.raw`SELECT e.name, e.salary
FROM s_emp e, s_dept d
WHERE e.dept_id = d.id
  AND d.name = '기획부'
  AND e.salary >= (SELECT AVG(e2.salary)
                   FROM s_emp e2, s_dept d2
                   WHERE e2.dept_id = d2.id AND d2.name = '기획부');`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>서브쿼리 안에서도 JOIN을 쓸 수 있어요. 바깥과 안쪽의 ALIAS를 다르게(e2, d2) 써야 헷갈리지 않아요.</p>
`
  },
  {
    n: 458,
    sql: String.raw`SELECT r.name, COUNT(*)
FROM s_customer c, s_region r
WHERE c.region_id = r.id
GROUP BY r.name
HAVING COUNT(*) = (SELECT MAX(COUNT(*)) FROM s_customer GROUP BY region_id);`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>최대 고객 수(5)를 서브쿼리로 먼저 구하고 같은 묶음을 찾아요. 서울특별시가 5명이에요.</p>
`
  },
  {
    n: 459,
    sql: String.raw`SELECT title, COUNT(*), MAX(salary) AS 최고
FROM s_emp
GROUP BY title
HAVING COUNT(*) >= 2
ORDER BY 최고 DESC;`,
    mode: "auto",
    lv: 2,
    order: [2],
    exp: String.raw`<p>HAVING의 조건과 SELECT의 그룹 함수가 달라도 괜찮아요.</p>
`
  },
  {
    n: 460,
    sql: String.raw`SELECT e.name, d.name, e.start_date
FROM s_emp e, s_dept d
WHERE e.dept_id = d.id
  AND e.start_date >= TO_DATE('2015-01-01', 'YYYY-MM-DD')
  AND e.start_date <  TO_DATE('2016-01-01', 'YYYY-MM-DD')
ORDER BY e.start_date;`,
    mode: "auto",
    lv: 2,
    order: [2],
    exp: String.raw`<p>날짜 범위는 &quot;시작일 이상, 다음 해 첫날 미만&quot;으로 쓰면 시간이 들어 있어도 안전해요.</p>
`
  },
  {
    n: 461,
    sql: String.raw`SELECT m.name AS 상사, ROUND(AVG(e.salary)) AS 부하평균
FROM s_emp e, s_emp m
WHERE e.manager_id = m.id
GROUP BY m.id, m.name;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>SELF JOIN한 결과를 상사 기준으로 묶어요. 이름이 같은 상사가 있을 수 있으니 id로도 묶어요.</p>
`
  },
  {
    n: 462,
    sql: String.raw`SELECT e.name, c.name
FROM s_emp e, s_customer c
WHERE e.id = c.sales_rep_id
ORDER BY e.name, c.name;`,
    mode: "auto",
    lv: 2,
    order: [0, 1],
    exp: String.raw`<p>직원 한 명에 고객이 여러 명이면 직원 이름이 여러 번 나와요. JOIN은 &quot;짝을 맞춘 만큼&quot; 행이 생겨요.</p>
`
  },
  {
    n: 463,
    sql: String.raw`SELECT s.grade, MAX(e.salary), MIN(e.salary)
FROM s_emp e, salgrade s
WHERE e.salary BETWEEN s.losal AND s.hisal
GROUP BY s.grade
ORDER BY s.grade;`,
    mode: "auto",
    lv: 2,
    order: [0],
    exp: String.raw`<p>NON-EQUIJOIN 결과도 GROUP BY로 묶을 수 있어요. 등급의 범위(LOSAL ~ HISAL)와 실제 직원 급여 범위를 비교해 보세요.</p>
`
  },
  {
    n: 464,
    sql: String.raw`SELECT name, '직원' AS 구분 FROM s_emp WHERE name LIKE '장%'
UNION ALL
SELECT name, '고객' FROM s_customer WHERE name LIKE '장%'
ORDER BY 1;`,
    mode: "auto",
    lv: 2,
    order: [0],
    exp: String.raw`<p>SET 연산자로 합칠 때 문자 상수를 컬럼처럼 넣어 출처를 표시할 수 있어요. 컬럼 이름은 첫 번째 SELECT를 따라요.</p>
`
  },
  {
    n: 465,
    sql: String.raw`SELECT w.name, w.salary, m.name AS 상사, m.salary AS 상사급여
FROM s_emp w, s_emp m
WHERE w.manager_id = m.id
  AND w.salary > m.salary;   -- 강연범 795 > 신종필 0`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>SELF JOIN으로 상사 행을 옆에 붙이면 같은 행 안에서 두 사람의 급여를 비교할 수 있어요.</p>
`
  },
  {
    n: 466,
    sql: String.raw`SELECT e.name, COUNT(*)
FROM s_emp e, s_customer c
WHERE e.id = c.sales_rep_id
GROUP BY e.name
HAVING COUNT(*) = (SELECT MAX(COUNT(*)) FROM s_customer GROUP BY sales_rep_id);   -- 신종필 5`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>JOIN + GROUP BY로 직원별 고객 수를 구하고, HAVING의 서브쿼리로 그중 최댓값과 비교해요. 같은 최댓값이 여럿이면 모두 나와요.</p>
`
  },
  {
    n: 467,
    sql: String.raw`SELECT e.dept_id, COUNT(*)
FROM s_emp e
WHERE e.salary > (SELECT AVG(x.salary)
                  FROM s_emp x
                  WHERE x.dept_id = e.dept_id)
GROUP BY e.dept_id;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>상관 서브쿼리로 &quot;자기 부서 평균보다 많은 직원&quot;을 먼저 고르고(WHERE), 남은 행을 부서별로 묶어서 세요.</p>
`
  },
  {
    n: 468,
    sql: String.raw`SELECT d.name, ROUND(a.avg_sal, 1)
FROM s_dept d,
     (SELECT dept_id, AVG(salary) AS avg_sal
      FROM s_emp
      GROUP BY dept_id) a
WHERE d.id = a.dept_id
  AND a.avg_sal < (SELECT AVG(salary) FROM s_emp);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>부서별 평균을 인라인 뷰로 만들어 테이블처럼 JOIN하고, 전체 평균은 스칼라 서브쿼리로 비교해요. 인라인 뷰의 그룹 함수 결과에는 별명(avg_sal)을 꼭 붙여요.</p>
`
  },
  {
    n: 469,
    sql: String.raw`SELECT dept_id, name, salary
FROM (SELECT dept_id, name, salary,
             RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rnk
      FROM s_emp)
WHERE rnk = 2;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>직원이 한 명인 부서에는 2위가 없고, 113번처럼 1위가 둘인 부서는 다음 순위가 3위라 2위가 없어요. 그래서 11개 부서 중 6개만 나와요.</p>
`
  },
  {
    n: 470,
    sql: String.raw`SELECT 입사연도, name, salary
FROM (SELECT TO_CHAR(start_date, 'YYYY') AS 입사연도, name, salary,
             RANK() OVER (PARTITION BY TO_CHAR(start_date, 'YYYY')
                          ORDER BY salary DESC) AS rnk
      FROM s_emp)
WHERE rnk = 1;   -- 2015 박구곤, 2016 이은선`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>PARTITION BY에 가공한 값(연도)을 넣을 수도 있어요. 상관 서브쿼리로 &quot;같은 연도 입사자의 최고 급여&quot;와 비교해도 같은 결과예요.</p>
`
  },
  {
    n: 471,
    sql: String.raw`SELECT c.name
FROM s_customer c
WHERE NOT EXISTS (SELECT 'X' FROM s_emp e WHERE e.id = c.sales_rep_id);   -- 고정환`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>고정환의 sales_rep_id는 0인데, 0번 직원은 없어요. NOT EXISTS는 짝이 되는 행이 하나도 없을 때 참이에요.</p>
`
  },
  {
    n: 472,
    sql: String.raw`SELECT e.name, COUNT(c.id) AS 고객수
FROM s_emp e, s_customer c
WHERE e.id = c.sales_rep_id(+)
GROUP BY e.name;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>OUTER JOIN으로 고객이 없는 직원도 남긴 뒤 세는데, COUNT(*)를 쓰면 고객이 NULL인 행도 1로 세져요. NULL을 빼고 세는 COUNT(c.id)를 써야 0이 나와요.</p>
`
  },
  {
    n: 473,
    sql: String.raw`SELECT w.name, NVL(m.name, '없음') AS 상사
FROM s_emp w, s_emp m
WHERE w.manager_id = m.id(+);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>SELF JOIN을 OUTER JOIN으로 바꾸면 상사가 없는 박구곤도 남아요. 그 행의 상사 이름은 NULL이라 NVL로 바꿔요.</p>
`
  },
  {
    n: 474,
    sql: String.raw`SELECT e.name, e.start_date
FROM s_emp e
WHERE EXISTS (SELECT 'X'
              FROM s_emp x
              WHERE x.start_date = e.start_date
                AND x.id <> e.id);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>상관 서브쿼리에서 &quot;입사일은 같지만 나는 아닌 사람&quot;이 있는지 봐요. 자기 자신을 빼지 않으면 모든 직원이 나와요.</p>
`
  },
  {
    n: 475,
    sql: String.raw`SELECT dept_id, SUM(salary) AS 합계,
       ROUND(SUM(salary) * 100 / (SELECT SUM(salary) FROM s_emp), 1) AS 비율
FROM s_emp
GROUP BY dept_id
ORDER BY 비율 DESC;`,
    mode: "auto",
    lv: 3,
    order: [2],
    exp: String.raw`<p>SELECT절에도 값 하나를 돌려주는 서브쿼리(스칼라 서브쿼리)를 쓸 수 있어요.</p>
`
  },
  {
    n: 476,
    sql: String.raw`SELECT e.name, e.dept_id, e.salary, ROUND(e.salary - a.avg_sal) AS 차이
FROM s_emp e,
     (SELECT dept_id, AVG(salary) AS avg_sal FROM s_emp GROUP BY dept_id) a
WHERE e.dept_id = a.dept_id;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>그룹 결과(부서 평균)와 개별 행(직원)을 함께 보여줄 때 INLINE VIEW로 미리 묶은 결과를 JOIN해요.</p>
`
  },
  {
    n: 477,
    sql: String.raw`SELECT r.name, SUM(e.salary)
FROM s_emp e, s_dept d, s_region r
WHERE e.dept_id = d.id AND d.region_id = r.id
GROUP BY r.name
HAVING SUM(e.salary) = (SELECT MAX(SUM(e2.salary))
                        FROM s_emp e2, s_dept d2
                        WHERE e2.dept_id = d2.id
                        GROUP BY d2.region_id);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>그룹 함수를 겹친 MAX(SUM(...))으로 가장 큰 합계를 구해서 HAVING에서 비교해요.</p>
`
  },
  {
    n: 478,
    sql: String.raw`SELECT dept_id, name, start_date
FROM (SELECT dept_id, name, start_date,
             RANK() OVER (PARTITION BY dept_id ORDER BY start_date) AS rk
      FROM s_emp)
WHERE rk = 1;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>RANK 같은 분석 함수의 결과는 WHERE에서 바로 쓸 수 없어서 INLINE VIEW로 한 번 감싸요. 102번 부서는 두 사람이 같은 날 입사해서 둘 다 나와요.</p>
`
  },
  {
    n: 479,
    sql: String.raw`SELECT e.name, m.name AS 상사, mm.name AS 상사의상사
FROM s_emp e, s_emp m, s_emp mm
WHERE e.manager_id = m.id
  AND m.manager_id = mm.id;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>같은 테이블을 세 번 쓰는 SELF JOIN이에요. 역할(직원, 상사, 상사의 상사)마다 ALIAS를 따로 붙여요.</p>
`
  },
  {
    n: 480,
    sql: String.raw`SELECT e.name, COUNT(DISTINCT c.region_id) AS 지역수
FROM s_emp e, s_customer c
WHERE e.id = c.sales_rep_id
GROUP BY e.id, e.name
HAVING COUNT(DISTINCT c.region_id) >= 2;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>COUNT(DISTINCT ...)는 HAVING에서도 쓸 수 있어요. 신종필은 5번 지역과 6번 지역 고객을 함께 맡고 있어요.</p>
`
  },
  {
    n: 481,
    sql: String.raw`SELECT name, start_date
FROM s_emp
WHERE start_date IN (SELECT start_date FROM s_emp GROUP BY start_date HAVING COUNT(*) = 1)
ORDER BY start_date;`,
    mode: "auto",
    lv: 3,
    order: [1],
    exp: String.raw`<p>&quot;입사일이 하나뿐인 날&quot;을 먼저 구하고, 그날 입사한 사람을 찾아요. 같은 날 입사자가 있는 14명과 합치면 25명이에요.</p>
`
  },
  {
    n: 482,
    sql: String.raw`SELECT d.name, AVG(e.salary)
FROM s_emp e, s_dept d
WHERE e.dept_id = d.id
GROUP BY d.id, d.name
HAVING AVG(e.salary) = (SELECT MAX(AVG(salary)) FROM s_emp GROUP BY dept_id);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>118번 인사부(사장 5000, 인사부장 3200)의 평균 4100이 가장 높아요.</p>
`
  },
  {
    n: 483,
    sql: String.raw`SELECT e.name, e.title
FROM s_emp e, s_dept d
WHERE e.dept_id = d.id
  AND d.name = '영업부'
  AND NOT EXISTS (SELECT 1 FROM s_customer c WHERE c.sales_rep_id = e.id);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>JOIN, 일반 조건, NOT EXISTS를 한 WHERE에 함께 쓸 수 있어요.</p>
`
  },
  {
    n: 484,
    sql: String.raw`SELECT r.name,
       SUM(CASE WHEN e.salary = 0 THEN 1 ELSE 0 END) AS 급여0,
       SUM(CASE WHEN e.salary > 0 THEN 1 ELSE 0 END) AS 급여있음
FROM s_emp e, s_dept d, s_region r
WHERE e.dept_id = d.id AND d.region_id = r.id
GROUP BY r.name;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>CASE로 조건에 맞으면 1, 아니면 0을 만들고 SUM으로 더하면 조건별 개수가 돼요. PIVOT 없이 표를 만드는 흔한 방법이에요.</p>
`
  },
  {
    n: 485,
    sql: "SELECT pname, price FROM product_s WHERE category = '문구' ORDER BY price;",
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    order: [1],
    exp: String.raw`<p>WHERE로 고르고 ORDER BY로 정렬해요. 오름차순(ASC)은 생략할 수 있어요.</p>
`
  },
  {
    n: 486,
    sql: "SELECT pname, category FROM product_s WHERE stock = 0;",
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    exp: String.raw`<p>0은 값이라 <code>= 0</code>으로 찾아요. 재고를 모르는 상품(NULL)이었다면 IS NULL로 찾아야 해요.</p>
`
  },
  {
    n: 487,
    sql: String.raw`SELECT category, COUNT(*), ROUND(AVG(price))
FROM product_s
GROUP BY category;`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    exp: String.raw`<p>GROUP BY로 카테고리마다 묶고, 그룹 함수로 묶음마다 계산해요.</p>
`
  },
  {
    n: 488,
    sql: String.raw`SELECT o.oid, p.pname, o.qty
FROM order_s o, product_s p
WHERE o.pid = p.pid
ORDER BY o.oid;`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    order: [0],
    exp: String.raw`<p>주문에는 상품 번호만 있어서 상품 이름은 JOIN으로 가져와요.</p>
`
  },
  {
    n: 489,
    sql: String.raw`SELECT p.pname, SUM(o.qty) AS 총수량
FROM order_s o, product_s p
WHERE o.pid = p.pid
GROUP BY p.pname
ORDER BY 총수량 DESC;`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    order: [1],
    exp: String.raw`<p>JOIN한 다음 GROUP BY로 묶어요. 연필은 세 번 주문되어 35개예요.</p>
`
  },
  {
    n: 490,
    sql: String.raw`INSERT INTO product_s VALUES (8, '형광펜', '문구', 900, 40);
COMMIT;

SELECT category, COUNT(*) FROM product_s GROUP BY category;`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    exp: String.raw`<p>INSERT 뒤에 COMMIT해야 다른 사용자도 새 상품을 볼 수 있어요.</p>
`
  },
  {
    n: 491,
    sql: String.raw`UPDATE product_s SET price = price * 1.1 WHERE category = '전자';

SELECT pname, price FROM product_s WHERE category = '전자' ORDER BY pid;   -- 13200, 27500`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    order: [0],
    exp: String.raw`<p>WHERE를 빠뜨리면 모든 상품의 가격이 올라요. UPDATE 전에 같은 WHERE로 SELECT해서 대상을 확인하세요.</p>
`
  },
  {
    n: 492,
    sql: String.raw`SELECT oid, odate
FROM order_s
WHERE odate >= TO_DATE('2025-03-01', 'YYYY-MM-DD')
  AND odate <  TO_DATE('2025-04-01', 'YYYY-MM-DD');`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    exp: String.raw`<p><code>TO_CHAR(odate, &#39;YYYYMM&#39;) = &#39;202503&#39;</code>으로도 찾을 수 있지만, 날짜 범위로 쓰면 인덱스를 쓸 수 있어요.</p>
`
  },
  {
    n: 493,
    sql: "SELECT pname || ' (' || price || '원)' AS 상품 FROM product_s ORDER BY pid;",
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    order: [0],
    exp: String.raw`<p><code>||</code>로 문자와 숫자를 이어 붙여요. ORDER BY에는 SELECT에 없는 컬럼(pid)도 쓸 수 있어요.</p>
`
  },
  {
    n: 494,
    sql: String.raw`UPDATE product_s SET stock = 20 WHERE stock <= 10;
COMMIT;

SELECT pname, stock FROM product_s WHERE stock = 20 ORDER BY pid;`,
    mode: "auto",
    lv: 1,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    order: [0],
    exp: String.raw`<p>&quot;이하&quot;는 <code>&lt;=</code>예요. 재고 0인 공책·텀블러, 10인 머그컵, 5인 마우스까지 4개가 바뀌어요.</p>
`
  },
  {
    n: 495,
    sql: String.raw`SELECT e.name, d.name
FROM s_emp e, s_dept d
WHERE e.dept_id = d.id
  AND e.title = '사원'
  AND e.start_date >= TO_DATE('2016-01-01', 'YYYY-MM-DD')
  AND e.start_date <  TO_DATE('2017-01-01', 'YYYY-MM-DD')
ORDER BY e.name;`,
    mode: "auto",
    lv: 1,
    order: [0],
    exp: String.raw`<p>JOIN 조건 하나와 일반 조건 두 개를 AND로 이어요.</p>
`
  },
  {
    n: 496,
    sql: String.raw`SELECT c.name, e.name, r.name
FROM s_customer c, s_emp e, s_region r
WHERE c.sales_rep_id = e.id
  AND c.region_id = r.id;`,
    mode: "auto",
    lv: 1,
    exp: String.raw`<p>테이블 3개에 JOIN 조건 2개예요. 담당자가 0인 고정환과 지역번호가 6인 최계윤이 빠져서 13행이에요. 빠지지 않게 하려면 OUTER JOIN이 필요해요.</p>
`
  },
  {
    n: 497,
    sql: String.raw`SELECT e.dept_id, COUNT(*), ROUND(AVG(e.salary))
FROM s_emp e, s_dept d
WHERE e.dept_id = d.id
  AND d.name = '기획부'
GROUP BY e.dept_id
ORDER BY e.dept_id;`,
    mode: "auto",
    lv: 1,
    order: [0],
    exp: String.raw`<p>JOIN한 다음 WHERE로 거르고 GROUP BY로 묶는 순서예요.</p>
`
  },
  {
    n: 498,
    sql: String.raw`SELECT e.name, e.dept_id
FROM s_emp e, salgrade s
WHERE e.salary BETWEEN s.losal AND s.hisal
  AND s.grade = 'E'
ORDER BY e.name;`,
    mode: "auto",
    lv: 1,
    order: [0],
    exp: String.raw`<p>E 등급은 500 ~ 999예요. 급여 0인 직원은 어느 등급에도 들지 않아요.</p>
`
  },
  {
    n: 499,
    sql: String.raw`SELECT title, COUNT(*), SUM(salary) AS 합계
FROM s_emp
GROUP BY title
ORDER BY 합계 DESC;`,
    mode: "auto",
    lv: 1,
    order: [2],
    exp: String.raw`<p>사원이 10명이지만 급여 합계는 과장(5명)보다 적어요.</p>
`
  },
  {
    n: 500,
    sql: String.raw`SELECT d.id, d.name, r.name, COUNT(*), ROUND(AVG(e.salary))
FROM s_emp e, s_dept d, s_region r
WHERE e.dept_id = d.id
  AND d.region_id = r.id
GROUP BY d.id, d.name, r.name
ORDER BY d.id;`,
    mode: "auto",
    lv: 2,
    order: [0],
    exp: String.raw`<p>JOIN(6장) + 그룹 함수(4장) + GROUP BY(5장)를 한 번에 써요. SELECT에 쓴 일반 컬럼은 모두 GROUP BY에 넣어야 해요.</p>
`
  },
  {
    n: 501,
    sql: String.raw`SELECT e.name, e.title, e.salary
FROM s_emp e
WHERE e.start_date >= TO_DATE('2016-01-01', 'YYYY-MM-DD')
  AND e.start_date <  TO_DATE('2017-01-01', 'YYYY-MM-DD')
  AND e.salary >= (SELECT AVG(x.salary)
                   FROM s_emp x
                   WHERE x.title = e.title);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>날짜 조건(3·4장)과 상관 서브쿼리(14장)를 함께 써요. 직책 평균은 2016년 입사자만이 아니라 그 직책 전체의 평균이에요.</p>
`
  },
  {
    n: 502,
    sql: String.raw`SELECT NVL(g.grade, '등급 없음') AS 등급, COUNT(*), AVG(e.salary)
FROM s_emp e, salgrade g
WHERE e.salary BETWEEN g.losal(+) AND g.hisal(+)
GROUP BY NVL(g.grade, '등급 없음')
ORDER BY 1;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>NON-EQUIJOIN에도 OUTER JOIN을 걸 수 있어요. 모자라는 쪽(등급)의 두 컬럼에 모두 (+)를 붙여요. 급여 0인 4명이 &#39;등급 없음&#39;이 돼요.</p>
`
  },
  {
    n: 503,
    sql: String.raw`SELECT w.name, NVL(m.name, '없음') AS 상사, d.name AS 부서
FROM s_emp w, s_emp m, s_dept d
WHERE w.manager_id = m.id(+)
  AND w.dept_id = d.id;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>SELF JOIN의 OUTER JOIN과 일반 EQUIJOIN을 한 문장에 섞을 수 있어요. (+)는 짝이 없을 수 있는 쪽(상사 m)에만 붙여요.</p>
`
  },
  {
    n: 504,
    sql: String.raw`SELECT c.name, e.name AS 담당자, r.name AS 지역
FROM s_customer c, s_emp e, s_region r
WHERE c.sales_rep_id = e.id(+)
  AND c.region_id    = r.id(+);`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>고객을 기준으로 직원과 지역에 각각 OUTER JOIN을 걸어요. 고정환은 담당자가, 최계윤은 지역이 NULL로 나와요.</p>
`
  },
  {
    n: 505,
    sql: String.raw`SELECT d.name, t.name, t.salary, t.salary - a.avg_sal AS 평균과차이
FROM s_dept d,
     (SELECT dept_id, name, salary
      FROM (SELECT dept_id, name, salary,
                   RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rnk
            FROM s_emp)
      WHERE rnk = 1) t,
     (SELECT dept_id, AVG(salary) AS avg_sal
      FROM s_emp
      GROUP BY dept_id) a
WHERE d.id = t.dept_id
  AND t.dept_id = a.dept_id;`,
    mode: "auto",
    lv: 3,
    exp: String.raw`<p>인라인 뷰 두 개(부서별 1위, 부서별 평균)를 만들어 부서 테이블과 JOIN해요. 복잡한 문제는 이렇게 &quot;작은 표&quot;를 먼저 만들고 붙이면 쉬워져요.</p>
`
  },
  {
    n: 506,
    sql: String.raw`SELECT dept_id,
       SUM(CASE WHEN title IN ('사원', '과장') THEN salary * 1.1
                ELSE salary END) AS 인상후합계
FROM s_emp
GROUP BY dept_id
ORDER BY dept_id;`,
    mode: "auto",
    lv: 2,
    order: [0],
    exp: String.raw`<p>CASE(14장)로 행마다 인상 후 급여를 계산하고, 그 결과를 SUM으로 묶어요. UPDATE 없이 조회만으로 &quot;만약에&quot;를 계산할 수 있어요.</p>
`
  },
  {
    n: 507,
    sql: String.raw`SELECT p.category, SUM(p.price * o.qty) AS 매출
FROM order_s o, product_s p
WHERE o.pid = p.pid
GROUP BY p.category
ORDER BY 매출 DESC;`,
    mode: "auto",
    lv: 2,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    order: [1],
    exp: String.raw`<p>그룹 함수 안에 계산식을 넣을 수 있어요. 전자(USB 3개 + 마우스 1개) 61000원이 가장 많아요.</p>
`
  },
  {
    n: 508,
    sql: String.raw`SELECT pname
FROM product_s p
WHERE NOT EXISTS (SELECT 1 FROM order_s o WHERE o.pid = p.pid);`,
    mode: "auto",
    lv: 2,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    exp: String.raw`<p>NOT IN (SELECT pid FROM order_s)나 OUTER JOIN 뒤 <code>o.oid IS NULL</code>로도 풀 수 있어요.</p>
`
  },
  {
    n: 509,
    sql: String.raw`SELECT p.pname, NVL(SUM(p.price * o.qty), 0) AS 매출,
       RANK() OVER (ORDER BY NVL(SUM(p.price * o.qty), 0) DESC) AS 순위
FROM product_s p, order_s o
WHERE p.pid = o.pid(+)
GROUP BY p.pid, p.pname
ORDER BY 순위;`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    order: [2],
    exp: String.raw`<p>분석 함수는 GROUP BY가 끝난 결과에 적용돼서, OVER 안에 그룹 함수를 쓸 수 있어요.</p>
`
  },
  {
    n: 510,
    sql: String.raw`SELECT category, pname, price
FROM product_s
WHERE (category, price) IN (SELECT category, MAX(price) FROM product_s GROUP BY category);`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    exp: String.raw`<p>카테고리와 가격을 함께 비교해야, 다른 카테고리의 최고가와 우연히 같은 상품이 섞이지 않아요.</p>
`
  },
  {
    n: 511,
    sql: String.raw`SELECT TO_CHAR(o.odate, 'YYYY-MM') AS 월, COUNT(*) AS 건수, SUM(p.price * o.qty) AS 매출
FROM order_s o, product_s p
WHERE o.pid = p.pid
GROUP BY TO_CHAR(o.odate, 'YYYY-MM')
ORDER BY 월;`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    order: [0],
    exp: String.raw`<p>날짜를 TO_CHAR로 월 단위 문자로 바꿔서 묶어요. 매출 보고서에서 가장 많이 쓰는 모양이에요.</p>
`
  },
  {
    n: 512,
    sql: String.raw`SELECT d.id, d.name, a.cnt, a.max_sal, e.name AS 최고급여자
FROM s_dept d,
     (SELECT dept_id, COUNT(*) AS cnt, MAX(salary) AS max_sal FROM s_emp GROUP BY dept_id) a,
     s_emp e
WHERE d.id = a.dept_id
  AND e.dept_id = a.dept_id
  AND e.salary = a.max_sal
ORDER BY d.id;`,
    mode: "auto",
    lv: 3,
    order: [0],
    exp: String.raw`<p>INLINE VIEW로 부서별 집계를 만든 뒤, 원래 테이블과 다시 JOIN해서 &quot;그 값을 가진 사람&quot;을 찾아요. 부서 11개 중 113번 부서는 최고 급여자가 2명이라 12행이에요.</p>
`
  },
  {
    n: 513,
    sql: String.raw`CREATE TABLE project_t (
  pid        NUMBER(5)    CONSTRAINT project_t_pid_pk   PRIMARY KEY,
  pname      VARCHAR2(30) CONSTRAINT project_t_pname_nn NOT NULL,
  dept_id    NUMBER(7),
  start_date DATE DEFAULT SYSDATE,
  budget     NUMBER(10),
  CONSTRAINT project_t_dept_id_fk FOREIGN KEY (dept_id) REFERENCES dept_t(id),
  CONSTRAINT project_t_budget_ck  CHECK (budget > 0)
);

CREATE TABLE pmember_t (
  pid    NUMBER(5),
  emp_id NUMBER(7),
  role   VARCHAR2(20),
  CONSTRAINT pmember_t_pk     PRIMARY KEY (pid, emp_id),
  CONSTRAINT pmember_t_pid_fk FOREIGN KEY (pid) REFERENCES project_t(pid)
);`,
    mode: "self",
    kw: ["PRIMARY KEY", "NOT NULL", "REFERENCES DEPT_T", "DEFAULT SYSDATE", "CHECK", "PRIMARY KEY (PID, EMP_ID)|PRIMARY KEY(PID, EMP_ID)|PRIMARY KEY (PID,EMP_ID)"],
    lv: 3,
    exp: String.raw`<p>데이터 타입(2장), DEFAULT(2장), 다섯 가지 제약조건(8장)을 모두 써요. 부모 테이블(dept_t, project_t)이 먼저 있어야 FK를 만들 수 있어요.</p>
`
  },
  {
    n: 514,
    sql: String.raw`CREATE SEQUENCE project_seq START WITH 1 INCREMENT BY 1 NOCACHE;

INSERT INTO project_t (pid, pname, dept_id, budget) VALUES (project_seq.NEXTVAL, '신규 채용', 118, 500);
INSERT INTO project_t (pid, pname, dept_id, budget) VALUES (project_seq.NEXTVAL, '영업 확대', 102, 3000);
INSERT INTO project_t (pid, pname, dept_id, budget) VALUES (project_seq.NEXTVAL, '사업 계획', 110, 1000);
COMMIT;

CREATE VIEW v_project AS
SELECT p.pid, p.pname, d.name AS dept_name, p.start_date
FROM project_t p, dept_t d
WHERE p.dept_id = d.id;

SELECT * FROM v_project;`,
    mode: "self",
    kw: ["CREATE SEQUENCE", "NEXTVAL", "COMMIT", "CREATE VIEW"],
    lv: 2,
    exp: String.raw`<p>시퀀스(13장), INSERT(2장), 트랜잭션(9장), JOIN 뷰(13장)를 이어서 써요. start_date는 값을 주지 않아서 DEFAULT(오늘)가 들어가요. 뷰에서 두 테이블의 name이 겹치지 않게 별명을 붙여요.</p>
`
  },
  {
    n: 515,
    sql: String.raw`ROLLBACK TO ok1;   -- ②만 취소, ①은 그대로
COMMIT;            -- ①의 결과(110번 부서 사원 +100)만 확정`,
    mode: "self",
    kw: ["ROLLBACK TO OK1|ROLLBACK TO SAVEPOINT OK1"],
    lv: 2,
    exp: String.raw`<p>SAVEPOINT는 긴 작업 중간에 &quot;여기까지는 맞다&quot;는 표시를 남기는 것이에요. ROLLBACK만 쓰면 ①까지 모두 취소돼요. ②를 COMMIT한 뒤라면 되돌릴 수 없어요.</p>
`
  },
  {
    n: 516,
    sql: String.raw`CREATE VIEW v_prod_sales AS
SELECT p.pname, p.category, NVL(SUM(o.qty), 0) AS total_qty
FROM product_s p, order_s o
WHERE p.pid = o.pid(+)
GROUP BY p.pid, p.pname, p.category;

SELECT * FROM v_prod_sales ORDER BY total_qty DESC, pname;`,
    mode: "auto",
    lv: 2,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    order: [2, 0],
    exp: String.raw`<p>OUTER JOIN으로 주문 없는 상품도 남기고, SUM 결과가 NULL인 곳은 NVL로 0을 넣어요. 자주 쓰는 집계는 뷰로 만들어 두면 편해요.</p>
`
  },
  {
    n: 517,
    sql: String.raw`INSERT INTO order_s VALUES (110, 4, 3, TO_DATE('2025-05-10', 'YYYY-MM-DD'));
UPDATE product_s SET stock = stock - 3 WHERE pid = 4;
COMMIT;

INSERT INTO order_s VALUES (111, 2, 2, TO_DATE('2025-05-10', 'YYYY-MM-DD'));
-- UPDATE product_s SET stock = stock - 2 WHERE pid = 2;  → ORA-02290 (CHECK 위반)
ROLLBACK;

SELECT (SELECT COUNT(*) FROM order_s) AS 주문수,
       (SELECT stock FROM product_s WHERE pid = 4) AS 머그컵재고
FROM dual;   -- 10, 7`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE product_s (pid NUMBER(3) PRIMARY KEY, pname VARCHAR2(20) NOT NULL, category VARCHAR2(10), price NUMBER(7), stock NUMBER(5) CHECK (stock >= 0));
CREATE TABLE order_s (oid NUMBER(5) PRIMARY KEY, pid NUMBER(3) REFERENCES product_s(pid), qty NUMBER(3), odate DATE);
INSERT INTO product_s VALUES (1, '연필', '문구', 500, 100);
INSERT INTO product_s VALUES (2, '공책', '문구', 1200, 0);
INSERT INTO product_s VALUES (3, '지우개', '문구', 300, 50);
INSERT INTO product_s VALUES (4, '머그컵', '생활', 8000, 10);
INSERT INTO product_s VALUES (5, '텀블러', '생활', 15000, 0);
INSERT INTO product_s VALUES (6, 'USB 메모리', '전자', 12000, 30);
INSERT INTO product_s VALUES (7, '마우스', '전자', 25000, 5);
INSERT INTO order_s VALUES (101, 1, 10, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (102, 2, 5, TO_DATE('2025-03-02', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (103, 4, 1, TO_DATE('2025-03-15', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (104, 1, 20, TO_DATE('2025-04-01', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (105, 6, 2, TO_DATE('2025-04-03', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (106, 7, 1, TO_DATE('2025-04-20', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (107, 3, 15, TO_DATE('2025-05-05', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (108, 1, 5, TO_DATE('2025-05-06', 'YYYY-MM-DD'));
INSERT INTO order_s VALUES (109, 6, 1, TO_DATE('2025-05-07', 'YYYY-MM-DD'));
COMMIT`,
    exp: String.raw`<p>주문은 들어갔는데 재고가 줄지 않으면 데이터가 어긋나요. 함께 성공하지 못하면 ROLLBACK으로 둘 다 취소해서 원자성을 지켜요. CHECK 제약조건이 재고가 음수가 되는 것을 막아 줬어요.</p>
`
  },
  {
    n: 518,
    sql: String.raw`SELECT course_id, COUNT(*), ROUND(AVG(score), 1) AS 평균
FROM enroll_t
GROUP BY course_id
ORDER BY AVG(score) DESC;   -- JAVA 85.5, DB 82.3, WEB 75`,
    mode: "auto",
    lv: 2,
    setup: String.raw`CREATE TABLE student_t (sno NUMBER(5) PRIMARY KEY, name VARCHAR2(20) NOT NULL, grade NUMBER(1));
CREATE TABLE enroll_t (sno NUMBER(5) REFERENCES student_t(sno), course_id VARCHAR2(10), score NUMBER(3), PRIMARY KEY (sno, course_id));
INSERT INTO student_t VALUES (1, '김하늘', 1);
INSERT INTO student_t VALUES (2, '이바다', 2);
INSERT INTO student_t VALUES (3, '박구름', 2);
INSERT INTO student_t VALUES (4, '최별', 3);
INSERT INTO student_t VALUES (5, '정달', 4);
INSERT INTO enroll_t VALUES (1, 'DB', 95);
INSERT INTO enroll_t VALUES (1, 'JAVA', 80);
INSERT INTO enroll_t VALUES (2, 'DB', 70);
INSERT INTO enroll_t VALUES (2, 'WEB', 88);
INSERT INTO enroll_t VALUES (3, 'DB', 82);
INSERT INTO enroll_t VALUES (3, 'JAVA', 91);
INSERT INTO enroll_t VALUES (3, 'WEB', 60);
INSERT INTO enroll_t VALUES (4, 'WEB', 77)`,
    order: [2],
    exp: String.raw`<p>새 테이블에서도 GROUP BY와 그룹 함수는 똑같이 써요. 정렬 기준은 반올림 전 평균이어도 반올림한 별명이어도 같은 순서예요.</p>
`
  },
  {
    n: 519,
    sql: String.raw`SELECT s.name
FROM student_t s
WHERE NOT EXISTS (SELECT 'X' FROM enroll_t e WHERE e.sno = s.sno);   -- 정달`,
    mode: "auto",
    lv: 2,
    setup: String.raw`CREATE TABLE student_t (sno NUMBER(5) PRIMARY KEY, name VARCHAR2(20) NOT NULL, grade NUMBER(1));
CREATE TABLE enroll_t (sno NUMBER(5) REFERENCES student_t(sno), course_id VARCHAR2(10), score NUMBER(3), PRIMARY KEY (sno, course_id));
INSERT INTO student_t VALUES (1, '김하늘', 1);
INSERT INTO student_t VALUES (2, '이바다', 2);
INSERT INTO student_t VALUES (3, '박구름', 2);
INSERT INTO student_t VALUES (4, '최별', 3);
INSERT INTO student_t VALUES (5, '정달', 4);
INSERT INTO enroll_t VALUES (1, 'DB', 95);
INSERT INTO enroll_t VALUES (1, 'JAVA', 80);
INSERT INTO enroll_t VALUES (2, 'DB', 70);
INSERT INTO enroll_t VALUES (2, 'WEB', 88);
INSERT INTO enroll_t VALUES (3, 'DB', 82);
INSERT INTO enroll_t VALUES (3, 'JAVA', 91);
INSERT INTO enroll_t VALUES (3, 'WEB', 60);
INSERT INTO enroll_t VALUES (4, 'WEB', 77)`,
    exp: String.raw`<p>NOT EXISTS 말고도 <code>sno NOT IN (SELECT sno FROM enroll_t)</code>이나 OUTER JOIN 후 <code>e.sno IS NULL</code>로도 풀 수 있어요. enroll_t.sno에 NULL이 없어서 NOT IN도 안전해요.</p>
`
  },
  {
    n: 520,
    sql: String.raw`SELECT s.name, ROUND(AVG(e.score), 1) AS 평균,
       CASE WHEN AVG(e.score) >= 90 THEN 'A'
            WHEN AVG(e.score) >= 80 THEN 'B'
            WHEN AVG(e.score) >= 70 THEN 'C'
            ELSE 'D'
       END AS 등급
FROM student_t s, enroll_t e
WHERE s.sno = e.sno
GROUP BY s.name;   -- 김하늘 B, 이바다 C, 박구름 C, 최별 C`,
    mode: "auto",
    lv: 2,
    setup: String.raw`CREATE TABLE student_t (sno NUMBER(5) PRIMARY KEY, name VARCHAR2(20) NOT NULL, grade NUMBER(1));
CREATE TABLE enroll_t (sno NUMBER(5) REFERENCES student_t(sno), course_id VARCHAR2(10), score NUMBER(3), PRIMARY KEY (sno, course_id));
INSERT INTO student_t VALUES (1, '김하늘', 1);
INSERT INTO student_t VALUES (2, '이바다', 2);
INSERT INTO student_t VALUES (3, '박구름', 2);
INSERT INTO student_t VALUES (4, '최별', 3);
INSERT INTO student_t VALUES (5, '정달', 4);
INSERT INTO enroll_t VALUES (1, 'DB', 95);
INSERT INTO enroll_t VALUES (1, 'JAVA', 80);
INSERT INTO enroll_t VALUES (2, 'DB', 70);
INSERT INTO enroll_t VALUES (2, 'WEB', 88);
INSERT INTO enroll_t VALUES (3, 'DB', 82);
INSERT INTO enroll_t VALUES (3, 'JAVA', 91);
INSERT INTO enroll_t VALUES (3, 'WEB', 60);
INSERT INTO enroll_t VALUES (4, 'WEB', 77)`,
    exp: String.raw`<p>CASE 안에도 그룹 함수를 쓸 수 있어요. 박구름은 평균이 77.7이라 &#39;C&#39;예요.</p>
`
  },
  {
    n: 521,
    sql: String.raw`SELECT e.course_id, s.name, e.score
FROM enroll_t e, student_t s
WHERE e.sno = s.sno
  AND (e.course_id, e.score) IN (SELECT course_id, MAX(score)
                                 FROM enroll_t
                                 GROUP BY course_id);   -- DB 김하늘, JAVA 박구름, WEB 이바다`,
    mode: "auto",
    lv: 3,
    setup: String.raw`CREATE TABLE student_t (sno NUMBER(5) PRIMARY KEY, name VARCHAR2(20) NOT NULL, grade NUMBER(1));
CREATE TABLE enroll_t (sno NUMBER(5) REFERENCES student_t(sno), course_id VARCHAR2(10), score NUMBER(3), PRIMARY KEY (sno, course_id));
INSERT INTO student_t VALUES (1, '김하늘', 1);
INSERT INTO student_t VALUES (2, '이바다', 2);
INSERT INTO student_t VALUES (3, '박구름', 2);
INSERT INTO student_t VALUES (4, '최별', 3);
INSERT INTO student_t VALUES (5, '정달', 4);
INSERT INTO enroll_t VALUES (1, 'DB', 95);
INSERT INTO enroll_t VALUES (1, 'JAVA', 80);
INSERT INTO enroll_t VALUES (2, 'DB', 70);
INSERT INTO enroll_t VALUES (2, 'WEB', 88);
INSERT INTO enroll_t VALUES (3, 'DB', 82);
INSERT INTO enroll_t VALUES (3, 'JAVA', 91);
INSERT INTO enroll_t VALUES (3, 'WEB', 60);
INSERT INTO enroll_t VALUES (4, 'WEB', 77)`,
    exp: String.raw`<p>과목별 최고 점수를 다중 컬럼 서브쿼리로 구하고 학생 이름은 JOIN으로 붙여요. 상관 서브쿼리 <code>e.score = (SELECT MAX(score) FROM enroll_t x WHERE x.course_id = e.course_id)</code>로도 풀 수 있어요.</p>
`
  },
  {
    n: 522,
    sql: String.raw`CREATE TABLE customer_s (
  cid   NUMBER(5),
  cname VARCHAR2(20) CONSTRAINT customer_s_cname_nn NOT NULL,
  email VARCHAR2(40),
  grade CHAR(1) DEFAULT 'B',
  CONSTRAINT customer_s_cid_pk   PRIMARY KEY (cid),
  CONSTRAINT customer_s_email_uk UNIQUE (email),
  CONSTRAINT customer_s_grade_ck CHECK (grade IN ('A', 'B', 'C'))
);

ALTER TABLE order_s ADD (cid NUMBER(5));
ALTER TABLE order_s ADD CONSTRAINT order_s_cid_fk FOREIGN KEY (cid) REFERENCES customer_s(cid);

CREATE SEQUENCE customer_s_seq START WITH 1 INCREMENT BY 1;

INSERT INTO customer_s (cid, cname, email) VALUES (customer_s_seq.NEXTVAL, '김하늘', 'sky@a.com');
INSERT INTO customer_s (cid, cname, email) VALUES (customer_s_seq.NEXTVAL, '이바다', 'sea@a.com');
COMMIT;

CREATE VIEW v_customer_orders AS
SELECT c.cname, COUNT(o.oid) AS order_cnt
FROM customer_s c, order_s o
WHERE c.cid = o.cid(+)
GROUP BY c.cid, c.cname;`,
    mode: "self",
    kw: ["CREATE TABLE CUSTOMER_S", "CHECK", "FOREIGN KEY", "CREATE SEQUENCE", "CREATE VIEW"],
    lv: 3,
    exp: String.raw`<p>기존 주문의 cid는 NULL이라 FK를 추가해도 에러가 나지 않아요. 뷰에서 COUNT(o.oid)를 써야 주문 없는 회원이 0건으로 나와요(COUNT(*)면 1건).</p>
`
  },
  {
    n: 523,
    sql: String.raw`SELECT e.name, COUNT(*) AS 고객수, COUNT(DISTINCT c.region_id) AS 지역수
FROM s_emp e, s_customer c
WHERE e.id = c.sales_rep_id
  AND e.title = '영업대표이사'
GROUP BY e.name;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>COUNT(DISTINCT 컬럼)은 중복을 빼고 종류를 세요. 신종필의 고객 5명은 지역 번호 5(부산/경상)와 6(S_REGION에 없는 번호), 두 종류에 걸쳐 있어요.</p>
`
  },
  {
    n: 524,
    sql: String.raw`SELECT dept_id,
       COUNT(DECODE(title, '사원', 1)) AS 사원,
       COUNT(DECODE(title, '과장', 1)) AS 과장,
       COUNT(*)                        AS 전체
FROM s_emp
GROUP BY dept_id
ORDER BY dept_id;`,
    mode: "auto",
    lv: 2,
    order: [0],
    exp: String.raw`<p>DECODE로 조건에 맞을 때만 값을 만들고 COUNT로 세는 방법은 PIVOT이 없을 때 쓰는 대표적인 방법이에요(14장). 전체 인원은 COUNT(*)로 함께 구해요.</p>
`
  },
  {
    n: 525,
    sql: String.raw`CREATE INDEX s_emp_dept_idx   ON s_emp (dept_id);
CREATE INDEX s_emp_mailid_idx ON s_emp (mailid);
CREATE INDEX s_emp_salary_idx ON s_emp (salary);

-- 컬럼을 가공하지 않게 고치기
SELECT * FROM s_emp WHERE mailid = 'kugon';          -- 저장된 값이 소문자이므로
SELECT * FROM s_emp WHERE salary > 30000 / 12;`,
    mode: "self",
    kw: ["CREATE INDEX", "30000 / 12|30000/12|2500", "MAILID = 'KUGON'"],
    lv: 2,
    exp: String.raw`<p>인덱스는 WHERE에 자주 쓰는 컬럼에 만들어요(13장). 컬럼에 함수나 계산을 씌우면 인덱스를 못 써서, 계산은 반대쪽 값으로 옮겨요(14.11). 실습 테이블은 25행이라 실제로는 옵티마이저가 인덱스를 안 쓸 수도 있어요.</p>
`
  },
  {
    n: 526,
    sql: String.raw`-- 1) 인사팀용 ROLE
CREATE ROLE hr_team;
GRANT SELECT, UPDATE ON s_emp TO hr_team;
GRANT hr_team TO hr1;

-- 2) 급여를 뺀 뷰를 만들고, 다른 팀에는 뷰만 조회 권한
CREATE VIEW v_emp_public AS
SELECT id, name, title, dept_id FROM s_emp
WITH READ ONLY;
GRANT SELECT ON v_emp_public TO test;`,
    mode: "self",
    kw: ["CREATE ROLE", "GRANT", "CREATE VIEW", "TO TEST"],
    lv: 3,
    exp: String.raw`<p>뷰로 보여줄 컬럼을 제한하고(13장), 권한은 테이블 대신 뷰에 줘요(12장). 여러 사람에게 같은 권한을 줄 때는 ROLE로 묶어요. WITH READ ONLY로 뷰를 통한 수정도 막을 수 있어요.</p>
`
  },
  {
    n: 527,
    sql: String.raw`SELECT *
FROM (SELECT name, salary, RANK() OVER (ORDER BY salary DESC) AS 순위
      FROM s_emp)
WHERE 순위 <= 5;`,
    mode: "auto",
    lv: 2,
    exp: String.raw`<p>분석 함수는 WHERE에 바로 쓸 수 없어서 인라인 뷰로 감싸요. ROWNUM으로 풀면 동점자를 고려하지 않고 딱 5행만 잘라요. 여기서는 4위가 둘이라 결과가 같지만, 동점이 5위 경계에 걸리면 두 방법의 결과가 달라져요.</p>
`
  },
  {
    n: 528,
    sql: String.raw`-- ① 내 객체 목록
SELECT object_name, object_type
FROM user_objects
WHERE object_type IN ('TABLE', 'VIEW', 'SEQUENCE', 'SYNONYM')
ORDER BY object_type, object_name;

-- ② 자식 → 부모 순서로 (뷰·시퀀스는 아무 때나)
DROP VIEW v_project;
DROP TABLE pmember_t;      -- project_t를 참조하는 자식 먼저
DROP TABLE project_t;
DROP SEQUENCE project_seq;`,
    mode: "self",
    kw: ["USER_OBJECTS", "DROP VIEW", "DROP TABLE PMEMBER_T", "DROP SEQUENCE"],
    lv: 3,
    exp: String.raw`<p>부모 테이블을 먼저 지우면 자식의 FK 때문에 ORA-02449가 나요(11장). 자식부터 지우거나 <code>DROP TABLE project_t CASCADE CONSTRAINTS</code>를 써요. 데이터 사전(10장)으로 남은 객체가 없는지 마지막에 확인해요.</p>
`
  },
  {
    n: 529,
    sql: String.raw`SELECT e.dept_id, d.name, e.name, e.salary,
       CASE WHEN e.salary = a.max_sal THEN '부서 1위'
            WHEN e.salary >= a.avg_sal THEN '평균 이상'
            ELSE '평균 미만' END AS 위치
FROM s_emp e, s_dept d,
     (SELECT dept_id, MAX(salary) AS max_sal, AVG(salary) AS avg_sal FROM s_emp GROUP BY dept_id) a
WHERE e.dept_id = d.id
  AND e.dept_id = a.dept_id
ORDER BY e.dept_id, e.salary DESC;`,
    mode: "auto",
    lv: 3,
    order: [0, 3],
    exp: String.raw`<p>INLINE VIEW로 부서별 최고·평균을 미리 구해 두고, CASE에서 위에서부터 차례로 비교해요. 조건 순서가 중요해요. &#39;평균 이상&#39;을 먼저 쓰면 1위도 &#39;평균 이상&#39;으로 나와요.</p>
`
  }
];
