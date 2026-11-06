// SQL 실습 문제: 장(stages) → 소단원(subs) → 문제(items)
var W = window.W = window.W || {};
W.total = 529;

W.stages = [
{
  "subs": [
    {
      "items": [
        {
          n: 1,
          lv: 1,
          html: String.raw`<p>관계형 데이터베이스에서 데이터를 저장하는 기본 단위를 무엇이라고 하나요? 그 안의 가로 한 줄과 세로 한 줄은 각각 무엇이라고 부르는지, S_DEPT를 예로 들어 설명하세요.</p>
`
        },
        {
          n: 2,
          lv: 1,
          html: String.raw`<p>S_DEPT 테이블의 모든 데이터를 조회하세요. 행과 열은 각각 몇 개인가요? <span class="rows-chip">(11행)</span></p>
`
        },
        {
          n: 3,
          lv: 1,
          html: String.raw`<p>S_EMP에서 각 직원을 하나로 구별할 수 있는 컬럼(Primary Key)은 무엇일까요? NAME을 Primary Key로 쓰면 안 되는 이유도 설명하세요.</p>
`
        },
        {
          n: 4,
          lv: 1,
          html: String.raw`<p>S_DEPT의 REGION_ID처럼 다른 테이블의 값을 가리키는 컬럼을 무엇이라고 하나요? S_EMP에서 같은 역할을 하는 컬럼 두 개를 찾고, 각각 어느 테이블의 어떤 컬럼을 가리키는지 쓰세요.</p>
`
        },
        {
          n: 5,
          lv: 1,
          html: String.raw`<p>NULL은 0이나 빈 문자와 어떻게 다른가요? 아래 두 쿼리를 실행해서 S_EMP의 COMMISION_PCT와 S_CUSTOMER의 CREDIT_RATING 값을 비교하고 설명하세요.</p>
<pre><code><span class="hl-kw">SELECT</span> name, commision_pct <span class="hl-kw">FROM</span> s_emp;
<span class="hl-kw">SELECT</span> name, credit_rating <span class="hl-kw">FROM</span> s_customer;</code></pre>
`
        },
        {
          n: 6,
          lv: 1,
          html: String.raw`<p>행과 열이 만나는 칸을 필드(Field)라고 해요. S_DEPT에서 ID가 110인 행의 NAME 필드 값을 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 7,
          lv: 2,
          html: String.raw`<p>S_CUSTOMER에서 Primary Key 역할을 하는 컬럼과, 다른 테이블을 가리키는(Foreign Key 역할) 컬럼을 모두 찾고 각각 어느 테이블의 어떤 컬럼을 가리키는지 쓰세요.</p>
`
        },
        {
          n: 8,
          lv: 2,
          html: String.raw`<p>직원 테이블에 부서 번호 대신 부서 이름과 부서 지역을 직원마다 그대로 적어 두면 어떤 문제가 생길까요? 관계형 DB가 S_EMP와 S_DEPT처럼 테이블을 나누는 이유와 함께 설명하세요.</p>
`
        },
        {
          n: 9,
          lv: 2,
          html: String.raw`<p>다음 상황에서 커미션 값으로 알맞은 것은 0과 NULL 중 무엇일까요?</p>
<ul>
<li>(가) 커미션을 받지 않기로 정해진 직원</li>
<li>(나) 커미션을 받을지 아직 정해지지 않은 신입 직원</li>
<li>(다) 커미션 계약서를 잃어버려서 얼마인지 모르는 직원</li>
</ul>
`
        },
        {
          n: 10,
          lv: 2,
          html: String.raw`<p>S_DEPT의 ID가 정말 Primary Key처럼 행마다 다른지 확인해 보세요. 전체 행 수와 서로 다른 ID 값의 개수를 한 번에 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 11,
          lv: 2,
          html: String.raw`<p>DBMS, RDBMS, SQL의 관계를 한두 문장으로 설명하고, 오라클은 이 중 무엇인지 쓰세요.</p>
`
        },
        {
          n: 12,
          lv: 3,
          html: String.raw`<p>고객의 전화번호(PHONE)를 S_CUSTOMER의 Primary Key로 쓸 수 있을지 확인하려고 해요. 전체 고객 수와 서로 다른 전화번호의 개수를 함께 조회하고, PK로 쓸 수 있는지 판단하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 13,
          lv: 3,
          html: String.raw`<p>앞 문제에서 중복이 있었던 전화번호가 무엇이고 몇 번 나오는지 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 14,
          lv: 3,
          html: String.raw`<p>S_CUSTOMER의 REGION_ID가 FK처럼 S_REGION.ID를 잘 가리키고 있는지 확인하려고 해요. S_REGION에 없는 지역 번호를 가진 고객의 이름과 지역 번호를 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 15,
          lv: 3,
          html: String.raw`<p>S_CUSTOMER의 SALES_REP_ID 중 S_EMP에 없는 직원 번호를 가진 고객의 이름과 번호를 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 16,
          lv: 3,
          html: String.raw`<p>S_EMP의 MANAGER_ID가 S_EMP.ID를 가리키는 관계를 확인하세요. 존재하지 않는 직원 번호를 상사로 가진 직원의 이름, 직책, MANAGER_ID를 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 17,
          lv: 3,
          html: String.raw`<p>다음 조건식의 결과가 참(TRUE), 거짓(FALSE), 알 수 없음(UNKNOWN) 중 무엇인지 쓰세요.</p>
<ul>
<li>(가) <code>NULL = NULL</code></li>
<li>(나) <code>NULL &lt;&gt; 1</code></li>
<li>(다) <code>1 = 1 AND NULL = 1</code></li>
<li>(라) <code>1 = 1 OR NULL = 1</code></li>
<li>(마) <code>NOT (NULL = 1)</code></li>
</ul>
`
        },
        {
          n: 18,
          lv: 3,
          html: String.raw`<p>아래 세 쿼리의 결과 행 수를 먼저 예상하고, 실행해서 확인하세요. 왜 그렇게 나오는지도 설명하세요.</p>
<pre><code><span class="hl-kw">SELECT</span> <span class="hl-fn">COUNT</span>(*) <span class="hl-kw">FROM</span> s_customer <span class="hl-kw">WHERE</span> credit_rating = <span class="hl-kw">NULL</span>;
<span class="hl-kw">SELECT</span> <span class="hl-fn">COUNT</span>(*) <span class="hl-kw">FROM</span> s_customer <span class="hl-kw">WHERE</span> credit_rating &lt;&gt; <span class="hl-str">'A'</span>;
<span class="hl-kw">SELECT</span> <span class="hl-fn">COUNT</span>(*) <span class="hl-kw">FROM</span> s_customer <span class="hl-kw">WHERE</span> credit_rating <span class="hl-kw">IS</span> <span class="hl-kw">NULL</span>;</code></pre>
`
        },
        {
          n: 19,
          lv: 3,
          html: String.raw`<p>학생, 과목, 수강 정보를 관계형 DB로 저장하려고 해요. 테이블을 몇 개로 나누면 좋을지, 각 테이블의 Primary Key와 Foreign Key를 정해서 쓰세요. (한 학생은 여러 과목을, 한 과목은 여러 학생이 수강해요.)</p>
`
        }
      ],
      "title": "관계형 DB와 용어 (1.1~1.2)",
      "from": 1,
      "to": 19,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 20,
          lv: 1,
          html: String.raw`<p>다음 설명에 맞는 것을 SQL, SQL*Plus, PL/SQL 중에서 고르세요.</p>
<ul>
<li>(가) DB 서버에 조회·수정 명령을 내리는 표준 언어</li>
<li>(나) SQL을 입력하고 실행하는 오라클의 실행 도구</li>
<li>(다) SQL에 IF·반복문 같은 프로그램 로직을 더한 오라클 전용 언어</li>
</ul>
`
        },
        {
          n: 21,
          lv: 1,
          html: String.raw`<p>SYS나 SYSTEM 계정에 실습용 테이블을 만들거나 데이터를 넣으면 안 되는 이유는 무엇일까요? 실습용 계정(student)을 따로 만드는 이유와 함께 설명하세요.</p>
`
        },
        {
          n: 22,
          lv: 1,
          html: String.raw`<p>SYSTEM 계정으로 접속했다고 할 때, 비밀번호가 <code>1234</code>인 사용자 <code>study</code>를 만드는 SQL을 쓰세요. 기본 TABLESPACE는 users, 임시 TABLESPACE는 temp예요.</p>
`
        },
        {
          n: 23,
          lv: 1,
          html: String.raw`<p>22번에서 만든 study 사용자로 바로 접속하면 어떻게 될까요? study가 접속하고 테이블을 만들 수 있게 하는 SQL을 쓰고, 마지막에 resource ROLE만 다시 빼는 SQL도 쓰세요.</p>
`
        },
        {
          n: 24,
          lv: 2,
          html: String.raw`<p><code>study</code> 사용자의 비밀번호를 <code>abcd</code>로 바꾸는 SQL과, 다 쓴 뒤 <code>study</code> 사용자를 지우는 SQL을 쓰세요. (SYSTEM 계정에서 실행)</p>
`
        },
        {
          n: 25,
          lv: 2,
          html: String.raw`<p><code>GRANT connect, resource TO study;</code>를 받은 study가 할 수 있는 일과 할 수 없는 일을 하나씩 쓰세요. 예를 들어 <code>CREATE VIEW</code>는 가능할까요?</p>
`
        },
        {
          n: 26,
          lv: 2,
          html: String.raw`<p>사용자를 만들 때 <code>TEMPORARY TABLESPACE</code>를 따로 지정하는 이유는 무엇일까요?</p>
`
        },
        {
          n: 27,
          lv: 2,
          html: String.raw`<p>다음 코드가 SQL인지 PL/SQL인지 구분하세요.</p>
<ul>
<li>(가) <code>SELECT name FROM s_emp;</code></li>
<li>(나) <code>BEGIN IF :NEW.salary &lt; 0 THEN ... END IF; END;</code></li>
<li>(다) <code>UPDATE s_emp SET salary = 0 WHERE id = 1;</code></li>
<li>(라) 트리거의 BEGIN ~ END 부분</li>
</ul>
`
        },
        {
          n: 28,
          lv: 2,
          html: String.raw`<p>SQL*Plus에서 SQL을 실행할 때, 문장 끝에 붙이는 <code>;</code>와 줄에 혼자 쓰는 <code>/</code>는 각각 어떤 뜻일까요?</p>
`
        },
        {
          n: 29,
          lv: 3,
          html: String.raw`<p>개발자 3명(dev1, dev2, dev3)에게 똑같이 &quot;접속, 테이블 만들기, 뷰 만들기&quot; 권한을 주려고 해요. 사용자를 만들고 권한을 주는 SQL을 ROLE을 써서 쓰세요. 비밀번호는 모두 1234예요.</p>
`
        },
        {
          n: 30,
          lv: 3,
          html: String.raw`<p>테이블을 몇 개 만들어 둔 <code>study</code> 사용자를 <code>DROP USER study;</code>로 지우려고 하면 에러가 나요. 이유와 해결 방법을 쓰세요.</p>
`
        }
      ],
      "title": "SQL과 오라클 계정 (1.3~1.8)",
      "from": 20,
      "to": 30,
      "before": [],
      "after": []
    }
  ],
  "no": 1,
  "kind": "chapter",
  "label": "1장",
  "title": "1장 Introduction",
  "short": "Introduction"
},
{
  "subs": [
    {
      "items": [
        {
          n: 31,
          lv: 1,
          html: String.raw`<p>다음 중 테이블 이름으로 쓸 수 없는 것을 모두 고르고, 이유를 쓰세요.</p>
<ul>
<li>(가) <code>emp_2026</code></li>
<li>(나) <code>2026_emp</code></li>
<li>(다) <code>emp-list</code></li>
<li>(라) <code>select</code></li>
<li>(마) <code>emp$info</code></li>
</ul>
`
        },
        {
          n: 32,
          lv: 1,
          html: String.raw`<p>다음 값을 저장하기에 알맞은 데이터 타입과 크기를 쓰세요.</p>
<ul>
<li>(가) 이름 (최대 20자, 길이가 제각각)</li>
<li>(나) 성별 (&#39;M&#39; 또는 &#39;F&#39;)</li>
<li>(다) 급여 (소수 둘째 자리까지, 최대 99999.99)</li>
<li>(라) 입사일</li>
</ul>
`
        },
        {
          n: 33,
          lv: 1,
          html: String.raw`<p><code>CHAR(10)</code> 컬럼과 <code>VARCHAR2(10)</code> 컬럼에 각각 &#39;abc&#39;를 넣으면 저장되는 값은 어떻게 다를까요? 이름처럼 길이가 제각각인 값에는 어느 쪽이 알맞나요?</p>
`
        },
        {
          n: 34,
          lv: 1,
          html: String.raw`<p><code>NUMBER(5,2)</code> 컬럼에 저장할 수 있는 가장 큰 값은 얼마인가요?</p>
`
        },
        {
          n: 35,
          lv: 2,
          html: String.raw`<p><code>CHAR(5)</code> 컬럼에 &#39;abcdef&#39;를 넣으면 어떻게 될까요? 그리고 &#39;ab&#39;를 넣으면 실제로는 어떤 값이 저장될까요?</p>
`
        },
        {
          n: 36,
          lv: 2,
          html: String.raw`<p><code>TO_DATE(&#39;2025-13-01&#39;, &#39;YYYY-MM-DD&#39;)</code>와 <code>TO_DATE(&#39;2025-02-30&#39;, &#39;YYYY-MM-DD&#39;)</code>는 각각 어떻게 될까요?</p>
`
        },
        {
          n: 37,
          lv: 3,
          html: String.raw`<p><code>NUMBER(7,2)</code> 컬럼에 12345.678을 넣으면 어떤 값이 저장될까요? <code>NUMBER(5,2)</code> 컬럼에 12345.6을 넣으면 어떻게 될까요?</p>
`
        },
        {
          n: 38,
          lv: 3,
          html: String.raw`<p><code>CREATE TABLE &quot;Emp List&quot; (id NUMBER);</code>처럼 큰따옴표로 감싸면 띄어쓰기가 있는 이름도 만들 수 있어요. 이렇게 만든 테이블을 조회할 때 어떤 불편이 생길까요?</p>
`
        }
      ],
      "title": "이름 규칙과 데이터 타입 (2.1~2.2)",
      "from": 31,
      "to": 38,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 39,
          lv: 1,
          html: String.raw`<p>아래 조건으로 학생 테이블 <code>student_ex</code>를 만들고, <code>DESC student_ex;</code>로 구조를 확인하세요.</p>
<ul>
<li>id: 숫자 5자리</li>
<li>name: 가변 길이 문자 20자</li>
<li>grade: 숫자 1자리, 값을 주지 않으면 1</li>
<li>enter_date: 날짜, 값을 주지 않으면 오늘 날짜</li>
</ul>
`
        },
        {
          n: 40,
          lv: 3,
          html: String.raw`<p>도서 테이블 <code>book_t</code>를 만드세요. ISBN은 항상 13자리 문자, 제목은 최대 100자, 가격은 7자리 정수(기본값 0), 출판일은 날짜, 재고는 3자리 정수(기본값 0)예요. ISBN에 CHAR를 쓰는 이유도 쓰세요.</p>
`
        }
      ],
      "title": "CREATE TABLE (2.3)",
      "from": 39,
      "to": 40,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 41,
          lv: 1,
          html: String.raw`<p>비어 있는 <code>student_ex</code>에 컬럼 목록을 지정해서 id 1, 이름 &#39;홍길동&#39;인 학생을 넣으세요. 마지막에 <code>SELECT id, name, grade FROM student_ex;</code>로 확인하세요. grade에는 어떤 값이 들어갔나요? <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 42,
          lv: 1,
          html: String.raw`<p>비어 있는 <code>student_ex</code>에 컬럼 목록 없이 id 2, 이름 &#39;김철수&#39;, 3학년, 입학일 2023년 3월 2일인 학생을 넣으세요. 마지막에 <code>SELECT id, name, grade, TO_CHAR(enter_date, &#39;YYYY-MM-DD&#39;) FROM student_ex;</code>로 확인하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 43,
          lv: 1,
          html: String.raw`<p><code>student_ex</code>에 학생 3명(홍길동 1학년, 김철수 3학년, 이영희 2학년)이 들어 있어요. 1학년 학생의 학년을 2로 바꾸고, <code>SELECT id, name, grade FROM student_ex ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(3행)</span></p>
`
        },
        {
          n: 44,
          lv: 1,
          html: String.raw`<p>같은 3명이 들어 있는 <code>student_ex</code>에서 id가 2인 학생의 이름을 &#39;김철민&#39;, 학년을 4로 한 번에 바꾸세요. 마지막에 <code>SELECT id, name, grade FROM student_ex ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(3행)</span></p>
`
        },
        {
          n: 45,
          lv: 1,
          html: String.raw`<p>같은 3명이 들어 있는 <code>student_ex</code>에서 3학년 이상인 학생을 지우세요. 마지막에 <code>SELECT id, name, grade FROM student_ex ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(2행)</span></p>
`
        },
        {
          n: 46,
          lv: 2,
          html: String.raw`<p><code>UPDATE student_ex SET grade = 1;</code>을 실행하면 어떤 일이 생길까요? 이런 실수를 막는 습관과, COMMIT하기 전이라면 되돌리는 방법을 쓰세요.</p>
`
        },
        {
          n: 47,
          lv: 2,
          html: String.raw`<p>이영희(id 3)의 학년을 1 올리고, 입학일을 2024년 3월 2일로 바꾸세요. 마지막에 <code>SELECT id, name, grade, TO_CHAR(enter_date, &#39;YYYY-MM-DD&#39;) FROM student_ex ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(3행)</span></p>
<p><code>student_ex</code>에는 홍길동(1학년, 2025-03-04 입학), 김철수(3학년, 2023-03-02), 이영희(2학년, 2024-03-04)가 들어 있어요.</p>
`
        },
        {
          n: 48,
          lv: 2,
          html: String.raw`<p>2024년 1월 1일 이후에 입학한 학생을 지우고, <code>SELECT id, name FROM student_ex ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(1행)</span></p>
<p><code>student_ex</code>에는 홍길동(1학년, 2025-03-04 입학), 김철수(3학년, 2023-03-02), 이영희(2학년, 2024-03-04)가 들어 있어요.</p>
`
        },
        {
          n: 49,
          lv: 2,
          html: String.raw`<p>모든 학생의 학년을 1씩 올리고, <code>SELECT id, name, grade FROM student_ex ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(3행)</span></p>
<p><code>student_ex</code>에는 홍길동(1학년, 2025-03-04 입학), 김철수(3학년, 2023-03-02), 이영희(2학년, 2024-03-04)가 들어 있어요.</p>
`
        },
        {
          n: 50,
          lv: 2,
          html: String.raw`<p>비어 있는 <code>student_ex</code>에 두 학생을 넣으세요. 박민수(id 4)는 컬럼 목록에 id와 name만 써서, 최별(id 5, 2학년, 입학일 2024-03-04)은 컬럼 목록 없이 넣어요. 마지막에 <code>SELECT id, name, grade FROM student_ex ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(2행)</span></p>
`
        },
        {
          n: 51,
          lv: 2,
          html: String.raw`<p><code>INSERT INTO student_ex VALUES (5, &#39;최별&#39;, 2);</code>를 실행하면 에러가 나요. 이유와 고치는 방법 두 가지를 쓰세요.</p>
`
        },
        {
          n: 52,
          lv: 2,
          html: String.raw`<p><code>INSERT INTO student_ex (id, name) VALUES (6, 정달);</code>은 왜 에러가 날까요? 고쳐 쓰세요.</p>
`
        },
        {
          n: 53,
          lv: 2,
          html: String.raw`<p>id가 1 또는 3인 학생의 학년을 4로 바꾸세요. <code>IN</code>을 써 보세요. 마지막에 <code>SELECT id, name, grade FROM student_ex ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(3행)</span></p>
<p><code>student_ex</code>에는 홍길동(1학년, 2025-03-04 입학), 김철수(3학년, 2023-03-02), 이영희(2학년, 2024-03-04)가 들어 있어요.</p>
`
        },
        {
          n: 54,
          lv: 3,
          html: String.raw`<p>학년 말 처리를 하려고 해요. ① 3학년 학생은 졸업해서 삭제하고, ② 남은 학생은 학년을 1씩 올리고, ③ 신입생 박민수(id 4, 학년과 입학일은 기본값)를 넣으세요. 마지막에 <code>SELECT id, name, grade FROM student_ex ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(3행)</span></p>
<p><code>student_ex</code>에는 홍길동(1학년, 2025-03-04 입학), 김철수(3학년, 2023-03-02), 이영희(2학년, 2024-03-04)가 들어 있어요.</p>
`
        },
        {
          n: 55,
          lv: 3,
          html: String.raw`<p>재고가 0인 책의 가격을 10% 내리고, <code>SELECT title, price FROM book_t ORDER BY title;</code>로 확인하세요. <span class="rows-chip">(4행)</span></p>
<p><code>book_t</code>(isbn, title, price, pub_date, stock)에는 &#39;SQL 첫걸음&#39;(18000원, 2019-05-01, 재고 0), &#39;오라클 정석&#39;(32000원, 2021-03-15, 재고 5), &#39;데이터 모델링&#39;(27000원, 2018-11-20, 재고 0), &#39;자바 입문&#39;(22000원, 2022-01-10, 재고 12)이 들어 있어요.</p>
`
        },
        {
          n: 56,
          lv: 3,
          html: String.raw`<p>가격이 20000원 이상이면서 2020년 이전에 나온 책을 지우고, <code>SELECT title FROM book_t ORDER BY title;</code>로 확인하세요. <span class="rows-chip">(3행)</span></p>
<p><code>book_t</code>(isbn, title, price, pub_date, stock)에는 &#39;SQL 첫걸음&#39;(18000원, 2019-05-01, 재고 0), &#39;오라클 정석&#39;(32000원, 2021-03-15, 재고 5), &#39;데이터 모델링&#39;(27000원, 2018-11-20, 재고 0), &#39;자바 입문&#39;(22000원, 2022-01-10, 재고 12)이 들어 있어요.</p>
`
        },
        {
          n: 57,
          lv: 3,
          html: String.raw`<p><code>swap_t</code>(a, b)에는 (1, 2), (3, 4) 두 행이 있어요. <code>UPDATE swap_t SET a = b, b = a;</code>를 실행하면 결과가 어떻게 될지 예상한 뒤, 실행하고 <code>SELECT a, b FROM swap_t ORDER BY a;</code>로 확인하세요. <span class="rows-chip">(2행)</span></p>
`
        },
        {
          n: 58,
          lv: 3,
          html: String.raw`<p>1학년은 2학년으로, 2학년은 3학년으로 올리되 3학년은 그대로 두려고 해요. UPDATE 두 번으로 하되, 1학년이 한꺼번에 3학년까지 올라가지 않게 순서를 정하세요. 마지막에 <code>SELECT id, name, grade FROM student_ex ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(3행)</span></p>
<p><code>student_ex</code>에는 홍길동(1학년, 2025-03-04 입학), 김철수(3학년, 2023-03-02), 이영희(2학년, 2024-03-04)가 들어 있어요.</p>
`
        },
        {
          n: 59,
          lv: 3,
          html: String.raw`<p><code>DELETE FROM student_ex;</code>와 <code>DROP TABLE student_ex;</code>의 차이를 설명하세요. 실수로 실행했을 때 되돌릴 수 있는 것은 어느 쪽인가요?</p>
`
        },
        {
          n: 60,
          lv: 3,
          html: String.raw`<p><code>INSERT INTO student_ex (id, name, grade) VALUES (7, &#39;정달&#39;, NULL);</code>을 실행하면 grade에는 DEFAULT 1이 들어갈까요, NULL이 들어갈까요? 실행하고 <code>SELECT id, name, grade FROM student_ex;</code>로 확인하세요. <span class="rows-chip">(1행)</span></p>
`
        }
      ],
      "title": "INSERT·UPDATE·DELETE (2.6~2.8)",
      "from": 41,
      "to": 60,
      "before": [],
      "after": ["<p><code>student_ex</code>, <code>book_t</code>처럼 문제에 데이터가 적혀 있는 테이블은 채점할 때 문제에 적힌 상태로 먼저 만들어 두고 내 SQL을 실행해요. 그래서 INSERT·UPDATE·DELETE와 마지막 SELECT만 쓰면 돼요.</p>\n"]
    }
  ],
  "no": 2,
  "kind": "chapter",
  "label": "2장",
  "title": "2장 테이블 생성과 데이터 조작(DML)",
  "short": "테이블 생성과 DML"
},
{
  "subs": [
    {
      "items": [
        {
          n: 61,
          lv: 1,
          html: String.raw`<p>S_EMP 테이블의 모든 데이터를 조회하세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 62,
          lv: 1,
          html: String.raw`<p>직원의 이름(NAME), 직책(TITLE), 급여(SALARY)만 조회하세요.</p>
`
        },
        {
          n: 63,
          lv: 1,
          html: String.raw`<p>직원의 이름과 연봉(급여 × 12)을 조회하되, 연봉 컬럼의 이름을 <code>연봉</code>으로 바꿔서 보여주세요.</p>
`
        },
        {
          n: 64,
          lv: 1,
          html: String.raw`<p>S_EMP에 어떤 직책들이 있는지 중복 없이 조회하세요. <span class="rows-chip">(8행)</span></p>
`
        },
        {
          n: 65,
          lv: 3,
          html: String.raw`<p>S_EMP에 부서번호와 직책의 조합이 몇 가지 있는지 보려고 해요. 중복 없이 부서번호와 직책을 조회하세요. <span class="rows-chip">(19행)</span></p>
`
        }
      ],
      "title": "SELECT 기본",
      "from": 61,
      "to": 65,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 66,
          lv: 1,
          html: String.raw`<p>급여가 3000 이상인 직원의 이름과 급여를 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 67,
          lv: 1,
          html: String.raw`<p>부서번호(DEPT_ID)가 110인 직원을 조회하세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 68,
          lv: 1,
          html: String.raw`<p>급여가 1000 이상 2500 이하인 직원을 조회하세요. <code>BETWEEN</code>을 써보세요. <span class="rows-chip">(8행)</span></p>
`
        },
        {
          n: 69,
          lv: 1,
          html: String.raw`<p>부서번호가 101, 102, 118 중 하나인 직원을 조회하세요. <code>IN</code>을 써보세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 70,
          lv: 1,
          html: String.raw`<p>성이 &#39;김&#39;씨인 직원을 조회하세요. <code>LIKE</code>를 써보세요. <span class="rows-chip">(3행)</span></p>
`
        },
        {
          n: 71,
          lv: 2,
          html: String.raw`<p>2016년에 입사한 직원을 조회하세요. <span class="rows-chip">(19행)</span></p>
`
        },
        {
          n: 72,
          lv: 2,
          html: String.raw`<p>신용등급(CREDIT_RATING)이 비어 있는 고객을 조회하세요. <span class="rows-chip">(15행)</span> 힌트: <code>= &#39;&#39;</code> 로는 안 나와요. 왜 그런지도 생각해 보세요.</p>
`
        },
        {
          n: 73,
          lv: 2,
          html: String.raw`<p>부서번호가 110 또는 113이면서 급여가 1000 이상인 직원의 이름, 부서번호, 급여를 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 74,
          lv: 2,
          html: String.raw`<p>직책이 &#39;사원&#39;이 아니면서 급여가 2000 미만인 직원의 이름, 직책, 급여를 조회하세요. <span class="rows-chip">(3행)</span></p>
`
        },
        {
          n: 75,
          lv: 2,
          html: String.raw`<p>이름이 &#39;이&#39;로 시작하거나 &#39;철&#39;로 끝나는 직원의 이름을 조회하세요. <span class="rows-chip">(6행)</span></p>
`
        },
        {
          n: 76,
          lv: 2,
          html: String.raw`<p>이름의 두 번째 글자가 &#39;정&#39;인 직원의 이름을 조회하세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 77,
          lv: 2,
          html: String.raw`<p>메일ID에 &#39;un&#39;이 들어 있고, 부서번호가 102 이상 106 이하인 직원의 이름, 메일ID, 부서번호를 조회하세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 78,
          lv: 3,
          html: String.raw`<p>&quot;직책이 과장이거나 사원인 직원 중 113번 부서 직원&quot;을 찾으려고 <code>WHERE title = &#39;과장&#39; OR title = &#39;사원&#39; AND dept_id = 113</code>이라고 썼더니 결과가 이상해요. 무엇이 문제인지 생각해 보고, 의도대로 고친 쿼리로 이름, 직책, 부서번호를 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 79,
          lv: 3,
          html: String.raw`<p>&quot;신용등급이 &#39;A&#39;가 아닌 고객&quot;을 모두 찾으려고 <code>WHERE credit_rating &lt;&gt; &#39;A&#39;</code>라고 썼더니 0행이 나와요. 신용등급이 비어 있는 고객도 &#39;A&#39;가 아니니 포함되도록 고쳐서 고객 이름을 조회하세요. <span class="rows-chip">(15행)</span></p>
`
        },
        {
          n: 80,
          lv: 3,
          html: String.raw`<p>2016년 6월 17일 하루 동안 입사한 직원의 이름을 날짜 범위 조건(<code>&gt;=</code>와 <code>&lt;</code>)으로 조회하세요. 입사일에 시간이 들어 있어도 빠지지 않아야 해요. <span class="rows-chip">(12행)</span></p>
`
        },
        {
          n: 81,
          lv: 3,
          html: String.raw`<p>메일ID가 소문자 &#39;j&#39; 또는 대문자 &#39;J&#39;로 시작하는 직원의 이름과 메일ID를 조회하세요. <span class="rows-chip">(6행)</span></p>
`
        },
        {
          n: 82,
          lv: 3,
          html: String.raw`<p><code>WHERE salary BETWEEN 2500 AND 1000</code>은 0행이 나와요. 이유를 생각해 보고, 급여가 1000 이상 2500 이하인 직원의 이름과 급여를 제대로 조회하세요. <span class="rows-chip">(8행)</span></p>
`
        }
      ],
      "title": "WHERE 조건",
      "from": 66,
      "to": 82,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 83,
          lv: 1,
          html: String.raw`<p>직책이 &#39;사원&#39;인 직원을 급여가 높은 순으로 조회하세요. <span class="rows-chip">(10행)</span></p>
`
        },
        {
          n: 84,
          lv: 1,
          html: String.raw`<p>전체 직원을 부서번호 오름차순으로, 같은 부서 안에서는 급여 내림차순으로 정렬하세요.</p>
`
        },
        {
          n: 85,
          lv: 2,
          html: String.raw`<p>2016년 상반기(1월 1일 ~ 6월 30일)에 입사한 직원의 이름과 입사일을 입사일 순으로 조회하세요. <span class="rows-chip">(18행)</span></p>
`
        },
        {
          n: 86,
          lv: 2,
          html: String.raw`<p>전체 직원을 부서번호 내림차순으로, 같은 부서 안에서는 이름 오름차순으로 정렬해서 부서번호와 이름을 조회하세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 87,
          lv: 2,
          html: String.raw`<p>연봉(급여 × 12)이 30000 이상인 직원의 이름과 연봉을 연봉이 높은 순으로 조회하세요. <span class="rows-chip">(6행)</span></p>
`
        },
        {
          n: 88,
          lv: 3,
          html: String.raw`<p>일급(급여 ÷ 30)이 100 이상인 직원의 이름과 일급을 일급이 높은 순으로 조회하세요. 일급 컬럼의 이름은 <code>일급</code>으로 하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 89,
          lv: 3,
          html: String.raw`<p>이름, 부서번호, 급여를 조회하되 SELECT 목록의 위치 번호로 정렬하세요. 부서번호 오름차순, 같은 부서에서는 급여 내림차순, 급여도 같으면 이름 오름차순이에요. <span class="rows-chip">(25행)</span></p>
`
        }
      ],
      "title": "정렬",
      "from": 83,
      "to": 89,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 90,
          lv: 1,
          html: String.raw`<p>직원의 이름과 직책을 <code>박구곤 사장</code>처럼 한 컬럼으로 합쳐서 조회하고, 컬럼 이름을 <code>직원정보</code>로 바꾸세요. 합성연산자 <code>||</code>를 써보세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 91,
          lv: 1,
          html: String.raw`<p>직책이 &#39;사원&#39;이 <strong>아닌</strong> 직원을 조회하세요. 부정 연산자(<code>!=</code>, <code>&lt;&gt;</code> 등)를 써보세요. <span class="rows-chip">(15행)</span></p>
`
        },
        {
          n: 92,
          lv: 3,
          html: String.raw`<p><code>WHERE dept_id NOT IN (110, NULL)</code>은 한 행도 나오지 않아요. 이유를 생각해 보고, &quot;부서번호가 110이 아닌 직원&quot;의 이름과 부서번호를 제대로 조회하세요. <span class="rows-chip">(21행)</span></p>
`
        },
        {
          n: 93,
          lv: 3,
          html: String.raw`<p>110번 부서 직원을 <code>손명성(기획부장) - 110</code>처럼 한 컬럼으로 보여주세요. 컬럼 이름은 <code>직원</code>, 이름 순으로 정렬하세요. <span class="rows-chip">(4행)</span></p>
`
        }
      ],
      "title": "연결·부정 연산자",
      "from": 90,
      "to": 93,
      "before": [],
      "after": []
    }
  ],
  "no": 3,
  "kind": "chapter",
  "label": "3장",
  "title": "3장 데이터 검색 (SELECT)",
  "short": "SELECT"
},
{
  "subs": [
    {
      "items": [
        {
          n: 94,
          lv: 1,
          html: String.raw`<p>직원 이름, 이름의 글자 수, 메일ID(MAILID)를 대문자로 바꾼 값을 함께 조회하세요. <code>LENGTH</code>, <code>UPPER</code>를 써보세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 95,
          lv: 1,
          html: String.raw`<p>직원 이름과 일급(급여 ÷ 30)을 조회하세요. 일급은 소수 첫째 자리까지 반올림한 값(<code>ROUND</code>)과 소수점 아래를 버린 값(<code>TRUNC</code>) 두 가지로 보여주세요.</p>
`
        },
        {
          n: 96,
          lv: 2,
          html: String.raw`<p>직원 이름과 입사일부터 오늘까지 근무한 개월 수를 조회하세요. 개월 수는 소수점 아래를 버리세요. <code>SYSDATE</code>, <code>MONTHS_BETWEEN</code>을 써보세요.</p>
`
        },
        {
          n: 97,
          lv: 2,
          html: String.raw`<p>직원 이름과 입사일을 <code>2015년 03월 03일</code> 형식으로 조회하세요. <code>TO_CHAR</code>를 써보세요.</p>
`
        },
        {
          n: 98,
          lv: 1,
          html: String.raw`<p>직원 이름과 성(이름의 첫 글자)을 함께 조회하세요. 성 컬럼의 이름은 <code>성</code>으로 하세요. <code>SUBSTR</code>를 써 보세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 99,
          lv: 1,
          html: String.raw`<p>직원 이름과 메일ID를 조회하되, 메일ID는 전체 10칸이 되도록 왼쪽을 <code>*</code>로 채워서 보여주세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 100,
          lv: 1,
          html: String.raw`<p>사번(ID)이 짝수인 직원의 사번과 이름을 조회하세요. <code>MOD</code>를 써 보세요. <span class="rows-chip">(12행)</span></p>
`
        },
        {
          n: 101,
          lv: 1,
          html: String.raw`<p>직원 이름, 입사일, 입사한 날의 요일을 조회하세요. 요일 컬럼의 이름은 <code>요일</code>로 하세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 102,
          lv: 2,
          html: String.raw`<p>입사 후 3개월이 되는 날을 수습 종료일이라고 할 때, 직원 이름과 수습 종료일을 <code>2015-06-03</code> 형식의 문자로 조회하세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 103,
          lv: 1,
          html: String.raw`<p>직원 이름과 직책을 조회하되, 직책에 들어 있는 &#39;부장&#39;을 &#39;팀장&#39;으로 바꿔서 보여주세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 104,
          lv: 1,
          html: String.raw`<p>고객 이름과 전화번호, 전화번호의 글자 수를 조회하세요. <span class="rows-chip">(15행)</span></p>
`
        },
        {
          n: 105,
          lv: 1,
          html: String.raw`<p>직원 이름과 메일ID를 조회하되, 메일ID는 모두 대문자로 바꾼 값과 첫 글자만 대문자로 바꾼 값 두 가지로 보여주세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 106,
          lv: 2,
          html: String.raw`<p>직원 이름과 급여를 조회하되, 급여는 천 단위 쉼표가 들어간 문자(예: 5,000)로 보여주세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 107,
          lv: 2,
          html: String.raw`<p>직원 이름과 오늘까지의 근무 연수(소수점 아래는 버림)를 조회하세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 108,
          lv: 2,
          html: String.raw`<p>직원 이름, 입사일, 입사한 달의 마지막 날을 조회하세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 109,
          lv: 2,
          html: String.raw`<p>고객 이름과 전화번호의 마지막 4자리를 조회하세요. <span class="rows-chip">(15행)</span></p>
`
        },
        {
          n: 110,
          lv: 2,
          html: String.raw`<p>직원 이름과 입사일을 <code>16/06/17 (금)</code>처럼 &#39;연도 두 자리/월/일 (요일 한 글자)&#39; 형식으로 조회하세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 111,
          lv: 3,
          html: String.raw`<p>직원 이름과 메일ID를 조회하되, 메일ID는 앞 3글자만 보여주고 나머지는 <code>***</code>로 가려서 보여주세요(예: kug***). <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 112,
          lv: 3,
          html: String.raw`<p>고객 이름과 전화번호를 조회하되, 전화번호는 <code>010-****-1234</code>처럼 앞 4글자와 뒤 4자리만 보이게 가려서 보여주세요. <span class="rows-chip">(15행)</span></p>
`
        },
        {
          n: 113,
          lv: 3,
          html: String.raw`<p>직원 이름과, 입사한 다음 달의 마지막 날(첫 급여일이라고 할게요)을 조회하세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 114,
          lv: 3,
          html: String.raw`<p>직원 이름과 입사 1주년이 되는 날, 그날의 요일을 조회하세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 115,
          lv: 3,
          html: String.raw`<p>직원 이름과 급여, 급여를 백 원 단위에서 반올림한 값, 백 원 단위 아래를 버린 값을 조회하세요. (예: 2450 → 2500, 2400) <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 116,
          lv: 3,
          html: String.raw`<p>직원 이름과, 입사일부터 오늘까지 근무한 일수(정수), 근무한 주 수(소수점 버림)를 조회하세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 117,
          lv: 3,
          html: String.raw`<p>직원 이름과 회사 이메일 주소를 <code>박구곤 &lt;kugon@company.com&gt;</code> 형식으로 조회하세요. 컬럼 이름은 <code>이메일</code>이에요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 118,
          lv: 3,
          html: String.raw`<p>2016년 2월에 입사한 직원의 이름과 입사일을 <code>TO_CHAR</code>로 연월을 뽑아 비교하는 방식으로 조회하세요. <span class="rows-chip">(3행)</span></p>
`
        }
      ],
      "title": "단일행 함수",
      "from": 94,
      "to": 118,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 119,
          lv: 1,
          html: String.raw`<p>전체 직원 수, 급여 합계, 평균 급여, 최고 급여, 최저 급여를 한 번에 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 120,
          lv: 2,
          html: String.raw`<p>S_CUSTOMER에서 <code>COUNT(*)</code>와 <code>COUNT(CREDIT_RATING)</code>를 함께 조회하세요. 두 값이 왜 다른지 설명해 보세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 121,
          lv: 2,
          html: String.raw`<p>전체 직원 수, 커미션 값이 있는(NULL이 아닌) 직원 수, 평균 급여(소수 둘째 자리까지 반올림)를 한 번에 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 122,
          lv: 3,
          html: String.raw`<p>가장 먼저 입사한 날과 가장 최근에 입사한 날이 몇 개월 차이 나는지, 소수 첫째 자리까지 반올림해서 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 123,
          lv: 3,
          html: String.raw`<p>직원이 있는 부서의 개수, 직책의 종류 수, 입사 연도의 종류 수를 한 번에 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        }
      ],
      "title": "그룹 함수",
      "from": 119,
      "to": 123,
      "before": [],
      "after": []
    }
  ],
  "no": 4,
  "kind": "chapter",
  "label": "4장",
  "title": "4장 함수",
  "short": "함수"
},
{
  "subs": [
    {
      "items": [
        {
          n: 124,
          lv: 1,
          html: String.raw`<p>부서번호별 직원 수와 평균 급여를 부서번호 순으로 조회하세요. <span class="rows-chip">(11행)</span></p>
`
        },
        {
          n: 125,
          lv: 2,
          html: String.raw`<p>직책별 직원 수를 조회하되, 직원이 3명 이상인 직책만 보여주세요. <code>HAVING</code>을 써보세요. <span class="rows-chip">(3행)</span></p>
`
        },
        {
          n: 126,
          lv: 2,
          html: String.raw`<p>직책별 최고 급여를 구하되 &#39;사장&#39;은 제외하세요. 최고 급여가 2500 이상인 직책만, 최고 급여가 높은 순으로 보여주세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 127,
          lv: 1,
          html: String.raw`<p>각 부서 안에서 직책별로 몇 명이 있는지 조회하세요. 부서번호와 직책 두 컬럼으로 그룹을 나눠보세요. <span class="rows-chip">(19행)</span></p>
`
        },
        {
          n: 128,
          lv: 2,
          html: String.raw`<p>2016년에 입사한 직원만 대상으로, 부서번호별 인원 수를 조회하세요. 71번에서 쓴 날짜 조건을 다시 활용해 보세요. <span class="rows-chip">(9행)</span></p>
`
        },
        {
          n: 129,
          lv: 2,
          html: String.raw`<p>아래 쿼리는 에러가 나요. 왜 에러가 나는지 설명하고, 직원이 3명 이상인 부서를 보여주도록 고쳐보세요.</p>
<pre><code><span class="hl-kw">SELECT</span> dept_id, <span class="hl-fn">COUNT</span>(*)
<span class="hl-kw">FROM</span> s_emp
<span class="hl-kw">WHERE</span> <span class="hl-fn">COUNT</span>(*) &gt;= <span class="hl-num">3</span>
<span class="hl-kw">GROUP</span> <span class="hl-kw">BY</span> dept_id;</code></pre>
`
        },
        {
          n: 130,
          lv: 1,
          html: String.raw`<p>부서별로 최고 급여, 최저 급여, 그리고 둘의 차이를 조회하세요. <span class="rows-chip">(11행)</span></p>
`
        },
        {
          n: 131,
          lv: 2,
          html: String.raw`<p>입사 연도별 직원 수를 조회하세요. <code>TO_CHAR</code>로 연도만 뽑아서 묶어 보세요. <span class="rows-chip">(2행)</span></p>
`
        },
        {
          n: 132,
          lv: 2,
          html: String.raw`<p>직책별 평균 급여를 소수 첫째 자리까지 반올림해서, 평균 급여가 높은 순으로 조회하세요. <span class="rows-chip">(8행)</span></p>
`
        },
        {
          n: 133,
          lv: 2,
          html: String.raw`<p>부서별 인원 수와 급여 합계를 구하되, 급여 합계가 5000 이상인 부서만 부서번호 순으로 조회하세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 134,
          lv: 2,
          html: String.raw`<p>급여가 0인 직원은 빼고, 부서별 평균 급여를 조회하세요. 급여가 0인 직원만 있는 부서는 어떻게 되나요? <span class="rows-chip">(9행)</span></p>
`
        },
        {
          n: 135,
          lv: 1,
          html: String.raw`<p>직책별 직원 수를 조회하세요. <span class="rows-chip">(8행)</span></p>
`
        },
        {
          n: 136,
          lv: 1,
          html: String.raw`<p>부서번호별 급여 합계를 부서번호 순으로 조회하세요. <span class="rows-chip">(11행)</span></p>
`
        },
        {
          n: 137,
          lv: 1,
          html: String.raw`<p>S_DEPT에서 지역번호(REGION_ID)별 부서 수를 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 138,
          lv: 1,
          html: String.raw`<p>S_CUSTOMER에서 담당 직원 번호(SALES_REP_ID)별 고객 수를 조회하세요. <span class="rows-chip">(6행)</span></p>
`
        },
        {
          n: 139,
          lv: 1,
          html: String.raw`<p>직책이 &#39;과장&#39; 또는 &#39;사원&#39;인 직원만 대상으로, 직책별 평균 급여를 조회하세요. <span class="rows-chip">(2행)</span></p>
`
        },
        {
          n: 140,
          lv: 1,
          html: String.raw`<p>직원이 3명 이상인 부서의 부서번호와 직원 수를 조회하세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 141,
          lv: 1,
          html: String.raw`<p>고객의 지역번호(REGION_ID)별 고객 수를 지역번호 순으로 조회하세요. <span class="rows-chip">(6행)</span></p>
`
        },
        {
          n: 142,
          lv: 2,
          html: String.raw`<p>입사 연월(<code>2016-06</code> 형식)별 입사자 수를 구하되, 2명 이상 입사한 달만 연월 순으로 조회하세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 143,
          lv: 2,
          html: String.raw`<p>직책이 &#39;사원&#39;인 직원만 대상으로 부서번호별 인원을 구하고, 사원이 2명 이상인 부서만 조회하세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 144,
          lv: 3,
          html: String.raw`<p>부서별 직원 수 중 가장 큰 값(가장 많은 직원이 있는 부서의 인원 수)을 조회하세요. 그룹 함수를 겹쳐 써 보세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 145,
          lv: 3,
          html: String.raw`<p>가장 많은 직원이 있는 부서의 부서번호와 인원 수를 조회하세요. HAVING에 앞 문제의 쿼리를 서브쿼리로 넣어 보세요(7장). <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 146,
          lv: 3,
          html: String.raw`<p>급여가 0인 직원은 빼고 직책별 평균 급여를 구한 뒤, 평균이 2000 이상인 직책만 평균이 높은 순으로 조회하세요. 평균은 정수로 반올림하세요. <span class="rows-chip">(7행)</span></p>
`
        },
        {
          n: 147,
          lv: 3,
          html: String.raw`<p>직원이 2명 이상인 부서마다 가장 먼저 입사한 날, 가장 늦게 입사한 날, 그 사이의 개월 수(정수로 반올림)를 부서번호 순으로 조회하세요. <span class="rows-chip">(7행)</span></p>
`
        },
        {
          n: 148,
          lv: 3,
          html: String.raw`<p>입사 연도와 직책별로 인원 수를 구해서, 연도 순, 같은 연도 안에서는 인원이 많은 순으로 조회하세요. <span class="rows-chip">(9행)</span></p>
`
        },
        {
          n: 149,
          lv: 3,
          html: String.raw`<p>아래 쿼리는 에러가 나요. 에러 번호와 이유를 쓰고, &quot;부서별 인원 수&quot;를 보여주도록 고치세요.</p>
<pre><code><span class="hl-kw">SELECT</span> dept_id, name, <span class="hl-fn">COUNT</span>(*)
<span class="hl-kw">FROM</span> s_emp
<span class="hl-kw">GROUP</span> <span class="hl-kw">BY</span> dept_id;</code></pre>
`
        },
        {
          n: 150,
          lv: 3,
          html: String.raw`<p>급여가 1000 이상인 직원만 세어서, 그런 직원이 2명 이상인 부서의 부서번호와 인원 수를 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 151,
          lv: 3,
          html: String.raw`<p>부서별 평균 급여 중 가장 높은 값과 가장 낮은 값을 한 행으로 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 152,
          lv: 3,
          html: String.raw`<p>직원 이름의 첫 글자(성)별 인원 수를 구해서, 2명 이상인 성만 인원이 많은 순으로 조회하세요. <span class="rows-chip">(8행)</span></p>
`
        },
        {
          n: 153,
          lv: 3,
          html: String.raw`<p>아래 두 쿼리의 결과가 다른 이유를 설명하세요.</p>
<pre><code><span class="hl-com">-- (가)</span>
<span class="hl-kw">SELECT</span> dept_id, <span class="hl-fn">AVG</span>(salary) <span class="hl-kw">FROM</span> s_emp <span class="hl-kw">WHERE</span> salary &gt; <span class="hl-num">0</span> <span class="hl-kw">GROUP</span> <span class="hl-kw">BY</span> dept_id;
<span class="hl-com">-- (나)</span>
<span class="hl-kw">SELECT</span> dept_id, <span class="hl-fn">AVG</span>(salary) <span class="hl-kw">FROM</span> s_emp <span class="hl-kw">GROUP</span> <span class="hl-kw">BY</span> dept_id <span class="hl-kw">HAVING</span> <span class="hl-fn">AVG</span>(salary) &gt; <span class="hl-num">0</span>;</code></pre>
`
        }
      ],
      "title": "GROUP BY와 HAVING",
      "from": 124,
      "to": 153,
      "before": [],
      "after": []
    }
  ],
  "no": 5,
  "kind": "chapter",
  "label": "5장",
  "title": "5장 GROUP BY와 HAVING",
  "short": "GROUP BY와 HAVING"
},
{
  "subs": [
    {
      "items": [
        {
          n: 154,
          lv: 1,
          html: String.raw`<p>직원 이름, 직책, 부서 이름을 함께 조회하세요. (S_EMP + S_DEPT, 25행)</p>
`
        },
        {
          n: 155,
          lv: 1,
          html: String.raw`<p>부서번호, 부서 이름, 그 부서가 있는 지역 이름을 조회하세요. (S_DEPT + S_REGION, 11행)</p>
`
        },
        {
          n: 156,
          lv: 2,
          html: String.raw`<p>부서 이름이 &#39;영업부&#39;인 부서에 속한 직원의 이름과 급여를 조회하세요. JOIN 조건과 일반 조건을 <code>AND</code>로 함께 써보세요. <span class="rows-chip">(7행)</span></p>
`
        },
        {
          n: 157,
          lv: 2,
          html: String.raw`<p>고객 이름과 고객이 속한 지역 이름을 조회하세요. (S_CUSTOMER + S_REGION) 고객은 15명인데 결과가 몇 행인지 확인하고, 왜 그런지 생각해 보세요.</p>
`
        },
        {
          n: 158,
          lv: 2,
          html: String.raw`<p>직원 이름, 부서 이름, 지역 이름을 함께 조회하세요. 테이블이 3개면 JOIN 조건은 최소 몇 개가 필요할까요? <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 159,
          lv: 1,
          html: String.raw`<p><code>SELECT s_emp.name, s_dept.name FROM s_emp, s_dept;</code>처럼 JOIN 조건을 빠뜨리면 몇 행이 나올지 먼저 예상하고, 실행해서 확인해 보세요. 이런 결과를 뭐라고 부를까요?</p>
`
        },
        {
          n: 160,
          lv: 1,
          html: String.raw`<p>고객 이름과 담당 직원의 이름을 함께 조회하세요. (S_CUSTOMER + S_EMP) <span class="rows-chip">(14행)</span></p>
`
        },
        {
          n: 161,
          lv: 1,
          html: String.raw`<p>&#39;서울특별시&#39;에 있는 부서의 부서번호와 부서 이름을 조회하세요. (S_DEPT + S_REGION) <span class="rows-chip">(4행)</span></p>
`
        }
      ],
      "title": "EQUIJOIN (6.1~6.4)",
      "from": 154,
      "to": 161,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 162,
          lv: 1,
          html: String.raw`<p>154번을 테이블 ALIAS(<code>e</code>, <code>d</code>)를 써서 다시 작성하세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 163,
          lv: 2,
          html: String.raw`<p>&#39;경기도&#39; 지역에 있는 부서에서 근무하는 직원의 이름, 부서 이름, 지역 이름을 조회하세요. 테이블 3개를 ALIAS로 JOIN하세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 164,
          lv: 2,
          html: String.raw`<p>직원 이름, 급여, 급여 등급을 조회하세요. (S_EMP + SALGRADE) 직원은 25명인데 몇 행이 나오는지 확인하고, 빠진 직원이 왜 빠졌는지 설명해 보세요.</p>
`
        },
        {
          n: 165,
          lv: 2,
          html: String.raw`<p>164번을 응용해서 급여 등급별 인원 수를 조회하세요. JOIN과 GROUP BY를 함께 써요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 166,
          lv: 2,
          html: String.raw`<p>157번 고객-지역 JOIN을 OUTER JOIN으로 바꿔서 지역 정보가 없는 고객도 모두 나오게 하세요. (+)를 어느 쪽에 붙여야 할까요? <span class="rows-chip">(15행)</span></p>
`
        },
        {
          n: 167,
          lv: 3,
          html: String.raw`<p>모든 직원의 이름과 그 직원이 담당하는 고객 이름을 조회하세요. 담당 고객이 없는 직원도 모두 나와야 해요. <span class="rows-chip">(34행)</span></p>
`
        },
        {
          n: 168,
          lv: 2,
          html: String.raw`<p>직원 이름과 그 직원의 상사 이름을 조회하세요. SELF JOIN을 쓰세요. <span class="rows-chip">(24행)</span> 25명 중 누가 왜 빠졌는지도 생각해 보세요.</p>
`
        },
        {
          n: 169,
          lv: 3,
          html: String.raw`<p>&#39;손명성&#39;보다 급여가 많은 직원의 이름과 급여를 조회하세요. SELF JOIN을 쓰세요. <span class="rows-chip">(3행)</span></p>
`
        },
        {
          n: 170,
          lv: 1,
          html: String.raw`<p>113번 부서 직원의 이름과 부서 이름을 테이블 ALIAS(e, d)를 써서 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 171,
          lv: 1,
          html: String.raw`<p>&#39;부산/경상&#39; 지역 고객의 이름과 지역 이름을 ALIAS(c, r)를 써서 조회하세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 172,
          lv: 1,
          html: String.raw`<p>급여 등급이 &#39;C&#39;인 직원의 이름과 급여를 조회하세요. (S_EMP + SALGRADE) <span class="rows-chip">(7행)</span></p>
`
        },
        {
          n: 173,
          lv: 3,
          html: String.raw`<p>급여 등급이 &#39;A&#39; 또는 &#39;B&#39;인 직원의 이름, 부서 이름, 지역 이름, 급여 등급을 조회하세요. 테이블 4개를 JOIN해요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 174,
          lv: 3,
          html: String.raw`<p>지역 이름별 직원 수를 직원이 많은 순으로 조회하세요. (S_EMP + S_DEPT + S_REGION) <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 175,
          lv: 3,
          html: String.raw`<p>모든 직원의 이름과 담당 고객 수를 조회하세요. 담당 고객이 없는 직원은 0으로 나와야 해요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 176,
          lv: 3,
          html: String.raw`<p>상사와 다른 부서에서 일하는 직원의 이름, 부서번호, 상사 이름, 상사의 부서번호를 조회하세요. <span class="rows-chip">(19행)</span></p>
`
        },
        {
          n: 177,
          lv: 3,
          html: String.raw`<p>상사보다 먼저 입사한 직원의 이름, 입사일, 상사 이름, 상사 입사일을 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 178,
          lv: 3,
          html: String.raw`<p>모든 직원의 이름, 급여, 급여 등급을 조회하세요. 급여 등급 범위에 들지 않는 직원도 빠지지 않고 등급이 비어서 나와야 해요. <span class="rows-chip">(25행)</span></p>
`
        }
      ],
      "title": "ALIAS와 여러 가지 JOIN (6.5~6.8)",
      "from": 162,
      "to": 178,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 179,
          lv: 2,
          html: String.raw`<p>아래 두 결과를 <code>UNION</code>, <code>UNION ALL</code>, <code>INTERSECT</code>, <code>MINUS</code>로 각각 합쳐 보고, 결과가 각각 몇 행인지 비교하세요.</p>
<ul>
<li>A: 부서번호가 110인 직원의 이름과 직책</li>
<li>B: 직책이 &#39;과장&#39;인 직원의 이름과 직책</li>
</ul>
`
        },
        {
          n: 180,
          lv: 1,
          html: String.raw`<p>직원 이름과 고객 이름을 UNION으로 합쳐서 한 컬럼으로 조회하세요. <span class="rows-chip">(40행)</span></p>
`
        },
        {
          n: 181,
          lv: 2,
          html: String.raw`<p>고객의 담당 직원 번호(SALES_REP_ID) 중 실제로 S_EMP에 있는 직원 번호만 INTERSECT로 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 182,
          lv: 3,
          html: String.raw`<p>직책이 &#39;과장&#39;이거나 110번 부서에서 일하는 직원의 이름을 SET 연산자로 중복 없이 조회하세요. UNION ALL로도 실행해 보고 행 수가 왜 다른지 생각해 보세요. <span class="rows-chip">(8행)</span></p>
`
        },
        {
          n: 183,
          lv: 3,
          html: String.raw`<p>다른 직원의 상사가 아닌(부하 직원이 한 명도 없는) 직원의 이름을 MINUS로 조회하세요. <span class="rows-chip">(22행)</span></p>
`
        }
      ],
      "title": "SET 연산자 (6.9~6.11)",
      "from": 179,
      "to": 183,
      "before": [],
      "after": []
    }
  ],
  "no": 6,
  "kind": "chapter",
  "label": "6장",
  "title": "6장 JOIN과 SET 연산자",
  "short": "JOIN과 SET"
},
{
  "subs": [
    {
      "items": [
        {
          n: 184,
          lv: 1,
          html: String.raw`<p>전체 평균 급여보다 급여가 많은 직원의 이름과 급여를 조회하세요. <span class="rows-chip">(12행)</span></p>
`
        },
        {
          n: 185,
          lv: 1,
          html: String.raw`<p>가장 최근에 입사한 직원의 이름과 입사일을 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 186,
          lv: 2,
          html: String.raw`<p>부서 이름이 &#39;기획부&#39;인 부서에 속한 직원을 서브쿼리로 조회하세요. 기획부는 여러 개라는 점에 주의하세요. <span class="rows-chip">(15행)</span></p>
`
        },
        {
          n: 187,
          lv: 3,
          html: String.raw`<p>직책별로 가장 많은 급여를 받는 직원의 이름, 직책, 급여를 조회하세요. 두 컬럼을 동시에 비교하는 서브쿼리를 써보세요. <span class="rows-chip">(9행)</span></p>
`
        },
        {
          n: 188,
          lv: 2,
          html: String.raw`<p>FROM절 서브쿼리(INLINE VIEW)로 급여가 2000 이상인 직원만 먼저 고른 다음, 그 직원의 이름과 부서 이름을 조회하세요. <span class="rows-chip">(12행)</span></p>
`
        },
        {
          n: 189,
          lv: 2,
          html: String.raw`<p>부서별 평균 급여가 전체 평균 급여보다 높은 부서의 부서번호와 평균 급여를 조회하세요. HAVING절에 서브쿼리를 써보세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 190,
          lv: 2,
          html: String.raw`<p>&#39;안창환&#39;과 같은 부서에서 일하는 직원의 이름을 조회하세요. 안창환 본인은 빼세요. <span class="rows-chip">(2행)</span></p>
`
        },
        {
          n: 191,
          lv: 2,
          html: String.raw`<p>이름이 &#39;영업부&#39;인 부서들이 있는 지역의 이름을 서브쿼리로 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 192,
          lv: 2,
          html: String.raw`<p>직책이 &#39;사원&#39;인 직원 중 급여가 가장 적은 직원의 이름과 급여를 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 193,
          lv: 1,
          html: String.raw`<p>담당 고객이 한 명 이상 있는 직원의 이름을 <code>IN</code>과 서브쿼리로 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 194,
          lv: 1,
          html: String.raw`<p>&#39;이용호&#39;와 직책이 같은 직원의 이름과 직책을 서브쿼리로 조회하세요. <span class="rows-chip">(10행)</span></p>
`
        },
        {
          n: 195,
          lv: 1,
          html: String.raw`<p>급여가 가장 많은 직원의 이름과 급여를 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 196,
          lv: 1,
          html: String.raw`<p>&#39;김정미&#39;보다 먼저 입사한 직원의 이름과 입사일을 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 197,
          lv: 1,
          html: String.raw`<p>전체 평균 급여보다 급여가 적은 직원의 이름과 급여를 조회하세요. <span class="rows-chip">(13행)</span></p>
`
        },
        {
          n: 198,
          lv: 1,
          html: String.raw`<p>&#39;서울특별시&#39;에 있는 부서의 부서번호와 이름을 서브쿼리로 조회하세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 199,
          lv: 1,
          html: String.raw`<p>고객 &#39;장창식&#39;을 담당하는 직원의 이름과 직책을 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 200,
          lv: 2,
          html: String.raw`<p>&#39;영업부&#39;라는 이름의 부서 어디에도 속하지 않은 직원의 이름과 부서번호를 조회하세요. <span class="rows-chip">(18행)</span></p>
`
        },
        {
          n: 201,
          lv: 3,
          html: String.raw`<p>부서별로 가장 적은 급여를 받는 직원의 이름, 부서번호, 급여를 조회하세요. 두 컬럼을 함께 비교하는 서브쿼리를 써 보세요. <span class="rows-chip">(11행)</span></p>
`
        },
        {
          n: 202,
          lv: 3,
          html: String.raw`<p>자기 부서의 평균 급여보다 급여가 많은 직원의 이름, 부서번호, 급여를 조회하세요. 바깥 쿼리의 값을 쓰는 서브쿼리(상관 서브쿼리)를 써 보세요. <span class="rows-chip">(9행)</span></p>
`
        },
        {
          n: 203,
          lv: 3,
          html: String.raw`<p>부하 직원이 한 명이라도 있는 직원의 이름을 EXISTS로 조회하세요. <span class="rows-chip">(3행)</span></p>
`
        },
        {
          n: 204,
          lv: 3,
          html: String.raw`<p>담당 고객이 한 명도 없는 직원의 이름을 NOT EXISTS로 조회하세요. <span class="rows-chip">(20행)</span></p>
`
        },
        {
          n: 205,
          lv: 3,
          html: String.raw`<p>부서별 평균 급여를 FROM절 서브쿼리(INLINE VIEW)로 구한 다음, S_DEPT와 JOIN해서 부서번호, 부서 이름, 평균 급여(정수 반올림)를 부서번호 순으로 조회하세요. <span class="rows-chip">(11행)</span></p>
`
        },
        {
          n: 206,
          lv: 3,
          html: String.raw`<p>직원이 가장 많은 부서에서 일하는 직원의 이름과 부서번호를 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        }
      ],
      "title": "서브쿼리로 조회하기",
      "from": 184,
      "to": 206,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 207,
          lv: 2,
          html: String.raw`<p>S_EMP에서 직책이 &#39;사원&#39;인 직원의 이름, 직책, 급여, 부서번호만 모아 <code>emp_staff</code> 테이블을 만드세요. <span class="rows-chip">(10행)</span></p>
`
        },
        {
          n: 208,
          lv: 2,
          html: String.raw`<p>S_EMP와 구조만 같은 빈 테이블 <code>emp_old</code>를 만든 다음, 2016년 이전에 입사한 직원을 <code>INSERT ... SELECT</code>로 한 번에 넣으세요. <span class="rows-chip">(6행)</span></p>
`
        },
        {
          n: 209,
          lv: 2,
          html: String.raw`<p><code>emp_staff</code> 테이블에서 &#39;구원상&#39;의 급여를 &#39;서정주&#39;의 급여와 같게 바꾸세요. <code>UPDATE</code>에 서브쿼리를 써보세요.</p>
`
        },
        {
          n: 210,
          lv: 1,
          html: String.raw`<p>S_DEPT를 그대로 복사한 <code>dept_copy</code> 테이블을 만들고, <code>SELECT * FROM dept_copy;</code>로 확인하세요. <span class="rows-chip">(11행)</span></p>
`
        },
        {
          n: 211,
          lv: 3,
          html: String.raw`<p><code>emp_c</code>에서 급여가 0인 직원의 급여를, 급여가 0보다 큰 &#39;사원&#39; 중 가장 적은 급여로 바꾸세요. 마지막에 <code>SELECT name, salary FROM emp_c WHERE salary &lt; 800 ORDER BY name;</code>로 확인하세요. <span class="rows-chip">(7행)</span></p>
<p><code>emp_c</code>는 S_EMP의 id, name, title, dept_id, salary를 그대로 복사한 연습용 테이블이에요. 채점할 때 먼저 만들어 두니, 직접 실행해 볼 때는 <code>CREATE TABLE emp_c AS SELECT id, name, title, dept_id, salary FROM s_emp;</code>를 먼저 실행하세요.</p>
`
        },
        {
          n: 212,
          lv: 3,
          html: String.raw`<p><code>emp_c</code>에서 &#39;기획부&#39; 부서(여러 개)에 속한 직원을 모두 지우고, <code>SELECT COUNT(*) FROM emp_c;</code>로 남은 인원을 확인하세요. <span class="rows-chip">(1행)</span></p>
<p><code>emp_c</code>는 S_EMP의 id, name, title, dept_id, salary를 그대로 복사한 연습용 테이블이에요. 채점할 때 먼저 만들어 두니, 직접 실행해 볼 때는 <code>CREATE TABLE emp_c AS SELECT id, name, title, dept_id, salary FROM s_emp;</code>를 먼저 실행하세요.</p>
`
        },
        {
          n: 213,
          lv: 3,
          html: String.raw`<p>부서번호(dept_id), 인원(cnt), 급여 합계(total) 세 컬럼을 가진 <code>dept_stat</code> 테이블을 S_EMP에서 부서별로 집계해서 한 번에 만드세요. 마지막에 <code>SELECT * FROM dept_stat ORDER BY dept_id;</code>로 확인하세요. <span class="rows-chip">(11행)</span></p>
`
        }
      ],
      "title": "서브쿼리로 테이블 만들고 바꾸기",
      "from": 207,
      "to": 213,
      "before": [],
      "after": ["<p>207~209번은 실습용 테이블을 직접 만들고 바꾸는 문제예요. 원본 S_EMP는 건드리지 마세요.</p>\n"]
    }
  ],
  "no": 7,
  "kind": "chapter",
  "label": "7장",
  "title": "7장 SUBQUERY (서브쿼리)",
  "short": "SUBQUERY"
},
{
  "subs": [
    {
      "items": [
        {
          n: 214,
          lv: 1,
          html: String.raw`<p>다음 규칙에 알맞은 제약조건을 쓰세요.</p>
<ul>
<li>(가) 주민등록번호는 같은 값이 두 번 들어가면 안 된다.</li>
<li>(나) 직원 이름은 반드시 있어야 한다.</li>
<li>(다) 직원의 부서번호는 부서 테이블에 있는 번호여야 한다.</li>
<li>(라) 나이는 0 이상이어야 한다.</li>
<li>(마) 사번은 중복되어도 안 되고, 비어 있어도 안 된다.</li>
</ul>
`
        },
        {
          n: 215,
          lv: 1,
          html: String.raw`<p>아래 CREATE TABLE은 에러가 나요. 잘못된 곳을 찾아 고치세요.</p>
<pre><code><span class="hl-kw">CREATE</span> <span class="hl-kw">TABLE</span> <span class="hl-fn">member_t</span> (
  id   <span class="hl-kw">NUMBER</span>(<span class="hl-num">5</span>),
  name <span class="hl-kw">VARCHAR2</span>(<span class="hl-num">20</span>),
  <span class="hl-kw">CONSTRAINT</span> member_t_id_pk   <span class="hl-kw">PRIMARY</span> <span class="hl-kw">KEY</span> (id),
  <span class="hl-kw">CONSTRAINT</span> member_t_name_nn <span class="hl-kw">NOT</span> <span class="hl-kw">NULL</span> (name)
);</code></pre>
`
        },
        {
          n: 216,
          lv: 1,
          html: String.raw`<p>오라클의 제약조건 다섯 가지를 쓰고, 각각 한 줄로 설명하세요.</p>
`
        },
        {
          n: 217,
          lv: 1,
          html: String.raw`<p>PRIMARY KEY와 UNIQUE의 차이는 무엇인가요? 한 테이블에 각각 몇 개까지 만들 수 있나요?</p>
`
        },
        {
          n: 218,
          lv: 1,
          html: String.raw`<p>컬럼 레벨로만 정의할 수 있고 테이블 레벨로는 정의할 수 없는 제약조건은 무엇인가요?</p>
`
        },
        {
          n: 219,
          lv: 1,
          html: String.raw`<p>제약조건에 <code>emp_t_id_pk</code>처럼 직접 이름을 붙이면 좋은 점은 무엇인가요? 이름을 붙이지 않으면 오라클은 어떤 이름을 붙이나요?</p>
`
        },
        {
          n: 220,
          lv: 2,
          html: String.raw`<p>다음 에러 번호가 어떤 제약조건을 어겼을 때 나오는지 짝지으세요.</p>
<ul>
<li>ORA-00001</li>
<li>ORA-01400</li>
<li>ORA-02290</li>
<li>ORA-02291</li>
<li>ORA-02292</li>
</ul>
`
        }
      ],
      "title": "알맞은 제약조건 고르기",
      "from": 214,
      "to": 220,
      "before": ["<p>이 장의 문제는 실습용 테이블(<code>dept_t</code>, <code>emp_t</code>, <code>student_t</code> 등)을 새로 만들어서 풀어요. 제약조건에는 모두 이름을 붙이세요. (예: <code>emp_t_id_pk</code>)</p>\n"],
      "after": []
    },
    {
      "items": [
        {
          n: 221,
          lv: 1,
          html: String.raw`<p>부서 테이블 <code>dept_t</code>를 만드세요. <code>id NUMBER(7)</code>는 PRIMARY KEY, <code>name VARCHAR2(25)</code>는 NOT NULL이에요. 둘 다 컬럼 레벨로 정의하세요.</p>
`
        },
        {
          n: 222,
          lv: 2,
          html: String.raw`<p>직원 테이블 <code>emp_t</code>를 만드세요. CHECK와 FOREIGN KEY는 <strong>테이블 레벨</strong>로 정의하세요.</p>
<ul>
<li><code>id NUMBER(7)</code>: PRIMARY KEY</li>
<li><code>name VARCHAR2(25)</code>: NOT NULL</li>
<li><code>mailid VARCHAR2(8)</code>: UNIQUE</li>
<li><code>salary NUMBER(11,2)</code>: 500 이상 10000 이하</li>
<li><code>dept_id NUMBER(7)</code>: <code>dept_t(id)</code>를 참조</li>
</ul>
`
        },
        {
          n: 223,
          lv: 1,
          html: String.raw`<p>S_DEPT의 부서 번호와 부서 이름을 <code>dept_t</code>에 <code>INSERT ... SELECT</code>로 한 번에 넣고 COMMIT하세요. <span class="rows-chip">(11행)</span></p>
`
        },
        {
          n: 224,
          lv: 2,
          html: String.raw`<p>아래 INSERT를 하나씩 실행하고, 에러가 나는 것은 <strong>어느 제약조건</strong> 때문인지와 에러 번호를 적어 보세요. 끝나면 COMMIT하세요.</p>
<pre><code><span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> emp_t <span class="hl-kw">VALUES</span> (<span class="hl-num">1</span>, <span class="hl-str">'김철수'</span>, <span class="hl-str">'kim'</span>,  <span class="hl-num">3000</span>, <span class="hl-num">110</span>);  <span class="hl-com">-- a</span>
<span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> emp_t <span class="hl-kw">VALUES</span> (<span class="hl-num">1</span>, <span class="hl-str">'이영희'</span>, <span class="hl-str">'lee'</span>,  <span class="hl-num">2000</span>, <span class="hl-num">110</span>);  <span class="hl-com">-- b</span>
<span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> emp_t <span class="hl-kw">VALUES</span> (<span class="hl-num">2</span>, <span class="hl-kw">NULL</span>,     <span class="hl-str">'park'</span>, <span class="hl-num">2000</span>, <span class="hl-num">110</span>);  <span class="hl-com">-- c</span>
<span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> emp_t <span class="hl-kw">VALUES</span> (<span class="hl-num">3</span>, <span class="hl-str">'박민수'</span>, <span class="hl-str">'kim'</span>,  <span class="hl-num">2000</span>, <span class="hl-num">110</span>);  <span class="hl-com">-- d</span>
<span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> emp_t <span class="hl-kw">VALUES</span> (<span class="hl-num">4</span>, <span class="hl-str">'최지우'</span>, <span class="hl-str">'choi'</span>, <span class="hl-num">100</span>,  <span class="hl-num">110</span>);  <span class="hl-com">-- e</span>
<span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> emp_t <span class="hl-kw">VALUES</span> (<span class="hl-num">5</span>, <span class="hl-str">'정우성'</span>, <span class="hl-str">'jung'</span>, <span class="hl-num">2000</span>, <span class="hl-num">999</span>);  <span class="hl-com">-- f</span></code></pre>
`
        },
        {
          n: 225,
          lv: 2,
          html: String.raw`<p><code>DELETE FROM dept_t WHERE id = 110;</code>을 실행하면 에러가 나요. 왜 에러가 나는지 설명하고, 110번 부서를 지울 수 있는 방법을 두 가지 말해 보세요. (실제로 지우지는 마세요.)</p>
`
        },
        {
          n: 226,
          lv: 1,
          html: String.raw`<p>상품 테이블 <code>prod_t</code>를 만드세요. id NUMBER(5)는 PRIMARY KEY(이름 prod_t_id_pk), name VARCHAR2(20)은 NOT NULL, price NUMBER(7)은 0 이상만 들어가는 CHECK(이름 prod_t_price_ck)예요. 그다음 (1, &#39;연필&#39;, 500), (2, &#39;공책&#39;, 1200)을 넣고 <code>SELECT * FROM prod_t ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(2행)</span></p>
`
        },
        {
          n: 227,
          lv: 1,
          html: String.raw`<p>회원 테이블에 성별 컬럼 gender CHAR(1)을 두려고 해요. &#39;M&#39;과 &#39;F&#39;만 들어가도록 CHECK 제약조건(이름 member_t_gender_ck)을 컬럼 레벨로 쓰세요.</p>
`
        },
        {
          n: 228,
          lv: 2,
          html: String.raw`<p>이미 만든 <code>emp_t</code>에 제약조건을 추가하려고 해요. ① email VARCHAR2(30) 컬럼이 있다고 할 때 UNIQUE(이름 emp_t_email_uk)를 추가하고, ② name 컬럼에 NOT NULL을 추가하는 SQL을 쓰세요.</p>
`
        },
        {
          n: 229,
          lv: 2,
          html: String.raw`<p><code>emp_t_salary_ck</code> 제약조건을 ① 잠깐 끄고, ② 다시 켜고, ③ 아예 지우는 SQL을 각각 쓰세요.</p>
`
        }
      ],
      "title": "실습 테이블에 제약조건 걸기",
      "from": 221,
      "to": 229,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 230,
          lv: 2,
          html: String.raw`<p>아래 조건으로 학생 테이블 <code>student_t</code>를 만드세요. 제약조건에는 모두 이름을 붙이세요.</p>
<ul>
<li>sno NUMBER(5): PRIMARY KEY</li>
<li>name VARCHAR2(20): NOT NULL</li>
<li>email VARCHAR2(40): UNIQUE</li>
<li>grade NUMBER(1): 1 이상 4 이하</li>
</ul>
`
        },
        {
          n: 231,
          lv: 3,
          html: String.raw`<p>230번의 <code>student_t</code>를 참조하는 수강 테이블 <code>enroll_t</code>를 만드세요. 제약조건은 모두 <strong>테이블 레벨</strong>로 쓰세요.</p>
<ul>
<li>sno NUMBER(5), course_id VARCHAR2(10), score NUMBER(3)</li>
<li>(sno, course_id) 두 컬럼을 합쳐서 PRIMARY KEY</li>
<li>sno는 <code>student_t(sno)</code>를 참조</li>
<li>score는 0 이상 100 이하</li>
</ul>
`
        },
        {
          n: 232,
          lv: 2,
          html: String.raw`<p>231번의 FK를 <code>ON DELETE CASCADE</code>로 만들었다면, <code>student_t</code>에서 수강 기록이 있는 학생 한 명을 지울 때 어떻게 될까요? 이 옵션이 없을 때와 비교해서 설명하세요.</p>
`
        },
        {
          n: 233,
          lv: 2,
          html: String.raw`<p>부모 테이블 <code>team_t</code>(id NUMBER(3) PRIMARY KEY, name VARCHAR2(20))과, team_t를 참조하되 팀이 지워지면 소속 선수도 함께 지워지는 자식 테이블 <code>player_t</code>(id NUMBER(3) PRIMARY KEY, name VARCHAR2(20), team_id NUMBER(3))를 만드세요. 팀 (1, &#39;청룡&#39;), (2, &#39;백호&#39;)와 선수 (1, &#39;김하늘&#39;, 1), (2, &#39;이바다&#39;, 1), (3, &#39;박구름&#39;, 2)를 넣은 뒤 1번 팀을 지우고, <code>SELECT * FROM player_t;</code>로 확인하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 234,
          lv: 2,
          html: String.raw`<p>FK에 <code>ON DELETE SET NULL</code>을 붙이면 부모 행을 지울 때 자식 행은 어떻게 될까요? ON DELETE CASCADE와 비교해서 어떤 상황에 알맞은지 쓰세요.</p>
`
        },
        {
          n: 235,
          lv: 3,
          html: String.raw`<p>주문 상세 테이블 <code>order_item_t</code>를 만드세요. 한 주문(ord_id)에 상품(item_no)이 여러 개 들어가고, 같은 주문에 같은 상품 번호가 두 번 나오면 안 돼요. 수량(qty)은 1 이상이에요. 제약조건은 모두 테이블 레벨로, 이름을 붙여 쓰세요.</p>
`
        },
        {
          n: 236,
          lv: 3,
          html: String.raw`<p><code>emp_t</code>의 manager_id가 같은 테이블의 id를 가리키도록 FK(이름 emp_t_mgr_fk)를 추가하세요. 이때 사장처럼 상사가 없는 직원의 manager_id에는 어떤 값을 넣어야 할까요?</p>
`
        },
        {
          n: 237,
          lv: 3,
          html: String.raw`<p>S_CUSTOMER를 복사한 <code>cust_t</code>의 phone 컬럼에 UNIQUE를 추가하려고 했더니 ORA-02299 에러가 났어요. 이유를 쓰고, 원인이 된 데이터를 찾는 쿼리를 쓰세요.</p>
`
        },
        {
          n: 238,
          lv: 3,
          html: String.raw`<p><code>member_t</code>에는 (1, &#39;<a href="mailto:sky@a.com">sky@a.com</a>&#39;, &#39;김하늘&#39;, 20)이 들어 있고 아래 제약조건이 걸려 있어요. 아래 다섯 행 중 제약조건을 어기지 않는 행만 골라 INSERT하고, <code>SELECT id, name FROM member_t ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(3행)</span></p>
<div class="tw"><table><thead><tr>
<th>제약조건</th>
<th>내용</th>
</tr>
</thead><tbody><tr>
<td>id</td>
<td>PRIMARY KEY</td>
</tr>
<tr>
<td>email</td>
<td>UNIQUE</td>
</tr>
<tr>
<td>name</td>
<td>NOT NULL</td>
</tr>
<tr>
<td>age</td>
<td>CHECK (age BETWEEN 14 AND 120)</td>
</tr>
</tbody></table></div>
<ul>
<li>(가) (2, &#39;<a href="mailto:sea@a.com">sea@a.com</a>&#39;, &#39;이바다&#39;, 13)</li>
<li>(나) (3, NULL, &#39;박구름&#39;, 30)</li>
<li>(다) (1, &#39;<a href="mailto:star@a.com">star@a.com</a>&#39;, &#39;최별&#39;, 25)</li>
<li>(라) (4, NULL, &#39;정달&#39;, NULL)</li>
<li>(마) (5, &#39;<a href="mailto:sky@a.com">sky@a.com</a>&#39;, &#39;한빛&#39;, 40)</li>
</ul>
`
        },
        {
          n: 239,
          lv: 3,
          html: String.raw`<p><code>salary NUMBER(7) CONSTRAINT emp_t_salary_ck CHECK (salary &gt; 0)</code>인 컬럼에 NULL을 넣으면 에러가 날까요? 급여를 반드시 0보다 큰 값으로 받으려면 어떻게 해야 할까요?</p>
`
        },
        {
          n: 240,
          lv: 3,
          html: String.raw`<p><code>CREATE TABLE emp_t2 (..., dept_id NUMBER(7) REFERENCES dept_t(name));</code>처럼 dept_t의 name 컬럼(PK도 UNIQUE도 아님)을 FK로 참조하면 어떻게 될까요?</p>
`
        },
        {
          n: 241,
          lv: 3,
          html: String.raw`<p>자식 테이블(emp_t)이 참조하고 있는 부모 테이블 dept_t를 <code>DROP TABLE dept_t;</code>로 지우면 어떻게 될까요? 지울 수 있는 방법과, 그때 자식 테이블에는 무슨 일이 생기는지 쓰세요.</p>
`
        },
        {
          n: 242,
          lv: 3,
          html: String.raw`<p>도서 대출 시스템을 만들려고 해요. 아래 규칙에 맞게 <code>book_t2</code>와 <code>loan_t</code> 두 테이블을 제약조건과 함께 만드세요(이름은 자유롭게).</p>
<ul>
<li>책: isbn CHAR(13)이 PK, 제목 title은 필수, 가격 price는 0 이상</li>
<li>대출: 대출번호 loan_no가 PK, isbn은 책 테이블을 참조, 대출일 loan_date는 필수, 반납일 return_date는 비어 있어도 되지만 있으면 대출일보다 늦거나 같아야 함</li>
</ul>
`
        },
        {
          n: 243,
          lv: 3,
          html: String.raw`<p>부서 <code>dpt_t</code>(id NUMBER(3) PRIMARY KEY)와, dpt_t를 참조하되 부서가 지워지면 부서번호만 비우는 직원 <code>stf_t</code>(id NUMBER(3) PRIMARY KEY, name VARCHAR2(20), dpt_id NUMBER(3))를 만드세요. 부서 10, 20과 직원 (1, &#39;김하늘&#39;, 10), (2, &#39;이바다&#39;, 20)을 넣고 10번 부서를 지운 뒤, <code>SELECT id, name, dpt_id FROM stf_t ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(2행)</span></p>
`
        }
      ],
      "title": "새 테이블로 연습하기",
      "from": 230,
      "to": 243,
      "before": [],
      "after": []
    }
  ],
  "no": 8,
  "kind": "chapter",
  "label": "8장",
  "title": "8장 CONSTRAINT (제약조건)",
  "short": "CONSTRAINT"
},
{
  "subs": [
    {
      "items": [
        {
          n: 244,
          lv: 2,
          html: String.raw`<p>아래를 순서대로 실행하기 <strong>전에</strong>, ①과 ② 시점의 <code>emp_t</code> 행 수와 김철수의 급여를 먼저 예상해 보세요. 그다음 실행해서 맞는지 확인하세요.</p>
<pre><code><span class="hl-kw">COMMIT</span>;
<span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> emp_t <span class="hl-kw">VALUES</span> (<span class="hl-num">6</span>, <span class="hl-str">'한지민'</span>, <span class="hl-str">'han'</span>, <span class="hl-num">2500</span>, <span class="hl-num">111</span>);
<span class="hl-kw">SAVEPOINT</span> s1;
<span class="hl-kw">UPDATE</span> emp_t <span class="hl-kw">SET</span> salary = <span class="hl-num">3500</span> <span class="hl-kw">WHERE</span> id = <span class="hl-num">1</span>;
<span class="hl-kw">SAVEPOINT</span> s2;
<span class="hl-kw">DELETE</span> <span class="hl-kw">FROM</span> emp_t <span class="hl-kw">WHERE</span> id = <span class="hl-num">6</span>;
<span class="hl-kw">ROLLBACK</span> <span class="hl-kw">TO</span> s1;   <span class="hl-com">-- ① 여기서 확인</span>
<span class="hl-kw">ROLLBACK</span>;         <span class="hl-com">-- ② 여기서 확인</span></code></pre>
`
        },
        {
          n: 245,
          lv: 3,
          html: String.raw`<p>207번의 <code>emp_staff</code>(사원 10명)로 아래를 실행하기 전에 ①~③의 결과를 예상하고, 실행해서 확인하세요.</p>
<ul>
<li>① 시점의 행 수</li>
<li>② 시점의 &#39;안창환&#39; 급여</li>
<li>③ 시점의 행 수</li>
</ul>
<pre><code><span class="hl-kw">COMMIT</span>;
<span class="hl-kw">DELETE</span> <span class="hl-kw">FROM</span> emp_staff <span class="hl-kw">WHERE</span> name = <span class="hl-str">'이기철'</span>;
<span class="hl-kw">SAVEPOINT</span> a;
<span class="hl-kw">UPDATE</span> emp_staff <span class="hl-kw">SET</span> salary = salary + <span class="hl-num">100</span>;
<span class="hl-kw">SAVEPOINT</span> b;
<span class="hl-kw">DELETE</span> <span class="hl-kw">FROM</span> emp_staff <span class="hl-kw">WHERE</span> salary &lt; <span class="hl-num">900</span>;
<span class="hl-kw">ROLLBACK</span> <span class="hl-kw">TO</span> b;   <span class="hl-com">-- ①</span>
<span class="hl-kw">ROLLBACK</span> <span class="hl-kw">TO</span> a;   <span class="hl-com">-- ②</span>
<span class="hl-kw">ROLLBACK</span>;        <span class="hl-com">-- ③</span></code></pre>
`
        },
        {
          n: 246,
          lv: 1,
          html: String.raw`<p>COMMIT과 ROLLBACK은 각각 무엇을 하나요? 한 줄씩 쓰세요.</p>
`
        },
        {
          n: 247,
          lv: 1,
          html: String.raw`<p><code>tx_t</code>에 (2, &#39;추가&#39;)를 넣은 다음 ROLLBACK하고, <code>SELECT * FROM tx_t;</code>로 확인하세요. <span class="rows-chip">(1행)</span></p>
<p><code>tx_t</code>(id, memo)에는 (1, &#39;처음&#39;) 한 행이 COMMIT된 상태로 들어 있어요.</p>
`
        },
        {
          n: 248,
          lv: 1,
          html: String.raw`<p><code>tx_t</code>에 (2, &#39;추가&#39;)를 넣고 COMMIT한 다음 ROLLBACK하고, <code>SELECT * FROM tx_t ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(2행)</span></p>
<p><code>tx_t</code>(id, memo)에는 (1, &#39;처음&#39;) 한 행이 COMMIT된 상태로 들어 있어요.</p>
`
        },
        {
          n: 249,
          lv: 1,
          html: String.raw`<p>트랜잭션은 언제 시작해서 언제 끝나나요?</p>
`
        },
        {
          n: 250,
          lv: 1,
          html: String.raw`<p><code>tx_t</code>에 (2, &#39;A&#39;)를 넣고 SAVEPOINT s1을 만든 다음, (3, &#39;B&#39;)를 넣고 <code>ROLLBACK TO s1;</code>을 실행하세요. 마지막에 <code>SELECT * FROM tx_t ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(2행)</span></p>
<p><code>tx_t</code>(id, memo)에는 (1, &#39;처음&#39;) 한 행이 COMMIT된 상태로 들어 있어요.</p>
`
        },
        {
          n: 251,
          lv: 2,
          html: String.raw`<p>아래를 순서대로 실행하기 전에 결과를 예상하고, 실행해서 확인하세요. <span class="rows-chip">(2행)</span></p>
<pre><code><span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> tx_t <span class="hl-kw">VALUES</span> (<span class="hl-num">2</span>, <span class="hl-str">'A'</span>);
<span class="hl-kw">SAVEPOINT</span> s1;
<span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> tx_t <span class="hl-kw">VALUES</span> (<span class="hl-num">3</span>, <span class="hl-str">'B'</span>);
<span class="hl-kw">SAVEPOINT</span> s2;
<span class="hl-kw">UPDATE</span> tx_t <span class="hl-kw">SET</span> memo = <span class="hl-str">'수정'</span> <span class="hl-kw">WHERE</span> id = <span class="hl-num">1</span>;
<span class="hl-kw">ROLLBACK</span> <span class="hl-kw">TO</span> s2;
<span class="hl-kw">DELETE</span> <span class="hl-kw">FROM</span> tx_t <span class="hl-kw">WHERE</span> id = <span class="hl-num">2</span>;
<span class="hl-kw">ROLLBACK</span> <span class="hl-kw">TO</span> s1;
<span class="hl-kw">SELECT</span> * <span class="hl-kw">FROM</span> tx_t <span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> id;</code></pre>
<p><code>tx_t</code>(id, memo)에는 (1, &#39;처음&#39;) 한 행이 COMMIT된 상태로 들어 있어요.</p>
`
        },
        {
          n: 252,
          lv: 2,
          html: String.raw`<p>SAVEPOINT를 a, b, c 순서로 만든 뒤 <code>ROLLBACK TO b;</code>를 실행했어요. 그다음 <code>ROLLBACK TO c;</code>와 <code>ROLLBACK TO a;</code>는 각각 될까요?</p>
`
        },
        {
          n: 253,
          lv: 3,
          html: String.raw`<p>두 번의 이체를 트랜잭션으로 처리하세요.</p>
<ol>
<li>A 계좌에서 B 계좌로 3000원을 옮기고(UPDATE 두 번) COMMIT해요.</li>
<li>이어서 C 계좌에서 A 계좌로 1000원을 옮기려고 A에 먼저 1000원을 더했어요. 그런데 C의 잔액이 0원이라, C에서 1000원을 빼는 UPDATE는 CHECK 에러(ORA-02290)가 나요. 에러가 나는 UPDATE는 쓰지 말고, 이미 실행한 A 입금을 취소하세요.</li>
</ol>
<p>마지막에 <code>SELECT no, balance FROM account_t ORDER BY no;</code>로 확인하세요. <span class="rows-chip">(3행)</span></p>
<p><code>account_t</code>(no, owner, balance)에는 A 김하늘 10000원, B 이바다 5000원, C 박구름 0원이 COMMIT된 상태로 들어 있어요. balance에는 <code>CHECK (balance &gt;= 0)</code>이 걸려 있어요.</p>
`
        },
        {
          n: 254,
          lv: 3,
          html: String.raw`<p>아래를 순서대로 실행하기 전에 각 계좌의 최종 잔액을 예상하고, 실행해서 확인하세요. <span class="rows-chip">(3행)</span></p>
<pre><code><span class="hl-kw">UPDATE</span> account_t <span class="hl-kw">SET</span> balance = balance - <span class="hl-num">2000</span> <span class="hl-kw">WHERE</span> no = <span class="hl-str">'A'</span>;
<span class="hl-kw">SAVEPOINT</span> p1;
<span class="hl-kw">UPDATE</span> account_t <span class="hl-kw">SET</span> balance = balance + <span class="hl-num">2000</span> <span class="hl-kw">WHERE</span> no = <span class="hl-str">'B'</span>;
<span class="hl-kw">SAVEPOINT</span> p2;
<span class="hl-kw">UPDATE</span> account_t <span class="hl-kw">SET</span> balance = balance + <span class="hl-num">500</span> <span class="hl-kw">WHERE</span> no = <span class="hl-str">'C'</span>;
<span class="hl-kw">ROLLBACK</span> <span class="hl-kw">TO</span> p1;
<span class="hl-kw">UPDATE</span> account_t <span class="hl-kw">SET</span> balance = balance + <span class="hl-num">2000</span> <span class="hl-kw">WHERE</span> no = <span class="hl-str">'C'</span>;
<span class="hl-kw">COMMIT</span>;
<span class="hl-kw">ROLLBACK</span>;
<span class="hl-kw">SELECT</span> no, balance <span class="hl-kw">FROM</span> account_t <span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> no;</code></pre>
<p><code>account_t</code>(no, owner, balance)에는 A 김하늘 10000원, B 이바다 5000원, C 박구름 0원이 COMMIT된 상태로 들어 있어요. balance에는 <code>CHECK (balance &gt;= 0)</code>이 걸려 있어요.</p>
`
        }
      ],
      "title": "COMMIT·ROLLBACK·SAVEPOINT",
      "from": 244,
      "to": 254,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 255,
          lv: 1,
          html: String.raw`<p>다음 상황은 트랜잭션의 특징(ACID) 중 각각 무엇과 관련있는지 적어 보세요.</p>
<ul>
<li>(가) COMMIT 직후 정전이 나서 서버가 꺼졌는데, 다시 켜 보니 수정한 내용이 남아 있다.</li>
<li>(나) 이체 도중 입금 단계에서 오류가 나서, 이미 한 출금까지 모두 취소됐다.</li>
<li>(다) 내가 COMMIT하기 전에는 다른 사용자가 내가 바꾼 값을 볼 수 없다.</li>
<li>(라) 급여를 100으로 바꾸는 UPDATE가 CHECK 제약조건에 걸려 거부됐다.</li>
</ul>
`
        },
        {
          n: 256,
          lv: 1,
          html: String.raw`<p>다음 상황은 트랜잭션의 특징(ACID) 중 각각 무엇과 관련있나요?</p>
<ul>
<li>(가) 주문할 때 재고 차감과 주문 기록 중 하나만 성공하면 둘 다 취소된다.</li>
<li>(나) 두 사람이 동시에 같은 계좌에서 출금해도, 서로 중간 상태를 보지 않고 차례로 처리된다.</li>
<li>(다) 잔액이 음수가 되는 출금은 CHECK 제약조건 때문에 거부된다.</li>
<li>(라) 어제 COMMIT한 입금 기록은 오늘 서버를 다시 켜도 남아 있다.</li>
</ul>
`
        },
        {
          n: 257,
          lv: 3,
          html: String.raw`<p>SQL 창을 <strong>두 개</strong> 열고 둘 다 student로 접속해서 Lock을 직접 체험해 보세요. 각 단계에서 어떤 일이 일어났는지 적어 보세요.</p>
<ol>
<li>창 A: <code>UPDATE emp_t SET salary = 4000 WHERE id = 1;</code> (COMMIT하지 않기)</li>
<li>창 B: <code>SELECT salary FROM emp_t WHERE id = 1;</code> → 몇이 보이나요?</li>
<li>창 B: <code>UPDATE emp_t SET salary = 4500 WHERE id = 1;</code> → 어떻게 되나요?</li>
<li>창 A: <code>COMMIT;</code> → 창 B는 어떻게 되나요?</li>
<li>창 B: <code>COMMIT;</code> 후 두 창에서 다시 SELECT하면 급여는?</li>
</ol>
`
        },
        {
          n: 258,
          lv: 2,
          html: String.raw`<p>내가 <code>UPDATE s_emp SET salary = 9999 WHERE id = 1;</code>을 실행하고 아직 COMMIT하지 않았어요. 이때 같은 student 계정으로 접속한 다른 창에서 <code>SELECT salary FROM s_emp WHERE id = 1;</code>을 하면 무엇이 보일까요? 언제부터 9999가 보이나요? (확인한 뒤에는 꼭 ROLLBACK하세요.)</p>
`
        },
        {
          n: 259,
          lv: 2,
          html: String.raw`<p>다음 서비스에는 비관적 잠금과 낙관적 잠금 중 어느 쪽이 어울릴까요? 이유도 쓰세요.</p>
<ul>
<li>(가) 콘서트 좌석 예매</li>
<li>(나) 여러 사람이 가끔 고치는 위키 문서</li>
<li>(다) 재고가 1개 남은 한정판 상품 주문</li>
<li>(라) 혼자 쓰는 메모 앱</li>
</ul>
`
        },
        {
          n: 260,
          lv: 3,
          html: String.raw`<p><code>emp_t</code>에 version 컬럼이 있다고 할 때, 낙관적 잠금으로 id 1번 직원의 급여를 3000으로 바꾸는 UPDATE를 쓰세요. 내가 읽었을 때 version은 5였어요. 이 UPDATE가 0행을 수정했다면 무슨 뜻인가요?</p>
`
        },
        {
          n: 261,
          lv: 1,
          html: String.raw`<p>ACID의 네 글자가 각각 무엇의 약자이고 어떤 뜻인지 쓰세요.</p>
`
        },
        {
          n: 262,
          lv: 1,
          html: String.raw`<p>내가 UPDATE하고 아직 COMMIT하지 않은 값을, 다른 사용자가 SELECT하면 바뀐 값이 보일까요? 나 자신이 SELECT하면 어떨까요?</p>
`
        },
        {
          n: 263,
          lv: 2,
          html: String.raw`<p>창 A에서 <code>UPDATE emp_t SET salary = 100 WHERE id = 1;</code>을 하고 COMMIT하지 않았어요. 창 B에서 ① <code>UPDATE emp_t SET salary = 200 WHERE id = 2;</code>와 ② <code>UPDATE emp_t SET salary = 300 WHERE id = 1;</code>을 실행하면 각각 어떻게 될까요?</p>
`
        },
        {
          n: 264,
          lv: 3,
          html: String.raw`<p>창 A는 1번 행을, 창 B는 2번 행을 UPDATE한 뒤, 창 A가 2번 행을, 창 B가 1번 행을 UPDATE하려고 해요. 어떤 일이 생기고 오라클은 어떻게 처리하나요?</p>
`
        },
        {
          n: 265,
          lv: 3,
          html: String.raw`<p>두 사람이 동시에 같은 상품의 재고(stock)를 1개씩 줄이는 상황이에요. 둘 다 <code>SELECT stock</code>으로 5를 읽은 뒤 각자 <code>UPDATE product_t SET stock = 4 WHERE id = 1;</code>을 실행하면 어떤 문제가 생기나요? 어떻게 고치면 될까요?</p>
`
        },
        {
          n: 266,
          lv: 3,
          html: String.raw`<p>오전에 대량 UPDATE를 하고 COMMIT하지 않은 채 점심을 먹으러 갔어요. 이 동안 어떤 문제가 생길 수 있을까요?</p>
`
        }
      ],
      "title": "ACID와 Lock",
      "from": 255,
      "to": 266,
      "before": [],
      "after": ["<p>257번에서 창 B가 멈춘 것처럼 보여도 정상이에요. 창 A에서 COMMIT하면 풀려요.</p>\n"]
    },
    {
      "items": [
        {
          n: 267,
          lv: 2,
          html: String.raw`<p>다음 중 자동으로 COMMIT되는 것, 자동으로 ROLLBACK되는 것, 아무 일도 일어나지 않는 것(트랜잭션이 계속되는 것)으로 나누세요.</p>
<ul>
<li>INSERT, UPDATE, CREATE TABLE, GRANT, TRUNCATE</li>
<li>SQL*Plus를 EXIT로 정상 종료</li>
<li>창을 강제로 닫거나 컴퓨터가 꺼짐</li>
</ul>
`
        },
        {
          n: 268,
          lv: 2,
          html: String.raw`<p>아래를 실행한 뒤 김철수(id 1)가 <code>emp_t</code>에 남아 있는지 확인하고, 왜 그런지 설명해 보세요.</p>
<pre><code><span class="hl-kw">DELETE</span> <span class="hl-kw">FROM</span> emp_t <span class="hl-kw">WHERE</span> id = <span class="hl-num">1</span>;
<span class="hl-kw">CREATE</span> <span class="hl-kw">TABLE</span> <span class="hl-fn">tmp_t</span> (x <span class="hl-kw">NUMBER</span>);
<span class="hl-kw">ROLLBACK</span>;</code></pre>
`
        },
        {
          n: 269,
          lv: 1,
          html: String.raw`<p>UPDATE를 하고 COMMIT하지 않은 채로 <code>CREATE TABLE</code>을 실행했어요. 앞의 UPDATE는 어떻게 될까요?</p>
`
        },
        {
          n: 270,
          lv: 2,
          html: String.raw`<p><code>tx_t</code>에서 1번 행을 지우고, <code>CREATE TABLE tmp_x (a NUMBER);</code>를 실행한 다음 ROLLBACK하세요. 마지막에 <code>SELECT COUNT(*) FROM tx_t;</code>로 확인하세요. <span class="rows-chip">(1행)</span></p>
<p><code>tx_t</code>(id, memo)에는 (1, &#39;처음&#39;) 한 행이 COMMIT된 상태로 들어 있어요.</p>
`
        },
        {
          n: 271,
          lv: 2,
          html: String.raw`<p>UPDATE를 하고 COMMIT하지 않은 채로 ① SQL 창을 정상적으로 종료(exit)한 경우와 ② 컴퓨터가 갑자기 꺼진 경우, 각각 UPDATE는 어떻게 될까요?</p>
`
        },
        {
          n: 272,
          lv: 3,
          html: String.raw`<p><code>tx_t</code>에 (2, &#39;A&#39;)를 넣고 COMMIT하지 않은 채로 <code>TRUNCATE TABLE tx_t;</code>를 실행한 다음 ROLLBACK하세요. 마지막에 <code>SELECT COUNT(*) FROM tx_t;</code>로 확인하고, DELETE로 지웠을 때와 무엇이 다른지 생각해 보세요. <span class="rows-chip">(1행)</span></p>
<p><code>tx_t</code>(id, memo)에는 (1, &#39;처음&#39;) 한 행이 COMMIT된 상태로 들어 있어요.</p>
`
        },
        {
          n: 273,
          lv: 3,
          html: String.raw`<p>아래를 순서대로 실행한 결과를 예상하고, 실행해서 확인하세요. 각 ROLLBACK이 무엇을 취소하는지 설명할 수 있어야 해요. <span class="rows-chip">(2행)</span></p>
<pre><code><span class="hl-kw">UPDATE</span> tx_t <span class="hl-kw">SET</span> memo = <span class="hl-str">'하나'</span> <span class="hl-kw">WHERE</span> id = <span class="hl-num">1</span>;
<span class="hl-kw">CREATE</span> <span class="hl-kw">TABLE</span> <span class="hl-fn">tmp_y</span> (a <span class="hl-kw">NUMBER</span>);
<span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> tx_t <span class="hl-kw">VALUES</span> (<span class="hl-num">2</span>, <span class="hl-str">'둘'</span>);
<span class="hl-kw">SAVEPOINT</span> s1;
<span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> tx_t <span class="hl-kw">VALUES</span> (<span class="hl-num">3</span>, <span class="hl-str">'셋'</span>);
<span class="hl-kw">ROLLBACK</span> <span class="hl-kw">TO</span> s1;
<span class="hl-kw">DROP</span> <span class="hl-kw">TABLE</span> tmp_y;
<span class="hl-kw">ROLLBACK</span>;
<span class="hl-kw">SELECT</span> * <span class="hl-kw">FROM</span> tx_t <span class="hl-kw">ORDER</span> <span class="hl-kw">BY</span> id;</code></pre>
<p><code>tx_t</code>(id, memo)에는 (1, &#39;처음&#39;) 한 행이 COMMIT된 상태로 들어 있어요.</p>
`
        }
      ],
      "title": "자동 COMMIT과 ROLLBACK",
      "from": 267,
      "to": 273,
      "before": [],
      "after": []
    }
  ],
  "no": 9,
  "kind": "chapter",
  "label": "9장",
  "title": "9장 TRANSACTION (트랜잭션)",
  "short": "TRANSACTION"
},
{
  "subs": [
    {
      "items": [
        {
          n: 274,
          lv: 1,
          html: String.raw`<p>내가 만든 테이블 목록을 데이터 사전에서 조회하세요. 오늘 만든 DEPT_T, EMP_T, TMP_T가 있는지 확인하세요.</p>
`
        },
        {
          n: 275,
          lv: 1,
          html: String.raw`<p>다른 사용자가 나에게 SELECT 권한을 준 테이블까지 포함해서, 내가 볼 수 있는 모든 테이블 목록을 보려면 어떤 데이터 사전을 조회해야 할까요? USER_, ALL_, DBA_의 차이와 함께 쓰세요.</p>
`
        },
        {
          n: 276,
          lv: 1,
          html: String.raw`<p>데이터 사전의 목차(DICTIONARY)에서 이름이 &#39;USER_CONS&#39;로 시작하는 사전 뷰를 찾아보세요.</p>
`
        },
        {
          n: 277,
          lv: 1,
          html: String.raw`<p>S_EMP의 컬럼 이름, 데이터 타입, 길이, NULL 허용 여부를 데이터 사전에서 조회하세요. <code>DESC s_emp</code>와 비교해 보세요. <span class="rows-chip">(9행)</span></p>
`
        },
        {
          n: 278,
          lv: 2,
          html: String.raw`<p>내가 가진 객체를 종류별로 몇 개씩 있는지 조회하세요. (테이블, 인덱스, 시퀀스 등)</p>
`
        },
        {
          n: 279,
          lv: 1,
          html: String.raw`<p><code>SELECT * FROM user_constraints WHERE table_name = &#39;s_emp&#39;;</code>을 실행하면 0행이 나와요. 에러도 아닌데 왜 아무것도 안 나올까요? 고쳐 쓰세요.</p>
`
        },
        {
          n: 280,
          lv: 2,
          html: String.raw`<p><code>EMP_T</code>에 걸린 제약조건의 이름, 종류, 조건을 조회하세요. 종류(P, U, C, R)별로 몇 개씩 나오는지 세고, NOT NULL은 어떤 종류로 나오는지 확인하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 281,
          lv: 3,
          html: String.raw`<p><code>user_constraints</code>와 <code>user_cons_columns</code>를 JOIN해서 <code>EMP_T</code>의 제약조건 이름, 종류, 컬럼 이름을 한 번에 조회하세요. 힌트: 두 뷰에 공통으로 있는 컬럼은 <code>constraint_name</code>이에요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 282,
          lv: 2,
          html: String.raw`<p>S_EMP에 걸린 제약조건 중 이름이 &#39;SYS_C&#39;로 시작하는 것만 조회하세요. 이 제약조건들은 왜 이런 이름을 갖게 됐을까요? <span class="rows-chip">(2행)</span></p>
`
        },
        {
          n: 283,
          lv: 1,
          html: String.raw`<p><code>SELECT * FROM ind;</code>와 <code>SELECT * FROM user_indexes;</code>를 각각 실행해 보세요. 결과가 같은 이유는 무엇일까요?</p>
`
        },
        {
          n: 284,
          lv: 1,
          html: String.raw`<p>내 테이블 중 이름이 &#39;S_&#39;로 시작하는 테이블의 이름을 USER_TABLES에서 조회하세요. <code>_</code>가 LIKE에서 &quot;아무 글자 하나&quot;라는 점에 주의하세요. <span class="rows-chip">(7행)</span></p>
<p>실습 테이블(S_EMP 등 8개)만 있는 처음 상태를 기준으로 채점해요.</p>
`
        },
        {
          n: 285,
          lv: 1,
          html: String.raw`<p>USER_, ALL_, DBA_로 시작하는 데이터 사전 뷰는 각각 어떤 범위의 정보를 보여주나요?</p>
`
        },
        {
          n: 286,
          lv: 1,
          html: String.raw`<p>데이터 사전은 누가 만들고 관리하나요? 사용자가 데이터 사전에 직접 INSERT하거나 UPDATE할 수 있나요?</p>
`
        },
        {
          n: 287,
          lv: 1,
          html: String.raw`<p>USER_TABLES에서 내 테이블이 모두 몇 개인지 세어 보세요. <span class="rows-chip">(1행)</span></p>
<p>실습 테이블(S_EMP 등 8개)만 있는 처음 상태를 기준으로 채점해요.</p>
`
        },
        {
          n: 288,
          lv: 2,
          html: String.raw`<p>뷰 <code>v_emp_name</code>(S_EMP의 id, name만)을 만든 다음, USER_VIEWS에서 내 뷰의 이름을 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 289,
          lv: 2,
          html: String.raw`<p>EMP_T의 컬럼 중 NULL을 넣을 수 없는(NOT NULL) 컬럼의 이름과 타입만 USER_TAB_COLUMNS에서 조회하는 SQL을 쓰세요.</p>
`
        },
        {
          n: 290,
          lv: 2,
          html: String.raw`<p>USER_CONSTRAINTS의 CONSTRAINT_TYPE 값 P, U, R, C는 각각 어떤 제약조건인가요? NOT NULL은 어느 값으로 나오나요?</p>
`
        },
        {
          n: 291,
          lv: 2,
          html: String.raw`<p>내가 만든 시퀀스의 이름, 증가값, 마지막으로 발급된 번호(LAST_NUMBER)를 조회하는 SQL을 쓰세요.</p>
`
        },
        {
          n: 292,
          lv: 2,
          html: String.raw`<p>S_EMP에 걸린 인덱스와 그 인덱스가 어떤 컬럼에 만들어졌는지를 조회하려면 어떤 데이터 사전 뷰를 봐야 할까요? SQL로 쓰세요.</p>
`
        },
        {
          n: 293,
          lv: 2,
          html: String.raw`<p>USER_TABLES에서 내 테이블 이름을 알파벳 순으로 조회하되, S_ITEM, S_ORD, S_PRODUCT는 빼고 보여주세요. <span class="rows-chip">(5행)</span></p>
<p>실습 테이블(S_EMP 등 8개)만 있는 처음 상태를 기준으로 채점해요.</p>
`
        },
        {
          n: 294,
          lv: 2,
          html: String.raw`<p>내가 다른 사용자에게 준 테이블 권한과, 다른 사용자에게서 받은 테이블 권한은 어떤 데이터 사전에서 볼 수 있나요?</p>
`
        },
        {
          n: 295,
          lv: 3,
          html: String.raw`<p>EMP_T의 FK 제약조건이 어느 테이블의 어떤 제약조건(PK)을 참조하는지 조회하는 SQL을 쓰세요. 힌트: USER_CONSTRAINTS에는 R_CONSTRAINT_NAME 컬럼이 있어요.</p>
`
        },
        {
          n: 296,
          lv: 3,
          html: String.raw`<p>내 테이블 중 PRIMARY KEY가 없는 테이블의 이름을 조회하는 SQL을 쓰세요.</p>
`
        },
        {
          n: 297,
          lv: 3,
          html: String.raw`<p>내 테이블별 컬럼 수를 USER_TAB_COLUMNS에서 구해서, 컬럼이 많은 순으로 조회하는 SQL을 쓰세요.</p>
`
        },
        {
          n: 298,
          lv: 3,
          html: String.raw`<p><code>CREATE TABLE Emp_Test (id NUMBER);</code>로 만든 테이블을 USER_TABLES에서 <code>WHERE table_name = &#39;Emp_Test&#39;</code>로 찾으면 0행이 나와요. 이유와 바르게 찾는 방법을 쓰세요. <code>CREATE TABLE &quot;Emp_Test&quot;</code>로 만들었다면 어떨까요?</p>
`
        },
        {
          n: 299,
          lv: 3,
          html: String.raw`<p>USER_OBJECTS에서 최근 하루 동안 만든 객체의 이름, 종류, 만든 시각을 최신 순으로 조회하는 SQL을 쓰세요.</p>
`
        },
        {
          n: 300,
          lv: 3,
          html: String.raw`<p>뷰 <code>v_a</code>(S_EMP의 name)와 <code>v_b</code>(S_DEPT의 name)를 만든 뒤, 내 테이블과 뷰의 이름을 한 컬럼으로 모아 이름 순으로 조회하세요. USER_TABLES와 USER_VIEWS를 SET 연산자로 합쳐요. <span class="rows-chip">(10행)</span></p>
<p>실습 테이블(S_EMP 등 8개)만 있는 처음 상태를 기준으로 채점해요.</p>
`
        },
        {
          n: 301,
          lv: 3,
          html: String.raw`<p>S_EMP의 각 컬럼에 달린 설명(COMMENT)과 테이블에 달린 설명을 조회하는 SQL을 각각 쓰세요.</p>
`
        },
        {
          n: 302,
          lv: 3,
          html: String.raw`<p>EMP_T에 걸린 CHECK 제약조건만 골라 이름과 조건식을 조회하되, NOT NULL로 생긴 것은 빼세요. 어떤 기준으로 뺄 수 있을까요?</p>
`
        },
        {
          n: 303,
          lv: 3,
          html: String.raw`<p>팀원이 &quot;dept_t의 110번 부서를 지우려는데 ORA-02292가 나요. 어느 테이블이 이 부서를 참조하는지 모르겠어요&quot;라고 해요. 데이터 사전으로 dept_t를 참조하는 자식 테이블과 FK 이름을 찾는 SQL을 쓰세요.</p>
`
        }
      ],
      "title": "데이터 사전",
      "from": 274,
      "to": 303,
      "before": [],
      "after": []
    }
  ],
  "no": 10,
  "kind": "chapter",
  "label": "10장",
  "title": "10장 DICTIONARY (데이터 사전)",
  "short": "DICTIONARY"
},
{
  "subs": [
    {
      "items": [
        {
          n: 304,
          lv: 1,
          html: String.raw`<p><code>emp_t</code>에 <code>phone VARCHAR2(15)</code>와 <code>hire_date DATE</code> 컬럼을 추가하세요. hire_date의 기본값은 오늘 날짜(SYSDATE)예요.</p>
`
        },
        {
          n: 305,
          lv: 2,
          html: String.raw`<p><code>emp_t</code>의 name 컬럼 크기를 50으로 늘리고, salary의 기본값을 1000으로 바꾸세요.</p>
`
        },
        {
          n: 306,
          lv: 2,
          html: String.raw`<p>phone에 <code>emp_t_phone_uk</code>라는 이름으로 UNIQUE 제약조건을 추가하고, 데이터 사전에서 확인한 다음 다시 삭제하세요.</p>
`
        },
        {
          n: 307,
          lv: 3,
          html: String.raw`<p>제약조건을 꺼 두면 어떻게 되는지 실험해 보세요. ③에서 에러가 나는 이유를 설명하고, ③을 성공시키려면 무엇을 해야 하는지 적어 보세요.</p>
<pre><code><span class="hl-kw">ALTER</span> <span class="hl-kw">TABLE</span> emp_t <span class="hl-kw">DISABLE</span> <span class="hl-kw">CONSTRAINT</span> emp_t_salary_ck;              <span class="hl-com">-- ①</span>
<span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> <span class="hl-fn">emp_t</span> (id, name, salary, dept_id)
<span class="hl-kw">VALUES</span> (<span class="hl-num">1</span>, <span class="hl-str">'김철수'</span>, <span class="hl-num">100</span>, <span class="hl-num">110</span>);                                    <span class="hl-com">-- ②</span>
<span class="hl-kw">ALTER</span> <span class="hl-kw">TABLE</span> emp_t <span class="hl-kw">ENABLE</span> <span class="hl-kw">CONSTRAINT</span> emp_t_salary_ck;               <span class="hl-com">-- ③</span></code></pre>
`
        },
        {
          n: 308,
          lv: 2,
          html: String.raw`<p>아래를 실행하면서 ①~③ 시점의 <code>emp_t</code> 행 수를 먼저 예상하고 확인하세요. (307번에서 넣은 김철수는 먼저 지우고 시작하세요.)</p>
<pre><code><span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> <span class="hl-fn">emp_t</span> (id, name, salary, dept_id) <span class="hl-kw">VALUES</span> (<span class="hl-num">1</span>, <span class="hl-str">'김철수'</span>, <span class="hl-num">3000</span>, <span class="hl-num">110</span>);
<span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> <span class="hl-fn">emp_t</span> (id, name, salary, dept_id) <span class="hl-kw">VALUES</span> (<span class="hl-num">2</span>, <span class="hl-str">'이영희'</span>, <span class="hl-num">2000</span>, <span class="hl-num">111</span>);
<span class="hl-kw">COMMIT</span>;
<span class="hl-kw">DELETE</span> <span class="hl-kw">FROM</span> emp_t;
<span class="hl-kw">ROLLBACK</span>;            <span class="hl-com">-- ① 몇 행?</span>
<span class="hl-kw">TRUNCATE</span> <span class="hl-kw">TABLE</span> emp_t;
<span class="hl-kw">ROLLBACK</span>;            <span class="hl-com">-- ② 몇 행?</span>
<span class="hl-kw">DESC</span> emp_t;          <span class="hl-com">-- ③ 테이블은 남아 있나?</span></code></pre>
`
        },
        {
          n: 309,
          lv: 1,
          html: String.raw`<p>268번에서 만든 <code>tmp_t</code>의 이름을 <code>tmp_test</code>로 바꾼 뒤 삭제하세요. 그다음 내 테이블 목록에서 사라졌는지 확인하세요.</p>
`
        },
        {
          n: 310,
          lv: 1,
          html: String.raw`<p><code>emp_t</code> 테이블에는 &#39;실습용 직원 테이블&#39;, salary 컬럼에는 &#39;월급(만원)&#39;이라는 설명을 달고, 데이터 사전에서 조회해 보세요.</p>
`
        },
        {
          n: 311,
          lv: 2,
          html: String.raw`<p><code>DROP TABLE dept_t;</code>를 실행하면 에러가 나요. 왜 그런지, 그리고 <code>CASCADE CONSTRAINTS</code>를 붙이면 <code>emp_t</code>에는 무슨 일이 생기는지 설명하세요. (에러만 확인하고, CASCADE는 실행하지 마세요.)</p>
`
        },
        {
          n: 312,
          lv: 2,
          html: String.raw`<p>S_DEPT 전체를 복사한 <code>dept_copy</code> 테이블을 만들고, 이름을 <code>dept_bak</code>으로 바꾸고, 데이터만 모두 지운 뒤(되돌릴 수 없게), 마지막에 테이블을 삭제하는 SQL을 순서대로 쓰세요.</p>
`
        },
        {
          n: 313,
          lv: 3,
          html: String.raw`<p><code>dept_t</code>의 name 컬럼에 <code>dept_t_name_uk</code>라는 이름으로 UNIQUE 제약조건을 추가하는 SQL을 쓰세요. 실습 데이터에서는 이 SQL이 실패하는데, 그 이유는 무엇일까요?</p>
`
        },
        {
          n: 314,
          lv: 1,
          html: String.raw`<p>다음 상황에 DELETE, TRUNCATE, DROP 중 무엇을 쓰면 좋을까요?</p>
<ul>
<li>(가) 테스트용 데이터 100만 건을 빠르게 비우되, 테이블은 그대로 둔다.</li>
<li>(나) 2015년에 입사한 직원만 지운다.</li>
<li>(다) 다시는 쓰지 않을 테이블을 없앤다.</li>
<li>(라) 지운 뒤 마음이 바뀌면 되돌릴 수 있어야 한다.</li>
</ul>
`
        },
        {
          n: 315,
          lv: 1,
          html: String.raw`<p>DDL에 속하는 명령을 모두 쓰세요. DDL을 실행하면 트랜잭션에는 어떤 일이 생기나요?</p>
`
        },
        {
          n: 316,
          lv: 1,
          html: String.raw`<p><code>mem_t</code>에 email VARCHAR2(30) 컬럼을 추가하고, <code>SELECT id, name, email FROM mem_t ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(2행)</span></p>
<p><code>mem_t</code>(id, name, phone, memo)에는 (1, &#39;김하늘&#39;, &#39;010-1111-2222&#39;, &#39;첫 가입&#39;), (2, &#39;이바다&#39;, NULL, NULL)이 들어 있어요.</p>
`
        },
        {
          n: 317,
          lv: 1,
          html: String.raw`<p><code>mem_t</code>에서 memo 컬럼을 지우고, <code>SELECT * FROM mem_t ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(2행)</span></p>
<p><code>mem_t</code>(id, name, phone, memo)에는 (1, &#39;김하늘&#39;, &#39;010-1111-2222&#39;, &#39;첫 가입&#39;), (2, &#39;이바다&#39;, NULL, NULL)이 들어 있어요.</p>
`
        },
        {
          n: 318,
          lv: 1,
          html: String.raw`<p><code>mem_t</code> 테이블의 이름을 <code>member_old</code>로 바꾸고, <code>SELECT id, name FROM member_old ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(2행)</span></p>
<p><code>mem_t</code>(id, name, phone, memo)에는 (1, &#39;김하늘&#39;, &#39;010-1111-2222&#39;, &#39;첫 가입&#39;), (2, &#39;이바다&#39;, NULL, NULL)이 들어 있어요.</p>
`
        },
        {
          n: 319,
          lv: 1,
          html: String.raw`<p><code>mem_t</code>의 phone 컬럼 이름을 tel로 바꾸고, <code>SELECT id, tel FROM mem_t ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(2행)</span></p>
<p><code>mem_t</code>(id, name, phone, memo)에는 (1, &#39;김하늘&#39;, &#39;010-1111-2222&#39;, &#39;첫 가입&#39;), (2, &#39;이바다&#39;, NULL, NULL)이 들어 있어요.</p>
`
        },
        {
          n: 320,
          lv: 1,
          html: String.raw`<p><code>mem_t</code>의 데이터를 TRUNCATE로 모두 지우고, <code>SELECT COUNT(*) FROM mem_t;</code>로 확인하세요. 테이블은 남아 있어야 해요. <span class="rows-chip">(1행)</span></p>
<p><code>mem_t</code>(id, name, phone, memo)에는 (1, &#39;김하늘&#39;, &#39;010-1111-2222&#39;, &#39;첫 가입&#39;), (2, &#39;이바다&#39;, NULL, NULL)이 들어 있어요.</p>
`
        },
        {
          n: 321,
          lv: 2,
          html: String.raw`<p><code>mem_t</code>에 적립금 point NUMBER(5) 컬럼을 기본값 100으로 추가하세요. 그다음 (3, &#39;박구름&#39;)을 id와 name만 지정해서 넣고, <code>SELECT id, name, point FROM mem_t ORDER BY id;</code>로 확인하세요. 이미 있던 1, 2번 회원에게도 기본값이 들어갔을까요? <span class="rows-chip">(3행)</span></p>
<p><code>mem_t</code>(id, name, phone, memo)에는 (1, &#39;김하늘&#39;, &#39;010-1111-2222&#39;, &#39;첫 가입&#39;), (2, &#39;이바다&#39;, NULL, NULL)이 들어 있어요.</p>
`
        },
        {
          n: 322,
          lv: 2,
          html: String.raw`<p><code>mem_t</code>의 name 컬럼 크기를 VARCHAR2(20)에서 VARCHAR2(5)로 줄이려고 했더니 에러가 났어요. 어떤 경우에 크기를 줄일 수 있나요?</p>
`
        },
        {
          n: 323,
          lv: 2,
          html: String.raw`<p><code>ALTER TABLE mem_t MODIFY (phone NUMBER(11));</code>처럼 문자 컬럼을 숫자로 바꾸려면 어떤 조건이 필요한가요?</p>
`
        },
        {
          n: 324,
          lv: 2,
          html: String.raw`<p><code>mem_t</code>에서 2번 회원만 남기고 나머지를 지운 다음, phone 컬럼과 memo 컬럼을 모두 지우세요. 마지막에 <code>SELECT * FROM mem_t;</code>로 확인하세요. <span class="rows-chip">(1행)</span></p>
<p><code>mem_t</code>(id, name, phone, memo)에는 (1, &#39;김하늘&#39;, &#39;010-1111-2222&#39;, &#39;첫 가입&#39;), (2, &#39;이바다&#39;, NULL, NULL)이 들어 있어요.</p>
`
        },
        {
          n: 325,
          lv: 2,
          html: String.raw`<p>S_EMP에서 직원의 id, name, salary만 복사한 <code>emp_sal</code> 테이블을 만든 다음, salary 컬럼 이름을 pay로 바꾸고 <code>SELECT name, pay FROM emp_sal WHERE pay &gt;= 3000 ORDER BY pay DESC;</code>로 확인하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 326,
          lv: 3,
          html: String.raw`<p><code>mem_t</code>의 phone 컬럼을 하이픈 없는 숫자 문자열로 바꾸려고 해요. 새 컬럼 phone2 VARCHAR2(11)을 추가하고, phone의 &#39;-&#39;를 없앤 값을 옮긴 다음, 옛 phone 컬럼을 지우고 phone2의 이름을 phone으로 바꾸세요. 마지막에 <code>SELECT id, phone FROM mem_t ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(2행)</span></p>
<p><code>mem_t</code>(id, name, phone, memo)에는 (1, &#39;김하늘&#39;, &#39;010-1111-2222&#39;, &#39;첫 가입&#39;), (2, &#39;이바다&#39;, NULL, NULL)이 들어 있어요.</p>
`
        },
        {
          n: 327,
          lv: 3,
          html: String.raw`<p>DELETE, TRUNCATE, DROP을 아래 기준으로 비교하는 표를 채우세요.</p>
<ul>
<li>지우는 대상(데이터만 / 구조까지)</li>
<li>WHERE로 일부만 지울 수 있는지</li>
<li>ROLLBACK 가능 여부</li>
<li>명령의 종류(DML / DDL)</li>
</ul>
`
        },
        {
          n: 328,
          lv: 3,
          html: String.raw`<p><code>ALTER TABLE emp_t DROP COLUMN id;</code>를 실행했는데, id가 다른 테이블의 FK가 참조하는 PK 컬럼이라 에러가 났어요. 어떻게 하면 지울 수 있나요? 그 결과 자식 테이블에는 무슨 일이 생기나요?</p>
`
        },
        {
          n: 329,
          lv: 3,
          html: String.raw`<p>아래를 순서대로 실행한 뒤 <code>SELECT id, name FROM mem_t ORDER BY id;</code>의 결과를 예상하고 확인하세요. <span class="rows-chip">(3행)</span></p>
<pre><code><span class="hl-kw">INSERT</span> <span class="hl-kw">INTO</span> <span class="hl-fn">mem_t</span> (id, name) <span class="hl-kw">VALUES</span> (<span class="hl-num">3</span>, <span class="hl-str">'박구름'</span>);
<span class="hl-kw">ALTER</span> <span class="hl-kw">TABLE</span> mem_t <span class="hl-kw">ADD</span> (point <span class="hl-kw">NUMBER</span>(<span class="hl-num">5</span>) <span class="hl-kw">DEFAULT</span> <span class="hl-num">0</span>);
<span class="hl-kw">DELETE</span> <span class="hl-kw">FROM</span> mem_t <span class="hl-kw">WHERE</span> id = <span class="hl-num">1</span>;
<span class="hl-kw">ROLLBACK</span>;</code></pre>
<p><code>mem_t</code>(id, name, phone, memo)에는 (1, &#39;김하늘&#39;, &#39;010-1111-2222&#39;, &#39;첫 가입&#39;), (2, &#39;이바다&#39;, NULL, NULL)이 들어 있어요.</p>
`
        },
        {
          n: 330,
          lv: 3,
          html: String.raw`<p>테이블에 데이터가 있는 상태에서 NOT NULL 컬럼을 새로 추가하려고 <code>ALTER TABLE mem_t ADD (grade NUMBER(1) NOT NULL);</code>을 실행하면 에러가 나요. 이유와 해결 방법을 쓰세요.</p>
`
        },
        {
          n: 331,
          lv: 3,
          html: String.raw`<p>S_DEPT를 복사한 <code>dept_x</code>를 만들고, 부서 이름 뒤에 지역 번호를 붙인 이름(예: 영업부-2)으로 바꾼 다음, region_id 컬럼을 지우세요. 마지막에 <code>SELECT * FROM dept_x WHERE name LIKE &#39;영업부%&#39; ORDER BY id;</code>로 확인하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 332,
          lv: 3,
          html: String.raw`<p>운영 중인 테이블에서 컬럼을 바로 DROP하는 대신 <code>ALTER TABLE ... SET UNUSED (컬럼);</code>을 먼저 쓰기도 해요. 어떤 차이가 있나요?</p>
`
        },
        {
          n: 333,
          lv: 3,
          html: String.raw`<p><code>mem_t</code>를 백업하려고 해요. 구조와 데이터를 그대로 복사한 <code>mem_bak</code>을 만든 뒤, 원본 mem_t를 TRUNCATE하고, 백업에서 id가 1인 회원만 원본으로 되돌려 넣으세요. 마지막에 <code>SELECT id, name FROM mem_t;</code>로 확인하세요. <span class="rows-chip">(1행)</span></p>
<p><code>mem_t</code>(id, name, phone, memo)에는 (1, &#39;김하늘&#39;, &#39;010-1111-2222&#39;, &#39;첫 가입&#39;), (2, &#39;이바다&#39;, NULL, NULL)이 들어 있어요.</p>
`
        }
      ],
      "title": "DDL",
      "from": 304,
      "to": 333,
      "before": ["<p>8~9장 문제를 다 풀었다면 지금 <code>emp_t</code>는 비어 있고(268번에서 삭제), <code>dept_t</code>에는 11개 부서가 있어요. 각 문제를 푼 뒤 <code>DESC emp_t;</code>로 구조를 확인해 보세요.</p>\n"],
      "after": []
    }
  ],
  "no": 11,
  "kind": "chapter",
  "label": "11장",
  "title": "11장 DDL (데이터 정의어)",
  "short": "DDL"
},
{
  "subs": [
    {
      "items": [
        {
          n: 334,
          lv: 1,
          html: String.raw`<p>TEST 사용자에게 테이블과 뷰를 만들 수 있는 시스템 권한을 주는 SQL을 쓰세요.</p>
`
        },
        {
          n: 335,
          lv: 1,
          html: String.raw`<p>334번에서 준 두 권한을 TEST에게서 다시 빼앗는 SQL을 쓰세요.</p>
`
        },
        {
          n: 336,
          lv: 1,
          html: String.raw`<p>다음 권한을 시스템 권한과 객체 권한으로 나누세요.</p>
<ul>
<li>CREATE SESSION</li>
<li>SELECT ON s_emp</li>
<li>CREATE SEQUENCE</li>
<li>UPDATE ON emp_t</li>
<li>DROP ANY TABLE</li>
<li>ALTER ON emp_t_seq</li>
</ul>
`
        },
        {
          n: 337,
          lv: 1,
          html: String.raw`<p><code>emp_t</code>를 조회할 수 있는 권한을 TEST에게 주고, 내가 준 권한 목록에서 확인하세요. 그다음 권한을 빼고 다시 확인하세요.</p>
`
        },
        {
          n: 338,
          lv: 2,
          html: String.raw`<p>TEST가 <code>emp_t</code>의 <strong>salary 컬럼만</strong> 수정할 수 있게 권한을 주고, 컬럼 단위 권한 목록에서 확인한 뒤 빼세요.</p>
`
        },
        {
          n: 339,
          lv: 1,
          html: String.raw`<p>S_DEPT를 모든 사용자가 조회할 수 있게 권한을 주는 SQL을 쓰세요.</p>
`
        },
        {
          n: 340,
          lv: 2,
          html: String.raw`<p>TEST에게 <code>emp_t</code>에 데이터를 넣고 지울 수 있는 권한을 주되, TEST가 이 권한을 다른 사용자에게도 다시 줄 수 있게 하세요.</p>
`
        },
        {
          n: 341,
          lv: 3,
          html: String.raw`<p>A가 B에게 권한을 주고, B가 다시 C에게 그 권한을 줬어요. 그 뒤 A가 B의 권한을 빼앗았을 때, C의 권한은 어떻게 될까요? 두 경우를 나눠 답하세요.</p>
<ul>
<li>(가) <code>GRANT SELECT ON s_emp TO B WITH GRANT OPTION;</code>으로 준 경우</li>
<li>(나) <code>GRANT CREATE TABLE TO B WITH ADMIN OPTION;</code>으로 준 경우</li>
</ul>
`
        },
        {
          n: 342,
          lv: 1,
          html: String.raw`<p>TEST 사용자에게 S_DEPT를 조회하고 수정할 수 있는 권한을 한 번에 주는 SQL을 쓰세요.</p>
`
        },
        {
          n: 343,
          lv: 1,
          html: String.raw`<p>DCL에 속하는 명령 두 가지를 쓰고, 각각 무엇을 하는지 쓰세요.</p>
`
        },
        {
          n: 344,
          lv: 1,
          html: String.raw`<p>TEST 사용자가 내 S_EMP를 조회하려면 <code>SELECT * FROM s_emp;</code>가 아니라 어떻게 써야 할까요? (내 사용자 이름은 student예요.)</p>
`
        },
        {
          n: 345,
          lv: 1,
          html: String.raw`<p>TEST에게서 S_DEPT에 대한 모든 객체 권한을 한 번에 빼앗는 SQL을 쓰세요.</p>
`
        },
        {
          n: 346,
          lv: 2,
          html: String.raw`<p>TEST가 emp_t의 name과 salary 컬럼만 수정할 수 있게 하는 SQL을 쓰세요. INSERT도 컬럼 단위로 줄 수 있을까요?</p>
`
        },
        {
          n: 347,
          lv: 2,
          html: String.raw`<p><code>WITH GRANT OPTION</code>과 <code>WITH ADMIN OPTION</code>은 각각 어떤 권한에 붙이나요? 권한을 빼앗을 때 차이도 쓰세요.</p>
`
        },
        {
          n: 348,
          lv: 2,
          html: String.raw`<p><code>GRANT SELECT ON s_emp TO test;</code>를 실행하려는데 내가 s_emp의 주인이 아니라면 어떤 조건이 있어야 권한을 줄 수 있나요?</p>
`
        },
        {
          n: 349,
          lv: 2,
          html: String.raw`<p><code>GRANT SELECT ON s_dept TO PUBLIC;</code>으로 준 권한을 TEST 한 명에게서만 빼앗을 수 있을까요?</p>
`
        },
        {
          n: 350,
          lv: 3,
          html: String.raw`<p>A가 <code>GRANT CREATE TABLE TO b WITH ADMIN OPTION;</code>을, B가 <code>GRANT CREATE TABLE TO c;</code>를 실행했어요. 그 뒤 A가 <code>REVOKE CREATE TABLE FROM b;</code>를 실행하면 B와 C는 각각 테이블을 만들 수 있을까요? B가 이미 만든 테이블은 어떻게 되나요?</p>
`
        },
        {
          n: 351,
          lv: 3,
          html: String.raw`<p>TEST가 student의 emp_t를 SELECT할 수는 있지만, emp_t를 기반으로 자기 스키마에 뷰를 만들려고 하면 ORA-01031(권한 부족)이 나요. TEST가 CREATE VIEW 권한은 갖고 있다고 할 때, 무엇이 문제일까요?</p>
`
        },
        {
          n: 352,
          lv: 3,
          html: String.raw`<p>신입 인턴 intern에게 S_EMP의 이름과 직책만 볼 수 있게 하려고 해요. 급여(salary)는 보이면 안 돼요. 어떻게 해야 할까요? SQL로 쓰세요.</p>
`
        },
        {
          n: 353,
          lv: 3,
          html: String.raw`<p><code>GRANT DROP ANY TABLE TO test;</code>처럼 ANY가 붙은 시스템 권한은 왜 조심해서 줘야 할까요?</p>
`
        },
        {
          n: 354,
          lv: 3,
          html: String.raw`<p>아래 요구를 GRANT 문으로 쓰세요.</p>
<ul>
<li>(가) audit 사용자는 student의 모든 실습 테이블 중 S_EMP와 S_CUSTOMER만 조회할 수 있다.</li>
<li>(나) clerk 사용자는 emp_t에 행을 넣을 수 있지만 id, name 컬럼에만 값을 넣을 수 있다.</li>
<li>(다) manager 사용자는 emp_t를 조회하고, 그 조회 권한을 자기 팀원에게 줄 수 있다.</li>
</ul>
`
        },
        {
          n: 355,
          lv: 3,
          html: String.raw`<p>퇴사한 직원 olduser의 계정을 정리하려고 해요. olduser가 만든 테이블은 다른 사람이 계속 쓰고 있어서 지우면 안 돼요. 계정을 지우지 않고 더 이상 접속하지 못하게 하려면 어떻게 할까요?</p>
`
        }
      ],
      "title": "권한 주고 빼기",
      "from": 334,
      "to": 355,
      "before": ["<p>실습 스크립트에 나오는 <code>TEST</code> 사용자에게 권한을 주고 빼는 문제예요. TEST 사용자가 없으면 SQL만 작성해 보세요.</p>\n"],
      "after": []
    },
    {
      "items": [
        {
          n: 356,
          lv: 2,
          html: String.raw`<p>아래 요구를 해결하는 SQL을 순서대로 작성하세요. (ROLE을 만들 권한이 없으면 작성만 해도 돼요.)</p>
<ul>
<li><code>hr_role</code>이라는 ROLE을 만든다.</li>
<li>이 ROLE로 S_EMP를 조회하고 수정할 수 있게 한다.</li>
<li>TEST에게 이 ROLE을 준다.</li>
</ul>
`
        },
        {
          n: 357,
          lv: 2,
          html: String.raw`<p>내가 받은 시스템 권한과, 내가 받은 ROLE을 각각 데이터 사전에서 조회하세요.</p>
`
        },
        {
          n: 358,
          lv: 1,
          html: String.raw`<p>ROLE이 무엇인지 한 문장으로 설명하고, 오라클에 미리 만들어져 있는 대표적인 ROLE 두 가지를 쓰세요.</p>
`
        },
        {
          n: 359,
          lv: 2,
          html: String.raw`<p><code>report_role</code>을 만들어 S_EMP와 S_DEPT의 조회 권한을 넣고, TEST에게 이 ROLE을 준 다음, 나중에 S_DEPT 조회 권한만 ROLE에서 빼는 SQL을 쓰세요. TEST는 따로 손대지 않아도 될까요?</p>
`
        },
        {
          n: 360,
          lv: 2,
          html: String.raw`<p>내가 받은 ROLE 안에 어떤 시스템 권한이 들어 있는지 확인하는 데이터 사전은 무엇인가요? SQL로 쓰세요.</p>
`
        },
        {
          n: 361,
          lv: 3,
          html: String.raw`<p>ROLE 안에 다른 ROLE을 넣을 수 있어요. <code>base_role</code>(CREATE SESSION)과, base_role에 CREATE TABLE을 더한 <code>dev_role</code>을 만들고, dev1에게 dev_role만 주는 SQL을 쓰세요.</p>
`
        },
        {
          n: 362,
          lv: 3,
          html: String.raw`<p>dev1에게 지금 막 ROLE을 줬는데, 이미 접속해 있던 dev1이 새 권한을 쓰지 못해요. 이유와 해결 방법을 쓰세요.</p>
`
        },
        {
          n: 363,
          lv: 3,
          html: String.raw`<p>팀장이 &quot;TEST가 지금 어떤 권한을 갖고 있는지 다 보여 달라&quot;고 해요. TEST로 접속해서 확인할 수 있는 데이터 사전 세 가지를 쓰고, 각각 무엇을 보여주는지 쓰세요.</p>
`
        }
      ],
      "title": "ROLE과 권한 확인",
      "from": 356,
      "to": 363,
      "before": [],
      "after": []
    }
  ],
  "no": 12,
  "kind": "chapter",
  "label": "12장",
  "title": "12장 DCL (데이터 제어어)",
  "short": "DCL"
},
{
  "subs": [
    {
      "items": [
        {
          n: 364,
          lv: 1,
          html: String.raw`<p>100부터 시작해서 10씩 커지고, 990에서 멈추는 시퀀스 <code>emp_t_seq</code>를 만드세요. CACHE는 쓰지 마세요. 만든 뒤 데이터 사전에서 확인하세요.</p>
`
        },
        {
          n: 365,
          lv: 2,
          html: String.raw`<p>새로 접속한 상태에서 아래를 실행하기 전에 각 결과를 예상해 보세요.</p>
<ol>
<li><code>SELECT emp_t_seq.CURRVAL FROM dual;</code></li>
<li><code>SELECT emp_t_seq.NEXTVAL FROM dual;</code>를 3번</li>
<li><code>SELECT emp_t_seq.CURRVAL FROM dual;</code></li>
</ol>
`
        },
        {
          n: 366,
          lv: 3,
          html: String.raw`<p>365번에 이어서, 시퀀스로 id를 매겨 <code>emp_t</code>에 직원 3명을 INSERT하고 COMMIT하세요. 이어서 한 명을 더 INSERT하고 ROLLBACK한 다음, 다시 한 명을 INSERT하면 그 직원의 id는 몇일까요? 예상하고 확인한 뒤 이유를 설명하세요.</p>
`
        },
        {
          n: 367,
          lv: 2,
          html: String.raw`<p><code>emp_t_seq</code>를 1부터 다시 시작하도록 <code>ALTER SEQUENCE ... START WITH 1</code>을 시도해 보세요. 어떻게 되나요? 1부터 다시 시작하려면 어떻게 해야 하나요?</p>
`
        },
        {
          n: 368,
          lv: 1,
          html: String.raw`<p>1부터 시작해서 1씩 커지는 시퀀스 <code>order_seq</code>를 만들고, 다음 번호를 확인하는 SQL을 쓰세요.</p>
`
        },
        {
          n: 369,
          lv: 1,
          html: String.raw`<p>NEXTVAL과 CURRVAL의 차이를 쓰세요.</p>
`
        },
        {
          n: 370,
          lv: 2,
          html: String.raw`<p><code>CREATE SEQUENCE s1 START WITH 1 MAXVALUE 3 CYCLE NOCACHE;</code>로 만든 시퀀스의 NEXTVAL을 5번 실행하면 어떤 번호가 나올까요? CYCLE 대신 NOCYCLE이면 어떻게 될까요?</p>
`
        },
        {
          n: 371,
          lv: 3,
          html: String.raw`<p>시퀀스로 주문 번호를 매기고 있는데, 번호가 1, 2, 3, 5, 6, 21처럼 중간이 비어 있어요. 어떤 이유들로 번호가 건너뛸 수 있나요?</p>
`
        },
        {
          n: 372,
          lv: 3,
          html: String.raw`<p>emp_t의 id를 시퀀스 emp_t_seq로 매기면서, 방금 넣은 직원의 id를 같은 세션에서 다시 쓰려고 해요. 새 직원 &#39;정달&#39;을 넣고, 그 직원을 담당자로 하는 고객 행을 cust_t에 넣는 SQL을 쓰세요(cust_t는 id, name, rep_id 컬럼).</p>
`
        }
      ],
      "title": "SEQUENCE (13.2~13.7)",
      "from": 364,
      "to": 372,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 373,
          lv: 1,
          html: String.raw`<p>S_EMP에 어떤 인덱스가 있는지 데이터 사전에서 조회하세요. 인덱스를 만든 적이 없는데 왜 이미 있을까요? <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 374,
          lv: 2,
          html: String.raw`<p>S_EMP의 name 컬럼에 인덱스를, <code>(dept_id, title)</code>에 결합 인덱스를 만드세요. 373번 조회를 다시 실행해서 3행이 나오는지, 새 인덱스의 uniqueness는 무엇인지 확인한 뒤 두 인덱스를 삭제하세요.</p>
`
        },
        {
          n: 375,
          lv: 2,
          html: String.raw`<p>name에 인덱스가 있을 때, 아래 조건 중 인덱스를 <strong>쓸 수 있는</strong> 것과 <strong>쓸 수 없는</strong> 것을 나누고 이유를 설명하세요.</p>
<ul>
<li>(가) <code>WHERE name = &#39;이용호&#39;</code></li>
<li>(나) <code>WHERE name LIKE &#39;김%&#39;</code></li>
<li>(다) <code>WHERE name LIKE &#39;%호&#39;</code></li>
<li>(라) <code>WHERE SUBSTR(name, 1, 1) = &#39;김&#39;</code></li>
</ul>
`
        },
        {
          n: 376,
          lv: 1,
          html: String.raw`<p>인덱스는 무엇을 위해 만드나요? 책에 비유해서 설명하세요.</p>
`
        },
        {
          n: 377,
          lv: 2,
          html: String.raw`<p>아래 상황 중 인덱스를 만들어도 효과가 거의 없는 것을 고르고 이유를 쓰세요.</p>
<ul>
<li>(가) 100만 건 중 회원 번호 하나로 찾는 조회가 많다.</li>
<li>(나) 행이 20개뿐인 테이블</li>
<li>(다) 성별(M/F)처럼 값의 종류가 두 가지뿐인 컬럼</li>
<li>(라) 하루에도 수십만 번 INSERT·UPDATE되는 로그 테이블</li>
</ul>
`
        },
        {
          n: 378,
          lv: 3,
          html: String.raw`<p><code>(dept_id, title)</code> 순서로 결합 인덱스를 만들었어요. 아래 조건 중 이 인덱스를 잘 쓸 수 있는 것과 없는 것을 나누세요.</p>
<ul>
<li>(가) <code>WHERE dept_id = 110 AND title = &#39;사원&#39;</code></li>
<li>(나) <code>WHERE dept_id = 110</code></li>
<li>(다) <code>WHERE title = &#39;사원&#39;</code></li>
</ul>
`
        }
      ],
      "title": "INDEX (13.8~13.15)",
      "from": 373,
      "to": 378,
      "before": [],
      "after": ["<p>11~13장 문제도 실습 테이블만 바꿔요. 374번은 S_EMP에 인덱스를 만들지만 데이터는 바뀌지 않고, 마지막에 지우면 원래대로 돌아가요.</p>\n"]
    },
    {
      "items": [
        {
          n: 379,
          lv: 1,
          html: String.raw`<p>직책이 &#39;사원&#39;인 직원의 id, name, salary, dept_id만 보여주는 뷰 <code>v_staff</code>를 만들고 조회하세요. <span class="rows-chip">(10행)</span></p>
`
        },
        {
          n: 380,
          lv: 2,
          html: String.raw`<p>직원 이름, 부서 이름, 지역 이름을 보여주는 뷰 <code>v_emp_region</code>을 만드세요. 그다음 JOIN 없이 이 뷰만으로 &#39;서울특별시&#39;에서 일하는 직원을 조회하세요. 힌트: name 컬럼이 세 테이블에 모두 있어요. <span class="rows-chip">(9행)</span></p>
`
        },
        {
          n: 381,
          lv: 3,
          html: String.raw`<p>부서별 직원 수와 평균 급여를 보여주는 뷰 <code>v_dept_avg</code>를 만들고, 이 뷰에 UPDATE를 시도해 보세요. 에러가 나는 이유를 설명하세요.</p>
`
        },
        {
          n: 382,
          lv: 3,
          html: String.raw`<p><code>emp_t</code>에 110번 부서 직원을 한 명 넣고 COMMIT하세요. 그다음 110번 부서 직원만 보이는 뷰를 <code>WITH CHECK OPTION</code>을 붙여 만들고, 이 뷰로 그 직원의 부서를 111로 바꿔 보세요. 어떻게 되나요? 같은 뷰로 급여를 바꾸는 것은 되나요?</p>
`
        },
        {
          n: 383,
          lv: 2,
          html: String.raw`<p>379번 뷰를 <code>WITH READ ONLY</code>로 다시 만들고(<code>OR REPLACE</code> 사용) DELETE를 시도해 보세요. 실제 S_EMP 데이터는 지워지지 않아야 해요.</p>
`
        },
        {
          n: 384,
          lv: 2,
          html: String.raw`<p>내가 만든 뷰의 이름과 저장된 SELECT문을 데이터 사전에서 조회하고, 379~383번에서 만든 뷰를 모두 삭제하세요. 뷰를 지워도 S_EMP는 그대로인지 확인하세요.</p>
`
        },
        {
          n: 385,
          lv: 1,
          html: String.raw`<p>S_EMP에 <code>emp</code>라는 시노님을 만들고 <code>SELECT * FROM emp;</code>로 조회한 뒤 삭제하세요. (권한이 없으면 SQL만 작성)</p>
`
        },
        {
          n: 386,
          lv: 1,
          html: String.raw`<p>110번 부서 직원의 이름과 직책만 보여주는 뷰 <code>v_dept110</code>을 만들고 <code>SELECT * FROM v_dept110;</code>으로 조회하세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 387,
          lv: 1,
          html: String.raw`<p>고객 이름과 전화번호만 보여주는 뷰 <code>v_cust_phone</code>을 만들고, 이 뷰에서 전화번호가 &#39;010-2222&#39;로 시작하는 고객을 조회하세요. <span class="rows-chip">(2행)</span></p>
`
        },
        {
          n: 388,
          lv: 1,
          html: String.raw`<p>뷰를 쓰면 좋은 점 두 가지를 쓰세요.</p>
`
        },
        {
          n: 389,
          lv: 2,
          html: String.raw`<p>부서 이름별 직원 수와 급여 합계를 보여주는 뷰 <code>v_dname_sum</code>(컬럼 dname, cnt, total)을 만들고, 이 뷰에서 직원이 5명 이상인 부서 이름을 조회하세요. <span class="rows-chip">(2행)</span></p>
`
        },
        {
          n: 390,
          lv: 3,
          html: String.raw`<p><code>CREATE VIEW v_test AS SELECT * FROM emp_t;</code>를 만든 뒤 emp_t에 컬럼 phone을 추가했어요. v_test를 조회하면 phone이 보일까요?</p>
`
        },
        {
          n: 391,
          lv: 3,
          html: String.raw`<p>직원 이름, 부서 이름, 급여 등급을 보여주는 뷰 <code>v_emp_grade</code>를 만든 뒤(컬럼 이름은 ename, dname, grade), 이 뷰에서 등급별 인원 수를 등급 순으로 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 392,
          lv: 3,
          html: String.raw`<p>뷰 <code>v_dept_cnt</code>(부서별 인원, GROUP BY 사용)에 <code>DELETE FROM v_dept_cnt WHERE dept_id = 110;</code>을 실행하면 어떻게 될까요? 뷰로 DML을 할 수 없는 경우를 세 가지 쓰세요.</p>
`
        },
        {
          n: 393,
          lv: 3,
          html: String.raw`<p>TEST가 <code>student.s_emp</code> 대신 <code>emp</code>라고만 써도 조회할 수 있게 하려고 해요. TEST 한 명만 쓰는 방법과 모든 사용자가 쓰는 방법을 각각 SQL로 쓰세요. 시노님을 만들면 권한도 생길까요?</p>
`
        }
      ],
      "title": "VIEW와 SYNONYM (13.16~13.21)",
      "from": 379,
      "to": 393,
      "before": [],
      "after": ["<p>뷰·시노님을 만드는 문제는 끝난 뒤 지워 주세요. 383번처럼 뷰를 통한 DML은 실제 테이블을 바꾸니, S_EMP 기반 뷰에서는 DML이 막히는지만 확인하고 혹시 성공했다면 ROLLBACK하세요.</p>\n"]
    }
  ],
  "no": 13,
  "kind": "chapter",
  "label": "13장",
  "title": "13장 OBJECT (시퀀스·인덱스·뷰·시노님)",
  "short": "OBJECT"
},
{
  "subs": [
    {
      "items": [
        {
          n: 394,
          lv: 1,
          html: String.raw`<p>고객 이름과 신용등급을 조회하되, 신용등급이 비어 있으면 &#39;미평가&#39;로 보여주세요. <span class="rows-chip">(15행)</span></p>
`
        },
        {
          n: 395,
          lv: 2,
          html: String.raw`<p>167번(모든 직원과 담당 고객, OUTER JOIN)을 다시 풀되, 담당 고객이 없으면 고객 이름 자리에 &#39;담당 고객 없음&#39;이 나오게 하세요. <span class="rows-chip">(34행)</span></p>
`
        },
        {
          n: 396,
          lv: 2,
          html: String.raw`<p>JOIN 없이 DECODE만 써서, 직원 이름과 부서 이름을 보여주세요. 101은 &#39;총무부&#39;, 102~106은 &#39;영업부&#39;, 110~113은 &#39;기획부&#39;, 118은 &#39;인사부&#39;예요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 397,
          lv: 2,
          html: String.raw`<p>CASE를 써서 급여가 3000 이상이면 &#39;고액&#39;, 1000 이상이면 &#39;보통&#39;, 그 외는 &#39;낮음&#39;으로 분류하고, <strong>구간별 인원 수</strong>를 세세요. <span class="rows-chip">(3행: 고액 5, 보통 9, 낮음 11)</span></p>
`
        },
        {
          n: 398,
          lv: 3,
          html: String.raw`<p>교안 189쪽의 DECODE 급여등급 쿼리와 164번(SALGRADE NON-EQUIJOIN)의 행 수를 비교하세요. 왜 25행과 21행으로 다르게 나오나요? 같은 결과를 CASE로도 만들어 보세요.</p>
`
        },
        {
          n: 399,
          lv: 1,
          html: String.raw`<p>직원 이름과 커미션을 조회하되, 커미션이 NULL이면 0으로 보여주세요. NVL을 쓰세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 400,
          lv: 1,
          html: String.raw`<p>고객 이름과, 담당 직원 번호가 0이면 &#39;담당 없음&#39;, 아니면 &#39;담당 있음&#39;을 보여주세요. DECODE를 쓰세요. <span class="rows-chip">(15행)</span></p>
`
        },
        {
          n: 401,
          lv: 1,
          html: String.raw`<p>직원 이름과 직책을 조회하되, 직책이 &#39;사원&#39;이면 &#39;STAFF&#39;, &#39;과장&#39;이면 &#39;MANAGER&#39;, 그 외는 &#39;ETC&#39;로 보여주세요. CASE를 쓰세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 402,
          lv: 1,
          html: String.raw`<p>직원 이름, 급여, 급여가 0이면 &#39;미지급&#39;, 아니면 &#39;지급&#39;을 보여주세요. 비교식을 쓰는 CASE WHEN을 쓰세요. <span class="rows-chip">(25행)</span></p>
`
        }
      ],
      "title": "NVL, DECODE, CASE (14.1~14.3)",
      "from": 394,
      "to": 402,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 403,
          lv: 2,
          html: String.raw`<p>PIVOT을 써서 부서별로 &#39;사원&#39;, &#39;과장&#39;, &#39;영업대표이사&#39;가 각각 몇 명인지 표로 보여주세요. <span class="rows-chip">(11행)</span> 교안처럼 &#39;부장&#39;을 넣으면 왜 모두 0이 나오는지도 확인하세요.</p>
`
        },
        {
          n: 404,
          lv: 3,
          html: String.raw`<p>403번과 같은 결과를 PIVOT 없이 DECODE와 GROUP BY로 만드세요.</p>
`
        },
        {
          n: 405,
          lv: 2,
          html: String.raw`<p>110~113번 부서의 부서별·직책별 인원을 ROLLUP으로 조회하세요. 소계 행과 총합계 행이 어느 것인지 표시해 보세요. <span class="rows-chip">(14행)</span></p>
`
        },
        {
          n: 406,
          lv: 2,
          html: String.raw`<p>405번을 CUBE로 바꾸면 몇 행이 나오나요? 늘어난 행은 무엇을 뜻하나요? <span class="rows-chip">(17행)</span></p>
`
        },
        {
          n: 407,
          lv: 2,
          html: String.raw`<p>전체 직원의 급여 순위를 구하세요(높은 순). 김석우(2650)는 몇 위인가요? 5위가 아닌 이유는 무엇인가요?</p>
`
        },
        {
          n: 408,
          lv: 3,
          html: String.raw`<p>부서별 급여 순위를 구하고, 인라인 뷰를 써서 <strong>부서별 1위만</strong> 남기세요. 부서는 11개인데 왜 12행이 나올까요?</p>
`
        },
        {
          n: 409,
          lv: 1,
          html: String.raw`<p>직원 이름, 급여, 급여가 높은 순의 순위를 RANK로 구해서 순위 순으로 조회하세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 410,
          lv: 1,
          html: String.raw`<p>직원 이름, 급여, 급여 순위를 DENSE_RANK로 구해서 순위 순으로 조회하세요. RANK와 비교해서 김석우의 순위가 어떻게 다른지 확인하세요. <span class="rows-chip">(25행)</span></p>
`
        }
      ],
      "title": "PIVOT, ROLLUP, CUBE, RANK (14.4~14.7)",
      "from": 403,
      "to": 410,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 411,
          lv: 3,
          html: String.raw`<p>상관 서브쿼리로 자기 부서 평균 급여보다 <strong>많이</strong> 받는 직원의 이름, 급여, 부서번호를 조회하세요. <span class="rows-chip">(9행)</span></p>
`
        },
        {
          n: 412,
          lv: 3,
          html: String.raw`<p>부서별 평균 급여를 서브쿼리로 두고, <code>salary &gt; ALL (...)</code>과 <code>salary &gt; ANY (...)</code>의 결과를 각각 구하세요. 두 조건을 MAX, MIN을 써서 다시 표현해 보세요. (ALL 1행, ANY 21행)</p>
`
        },
        {
          n: 413,
          lv: 2,
          html: String.raw`<p>EXISTS를 써서 담당 고객이 한 명 이상 있는 직원을 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 414,
          lv: 2,
          html: String.raw`<p>NOT EXISTS로 담당 고객이 없는 직원을 조회하세요. <span class="rows-chip">(20행)</span></p>
`
        },
        {
          n: 415,
          lv: 3,
          html: String.raw`<p>아래 두 쿼리를 실행하고 결과가 왜 다른지 설명하세요.</p>
<pre><code><span class="hl-kw">SELECT</span> name <span class="hl-kw">FROM</span> s_emp
<span class="hl-kw">WHERE</span> mailid <span class="hl-kw">NOT</span> <span class="hl-kw">IN</span> (<span class="hl-kw">SELECT</span> credit_rating <span class="hl-kw">FROM</span> s_customer);

<span class="hl-kw">SELECT</span> name <span class="hl-kw">FROM</span> s_emp e
<span class="hl-kw">WHERE</span> <span class="hl-kw">NOT</span> <span class="hl-kw">EXISTS</span> (<span class="hl-kw">SELECT</span> <span class="hl-str">'X'</span> <span class="hl-kw">FROM</span> s_customer c <span class="hl-kw">WHERE</span> c.credit_rating = e.mailid);</code></pre>
`
        },
        {
          n: 416,
          lv: 1,
          html: String.raw`<p>부하 직원이 한 명이라도 있는 직원의 이름과 직책을 EXISTS로 조회하세요. <span class="rows-chip">(3행)</span></p>
`
        }
      ],
      "title": "고급 서브쿼리 (14.8~14.9)",
      "from": 411,
      "to": 416,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 417,
          lv: 3,
          html: String.raw`<p>교안 206쪽 쿼리(<code>WHERE ROWNUM &lt;= 5 ORDER BY name</code>)를 실행하고, 결과가 정말 사전순 첫 5명인지 전체를 정렬해서 확인하세요. 다르다면 인라인 뷰를 써서 고치세요.</p>
`
        },
        {
          n: 418,
          lv: 2,
          html: String.raw`<p>급여 상위 3명의 이름과 급여를 조회하세요. RANK를 쓰지 말고 ROWNUM으로 풀어 보세요. <span class="rows-chip">(3행)</span></p>
`
        },
        {
          n: 419,
          lv: 3,
          html: String.raw`<p><code>SELECT name FROM s_emp WHERE ROWNUM = 2;</code>의 결과를 예상하고 실행해 보세요. 왜 그런가요? &quot;사번 순서로 두 번째 직원&quot;을 제대로 구하려면 어떻게 해야 할까요?</p>
`
        },
        {
          n: 420,
          lv: 2,
          html: String.raw`<p>S_EMP의 ROWID와 이름을 조회한 뒤, 그중 한 행의 ROWID를 복사해서 <code>WHERE ROWID = &#39;...&#39;</code>로 그 행만 조회해 보세요. 앞 6자리가 모두 같은 이유는 무엇인가요?</p>
`
        },
        {
          n: 421,
          lv: 3,
          html: String.raw`<p>아래 조건들을 인덱스를 쓸 수 있는 형태로 바꾸세요. 바꾼 뒤에도 결과 행 수가 같아야 해요.</p>
<ul>
<li>(가) <code>WHERE salary * 12 &gt;= 36000</code> <span class="rows-chip">(5행)</span></li>
<li>(나) <code>WHERE SUBSTR(name, 1, 1) = &#39;김&#39;</code> <span class="rows-chip">(3행)</span></li>
<li>(다) <code>WHERE TO_CHAR(start_date, &#39;YYYY&#39;) = &#39;2016&#39;</code> <span class="rows-chip">(19행)</span></li>
</ul>
`
        },
        {
          n: 422,
          lv: 3,
          html: String.raw`<p>다음 상황에는 어떤 트리거가 알맞을까요? 타이밍(BEFORE / AFTER)과 횟수(STATEMENT / ROW)를 고르고 이유를 적으세요.</p>
<ul>
<li>(가) 직원의 급여가 바뀔 때마다, 누구의 급여가 얼마에서 얼마로 바뀌었는지 이력 테이블에 남긴다.</li>
<li>(나) 주말에는 직원 테이블에 INSERT·UPDATE·DELETE를 아예 못 하게 막는다.</li>
<li>(다) 직원 테이블에 DELETE가 실행될 때마다 &quot;누가, 언제 삭제 명령을 실행했는지&quot;만 한 줄 기록한다.</li>
</ul>
`
        },
        {
          n: 423,
          lv: 1,
          html: String.raw`<p>ROWNUM과 ROWID는 각각 무엇인가요?</p>
`
        },
        {
          n: 424,
          lv: 1,
          html: String.raw`<p>트리거(TRIGGER)는 무엇인가요? 어떤 때 쓰는지 예를 하나 들어 보세요.</p>
`
        }
      ],
      "title": "ROWNUM, ROWID, 인덱스, TRIGGER (14.10~14.12)",
      "from": 417,
      "to": 424,
      "before": [],
      "after": []
    }
  ],
  "no": 14,
  "kind": "chapter",
  "label": "14장",
  "title": "14장 ADVANCED SQL (고급 SQL)",
  "short": "ADVANCED SQL"
},
{
  "subs": [
    {
      "items": [
        {
          n: 425,
          lv: 1,
          html: String.raw`<p>직책이 &#39;과장&#39;인 직원의 이름과 급여를 급여가 높은 순으로 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 426,
          lv: 1,
          html: String.raw`<p>부서 이름이 &#39;기획부&#39;인 부서의 부서 번호를 모두 조회하세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 427,
          lv: 1,
          html: String.raw`<p>급여가 1000 미만인 직원은 몇 명인가요? <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 428,
          lv: 1,
          html: String.raw`<p>메일ID가 &#39;jung&#39;으로 시작하는 직원의 이름과 메일ID를 조회하세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 429,
          lv: 1,
          html: String.raw`<p>이름이 두 글자인 고객의 이름을 조회하세요. <code>LENGTH</code>를 써 보세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 430,
          lv: 1,
          html: String.raw`<p>지역 이름에 &#39;/&#39;가 들어 있는 지역을 조회하세요. <span class="rows-chip">(3행)</span></p>
`
        },
        {
          n: 431,
          lv: 1,
          html: String.raw`<p>2016년 6월 17일에 입사한 직원은 몇 명인가요? <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 432,
          lv: 1,
          html: String.raw`<p>직원 이름과 연봉(급여 × 12)을 연봉이 높은 순으로 조회하세요. 연봉 컬럼 이름은 <code>연봉</code>으로 하세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 433,
          lv: 1,
          html: String.raw`<p>부서번호별 직원 수를 직원 수가 많은 순으로 조회하세요. <span class="rows-chip">(11행)</span></p>
`
        },
        {
          n: 434,
          lv: 1,
          html: String.raw`<p>고객 이름과 전화번호를 이름 순으로 조회하세요. <span class="rows-chip">(15행)</span></p>
`
        },
        {
          n: 435,
          lv: 1,
          html: String.raw`<p>이름이 &#39;정&#39;으로 시작하는 고객의 이름과 전화번호를 조회하세요. <span class="rows-chip">(3행)</span></p>
`
        },
        {
          n: 436,
          lv: 1,
          html: String.raw`<p>113번 부서 직원 중 급여가 1000 이상인 직원의 이름과 급여를 조회하세요. <span class="rows-chip">(3행)</span></p>
`
        },
        {
          n: 437,
          lv: 1,
          html: String.raw`<p>전체 직원의 평균 급여, 최고 급여, 최저 급여를 한 번에 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 438,
          lv: 1,
          html: String.raw`<p>직원 이름과 입사일을 <code>2016년 06월 17일</code> 형식으로 조회하세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 439,
          lv: 1,
          html: String.raw`<p>지역 번호가 3 이상인 지역의 번호와 이름을 조회하세요. <span class="rows-chip">(3행)</span></p>
`
        },
        {
          n: 440,
          lv: 1,
          html: String.raw`<p>담당 직원 번호별 고객 수를 구해서, 고객이 2명 이상인 담당 직원 번호만 조회하세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 441,
          lv: 1,
          html: String.raw`<p>&#39;인사부&#39;에서 일하는 직원의 이름과 직책을 조회하세요. (S_EMP + S_DEPT) <span class="rows-chip">(2행)</span></p>
`
        },
        {
          n: 442,
          lv: 1,
          html: String.raw`<p>급여가 2000 이상 3000 이하인 직원은 몇 명인가요? BETWEEN을 쓰세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 443,
          lv: 1,
          html: String.raw`<p>메일ID가 7글자 이상인 직원의 이름과 메일ID를 조회하세요. <span class="rows-chip">(14행)</span></p>
`
        },
        {
          n: 444,
          lv: 1,
          html: String.raw`<p>고객 주소(ADDRESS)별 고객 수를 고객이 많은 순으로 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        }
      ],
      "title": "초급",
      "from": 425,
      "to": 444,
      "before": ["<p>장 순서와 상관없이 여러 장의 내용을 섞어서 난이도별로 모은 문제예요. 위쪽 난이도 버튼으로 모든 장의 같은 난이도 문제만 골라 볼 수도 있어요.</p>\n"],
      "after": []
    },
    {
      "items": [
        {
          n: 445,
          lv: 2,
          html: String.raw`<p>지역 이름별로 그 지역에 있는 부서 수를 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 446,
          lv: 2,
          html: String.raw`<p>부서 이름별 직원 수를 조회하세요. 이름이 같은 부서(예: 여러 지역의 영업부)는 합쳐서 세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 447,
          lv: 2,
          html: String.raw`<p>직원이 가장 많은 부서의 부서번호와 직원 수를 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 448,
          lv: 2,
          html: String.raw`<p>급여가 2000 이상인 직원의 이름, 급여, 근무하는 지역 이름을 조회하세요. <span class="rows-chip">(12행)</span></p>
`
        },
        {
          n: 449,
          lv: 2,
          html: String.raw`<p>상사별로 부하 직원이 몇 명인지 상사 이름과 함께 조회하세요. <span class="rows-chip">(3행)</span></p>
`
        },
        {
          n: 450,
          lv: 2,
          html: String.raw`<p>3월에 입사한 직원의 이름과 입사일을 조회하세요. 연도는 상관없어요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 451,
          lv: 2,
          html: String.raw`<p>급여 등급이 &#39;C&#39;인 직원의 이름과 부서 이름을 조회하세요. <span class="rows-chip">(7행)</span></p>
`
        },
        {
          n: 452,
          lv: 2,
          html: String.raw`<p>평균 급여가 1000 이상이면서 인원이 2명 이상인 직책의 이름, 인원, 평균 급여를 조회하세요. <span class="rows-chip">(2행)</span></p>
`
        },
        {
          n: 453,
          lv: 2,
          html: String.raw`<p>지역 이름별 고객 수를 조회하세요. 지역 정보가 없는 고객은 빼도 돼요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 454,
          lv: 2,
          html: String.raw`<p>부서마다 급여가 가장 많은 직원의 이름, 부서 이름, 급여를 조회하세요. <span class="rows-chip">(12행)</span></p>
`
        },
        {
          n: 455,
          lv: 2,
          html: String.raw`<p>부서번호, 부서 이름, 그 부서의 최고 급여를 부서번호 순으로 조회하세요. <span class="rows-chip">(11행)</span></p>
`
        },
        {
          n: 456,
          lv: 2,
          html: String.raw`<p>입사한 요일별 인원 수를 조회하세요. 요일은 &#39;금요일&#39;처럼 보여주세요. <span class="rows-chip">(7행)</span></p>
`
        },
        {
          n: 457,
          lv: 2,
          html: String.raw`<p>&#39;기획부&#39; 직원 중 급여가 기획부 직원 전체의 평균 급여 이상인 직원의 이름과 급여를 조회하세요. <span class="rows-chip">(6행)</span></p>
`
        },
        {
          n: 458,
          lv: 2,
          html: String.raw`<p>고객이 가장 많은 지역의 이름과 고객 수를 조회하세요. (S_CUSTOMER + S_REGION) <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 459,
          lv: 2,
          html: String.raw`<p>직책별 인원 수와 최고 급여를 구하되, 인원이 2명 이상인 직책만 최고 급여가 높은 순으로 조회하세요. <span class="rows-chip">(3행)</span></p>
`
        },
        {
          n: 460,
          lv: 2,
          html: String.raw`<p>2015년에 입사한 직원의 이름, 부서 이름, 입사일을 입사일 순으로 조회하세요. <span class="rows-chip">(6행)</span></p>
`
        },
        {
          n: 461,
          lv: 2,
          html: String.raw`<p>상사 이름별로 부하 직원의 평균 급여(정수 반올림)를 조회하세요. <span class="rows-chip">(3행)</span></p>
`
        },
        {
          n: 462,
          lv: 2,
          html: String.raw`<p>담당 고객이 있는 직원의 이름과 담당 고객 이름을 직원 이름, 고객 이름 순으로 조회하세요. <span class="rows-chip">(14행)</span></p>
`
        },
        {
          n: 463,
          lv: 2,
          html: String.raw`<p>급여 등급별로 실제 직원의 최고 급여와 최저 급여를 등급 순으로 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 464,
          lv: 2,
          html: String.raw`<p>성이 &#39;장&#39;인 직원과 고객의 이름을 한 번에 보여주세요. 두 번째 컬럼에는 &#39;직원&#39; 또는 &#39;고객&#39;이 나오게 하고, 이름 순으로 정렬하세요. <span class="rows-chip">(4행)</span></p>
`
        }
      ],
      "title": "중급",
      "from": 445,
      "to": 464,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 465,
          lv: 3,
          html: String.raw`<p>자기 상사보다 급여를 많이 받는 직원의 이름, 급여, 상사 이름, 상사 급여를 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 466,
          lv: 3,
          html: String.raw`<p>담당 고객이 가장 많은 직원의 이름과 담당 고객 수를 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 467,
          lv: 3,
          html: String.raw`<p>부서별로, 그 부서 평균 급여보다 급여가 많은 직원이 몇 명인지 조회하세요. 그런 직원이 있는 부서만 나오면 돼요. <span class="rows-chip">(7행)</span></p>
`
        },
        {
          n: 468,
          lv: 3,
          html: String.raw`<p>부서 평균 급여가 회사 전체 평균 급여보다 낮은 부서의 이름과 그 부서의 평균 급여(소수 첫째 자리 반올림)를 조회하세요. <span class="rows-chip">(7행)</span></p>
`
        },
        {
          n: 469,
          lv: 3,
          html: String.raw`<p>부서마다 급여 순위가 2위인 직원의 부서번호, 이름, 급여를 조회하세요. <span class="rows-chip">(6행)</span></p>
`
        },
        {
          n: 470,
          lv: 3,
          html: String.raw`<p>입사 연도별로 급여가 가장 많은 직원의 입사 연도, 이름, 급여를 조회하세요. <span class="rows-chip">(2행)</span></p>
`
        },
        {
          n: 471,
          lv: 3,
          html: String.raw`<p>담당 직원이 S_EMP에 없는 고객의 이름을 <code>NOT EXISTS</code>로 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 472,
          lv: 3,
          html: String.raw`<p>모든 직원의 이름과 담당 고객 수를 조회하세요. 담당 고객이 없는 직원은 0으로 나와야 해요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 473,
          lv: 3,
          html: String.raw`<p>모든 직원의 이름과 상사 이름을 조회하세요. 상사가 없으면 &#39;없음&#39;으로 보여주세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 474,
          lv: 3,
          html: String.raw`<p>같은 날 입사한 동료가 한 명 이상 있는 직원의 이름과 입사일을 조회하세요. <span class="rows-chip">(14행)</span></p>
`
        },
        {
          n: 475,
          lv: 3,
          html: String.raw`<p>부서번호별 급여 합계와, 그 합계가 회사 전체 급여 합계에서 차지하는 비율(%, 소수 첫째 자리 반올림)을 비율이 높은 순으로 조회하세요. <span class="rows-chip">(11행)</span></p>
`
        },
        {
          n: 476,
          lv: 3,
          html: String.raw`<p>모든 직원의 이름, 부서번호, 급여, 그리고 부서 평균 급여와의 차이(급여 - 부서 평균, 정수 반올림)를 조회하세요. INLINE VIEW를 쓰세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 477,
          lv: 3,
          html: String.raw`<p>근무 지역별 급여 합계가 가장 큰 지역의 이름과 급여 합계를 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 478,
          lv: 3,
          html: String.raw`<p>부서마다 가장 먼저 입사한 직원의 부서번호, 이름, 입사일을 RANK와 INLINE VIEW로 조회하세요. 같은 날 입사한 사람이 있으면 모두 나와요. <span class="rows-chip">(12행)</span></p>
`
        },
        {
          n: 479,
          lv: 3,
          html: String.raw`<p>직원 이름, 상사 이름, 상사의 상사 이름을 조회하세요. 상사의 상사가 있는 직원만 나오면 돼요. <span class="rows-chip">(15행)</span></p>
`
        },
        {
          n: 480,
          lv: 3,
          html: String.raw`<p>담당 고객의 지역(REGION_ID)이 두 곳 이상인 직원의 이름과 지역 수를 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 481,
          lv: 3,
          html: String.raw`<p>같은 날 입사한 동료가 한 명도 없는 직원의 이름과 입사일을 입사일 순으로 조회하세요. <span class="rows-chip">(11행)</span></p>
`
        },
        {
          n: 482,
          lv: 3,
          html: String.raw`<p>부서 평균 급여가 가장 높은 부서의 부서 이름과 평균 급여를 조회하세요. <span class="rows-chip">(1행)</span></p>
`
        },
        {
          n: 483,
          lv: 3,
          html: String.raw`<p>&#39;영업부&#39;(여러 개) 소속 직원 중 담당 고객이 한 명도 없는 직원의 이름과 직책을 조회하세요. <span class="rows-chip">(2행)</span></p>
`
        },
        {
          n: 484,
          lv: 3,
          html: String.raw`<p>근무 지역 이름별로 급여가 0인 직원 수와 0보다 큰 직원 수를 한 줄에 보여주세요. CASE를 쓰세요. <span class="rows-chip">(5행)</span></p>
`
        }
      ],
      "title": "고급",
      "from": 465,
      "to": 484,
      "before": [],
      "after": []
    }
  ],
  "no": null,
  "kind": "extra",
  "label": "추가",
  "title": "난이도별 추가 문제",
  "short": "난이도별 추가"
},
{
  "subs": [
    {
      "items": [
        {
          n: 485,
          lv: 1,
          html: String.raw`<p>카테고리가 &#39;문구&#39;인 상품의 이름과 가격을 가격이 싼 순으로 조회하세요. <span class="rows-chip">(3행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        },
        {
          n: 486,
          lv: 1,
          html: String.raw`<p>재고가 없는(0인) 상품의 이름과 카테고리를 조회하세요. <span class="rows-chip">(2행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        },
        {
          n: 487,
          lv: 1,
          html: String.raw`<p>카테고리별 상품 수와 평균 가격(정수 반올림)을 조회하세요. <span class="rows-chip">(3행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        },
        {
          n: 488,
          lv: 1,
          html: String.raw`<p>주문번호, 상품 이름, 주문 수량을 주문번호 순으로 조회하세요. <span class="rows-chip">(9행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        },
        {
          n: 489,
          lv: 1,
          html: String.raw`<p>상품 이름별 총 주문 수량을 총 수량이 많은 순으로 조회하세요. 주문된 상품만 나오면 돼요. <span class="rows-chip">(6행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        },
        {
          n: 490,
          lv: 1,
          html: String.raw`<p>새 상품 (8, &#39;형광펜&#39;, &#39;문구&#39;, 900, 40)을 넣고 COMMIT한 다음, 카테고리별 상품 수를 조회하세요. <span class="rows-chip">(3행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        },
        {
          n: 491,
          lv: 1,
          html: String.raw`<p>&#39;전자&#39; 카테고리 상품의 가격을 10% 올리고, <code>SELECT pname, price FROM product_s WHERE category = &#39;전자&#39; ORDER BY pid;</code>로 확인하세요. <span class="rows-chip">(2행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        },
        {
          n: 492,
          lv: 1,
          html: String.raw`<p>2025년 3월에 들어온 주문의 주문번호와 주문일을 조회하세요. <span class="rows-chip">(3행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        },
        {
          n: 493,
          lv: 1,
          html: String.raw`<p>상품을 <code>연필 (500원)</code> 형식으로 한 컬럼에 보여주세요. 컬럼 이름은 <code>상품</code>이고 pid 순으로 정렬하세요. <span class="rows-chip">(7행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        },
        {
          n: 494,
          lv: 1,
          html: String.raw`<p>재고가 10개 이하인 상품의 재고를 모두 20개로 채우고 COMMIT한 다음, <code>SELECT pname, stock FROM product_s WHERE stock = 20 ORDER BY pid;</code>로 확인하세요. <span class="rows-chip">(4행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        },
        {
          n: 495,
          lv: 1,
          html: String.raw`<p>2016년에 입사한 &#39;사원&#39;의 이름과 부서 이름을 이름 순으로 조회하세요. <span class="rows-chip">(10행)</span></p>
`
        },
        {
          n: 496,
          lv: 1,
          html: String.raw`<p>고객 이름, 담당 직원 이름, 고객의 지역 이름을 함께 조회하세요. 짝이 없는 고객은 빠져도 돼요. <span class="rows-chip">(13행)</span></p>
`
        },
        {
          n: 497,
          lv: 1,
          html: String.raw`<p>&#39;기획부&#39; 부서들의 부서번호, 인원 수, 평균 급여(정수 반올림)를 부서번호 순으로 조회하세요. <span class="rows-chip">(4행)</span></p>
`
        },
        {
          n: 498,
          lv: 1,
          html: String.raw`<p>급여 등급이 &#39;E&#39;인 직원의 이름과 부서번호를 이름 순으로 조회하세요. <span class="rows-chip">(7행)</span></p>
`
        },
        {
          n: 499,
          lv: 1,
          html: String.raw`<p>직책별 인원 수와 급여 합계를 급여 합계가 큰 순으로 조회하세요. <span class="rows-chip">(8행)</span></p>
`
        }
      ],
      "title": "기본기 종합 (SELECT·함수·DML·JOIN)",
      "from": 485,
      "to": 499,
      "before": ["<p>교안 전체를 배운 뒤에 푸는 종합 문제예요. 한 문제에 여러 장의 내용(JOIN, 그룹 함수, 서브쿼리, 제약조건, 트랜잭션 등)이 함께 들어가요.</p>\n"],
      "after": []
    },
    {
      "items": [
        {
          n: 500,
          lv: 2,
          html: String.raw`<p>부서번호, 부서 이름, 지역 이름, 직원 수, 평균 급여(정수로 반올림)를 부서번호 순으로 조회하세요. <span class="rows-chip">(11행)</span></p>
`
        },
        {
          n: 501,
          lv: 3,
          html: String.raw`<p>2016년에 입사한 직원 중, 급여가 자기 직책의 평균 급여 이상인 직원의 이름, 직책, 급여를 조회하세요. <span class="rows-chip">(11행)</span></p>
`
        },
        {
          n: 502,
          lv: 3,
          html: String.raw`<p>급여 등급별 인원과 평균 급여를 조회하세요. 어느 등급에도 들지 않는 직원은 &#39;등급 없음&#39;으로 묶어서 함께 보여주세요. <span class="rows-chip">(6행)</span></p>
`
        },
        {
          n: 503,
          lv: 2,
          html: String.raw`<p>모든 직원의 이름, 상사 이름, 부서 이름을 조회하세요. 상사가 없는 직원도 나와야 하고, 상사 이름 자리에는 &#39;없음&#39;이 나오게 하세요. <span class="rows-chip">(25행)</span></p>
`
        },
        {
          n: 504,
          lv: 3,
          html: String.raw`<p>모든 고객의 이름, 담당 직원 이름, 고객의 지역 이름을 조회하세요. 담당 직원이나 지역 정보가 없는 고객도 빠짐없이 나와야 해요. <span class="rows-chip">(15행)</span></p>
`
        },
        {
          n: 505,
          lv: 3,
          html: String.raw`<p>부서별 급여 1위 직원의 부서 이름, 이름, 급여, 그리고 그 급여가 부서 평균보다 얼마나 많은지를 조회하세요. <span class="rows-chip">(12행)</span></p>
`
        },
        {
          n: 506,
          lv: 2,
          html: String.raw`<p>&#39;사원&#39;과 &#39;과장&#39;의 급여를 10% 올린다고 할 때, 부서별 인상 후 급여 합계를 부서번호 순으로 조회하세요. 실제 데이터는 바꾸지 마세요. <span class="rows-chip">(11행)</span></p>
`
        },
        {
          n: 507,
          lv: 2,
          html: String.raw`<p>카테고리별 매출(가격 × 수량의 합계)을 매출이 큰 순으로 조회하세요. <span class="rows-chip">(3행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        },
        {
          n: 508,
          lv: 2,
          html: String.raw`<p>한 번도 주문되지 않은 상품의 이름을 조회하세요. <span class="rows-chip">(1행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        },
        {
          n: 509,
          lv: 3,
          html: String.raw`<p>상품별 매출(가격 × 수량 합계)과 매출 순위(RANK)를 조회하세요. 주문이 없는 상품도 매출 0으로 순위에 넣으세요. <span class="rows-chip">(7행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        },
        {
          n: 510,
          lv: 3,
          html: String.raw`<p>카테고리마다 가장 비싼 상품의 카테고리, 이름, 가격을 조회하세요. <span class="rows-chip">(3행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        },
        {
          n: 511,
          lv: 3,
          html: String.raw`<p>주문 월(<code>2025-03</code> 형식)별 주문 건수와 매출 합계를 월 순으로 조회하세요. <span class="rows-chip">(3행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        },
        {
          n: 512,
          lv: 3,
          html: String.raw`<p>부서마다 부서 이름, 인원 수, 최고 급여, 그리고 최고 급여를 받는 직원의 이름을 부서번호 순으로 조회하세요. 최고 급여자가 여러 명이면 모두 나와요. <span class="rows-chip">(12행)</span></p>
`
        }
      ],
      "title": "조회 종합 (SELECT·함수·GROUP BY·JOIN·서브쿼리)",
      "from": 500,
      "to": 512,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 513,
          lv: 3,
          html: String.raw`<p>프로젝트 관리 테이블 두 개를 만드세요. 제약조건에는 모두 이름을 붙이세요.</p>
<ul>
<li><code>project_t</code>: pid NUMBER(5) PK, pname VARCHAR2(30) NOT NULL, dept_id NUMBER(7) → <code>dept_t(id)</code> 참조, start_date DATE 기본값 오늘, budget NUMBER(10) 0보다 커야 함</li>
<li><code>pmember_t</code>: pid, emp_id, role VARCHAR2(20). (pid, emp_id)가 PK, pid는 <code>project_t(pid)</code> 참조</li>
</ul>
`
        },
        {
          n: 514,
          lv: 2,
          html: String.raw`<p>513번의 <code>project_t</code>에 시퀀스로 번호를 매겨 프로젝트 3건을 넣고 COMMIT하세요. 그다음 프로젝트 이름과 부서 이름을 보여주는 뷰 <code>v_project</code>를 만들어 조회하세요.</p>
`
        },
        {
          n: 515,
          lv: 2,
          html: String.raw`<p><code>emp_staff</code>(207번)에서 급여 인상 작업을 하다가 실수했어요. 아래 순서로 실행할 때, 실수한 UPDATE만 되돌리고 나머지는 확정하려면 ③에 무엇을 써야 할까요? 마지막 결과도 예상해 보세요.</p>
<pre><code><span class="hl-kw">UPDATE</span> emp_staff <span class="hl-kw">SET</span> salary = salary + <span class="hl-num">100</span> <span class="hl-kw">WHERE</span> dept_id = <span class="hl-num">110</span>;   <span class="hl-com">-- ① 맞는 작업</span>
<span class="hl-kw">SAVEPOINT</span> ok1;
<span class="hl-kw">UPDATE</span> emp_staff <span class="hl-kw">SET</span> salary = <span class="hl-num">0</span>;                                 <span class="hl-com">-- ② 실수 (WHERE 빠짐)</span>
<span class="hl-com">-- ③ ?</span>
<span class="hl-kw">COMMIT</span>;</code></pre>
`
        },
        {
          n: 516,
          lv: 2,
          html: String.raw`<p>상품 이름, 카테고리, 총 주문 수량을 보여주는 뷰 <code>v_prod_sales</code>(컬럼 pname, category, total_qty)를 만드세요. 주문이 없는 상품은 0으로 나와야 해요. 그다음 <code>SELECT * FROM v_prod_sales ORDER BY total_qty DESC, pname;</code>으로 조회하세요. <span class="rows-chip">(7행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        },
        {
          n: 517,
          lv: 3,
          html: String.raw`<p>주문 두 건을 처리하세요. 주문 한 건은 &quot;주문 INSERT + 재고 차감 UPDATE&quot;를 하나의 트랜잭션으로 처리해요.</p>
<ol>
<li>주문 110: 머그컵(pid 4) 3개, 주문일은 2025-05-10이에요. 처리하고 COMMIT하세요.</li>
<li>주문 111: 공책(pid 2) 2개를 INSERT했는데, 공책은 재고가 0이라 재고 차감 UPDATE가 CHECK 에러로 실패해요. 에러가 나는 UPDATE는 쓰지 말고, 이미 넣은 주문 111을 취소하세요.</li>
</ol>
<p>마지막에 <code>SELECT (SELECT COUNT(*) FROM order_s) AS 주문수, (SELECT stock FROM product_s WHERE pid = 4) AS 머그컵재고 FROM dual;</code>로 확인하세요. <span class="rows-chip">(1행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>product_s</td>
<td>pid, pname, category, price, stock</td>
<td>1 연필(문구, 500원, 재고 100), 2 공책(문구, 1200, 0), 3 지우개(문구, 300, 50), 4 머그컵(생활, 8000, 10), 5 텀블러(생활, 15000, 0), 6 USB 메모리(전자, 12000, 30), 7 마우스(전자, 25000, 5)</td>
</tr>
<tr>
<td>order_s</td>
<td>oid, pid, qty, odate</td>
<td>101 연필 10개(2025-03-02), 102 공책 5(03-02), 103 머그컵 1(03-15), 104 연필 20(04-01), 105 USB 메모리 2(04-03), 106 마우스 1(04-20), 107 지우개 15(05-05), 108 연필 5(05-06), 109 USB 메모리 1(05-07)</td>
</tr>
</tbody></table></div>
<p>stock에는 <code>CHECK (stock &gt;= 0)</code>, order_s.pid에는 product_s를 가리키는 FK가 걸려 있어요. 데이터는 COMMIT된 상태예요.</p>
`
        }
      ],
      "title": "설계와 관리 (DDL·제약조건·시퀀스·뷰·트랜잭션)",
      "from": 513,
      "to": 517,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 518,
          lv: 2,
          html: String.raw`<p>과목별 수강생 수와 평균 점수(소수 첫째 자리 반올림)를 평균 점수가 높은 순으로 조회하세요. <span class="rows-chip">(3행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>student_t</td>
<td>sno, name, grade</td>
<td>김하늘(1학년), 이바다(2), 박구름(2), 최별(3), 정달(4)</td>
</tr>
<tr>
<td>enroll_t</td>
<td>sno, course_id, score</td>
<td>김하늘 DB 95·JAVA 80, 이바다 DB 70·WEB 88, 박구름 DB 82·JAVA 91·WEB 60, 최별 WEB 77</td>
</tr>
</tbody></table></div>
`
        },
        {
          n: 519,
          lv: 2,
          html: String.raw`<p>한 과목도 수강하지 않은 학생의 이름을 조회하세요. <span class="rows-chip">(1행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>student_t</td>
<td>sno, name, grade</td>
<td>김하늘(1학년), 이바다(2), 박구름(2), 최별(3), 정달(4)</td>
</tr>
<tr>
<td>enroll_t</td>
<td>sno, course_id, score</td>
<td>김하늘 DB 95·JAVA 80, 이바다 DB 70·WEB 88, 박구름 DB 82·JAVA 91·WEB 60, 최별 WEB 77</td>
</tr>
</tbody></table></div>
`
        },
        {
          n: 520,
          lv: 2,
          html: String.raw`<p>학생별 평균 점수와 등급을 조회하세요. 평균이 90 이상이면 &#39;A&#39;, 80 이상이면 &#39;B&#39;, 70 이상이면 &#39;C&#39;, 그 외는 &#39;D&#39;예요. 수강 기록이 없는 학생은 빼도 돼요. <span class="rows-chip">(4행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>student_t</td>
<td>sno, name, grade</td>
<td>김하늘(1학년), 이바다(2), 박구름(2), 최별(3), 정달(4)</td>
</tr>
<tr>
<td>enroll_t</td>
<td>sno, course_id, score</td>
<td>김하늘 DB 95·JAVA 80, 이바다 DB 70·WEB 88, 박구름 DB 82·JAVA 91·WEB 60, 최별 WEB 77</td>
</tr>
</tbody></table></div>
`
        },
        {
          n: 521,
          lv: 3,
          html: String.raw`<p>과목별로 가장 높은 점수를 받은 학생의 과목, 이름, 점수를 조회하세요. <span class="rows-chip">(3행)</span></p>
<p>채점할 때는 아래 두 테이블을 먼저 만들어 두고 내 SQL을 실행해요. 직접 실행해 보려면 &quot;실행&quot;을 누르면 돼요.</p>
<div class="tw"><table><thead><tr>
<th>테이블</th>
<th>컬럼</th>
<th>들어 있는 데이터</th>
</tr>
</thead><tbody><tr>
<td>student_t</td>
<td>sno, name, grade</td>
<td>김하늘(1학년), 이바다(2), 박구름(2), 최별(3), 정달(4)</td>
</tr>
<tr>
<td>enroll_t</td>
<td>sno, course_id, score</td>
<td>김하늘 DB 95·JAVA 80, 이바다 DB 70·WEB 88, 박구름 DB 82·JAVA 91·WEB 60, 최별 WEB 77</td>
</tr>
</tbody></table></div>
`
        },
        {
          n: 522,
          lv: 3,
          html: String.raw`<p>쇼핑몰 회원 기능을 추가하려고 해요. 아래를 모두 만족하는 SQL을 순서대로 쓰세요.</p>
<ul>
<li>회원 테이블 <code>customer_s</code>: cid NUMBER(5) PK, cname VARCHAR2(20) 필수, email VARCHAR2(40) 중복 불가, grade CHAR(1) 기본값 &#39;B&#39;이고 &#39;A&#39;, &#39;B&#39;, &#39;C&#39;만 가능</li>
<li>order_s에 회원 번호 cid 컬럼을 추가하고, customer_s를 참조하는 FK를 건다</li>
<li>회원 번호는 시퀀스 <code>customer_s_seq</code>(1부터 1씩)로 매긴다</li>
<li>회원 두 명을 넣고 COMMIT한다</li>
<li>회원 이름과 주문 건수를 보여주는 뷰 <code>v_customer_orders</code>를 만든다(주문 없는 회원도 0건으로)</li>
</ul>
`
        }
      ],
      "title": "새 테이블로 종합 연습",
      "from": 518,
      "to": 522,
      "before": [],
      "after": []
    },
    {
      "items": [
        {
          n: 523,
          lv: 2,
          html: String.raw`<p>영업대표이사별로 담당 고객 수와, 담당 고객들이 있는 지역의 종류 수를 조회하세요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 524,
          lv: 2,
          html: String.raw`<p>부서번호별로 &#39;사원&#39; 수, &#39;과장&#39; 수, 전체 인원을 한 줄에 보여주세요. 부서번호 순이에요. <span class="rows-chip">(11행)</span></p>
`
        },
        {
          n: 525,
          lv: 2,
          html: String.raw`<p>아래 세 쿼리가 자주 실행된다고 할 때, S_EMP의 어느 컬럼에 인덱스를 만들면 좋을까요? 인덱스를 만들어도 쓰이지 않는 조건이 있다면 쓰일 수 있게 고치세요.</p>
<pre><code><span class="hl-kw">SELECT</span> * <span class="hl-kw">FROM</span> s_emp <span class="hl-kw">WHERE</span> dept_id = <span class="hl-num">110</span>;
<span class="hl-kw">SELECT</span> * <span class="hl-kw">FROM</span> s_emp <span class="hl-kw">WHERE</span> <span class="hl-fn">UPPER</span>(mailid) = <span class="hl-str">'KUGON'</span>;
<span class="hl-kw">SELECT</span> * <span class="hl-kw">FROM</span> s_emp <span class="hl-kw">WHERE</span> salary * <span class="hl-num">12</span> &gt; <span class="hl-num">30000</span>;</code></pre>
`
        },
        {
          n: 526,
          lv: 3,
          html: String.raw`<p>인사팀만 S_EMP 전체를 조회·수정할 수 있고, 다른 팀은 급여를 뺀 직원 정보(사번, 이름, 직책, 부서번호)만 조회할 수 있게 하려고 해요. 필요한 SQL을 순서대로 쓰세요. 인사팀 사용자는 HR1, 다른 팀 사용자는 TEST라고 할게요.</p>
`
        },
        {
          n: 527,
          lv: 2,
          html: String.raw`<p>급여 순위가 5위 안에 드는 직원의 이름, 급여, 순위를 조회하세요. 같은 급여는 같은 순위예요. <span class="rows-chip">(5행)</span></p>
`
        },
        {
          n: 528,
          lv: 3,
          html: String.raw`<p>실습을 마치고 내가 만든 객체를 정리하려고 해요. ① 내 테이블·뷰·시퀀스·시노님 목록을 한 번에 조회하고, ② <code>project_t</code>·<code>pmember_t</code>·<code>v_project</code>·<code>project_seq</code>를 지우는 SQL을 에러 없이 실행되는 순서로 쓰세요.</p>
`
        },
        {
          n: 529,
          lv: 3,
          html: String.raw`<p>직원마다 이름, 부서 이름, 급여, 그리고 부서 안에서의 급여 위치를 보여주세요. 부서 최고 급여면 &#39;부서 1위&#39;, 부서 평균 이상이면 &#39;평균 이상&#39;, 그 외는 &#39;평균 미만&#39;이에요. 부서번호, 급여 높은 순으로 정렬하세요. <span class="rows-chip">(25행)</span></p>
`
        }
      ],
      "title": "실무형 종합",
      "from": 523,
      "to": 529,
      "before": [],
      "after": []
    }
  ],
  "no": null,
  "kind": "final",
  "label": "종합",
  "title": "총정리 문제",
  "short": "총정리"
}
];
