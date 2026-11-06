// JAVA 핵심 정리 탭 (HTML)
var WJX = window.WJX = window.WJX || {};
WJX.cheat = String.raw`
<h1 id="jc-0">Java 핵심 정리</h1>
<p>‘하고 싶은 것’으로 찾는 자바 문법 모음이에요. 위 검색창에 낱말이나 클래스 이름(예: 형변환, 정렬, equals, LocalDate)을 넣으면 맞는 줄만 남아요. 자세한 설명은 <a href="#java" data-goto="java">개념 정리</a> 탭을 보세요.</p>
<h1 id="jc-ch-1">기본 문법 (1~3장)</h1>
<h2 id="jc-1">출력과 입력</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>출력하고 줄 바꾸기</td><td><code>System.out.println("Hi");</code></td><td>print는 줄을 바꾸지 않음</td></tr>
<tr><td>형식 지정해서 출력</td><td><code>System.out.printf("%d %.2f %s%n", 10, 3.14, "a");</code></td><td>%d 정수, %f 실수, %s 문자열, %c 문자, %b boolean, %x 16진수, %n 줄바꿈</td></tr>
<tr><td>폭 맞춰 출력</td><td><code>printf("[%5d][%-5d][%05d]", 12, 12, 12)</code></td><td>[   12][12   ][00012]</td></tr>
<tr><td>키보드로 한 줄 입력</td><td><code>Scanner sc = new Scanner(System.in);<br>String s = sc.nextLine();</code></td><td>import java.util.*; 필요. 숫자는 sc.nextInt()</td></tr>
</tbody>
</table>
</div>
<h2 id="jc-2">기본형과 리터럴</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>정수</td><td><code>byte(1) short(2) int(4) long(8)</code></td><td>기본은 int. long 리터럴은 100L</td></tr>
<tr><td>실수</td><td><code>float(4) double(8)</code></td><td>기본은 double. float 리터럴은 3.14f (f 필수)</td></tr>
<tr><td>문자·논리</td><td><code>char c = 'A';  boolean b = true;</code></td><td>char는 유니코드 정수(2 byte). 'A' = 65</td></tr>
<tr><td>진법 리터럴</td><td><code>0x1F  010  0b101  1_000_000</code></td><td>16진, 8진, 2진, 자릿수 구분</td></tr>
<tr><td>상수</td><td><code>final int MAX = 10;</code></td><td>한 번만 저장. 이름은 대문자_대문자</td></tr>
<tr><td>타입 추론</td><td><code>var list = new ArrayList&lt;String&gt;();</code></td><td>지역변수만, 초기화 필수 (JDK 10+)</td></tr>
<tr><td>여러 줄 문자열</td><td><code>String s = """<br>    여러 줄<br>    """;</code></td><td>텍스트 블럭 (JDK 15+)</td></tr>
</tbody>
</table>
</div>
<h2 id="jc-3">형변환</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>명시적 형변환</td><td><code>(byte) 300  (int) 3.99</code></td><td>44, 3 (값 손실, 실수→정수는 버림)</td></tr>
<tr><td>자동 형변환 방향</td><td><code>byte → short → int → long → float → double</code></td><td>char → int 도 자동</td></tr>
<tr><td>숫자 → 문자열</td><td><code>3 + ""   String.valueOf(3)</code></td><td>"3"</td></tr>
<tr><td>문자열 → 숫자</td><td><code>Integer.parseInt("3")  Double.parseDouble("1.5")</code></td><td>숫자가 아니면 NumberFormatException</td></tr>
<tr><td>문자 ↔ 숫자</td><td><code>'3' - '0'   (char)(3 + '0')</code></td><td>3, '3'</td></tr>
<tr><td>문자열 → 문자</td><td><code>"abc".charAt(0)</code></td><td>'a'</td></tr>
</tbody>
</table>
</div>
<h2 id="jc-4">연산자</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>우선순위 (높음 → 낮음)</td><td><code>단항 &gt; 산술(* / % &gt; + -) &gt; 쉬프트 &gt; 비교 &gt; 논리(&amp; ^ | &amp;&amp; ||) &gt; 삼항 &gt; 대입</code></td><td>대입은 맨 마지막. 헷갈리면 괄호</td></tr>
<tr><td>정수 나눗셈 주의</td><td><code>10 / 4 → 2   10 / 4.0 → 2.5</code></td><td>int끼리면 소수점 버림</td></tr>
<tr><td>나머지 부호</td><td><code>-10 % 8 → -2   10 % -8 → 2</code></td><td>왼쪽 피연산자의 부호</td></tr>
<tr><td>작은 타입 연산 결과</td><td><code>byte + byte → int</code></td><td>int보다 작은 타입은 int로 바뀜</td></tr>
<tr><td>전위·후위 증감</td><td><code>j = ++i;  j = i++;</code></td><td>증가 후 사용 / 사용 후 증가</td></tr>
<tr><td>단락 평가</td><td><code>a != 0 || ++b != 0</code></td><td>왼쪽으로 결과가 정해지면 오른쪽은 실행 안 함</td></tr>
<tr><td>범위 조건</td><td><code>10 &lt; x &amp;&amp; x &lt; 20</code></td><td>10 &lt; x &lt; 20 은 에러</td></tr>
<tr><td>문자열 내용 비교</td><td><code>s1.equals(s2)  s1.equalsIgnoreCase(s2)</code></td><td>== 는 주소 비교</td></tr>
<tr><td>조건 연산자</td><td><code>int abs = x &gt;= 0 ? x : -x;</code></td><td></td></tr>
<tr><td>비트 추출</td><td><code>(hex &gt;&gt; 4) &amp; 0xF</code></td><td>쉬프트 후 마스킹</td></tr>
</tbody>
</table>
</div>
<h1 id="jc-ch-2">제어문과 배열 (4~5장)</h1>
<h2 id="jc-5">조건문</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>여러 범위 나누기</td><td><code>if (s &gt;= 90) ... else if (s &gt;= 80) ... else ...</code></td><td>처음 참인 블럭 하나만 실행</td></tr>
<tr><td>switch문</td><td><code>switch (n) { case 1: ...; break; default: ... }</code></td><td>break 없으면 아래 case도 실행(fall-through)</td></tr>
<tr><td>switch식</td><td><code>char g = switch (s / 10) { case 10, 9 -&gt; 'A'; default -&gt; 'F'; };</code></td><td>-&gt; 는 break 불필요, 끝에 ; (JDK 14+)</td></tr>
<tr><td>switch식 여러 문장</td><td><code>case 7 -&gt; { ...; yield 'C'; }</code></td><td>yield로 값 반환</td></tr>
<tr><td>난수 1~n</td><td><code>(int)(Math.random() * n) + 1</code></td><td>Math.random()은 0.0 이상 1.0 미만</td></tr>
</tbody>
</table>
</div>
<h2 id="jc-6">반복문</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>횟수가 정해진 반복</td><td><code>for (int i = 0; i &lt; n; i++) { }</code></td><td>초기화 → 조건 → 수행 → 증감</td></tr>
<tr><td>배열·컬렉션 전체 읽기</td><td><code>for (int v : arr) { }</code></td><td>향상된 for. 요소 값 변경은 안 됨</td></tr>
<tr><td>조건이 참인 동안</td><td><code>while (조건) { }</code></td><td>처음부터 거짓이면 0번</td></tr>
<tr><td>최소 한 번 실행</td><td><code>do { } while (조건);</code></td><td>끝에 세미콜론</td></tr>
<tr><td>무한 반복</td><td><code>while (true) { if (...) break; }</code></td><td>for(;;)도 같음</td></tr>
<tr><td>반복 빠져나가기 / 건너뛰기</td><td><code>break;   continue;</code></td><td>가장 가까운 반복문 기준</td></tr>
<tr><td>중첩 반복문 한 번에 탈출</td><td><code>Outer: for (...) { for (...) { break Outer; } }</code></td><td>이름 붙은 반복문</td></tr>
</tbody>
</table>
</div>
<h2 id="jc-7">배열</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>선언과 생성</td><td><code>int[] a = new int[5];</code></td><td>기본값 0, false, null로 초기화</td></tr>
<tr><td>선언과 동시에 초기화</td><td><code>int[] a = {1, 2, 3};</code></td><td>따로 할 땐 a = new int[]{1, 2, 3};</td></tr>
<tr><td>길이</td><td><code>a.length</code></td><td>메서드가 아니라 괄호 없음. String은 length()</td></tr>
<tr><td>배열 출력</td><td><code>Arrays.toString(a)   Arrays.deepToString(m)</code></td><td>[1, 2, 3]</td></tr>
<tr><td>배열 복사</td><td><code>System.arraycopy(src, 0, dst, 0, n);<br>int[] b = Arrays.copyOf(a, 10);</code></td><td>b = a 는 주소만 복사</td></tr>
<tr><td>정렬</td><td><code>Arrays.sort(a);</code></td><td>오름차순</td></tr>
<tr><td>2차원 배열</td><td><code>int[][] m = new int[3][4];</code></td><td>m.length 행 수, m[0].length 열 수</td></tr>
<tr><td>가변 배열</td><td><code>int[][] m = new int[3][]; m[0] = new int[2];</code></td><td>행마다 길이가 다름</td></tr>
<tr><td>범위 벗어남</td><td><code>a[a.length]</code></td><td>ArrayIndexOutOfBoundsException</td></tr>
</tbody>
</table>
</div>
<h1 id="jc-ch-3">객체지향 (6~7장)</h1>
<h2 id="jc-8">클래스와 메서드</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>클래스 정의</td><td><code>class Tv { int channel; void up() { channel++; } }</code></td><td>멤버변수 + 메서드</td></tr>
<tr><td>인스턴스 생성·사용</td><td><code>Tv t = new Tv(); t.channel = 7; t.up();</code></td><td>참조변수로만 사용</td></tr>
<tr><td>반환값 없는 메서드</td><td><code>void print() { }</code></td><td>return; 생략 가능</td></tr>
<tr><td>가변인자</td><td><code>int sum(int... nums) { }</code></td><td>맨 마지막 매개변수만. 내부는 배열</td></tr>
<tr><td>오버로딩</td><td><code>add(int, int)  add(long, long)</code></td><td>이름 같고 매개변수 개수·타입 다름. 반환타입만 다르면 안 됨</td></tr>
<tr><td>재귀 호출</td><td><code>int f(int n) { if (n == 1) return 1; return n * f(n - 1); }</code></td><td>종료 조건 필수</td></tr>
</tbody>
</table>
</div>
<h2 id="jc-9">변수의 종류와 static</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>인스턴스 변수</td><td><code>int number;</code></td><td>인스턴스마다 따로, 힙에 생성</td></tr>
<tr><td>클래스 변수</td><td><code>static int width = 100;</code></td><td>모든 인스턴스가 공유. Card.width</td></tr>
<tr><td>지역 변수</td><td><code>메서드 안의 int i = 0;</code></td><td>사용 전 초기화 필수</td></tr>
<tr><td>static 메서드</td><td><code>static int add(int a, int b) { }</code></td><td>인스턴스 변수 사용 불가, this 불가</td></tr>
<tr><td>JVM 메모리</td><td><code>Method Area / Heap / Call Stack</code></td><td>클래스 정보·cv / 인스턴스·iv / 메서드 작업공간·lv</td></tr>
<tr><td>매개변수 전달</td><td><code>기본형: 값 복사   참조형: 주소 복사</code></td><td>참조형은 원본 객체 변경 가능</td></tr>
</tbody>
</table>
</div>
<h2 id="jc-10">생성자와 초기화</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>생성자</td><td><code>Car(String color) { this.color = color; }</code></td><td>이름 = 클래스, 반환타입 없음</td></tr>
<tr><td>기본 생성자</td><td><code>Car() { }</code></td><td>생성자가 하나도 없을 때만 자동 추가</td></tr>
<tr><td>다른 생성자 호출</td><td><code>Car() { this("white", "auto", 4); }</code></td><td>첫 줄에서만</td></tr>
<tr><td>iv와 매개변수 구별</td><td><code>this.color = color;</code></td><td>this = 인스턴스 자신, static에선 불가</td></tr>
<tr><td>복사 생성자</td><td><code>Car(Car c) { this(c.color, c.gearType, c.door); }</code></td><td></td></tr>
<tr><td>초기화 블럭</td><td><code>static { }   { }</code></td><td>클래스 로딩 시 1번 / 생성자보다 먼저 매번</td></tr>
<tr><td>초기화 순서</td><td><code>cv: 기본값 → 명시적 → static 블럭<br>iv: 기본값 → 명시적 → { } 블럭 → 생성자</code></td><td>cv가 항상 iv보다 먼저</td></tr>
</tbody>
</table>
</div>
<h2 id="jc-11">상속과 다형성</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>상속</td><td><code>class Child extends Parent { }</code></td><td>단일 상속. 생성자·초기화 블럭은 상속 안 됨</td></tr>
<tr><td>오버라이딩</td><td><code>@Override String toString() { }</code></td><td>선언부 같게, 접근 제어자 좁히기 불가</td></tr>
<tr><td>조상 멤버·생성자</td><td><code>super.method();   super(x, y);</code></td><td>생성자 첫 줄에 없으면 super(); 자동</td></tr>
<tr><td>조상 타입으로 자손 참조</td><td><code>Parent p = new Child();</code></td><td>사용 가능한 멤버는 Parent 기준</td></tr>
<tr><td>같은 이름 멤버</td><td><code>메서드 → 실제 인스턴스   변수 → 참조변수 타입</code></td><td></td></tr>
<tr><td>다운캐스팅 전 확인</td><td><code>if (p instanceof Child c) c.childMethod();</code></td><td>패턴 매칭 (JDK 16+)</td></tr>
<tr><td>매개변수 다형성</td><td><code>void buy(Product p) { }</code></td><td>Product의 모든 자손을 받음</td></tr>
</tbody>
</table>
</div>
<h2 id="jc-12">제어자</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>접근 범위</td><td><code>public &gt; protected &gt; (default) &gt; private</code></td><td>전체 / 패키지+자손 / 패키지 / 클래스</td></tr>
<tr><td>final</td><td><code>final class / final void m() / final int X</code></td><td>상속 불가 / 오버라이딩 불가 / 상수</td></tr>
<tr><td>abstract</td><td><code>abstract class A { abstract void m(); }</code></td><td>인스턴스 생성 불가</td></tr>
<tr><td>캡슐화</td><td><code>private int hour; public void setHour(int h) { if (...) hour = h; }</code></td><td>getter/setter로 검증</td></tr>
<tr><td>같이 못 쓰는 조합</td><td><code>static + abstract,  abstract + final,  abstract + private</code></td><td></td></tr>
</tbody>
</table>
</div>
<h2 id="jc-13">인터페이스와 내부 클래스</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>인터페이스 정의</td><td><code>interface Fightable { void fight(); }</code></td><td>메서드는 자동 public abstract, 변수는 public static final</td></tr>
<tr><td>구현</td><td><code>class Fighter extends Unit implements Fightable, Movable { }</code></td><td>여러 개 구현 가능, 구현 메서드는 public</td></tr>
<tr><td>디폴트·static·private 메서드</td><td><code>default void m() { }</code></td><td>JDK 8 / 8 / 9부터</td></tr>
<tr><td>인터페이스 타입 참조</td><td><code>Fightable f = new Fighter();</code></td><td>결합도 낮춤</td></tr>
<tr><td>익명 클래스</td><td><code>Animal a = new Animal() { String sound() { return "멍"; } };</code></td><td>선언과 생성을 한 번에</td></tr>
<tr><td>내부 클래스 종류</td><td><code>인스턴스 / static / 지역 / 익명</code></td><td></td></tr>
</tbody>
</table>
</div>
<h1 id="jc-ch-4">예외 처리 (8장)</h1>
<h2 id="jc-14">예외 다루기</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>직접 처리</td><td><code>try { ... } catch (IOException e) { ... }</code></td><td>발생한 문장 이후 try 코드는 건너뜀</td></tr>
<tr><td>여러 예외</td><td><code>catch (A | B e)</code></td><td>멀티 catch. 조상-자손 관계면 에러</td></tr>
<tr><td>catch 순서</td><td><code>자손 예외 먼저 → 조상 예외 나중</code></td><td>Exception을 먼저 쓰면 컴파일 에러</td></tr>
<tr><td>항상 실행</td><td><code>finally { ... }</code></td><td>return을 만나도 실행</td></tr>
<tr><td>자원 자동 닫기</td><td><code>try (FileInputStream f = new FileInputStream("a")) { }</code></td><td>AutoCloseable 구현 필요, 연 반대 순서로 닫음</td></tr>
<tr><td>예외 발생시키기</td><td><code>throw new Exception("메시지");</code></td><td></td></tr>
<tr><td>호출한 쪽에 떠넘기기</td><td><code>void m() throws IOException { }</code></td><td>보고. 결국 어딘가에서 처리</td></tr>
<tr><td>예외 정보</td><td><code>e.getMessage()   e.printStackTrace()</code></td><td></td></tr>
<tr><td>되던지기</td><td><code>catch (Exception e) { ...; throw e; }</code></td><td>양쪽에서 나눠 처리</td></tr>
<tr><td>원인 예외 연결</td><td><code>ie.initCause(e);   e.getCause()</code></td><td>checked → unchecked 감싸기에도 사용</td></tr>
<tr><td>사용자정의 예외</td><td><code>class MyEx extends RuntimeException { MyEx(String m) { super(m); } }</code></td><td>요즘은 unchecked로 많이 만듦</td></tr>
</tbody>
</table>
</div>
<h2 id="jc-15">예외의 종류</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>checked (처리 필수)</td><td><code>Exception과 자손 (RuntimeException 제외)</code></td><td>IOException, ClassNotFoundException</td></tr>
<tr><td>unchecked (처리 선택)</td><td><code>RuntimeException과 자손</code></td><td>코드로 예방이 우선</td></tr>
<tr><td>0으로 나눔</td><td><code>ArithmeticException</code></td><td>나누기 전 0 검사</td></tr>
<tr><td>null 참조</td><td><code>NullPointerException</code></td><td>사용 전 null 검사</td></tr>
<tr><td>잘못된 형변환</td><td><code>ClassCastException</code></td><td>instanceof 확인, 지네릭스</td></tr>
<tr><td>배열 범위 초과</td><td><code>ArrayIndexOutOfBoundsException</code></td><td>length 확인, List 사용</td></tr>
<tr><td>숫자 변환 실패</td><td><code>NumberFormatException</code></td><td>parseInt 감싸서 자주 catch</td></tr>
</tbody>
</table>
</div>
<h1 id="jc-ch-5">java.lang과 날짜 (9~10장)</h1>
<h2 id="jc-16">Object와 String</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>내용으로 같은지 비교</td><td><code>@Override public boolean equals(Object o)</code></td><td>hashCode도 함께 오버라이딩</td></tr>
<tr><td>객체를 문자열로</td><td><code>@Override public String toString()</code></td><td>println(obj)에 사용됨</td></tr>
<tr><td>문자 하나 / 길이</td><td><code>s.charAt(0)   s.length()</code></td><td></td></tr>
<tr><td>일부 자르기</td><td><code>s.substring(1, 3)</code></td><td>끝 인덱스는 포함 안 함</td></tr>
<tr><td>찾기</td><td><code>s.indexOf("a")   s.contains("ab")</code></td><td>없으면 -1</td></tr>
<tr><td>나누기 / 합치기</td><td><code>s.split(",")   String.join("-", arr)</code></td><td></td></tr>
<tr><td>바꾸기 / 공백 제거</td><td><code>s.replace("a", "b")   s.strip()</code></td><td>원본은 그대로 (immutable)</td></tr>
<tr><td>대소문자</td><td><code>s.toUpperCase()   s.toLowerCase()</code></td><td></td></tr>
<tr><td>반복 / 빈칸 검사</td><td><code>s.repeat(3)   s.isBlank()</code></td><td>JDK 11+</td></tr>
<tr><td>문자열 자주 이어 붙이기</td><td><code>StringBuilder sb = new StringBuilder();<br>sb.append("a").append(1);</code></td><td>reverse(), insert(), toString()</td></tr>
</tbody>
</table>
</div>
<h2 id="jc-17">Math·래퍼·유용한 클래스</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>반올림 / 올림 / 버림</td><td><code>Math.round(1.5)   Math.ceil(1.1)   Math.floor(1.9)</code></td><td>2, 2.0, 1.0</td></tr>
<tr><td>소수점 n자리 반올림</td><td><code>Math.round(x * 100) / 100.0</code></td><td>100.0으로 나눠야 실수</td></tr>
<tr><td>최대·최소·절대값·거듭제곱</td><td><code>Math.max(a,b)  Math.min(a,b)  Math.abs(x)  Math.pow(2,3)</code></td><td></td></tr>
<tr><td>기본형 ↔ 래퍼</td><td><code>Integer i = 10;   int n = i;</code></td><td>오토박싱/언박싱</td></tr>
<tr><td>래퍼 비교</td><td><code>a.equals(b)</code></td><td>== 는 -128~127만 우연히 true</td></tr>
<tr><td>null에 안전한 비교</td><td><code>Objects.equals(a, b)   Objects.hash(a, b)</code></td><td></td></tr>
<tr><td>난수 객체</td><td><code>new Random().nextInt(10)</code></td><td>0~9</td></tr>
<tr><td>정규식</td><td><code>Pattern.compile("0\\d{1,2}").matcher(s).matches()</code></td><td></td></tr>
<tr><td>아주 큰 정수</td><td><code>new BigInteger("123...").add(...)</code></td><td>연산자 대신 메서드</td></tr>
<tr><td>오차 없는 실수</td><td><code>new BigDecimal("0.1").add(new BigDecimal("0.2"))</code></td><td>문자열로 생성 → 0.3</td></tr>
</tbody>
</table>
</div>
<h2 id="jc-18">날짜와 시간</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>오늘 / 특정 날짜</td><td><code>LocalDate.now()   LocalDate.of(2026, 11, 5)</code></td><td>월은 1부터</td></tr>
<tr><td>날짜 + 시간 / 시간대</td><td><code>LocalDateTime.now()   ZonedDateTime.now(ZoneId.of("Asia/Seoul"))</code></td><td></td></tr>
<tr><td>더하기·빼기</td><td><code>d = d.plusDays(1);   d.minusMonths(1)</code></td><td>새 객체 반환 → 대입 필수</td></tr>
<tr><td>필드 읽기</td><td><code>d.getYear()  d.getMonthValue()  d.getDayOfWeek()</code></td><td></td></tr>
<tr><td>비교</td><td><code>a.isBefore(b)   a.isAfter(b)</code></td><td></td></tr>
<tr><td>기간</td><td><code>Period.between(a, b)   Duration.between(t1, t2)</code></td><td>날짜 간격 / 시간 간격</td></tr>
<tr><td>전체 일수</td><td><code>ChronoUnit.DAYS.between(a, b)</code></td><td></td></tr>
<tr><td>월말·다음 월요일</td><td><code>d.with(TemporalAdjusters.lastDayOfMonth())</code></td><td>next(DayOfWeek.MONDAY)</td></tr>
<tr><td>문자열로 형식화</td><td><code>d.format(DateTimeFormatter.ofPattern("yyyy/MM/dd"))</code></td><td>MM 월, mm 분</td></tr>
<tr><td>문자열 → 날짜</td><td><code>LocalDate.parse("2026-11-05")</code></td><td>다른 형식은 formatter 함께</td></tr>
<tr><td>숫자 형식화</td><td><code>new DecimalFormat("#,###.##").format(1234.5)</code></td><td># 비움, 0 채움</td></tr>
<tr><td>예전 API 주의</td><td><code>Calendar.MONTH</code></td><td>0부터 시작 (0 = 1월)</td></tr>
</tbody>
</table>
</div>
<h1 id="jc-ch-6">컬렉션과 모던 자바 (11~12장)</h1>
<h2 id="jc-19">컬렉션 고르기</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>순서 O, 중복 O</td><td><code>List&lt;String&gt; list = new ArrayList&lt;&gt;();</code></td><td>가장 많이 씀</td></tr>
<tr><td>중간 추가·삭제가 많음</td><td><code>new LinkedList&lt;&gt;()</code></td><td>읽기는 느림</td></tr>
<tr><td>중복 제거</td><td><code>Set&lt;String&gt; set = new HashSet&lt;&gt;();</code></td><td>직접 만든 클래스는 equals·hashCode</td></tr>
<tr><td>중복 제거 + 정렬</td><td><code>new TreeSet&lt;&gt;()</code></td><td>first(), headSet(), subSet()</td></tr>
<tr><td>키-값 저장</td><td><code>Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();</code></td><td>키 중복 불가</td></tr>
<tr><td>키 정렬된 Map</td><td><code>new TreeMap&lt;&gt;()</code></td><td></td></tr>
<tr><td>저장 순서 유지</td><td><code>LinkedHashSet   LinkedHashMap</code></td><td></td></tr>
<tr><td>LIFO / FIFO</td><td><code>Stack: push pop peek   Queue: offer poll peek</code></td><td>Queue는 new LinkedList&lt;&gt;() 또는 ArrayDeque</td></tr>
<tr><td>변경 불가 컬렉션</td><td><code>List.of(1, 2)   Map.of("a", 1)</code></td><td>JDK 9+</td></tr>
</tbody>
</table>
</div>
<h2 id="jc-20">컬렉션 메서드</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>추가 / 끼워 넣기</td><td><code>list.add(x)   list.add(1, x)</code></td><td></td></tr>
<tr><td>읽기 / 바꾸기 / 삭제</td><td><code>list.get(i)   list.set(i, x)   list.remove(i)</code></td><td></td></tr>
<tr><td>포함 여부 / 위치</td><td><code>list.contains(x)   list.indexOf(x)</code></td><td></td></tr>
<tr><td>Map 넣기·읽기</td><td><code>map.put(k, v)   map.get(k)   map.getOrDefault(k, 0)</code></td><td></td></tr>
<tr><td>Map 반복</td><td><code>for (Map.Entry&lt;K, V&gt; e : map.entrySet())</code></td><td>keySet(), values()</td></tr>
<tr><td>반복 중 삭제</td><td><code>Iterator&lt;E&gt; it = list.iterator(); it.remove();</code></td><td>list.remove 대신</td></tr>
<tr><td>정렬</td><td><code>Collections.sort(list)   list.sort(Comparator.reverseOrder())</code></td><td></td></tr>
<tr><td>정렬 기준 만들기</td><td><code>Comparator.comparing(Student::getScore).reversed()</code></td><td>Comparable: compareTo, Comparator: compare</td></tr>
<tr><td>기타 유틸</td><td><code>Collections.shuffle / max / min / frequency / unmodifiableList</code></td><td></td></tr>
<tr><td>배열 ↔ List</td><td><code>Arrays.asList(arr)   new ArrayList&lt;&gt;(Arrays.asList(arr))</code></td><td>asList는 크기 변경 불가</td></tr>
</tbody>
</table>
</div>
<h2 id="jc-21">지네릭스·열거형·애너테이션·레코드·실드·모듈</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>지네릭 클래스</td><td><code>class Box&lt;T&gt; { T item; }   Box&lt;String&gt; b = new Box&lt;&gt;();</code></td><td>컴파일 시 타입 체크, 형변환 생략</td></tr>
<tr><td>타입 제한</td><td><code>class FruitBox&lt;T extends Fruit&gt;</code></td><td>여러 개는 &amp; 로</td></tr>
<tr><td>와일드카드</td><td><code>&lt;? extends T&gt;   &lt;? super T&gt;   &lt;?&gt;</code></td><td>상한 / 하한 / 모두</td></tr>
<tr><td>지네릭 메서드</td><td><code>static &lt;T&gt; void print(List&lt;T&gt; list)</code></td><td>반환타입 앞에 &lt;T&gt;</td></tr>
<tr><td>열거형</td><td><code>enum Dir { EAST, WEST }</code></td><td>values(), valueOf(), ordinal(), == 비교</td></tr>
<tr><td>값을 가진 열거형</td><td><code>enum G { A(90); final int min; G(int m) { min = m; } }</code></td><td>생성자는 private</td></tr>
<tr><td>자주 쓰는 애너테이션</td><td><code>@Override  @Deprecated  @FunctionalInterface  @SuppressWarnings("unchecked")</code></td><td></td></tr>
<tr><td>애너테이션 정의</td><td><code>@Retention(RUNTIME) @Target(METHOD) @interface Test { String value() default ""; }</code></td><td></td></tr>
<tr><td>데이터 클래스 한 줄로</td><td><code>record Point(int x, int y) { }</code></td><td>p.x(), toString, equals 자동 (JDK 16+)</td></tr>
<tr><td>레코드 검증</td><td><code>record Point(int x, int y) { Point { if (x &lt; 0) throw ...; } }</code></td><td>압축 생성자</td></tr>
<tr><td>상속 제한</td><td><code>sealed interface Shape permits Circle, Square { }</code></td><td>자손은 final / sealed / non-sealed (JDK 17+)</td></tr>
<tr><td>타입별 분기</td><td><code>switch (s) { case Circle c -&gt; ...; case Square q -&gt; ...; }</code></td><td>실드면 default 생략 가능 (JDK 21)</td></tr>
<tr><td>모듈 선언</td><td><code>module app { requires java.sql; exports com.app.api; }</code></td><td>module-info.java</td></tr>
</tbody>
</table>
</div>
<h1 id="jc-ch-7">쓰레드 (13장)</h1>
<h2 id="jc-22">쓰레드 만들고 실행하기</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>쓰레드 만들기</td><td><code>new Thread(() -&gt; { ... }).start();</code></td><td>Runnable 구현이나 Thread 상속도 가능</td></tr>
<tr><td>새 쓰레드에서 실행</td><td><code>t.start();</code></td><td>run()을 직접 부르면 현재 쓰레드에서 실행될 뿐</td></tr>
<tr><td>현재 쓰레드</td><td><code>Thread.currentThread().getName()</code></td><td></td></tr>
<tr><td>끝날 때까지 기다리기</td><td><code>t.join();</code></td><td>InterruptedException 처리 필요</td></tr>
<tr><td>잠깐 멈추기</td><td><code>Thread.sleep(1000);</code></td><td>ms 단위, 현재 쓰레드</td></tr>
<tr><td>작업 취소 요청</td><td><code>t.interrupt();   Thread.interrupted()</code></td><td>sleep·join 중이면 InterruptedException</td></tr>
<tr><td>상태 확인</td><td><code>t.getState()</code></td><td>NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED</td></tr>
<tr><td>우선순위</td><td><code>t.setPriority(Thread.MAX_PRIORITY);</code></td><td>1~10, 기본 5. 보장되지 않음</td></tr>
<tr><td>데몬 쓰레드</td><td><code>t.setDaemon(true);</code></td><td>start() 전에. 일반 쓰레드가 끝나면 함께 종료</td></tr>
</tbody>
</table>
</div>
<h2 id="jc-23">동기화</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>메서드 전체 잠그기</td><td><code>public synchronized void withdraw(int m) { }</code></td><td>한 번에 한 쓰레드만</td></tr>
<tr><td>일부만 잠그기</td><td><code>synchronized (this) { ... }</code></td><td>임계 영역은 최소한으로</td></tr>
<tr><td>기다리기 / 깨우기</td><td><code>wait();   notify();   notifyAll();</code></td><td>synchronized 안에서만, wait은 락을 내려놓음</td></tr>
<tr><td>직접 락 걸기</td><td><code>lock.lock(); try { ... } finally { lock.unlock(); }</code></td><td>ReentrantLock, unlock은 finally에</td></tr>
<tr><td>대기실 나누기</td><td><code>Condition c = lock.newCondition(); c.await(); c.signal();</code></td><td>원하는 쓰레드만 깨움</td></tr>
<tr><td>변수 값 바로 보이게</td><td><code>volatile boolean stopped;</code></td><td>캐시가 아닌 메모리에서 읽기. count++는 동기화 안 됨</td></tr>
<tr><td>나눠서 처리 후 합치기</td><td><code>class SumTask extends RecursiveTask&lt;Long&gt; { compute() { ... fork(); join(); } }</code></td><td>fork &amp; join 프레임웍</td></tr>
</tbody>
</table>
</div>
<h2 id="jc-24">가상 쓰레드와 Executor</h2>
<div class="tw"><table><thead><tr><th>하고 싶은 것</th><th>코드</th><th>메모</th></tr>
</thead>
<tbody>
<tr><td>가상 쓰레드 만들기</td><td><code>Thread.ofVirtual().start(r);   Thread.startVirtualThread(r);</code></td><td>JDK 21, 항상 데몬</td></tr>
<tr><td>작업마다 가상 쓰레드</td><td><code>Executors.newVirtualThreadPerTaskExecutor()</code></td><td>풀링하지 않음</td></tr>
<tr><td>가상 쓰레드인지 확인</td><td><code>Thread.currentThread().isVirtual()</code></td><td></td></tr>
<tr><td>쓰레드 풀</td><td><code>ExecutorService es = Executors.newFixedThreadPool(4);</code></td><td>newCachedThreadPool, newSingleThreadExecutor</td></tr>
<tr><td>작업 맡기고 결과 받기</td><td><code>Future&lt;Integer&gt; f = es.submit(() -&gt; 1 + 2);  f.get();</code></td><td>get()은 끝날 때까지 기다림</td></tr>
<tr><td>다 쓴 풀 닫기</td><td><code>es.shutdown();   try (ExecutorService es = ...) { }</code></td><td>try-with-resources는 JDK 19+</td></tr>
<tr><td>작업 이어 붙이기</td><td><code>CompletableFuture.supplyAsync(() -&gt; 10).thenApply(x -&gt; x * 2).join()</code></td><td>thenAccept, thenCombine, exceptionally</td></tr>
</tbody>
</table>
</div>
`;
