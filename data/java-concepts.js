// JAVA 개념 정리 탭 (HTML)
var WJ = String.raw`
<h1 id="j-0">Java 개념 정리: 자바의 정석 4판 1~13장</h1>
<p>「자바의 정석 4판」(Java 21) 1장부터 13장까지를 장별로 정리한 문서예요. 1~6장은 샘플 PDF 본문을 따랐고, 7~13장은 샘플에 본문이 없어서 목차 순서대로 표준 자바 개념으로 채웠어요. 그래서 책의 설명·예제와 다를 수 있어요.</p>
<div class="tw"><table><thead><tr><th>장</th></tr>
</thead>
<tbody><tr><td>1장. 자바를 시작하기 전에</td></tr>
<tr><td>2장. 변수</td></tr>
<tr><td>3장. 연산자</td></tr>
<tr><td>4장. 조건문과 반복문</td></tr>
<tr><td>5장. 배열</td></tr>
<tr><td>6장. 객체지향 프로그래밍 I</td></tr>
<tr><td>7장. 객체지향 프로그래밍 II (목차 기반)</td></tr>
<tr><td>8장. 예외 처리 (목차 기반)</td></tr>
<tr><td>9장. java.lang패키지와 유용한 클래스 (목차 기반)</td></tr>
<tr><td>10장. 날짜와 시간 &amp; 형식화 (목차 기반)</td></tr>
<tr><td>11장. 컬렉션 프레임웍 (목차 기반)</td></tr>
<tr><td>12장. 모던 자바 기능 (목차 기반)</td></tr>
<tr><td>13장. 쓰레드 (목차 기반)</td></tr>
</tbody>
</table>
</div>
<h1 id="j-ch-1">1장. 자바를 시작하기 전에</h1>
<p>자바 프로그램은 OS가 아닌 JVM 위에서 실행되므로, 한 번 작성한 코드가 어느 운영체제에서나 그대로 동작합니다.</p>
<h2 id="j-1">1.1~1.2 자바란? 자바의 역사</h2>
<ul><li><p>1991년 썬(Sun)의 오크(Oak) 언어에서 출발. 원래 목표는 가전제품용 소프트웨어였고, C++의 단점을 보완해 설계됨</p>
</li>
<li><p>인터넷 등장 후 OS 독립성이 주목받아 이름을 Java로 바꾸고 1996년 1월 정식 발표. 이후 서버 애플리케이션, 2008년 안드로이드로 활용 분야 확대</p>
</li>
<li><p>2010년 오라클이 썬을 인수. Java EE는 2017년 Eclipse 재단으로 이전되며 Jakarta EE로 이름 변경</p>
</li>
<li><p><strong>Oracle JDK vs OpenJDK</strong>: Oracle JDK는 개인·비상업 용도만 무료. OpenJDK는 소스가 공개된 무료 배포판이며 Eclipse Temurin, Amazon Corretto, Azul Zulu 등이 LTS를 무료 장기 지원</p>
</li>
<li><p><strong>LTS(Long Term Support)</strong>:  장기 지원 버전. 현재 최신 LTS는 JDK 21</p>
</li>
<li><p><strong>JEP(Java Enhancement Proposal)</strong>: JDK 8부터 도입된 자바 개선 제안 제도. 새 기능은 JEP 번호로 논의·승인됨. 상위 개념으로 표준 제안인 JSR이 있음</p>
</li>
</ul>
<div class="tw"><table><thead><tr><th>버전</th><th>주요 기능</th></tr>
</thead>
<tbody><tr><td>JDK 8 (2014, LTS)</td><td>람다식·스트림 API, java.time 날짜/시간 API, Optional</td></tr>
<tr><td>JDK 9 (2017)</td><td>모듈 시스템, 인터페이스 private 메서드, G1 기본 GC, jshell</td></tr>
<tr><td>JDK 10 (2018)</td><td>지역 변수 타입 추론 <code>var</code></td></tr>
<tr><td>JDK 11 (2018, LTS)</td><td>HTTP Client API, String 메서드(isBlank, lines, repeat), 람다에 var</td></tr>
<tr><td>JDK 14 (2020)</td><td>switch식</td></tr>
<tr><td>JDK 15 (2020)</td><td>텍스트 블럭</td></tr>
<tr><td>JDK 16 (2021)</td><td>레코드, instanceof 패턴 매칭</td></tr>
<tr><td>JDK 17 (2021, LTS)</td><td>실드 클래스</td></tr>
<tr><td>JDK 18 (2022)</td><td>간단한 웹서버(jwebserver), 기본 인코딩 UTF-8</td></tr>
<tr><td>JDK 21 (2023, LTS)</td><td>가상 쓰레드, switch 패턴 매칭, 레코드 패턴, Sequenced Collections</td></tr>
</tbody>
</table>
</div>
<p>프리뷰 기능은 정식 기능이 아니라서 <code>javac --enable-preview --release 21</code>, <code>java --enable-preview</code> 옵션을 줘야 사용할 수 있습니다.</p>
<h2 id="j-2">1.3 자바 언어의 특징</h2>
<ol><li><p><strong>운영체제에 독립적</strong>: JVM이 OS와 프로그램 사이에서 변환해 줌</p>
</li>
<li><p><strong>객체지향 언어이자 함수형 언어</strong>: 상속·캡슐화·다형성 + JDK 8부터 람다·스트림</p>
</li>
<li><p><strong>비교적 배우기 쉬움</strong>: C++의 복잡한 기능(포인터, 다중 상속 등)을 제거해 단순화</p>
</li>
<li><p><strong>자동 메모리 관리</strong>: 가비지 컬렉터(GC)가 사용하지 않는 메모리를 정리. JDK 9부터 G1이 기본</p>
</li>
<li><p><strong>네트워크와 분산처리 지원</strong></p>
</li>
<li><p><strong>멀티쓰레드 지원</strong>: JDK 21부터 가상 쓰레드로 고성능·고처리량 서버 구현 가능</p>
</li>
<li><p><strong>동적 로딩</strong>: 실행 시 모든 클래스를 로딩하지 않고 필요한 시점에 로딩</p>
</li>
</ol>
<h2 id="j-3">1.4 JVM(Java Virtual Machine)</h2>
<ul><li><p>일반 애플리케이션은 OS 위에서 바로 실행되지만, 자바 애플리케이션은 JVM을 한 번 더 거침</p>
</li>
<li><p>덕분에 “한 번 작성하면 어디서나 실행(Write once, run anywhere)”. 대신 OS별로 그에 맞는 JVM이 필요</p>
</li>
<li><p>예전에는 느리다는 단점이 있었으나 JIT 컴파일러 등으로 성능이 크게 개선됨. 더 빠른 실행을 원하면 GraalVM도 선택 가능</p>
</li>
</ul>
<h2 id="j-4">2. 개발 환경 구축</h2>
<ul><li><p>JDK(Java Development Kit) 21을 설치하고 <code>JAVA_HOME</code>, <code>Path</code> 환경 변수를 설정. 명령 프롬프트에서 <code>jshell</code>이 실행되면 설정 완료</p>
</li>
<li><p>IDE로는 인텔리제이(IntelliJ IDEA)를 사용. 새 프로젝트를 만들면 Main.java가 자동 생성됨</p>
</li>
</ul>
<h2 id="j-5">3.1 Hello.java와 클래스 작성 규칙</h2>
<pre><code><span class="hl-kw">class</span> Hello {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {  <span class="hl-com">// main 메서드의 선언부</span>
        System.out.println(<span class="hl-str">"Hello, Java."</span>);
    }
}</code></pre>
<ul><li><p>모든 코드는 클래스 블럭 <code>{}</code> 안에 작성. 예외: package문과 import문은 클래스 밖</p>
</li>
<li><p><code>public static void main(String[] args)</code>는 프로그램 시작점으로 항상 똑같이 작성. <code>String[] args</code>와 <code>String args[]</code>는 같은 의미</p>
</li>
<li><p>애플리케이션에는 main 메서드를 가진 클래스가 반드시 하나 있어야 함</p>
</li>
<li><p>소스파일 하나에 여러 클래스를 정의할 수 있지만 <strong>public class는 하나만</strong>, 파일 이름은 <strong>public class 이름과 일치</strong>. public class가 없으면 아무 클래스 이름이나 가능</p>
</li>
</ul>
<h2 id="j-6">3.2 자주 발생하는 에러</h2>
<div class="tw"><table><thead><tr><th>에러 메시지</th><th>원인</th></tr>
</thead>
<tbody><tr><td>cannot find symbol</td><td>변수·메서드 이름 오타, 선언 안 함, 대소문자 틀림</td></tr>
<tr><td>&#39;;&#39; expected</td><td>문장 끝에 세미콜론 누락</td></tr>
<tr><td>NoSuchMethodError: main</td><td>main 메서드가 없거나 선언부 오타</td></tr>
<tr><td>NoClassDefFoundError</td><td>클래스 이름 오타, 클래스 파일이 없거나 경로가 다름</td></tr>
<tr><td>illegal start of expression</td><td>괄호 짝이 안 맞거나 문장 문법 오류</td></tr>
<tr><td>class, interface, or enum expected</td><td>괄호 <code>{}</code> 개수가 맞지 않음</td></tr>
</tbody>
</table>
</div>
<p>에러를 해결할 때는 메시지를 잘 읽고 해당 줄을 살펴보고, 의심 가는 부분을 주석 처리하거나 떼어내서 테스트합니다.</p>
<h2 id="j-7">3.3~3.4 실행 과정과 주석</h2>
<ol><li><p><code>javac Hello.java</code>로 컴파일하면 바이트코드인 <code>Hello.class</code>가 생성됨</p>
</li>
<li><p><code>java Hello</code>로 실행하면 JVM이 클래스를 로드하고, 클래스 파일을 검사(형식, 악성코드)한 뒤 main 메서드를 호출</p>
</li>
<li><p>main의 첫 문장부터 마지막 문장까지 수행하면 종료</p>
</li>
</ol>
<ul><li><p>주석: <code>//</code> 한 줄, <code>/* */</code> 여러 줄. <code>/** */</code>는 javadoc 문서용</p>
</li>
</ul>
<h1 id="j-ch-2">2장. 변수</h1>
<p>변수는 값 하나를 저장하는 메모리 공간이며, 타입은 실제 값을 저장하는 기본형 8개와 객체의 주소를 저장하는 참조형으로 나뉩니다.</p>
<h2 id="j-8">1. 변수의 선언과 초기화</h2>
<ul><li><p>선언: <code>타입 변수이름;</code> (예: <code>int age;</code>). 초기화: 변수에 처음으로 값을 저장 (<code>int age = 25;</code>)</p>
</li>
<li><p><strong>지역변수는 사용 전에 반드시 초기화</strong>해야 하지만, 클래스 변수와 인스턴스 변수는 생략 가능(기본값 자동 저장, 6장)</p>
</li>
<li><p>두 변수의 값 교환에는 임시 변수 tmp가 필요: <code>tmp = x; x = y; y = tmp;</code></p>
</li>
</ul>
<h2 id="j-9">1.3 변수의 명명규칙</h2>
<p>필수 규칙:</p>
<ol><li><p>대소문자가 구분되며 길이 제한이 없음</p>
</li>
<li><p>예약어를 사용할 수 없음 (<code>true</code>, <code>false</code>, <code>null</code>은 리터럴이지만 역시 사용 불가. <code>_</code>도 JDK 9부터 예약어)</p>
</li>
<li><p>숫자로 시작할 수 없음</p>
</li>
<li><p>특수문자는 <code>_</code>와 <code>$</code>만 허용</p>
</li>
</ol>
<p>권장 규칙: 클래스 이름은 대문자로 시작, 여러 단어는 단어 첫 글자를 대문자로(<code>lastIndexOf</code>), 상수는 모두 대문자와 <code>_</code>(<code>MAX_NUMBER</code>). <code>var</code>, <code>yield</code>, <code>record</code>, <code>sealed</code>처럼 특정 문맥에서만 예약어가 되는 <strong>문맥 예약어</strong>도 있습니다.</p>
<h2 id="j-10">2.1 기본형(primitive type)</h2>
<div class="tw"><table><thead><tr><th>타입</th><th>크기</th><th>범위 / 정밀도</th><th>비고</th></tr>
</thead>
<tbody><tr><td>boolean</td><td>1 byte</td><td>true, false</td><td>기본값 false</td></tr>
<tr><td>char</td><td>2 byte</td><td>0 ~ 65,535 (유니코드)</td><td>음수 없음</td></tr>
<tr><td>byte</td><td>1 byte</td><td>-128 ~ 127</td><td>-2⁷ ~ 2⁷-1</td></tr>
<tr><td>short</td><td>2 byte</td><td>-32,768 ~ 32,767</td><td></td></tr>
<tr><td>int</td><td>4 byte</td><td>약 ±20억 (-2³¹ ~ 2³¹-1)</td><td>정수형 기본 타입</td></tr>
<tr><td>long</td><td>8 byte</td><td>-2⁶³ ~ 2⁶³-1</td><td></td></tr>
<tr><td>float</td><td>4 byte</td><td>±1.4×10⁻⁴⁵ ~ 3.4×10³⁸, 7자리</td><td></td></tr>
<tr><td>double</td><td>8 byte</td><td>±4.9×10⁻³²⁴ ~ 1.8×10³⁰⁸, 15자리</td><td>실수형 기본 타입</td></tr>
</tbody>
</table>
</div>
<p>참조형 변수는 null 또는 객체의 메모리 주소를 값으로 갖습니다(32 bit JVM에서 4 byte, 64 bit JVM에서 8 byte).</p>
<h2 id="j-11">2.2 상수와 리터럴</h2>
<ul><li><p><strong>상수</strong>: <code>final int MAX_SPEED = 10;</code> 한 번만 값을 저장할 수 있음. 선언과 동시에 초기화하는 습관을 들일 것</p>
</li>
<li><p><strong>리터럴</strong>: 12, 3.14, &#39;A&#39; 같은 값 그 자체</p>
</li>
<li><p>접미사: long은 <code>L</code>, float은 <code>f</code>(필수), double은 <code>d</code>(생략 가능). <code>float pi = 3.14;</code>는 에러(3.14는 double)</p>
</li>
<li><p>접두사: <code>0x</code>(16진), <code>0</code>(8진, <code>010</code>은 10진수 8), <code>0b</code>(2진, JDK 7+). <code>1_000_000</code>처럼 <code>_</code>로 자릿수 구분</p>
</li>
<li><p>byte·short 리터럴은 따로 없고 int 리터럴을 사용 (범위 안이면 대입 가능)</p>
</li>
<li><p>타입 불일치: 변수 타입보다 리터럴 타입이 작으면 가능(<code>long l = 123;</code>), 크면 에러(<code>int i = 0x123456789;</code>)</p>
</li>
<li><p><strong>var</strong> (JDK 10+): 지역변수 타입을 리터럴로부터 추론. 초기화 필수, null 초기화 불가, <code>var b = 123;</code>은 byte가 아닌 int. 긴 타입 이름을 줄일 때 유용 (<code>var map = new LinkedHashMap();</code>)</p>
</li>
<li><p><strong>문자와 문자열</strong>: <code>&#39;J&#39;</code>는 문자(char), <code>&quot;Java&quot;</code>는 문자열(String). <code>&#39;&#39;</code>(빈 문자)는 불가, <code>&quot;&quot;</code>(빈 문자열)은 가능</p>
</li>
<li><p><strong>문자열 결합</strong>: 피연산자 중 하나라도 문자열이면 다른 쪽도 문자열로 변환 후 결합. 왼쪽부터 계산: <code>7 + 7 + &quot;&quot;</code> → <code>&quot;14&quot;</code>, <code>&quot;&quot; + 7 + 7</code> → <code>&quot;77&quot;</code></p>
</li>
<li><p><strong>텍스트 블럭</strong> (JDK 15+): <code>&quot;&quot;&quot;</code>로 감싼 여러 줄 문자열. <code>\n</code>, <code>\t</code>, <code>\&quot;</code> 같은 이스케이프 없이 보이는 그대로 작성. 여는 <code>&quot;&quot;&quot;</code> 뒤에는 바로 줄바꿈이 와야 함(<code>&quot;&quot;&quot;Hello&quot;&quot;&quot;</code>는 에러)</p>
</li>
</ul>
<h2 id="j-12">2.3~2.4 printf와 Scanner</h2>
<div class="tw"><table><thead><tr><th>지시자</th><th>설명</th></tr>
</thead>
<tbody><tr><td><code>%d</code> / <code>%x</code> / <code>%o</code></td><td>10진 / 16진 / 8진 정수</td></tr>
<tr><td><code>%f</code> / <code>%e</code></td><td>실수(기본 소수점 6자리) / 지수 형식</td></tr>
<tr><td><code>%c</code> / <code>%s</code> / <code>%b</code></td><td>문자 / 문자열 / boolean</td></tr>
<tr><td><code>%n</code></td><td>줄바꿈 (OS마다 다른 줄바꿈 문자를 처리해주므로 <code>\n</code>보다 안전)</td></tr>
</tbody>
</table>
</div>
<ul><li><p>폭과 정밀도: <code>%5d</code>(5칸 오른쪽 정렬), <code>%-5d</code>(왼쪽 정렬), <code>%05d</code>(빈칸을 0으로), <code>%14.10f</code>(전체 14칸, 소수점 10자리), <code>%.8s</code>(문자열 앞 8글자만)</p>
</li>
<li><p><code>%#x</code>는 접두사 0x를 붙여 출력. 2진수 출력은 <code>Integer.toBinaryString()</code></p>
</li>
<li><p><strong>Scanner</strong>: <code>Scanner sc = new Scanner(System.in);</code> → <code>sc.nextLine()</code>으로 한 줄 입력. 숫자로 바꾸려면 <code>Integer.parseInt()</code>, <code>Float.parseFloat()</code> 또는 <code>nextInt()</code></p>
</li>
</ul>
<h2 id="j-13">3. 진법</h2>
<ul><li><p><strong>bit</strong>는 2진수 한 자리, <strong>byte</strong>는 8 bit. n bit로 표현할 수 있는 값은 2ⁿ개이며 부호 없는 정수는 0 ~ 2ⁿ-1</p>
</li>
<li><p>2진수 3자리 = 8진수 1자리, 2진수 4자리(nibble) = 16진수 1자리. 그래서 2진수를 짧게 표현할 때 16진수를 사용</p>
</li>
<li><p>10진수 → n진수: n으로 계속 나누고 나머지를 역순으로. n진수 → 10진수: 각 자리 값 × n의 거듭제곱을 합산</p>
</li>
<li><p>소수점 수 → 2진수: 2를 계속 곱해 정수부를 순서대로 적음(0.625 → 0.101). 무한히 반복될 수 있어 오차가 생김</p>
</li>
<li><p><strong>2의 보수법</strong>: 맨 왼쪽 비트(MSB)가 0이면 양수, 1이면 음수. 어떤 수와 더해 0이 되는 수가 그 수의 음수. 음수의 2진 표현 = 양수의 2진수를 <strong>모두 반전하고 +1</strong> (예: 5 = 0101 → -5 = 1011)</p>
</li>
</ul>
<h2 id="j-14">4. 기본형 상세</h2>
<ul><li><p><strong>boolean</strong>: true/false만. <mark>다른 기본형과 형변환 불가</mark></p>
</li>
<li><p><strong>char</strong>: 실제로는 문자의<mark> <strong>유니코드(정수)</strong></mark>를 저장. <code>char ch = &#39;A&#39;;</code>와 <code>char ch = 65;</code>는 같음. <code>(int)ch</code>로 코드 확인</p>
<ul><li><p>특수 문자: <code>\t</code>(탭), <code>\n</code>(줄바꿈), <code>\\</code>(역슬래시), <code>\&#39;</code>, <code>\&quot;</code>, <code>A</code>(유니코드)</p>
</li>
<li><p>인코딩(문자→코드)과 디코딩(코드→문자)에 다른 코드표를 쓰면 글자가 깨짐. 자바는 유니코드를 사용하며 JDK 18부터 기본 인코딩이 UTF-8</p>
</li>
<li><p>char와 short는 둘 다 2 byte지만 char는 0 ~ 65535, short는 -32768 ~ 32767</p>
</li>
</ul>
</li>
<li><p><strong>정수형</strong>: int를 기본으로 쓰고, 20억을 넘으면 long, 그보다 크면 BigInteger</p>
<ul><li><p><strong>오버플로우</strong>: 표현 범위를 넘으면 에러 없이 반대쪽 끝으로 순환(TV 채널처럼). 최대값 + 1 → 최소값, 최소값 - 1 → 최대값 (<code>short 32767 + 1</code> → -32768)</p>
</li>
</ul>
</li>
<li><p><strong>실수형</strong>: 부호(S, 1 bit) + 지수(E) + 가수(M)로 저장. float는 1+8+23 bit, double은 1+11+52 bit</p>
<ul><li><p>가수의 크기가 정밀도를 결정: float 7자리, double 15자리. <code>float f = 9.12345678901234567890f;</code> → 실제 저장값은 9.123457 근처</p>
</li>
<li><p>0에 가까운 값은 언더플로우(0이 됨), 너무 큰 값은 ±무한대</p>
</li>
<li><p>정밀도가 중요하면 double을 쓰고, 메모리·속도가 중요할 때만 float</p>
</li>
</ul>
</li>
</ul>
<h2 id="j-15">5. 형변환(casting)</h2>
<p>변수나 리터럴의 타입을 <code>(타입)피연산자</code>로 다른 타입으로 바꿉니다. 변수의 값을 읽어 변환할 뿐 원래 변수는 그대로입니다.</p>
<div class="tw"><table><thead><tr><th>변환</th><th>방법과 결과</th></tr>
</thead>
<tbody><tr><td>큰 정수 → 작은 정수</td><td>앞쪽 비트가 잘려 값 손실 가능 (<code>(byte)300</code> → 44)</td></tr>
<tr><td>작은 정수 → 큰 정수</td><td>양수는 빈칸을 0, 음수는 1로 채움 (부호 유지, <code>(int)(byte)-2</code> → -2)</td></tr>
<tr><td>float → double</td><td>가수 뒷자리를 0으로 채움</td></tr>
<tr><td>double → float</td><td>가수 23자리로 잘라 반올림. float 범위를 넘으면 ±무한대, 너무 작으면 0</td></tr>
<tr><td>정수 → 실수</td><td>정밀도 한계로 오차 가능 (<code>(float)91234567</code> → 91234568.0). 오차가 싫으면 double 사용</td></tr>
<tr><td>실수 → 정수</td><td>소수점 이하 <strong>버림</strong> (<code>(int)1.666</code> → 1). 범위를 넘으면 오버플로우</td></tr>
</tbody>
</table>
</div>
<ul><li><p><strong>자동 형변환</strong>: 값 손실이 없는 방향은 컴파일러가 자동으로 변환. <code>byte → short → int → long → float → double</code>, <code>char → int</code></p>
</li>
<li><p>값 손실이 생길 수 있는 방향은 명시적 형변환 필수. char와 short는 범위가 달라 서로 자동 변환 불가</p>
</li>
<li><p>기본형과 참조형은 서로 형변환할 수 없음. boolean은 다른 기본형과 변환 불가</p>
</li>
</ul>
<p>자주 쓰는 변환 요령:</p>
<div class="tw"><table><thead><tr><th>변환</th><th>방법</th><th>예</th></tr>
</thead>
<tbody><tr><td>숫자 → 문자</td><td><code>&#39;0&#39;</code>을 더함</td><td><code>(char)(3 + &#39;0&#39;)</code> → <code>&#39;3&#39;</code></td></tr>
<tr><td>문자 → 숫자</td><td><code>&#39;0&#39;</code>을 빼</td><td><code>&#39;3&#39; - &#39;0&#39;</code> → 3</td></tr>
<tr><td>숫자 → 문자열</td><td><code>&quot;&quot;</code>을 더함</td><td><code>3 + &quot;&quot;</code> → <code>&quot;3&quot;</code></td></tr>
<tr><td>문자열 → 숫자</td><td><code>Integer.parseInt()</code>, <code>Double.parseDouble()</code></td><td><code>Integer.parseInt(&quot;3&quot;)</code> → 3</td></tr>
<tr><td>문자열 → 문자</td><td><code>charAt(0)</code></td><td><code>&quot;3&quot;.charAt(0)</code> → <code>&#39;3&#39;</code></td></tr>
<tr><td>문자 → 문자열</td><td><code>&quot;&quot;</code>을 더함</td><td><code>&#39;3&#39; + &quot;&quot;</code> → <code>&quot;3&quot;</code></td></tr>
</tbody>
</table>
</div>
<h1 id="j-ch-3">3장. 연산자</h1>
<p>연산자는 크게 산술·비교·논리·대입으로 나뉩니다. 우선순위와 결합규칙에 따라 처리되며, 연산 전에 피연산자의 타입이 자동으로 맞춰집니다.</p>
<h2 id="j-16">1. 연산자 기본</h2>
<ul><li><p><strong>연산자</strong>는 연산을 수행하는 기호, <strong>피연산자</strong>는 연산의 대상. 연산자와 피연산자를 조합한 것이 <strong>식</strong>이며, 식을 계산해 결과를 얻는 것을 <strong>평가</strong>라고 함</p>
</li>
<li><p>피연산자 개수에 따라 단항·이항·삼항 연산자로 구분. <code>-</code>는 피연산자가 1개면 부호 연산자, 2개면 뺄셈 연산자</p>
</li>
</ul>
<div class="tw"><table><thead><tr><th>종류</th><th>연산자 (위쪽이 우선순위 높음)</th><th>결합규칙</th></tr>
</thead>
<tbody><tr><td>단항</td><td><code>++ -- + - ~ ! (type)</code></td><td>←</td></tr>
<tr><td>산술</td><td><code>* / %</code> &gt; <code>+ -</code> &gt; <code>&lt;&lt; &gt;&gt;</code></td><td>→</td></tr>
<tr><td>비교</td><td><code>&lt; &gt; &lt;= &gt;= instanceof</code> &gt; <code>== !=</code></td><td>→</td></tr>
<tr><td>논리</td><td><code>&amp;</code> &gt; <code>^</code> &gt; &#96;</td><td><code>&gt;</code>&amp;&amp;<code>&gt;</code></td></tr>
<tr><td>삼항</td><td><code>? :</code></td><td>→</td></tr>
<tr><td>대입</td><td>&#96;= += -= *= /= %= &lt;&lt;= &gt;&gt;= &amp;= ^=</td><td>=&#96;</td></tr>
</tbody>
</table>
</div>
<p>책에서 강조하는 3가지 규칙만 기억하면 대부분 해결됩니다.</p>
<ol><li><p>산술 &gt; 비교 &gt; 논리 &gt; 대입. 대입은 제일 마지막에 수행</p>
</li>
<li><p>단항 &gt; 이항 &gt; 삼항</p>
</li>
<li><p>단항 연산자와 대입 연산자를 제외한 모든 연산은 왼쪽에서 오른쪽으로 진행 (<code>x = y = 3</code>은 y=3이 먼저)</p>
</li>
</ol>
<p>주의할 우선순위: <code>x &lt;&lt; 2 + 1</code>은 <code>x &lt;&lt; 3</code> (쉬프트보다 덧셈이 먼저), <code>data &amp; 0xFF == 0</code>은 <code>data &amp; (0xFF == 0)</code> (비교가 비트 연산보다 먼저), <code>x &lt; -1 || x &gt; 3 &amp;&amp; x &lt; 5</code>는 <code>&amp;&amp;</code>가 먼저. 헷갈리면 괄호를 쓸 것.</p>
<h2 id="j-17">1.5 산술 변환(usual arithmetic conversion)</h2>
<p>이항 연산은 두 피연산자의 타입이 같아야 하므로 연산 전에 자동 형변환됩니다.</p>
<ol><li><p>두 피연산자의 타입을 더 큰 타입으로 일치: <code>long + int</code> → long, <code>float + int</code> → float, <code>double + float</code> → double</p>
</li>
<li><p>int보다 작은 타입은 int로 변환: <code>byte + short</code> → int, <code>char + short</code> → int</p>
</li>
</ol>
<p>예외로 쉬프트 연산자와 증감 연산자는 산술 변환이 일어나지 않습니다. 연산 결과의 타입은 변환된 피연산자의 타입과 같습니다.</p>
<h2 id="j-18">2. 단항 연산자</h2>
<ul><li><p><strong>증감 연산자</strong> <code>++ --</code>: 피연산자를 1 증가/감소. 결과 타입은 피연산자 타입과 같음</p>
<ul><li><p>독립적으로 쓰면 전위형(<code>++i</code>)과 후위형(<code>i++</code>)의 차이가 없음</p>
</li>
<li><p>식에 포함되면 차이가 있음: <code>j = ++i;</code>는 증가 후 대입, <code>j = i++;</code>는 대입 후 증가 (i=5일 때 각각 j=6, j=5)</p>
</li>
<li><p>헷갈리면 증감 연산자를 따로 떼어내서 생각. 한 식에서 같은 변수에 여러 번 쓰지 않기</p>
</li>
</ul>
</li>
<li><p><strong>부호 연산자</strong> <code>+ -</code>: boolean·char를 제외한 기본형에 사용</p>
</li>
</ul>
<h2 id="j-19">3. 산술 연산자</h2>
<ul><li><p><code>int / int</code>는 결과도 int라서 소수점 이하가 버려짐 (<code>10 / 4</code> → 2). 실수 결과가 필요하면 <code>10 / 4.0f</code> 또는 <code>(float)10 / 4</code></p>
</li>
<li><p>정수를 0으로 나누면 에러(ArithmeticException). 실수를 0.0으로 나누면 Infinity, <code>0.0 / 0.0</code>은 NaN(Not a Number)</p>
</li>
<li><p><strong>타입 문제</strong>: <code>byte c = a + b;</code>는 에러 (a+b는 int) → <code>byte c = (byte)(a + b);</code></p>
</li>
<li><p><strong>오버플로우</strong>: <code>long c = a * b;</code> (a, b는 int 1,000,000)는 곱셈이 int로 먼저 계산되어 오버플로우 후 대입 → <code>(long)a * b</code>로 계산</p>
</li>
<li><p><strong>상수 연산</strong>: <code>char c = &#39;a&#39; + 1;</code>은 OK (컴파일러가 미리 계산), <code>char c2 = c1 + 1;</code>은 에러 (변수는 실행 시 int로 계산). 단, <code>c1++</code>은 형변환이 없어 OK</p>
</li>
<li><p><strong>문자 연산</strong>: 대문자와 소문자의 코드 차이는 32 (<code>(char)(&#39;a&#39; - 32)</code> → &#39;A&#39;). 문자 숫자를 숫자로는 <code>&#39;7&#39; - &#39;0&#39;</code> → 7</p>
</li>
<li><p><strong>반올림</strong>: <code>Math.round(pi * 1000) / 1000.0</code> → 소수점 셋째 자리까지 반올림. <code>/ 1000</code>으로 나누면 int 나눗셈이 되어 소수점이 사라짐</p>
</li>
<li><p><strong>나머지 연산자</strong> <code>%</code>: 짝수·홀수, 배수 판별에 주로 사용. 결과의 부호는 왼쪽 피연산자를 따름 (<code>-10 % 8</code> → -2, <code>10 % -8</code> → 2)</p>
</li>
</ul>
<h2 id="j-20">4. 비교 연산자</h2>
<ul><li><p>결과는 항상 boolean. 비교 전에도 산술 변환이 일어남 (<code>&#39;A&#39; == 65</code> → true, <code>10 == 10.0f</code> → true)</p>
</li>
<li><p><code>&gt;=</code>, <code>&lt;=</code>는 기호 순서를 바꾸거나(<code>=&gt;</code>) 사이에 공백을 넣으면 안 됨</p>
</li>
<li><p><strong>실수 비교 주의</strong>: <code>0.1 == 0.1f</code> → false. float로 변환될 때 오차가 생기기 때문. float와 double을 비교할 때는 <code>(float)d == f</code>처럼 작은 쪽으로 맞춰 비교</p>
</li>
<li><p><strong>문자열 비교</strong>: <code>==</code>는 같은 객체인지(주소)를 비교하므로 내용 비교는 <code>str.equals(&quot;abc&quot;)</code>. 대소문자를 무시하려면 <code>equalsIgnoreCase()</code></p>
</li>
</ul>
<h2 id="j-21">5. 논리 연산자</h2>
<ul><li><p><code>&amp;&amp;</code>(AND, 둘 다 true), <code>||</code>(OR, 하나라도 true), <code>!</code>(NOT, 반대)</p>
</li>
<li><p>범위 조건: <code>10 &lt; x &lt; 20</code>은 불가 → <code>10 &lt; x &amp;&amp; x &lt; 20</code>. 예: 숫자 문자인지 <code>&#39;0&#39; &lt;= ch &amp;&amp; ch &lt;= &#39;9&#39;</code>, 영문자인지 <code>(&#39;a&#39; &lt;= ch &amp;&amp; ch &lt;= &#39;z&#39;) || (&#39;A&#39; &lt;= ch &amp;&amp; ch &lt;= &#39;Z&#39;)</code></p>
</li>
<li><p><strong>단락 평가(short-circuit)</strong>: 왼쪽만으로 결과가 정해지면 오른쪽은 실행하지 않음. <code>a != 0 || ++b != 0</code>에서 a가 0이 아니면 b는 증가하지 않음. 그래서 참일 가능성이 높은 조건을 <code>||</code> 왼쪽에 두면 빨라짐</p>
</li>
</ul>
<h2 id="j-22">5.2 비트 연산자</h2>
<div class="tw"><table><thead><tr><th>연산자</th><th>동작</th><th>주된 용도</th></tr>
</thead>
<tbody><tr><td><code>&amp;</code> (AND)</td><td>둘 다 1이면 1</td><td>특정 비트 추출(마스킹): <code>0xABCD &amp; 0xF</code> → 0xD</td></tr>
<tr><td>&#96;</td><td>&#96; (OR)</td><td>하나라도 1이면 1</td></tr>
<tr><td><code>^</code> (XOR)</td><td>서로 다르면 1</td><td>같은 값으로 두 번 XOR하면 원래대로(간단한 암호화)</td></tr>
<tr><td><code>~</code> (NOT)</td><td>0과 1을 반전</td><td><code>~x + 1</code> = <code>-x</code> (2의 보수)</td></tr>
<tr><td><code>&lt;&lt;</code></td><td>왼쪽으로 n칸 이동, 빈칸은 0</td><td><code>x &lt;&lt; n</code> = x × 2ⁿ</td></tr>
<tr><td><code>&gt;&gt;</code></td><td>오른쪽으로 n칸 이동, 빈칸은 부호 비트</td><td><code>x &gt;&gt; n</code> = x ÷ 2ⁿ</td></tr>
</tbody>
</table>
</div>
<ul><li><p>쉬프트와 <code>&amp;</code>를 조합하면 16진수를 한 자리씩 뽑을 수 있음: <code>(0xABCD &gt;&gt; 4) &amp; 0xF</code> → 0xC</p>
</li>
<li><p>쉬프트는 곱셈·나눗셈보다 빠르지만 읽기 어려우므로 성능이 중요한 곳에서만 사용</p>
</li>
</ul>
<h2 id="j-23">6. 그 외의 연산자</h2>
<ul><li><p><strong>조건 연산자</strong> <code>조건식 ? 식1 : 식2</code>: 참이면 식1, 거짓이면 식2. if문보다 간결 (<code>int abs = x &gt;= 0 ? x : -x;</code>). 중첩하면 가독성이 떨어짐. 식1과 식2의 타입이 다르면 산술 변환 발생</p>
</li>
<li><p><strong>대입 연산자</strong>: 오른쪽에서 왼쪽으로 진행. <strong>lvalue</strong>(왼쪽)는 값을 저장할 변수여야 하고 리터럴이나 식은 불가. <strong>rvalue</strong>(오른쪽)는 변수·식·상수 모두 가능. final 상수는 lvalue가 될 수 없음</p>
</li>
<li><p><strong>복합 대입 연산자</strong>: <code>i += 3</code> → <code>i = i + 3</code>. 오른쪽 전체가 먼저 계산됨: <code>i *= 10 + j</code> → <code>i = i * (10 + j)</code></p>
</li>
</ul>
<h1 id="j-ch-4">4장. 조건문과 반복문</h1>
<p>프로그램은 위에서 아래로 실행되지만, 조건문(if, switch)으로 흐름을 나누고 반복문(for, while, do-while)으로 같은 코드를 반복할 수 있습니다.</p>
<h2 id="j-24">1.1~1.4 if문</h2>
<ul><li><p><code>if (조건식) { ... }</code>: 조건식은 반드시 boolean. <code>if (x = 0)</code>은 에러(대입을 비교로 잘못 쓴 경우)</p>
</li>
<li><p>블럭 <code>{}</code> 안 문장이 하나면 괄호 생략 가능. 하지만 나중에 문장을 추가하면 첫 문장만 if에 속하게 되는 실수가 흔하므로 괄호를 쓰는 것이 안전</p>
</li>
<li><p>자주 쓰는 조건식: <code>90 &lt;= x &amp;&amp; x &lt;= 100</code>(범위), <code>x &lt; 0 || x &gt; 100</code>(범위 밖), <code>x % 3 == 0 &amp;&amp; x % 2 != 0</code>(3의 배수이면서 홀수), <code>ch == &#39;y&#39; || ch == &#39;Y&#39;</code>, <code>str.equals(&quot;yes&quot;)</code></p>
</li>
<li><p><strong>if-else</strong>: 두 조건이 서로 반대일 때 if 두 개 대신 사용</p>
</li>
<li><p><strong>if-else if</strong>: 위에서부터 차례로 검사하고 참인 첫 블럭만 수행. 점수→학점처럼 여러 범위를 나눌 때. 앞의 조건이 거짓이라는 것이 전제되므로 <code>score &gt;= 80</code>처럼 한쪽만 써도 됨</p>
</li>
<li><p><strong>중첩 if</strong>: if 안에 if. 괄호를 생략하면 else는 가장 가까운 if에 속하므로 들여쓰기와 상관없이 의도와 다르게 동작할 수 있음</p>
</li>
</ul>
<h2 id="j-25">1.5 switch문</h2>
<p>경우의 수가 많을 때 if-else if보다 간결합니다. 조건식을 한 번만 계산해서 결과와 일치하는 case로 이동하고, break를 만나거나 끝까지 실행합니다. 일치하는 case가 없으면 default로 갑니다.</p>
<ul><li><p><strong>제약조건</strong>: ① 조건식 결과는 정수(long 제외)·문자열·참조형만 ② case 값은 정수 상수, 문자·문자열 리터럴, final 상수만 (변수·실수 불가, 중복 불가)</p>
</li>
<li><p><strong>break 생략(fall-through)</strong>: break가 없으면 다음 case까지 실행. 회원 등급별 권한 부여처럼 의도적으로 쓰기도 하고, <code>case 3: case 4: case 5:</code>처럼 여러 case를 묶을 때도 사용</p>
</li>
<li><p><strong>난수</strong>: <code>Math.random()</code>은 0.0 이상 1.0 미만. 1~3을 얻으려면 각 변에 3을 곱하고 → int로 변환하고 → 1을 더함: <code>(int)(Math.random() * 3) + 1</code>. 주사위는 6을 곱함</p>
</li>
<li><p>점수→학점 예제처럼 <code>switch(score / 10)</code>으로 범위를 case로 바꿀 수 있음</p>
</li>
</ul>
<p><strong>switch식 (JDK 14+)</strong>: switch를 값을 돌려주는 식으로 쓸 수 있습니다. 화살표 <code>-&gt;</code>는 break가 필요 없고 다음 case로 넘어가지 않아, break를 빠뜨리는 실수를 막아줍니다.</p>
<pre><code><span class="hl-kw">char</span> grade = <span class="hl-kw">switch</span>(score/<span class="hl-num">10</span>) {
    <span class="hl-kw">case</span> <span class="hl-num">9</span>, <span class="hl-num">10</span> -&gt; <span class="hl-str">'A'</span>;          <span class="hl-com">// 콤마로 여러 case를 합침</span>
    <span class="hl-kw">case</span> <span class="hl-num">8</span>     -&gt; <span class="hl-str">'B'</span>;
    <span class="hl-kw">case</span> <span class="hl-num">7</span>     -&gt; {             <span class="hl-com">// 여러 문장은 블럭으로, 값은 yield로 반환</span>
        System.out.println(<span class="hl-str">"C"</span>);
        <span class="hl-kw">yield</span> <span class="hl-str">'C'</span>;
    }
    <span class="hl-kw">default</span>    -&gt; <span class="hl-str">'F'</span>;
};                              <span class="hl-com">// 끝에 세미콜론 필수</span>

<span class="hl-com">// 콜론 형식에서는 break 대신 yield 사용</span>
<span class="hl-kw">char</span> g2 = <span class="hl-kw">switch</span>(score/<span class="hl-num">10</span>) {
    <span class="hl-kw">case</span> <span class="hl-num">10</span>: <span class="hl-kw">case</span> <span class="hl-num">9</span>: <span class="hl-kw">yield</span> <span class="hl-str">'A'</span>;
    <span class="hl-kw">default</span>:         <span class="hl-kw">yield</span> <span class="hl-str">'F'</span>;
};</code></pre>
<p><code>yield</code>는 <code>var</code>처럼 switch식 안에서만 예약어가 되는 문맥 예약어입니다.</p>
<h2 id="j-26">2.1 for문</h2>
<pre><code><span class="hl-com">// for (초기화; 조건식; 증감식) { 수행할 문장 }</span>
<span class="hl-kw">for</span> (<span class="hl-kw">int</span> i = <span class="hl-num">1</span>; i &lt;= <span class="hl-num">5</span>; i++) {   <span class="hl-com">// ①초기화 ②조건식 ④증감식</span>
    System.out.println(i);       <span class="hl-com">// ③수행할 문장</span>
}</code></pre>
<ul><li><p>수행 순서: ① 한 번 → 조건식이 참인 동안 ②→③→④ 반복. 반복 횟수가 정해져 있을 때 적합</p>
</li>
<li><p>세 요소 모두 생략 가능. <code>for(;;)</code>는 조건식이 항상 참이므로 무한 반복. 초기화·증감식에 콤마로 여러 개 가능 (<code>for(int i=1, j=10; i&lt;=10; i++, j--)</code>)</p>
</li>
<li><p>for문에서 선언한 변수 i는 for문 안에서만 사용 가능</p>
</li>
<li><p><strong>중첩 for</strong>: 구구단, 별 찍기, 2차원 표 출력 등. 바깥 for가 한 번 돌 때 안쪽 for는 전부 반복</p>
</li>
<li><p><strong>향상된 for</strong>: <code>for (int x : arr)</code>로 배열·컬렉션의 요소를 차례로 읽음. 읽기만 가능하고 요소 값을 변경할 수는 없음</p>
</li>
</ul>
<h2 id="j-27">2.2~2.3 while문과 do-while문</h2>
<ul><li><p><strong>while</strong>: <code>while (조건식) { ... }</code>. 조건식이 참인 동안 반복하며, 처음부터 거짓이면 한 번도 실행 안 함. 반복 횟수가 정해지지 않았을 때 적합</p>
</li>
<li><p>for문과 while문은 항상 서로 바꿀 쓸 수 있음. 단, while의 조건식은 생략 불가 (<code>while(true)</code>로 무한 반복)</p>
</li>
<li><p>예제: 숫자를 10으로 계속 나눠 각 자리의 합 구하기, 합이 100을 넘을 때까지 더하기, 369 게임</p>
</li>
<li><p><strong>무한 반복문</strong>은 반드시 블럭 안에 break 조건을 넣어야 함</p>
</li>
<li><p><strong>do-while</strong>: <code>do { ... } while (조건식);</code> (끝에 세미콜론). 블럭을 먼저 실행하고 조건을 검사하므로 <strong>최소 1번은 실행</strong>. 숫자 맞추기처럼 사용자 입력을 받고 검사할 때 유용</p>
</li>
</ul>
<h2 id="j-28">2.4~2.6 break, continue, 이름 붙은 반복문</h2>
<ul><li><p><strong>break</strong>: 자신이 속한 가장 가까운 반복문(또는 switch)을 벗어남. 무한 반복문과 함께 자주 사용</p>
</li>
<li><p><strong>continue</strong>: 반복문 안에서만 사용. 남은 문장을 건너뛰고 다음 반복으로 (for는 증감식, while은 조건식으로). 특정 조건을 제외할 때 유용 (예: 3의 배수 건너뛰기, 잘못된 메뉴 선택 시 다시 입력받기)</p>
</li>
<li><p><strong>이름 붙은 반복문</strong>: break는 가장 가까운 반복문 하나만 빠져나가므로, 중첩 반복문을 한 번에 빠져나가려면 반복문에 이름을 붙임</p>
</li>
</ul>
<pre><code>Loop1 : <span class="hl-kw">for</span> (<span class="hl-kw">int</span> i = <span class="hl-num">2</span>; i &lt;= <span class="hl-num">9</span>; i++) {
    <span class="hl-kw">for</span> (<span class="hl-kw">int</span> j = <span class="hl-num">1</span>; j &lt;= <span class="hl-num">9</span>; j++) {
        <span class="hl-kw">if</span> (j == <span class="hl-num">5</span>) <span class="hl-kw">break</span> Loop1;   <span class="hl-com">// 바깥 for까지 한 번에 벗어남</span>
        System.out.println(i + <span class="hl-str">"*"</span> + j + <span class="hl-str">"="</span> + i * j);
    }
}</code></pre>
<h1 id="j-ch-5">5장. 배열</h1>
<p>배열은 같은 타입의 여러 변수를 하나로 묶은 객체입니다. 참조변수를 통해서만 다룰 수 있고, 한 번 만들면 길이를 바꿀 수 없습니다.</p>
<h2 id="j-29">1.1~1.3 배열의 선언·생성·인덱스</h2>
<ul><li><p>변수 5개(score1~score5) 대신 배열 하나로 묶으면 반복문으로 처리할 수 있어 코드가 간결해짐</p>
</li>
<li><p><strong>선언</strong>: <code>int[] score;</code> 또는 <code>int score[];</code> (둘 다 가능, 자바에서는 앞의 방식 권장). 선언만 하면 참조변수만 생김</p>
</li>
<li><p><strong>생성</strong>: <code>score = new int[5];</code> → 실제 저장 공간이 만들어지고 그 주소가 score에 저장됨. 보통 <code>int[] score = new int[5];</code>로 한 번에</p>
</li>
<li><p><strong>인덱스</strong>: 0부터 <code>length-1</code>까지. <code>score[3] = 100;</code>처럼 사용하며 인덱스에 변수나 식도 가능(<code>score[i+1]</code>). 범위를 벗어나면 실행 중 <code>ArrayIndexOutOfBoundsException</code></p>
</li>
<li><p><strong>길이</strong>: <code>배열이름.length</code> (상수라서 변경 불가). for문 조건식에 숫자 대신 <code>arr.length</code>를 쓰면 배열 길이가 바뀌어도 안전. 길이가 0인 배열도 만들 수 있음</p>
</li>
<li><p><strong>길이 변경</strong>: 불가능하므로 ① 더 큰 배열을 새로 만들고 ② 기존 내용을 복사. 비용이 크므로 처음부터 넉넉하게(보통 2배) 만드는 것이 좋음</p>
</li>
</ul>
<h2 id="j-30">1.4 배열의 초기화</h2>
<ul><li><p>배열은 생성되면 자동으로 기본값으로 초기화됨</p>
</li>
</ul>
<div class="tw"><table><thead><tr><th>타입</th><th>기본값</th></tr>
</thead>
<tbody><tr><td>boolean</td><td>false</td></tr>
<tr><td>char</td><td>&#39;\u0000&#39;</td></tr>
<tr><td>byte, short, int</td><td>0</td></tr>
<tr><td>long</td><td>0L</td></tr>
<tr><td>float / double</td><td>0.0f / 0.0</td></tr>
<tr><td>참조형(String 등)</td><td>null</td></tr>
</tbody>
</table>
</div>
<ul><li><p>선언과 동시에 초기화: <code>int[] score = {50, 60, 70, 80, 90};</code> (길이는 자동 결정). 선언과 초기화를 따로 하면 <code>new int[]</code>를 생략할 수 없음 (<code>score = new int[]{50, 60};</code>)</p>
</li>
<li><p>출력: <code>System.out.println(arr)</code>은 ‘타입@주소’가 나오므로 <code>Arrays.toString(arr)</code> 사용 (<code>import java.util.*;</code> 필요). 단, char 배열은 println으로 바로 문자열처럼 출력됨</p>
</li>
</ul>
<h2 id="j-31">1.5 배열의 복사</h2>
<ul><li><p>for문으로 한 요소씩 복사한 뒤 <code>arr = tmp;</code>로 참조를 바꿈. 참조되지 않는 이전 배열은 가비지 컬렉터가 제거</p>
</li>
<li><p><code>System.arraycopy(src, 0, dest, 0, len)</code>: 지정된 범위를 통째로 복사하므로 for문보다 빠름. 복사할 곳의 공간이 부족하면 에러</p>
</li>
<li><p><code>Arrays.copyOf()</code>, <code>Arrays.copyOfRange()</code>로도 복사 가능</p>
</li>
</ul>
<h2 id="j-32">1.6 배열의 활용 (예제 패턴)</h2>
<div class="tw"><table><thead><tr><th>활용</th><th>핵심 아이디어</th></tr>
</thead>
<tbody><tr><td>총합과 평균</td><td>반복문으로 합을 구하고 평균은 <code>(float)sum / length</code> (int 나눗셈 방지)</td></tr>
<tr><td>최대값과 최소값</td><td>첫 요소를 max·min으로 두고 나머지와 비교해 갱신</td></tr>
<tr><td>섞기(shuffle)</td><td>난수 인덱스의 요소와 반복적으로 값을 교환</td></tr>
<tr><td>로또 번호</td><td>1~45를 넣은 배열을 섞은 뒤 앞의 6개를 사용 (중복 없음)</td></tr>
<tr><td>임의의 값 뽑기</td><td>값을 담은 배열에서 난수 인덱스로 선택 (<code>arr[i] = code[tmp]</code>)</td></tr>
<tr><td>버블 정렬</td><td>인접한 두 값을 비교해 자리를 바꾸기를 <code>length-1</code>번 반복. 자리바꿈이 없으면 조기 종료</td></tr>
<tr><td>빈도수 구하기</td><td>값을 인덱스로 삼아 카운터 증가 (<code>counter[numArr[i]]++</code>)</td></tr>
</tbody>
</table>
</div>
<h2 id="j-33">2. String 배열</h2>
<ul><li><p><code>String[] name = new String[3];</code> → 각 요소는 null(어떤 객체도 가리키지 않음). 참조형 배열은 실제 객체가 아니라 <strong>객체의 주소</strong>를 저장</p>
</li>
<li><p>초기화: <code>String[] name = {&quot;Kim&quot;, &quot;Park&quot;, &quot;Yi&quot;};</code></p>
</li>
<li><p><strong>char 배열과 String</strong>: String은 char 배열에 기능(메서드)을 추가한 클래스. 중요한 차이는 <strong>String은 읽기만 가능하고 내용을 변경할 수 없다</strong>는 것. <code>str = str + &quot;8&quot;</code>은 새 문자열을 만든 것 (변경 가능한 문자열은 StringBuffer)</p>
</li>
</ul>
<div class="tw"><table><thead><tr><th>메서드</th><th>설명</th></tr>
</thead>
<tbody><tr><td><code>char charAt(int index)</code></td><td>해당 위치의 문자 (index는 0부터)</td></tr>
<tr><td><code>int length()</code></td><td>문자열의 길이</td></tr>
<tr><td><code>String substring(int from, int to)</code></td><td>from ~ to-1 범위의 문자열 (<code>&quot;012345&quot;.substring(1,4)</code> → <code>&quot;123&quot;</code>)</td></tr>
<tr><td><code>boolean equals(Object obj)</code></td><td>내용이 같은지 (대소문자 구분)</td></tr>
<tr><td><code>char[] toCharArray()</code></td><td>문자열을 char 배열로 변환</td></tr>
</tbody>
</table>
</div>
<ul><li><p>char 배열 → String: <code>new String(chArr)</code></p>
</li>
<li><p><strong>커맨드 라인 입력</strong>: <code>java MainClass abc 123</code> → <code>args[0]</code>은 &quot;abc&quot;, <code>args[1]</code>은 &quot;123&quot;. 공백으로 구분하므로 공백이 포함되면 큰따옴표로 감쌀. 숫자도 문자열로 들어오므로 <code>Integer.parseInt()</code>로 변환. 입력이 없으면 args는 null이 아니라 길이 0인 배열</p>
</li>
</ul>
<h2 id="j-34">3. 다차원 배열</h2>
<ul><li><p>선언: <code>int[][] score = new int[4][3];</code> → 4행 3열. 테이블 형태의 데이터에 사용. 요소는 <code>score[행][열]</code></p>
</li>
<li><p>초기화: <code>int[][] arr = { {100, 100, 100}, {20, 20, 20} };</code></p>
</li>
<li><p><strong>배열의 배열</strong>: 2차원 배열의 각 요소는 1차원 배열의 참조변수. <code>score.length</code>는 행의 개수, <code>score[i].length</code>는 i행의 열 개수</p>
</li>
<li><p>모든 요소 순회는 이중 for문. 향상된 for로도 가능하지만 값 변경은 불가</p>
</li>
<li><p><strong>가변 배열</strong>: 마지막 차수의 길이를 비워두고 행마다 다른 길이로 생성 가능</p>
</li>
</ul>
<pre><code><span class="hl-kw">int</span>[][] score = <span class="hl-kw">new</span> <span class="hl-kw">int</span>[<span class="hl-num">3</span>][];   <span class="hl-com">// 행의 개수만 지정</span>
score[<span class="hl-num">0</span>] = <span class="hl-kw">new</span> <span class="hl-kw">int</span>[<span class="hl-num">4</span>];
score[<span class="hl-num">1</span>] = <span class="hl-kw">new</span> <span class="hl-kw">int</span>[<span class="hl-num">2</span>];
score[<span class="hl-num">2</span>] = <span class="hl-kw">new</span> <span class="hl-kw">int</span>[<span class="hl-num">3</span>];</code></pre>
<ul><li><p><strong>활용 예제</strong>: 좌표를 입력받아 빙고/배틀십 판에 표시, 단어 맞추기(문제와 답을 2차원 String 배열에), 행렬의 곱셈(m1의 열 개수 = m2의 행 개수일 때 m3[i][j] = Σ m1[i][k] × m2[k][j])</p>
</li>
</ul>
<h1 id="j-ch-6">6장. 객체지향 프로그래밍 I</h1>
<p>클래스는 객체의 설계도이고, 객체(인스턴스)는 속성(멤버변수)과 기능(메서드)으로 구성됩니다. 이 장은 클래스 작성, 변수와 메서드, 오버로딩, 생성자, 초기화를 다룹니다.</p>
<h2 id="j-35">1. 객체지향언어</h2>
<ul><li><p>실제 세계의 사물과 그 관계를 코드로 표현하는 방식. 새로운 문법이라기보다 기존 프로그래밍에 규칙을 더한 것</p>
</li>
<li><p>장점: ① 코드의 재사용성이 높음 ② 코드 관리가 용이(코드 간 관계로 적은 노력으로 변경) ③ 신뢰성 높은 프로그래밍(제어자와 메서드로 데이터 보호, 중복 제거로 불일치 방지)</p>
</li>
<li><p>핵심 개념: 상속, 캡슐화, 추상화, 다형성. 개념 자체보다 재사용성과 유지보수를 염두에 두고 설계하는 연습이 중요</p>
</li>
</ul>
<h2 id="j-36">2. 클래스와 객체</h2>
<ul><li><p><strong>클래스</strong>: 객체를 정의해 놓은 것(설계도). 용도는 객체를 생성하는 것</p>
</li>
<li><p><strong>객체</strong>: 실제로 존재하는 것(사물 또는 개념). 용도는 객체가 가진 속성과 기능을 사용하는 것</p>
</li>
<li><p>예: 제품 설계도 → 제품, TV 설계도 → TV, 붕어빵 기계 → 붕어빵</p>
</li>
<li><p><strong>인스턴스</strong>: 클래스로부터 만들어진 객체. 이 과정을 인스턴스화라고 함. ‘객체’는 모든 인스턴스를 대표하는 일반적인 용어, ‘인스턴스’는 특정 클래스로부터 만들어졌음을 강조할 때 사용</p>
</li>
<li><p><strong>구성요소</strong>: 속성(property) = 멤버변수, 기능(function) = 메서드. 보통 멤버변수를 먼저, 메서드를 나중에 선언</p>
</li>
</ul>
<pre><code><span class="hl-kw">class</span> Tv {
    String color;        <span class="hl-com">// 속성(멤버변수)</span>
    <span class="hl-kw">boolean</span> power;
    <span class="hl-kw">int</span> channel;

    <span class="hl-kw">void</span> power()       { power = !power; }   <span class="hl-com">// 기능(메서드)</span>
    <span class="hl-kw">void</span> channelUp()   { ++channel; }
    <span class="hl-kw">void</span> channelDown() { --channel; }
}</code></pre>
<h2 id="j-37">2.4 인스턴스의 생성과 사용</h2>
<pre><code>Tv t;            <span class="hl-com">// 참조변수 선언</span>
t = <span class="hl-kw">new</span> Tv();    <span class="hl-com">// 인스턴스 생성 후 그 주소를 t에 저장</span>
t.channel = <span class="hl-num">7</span>;   <span class="hl-com">// 참조변수.멤버변수</span>
t.channelDown(); <span class="hl-com">// 참조변수.메서드()</span></code></pre>
<ul><li><p>인스턴스는 <strong>참조변수를 통해서만</strong> 다룰 수 있고, 참조변수의 타입은 인스턴스의 타입과 일치해야 함</p>
</li>
<li><p><code>t2 = t1;</code>은 t1의 <strong>주소</strong>를 t2에 복사하는 것. 이후 두 변수는 같은 인스턴스를 가리킴. t2가 원래 가리키던 인스턴스는 참조하는 변수가 없으므로 가비지 컬렉터가 제거</p>
</li>
<li><p>참조변수 하나는 하나의 인스턴스만 가리킬 수 있지만, 여러 참조변수가 하나의 인스턴스를 가리킬 수는 있음</p>
</li>
<li><p><strong>객체 배열</strong>: <code>Tv[] tvArr = new Tv[3];</code>은 참조변수 3개를 담는 배열일 뿐 인스턴스는 생성되지 않음. <code>tvArr[0] = new Tv();</code>처럼 각 요소에 인스턴스를 생성해 저장해야 함. 초기화 블럭으로 <code>Tv[] tvArr = { new Tv(), new Tv() };</code>도 가능</p>
</li>
</ul>
<h2 id="j-38">2.6 클래스의 또 다른 정의</h2>
<ol><li><p><strong>데이터와 함수의 결합</strong>: 변수(데이터 하나) → 배열(같은 타입 여러 개) → 구조체(서로 다른 타입) → 클래스(구조체 + 함수)</p>
</li>
<li><p><strong>사용자정의 타입</strong>: 기본형 외에 프로그래머가 새로운 타입을 정의. 예를 들어 시·분·초를 따로 변수 3개로 다루는 대신 <code>Time</code> 클래스로 묶으면 시간 데이터가 섞일 위험이 줄고, 나중에 ‘시는 0~23, 분·초는 0~59’ 같은 제약도 메서드로 추가할 수 있음</p>
</li>
</ol>
<h2 id="j-39">3.1~3.2 선언 위치에 따른 변수의 종류</h2>
<div class="tw"><table><thead><tr><th>종류</th><th>선언 위치</th><th>생성 시기</th><th>특징</th></tr>
</thead>
<tbody><tr><td>클래스 변수 (cv)</td><td>클래스 영역, <code>static</code> 붙임</td><td>클래스가 메모리에 로딩될 때</td><td>모든 인스턴스가 공유. <code>클래스이름.변수</code>로 사용</td></tr>
<tr><td>인스턴스 변수 (iv)</td><td>클래스 영역</td><td>인스턴스가 생성될 때</td><td>인스턴스마다 고유한 값. 인스턴스를 생성해야 사용 가능</td></tr>
<tr><td>지역 변수 (lv)</td><td>메서드, 생성자, 초기화 블럭 안</td><td>변수 선언문이 실행될 때</td><td>블럭 <code>{}</code>을 벗어나면 소멸. for문의 i도 지역변수</td></tr>
</tbody>
</table>
</div>
<ul><li><p>클래스는 참조변수 선언이나 객체 생성처럼 클래스 정보가 필요할 때 메모리에 로딩됨</p>
</li>
<li><p>카드 예제: 무늬(kind)와 숫자(number)는 카드마다 다르므로 인스턴스 변수, 폭(width)과 높이(height)는 모든 카드가 같아야 하므로 클래스 변수</p>
</li>
</ul>
<h2 id="j-40">3.3~3.6 메서드</h2>
<ul><li><p><strong>메서드</strong>: 특정 작업을 수행하는 문장들을 묶은 것. 입력값을 받아 처리하고 결과를 반환하며, 내부를 몰라도 사용 가능(블랙박스)</p>
</li>
<li><p>사용 이유: <strong><mark>① 높은 재사용성 ② 중복된 코드 제거 ③ 프로그램의 구조화</mark></strong>(main을 작업 단위의 메서드 호출로 구성)</p>
</li>
</ul>
<pre><code><span class="hl-kw">class</span> MyMath {
    <span class="hl-kw">int</span> add(<span class="hl-kw">int</span> x, <span class="hl-kw">int</span> y) {    <span class="hl-com">// 선언부: 반환타입 메서드이름(매개변수 선언)</span>
        <span class="hl-kw">int</span> result = x + y;    <span class="hl-com">// 구현부</span>
        <span class="hl-kw">return</span> result;         <span class="hl-com">// 호출한 메서드로 결과 반환</span>
    }
}</code></pre>
<ul><li><p>매개변수는 콤마로 구분하며, 타입이 같아도 생략 불가 (<code>int add(int x, y)</code>는 에러). 매개변수도 지역변수</p>
</li>
<li><p>반환값이 없으면 반환타입은 <code>void</code>. 메서드 이름은 동작을 나타내는 동사로 짓는 것이 좋음</p>
</li>
<li><p><strong>호출</strong>: <code>메서드이름(값1, 값2)</code>. 인자의 개수와 순서는 매개변수와 같아야 하고, 타입은 매개변수에 자동 형변환되어 대입 가능해야 함</p>
</li>
<li><p>같은 클래스의 메서드끼리는 참조변수 없이 호출 가능. 단, static 메서드는 같은 클래스의 인스턴스 메서드를 바로 호출할 수 없음</p>
</li>
<li><p><strong>return문</strong>: 현재 메서드를 종료하고 호출한 곳으로 돌아감. void 메서드는 컴파일러가 자동으로 <code>return;</code>을 추가. 반환타입이 있으면 반드시 return이 있어야 하며, if문이 있으면 조건이 거짓인 경우에도 return이 있어야 함</p>
</li>
<li><p>반환값은 반환타입으로 자동 형변환될 수 있으면 됨. <code>return x + y;</code>처럼 식도 가능</p>
</li>
<li><p>매개변수의 유효성 검사: 메서드 시작 부분에서 값이 적절한지 확인 (예: 0으로 나누기 방지)</p>
</li>
</ul>
<h2 id="j-41">3.7 JVM의 메모리 구조</h2>
<div class="tw"><table><thead><tr><th>영역</th><th>저장하는 것</th></tr>
</thead>
<tbody><tr><td>메서드 영역(method area)</td><td>클래스 정보(클래스 데이터)와 클래스 변수</td></tr>
<tr><td>힙(heap)</td><td>생성된 인스턴스와 인스턴스 변수</td></tr>
<tr><td>호출 스택(call stack)</td><td>호출된 메서드의 작업공간. 지역변수, 매개변수, 연산 중간값</td></tr>
</tbody>
</table>
</div>
<ul><li><p>메서드가 호출되면 호출 스택에 작업공간이 할당되고, 작업이 끝나면 비워짐</p>
</li>
<li><p>호출 스택의 <strong>맨 위에 있는 메서드가 현재 실행 중</strong>이고, 그 아래는 바로 위 메서드를 호출한 메서드 (main → firstMethod → secondMethod 순으로 쌓였다가 역순으로 제거)</p>
</li>
</ul>
<h2 id="j-42">3.8~3.9 기본형 매개변수와 참조형 매개변수</h2>
<ul><li><p><strong>기본형 매개변수</strong>: 변수의 값을 복사해서 전달하므로 메서드 안에서 바꿔도 원본은 그대로 (읽기만 가능)</p>
</li>
<li><p><strong>참조형 매개변수</strong>: 인스턴스의 주소를 복사해서 전달하므로 메서드 안에서 그 인스턴스의 값을 변경 가능 (읽기와 쓰기 가능)</p>
</li>
<li><p>배열도 객체이므로 배열을 매개변수로 넘기면 원본 배열이 변경됨. 이를 이용해 반환값 없이 결과를 돌려받을 수 있음</p>
</li>
<li><p><strong>참조형 반환타입</strong>: 인스턴스의 주소를 반환. 메서드 안에서 만든 객체를 반환해도 주소가 전달되므로 메서드가 끝나도 객체는 힙에 남아 사용 가능 (예: <code>static Data copy(Data d)</code>로 복사본 반환)</p>
</li>
</ul>
<h2 id="j-43">3.10 재귀 호출(recursive call)</h2>
<ul><li><p>메서드 안에서 자기 자신을 다시 호출하는 것. 반드시 종료 조건(if문)이 있어야 하며 없으면 무한 호출로 StackOverflowError</p>
</li>
<li><p>반복문보다 느리지만 논리가 간결해짐. 팩토리얼(<code>n! = n × (n-1)!</code>, <code>factorial(1) = 1</code>), 거듭제곱 등에 사용</p>
</li>
<li><p>매개변수 유효성 검사가 특히 중요. 큰 수의 팩토리얼은 long도 넘으므로 BigInteger 사용</p>
</li>
</ul>
<pre><code><span class="hl-kw">class</span> FactorialTest {
    <span class="hl-kw">static</span> <span class="hl-kw">long</span> factorial(<span class="hl-kw">int</span> n) {
        <span class="hl-kw">if</span> (n &lt;= <span class="hl-num">0</span> || n &gt; <span class="hl-num">20</span>) <span class="hl-kw">return</span> -<span class="hl-num">1</span>;  <span class="hl-com">// 유효성 검사</span>
        <span class="hl-kw">if</span> (n == <span class="hl-num">1</span>) <span class="hl-kw">return</span> <span class="hl-num">1</span>;             <span class="hl-com">// 종료 조건</span>
        <span class="hl-kw">return</span> n * factorial(n - <span class="hl-num">1</span>);      <span class="hl-com">// 재귀 호출</span>
    }
}</code></pre>
<h2 id="j-44">3.11~3.12 클래스 메서드와 인스턴스 메서드</h2>
<ul><li><p>인스턴스 메서드는 인스턴스 변수(iv)가 필요한 메서드, 클래스 메서드(static)는 인스턴스 변수가 필요 없는 메서드</p>
</li>
<li><p>static을 붙이는 기준: ① 모든 인스턴스가 공통으로 쓰는 멤버변수 ② 메서드 안에서 인스턴스 변수를 쓰지 않는 메서드 (예: Math 클래스의 메서드는 모두 static)</p>
</li>
<li><p>static 메서드에서는 인스턴스 멤버를 바로 쓸 수 없고, 인스턴스 메서드에서는 static 멤버를 항상 쓸 수 있음. 자세한 내용은 아래 ‘심화: static’</p>
</li>
</ul>
<h2 id="j-45">4. 오버로딩(overloading)</h2>
<p>한 클래스 안에 같은 이름의 메서드를 여러 개 정의하는 것입니다. 대표적인 예는 <code>println</code>으로, 매개변수 타입별로 10개가 오버로딩되어 있습니다.</p>
<p><mark><strong>성립 조건:</strong></mark></p>
<ol><li><p><mark><strong>메서드 이름이 같아야 한다</strong></mark></p>
</li>
<li><p><mark><strong>매개변수의 개수 또는 타입이 달라야 한다</strong></mark></p>
</li>
<li><p><mark><strong>반환타입은 상관없다</strong></mark></p>
</li>
</ol>
<pre><code><span class="hl-kw">class</span> MyMath {
    <span class="hl-kw">int</span>  add(<span class="hl-kw">int</span> a, <span class="hl-kw">int</span> b)  { <span class="hl-kw">return</span> a + b; }
    <span class="hl-kw">long</span> add(<span class="hl-kw">int</span> a, <span class="hl-kw">long</span> b) { <span class="hl-kw">return</span> a + b; }   <span class="hl-com">// OK: 매개변수 타입이 다름</span>
    <span class="hl-kw">long</span> add(<span class="hl-kw">long</span> a, <span class="hl-kw">int</span> b) { <span class="hl-kw">return</span> a + b; }   <span class="hl-com">// OK: 타입의 순서가 다름</span>

    <span class="hl-com">// long add(int a, int b) { return a + b; } // 에러: 반환타입만 다름</span>
    <span class="hl-com">// int  add(int x, int y) { return x + y; } // 에러: 매개변수 이름만 다름</span>
}
<span class="hl-com">// 단, add(3, 3L)과 add(3L, 3)은 괜찮지만, 위의 두 OK 메서드만 있을 때</span>
<span class="hl-com">// add(3, 3)으로 호출하면 어느 것인지 모호해서 에러</span></code></pre>
<ul><li><p>장점: 기능이 같은 메서드를 하나의 이름으로 묶어 기억하기 쉽고, 이름을 짓는 고민과 이름 부족 문제가 줄어듦</p>
</li>
<li><p>매개변수 순서만 다르게 한 오버로딩은 순서를 외우지 않아도 되는 장점이 있지만 가능하면 피하는 것이 좋음</p>
</li>
</ul>
<p><strong>가변인자(varargs, JDK 5+)</strong>: 매개변수 개수를 동적으로 지정합니다. <code>타입... 변수명</code> 형식이며 <code>printf(String format, Object... args)</code>가 대표적입니다.</p>
<ul><li><p>가변인자는 매개변수 중 <strong>맨 마지막</strong>에만 선언 가능</p>
</li>
<li><p><code>concatenate(String... str)</code> 하나로 인자가 0개, 1개, 여러 개인 호출과 배열 인자까지 모두 처리</p>
</li>
<li><p>내부적으로 배열을 사용하므로 호출할 때마다 배열이 새로 생성됨 (비효율이 있어 꼭 필요할 때만). 매개변수를 <code>String[]</code>로 하면 인자를 생략할 수 없고 null이나 빈 배열을 넘겨야 함</p>
</li>
<li><p>주의: <code>concatenate(String s, String... str)</code>과 <code>concatenate(String... str)</code>를 함께 오버로딩하면 <code>concatenate(&quot;a&quot;, &quot;b&quot;)</code> 호출이 모호해 에러. 가변인자 메서드는 가급적 오버로딩하지 않는 것이 좋음</p>
</li>
</ul>
<h2 id="j-46">5. 생성자(constructor)</h2>
<h3 id="j-47">5.1 생성자란?</h3>
<p>생성자는 인스턴스가 생성될 때 호출되는 ‘인스턴스 초기화 메서드’입니다. 인스턴스 변수의 초기화나 생성 시 실행해야 할 작업에 사용합니다.</p>
<ul><li><p>조건: ① 생성자의 이름은 클래스 이름과 같아야 한다 ② 리턴값이 없다 (모든 생성자가 그렇기 때문에 void도 붙이지 않음)</p>
</li>
<li><p>생성자도 오버로딩이 가능하므로 한 클래스에 여러 개를 둘 수 있음 (<code>Card()</code>, <code>Card(String k, int num)</code>)</p>
</li>
<li><p><strong>인스턴스를 만드는 것은 생성자가 아니라 new 연산자</strong>. 생성자는 인스턴스 변수를 초기화하는 조금 특별한 메서드일 뿐</p>
</li>
<li><p><code>Card c = new Card();</code>의 수행 과정</p>
<ol><li><p>new 연산자가 힙에 Card 인스턴스를 생성</p>
</li>
<li><p>생성자 <code>Card()</code>가 호출되어 수행</p>
</li>
<li><p>생성된 인스턴스의 주소가 참조변수 c에 저장</p>
</li>
</ol>
</li>
<li><p>지금까지 <code>new 클래스이름()</code>에서 쓰던 <code>클래스이름()</code>이 바로 생성자. 인스턴스를 만들 때는 반드시 클래스에 정의된 생성자 중 하나를 지정해야 함</p>
</li>
</ul>
<h3 id="j-48">5.2 기본 생성자(default constructor)</h3>
<ul><li><p>모든 클래스에는 생성자가 하나 이상 있어야 함. 생성자를 정의하지 않고도 인스턴스를 만들 수 있었던 것은 컴파일러가 추가해 준 기본 생성자 <code>클래스이름() { }</code> 덕분 (public 클래스면 <code>public 클래스이름() { }</code>)</p>
</li>
<li><p>컴파일러가 기본 생성자를 추가하는 것은 <strong>클래스에 생성자가 하나도 없을 때뿐</strong></p>
</li>
</ul>
<pre><code><span class="hl-kw">class</span> Data1 { <span class="hl-kw">int</span> value; }                     <span class="hl-com">// 생성자 없음 → 기본 생성자 자동 추가</span>
<span class="hl-kw">class</span> Data2 {
    <span class="hl-kw">int</span> value;
    Data2(<span class="hl-kw">int</span> x) { value = x; }                <span class="hl-com">// 생성자가 있으므로 기본 생성자 추가 안 됨</span>
}
<span class="hl-kw">class</span> ConstructorEx {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        Data1 d1 = <span class="hl-kw">new</span> Data1();                <span class="hl-com">// OK</span>
        Data2 d2 = <span class="hl-kw">new</span> Data2(<span class="hl-num">10</span>);              <span class="hl-com">// OK</span>
        <span class="hl-com">// Data2 d3 = new Data2();             // 에러: Data2()가 없음</span>
    }
}</code></pre>
<p>에러를 없애려면 <code>Data2(int x)</code>를 사용하거나, Data2에 <code>Data2() { }</code>를 직접 추가해야 합니다.</p>
<h3 id="j-49">5.3 매개변수가 있는 생성자</h3>
<ul><li><p>인스턴스마다 다른 값으로 초기화해야 하는 경우가 많으므로 매개변수로 값을 받아 초기화하는 생성자가 유용</p>
</li>
<li><p>인스턴스를 만든 뒤 변수를 하나씩 바꾸는 것보다 코드가 짧고 직관적이며 변경에 유리. 다양한 생성자를 제공해 생성 후 추가 초기화가 필요 없게 하는 것이 좋음</p>
</li>
</ul>
<pre><code><span class="hl-kw">class</span> Car {
    String color;      <span class="hl-com">// 색상</span>
    String gearType;   <span class="hl-com">// 변속기 종류 - auto, manual</span>
    <span class="hl-kw">int</span> door;          <span class="hl-com">// 문의 개수</span>

    Car() { }                                  <span class="hl-com">// 기본 생성자</span>
    Car(String c, String g, <span class="hl-kw">int</span> d) {           <span class="hl-com">// 매개변수가 있는 생성자</span>
        color = c; gearType = g; door = d;
    }
}
<span class="hl-kw">class</span> CarEx {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        Car c1 = <span class="hl-kw">new</span> Car();                    <span class="hl-com">// 생성 후 하나씩 지정</span>
        c1.color = <span class="hl-str">"white"</span>; c1.gearType = <span class="hl-str">"auto"</span>; c1.door = <span class="hl-num">4</span>;
        Car c2 = <span class="hl-kw">new</span> Car(<span class="hl-str">"white"</span>, <span class="hl-str">"auto"</span>, <span class="hl-num">4</span>);  <span class="hl-com">// 생성과 동시에 지정</span>
    }
}</code></pre>
<h3 id="j-50">5.4 생성자에서 다른 생성자 호출하기 - this(), this</h3>
<p>생성자끼리도 서로 호출할 수 있지만 두 조건을 지켜야 합니다.</p>
<ol><li><p>생성자의 이름 대신 <code>this</code>를 사용한다</p>
</li>
<li><p>반드시 <strong>첫 줄에서만</strong> 호출한다 (중간에 호출하면 호출된 생성자가 다시 초기화해서 앞의 작업이 무의미해질 수 있기 때문)</p>
</li>
</ol>
<pre><code><span class="hl-kw">class</span> Car2 {
    String color; String gearType; <span class="hl-kw">int</span> door;

    Car2()             { <span class="hl-kw">this</span>(<span class="hl-str">"white"</span>, <span class="hl-str">"auto"</span>, <span class="hl-num">4</span>); }  <span class="hl-com">// 옵션이 없으면 흰색·자동·4도어</span>
    Car2(String color) { <span class="hl-kw">this</span>(color, <span class="hl-str">"auto"</span>, <span class="hl-num">4</span>); }
    Car2(String color, String gearType, <span class="hl-kw">int</span> door) {
        <span class="hl-kw">this</span>.color = color;          <span class="hl-com">// this.color는 인스턴스 변수, color는 매개변수(지역변수)</span>
        <span class="hl-kw">this</span>.gearType = gearType;
        <span class="hl-kw">this</span>.door = door;
    }
    <span class="hl-com">// Car2(String color) { door = 5; Car2(color, "auto", 4); }</span>
    <span class="hl-com">// 에러 1: 첫 줄이 아님, 에러 2: Car2 대신 this를 써야 함</span>
}</code></pre>
<ul><li><p>같은 클래스의 생성자는 서로 관계가 깊으므로 서로 호출하게 하면 중복이 줄고 수정할 곳도 줄어 유지보수가 쉬워짐</p>
</li>
<li><p><strong>this</strong>: 인스턴스 자신을 가리키는 참조변수(인스턴스의 주소 저장). 생성자를 포함한 모든 인스턴스 메서드에 지역변수로 숨겨져 있음</p>
</li>
<li><p>매개변수 이름을 c, g처럼 다르게 짓는 것보다 인스턴스 변수와 같은 이름을 쓰고 <code>this</code>로 구별하는 것이 의미가 더 명확</p>
</li>
<li><p>static 메서드에서는 this를 쓸 수 없음 (호출 시점에 인스턴스가 없을 수 있으므로)</p>
</li>
</ul>
<div class="tw"><table><thead><tr><th>구분</th><th>정체</th><th>용도</th></tr>
</thead>
<tbody><tr><td><code>this</code></td><td>참조변수</td><td>인스턴스 자신을 가리킴. 인스턴스 변수와 지역변수 구별</td></tr>
<tr><td><code>this()</code>, <code>this(매개변수)</code></td><td>생성자</td><td>같은 클래스의 다른 생성자를 호출</td></tr>
</tbody>
</table>
</div>
<h3 id="j-51">5.5 생성자를 이용한 인스턴스의 복사</h3>
<ul><li><p>같은 클래스의 인스턴스끼리 메서드와 클래스 변수는 같으므로, 인스턴스의 차이는 인스턴스 변수의 값뿐. 그래서 인스턴스 변수만 복사하면 같은 상태의 인스턴스를 만들 수 있음</p>
</li>
<li><p>기존 생성자를 최대한 활용해 <code>this(...)</code>로 작성하는 것이 바람직</p>
</li>
<li><p>복사본은 별도의 메모리에 있는 독립된 인스턴스이므로 원본을 바꿔도 영향 없음 (c1.door = 100으로 바꿔도 c2.door는 4)</p>
</li>
<li><p>Java API의 많은 클래스가 복사용 생성자를 제공하며, Object의 <code>clone()</code>으로도 복사 가능</p>
</li>
</ul>
<pre><code><span class="hl-kw">class</span> Car3 {
    String color; String gearType; <span class="hl-kw">int</span> door;

    Car3() { <span class="hl-kw">this</span>(<span class="hl-str">"white"</span>, <span class="hl-str">"auto"</span>, <span class="hl-num">4</span>); }
    Car3(Car3 c) { <span class="hl-kw">this</span>(c.color, c.gearType, c.door); }   <span class="hl-com">// 인스턴스 복사용 생성자</span>
    Car3(String color, String gearType, <span class="hl-kw">int</span> door) {
        <span class="hl-kw">this</span>.color = color; <span class="hl-kw">this</span>.gearType = gearType; <span class="hl-kw">this</span>.door = door;
    }
}
<span class="hl-kw">class</span> CarEx3 {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        Car3 c1 = <span class="hl-kw">new</span> Car3();
        Car3 c2 = <span class="hl-kw">new</span> Car3(c1);   <span class="hl-com">// c1의 복사본</span>
        c1.door = <span class="hl-num">100</span>;            <span class="hl-com">// c2.door는 그대로 4</span>
    }
}</code></pre>
<p>인스턴스를 생성할 때는 두 가지를 결정합니다. ① 어떤 클래스의 인스턴스를 만들 것인가 ② 그 클래스의 어떤 생성자로 만들 것인가</p>
<h2 id="j-52">6. 변수의 초기화</h2>
<h3 id="j-53">6.1 변수의 초기화</h3>
<p>변수를 선언하고 처음으로 값을 저장하는 것이 초기화입니다. 가능하면 선언과 동시에 적절한 값으로 초기화하는 것이 좋습니다.</p>
<ul><li><p><strong>멤버변수(클래스 변수·인스턴스 변수)와 배열의 초기화는 선택, 지역변수의 초기화는 필수</strong>. 멤버변수는 타입의 기본값으로 자동 초기화됨</p>
</li>
<li><p>멤버변수는 초기화가 필수가 아니라서 타입 추론(<code>var</code>)을 쓸 수 없음</p>
</li>
</ul>
<pre><code><span class="hl-kw">class</span> InitTest {
    <span class="hl-kw">int</span> x;          <span class="hl-com">// 인스턴스 변수: 기본값 0으로 자동 초기화</span>
    <span class="hl-kw">int</span> y = x;      <span class="hl-com">// OK: y도 0</span>

    <span class="hl-kw">void</span> method1() {
        <span class="hl-kw">int</span> i;      <span class="hl-com">// 지역 변수: 자동 초기화 안 됨</span>
        <span class="hl-com">// int j = i;  // 에러: 초기화하지 않은 지역 변수 사용</span>
    }
}</code></pre>
<div class="tw"><table><thead><tr><th>선언 예</th><th>설명</th></tr>
</thead>
<tbody><tr><td><code>int i = 10, j = 10;</code></td><td>같은 타입은 콤마로 함께 선언·초기화 가능</td></tr>
<tr><td><code>int i = 10, long j = 0;</code></td><td>에러: 타입이 다른 변수는 함께 선언 불가</td></tr>
<tr><td><code>int i = 10; int j = i;</code></td><td>i의 값(10)으로 j를 초기화</td></tr>
<tr><td><code>int j = i; int i = 10;</code></td><td>에러: 선언되기 전에 i를 사용</td></tr>
</tbody>
</table>
</div>
<p>멤버변수의 초기화 방법은 세 가지입니다.</p>
<ol><li><p>명시적 초기화(explicit initialization)</p>
</li>
<li><p>생성자(constructor)</p>
</li>
<li><p>초기화 블럭(initialization block): 인스턴스 초기화 블럭은 인스턴스 변수, 클래스 초기화 블럭은 클래스 변수를 초기화</p>
</li>
</ol>
<h3 id="j-54">6.2 명시적 초기화(explicit initialization)</h3>
<ul><li><p>변수를 선언과 동시에 초기화하는 것. 가장 기본적이고 간단하므로 가장 먼저 고려</p>
</li>
<li><p>복잡한 초기화가 필요하면 초기화 블럭이나 생성자를 사용</p>
</li>
</ul>
<pre><code><span class="hl-kw">class</span> Car {
    <span class="hl-kw">int</span> door = <span class="hl-num">4</span>;              <span class="hl-com">// 기본형 변수의 명시적 초기화</span>
    Engine e = <span class="hl-kw">new</span> Engine();   <span class="hl-com">// 참조형 변수의 명시적 초기화</span>
}
<span class="hl-kw">class</span> Engine { }</code></pre>
<h3 id="j-55">6.3 초기화 블럭(initialization block)</h3>
<div class="tw"><table><thead><tr><th>종류</th><th>작성법</th><th>용도</th><th>수행 시기</th></tr>
</thead>
<tbody><tr><td>클래스 초기화 블럭</td><td><code>static { }</code></td><td>클래스 변수의 복잡한 초기화</td><td>클래스가 처음 로딩될 때 한 번</td></tr>
<tr><td>인스턴스 초기화 블럭</td><td><code>{ }</code></td><td>인스턴스 변수의 복잡한 초기화, 모든 생성자의 공통 코드</td><td>인스턴스를 만들 때마다, 생성자보다 먼저</td></tr>
</tbody>
</table>
</div>
<ul><li><p>초기화 블럭 안에는 조건문, 반복문, 예외처리 구문 등을 자유롭게 사용 가능</p>
</li>
<li><p>인스턴스 변수의 초기화는 주로 생성자로 하고, 인스턴스 초기화 블럭은 모든 생성자에 공통으로 들어갈 코드를 묶는 데 사용 → 중복을 없애 코드의 신뢰성이 높아지고 오류 가능성이 줄어듦</p>
</li>
</ul>
<pre><code><span class="hl-kw">class</span> Car {
    <span class="hl-kw">static</span> <span class="hl-kw">int</span> count = <span class="hl-num">0</span>;
    <span class="hl-kw">int</span> serialNo;
    String color, gearType;

    {                             <span class="hl-com">// 인스턴스 초기화 블럭: 모든 생성자의 공통 코드</span>
        count++;
        serialNo = count;
    }
    Car() { color = <span class="hl-str">"White"</span>; gearType = <span class="hl-str">"Auto"</span>; }
    Car(String color, String gearType) {
        <span class="hl-kw">this</span>.color = color;
        <span class="hl-kw">this</span>.gearType = gearType;
    }
}

<span class="hl-kw">class</span> BlockEx {
    <span class="hl-kw">static</span> { System.out.println(<span class="hl-str">"static { }"</span>); }   <span class="hl-com">// 클래스 초기화 블럭</span>
    { System.out.println(<span class="hl-str">"{ }"</span>); }                 <span class="hl-com">// 인스턴스 초기화 블럭</span>
    <span class="hl-kw">public</span> BlockEx() { System.out.println(<span class="hl-str">"생성자"</span>); }

    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        <span class="hl-kw">new</span> BlockEx();   <span class="hl-com">// 출력: static { } → { } → 생성자</span>
        <span class="hl-kw">new</span> BlockEx();   <span class="hl-com">// 출력: { } → 생성자 (클래스 블럭은 다시 안 됨)</span>
    }
}</code></pre>
<ul><li><p>클래스 초기화 블럭 활용 예: static 배열을 난수로 채우는 것처럼 명시적 초기화 한 줄로는 할 수 없는 작업</p>
</li>
</ul>
<h3 id="j-56">6.4 멤버변수의 초기화 시기와 순서</h3>
<div class="tw"><table><thead><tr><th>대상</th><th>초기화 시점</th><th>초기화 순서</th></tr>
</thead>
<tbody><tr><td>클래스 변수</td><td>클래스가 처음 로딩될 때 단 한 번</td><td>기본값 → 명시적 초기화 → 클래스 초기화 블럭</td></tr>
<tr><td>인스턴스 변수</td><td>인스턴스가 생성될 때마다</td><td>기본값 → 명시적 초기화 → 인스턴스 초기화 블럭 → 생성자</td></tr>
</tbody>
</table>
</div>
<ul><li><p><strong>클래스 변수는 항상 인스턴스 변수보다 먼저 생성되고 초기화됨</strong></p>
</li>
<li><p>클래스의 로딩 시기는 JVM에 따라 다를 수 있음 (필요할 때 로딩하거나, 프로그램 시작 시 미리 로딩)</p>
</li>
</ul>
<pre><code><span class="hl-kw">class</span> InitTest {
    <span class="hl-kw">static</span> <span class="hl-kw">int</span> cv = <span class="hl-num">1</span>;       <span class="hl-com">// 명시적 초기화</span>
    <span class="hl-kw">int</span> iv = <span class="hl-num">1</span>;
    <span class="hl-kw">static</span> { cv = <span class="hl-num">2</span>; }       <span class="hl-com">// 클래스 초기화 블럭</span>
    { iv = <span class="hl-num">2</span>; }              <span class="hl-com">// 인스턴스 초기화 블럭</span>
    InitTest() { iv = <span class="hl-num">3</span>; }   <span class="hl-com">// 생성자</span>
}</code></pre>
<div class="tw"><table><thead><tr><th>단계</th><th>수행 내용</th><th>cv</th><th>iv</th></tr>
</thead>
<tbody><tr><td>1</td><td>cv가 메서드 영역에 생성, 기본값</td><td>0</td><td>-</td></tr>
<tr><td>2</td><td>cv 명시적 초기화</td><td>1</td><td>-</td></tr>
<tr><td>3</td><td>클래스 초기화 블럭</td><td>2</td><td>-</td></tr>
<tr><td>4</td><td><code>new InitTest()</code>로 iv가 힙에 생성, 기본값</td><td>2</td><td>0</td></tr>
<tr><td>5</td><td>iv 명시적 초기화</td><td>2</td><td>1</td></tr>
<tr><td>6</td><td>인스턴스 초기화 블럭</td><td>2</td><td>2</td></tr>
<tr><td>7</td><td>생성자</td><td>2</td><td>3</td></tr>
</tbody>
</table>
</div>
<ul><li><p><strong>활용 예 1 (제품 일련번호)</strong>: <code>static int count</code>와 인스턴스 변수 <code>serialNo</code>를 두고, 인스턴스 초기화 블럭에서 <code>++count; serialNo = count;</code> → 제품마다 1, 2, 3… 번호가 붙음. count를 인스턴스 변수로 만들면 매번 0으로 초기화되어 모두 1이 됨</p>
</li>
<li><p><strong>활용 예 2 (문서 이름)</strong>: 이름 없이 만들면 <code>this(&quot;제목없음&quot; + ++count)</code>로 ‘제목없음1’, ‘제목없음2’…를 자동으로 붙임</p>
</li>
</ul>
<h2 id="j-57">심화: static</h2>
<p><code>static</code>은 “클래스의, 공통적인”이라는 뜻으로, 인스턴스가 아니라 클래스에 속하는 멤버를 만듭니다. 클래스가 메모리에 로딩될 때 한 번 생기고, 인스턴스를 만들지 않아도 사용할 수 있습니다.</p>
<div class="tw"><table><thead><tr><th>구분</th><th>static 멤버 (클래스 멤버)</th><th>인스턴스 멤버</th></tr>
</thead>
<tbody><tr><td>소속</td><td>클래스</td><td>각 인스턴스</td></tr>
<tr><td>생성 시기</td><td>클래스 로딩 시 1번</td><td><code>new</code>로 인스턴스를 만들 때마다</td></tr>
<tr><td>저장 위치</td><td>Method Area</td><td>Heap</td></tr>
<tr><td>개수</td><td>하나를 모든 인스턴스가 공유</td><td>인스턴스마다 따로</td></tr>
<tr><td>사용법</td><td><code>클래스이름.멤버</code> (예: <code>Card.width</code>, <code>Math.random()</code>)</td><td><code>참조변수.멤버</code></td></tr>
</tbody>
</table>
</div>
<p><strong>static 변수 (클래스 변수)</strong>: 모든 인스턴스가 같은 값을 가져야 하는 속성에 씁니다. 하나를 바꾸면 모든 인스턴스에 반영됩니다.</p>
<pre><code><span class="hl-kw">class</span> Card {
    String kind;             <span class="hl-com">// 인스턴스 변수: 카드마다 다름</span>
    <span class="hl-kw">int</span> number;
    <span class="hl-kw">static</span> <span class="hl-kw">int</span> width = <span class="hl-num">100</span>;  <span class="hl-com">// 클래스 변수: 모든 카드가 공유</span>
    <span class="hl-kw">static</span> <span class="hl-kw">int</span> height = <span class="hl-num">250</span>;
}

Card.width = <span class="hl-num">50</span>;             <span class="hl-com">// 인스턴스 없이 사용, 모든 카드의 폭이 50으로</span></code></pre>
<p><strong>static 메서드 (클래스 메서드)</strong>: 인스턴스 변수를 쓰지 않는 메서드는 static으로 만듭니다. 호출할 때 인스턴스가 필요 없고 조금 더 빠릅니다.</p>
<pre><code><span class="hl-kw">class</span> MyMath {
    <span class="hl-kw">long</span> a, b;
    <span class="hl-kw">long</span> add()                     { <span class="hl-kw">return</span> a + b; }  <span class="hl-com">// 인스턴스 변수 사용 → 인스턴스 메서드</span>
    <span class="hl-kw">static</span> <span class="hl-kw">long</span> add(<span class="hl-kw">long</span> a, <span class="hl-kw">long</span> b) { <span class="hl-kw">return</span> a + b; }  <span class="hl-com">// 매개변수만 사용 → static 메서드</span>
}

MyMath.add(<span class="hl-num">200L</span>, <span class="hl-num">100L</span>);            <span class="hl-com">// 인스턴스 없이 호출</span></code></pre>
<p><strong>static과 인스턴스 멤버 간의 참조 규칙</strong>: static 멤버는 항상 존재하지만, 인스턴스 멤버는 없을 수도 있기 때문입니다.</p>
<div class="tw"><table><thead><tr><th>어디에서 → 무엇을</th><th>static 멤버</th><th>인스턴스 멤버</th></tr>
</thead>
<tbody><tr><td>static 메서드에서</td><td>바로 사용 가능</td><td>불가 (객체를 만든 뒤 <code>참조변수.멤버</code>로만)</td></tr>
<tr><td>인스턴스 메서드에서</td><td>바로 사용 가능</td><td>바로 사용 가능</td></tr>
</tbody>
</table>
</div>
<pre><code><span class="hl-kw">class</span> MemberCall {
    <span class="hl-kw">int</span> iv = <span class="hl-num">10</span>;
    <span class="hl-kw">static</span> <span class="hl-kw">int</span> cv = <span class="hl-num">20</span>;

    <span class="hl-kw">static</span> <span class="hl-kw">void</span> staticMethod() {
        System.out.println(cv);   <span class="hl-com">// OK</span>
        <span class="hl-com">// System.out.println(iv); // 에러: 인스턴스가 없을 수 있음</span>
        <span class="hl-com">// this.iv;                // 에러: static 메서드에는 this가 없음</span>
        MemberCall m = <span class="hl-kw">new</span> MemberCall();
        System.out.println(m.iv);  <span class="hl-com">// OK: 객체를 만든 뒤 사용</span>
    }
}</code></pre>
<ul><li><p><code>main</code> 메서드가 static인 이유: JVM이 인스턴스를 만들지 않고 바로 호출할 수 있어야 하기 때문. 그래서 main에서 같은 클래스의 인스턴스 메서드를 바로 부르면 에러</p>
</li>
<li><p><strong>static 초기화 블럭</strong> <code>static { }</code>: 클래스 변수의 복잡한 초기화에 사용. 클래스 로딩 시 1번만 실행되며 인스턴스 초기화보다 항상 먼저</p>
</li>
<li><p><strong>활용 예</strong>: 인스턴스 개수 세기(<code>static int count</code>로 일련번호 부여), 상수(<code>static final double PI</code>), 유틸 메서드(<code>Math</code>, <code>Arrays</code>)</p>
</li>
<li><p>대상별 의미 (7장 제어자): 멤버변수 → 모든 인스턴스가 공유, 메서드 → 인스턴스 없이 호출, 초기화 블럭 → 클래스 로딩 시 실행. 지역변수에는 static을 붙일 수 없음</p>
</li>
<li><p>static 메서드는 오버라이딩되지 않음(자손에 같은 이름으로 정의해도 각자 별개의 메서드)</p>
</li>
<li><p>같이 쓸 수 없는 조합: <code>abstract</code>와 <code>static</code>을 함께 붙일 수 없음(static 메서드는 구현부가 있어야 함)</p>
</li>
</ul>
<h1 id="j-ch-7">7장. 객체지향 프로그래밍 II (목차 기반)</h1>
<p>7장은 상속·다형성·추상화로 클래스 간의 관계를 설계하는 방법을 다룹니다. 샘플에 본문이 없어 목차 순서대로 표준 자바 개념을 정리했습니다.</p>
<h2 id="j-58">1. 상속(inheritance)</h2>
<ul><li><p>기존 클래스를 재사용해 새 클래스를 작성: <code>class Child extends Parent { }</code>. 조상(부모) 클래스와 자손(자식) 클래스</p>
</li>
<li><p>자손은 조상의 <strong>모든 멤버를 상속</strong>받음. 단, <strong>생성자와 초기화 블럭은 상속되지 않음</strong>. private 멤버는 상속은 되지만 자손에서 직접 접근 불가</p>
</li>
<li><p>자손의 멤버 개수는 조상보다 항상 같거나 많음(확장, extends). 조상의 변경은 자손에 영향을 주지만 자손의 변경은 조상에 영향 없음</p>
</li>
<li><p>자손 인스턴스를 만들면 조상의 멤버와 자손의 멤버가 합쳐진 하나의 인스턴스가 생성됨</p>
</li>
</ul>
<p><strong>클래스 간의 관계</strong>:</p>
<div class="tw"><table><thead><tr><th>관계</th><th>판단 문장</th><th>구현</th><th>예</th></tr>
</thead>
<tbody><tr><td>상속</td><td>~은 ~이다 (is-a)</td><td><code>extends</code></td><td>SportsCar는 Car이다</td></tr>
<tr><td>포함</td><td>~은 ~을 가지고 있다 (has-a)</td><td>다른 클래스를 멤버변수로 선언</td><td>Circle은 Point(중심점)를 가지고 있다</td></tr>
</tbody>
</table>
</div>
<ul><li><p>대부분의 관계는 포함이며, 상속은 is-a가 자연스러울 때만 사용</p>
</li>
<li><p><strong>단일상속</strong>: 자바는 조상 클래스를 하나만 가질 수 있음. 다중상속은 이름이 같은 멤버가 충돌하는 문제가 있기 때문. 여러 클래스의 기능이 필요하면 포함 관계로 해결</p>
</li>
<li><p><strong>Object 클래스</strong>: 모든 클래스의 조상. 다른 클래스를 상속받지 않으면 컴파일러가 <code>extends Object</code>를 자동 추가. 그래서 모든 클래스에서 <code>toString()</code>, <code>equals()</code> 등을 사용 가능</p>
</li>
</ul>
<h2 id="j-59">2. 오버라이딩(overriding)</h2>
<p>조상으로부터 상속받은 메서드의 내용을 자손에 맞게 변경하는 것입니다 (예: Point의 <code>getLocation()</code>을 Point3D에서 z 좌표까지 반환하도록 재정의).</p>
<p>조건:</p>
<ol><li><p>선언부(이름, 매개변수, 반환타입)가 조상과 같아야 함</p>
</li>
<li><p>접근 제어자를 조상보다 좁은 범위로 바꿀 수 없음 (조상이 protected면 자손은 protected나 public만)</p>
</li>
<li><p>조상보다 많은 예외를 선언할 수 없음</p>
</li>
<li><p>인스턴스 메서드를 static으로, 또는 그 반대로 바꿀 수 없음</p>
</li>
</ol>
<div class="tw"><table><thead><tr><th>비교</th><th>오버로딩</th><th>오버라이딩</th></tr>
</thead>
<tbody><tr><td>의미</td><td>기존에 없는 새 메서드를 정의(new)</td><td>상속받은 메서드의 내용을 변경(change, modify)</td></tr>
<tr><td>조건</td><td>이름은 같고 매개변수는 다름</td><td>선언부가 완전히 같음</td></tr>
<tr><td>범위</td><td>같은 클래스 안</td><td>조상과 자손 사이</td></tr>
</tbody>
</table>
</div>
<ul><li><p><strong>super</strong>: 자손에서 조상의 멤버를 가리키는 참조변수. 조상과 자손의 멤버 이름이 같을 때 구별 (<code>super.x</code> vs <code>this.x</code>). 오버라이딩한 메서드에서 <code>super.getLocation()</code>으로 조상 코드를 재사용하고 내용만 덧붙이는 식으로 많이 씁. static 메서드에서는 사용 불가</p>
</li>
<li><p><strong>super()</strong>: 조상의 생성자를 호출. 자손 인스턴스에는 조상의 멤버도 포함되므로 조상 멤버는 조상 생성자가 초기화하도록 함</p>
<ul><li><p>Object를 제외한 모든 클래스의 생성자 첫 줄에는 <code>this()</code> 또는 <code>super()</code>가 있어야 하며, 없으면 컴파일러가 <code>super();</code>를 자동 삽입</p>
</li>
<li><p>조상에 기본 생성자가 없는데 자손 생성자에서 <code>super(x, y)</code>를 명시하지 않으면 컴파일 에러</p>
</li>
<li><p>생성자 호출은 자손 → 조상 → … → Object 순으로 올라가고, 실행은 Object부터 자손 순으로 끝남</p>
</li>
</ul>
</li>
</ul>
<h2 id="j-60">3. package와 import</h2>
<ul><li><p><strong>패키지</strong>: 서로 관련된 클래스의 묶음. 클래스의 실제 이름은 패키지명을 포함한 이름 (String의 실제 이름은 <code>java.lang.String</code>). 같은 이름의 클래스도 패키지가 다르면 공존 가능</p>
</li>
<li><p>패키지는 물리적으로 디렉터리이며, <code>.</code>으로 계층 구분 (<code>java.lang</code> → java/lang 폴더)</p>
</li>
<li><p><strong>선언</strong>: <code>package com.codechobo.book;</code> 소스파일에서 주석·공백을 제외한 <strong>첫 번째 문장</strong>이며 파일당 하나만. 소문자로 작성하는 것이 관례. 선언하지 않으면 ‘이름 없는 패키지’에 속함</p>
</li>
<li><p><strong>import문</strong>: 다른 패키지의 클래스를 패키지명 없이 쓸 수 있게 함. package문과 클래스 선언 사이에 작성</p>
<ul><li><p><code>import java.util.Scanner;</code> 또는 <code>import java.util.*;</code> (<code>*</code>는 하위 패키지까지 포함하지 않음. 성능 차이는 없음)</p>
</li>
<li><p><code>java.lang</code> 패키지는 자동으로 import됨 (String, System, Math 등)</p>
</li>
</ul>
</li>
<li><p><strong>static import문</strong>: static 멤버를 클래스 이름 없이 사용. <code>import static java.lang.Math.random;</code> → <code>random()</code>, <code>import static java.lang.System.out;</code> → <code>out.println()</code></p>
</li>
</ul>
<h2 id="j-61">4. 제어자(modifier)</h2>
<p>클래스, 변수, 메서드의 선언부에 붙어 부가적인 의미를 더합니다. 접근 제어자(public, protected, default, private)와 그 외(static, final, abstract 등)로 나뉩니다. 하나의 대상에 여러 제어자를 붙일 수 있지만 <strong>접근 제어자는 하나만</strong> 가능합니다.</p>
<div class="tw"><table><thead><tr><th>제어자</th><th>대상</th><th>의미</th></tr>
</thead>
<tbody><tr><td>static</td><td>멤버변수, 메서드, 초기화 블럭</td><td>클래스의, 공통적인 (6장 ‘심화: static’ 참고)</td></tr>
<tr><td>final</td><td>클래스</td><td>확장(상속)할 수 없는 클래스 (예: String, Math)</td></tr>
<tr><td>final</td><td>메서드</td><td>오버라이딩할 수 없는 메서드</td></tr>
<tr><td>final</td><td>멤버변수, 지역변수</td><td>값을 변경할 수 없는 상수</td></tr>
<tr><td>abstract</td><td>클래스</td><td>추상 메서드가 있는 미완성 클래스. 인스턴스 생성 불가</td></tr>
<tr><td>abstract</td><td>메서드</td><td>선언부만 있고 구현부가 없는 추상 메서드</td></tr>
</tbody>
</table>
</div>
<ul><li><p>final 인스턴스 변수는 선언 시 초기화하지 않고 <strong>생성자에서 초기화</strong>할 수 있음 → 인스턴스마다 다른 값을 갖는 상수 (카드의 무늬·숫자)</p>
</li>
</ul>
<p><strong>접근 제어자</strong>:</p>
<div class="tw"><table><thead><tr><th>제어자</th><th>같은 클래스</th><th>같은 패키지</th><th>자손 클래스</th><th>전체</th></tr>
</thead>
<tbody><tr><td>public</td><td>O</td><td>O</td><td>O</td><td>O</td></tr>
<tr><td>protected</td><td>O</td><td>O</td><td>O</td><td></td></tr>
<tr><td>(default)</td><td>O</td><td>O</td><td></td><td></td></tr>
<tr><td>private</td><td>O</td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div>
<ul><li><p>클래스에는 public과 (default)만, 멤버에는 4가지 모두 사용 가능</p>
</li>
<li><p><strong>캡슐화</strong>: 멤버변수는 private으로 감추고 public 메서드(getter/setter)로만 접근. setter에서 값의 유효성을 검사해 데이터를 보호하고, 내부 구현이 바뀌어도 외부에 영향을 주지 않음</p>
</li>
</ul>
<pre><code><span class="hl-kw">public</span> <span class="hl-kw">class</span> Time {
    <span class="hl-kw">private</span> <span class="hl-kw">int</span> hour;                     <span class="hl-com">// 외부에서 직접 접근 불가</span>
    <span class="hl-kw">public</span> <span class="hl-kw">int</span> getHour() { <span class="hl-kw">return</span> hour; }
    <span class="hl-kw">public</span> <span class="hl-kw">void</span> setHour(<span class="hl-kw">int</span> hour) {
        <span class="hl-kw">if</span> (hour &lt; <span class="hl-num">0</span> || hour &gt; <span class="hl-num">23</span>) <span class="hl-kw">return</span>; <span class="hl-com">// 유효성 검사</span>
        <span class="hl-kw">this</span>.hour = hour;
    }
}</code></pre>
<ul><li><p>생성자를 private으로 하면 외부에서 인스턴스를 만들 수 없으므로, public static 메서드로 인스턴스를 제공해 개수를 제한할 수 있음(싱글톤). 이런 클래스는 상속도 불가</p>
</li>
<li><p><strong>제어자 조합 규칙</strong>: ① static과 abstract는 함께 쓸 수 없음(static 메서드는 몸통이 있어야 함) ② 클래스에 abstract와 final 동시 사용 불가(상속을 전제로 하는 것과 상속 금지가 모순) ③ abstract 메서드는 private일 수 없음(자손이 구현해야 하므로) ④ private 메서드에 final은 불필요(어차피 오버라이딩 불가)</p>
</li>
</ul>
<h2 id="j-62">5. 다형성(polymorphism)</h2>
<p>조상 타입의 참조변수로 자손 타입의 인스턴스를 참조할 수 있는 것입니다. 하나의 참조변수로 여러 타입의 객체를 다룰 수 있게 됩니다.</p>
<pre><code>Tv t = <span class="hl-kw">new</span> SmartTv();       <span class="hl-com">// OK: 조상 타입 참조변수 → 자손 인스턴스</span>
<span class="hl-com">// SmartTv s = new Tv();    // 에러: 자손 타입 참조변수로 조상 인스턴스 참조 불가</span></code></pre>
<ul><li><p>참조변수의 타입이 <strong>사용할 수 있는 멤버의 개수</strong>를 결정. <code>t</code>는 SmartTv 인스턴스를 가리키지만 Tv의 멤버만 사용 가능</p>
</li>
<li><p>반대가 안 되는 이유: 자손 타입 참조변수는 실제 인스턴스에 없는 멤버를 사용하려 할 수 있기 때문</p>
</li>
<li><p><strong>참조변수의 형변환</strong>: 상속관계에 있는 클래스끼리만 가능. 자손 → 조상(<strong>업캐스팅</strong>)은 형변환 생략 가능, 조상 → 자손(<strong>다운캐스팅</strong>)은 명시적으로. 참조변수를 바꿀 뿐 인스턴스는 변하지 않음</p>
</li>
<li><p>형변환은 컴파일이 되더라도 실제 인스턴스 타입이 맞지 않으면 실행 중 ClassCastException → <strong>instanceof</strong>로 확인 (아래 ‘심화: instanceof’)</p>
</li>
<li><p><strong>참조변수와 인스턴스의 연결</strong>: 조상과 자손에 같은 이름의 멤버가 있을 때, <strong>메서드는 항상 실제 인스턴스(자손)의 것</strong>이 호출되고, <strong>멤버변수는 참조변수의 타입</strong>에 따라 달라짐</p>
</li>
<li><p><strong>매개변수의 다형성</strong>: <code>void buy(Product p)</code> 하나로 Tv, Computer, Audio 등 Product의 모든 자손을 처리. 제품이 늘어도 메서드를 추가할 필요 없음</p>
</li>
<li><p><strong>여러 종류의 객체를 배열로</strong>: <code>Product[] cart = new Product[10];</code>에 다양한 자손 인스턴스를 담아 한꺼번에 처리. 개수가 정해지지 않았으면 ArrayList 사용</p>
</li>
</ul>
<h2 id="j-63">심화: instanceof 연산자</h2>
<p><code>instanceof</code>는 참조변수가 실제로 가리키는 객체를 그 타입으로 형변환할 수 있는지 검사하는 연산자입니다. 형식은 <code>참조변수 instanceof 타입</code>이고 결과는 boolean입니다.</p>
<p><strong>왜 필요한가</strong>: 조상 타입 참조변수로는 자손의 멤버를 호출할 수 없어 다운캐스팅이 필요합니다. 실제 객체가 그 타입이 아니면 실행 중 <code>ClassCastException</code>이 나므로, 형변환 전에 검사합니다.</p>
<pre><code><span class="hl-kw">class</span> Car { <span class="hl-kw">void</span> drive() {} }
<span class="hl-kw">class</span> FireEngine <span class="hl-kw">extends</span> Car { <span class="hl-kw">void</span> water() {} }
<span class="hl-kw">class</span> Ambulance  <span class="hl-kw">extends</span> Car { <span class="hl-kw">void</span> siren() {} }

Car c = <span class="hl-kw">new</span> FireEngine();
Ambulance a = (Ambulance) c;     <span class="hl-com">// 컴파일 OK, 실행 시 ClassCastException</span>

<span class="hl-kw">if</span> (c <span class="hl-kw">instanceof</span> FireEngine) {   <span class="hl-com">// 검사 후 형변환</span>
    FireEngine fe = (FireEngine) c;
    fe.water();
}</code></pre>
<div class="tw"><table><thead><tr><th>상황</th><th>결과</th></tr>
</thead>
<tbody><tr><td>자기 타입, 조상 타입, 구현한 인터페이스</td><td>true (<code>fe instanceof Car</code>, <code>fe instanceof Object</code> 모두 true)</td></tr>
<tr><td>참조변수가 null</td><td>항상 false, 예외 없음 (따로 null 체크 불필요)</td></tr>
<tr><td>형변환이 아예 불가능한 타입 (String 변수 instanceof Integer)</td><td>컴파일 에러</td></tr>
</tbody>
</table>
</div>
<ul><li><p>정확히 같은 클래스인지 확인하려면 <code>getClass() == Car.class</code></p>
</li>
<li><p>연산자 우선순위는 대소비교 연산자(<code>&lt;</code>, <code>&gt;</code>)와 같음</p>
</li>
</ul>
<p><strong>패턴 매칭 (Java 16+)</strong>: 검사, 형변환, 변수 선언을 한 번에 합니다. 패턴 변수는 조건이 확실히 true인 곳에서만 쓸 수 있습니다.</p>
<pre><code><span class="hl-kw">if</span> (c <span class="hl-kw">instanceof</span> FireEngine fe) fe.water();           <span class="hl-com">// true일 때만 fe 생성</span>

<span class="hl-kw">if</span> (obj <span class="hl-kw">instanceof</span> String s &amp;&amp; s.length() &gt; <span class="hl-num">3</span>) {}     <span class="hl-com">// OK: &amp;&amp; 오른쪽</span>
<span class="hl-com">// if (obj instanceof String s || s.length() &gt; 3) {}  // 에러: || 오른쪽</span>

<span class="hl-kw">if</span> (!(obj <span class="hl-kw">instanceof</span> String s)) <span class="hl-kw">return</span>;
System.out.println(s.length());                       <span class="hl-com">// OK: 여기서는 항상 String</span></code></pre>
<p><strong>switch 패턴 매칭 (Java 21)</strong>: 여러 타입 분기를 더 간결하게 씁니다.</p>
<pre><code><span class="hl-kw">switch</span> (c) {
    <span class="hl-kw">case</span> FireEngine fe -&gt; fe.water();
    <span class="hl-kw">case</span> Ambulance a   -&gt; a.siren();
    <span class="hl-kw">default</span>            -&gt; c.drive();
}</code></pre>
<p>instanceof가 자주 필요하다면 설계를 다시 볼 신호입니다. 각 자손이 같은 메서드를 오버라이딩하면 타입 검사 없이 <code>c.work()</code> 한 줄로 처리할 수 있습니다.</p>
<h2 id="j-64">6. 추상 클래스(abstract class)</h2>
<ul><li><p>미완성 설계도. 추상 메서드를 포함하며 <strong>인스턴스를 생성할 수 없고</strong> 상속을 통해 자손이 완성</p>
</li>
<li><p>생성자, 멤버변수, 일반 메서드도 가질 수 있음. 추상 메서드가 없어도 abstract를 붙여 인스턴스 생성을 막을 수 있음</p>
</li>
<li><p><strong>추상 메서드</strong>: <code>abstract void play(int pos);</code> 선언부만 있고 구현부 <code>{}</code>가 없음. 상속받는 클래스마다 내용이 달라질 수 있는 메서드에 사용</p>
</li>
<li><p>자손은 조상의 추상 메서드를 <strong>모두 구현</strong>해야 하며, 하나라도 구현하지 않으면 자손도 abstract를 붙여야 함</p>
</li>
<li><p><strong>작성 방법</strong>: 여러 클래스의 공통 부분을 뽑아 추상 클래스로 만들고(추상화), 각 클래스가 이를 상속(구체화). 예: Marine, Tank, Dropship의 공통점 → <code>abstract class Unit { int x, y; abstract void move(int x, int y); void stop() { } }</code></p>
</li>
</ul>
<h2 id="j-65">7. 인터페이스(interface)</h2>
<ul><li><p>추상 클래스보다 추상화 정도가 높은 ‘기본 설계도’. 원래 추상 메서드와 상수만 가질 수 있음</p>
</li>
<li><p>멤버 규칙: 모든 멤버변수는 <code>public static final</code>, 모든 추상 메서드는 <code>public abstract</code>이며 생략하면 컴파일러가 자동 추가</p>
</li>
<li><p><strong>인터페이스의 상속</strong>: 인터페이스는 인터페이스로부터만 상속받을 수 있고, 다중 상속 가능 (<code>interface Fightable extends Movable, Attackable { }</code>)</p>
</li>
<li><p><strong>구현</strong>: <code>class Fighter implements Fightable { }</code>. 상속과 동시에 가능 (<code>class Fighter extends Unit implements Fightable</code>). 일부만 구현하면 abstract 클래스로 선언. 구현 메서드는 public이어야 함(접근 제어자를 좁힐 수 없으므로)</p>
</li>
<li><p><strong>다중 상속 효과</strong>: 클래스는 여러 인터페이스를 동시에 구현할 수 있음. 단, 실제로 다중 상속을 위해 쓰는 경우는 드물고, 한쪽은 상속하고 다른 쪽은 포함하는 방식을 주로 사용</p>
</li>
<li><p><strong>인터페이스의 다형성</strong>: 인터페이스 타입 참조변수로 구현 클래스의 인스턴스를 참조 가능 (<code>Fightable f = new Fighter();</code>). 매개변수 타입이 인터페이스면 구현한 클래스의 인스턴스를 넘겨야 하고, 반환타입이 인터페이스면 구현 클래스의 인스턴스를 반환</p>
</li>
<li><p><strong>장점</strong>: ① 개발 시간 단축(선언부만 알면 양쪽이 동시에 개발) ② 표준화(JDBC처럼) ③ 관계없는 클래스에 공통 타입을 부여(예: SCV·Tank·Dropship에 Repairable) ④ 독립적인 프로그래밍(선언과 구현을 분리해 한 쪽 변경이 다른 쪽에 영향을 주지 않음)</p>
</li>
<li><p><strong>인터페이스의 이해</strong>: 클래스 A가 B를 직접 사용하면(직접적 관계) B가 바뀔 때 A도 바꿔야 함. 인터페이스 I를 사이에 두면(간접적 관계) A는 I만 알면 되고 실제 구현 클래스가 무엇인지 몰라도 됨 → 결합도를 낮춤</p>
</li>
<li><p><strong>디폴트·static·private 메서드</strong>: JDK 8부터 default 메서드(몸통 있는 메서드, 기존 구현 클래스를 고치지 않고 새 메서드 추가 가능)와 static 메서드, JDK 9부터 private 메서드를 추가할 수 있음. 여러 인터페이스의 디폴트 메서드가 충돌하면 구현 클래스에서 오버라이딩해야 하고, 디폴트 메서드와 조상 클래스 메서드가 충돌하면 조상 클래스 메서드가 우선</p>
</li>
</ul>
<h2 id="j-66">8. 내부 클래스(inner class)</h2>
<p>클래스 안에 선언된 클래스로, 두 클래스가 긴밀한 관계일 때 씁니다. 외부 클래스의 멤버에 쉽게 접근할 수 있고, 외부에 불필요한 클래스를 감춰 코드 복잡성을 줄입니다(캡슐화).</p>
<div class="tw"><table><thead><tr><th>종류</th><th>선언 위치</th><th>특징</th></tr>
</thead>
<tbody><tr><td>인스턴스 클래스</td><td>외부 클래스의 멤버변수 위치</td><td>외부 클래스의 인스턴스 멤버처럼 다루어짐</td></tr>
<tr><td>스태틱 클래스</td><td>외부 클래스의 멤버변수 위치, static</td><td>외부 클래스의 static 멤버처럼 다루어짐</td></tr>
<tr><td>지역 클래스</td><td>메서드나 초기화 블럭 안</td><td>선언된 영역 내부에서만 사용</td></tr>
<tr><td>익명 클래스</td><td>선언과 생성을 동시에</td><td>이름이 없고 한 번만 사용</td></tr>
</tbody>
</table>
</div>
<ul><li><p>내부 클래스에도 접근 제어자(private, protected 등)를 붙일 수 있음. static 클래스만 static 멤버를 가질 수 있었으나 JDK 16부터는 다른 내부 클래스도 가능</p>
</li>
<li><p>지역 클래스에서는 메서드의 지역변수 중 final이거나 값이 바뀌지 않는(effectively final) 변수만 사용 가능</p>
</li>
<li><p><strong>익명 클래스</strong>: <code>new 조상클래스이름() { 멤버 선언 }</code> 또는 <code>new 구현인터페이스이름() { 멤버 선언 }</code>. 하나의 클래스를 상속하거나 하나의 인터페이스만 구현 가능. 이벤트 처리처럼 한 번만 쓰는 클래스에 사용하며, 람다식(14장)으로 더 간단히 바꿀 수 있는 경우가 많음</p>
</li>
</ul>
<h1 id="j-ch-8">8장. 예외 처리 (목차 기반)</h1>
<p>예외 처리는 프로그램 실행 중 발생할 수 있는 예외에 대비해 코드를 작성하여, 프로그램이 비정상 종료되지 않고 정상 실행을 이어가게 하는 것입니다. 샘플에 본문이 없어 목차 순서대로 표준 자바 개념을 정리했습니다.</p>
<h2 id="j-67">한눈에 보기 (필기 정리)</h2>
<p>소프트웨어는 ‘명령어 + 데이터’이고, 에러는 이 SW가 제대로 동작하지 못하게 만드는 원인입니다. 에러는 발생 시점에 따라 세 가지로 나뉩니다.</p>
<div class="tw"><table><thead><tr><th>에러</th><th>언제</th><th>특징</th></tr>
</thead>
<tbody><tr><td>컴파일 에러</td><td>컴파일할 때</td><td>컴파일러가 <strong>체크</strong>해 주므로 실행 전에 <strong>예방</strong> 가능</td></tr>
<tr><td>런타임 에러</td><td><strong>프로그램 실행 중</strong></td><td>컴파일은 됐지만 실행 도중 발생. 예외 처리의 대상이며 가장 중요</td></tr>
<tr><td>논리적 에러</td><td>실행 중</td><td>에러 없이 실행되지만 의도와 다르게 동작</td></tr>
</tbody>
</table>
</div>
<p><strong>런타임 에러의 분류</strong></p>
<ul><li><p><strong>Error (심각)</strong>: 메모리 부족 등 코드로 <strong>예방·처리가 불가능</strong>한 오류 → 처리 ✗</p>
</li>
<li><p><strong>Exception (덜 심각)</strong>: 코드로 처리할 수 있는 오류 → 예외 처리 ○</p>
<ul><li><p><strong>필수 처리</strong>: Exception과 그 자손 (checked 예외). 처리하지 않으면 컴파일 에러</p>
</li>
<li><p><strong>선택 처리</strong>: RuntimeException과 그 자손 (unchecked 예외). 처리하지 않아도 컴파일됨</p>
</li>
</ul>
</li>
</ul>
<p><strong>예외를 다루는 세 가지 방법</strong></p>
<ol><li><p><strong>try-catch → 직접 처리</strong>: 예외가 발생한 메서드 안에서 해결 (1.3)</p>
</li>
<li><p><strong>예외 선언(throws) → 보고</strong>: 호출한 메서드에 예외를 알리고 떠넘김 (1.7)</p>
</li>
<li><p><strong>무시 or 은폐</strong>: catch블럭을 비워두어 예외를 잡기만 하고 아무것도 하지 않는 것 (<code>catch (Exception e) { }</code>). 예외가 발생했다는 사실 자체가 가려져 버그를 찾기 어려우므로 피해야 함. 불가피하게 쓸 때는 최소한 주석이나 로그를 남길 것</p>
</li>
</ol>
<p>①과 ②를 함께 쓰면(직접 처리한 뒤 다시 보고) <strong>예외 되던지기</strong>가 됩니다 (1.11).</p>
<p><strong>자주 만나는 RuntimeException과 예방법</strong></p>
<div class="tw"><table><thead><tr><th>예외</th><th>원인</th><th>예방법</th></tr>
</thead>
<tbody><tr><td>ArithmeticException</td><td>계산 에러 (정수를 0으로 나눔)</td><td>나누기 전에 0인지 검사</td></tr>
<tr><td>NullPointerException</td><td>null인 참조변수로 멤버 사용</td><td>사용 전 null 검사, 초기화 확인</td></tr>
<tr><td>ClassCastException</td><td>형변환할 수 없는 타입으로 형변환</td><td>instanceof로 확인(7장). **지네릭스(12장)**를 쓰면 형변환 자체가 줄어 간접적으로 예방</td></tr>
<tr><td>ArrayIndexOutOfBoundsException</td><td>배열 index 범위를 벗어남</td><td><code>arr.length</code>로 범위 확인. 길이가 자동으로 늘어나는 <strong>List(컬렉션 프레임워크)</strong> 사용</td></tr>
</tbody>
</table>
</div>
<p>RuntimeException은 대부분 프로그래머의 실수이므로, try-catch보다 <strong>코드를 올바르게 작성해 예방</strong>하는 것이 우선입니다.</p>
<p><strong>Q. 이 예외들을 catch의 매개변수로 쓰나요?</strong></p>
<p>쓸 수는 있지만, 실무에서는 잘 쓰지 않습니다. catch 괄호 안에는 <code>catch (예외클래스이름 참조변수)</code> 형식으로 잡고 싶은 예외의 클래스 이름을 쓰므로 문법상으로는 위 4개 모두 가능합니다.</p>
<pre><code><span class="hl-kw">class</span> CatchEx {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        <span class="hl-kw">try</span> {
            <span class="hl-kw">int</span>[] arr = <span class="hl-kw">new</span> <span class="hl-kw">int</span>[<span class="hl-num">3</span>];
            arr[<span class="hl-num">5</span>] = <span class="hl-num">10</span> / <span class="hl-num">0</span>;
        } <span class="hl-kw">catch</span> (ArithmeticException e) {             <span class="hl-com">// 문법상 OK</span>
            System.out.println(<span class="hl-str">"0으로 나눔"</span>);
        } <span class="hl-kw">catch</span> (ArrayIndexOutOfBoundsException e) {  <span class="hl-com">// 문법상 OK</span>
            System.out.println(<span class="hl-str">"배열 범위 초과"</span>);
        }
    }
}</code></pre>
<p>하지만 이 4개는 모두 RuntimeException의 자손, 즉 <strong>프로그래머의 실수</strong>에서 생기는 예외입니다. catch로 잡으면 버그를 고치는 대신 가리는 셈이 되므로, if문 검사(0인지, null인지, instanceof, length) 같은 코드로 미리 막는 것이 원칙입니다. 특히 <code>catch (NullPointerException e)</code>는 나쁜 습관으로 꼽힙니다.</p>
<div class="tw"><table><thead><tr><th>주로 catch로 잡는 예외</th><th>이유</th></tr>
</thead>
<tbody><tr><td>IOException, FileNotFoundException 등 checked 예외</td><td>파일이 없거나 네트워크가 끊기는 등 코드로 막을 수 없는 외부 요인. 처리가 필수</td></tr>
<tr><td>NumberFormatException</td><td>RuntimeException이지만 사용자가 숫자 대신 문자를 입력하는 것은 미리 막기 어려워서 <code>Integer.parseInt()</code>를 감싸서 자주 잡음</td></tr>
<tr><td>Exception</td><td>마지막 catch에 두어 예상하지 못한 모든 예외를 처리</td></tr>
</tbody>
</table>
</div>
<p>책의 예제에서 ArithmeticException 등을 catch하는 것은 try-catch의 동작을 보여주기 위해 예외를 쉽게 발생시키는 용도입니다.</p>
<h2 id="j-68">1.1 프로그램 오류</h2>
<div class="tw"><table><thead><tr><th>종류</th><th>발생 시점</th><th>예</th></tr>
</thead>
<tbody><tr><td>컴파일 에러</td><td>컴파일 시</td><td>문법 오류, 오타, 타입 불일치</td></tr>
<tr><td>런타임 에러</td><td>실행 시</td><td>0으로 나누기, 배열 범위 초과</td></tr>
<tr><td>논리적 에러</td><td>실행은 되지만 의도와 다르게 동작</td><td>창고 재고가 음수가 됨</td></tr>
</tbody>
</table>
</div>
<ul><li><p>런타임 에러는 다시 **에러(error)**와 **예외(exception)**로 나뉩니다.</p>
<ul><li><p>에러: OutOfMemoryError, StackOverflowError처럼 발생하면 복구할 수 없는 심각한 오류</p>
</li>
<li><p>예외: 코드로 수습할 수 있는 다소 미약한 오류</p>
</li>
</ul>
</li>
<li><p>예외가 처리되지 않으면 프로그램은 비정상 종료되고, JVM의 기본 예외 처리기가 예외 정보를 화면에 출력</p>
</li>
</ul>
<h2 id="j-69">1.2 예외 클래스의 계층구조</h2>
<p>모든 예외와 에러는 Throwable의 자손입니다. Object → Throwable → Error / Exception 순으로 이어집니다.</p>
<div class="tw"><table><thead><tr><th>구분</th><th>대표 클래스</th><th>원인</th><th>예외 처리</th></tr>
</thead>
<tbody><tr><td>Exception과 그 자손 (RuntimeException 제외)</td><td>IOException, FileNotFoundException, ClassNotFoundException, DataFormatException</td><td>사용자 실수 등 외적 요인 (파일이 없음, 클래스 이름 오타, 데이터 형식 오류)</td><td>필수 (<strong>checked 예외</strong>). 처리하지 않으면 컴파일 에러</td></tr>
<tr><td>RuntimeException과 그 자손</td><td>ArithmeticException, ArrayIndexOutOfBoundsException, NullPointerException, ClassCastException</td><td>프로그래머의 실수 (0으로 나눔, 배열 범위 초과, null 참조, 잘못된 형변환)</td><td>선택 (<strong>unchecked 예외</strong>). 코드를 제대로 작성해 예방</td></tr>
</tbody>
</table>
</div>
<h2 id="j-70">1.3 예외 처리하기 - try-catch문</h2>
<pre><code><span class="hl-kw">class</span> ExceptionEx1 {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        <span class="hl-kw">try</span> {
            <span class="hl-kw">int</span> result = <span class="hl-num">10</span> / <span class="hl-num">0</span>;                 <span class="hl-com">// 예외가 발생할 가능성이 있는 문장</span>
            System.out.println(result);
        } <span class="hl-kw">catch</span> (ArithmeticException ae) {       <span class="hl-com">// 해당 예외가 발생했을 때 실행</span>
            System.out.println(<span class="hl-str">"0으로 나눌 수 없습니다."</span>);
        } <span class="hl-kw">catch</span> (Exception e) {                  <span class="hl-com">// 그 외의 모든 예외</span>
            System.out.println(<span class="hl-str">"예외 발생"</span>);
        }
        System.out.println(<span class="hl-str">"프로그램 계속 실행"</span>);
    }
}</code></pre>
<ul><li><p>try블럭과 catch블럭은 문장이 하나라도 괄호 <code>{}</code>를 생략할 수 없음</p>
</li>
<li><p>catch블럭은 여러 개 둘 수 있으며, 발생한 예외와 일치하는 단 한 개의 catch블럭만 수행</p>
</li>
<li><p>catch블럭의 참조변수 이름은 그 블럭의 지역변수이므로 try블럭 밖의 변수와 이름이 겹치면 안 됨</p>
</li>
</ul>
<h2 id="j-71">1.4 try-catch문에서의 흐름</h2>
<div class="tw"><table><thead><tr><th>상황</th><th>흐름</th></tr>
</thead>
<tbody><tr><td>try블럭에서 예외가 발생하고 일치하는 catch가 있음</td><td>예외가 발생한 문장 이후의 try 문장은 건너뛰고 → 해당 catch블럭 수행 → try-catch문 다음 문장으로</td></tr>
<tr><td>일치하는 catch가 없음</td><td>예외가 처리되지 않아 프로그램 비정상 종료</td></tr>
<tr><td>try블럭에서 예외가 발생하지 않음</td><td>catch블럭을 건너뛰고 try-catch문 다음 문장으로</td></tr>
</tbody>
</table>
</div>
<h2 id="j-72">1.5 예외의 발생과 catch블럭</h2>
<ul><li><p>예외가 발생하면 해당 예외 클래스의 인스턴스가 만들어지고, 첫 번째 catch부터 차례로 <code>참조변수 instanceof 예외타입</code>을 검사해 true인 첫 catch블럭을 수행</p>
</li>
<li><p>따라서 <strong>자손 예외를 먼저, 조상 예외를 나중에</strong> 써야 함. <code>catch (Exception e)</code>를 맨 앞에 두면 뒤의 catch는 실행될 수 없어 컴파일 에러</p>
</li>
<li><p>예외 정보 확인: <code>e.getMessage()</code>(예외 메시지), <code>e.printStackTrace()</code>(호출스택 정보와 메시지 출력)</p>
</li>
<li><p><strong>멀티 catch블럭</strong> (JDK 7+): <code>catch (ExceptionA | ExceptionB e)</code>로 여러 예외를 하나의 블럭으로 처리. 두 예외가 조상-자손 관계면 컴파일 에러(조상만 쓰면 되므로). 참조변수 e로는 두 예외의 공통 조상 멤버만 사용 가능</p>
</li>
</ul>
<h2 id="j-73">1.6 예외 발생시키기</h2>
<p><code>throw</code> 키워드로 예외를 고의로 발생시킬 수 있습니다. ① new로 예외 객체를 만들고 ② throw로 던집니다.</p>
<pre><code><span class="hl-kw">class</span> ExceptionEx2 {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        <span class="hl-kw">try</span> {
            Exception e = <span class="hl-kw">new</span> Exception(<span class="hl-str">"고의로 발생시켰음"</span>);  <span class="hl-com">// 생성자에 메시지 전달</span>
            <span class="hl-kw">throw</span> e;                                         <span class="hl-com">// throw new Exception("...");으로 줄여 쓸 수 있음</span>
        } <span class="hl-kw">catch</span> (Exception e) {
            System.out.println(<span class="hl-str">"에러 메시지: "</span> + e.getMessage());
        }
    }
}</code></pre>
<ul><li><p>checked 예외(Exception)를 던지면 반드시 처리해야 컴파일되고, unchecked 예외(RuntimeException)는 처리하지 않아도 컴파일됨 (실행 시 비정상 종료)</p>
</li>
</ul>
<h2 id="j-74">1.7 메서드에 예외 선언하기</h2>
<ul><li><p>메서드 선언부에 <code>throws</code>로 발생할 수 있는 예외를 적어, 호출하는 쪽에 처리를 떠넘김: <code>void method() throws IOException, ClassNotFoundException { }</code></p>
</li>
<li><p>예외를 선언한다고 처리되는 것이 아니라 <strong>자신을 호출한 메서드에게 예외를 전달</strong>하는 것. 결국 어느 곳에선가 try-catch로 처리해야 함. main까지 전달되고도 처리되지 않으면 프로그램 종료</p>
</li>
<li><p>메서드를 사용하는 쪽에서 어떤 예외를 처리해야 하는지 선언부만 보고 알 수 있음 (Java API 문서의 throws 항목)</p>
</li>
<li><p>보통 checked 예외만 선언하며, 오버라이딩할 때는 조상보다 많은 예외를 선언할 수 없음 (7장)</p>
</li>
<li><p>예외를 어디서 처리할지는 상황에 따라 결정: 메서드 안에서 해결할 수 있으면 직접 처리(예: 기본 파일명으로 대체), 호출한 쪽이 알아야 하면 선언해서 넘김(예: 사용자에게 다시 입력 요청)</p>
</li>
</ul>
<h2 id="j-75">1.8 finally블럭</h2>
<p>예외 발생 여부와 관계없이 <strong>항상 실행</strong>되어야 하는 코드(자원 반납, 임시 파일 삭제 등)를 넣습니다. try-catch문의 맨 마지막에 위치합니다.</p>
<pre><code><span class="hl-kw">class</span> FinallyTest {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        <span class="hl-kw">try</span> {
            System.out.println(<span class="hl-str">"프로그램 설치"</span>);
            <span class="hl-kw">return</span>;                               <span class="hl-com">// return으로 나가도 finally는 실행됨</span>
        } <span class="hl-kw">catch</span> (Exception e) {
            System.out.println(<span class="hl-str">"설치 실패"</span>);
        } <span class="hl-kw">finally</span> {
            System.out.println(<span class="hl-str">"임시 파일 삭제"</span>);   <span class="hl-com">// 항상 실행</span>
        }
    }
}</code></pre>
<ul><li><p>예외 발생 시: try → catch → finally, 예외 없을 때: try → finally</p>
</li>
<li><p>try나 catch에서 return문을 만나도 finally블럭을 수행한 뒤 메서드를 빠져나감</p>
</li>
</ul>
<h2 id="j-76">1.9 자동 자원 반환 - try-with-resources문</h2>
<p>파일·네트워크 같은 자원을 사용한 뒤 반드시 <code>close()</code>해야 하는데, finally에서 닫으면 close() 자체가 예외를 던질 수 있어 코드가 복잡해집니다. JDK 7부터는 try 괄호 안에 자원을 선언하면 자동으로 닫힙니다.</p>
<pre><code><span class="hl-kw">import</span> java.io.*;

<span class="hl-kw">class</span> TryWithResourceEx {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        <span class="hl-kw">try</span> (FileInputStream fis = <span class="hl-kw">new</span> FileInputStream(<span class="hl-str">"score.dat"</span>);
             DataInputStream dis = <span class="hl-kw">new</span> DataInputStream(fis)) {   <span class="hl-com">// 세미콜론으로 여러 개 선언</span>
            System.out.println(dis.readInt());
        } <span class="hl-kw">catch</span> (IOException ie) {
            ie.printStackTrace();
        }   <span class="hl-com">// try블럭을 벗어나면 dis, fis가 자동으로 close()됨</span>
    }
}</code></pre>
<ul><li><p>자동으로 닫히려면 그 클래스가 <strong>AutoCloseable 인터페이스</strong>를 구현해야 함</p>
</li>
<li><p>close()에서도 예외가 발생하면 원래 예외가 실제로 던져지고, close()의 예외는 **억제된 예외(suppressed)**로 담김 (<code>getSuppressed()</code>로 확인)</p>
</li>
</ul>
<h2 id="j-77">1.10 사용자정의 예외 만들기</h2>
<p>Exception이나 RuntimeException을 상속받아 필요한 예외 클래스를 직접 정의합니다.</p>
<pre><code><span class="hl-kw">class</span> MyException <span class="hl-kw">extends</span> Exception {
    <span class="hl-kw">private</span> <span class="hl-kw">final</span> <span class="hl-kw">int</span> ERR_CODE;                 <span class="hl-com">// 에러 코드 같은 정보를 추가할 수 있음</span>

    MyException(String msg, <span class="hl-kw">int</span> errCode) {
        <span class="hl-kw">super</span>(msg);                             <span class="hl-com">// 조상 Exception의 생성자로 메시지 전달</span>
        ERR_CODE = errCode;
    }
    MyException(String msg) { <span class="hl-kw">this</span>(msg, <span class="hl-num">100</span>); }

    <span class="hl-kw">public</span> <span class="hl-kw">int</span> getErrCode() { <span class="hl-kw">return</span> ERR_CODE; }
}</code></pre>
<ul><li><p>예전에는 주로 Exception을 상속해 checked 예외로 만들었지만, 요즘은 필요할 때만 처리하도록 <strong>RuntimeException을 상속</strong>해 unchecked 예외로 만드는 쪽이 많음 (checked 예외는 불필요한 try-catch를 강제하기 때문)</p>
</li>
</ul>
<h2 id="j-78">1.11 예외 되던지기(exception re-throwing)</h2>
<p>예외를 catch로 일단 처리한 뒤, <code>throw</code>로 다시 발생시켜 호출한 메서드에서도 처리하게 하는 것입니다. 하나의 예외를 양쪽에서 나눠 처리해야 할 때 사용합니다.</p>
<pre><code><span class="hl-kw">class</span> ExceptionEx3 {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        <span class="hl-kw">try</span> {
            method1();
        } <span class="hl-kw">catch</span> (Exception e) {
            System.out.println(<span class="hl-str">"main에서 처리"</span>);
        }
    }
    <span class="hl-kw">static</span> <span class="hl-kw">void</span> method1() <span class="hl-kw">throws</span> Exception {    <span class="hl-com">// 되던질 예외는 선언부에도 적어야 함</span>
        <span class="hl-kw">try</span> {
            <span class="hl-kw">throw</span> <span class="hl-kw">new</span> Exception();
        } <span class="hl-kw">catch</span> (Exception e) {
            System.out.println(<span class="hl-str">"method1에서 처리"</span>);
            <span class="hl-kw">throw</span> e;                            <span class="hl-com">// 다시 발생시켜 main으로 전달</span>
        }
    }
}</code></pre>
<h2 id="j-79">1.12 연결된 예외(chained exception)</h2>
<p>한 예외가 다른 예외를 발생시킬 때, 원인 예외를 새 예외에 연결하는 것입니다.</p>
<pre><code><span class="hl-kw">class</span> InstallException <span class="hl-kw">extends</span> Exception {
    InstallException(String msg) { <span class="hl-kw">super</span>(msg); }
}
<span class="hl-kw">class</span> SpaceException <span class="hl-kw">extends</span> Exception {
    SpaceException(String msg) { <span class="hl-kw">super</span>(msg); }
}
<span class="hl-kw">class</span> ChainedExceptionEx {
    <span class="hl-kw">static</span> <span class="hl-kw">void</span> install() <span class="hl-kw">throws</span> InstallException {
        <span class="hl-kw">try</span> {
            <span class="hl-kw">throw</span> <span class="hl-kw">new</span> SpaceException(<span class="hl-str">"설치할 공간이 부족합니다."</span>);
        } <span class="hl-kw">catch</span> (SpaceException e) {
            InstallException ie = <span class="hl-kw">new</span> InstallException(<span class="hl-str">"설치 중 예외 발생"</span>);
            ie.initCause(e);                    <span class="hl-com">// SpaceException을 원인 예외로 등록</span>
            <span class="hl-kw">throw</span> ie;
        }
    }
}</code></pre>
<ul><li><p><code>initCause(Throwable cause)</code>: 원인 예외를 등록, <code>getCause()</code>: 원인 예외를 반환. 생성자 <code>new InstallException(&quot;msg&quot;, e)</code> 형태로도 연결 가능(생성자를 그렇게 정의한 경우)</p>
</li>
<li><p>사용 이유 ① 여러 예외를 큰 분류의 예외 하나로 묶어 다루기 위해 (호출하는 쪽은 InstallException만 처리하고, 세부 원인은 getCause로 확인)</p>
</li>
<li><p>사용 이유 ② checked 예외를 unchecked 예외로 바꾸기 위해: <code>throw new RuntimeException(new MemoryException(&quot;메모리 부족&quot;));</code> → 불필요한 예외 선언과 try-catch를 피할 수 있음</p>
</li>
</ul>
<h1 id="j-ch-9">9장. java.lang패키지와 유용한 클래스 (목차 기반)</h1>
<p>java.lang 패키지는 자바의 가장 기본이 되는 클래스들을 담고 있으며 import 없이 사용할 수 있습니다. 샘플에 본문이 없어 목차 순서대로 표준 자바 개념을 정리했습니다.</p>
<h2 id="j-80">1.1 Object클래스</h2>
<p>모든 클래스의 조상이므로 Object의 메서드는 모든 인스턴스에서 바로 쓸 수 있습니다.</p>
<div class="tw"><table><thead><tr><th>메서드</th><th>설명</th></tr>
</thead>
<tbody><tr><td><code>boolean equals(Object obj)</code></td><td>같은 객체인지 비교. 기본은 주소 비교(<code>==</code>)이므로 내용을 비교하려면 오버라이딩</td></tr>
<tr><td><code>int hashCode()</code></td><td>객체의 해시코드. equals를 오버라이딩하면 hashCode도 함께 오버라이딩 (equals가 true인 두 객체는 hashCode도 같아야 함)</td></tr>
<tr><td><code>String toString()</code></td><td>객체 정보를 문자열로. 기본은 <code>클래스이름@16진수해시코드</code>이므로 보통 오버라이딩</td></tr>
<tr><td><code>Object clone()</code></td><td>객체 복제. Cloneable을 구현해야 하며, 기본은 얕은 복사(참조만 복사)</td></tr>
<tr><td><code>Class getClass()</code></td><td>객체의 클래스 정보(Class 객체) 반환</td></tr>
</tbody>
</table>
</div>
<pre><code><span class="hl-kw">class</span> Person {
    <span class="hl-kw">long</span> id;
    Person(<span class="hl-kw">long</span> id) { <span class="hl-kw">this</span>.id = id; }

    <span class="hl-fn">@Override</span>
    <span class="hl-kw">public</span> <span class="hl-kw">boolean</span> equals(Object obj) {
        <span class="hl-kw">if</span> (obj <span class="hl-kw">instanceof</span> Person p) <span class="hl-kw">return</span> id == p.id;   <span class="hl-com">// 내용(id)으로 비교</span>
        <span class="hl-kw">return</span> <span class="hl-kw">false</span>;
    }
    <span class="hl-fn">@Override</span>
    <span class="hl-kw">public</span> <span class="hl-kw">int</span> hashCode() { <span class="hl-kw">return</span> Long.hashCode(id); }
    <span class="hl-fn">@Override</span>
    <span class="hl-kw">public</span> String toString() { <span class="hl-kw">return</span> <span class="hl-str">"Person[id="</span> + id + <span class="hl-str">"]"</span>; }
}</code></pre>
<h2 id="j-81">1.2 String클래스</h2>
<ul><li><p><strong>변경 불가능(immutable)</strong>: 한 번 만들어진 문자열은 바뀜 수 없음. <code>a + b</code>는 새 String을 만들어냄 → 반복문에서 문자열을 계속 더하면 비효율적</p>
</li>
<li><p><strong>문자열 리터럴과 new</strong>: <code>String s1 = &quot;abc&quot;;</code>는 상수 풀의 같은 객체를 재사용, <code>new String(&quot;abc&quot;)</code>는 항상 새 객체. 그래서 내용 비교는 반드시 <code>equals()</code></p>
</li>
<li><p>빈 문자열 <code>&quot;&quot;</code>은 길이 0인 문자열. String 변수는 null보다 <code>&quot;&quot;</code>로 초기화하는 것이 안전</p>
</li>
</ul>
<div class="tw"><table><thead><tr><th>메서드</th><th>예</th><th>결과</th></tr>
</thead>
<tbody><tr><td><code>charAt</code>, <code>length</code></td><td><code>&quot;Hello&quot;.charAt(1)</code></td><td>&#39;e&#39;</td></tr>
<tr><td><code>substring(from, to)</code></td><td><code>&quot;Hello&quot;.substring(1, 3)</code></td><td>&quot;el&quot;</td></tr>
<tr><td><code>indexOf</code>, <code>lastIndexOf</code></td><td><code>&quot;Hello&quot;.indexOf(&#39;l&#39;)</code></td><td>2</td></tr>
<tr><td><code>equals</code>, <code>equalsIgnoreCase</code></td><td><code>&quot;abc&quot;.equalsIgnoreCase(&quot;ABC&quot;)</code></td><td>true</td></tr>
<tr><td><code>compareTo</code></td><td><code>&quot;aaa&quot;.compareTo(&quot;bbb&quot;)</code></td><td>음수 (사전순 비교)</td></tr>
<tr><td><code>contains</code>, <code>startsWith</code>, <code>endsWith</code></td><td><code>&quot;Hello&quot;.contains(&quot;ell&quot;)</code></td><td>true</td></tr>
<tr><td><code>replace</code></td><td><code>&quot;Hello&quot;.replace(&#39;l&#39;, &#39;L&#39;)</code></td><td>&quot;HeLLo&quot;</td></tr>
<tr><td><code>split</code></td><td><code>&quot;a,b,c&quot;.split(&quot;,&quot;)</code></td><td>{&quot;a&quot;, &quot;b&quot;, &quot;c&quot;}</td></tr>
<tr><td><code>String.join</code></td><td><code>String.join(&quot;-&quot;, arr)</code></td><td>&quot;a-b-c&quot;</td></tr>
<tr><td><code>trim</code>, <code>strip</code></td><td><code>&quot;  hi  &quot;.strip()</code></td><td>&quot;hi&quot;</td></tr>
<tr><td><code>toUpperCase</code>, <code>toLowerCase</code></td><td><code>&quot;Hi&quot;.toUpperCase()</code></td><td>&quot;HI&quot;</td></tr>
<tr><td><code>isBlank</code>, <code>repeat</code>, <code>lines</code> (JDK 11)</td><td><code>&quot;ab&quot;.repeat(3)</code></td><td>&quot;ababab&quot;</td></tr>
<tr><td><code>String.valueOf</code></td><td><code>String.valueOf(100)</code></td><td>&quot;100&quot;</td></tr>
</tbody>
</table>
</div>
<h2 id="j-82">1.3 StringBuffer와 StringBuilder</h2>
<ul><li><p>내부에 char 배열 버퍼를 가지고 있어 <strong>내용을 변경할 수 있는 문자열</strong>. 문자열을 자주 더하거나 고칠 때 사용</p>
</li>
<li><p>주요 메서드: <code>append()</code>, <code>insert()</code>, <code>delete()</code>, <code>reverse()</code>, <code>toString()</code>. 자기 자신을 반환해서 <code>sb.append(&quot;a&quot;).append(&quot;b&quot;)</code>처럼 이어 쓸 수 있음</p>
</li>
<li><p>StringBuffer는 멀티쓰레드에 안전하도록 동기화됨, StringBuilder는 동기화가 없어 더 빠름. 싱글쓰레드에서는 <strong>StringBuilder</strong> 사용</p>
</li>
<li><p><code>equals()</code>를 오버라이딩하지 않아서 내용 비교는 <code>sb.toString().equals(...)</code></p>
</li>
</ul>
<pre><code><span class="hl-kw">class</span> SbEx {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        StringBuilder sb = <span class="hl-kw">new</span> StringBuilder();
        <span class="hl-kw">for</span> (<span class="hl-kw">int</span> i = <span class="hl-num">0</span>; i &lt; <span class="hl-num">3</span>; i++) sb.append(i).append(<span class="hl-str">","</span>);
        System.out.println(sb.toString());   <span class="hl-com">// 0,1,2,</span>
    }
}</code></pre>
<h2 id="j-83">1.4 Math클래스</h2>
<p>수학 계산용 메서드를 모아 둔 클래스입니다. 생성자가 private이고 모든 메서드가 static입니다.</p>
<div class="tw"><table><thead><tr><th>메서드</th><th>설명</th><th>예</th></tr>
</thead>
<tbody><tr><td><code>abs</code></td><td>절대값</td><td><code>Math.abs(-10)</code> → 10</td></tr>
<tr><td><code>ceil</code> / <code>floor</code></td><td>올림 / 버림</td><td><code>Math.ceil(1.1)</code> → 2.0</td></tr>
<tr><td><code>round</code></td><td>반올림(정수 반환)</td><td><code>Math.round(1.5)</code> → 2</td></tr>
<tr><td><code>rint</code></td><td>가장 가까운 짝수 정수로 반올림(double)</td><td><code>Math.rint(2.5)</code> → 2.0</td></tr>
<tr><td><code>max</code> / <code>min</code></td><td>큰 값 / 작은 값</td><td><code>Math.max(3, 7)</code> → 7</td></tr>
<tr><td><code>pow</code>, <code>sqrt</code></td><td>거듭제곱, 제곱근</td><td><code>Math.pow(2, 3)</code> → 8.0</td></tr>
<tr><td><code>random</code></td><td>0.0 이상 1.0 미만의 난수</td><td></td></tr>
<tr><td><code>addExact</code> 등</td><td>오버플로우가 나면 예외를 던짐</td><td><code>Math.addExact(Integer.MAX_VALUE, 1)</code> → ArithmeticException</td></tr>
</tbody>
</table>
</div>
<h2 id="j-84">1.5 래퍼(wrapper) 클래스</h2>
<p>기본형 값을 객체로 다뤄야 할 때(컨렉션에 담기, 매개변수가 Object일 때 등) 기본형을 감싸는 클래스입니다.</p>
<div class="tw"><table><thead><tr><th>기본형</th><th>boolean</th><th>char</th><th>byte</th><th>short</th><th>int</th><th>long</th><th>float</th><th>double</th></tr>
</thead>
<tbody><tr><td>래퍼 클래스</td><td>Boolean</td><td>Character</td><td>Byte</td><td>Short</td><td><strong>Integer</strong></td><td>Long</td><td>Float</td><td>Double</td></tr>
</tbody>
</table>
</div>
<ul><li><p>숫자 래퍼는 모두 추상 클래스 Number의 자손</p>
</li>
<li><p><strong>오토박싱/언박싱</strong>(JDK 5+): 컴파일러가 기본형↔래퍼 객체를 자동 변환. <code>Integer i = 10;</code>(박싱), <code>int n = i;</code>(언박싱)</p>
</li>
<li><p>문자열 → 숫자: <code>Integer.parseInt(&quot;100&quot;)</code>(int 반환), <code>Integer.valueOf(&quot;100&quot;)</code>(Integer 반환). 숫자가 아니면 NumberFormatException</p>
</li>
<li><p>래퍼 객체도 내용 비교는 <code>equals()</code>. 상수 <code>Integer.MAX_VALUE</code>, <code>Integer.MIN_VALUE</code> 등 제공</p>
</li>
<li><p>null인 래퍼를 언박싱하면 NullPointerException</p>
</li>
</ul>
<h2 id="j-85">2. 유용한 클래스</h2>
<div class="tw"><table><thead><tr><th>클래스</th><th>용도</th><th>핵심</th></tr>
</thead>
<tbody><tr><td>java.util.Objects</td><td>null에 안전한 객체 유틸</td><td><code>Objects.equals(a, b)</code>(null이어도 예외 없이 비교), <code>isNull</code>, <code>requireNonNull</code>, <code>hash(...)</code>, <code>toString(o, &quot;기본값&quot;)</code></td></tr>
<tr><td>java.util.Random</td><td>난수 생성</td><td><code>nextInt(n)</code>(0~n-1), <code>nextDouble()</code>, <code>nextBoolean()</code>. 종자값(seed)이 같으면 같은 난수열</td></tr>
<tr><td>java.util.regex</td><td>정규식(텍스트 패턴 매칭)</td><td><code>Pattern.compile(&quot;c[a-z]*&quot;)</code> → <code>matcher(str)</code> → <code>matches()</code>/<code>find()</code>/<code>group()</code></td></tr>
<tr><td>java.util.Scanner</td><td>화면·파일·문자열에서 입력을 읽음</td><td><code>nextLine()</code>, <code>nextInt()</code>, <code>hasNext()</code>. 구분자 지정 <code>useDelimiter()</code></td></tr>
<tr><td>java.util.StringTokenizer</td><td>구분자로 문자열을 나눔</td><td><code>hasMoreTokens()</code>, <code>nextToken()</code>. 구분자는 문자 단위, 빈 문자열은 토큰으로 안 봄 (요즘은 split을 더 많이 씁)</td></tr>
<tr><td>java.math.BigInteger</td><td>long보다 큰 정수</td><td>변경 불가. <code>add</code>, <code>subtract</code>, <code>multiply</code>, <code>divide</code>, <code>pow</code> 메서드로 계산 (연산자 사용 불가)</td></tr>
<tr><td>java.math.BigDecimal</td><td>오차 없는 실수 계산</td><td>금액 계산에 사용. <code>new BigDecimal(&quot;0.1&quot;)</code>처럼 <strong>문자열로</strong> 생성, 나눗셈은 반올림 방식(RoundingMode) 지정</td></tr>
</tbody>
</table>
</div>
<pre><code><span class="hl-kw">import</span> java.math.BigDecimal;
<span class="hl-kw">import</span> java.util.regex.*;

<span class="hl-kw">class</span> UtilEx {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        System.out.println(<span class="hl-num">0.1</span> + <span class="hl-num">0.2</span>);                          <span class="hl-com">// 0.30000000000000004</span>
        System.out.println(<span class="hl-kw">new</span> BigDecimal(<span class="hl-str">"0.1"</span>).add(<span class="hl-kw">new</span> BigDecimal(<span class="hl-str">"0.2"</span>)));  <span class="hl-com">// 0.3</span>

        Pattern p = Pattern.compile(<span class="hl-str">"0\\d{1,2}-\\d{3,4}-\\d{4}"</span>); <span class="hl-com">// 전화번호 패턴</span>
        System.out.println(p.matcher(<span class="hl-str">"010-1234-5678"</span>).matches());  <span class="hl-com">// true</span>
    }
}</code></pre>
<h1 id="j-ch-10">10장. 날짜와 시간 &amp; 형식화 (목차 기반)</h1>
<p>날짜·시간은 예전 클래스인 Calendar/Date와 JDK 8에서 추가된 java.time 패키지로 다루며, 새 코드에는 <strong>java.time</strong>을 씁니다. 샘플에 본문이 없어 목차 순서대로 표준 자바 개념을 정리했습니다.</p>
<h2 id="j-86">1.1 Calendar와 Date</h2>
<ul><li><p>Date(JDK 1.0)는 대부분의 메서드가 deprecated, 이를 보완한 것이 Calendar(JDK 1.1)</p>
</li>
<li><p>Calendar는 추상 클래스라 <code>Calendar.getInstance()</code>로 얻음 (시스템 설정에 맞는 GregorianCalendar 등을 반환)</p>
</li>
<li><p><code>get(Calendar.YEAR)</code>, <code>set(...)</code>, <code>add(Calendar.DATE, 1)</code>, <code>roll(...)</code>(다른 필드에 영향 없이 변경)</p>
</li>
<li><p>단점: <strong>월이 0부터 시작</strong>(0 = 1월)해 헷갈리고, 변경 가능(mutable)하며 멀티쓰레드에 안전하지 않음 → java.time이 등장한 이유</p>
</li>
<li><p>Date↔Calendar 변환: <code>cal.getTime()</code>, <code>cal.setTime(date)</code></p>
</li>
</ul>
<h2 id="j-87">2. 형식화 클래스 (java.text)</h2>
<p>숫자·날짜·텍스트를 정해진 형식으로 출력(<code>format()</code>)하거나, 형식화된 문자열에서 값을 읽어내는(<code>parse()</code>) 클래스입니다.</p>
<div class="tw"><table><thead><tr><th>클래스</th><th>용도</th><th>예</th></tr>
</thead>
<tbody><tr><td>DecimalFormat</td><td>숫자 형식화</td><td><code>new DecimalFormat(&quot;#,###.##&quot;).format(1234567.891)</code> → &quot;1,234,567.89&quot;. <code>0</code>은 빈자리를 0으로, <code>#</code>은 비움</td></tr>
<tr><td>SimpleDateFormat</td><td>Date 형식화</td><td><code>new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm&quot;).format(new Date())</code>. <code>MM</code>은 월, <code>mm</code>은 분</td></tr>
<tr><td>ChoiceFormat</td><td>범위에 따라 다른 문자열</td><td>&#96;90#A</td></tr>
<tr><td>MessageFormat</td><td>정해진 양식에 값을 넣어 문장 생성</td><td><code>MessageFormat.format(&quot;이름:{0}, 나이:{1}&quot;, &quot;Kim&quot;, 20)</code></td></tr>
</tbody>
</table>
</div>
<h2 id="j-88">3.1 java.time패키지의 핵심 클래스</h2>
<ul><li><p>모든 클래스가 <strong>변경 불가능(immutable)</strong>: 날짜를 바꾸는 메서드는 새 객체를 반환하므로 멀티쓰레드에 안전. 월은 1부터 시작</p>
</li>
<li><p>객체는 <code>now()</code>(현재)나 <code>of(...)</code>(지정)로 생성</p>
</li>
</ul>
<div class="tw"><table><thead><tr><th>클래스</th><th>표현하는 것</th><th>예</th></tr>
</thead>
<tbody><tr><td>LocalDate</td><td>날짜</td><td>2026-11-04</td></tr>
<tr><td>LocalTime</td><td>시간</td><td>17:57:00</td></tr>
<tr><td>LocalDateTime</td><td>날짜 + 시간</td><td>2026-11-04T17:57</td></tr>
<tr><td>ZonedDateTime</td><td>날짜 + 시간 + 시간대</td><td>2026-11-04T17:57+09:00[Asia/Seoul]</td></tr>
<tr><td>Instant</td><td>에포크 타임(1970-01-01 00:00:00 UTC)부터 경과한 나노초</td><td>기계가 다루는 타임스탬프</td></tr>
<tr><td>Period</td><td>두 날짜 사이의 간격</td><td>1년 2개월 3일</td></tr>
<tr><td>Duration</td><td>두 시간 사이의 간격</td><td>3시간 20분</td></tr>
</tbody>
</table>
</div>
<h2 id="j-89">3.2~3.4 LocalDate·LocalTime·Instant·LocalDateTime·ZonedDateTime</h2>
<ul><li><p>필드 값 읽기: <code>getYear()</code>, <code>getMonthValue()</code>, <code>getDayOfMonth()</code>, <code>getDayOfWeek()</code>, <code>get(ChronoField.XXX)</code></p>
</li>
<li><p>필드 변경: <code>withYear(2000)</code>, <code>plusDays(1)</code>, <code>minusMonths(1)</code>, <code>truncatedTo(ChronoUnit.HOURS)</code> → 모두 <strong>새 객체 반환</strong>이므로 대입해야 반영됨</p>
</li>
<li><p>비교: <code>isAfter()</code>, <code>isBefore()</code>, <code>isEqual()</code></p>
</li>
<li><p>결합과 변환: <code>date.atTime(time)</code> → LocalDateTime, <code>dateTime.atZone(ZoneId.of(&quot;Asia/Seoul&quot;))</code> → ZonedDateTime, <code>toLocalDate()</code>/<code>toLocalTime()</code></p>
</li>
<li><p>Instant는 시간대와 무관한 절대 시점. Date와는 <code>Date.from(instant)</code>, <code>date.toInstant()</code>로 변환</p>
</li>
</ul>
<pre><code><span class="hl-kw">import</span> java.time.*;

<span class="hl-kw">class</span> TimeEx {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        LocalDate today = LocalDate.now();
        LocalDate birthday = LocalDate.of(<span class="hl-num">2000</span>, <span class="hl-num">12</span>, <span class="hl-num">31</span>);   <span class="hl-com">// 월은 1부터</span>
        LocalDate tomorrow = today.plusDays(<span class="hl-num">1</span>);             <span class="hl-com">// today는 그대로, 새 객체 반환</span>
        System.out.println(birthday.isBefore(today));      <span class="hl-com">// true</span>

        ZonedDateTime seoul = LocalDateTime.now().atZone(ZoneId.of(<span class="hl-str">"Asia/Seoul"</span>));
        System.out.println(seoul);
    }
}</code></pre>
<h2 id="j-90">3.5 TemporalAdjusters</h2>
<p>‘다음 달의 첫째 날’, ‘다음 주 월요일’처럼 자주 쓰는 날짜 계산을 미리 만들어 둔 것입니다. <code>date.with(TemporalAdjusters.lastDayOfMonth())</code>, <code>firstDayOfNextMonth()</code>, <code>next(DayOfWeek.MONDAY)</code>, <code>dayOfWeekInMonth(2, DayOfWeek.TUESDAY)</code>(둘째 주 화요일) 등.</p>
<h2 id="j-91">3.6 Period와 Duration</h2>
<div class="tw"><table><thead><tr><th>구분</th><th>Period</th><th>Duration</th></tr>
</thead>
<tbody><tr><td>단위</td><td>년·월·일</td><td>시·분·초·나노초</td></tr>
<tr><td>구하기</td><td><code>Period.between(date1, date2)</code></td><td><code>Duration.between(time1, time2)</code></td></tr>
<tr><td>값 읽기</td><td><code>getYears()</code>, <code>getMonths()</code>, <code>getDays()</code></td><td><code>getSeconds()</code>, <code>toMinutes()</code>, <code>toHours()</code></td></tr>
</tbody>
</table>
</div>
<ul><li><p>두 날짜 사이의 전체 일수는 <code>ChronoUnit.DAYS.between(d1, d2)</code> 또는 <code>d1.until(d2, ChronoUnit.DAYS)</code></p>
</li>
</ul>
<h2 id="j-92">3.7 파싱과 포맷</h2>
<p><code>DateTimeFormatter</code>로 날짜·시간을 문자열로 바꾸거나(포맷) 문자열을 날짜·시간으로 바꿉니다(파싱).</p>
<pre><code><span class="hl-kw">import</span> java.time.*;
<span class="hl-kw">import</span> java.time.format.DateTimeFormatter;

<span class="hl-kw">class</span> FormatEx {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        DateTimeFormatter f = DateTimeFormatter.ofPattern(<span class="hl-str">"yyyy/MM/dd HH:mm"</span>);
        String s = LocalDateTime.now().format(f);               <span class="hl-com">// 포맷: 객체 → 문자열</span>
        LocalDate d = LocalDate.parse(<span class="hl-str">"2026-11-04"</span>);          <span class="hl-com">// 파싱: ISO 형식은 기본 지원</span>
        LocalDateTime dt = LocalDateTime.parse(<span class="hl-str">"2026/11/04 17:57"</span>, f);  <span class="hl-com">// 패턴을 지정해 파싱</span>
        System.out.println(s + <span class="hl-str">" "</span> + d + <span class="hl-str">" "</span> + dt);
    }
}</code></pre>
<ul><li><p>미리 정의된 형식도 있음: <code>DateTimeFormatter.ISO_LOCAL_DATE</code>(2026-11-04) 등. 패턴과 맞지 않는 문자열을 파싱하면 DateTimeParseException</p>
</li>
</ul>
<h1 id="j-ch-11">11장. 컬렉션 프레임웍 (목차 기반)</h1>
<p>컬렉션 프레임웍은 여러 데이터를 저장·관리하는 클래스들을 표준화한 것입니다. 배열과 달리 크기가 자동으로 늘어나고, 추가·삭제·검색·정렬 기능을 제공합니다. 샘플에 본문이 없어 목차 순서대로 표준 자바 개념을 정리했습니다.</p>
<h2 id="j-93">1.1 핵심 인터페이스</h2>
<div class="tw"><table><thead><tr><th>인터페이스</th><th>특징</th><th>구현 클래스</th></tr>
</thead>
<tbody><tr><td>List</td><td><strong>순서 유지, 중복 허용</strong> (예: 대기자 명단)</td><td>ArrayList, LinkedList, Stack, Vector</td></tr>
<tr><td>Set</td><td><strong>순서 없음, 중복 불가</strong> (예: 양의 정수 집합)</td><td>HashSet, TreeSet, LinkedHashSet</td></tr>
<tr><td>Map</td><td><strong>키와 값의 쌍</strong>. 키는 중복 불가, 값은 중복 허용 (예: 아이디-비밀번호)</td><td>HashMap, TreeMap, Hashtable, Properties</td></tr>
</tbody>
</table>
</div>
<ul><li><p>List와 Set의 공통 조상은 Collection 인터페이스 (<code>add</code>, <code>remove</code>, <code>contains</code>, <code>size</code>, <code>isEmpty</code>, <code>iterator</code>). Map은 별도 계층</p>
</li>
<li><p>JDK 21에서는 순서가 있는 컬렉션에 SequencedCollection(<code>getFirst()</code>, <code>getLast()</code>, <code>reversed()</code>)이 추가됨</p>
</li>
<li><p>변수 타입은 인터페이스로 선언하는 것이 좋음: <code>List&lt;String&gt; list = new ArrayList&lt;&gt;();</code> (나중에 구현 클래스를 바꾸기 쉬움)</p>
</li>
</ul>
<h2 id="j-94">1.2~1.3 ArrayList와 LinkedList</h2>
<ul><li><p><strong>ArrayList</strong>: 내부적으로 배열을 사용. 공간이 부족하면 더 큰 배열을 만들어 복사. 5장 배열의 ‘길이 변경 불가’ 문제를 해결 (→ ArrayIndexOutOfBoundsException 예방, 8장 참고)</p>
</li>
<li><p>주요 메서드: <code>add(e)</code>, <code>add(index, e)</code>, <code>get(index)</code>, <code>set(index, e)</code>, <code>remove(index)</code>, <code>indexOf(e)</code>, <code>contains(e)</code>, <code>size()</code>, <code>clear()</code></p>
</li>
<li><p>끝에서부터 삭제하면 빠르고, 앞·중간에서 삭제하면 뒤 요소를 모두 옮겨야 해서 느림. for문으로 지울 때는 뒤에서부터 지울 것</p>
</li>
<li><p><strong>LinkedList</strong>: 각 요소(노드)가 이전·다음 요소의 주소를 가지고 연결된 구조(이중 연결 리스트)</p>
</li>
</ul>
<div class="tw"><table><thead><tr><th>비교</th><th>ArrayList</th><th>LinkedList</th></tr>
</thead>
<tbody><tr><td>읽기(접근)</td><td>빠름 (인덱스로 바로 계산)</td><td>느림 (처음부터 따라감)</td></tr>
<tr><td>추가·삭제 (중간)</td><td>느림 (요소를 옮겨야 함)</td><td>빠름 (연결만 바꿈)</td></tr>
<tr><td>순차적 추가·삭제 (끝)</td><td>빠름</td><td>느림</td></tr>
<tr><td>쓰임</td><td>데이터 개수가 크게 변하지 않고 읽기가 많을 때</td><td>중간 추가·삭제가 많을 때</td></tr>
</tbody>
</table>
</div>
<h2 id="j-95">1.4 Stack과 Queue</h2>
<div class="tw"><table><thead><tr><th>구분</th><th>Stack</th><th>Queue</th></tr>
</thead>
<tbody><tr><td>구조</td><td>LIFO (마지막에 넣은 것이 먼저 나옴)</td><td>FIFO (먼저 넣은 것이 먼저 나옴)</td></tr>
<tr><td>메서드</td><td><code>push()</code>, <code>pop()</code>, <code>peek()</code></td><td><code>offer()</code>, <code>poll()</code>, <code>peek()</code></td></tr>
<tr><td>구현</td><td>Stack 클래스 (또는 ArrayDeque)</td><td>인터페이스라서 LinkedList, ArrayDeque로 생성</td></tr>
<tr><td>활용</td><td>수식 괄호 검사, 되돌리기(undo), 뒤로가기</td><td>최근 사용 문서, 인쇄 대기열, 버퍼</td></tr>
</tbody>
</table>
</div>
<ul><li><p>PriorityQueue: 넣은 순서와 관계없이 우선순위(작은 값)가 높은 것부터 꺼냄. Deque: 양쪽 끝에서 추가·삭제 가능 (Stack과 Queue를 모두 대신)</p>
</li>
</ul>
<h2 id="j-96">1.5 Iterator, ListIterator, Enumeration</h2>
<ul><li><p>컬렉션에 저장된 요소를 읽는 방법을 표준화한 인터페이스. 컬렉션 종류가 바뀌어도 읽는 코드는 그대로</p>
</li>
<li><p><strong>Iterator</strong>: <code>hasNext()</code>, <code>next()</code>, <code>remove()</code>. 반복 중 요소를 삭제할 때는 컬렉션의 remove가 아닌 <strong>Iterator의 remove</strong>를 사용 (아니면 ConcurrentModificationException)</p>
</li>
<li><p><strong>ListIterator</strong>: List 전용. 양방향 이동(<code>hasPrevious()</code>, <code>previous()</code>)과 <code>set()</code>, <code>add()</code> 가능</p>
</li>
<li><p><strong>Enumeration</strong>: Iterator의 구버전(Vector, Hashtable용)</p>
</li>
<li><p>Map은 <code>keySet()</code>, <code>values()</code>, <code>entrySet()</code>으로 Set이나 Collection을 얻은 뒤 반복</p>
</li>
</ul>
<pre><code><span class="hl-kw">import</span> java.util.*;

<span class="hl-kw">class</span> IteratorEx {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        List&lt;Integer&gt; list = <span class="hl-kw">new</span> ArrayList&lt;&gt;(List.of(<span class="hl-num">1</span>, <span class="hl-num">2</span>, <span class="hl-num">3</span>, <span class="hl-num">4</span>));
        Iterator&lt;Integer&gt; it = list.iterator();
        <span class="hl-kw">while</span> (it.hasNext()) {
            <span class="hl-kw">if</span> (it.next() % <span class="hl-num">2</span> == <span class="hl-num">0</span>) it.remove();   <span class="hl-com">// 반복 중 안전하게 삭제</span>
        }
        System.out.println(list);                  <span class="hl-com">// [1, 3]</span>
    }
}</code></pre>
<h2 id="j-97">1.6 Arrays</h2>
<p>배열을 다루는 static 메서드 모음입니다.</p>
<div class="tw"><table><thead><tr><th>메서드</th><th>설명</th></tr>
</thead>
<tbody><tr><td><code>toString</code>, <code>deepToString</code></td><td>배열(다차원 배열) 내용을 문자열로</td></tr>
<tr><td><code>copyOf</code>, <code>copyOfRange</code></td><td>배열 복사</td></tr>
<tr><td><code>fill</code>, <code>setAll</code></td><td>배열 채우기</td></tr>
<tr><td><code>sort</code>, <code>binarySearch</code></td><td>정렬, 정렬된 배열에서 이진 검색</td></tr>
<tr><td><code>equals</code>, <code>deepEquals</code></td><td>배열 내용 비교</td></tr>
<tr><td><code>asList</code></td><td>배열을 List로 (크기 변경 불가. 변경하려면 <code>new ArrayList&lt;&gt;(Arrays.asList(...))</code>)</td></tr>
</tbody>
</table>
</div>
<h2 id="j-98">1.7 Comparator와 Comparable</h2>
<div class="tw"><table><thead><tr><th>구분</th><th>Comparable</th><th>Comparator</th></tr>
</thead>
<tbody><tr><td>역할</td><td>기본 정렬 기준 (객체 자신이 구현)</td><td>다른 정렬 기준 (별도 객체)</td></tr>
<tr><td>메서드</td><td><code>int compareTo(T o)</code></td><td><code>int compare(T o1, T o2)</code></td></tr>
<tr><td>예</td><td>String, Integer 등은 이미 구현(오름차순)</td><td><code>Comparator.reverseOrder()</code>, <code>String.CASE_INSENSITIVE_ORDER</code></td></tr>
</tbody>
</table>
</div>
<ul><li><p>반환값: 같으면 0, 작으면 음수, 크면 양수</p>
</li>
<li><p><code>Comparator.comparing(Student::getScore).reversed()</code>처럼 간단히 만들 수 있음 (14장 람다)</p>
</li>
</ul>
<h2 id="j-99">1.8~1.9 HashSet과 TreeSet</h2>
<ul><li><p><strong>HashSet</strong>: 중복 없이 저장, 순서 없음 (저장 순서가 필요하면 LinkedHashSet). <code>add()</code>는 이미 있으면 false</p>
</li>
<li><p>중복을 판단할 때 <code>hashCode()</code>와 <code>equals()</code>를 사용 → <strong>직접 만든 클래스를 담으려면 두 메서드를 함께 오버라이딩</strong> (9장 Object)</p>
</li>
<li><p>집합 연산: 합집합 <code>addAll</code>, 교집합 <code>retainAll</code>, 차집합 <code>removeAll</code></p>
</li>
<li><p><strong>TreeSet</strong>: 이진 검색 트리 구조로 저장하여 <strong>자동 정렬</strong>. 요소는 Comparable이거나 Comparator를 줌</p>
</li>
<li><p>범위 검색에 강함: <code>first()</code>, <code>last()</code>, <code>headSet(e)</code>(e보다 작은 것), <code>tailSet(e)</code>, <code>subSet(from, to)</code>, <code>ceiling()</code>, <code>floor()</code></p>
</li>
</ul>
<h2 id="j-100">1.10~1.11 HashMap과 Hashtable, TreeMap</h2>
<ul><li><p><strong>HashMap</strong>: 키-값 쌍(Entry)으로 저장. 키의 해시값으로 위치를 계산해 검색이 매우 빠름. 같은 키로 <code>put()</code>하면 값을 덮어씀</p>
</li>
<li><p>주요 메서드: <code>put(k, v)</code>, <code>get(k)</code>, <code>getOrDefault(k, 기본값)</code>, <code>containsKey(k)</code>, <code>remove(k)</code>, <code>keySet()</code>, <code>values()</code>, <code>entrySet()</code></p>
</li>
<li><p><strong>Hashtable</strong>: HashMap의 구버전(동기화됨, null 키·값 불가). 새 코드에는 HashMap</p>
</li>
<li><p><strong>TreeMap</strong>: 키를 기준으로 <strong>정렬</strong>해 저장. 범위 검색·정렬이 필요할 때 사용 (검색 자체는 HashMap이 더 빠름)</p>
</li>
</ul>
<pre><code><span class="hl-kw">import</span> java.util.*;

<span class="hl-kw">class</span> MapEx {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        String[] words = {<span class="hl-str">"java"</span>, <span class="hl-str">"list"</span>, <span class="hl-str">"java"</span>, <span class="hl-str">"map"</span>, <span class="hl-str">"java"</span>};
        Map&lt;String, Integer&gt; count = <span class="hl-kw">new</span> HashMap&lt;&gt;();
        <span class="hl-kw">for</span> (String w : words) count.put(w, count.getOrDefault(w, <span class="hl-num">0</span>) + <span class="hl-num">1</span>);   <span class="hl-com">// 빈도수 세기</span>

        <span class="hl-kw">for</span> (Map.Entry&lt;String, Integer&gt; e : count.entrySet())
            System.out.println(e.getKey() + <span class="hl-str">" : "</span> + e.getValue());
    }
}</code></pre>
<h2 id="j-101">1.12~1.13 Properties와 Collections</h2>
<ul><li><p><strong>Properties</strong>: Hashtable을 상속해 키와 값을 String으로 저장. 설정 파일(<code>.properties</code>)을 <code>load()</code>로 읽고 <code>store()</code>로 저장. <code>getProperty(k, 기본값)</code>, <code>setProperty(k, v)</code></p>
</li>
<li><p><strong>Collections</strong>: 컬렉션을 다루는 static 메서드 모음 (Arrays의 컬렉션 버전)</p>
<ul><li><p><code>sort</code>, <code>shuffle</code>, <code>reverse</code>, <code>max</code>, <code>min</code>, <code>binarySearch</code>, <code>frequency</code>, <code>fill</code>, <code>swap</code></p>
</li>
<li><p>동기화: <code>synchronizedList(list)</code>, 읽기 전용: <code>unmodifiableList(list)</code>, 빈 컬렉션: <code>emptyList()</code></p>
</li>
</ul>
</li>
<li><p>변경 불가 컬렉션을 간단히 만드는 <code>List.of()</code>, <code>Set.of()</code>, <code>Map.of()</code> (JDK 9+)</p>
</li>
</ul>
<h2 id="j-102">1.14 컬렉션 클래스 정리 &amp; 요약</h2>
<div class="tw"><table><thead><tr><th>클래스</th><th>특징</th></tr>
</thead>
<tbody><tr><td>ArrayList</td><td>배열 기반. 읽기 빠름, 중간 추가·삭제 느림. 가장 많이 사용</td></tr>
<tr><td>LinkedList</td><td>연결 기반. 중간 추가·삭제 빠름, 읽기 느림</td></tr>
<tr><td>HashMap</td><td>키-값 저장, 검색 매우 빠름</td></tr>
<tr><td>TreeMap</td><td>키 기준 정렬, 범위 검색</td></tr>
<tr><td>Stack / Queue</td><td>LIFO / FIFO</td></tr>
<tr><td>Properties</td><td>String 키-값, 설정 파일 읽기·쓰기</td></tr>
<tr><td>HashSet</td><td>중복 제거, 순서 없음</td></tr>
<tr><td>TreeSet</td><td>중복 제거 + 자동 정렬, 범위 검색</td></tr>
<tr><td>LinkedHashSet / LinkedHashMap</td><td>저장 순서 유지</td></tr>
</tbody>
</table>
</div>
<h1 id="j-ch-12">12장. 모던 자바 기능 (목차 기반)</h1>
<p>지네릭스, 열거형, 애너테이션, 레코드, 실드 클래스, 모듈은 코드를 더 안전하고 간결하게 만드는 기능들입니다. 샘플에 본문이 없어 목차 순서대로 표준 자바 개념을 정리했습니다.</p>
<h2 id="j-103">1. 지네릭스(generics)</h2>
<p><strong>1.1 지네릭스란?</strong> 다양한 타입을 다루는 클래스와 메서드에 <strong>컴파일 시 타입 체크</strong>를 해주는 기능입니다.</p>
<ul><li><p>장점: ① 타입 안정성 (의도하지 않은 타입의 객체가 들어가는 것을 컴파일 단계에서 막음) ② 형변환 생략 → <strong>ClassCastException 예방</strong> (8장 필기의 ‘간접 예방’)</p>
</li>
</ul>
<pre><code><span class="hl-kw">import</span> java.util.*;

<span class="hl-kw">class</span> GenericEx {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        List list = <span class="hl-kw">new</span> ArrayList();            <span class="hl-com">// 지네릭스 없음: Object로 저장</span>
        list.add(<span class="hl-str">"hello"</span>);
        String s1 = (String) list.get(<span class="hl-num">0</span>);      <span class="hl-com">// 형변환 필요, 타입이 틀리면 실행 중 예외</span>

        List&lt;String&gt; list2 = <span class="hl-kw">new</span> ArrayList&lt;&gt;(); <span class="hl-com">// String만 저장</span>
        list2.add(<span class="hl-str">"hello"</span>);
        <span class="hl-com">// list2.add(100);                     // 컴파일 에러로 미리 막음</span>
        String s2 = list2.get(<span class="hl-num">0</span>);              <span class="hl-com">// 형변환 불필요</span>
    }
}</code></pre>
<p><strong>1.2~1.3 지네릭 클래스의 선언과 사용</strong></p>
<pre><code><span class="hl-kw">class</span> Box&lt;T&gt; {                     <span class="hl-com">// T: 타입 변수(타입 매개변수)</span>
    T item;
    <span class="hl-kw">void</span> setItem(T item) { <span class="hl-kw">this</span>.item = item; }
    T getItem() { <span class="hl-kw">return</span> item; }
}
<span class="hl-kw">class</span> BoxEx {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        Box&lt;String&gt; b = <span class="hl-kw">new</span> Box&lt;&gt;();   <span class="hl-com">// 대입된 타입 String. 오른쪽 &lt;&gt;는 추론으로 생략 가능</span>
        b.setItem(<span class="hl-str">"ABC"</span>);
        String s = b.getItem();
    }
}</code></pre>
<ul><li><p>용어: <code>Box&lt;T&gt;</code> 지네릭 클래스, <code>T</code> 타입 변수, <code>Box</code> 원시 타입(raw type). 관례상 T(Type), E(Element), K(Key), V(Value)</p>
</li>
<li><p>제약: static 멤버에는 타입 변수를 쓸 수 없고, <code>new T[10]</code>처럼 지네릭 배열을 생성할 수 없음. 기본형은 대입 불가(<code>Box&lt;int&gt;</code> ✗ → <code>Box&lt;Integer&gt;</code>)</p>
</li>
<li><p>참조변수와 생성자의 대입 타입은 일치해야 함: <code>Box&lt;Fruit&gt; b = new Box&lt;Apple&gt;();</code> ✗ (상속관계여도). 단 <code>Box&lt;Apple&gt; b = new FruitBox&lt;Apple&gt;();</code>처럼 클래스 자체의 다형성은 가능</p>
</li>
</ul>
<p><strong>1.4 제한된 지네릭 클래스</strong>: <code>class FruitBox&lt;T extends Fruit&gt;</code> → T에는 Fruit과 그 자손만 대입 가능. 인터페이스도 extends로 쓰고, 여러 개는 <code>&amp;</code>로 연결 (<code>&lt;T extends Fruit &amp; Eatable&gt;</code>)</p>
<p><strong>1.5 와일드 카드 <code>?</code></strong>: 매개변수 등에서 여러 타입을 받을 수 있게 함</p>
<div class="tw"><table><thead><tr><th>표기</th><th>의미</th></tr>
</thead>
<tbody><tr><td><code>&lt;? extends T&gt;</code></td><td>T와 그 자손만 (상한 제한)</td></tr>
<tr><td><code>&lt;? super T&gt;</code></td><td>T와 그 조상만 (하한 제한)</td></tr>
<tr><td><code>&lt;?&gt;</code></td><td>모든 타입 (<code>&lt;? extends Object&gt;</code>와 같음)</td></tr>
</tbody>
</table>
</div>
<p>예: <code>static Juice makeJuice(FruitBox&lt;? extends Fruit&gt; box)</code> → <code>FruitBox&lt;Apple&gt;</code>, <code>FruitBox&lt;Grape&gt;</code> 모두 받을 수 있음.</p>
<p><strong>1.6 지네릭 메서드</strong>: 반환타입 앞에 타입 변수를 선언한 메서드. <code>static &lt;T extends Comparable&lt;? super T&gt;&gt; void sort(List&lt;T&gt; list)</code>처럼 쓰이며, 클래스의 타입 변수와는 별개. 호출 시 타입은 보통 컴파일러가 추론</p>
<p><strong>1.7~1.8 형변환과 타입 제거</strong></p>
<ul><li><p>지네릭 타입과 원시 타입 간 형변환은 가능하지만 경고가 남. 대입된 타입이 다른 지네릭 타입 간(<code>Box&lt;Object&gt;</code> ↔ <code>Box&lt;String&gt;</code>)은 불가</p>
</li>
<li><p><strong>타입 제거(erasure)</strong>: 컴파일러는 타입을 검사하고 형변환을 넣은 뒤 지네릭 타입을 지움. 실행 시에는 지네릭 정보가 없음 (예전 코드와의 호환성 때문). 그래서 <code>instanceof Box&lt;String&gt;</code>이나 <code>new T()</code>가 불가</p>
</li>
</ul>
<h2 id="j-104">2. 열거형(enums)</h2>
<ul><li><p><strong>2.1 열거형란?</strong> 서로 관련된 상수를 편리하게 선언하는 방법. 값뿐 아니라 <strong>타입까지 검사</strong>하므로 int 상수보다 안전</p>
</li>
<li><p><strong>2.2 정의와 사용</strong>: <code>enum Direction { EAST, SOUTH, WEST, NORTH }</code> → <code>Direction.EAST</code>. 비교는 <code>==</code>와 <code>compareTo()</code>(<code>&lt;</code>, <code>&gt;</code>는 불가), switch의 case에 사용 가능(case에는 상수 이름만)</p>
</li>
<li><p>기본 메서드: <code>values()</code>(모든 상수 배열), <code>valueOf(&quot;EAST&quot;)</code>, <code>name()</code>, <code>ordinal()</code>(정의된 순서, 0부터. 내부용이므로 값으로 쓰지 말 것)</p>
</li>
<li><p><strong>2.3 멤버 추가</strong>: 상수에 값을 지정하려면 인스턴스 변수와 생성자를 추가. 생성자는 묵시적으로 private</p>
</li>
<li><p><strong>2.4 열거형의 이해</strong>: 열거형 상수 하나하나가 그 열거형의 객체(<code>static final</code>)이며, 모든 열거형은 <code>java.lang.Enum</code>의 자손. 상수별로 추상 메서드를 다르게 구현할 수도 있음</p>
</li>
</ul>
<pre><code><span class="hl-kw">enum</span> Direction {
    EAST(<span class="hl-num">1</span>, <span class="hl-str">"&gt;"</span>), SOUTH(<span class="hl-num">2</span>, <span class="hl-str">"V"</span>), WEST(<span class="hl-num">3</span>, <span class="hl-str">"&lt;"</span>), NORTH(<span class="hl-num">4</span>, <span class="hl-str">"^"</span>);   <span class="hl-com">// 끝에 ; 필요</span>

    <span class="hl-kw">private</span> <span class="hl-kw">final</span> <span class="hl-kw">int</span> value;
    <span class="hl-kw">private</span> <span class="hl-kw">final</span> String symbol;
    Direction(<span class="hl-kw">int</span> value, String symbol) {   <span class="hl-com">// private 생성자</span>
        <span class="hl-kw">this</span>.value = value;
        <span class="hl-kw">this</span>.symbol = symbol;
    }
    <span class="hl-kw">int</span> getValue() { <span class="hl-kw">return</span> value; }
    String getSymbol() { <span class="hl-kw">return</span> symbol; }
}</code></pre>
<h2 id="j-105">3. 애너테이션(annotation)</h2>
<ul><li><p><strong>3.1 애너테이션이란?</strong> 프로그램의 소스코드에 붙이는 ‘다른 프로그램(컴파일러, 프레임워크 등)을 위한 정보’. <code>@이름</code> 형태이며 프로그램 동작에는 영향을 주지 않음</p>
</li>
</ul>
<div class="tw"><table><thead><tr><th>표준 애너테이션 (3.2)</th><th>의미</th></tr>
</thead>
<tbody><tr><td><code>@Override</code></td><td>오버라이딩한 메서드임을 알림. 조상에 같은 메서드가 없으면(오타 등) 컴파일 에러</td></tr>
<tr><td><code>@Deprecated</code></td><td>앞으로 사용하지 않을 것을 권장하는 대상</td></tr>
<tr><td><code>@FunctionalInterface</code></td><td>함수형 인터페이스(추상 메서드 1개)임을 컴파일러가 검사 (14장)</td></tr>
<tr><td><code>@SuppressWarnings</code></td><td>특정 경고 메시지를 나타나지 않게 함 (<code>&quot;unchecked&quot;</code>, <code>&quot;deprecation&quot;</code> 등)</td></tr>
<tr><td><code>@SafeVarargs</code></td><td>지네릭 가변인자 관련 경고 억제</td></tr>
</tbody>
</table>
</div>
<ul><li><p><strong>3.3 메타 애너테이션</strong>: 애너테이션을 정의할 때 쓰는 애너테이션. <code>@Target</code>(적용 대상: 클래스, 메서드, 필드 등), <code>@Retention</code>(유지 기간: SOURCE, CLASS, RUNTIME), <code>@Documented</code>, <code>@Inherited</code>, <code>@Repeatable</code></p>
</li>
<li><p><strong>3.4 애너테이션 타입 정의하기</strong>: <code>@interface 이름 { 타입 요소이름() default 값; }</code>. 요소의 타입은 기본형, String, enum, 애너테이션, Class와 그 배열만 가능. 요소가 value 하나면 이름 생략 가능 (<code>@SuppressWarnings(&quot;unchecked&quot;)</code>)</p>
</li>
</ul>
<h2 id="j-106">4. 레코드(record)</h2>
<ul><li><p><strong>4.1 레코드란?</strong> (JDK 16+) 데이터를 담기만 하는 변경 불가 클래스를 한 줄로 정의. 생성자, getter, <code>equals()</code>, <code>hashCode()</code>, <code>toString()</code>을 컴파일러가 자동으로 만듦</p>
</li>
<li><p><strong>4.2 특징</strong>: 필드는 모두 <code>private final</code>, getter 이름은 <code>getX()</code>가 아닌 <code>x()</code>. 다른 클래스를 상속할 수 없고(암묵적으로 Record를 상속, final), 인터페이스 구현과 static 멤버·메서드 추가는 가능. 유효성 검사는 **압축 생성자(compact constructor)**에서</p>
</li>
<li><p><strong>4.3 중첩</strong>: 레코드 안에 다른 레코드를 필드로 가질 수 있고, 레코드 패턴(JDK 21)으로 한 번에 분해 가능: <code>if (obj instanceof Line(Point(var x1, var y1), Point p2))</code></p>
</li>
<li><p><strong>4.4 지네릭 레코드</strong>: <code>record Pair&lt;K, V&gt;(K key, V value) { }</code></p>
</li>
<li><p><strong>4.5 레코드와 애너테이션</strong>: 레코드 요소에 붙인 애너테이션은 @Target에 따라 필드·생성자 매개변수·getter 등에 적용됨</p>
</li>
</ul>
<pre><code><span class="hl-kw">record</span> Point(<span class="hl-kw">int</span> x, <span class="hl-kw">int</span> y) {
    Point {                                  <span class="hl-com">// 압축 생성자: 매개변수 목록 생략</span>
        <span class="hl-kw">if</span> (x &lt; <span class="hl-num">0</span> || y &lt; <span class="hl-num">0</span>) <span class="hl-kw">throw</span> <span class="hl-kw">new</span> IllegalArgumentException(<span class="hl-str">"음수 불가"</span>);
    }
}
<span class="hl-kw">class</span> RecordEx {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        Point p = <span class="hl-kw">new</span> Point(<span class="hl-num">1</span>, <span class="hl-num">2</span>);
        System.out.println(p.x() + <span class="hl-str">", "</span> + p);            <span class="hl-com">// 1, Point[x=1, y=2]</span>
        System.out.println(p.equals(<span class="hl-kw">new</span> Point(<span class="hl-num">1</span>, <span class="hl-num">2</span>)));   <span class="hl-com">// true (내용 비교)</span>
    }
}</code></pre>
<h2 id="j-107">5. 실드 클래스(sealed class)</h2>
<ul><li><p><strong>5.1 실드 클래스란?</strong> (JDK 17+) 상속받을 수 있는 자손 클래스를 <code>permits</code>로 <strong>제한</strong>하는 클래스. final(상속 금지)과 일반 클래스(모두 허용)의 중간</p>
</li>
<li><p><strong>5.2 제약 조건</strong>: 허용된 자손은 ① 반드시 그 클래스를 직접 상속해야 하고 ② <code>final</code>, <code>sealed</code>, <code>non-sealed</code> 중 하나를 붙여야 하며 ③ 같은 패키지(또는 모듈)에 있어야 함. 인터페이스에도 사용 가능</p>
</li>
<li><p><strong>5.3 실드 클래스와 switch식</strong>: 자손의 종류가 정해져 있으므로 switch 패턴 매칭에서 모든 경우를 다루면 <strong>default를 생략</strong>할 수 있고, 빠진 경우가 있으면 컴파일 에러로 알려줌</p>
</li>
</ul>
<pre><code><span class="hl-kw">sealed</span> <span class="hl-kw">interface</span> Shape <span class="hl-kw">permits</span> Circle, Square { }
<span class="hl-kw">record</span> Circle(<span class="hl-kw">double</span> r) <span class="hl-kw">implements</span> Shape { }    <span class="hl-com">// record는 암묵적으로 final</span>
<span class="hl-kw">record</span> Square(<span class="hl-kw">double</span> side) <span class="hl-kw">implements</span> Shape { }

<span class="hl-kw">class</span> SealedEx {
    <span class="hl-kw">static</span> <span class="hl-kw">double</span> area(Shape s) {
        <span class="hl-kw">return</span> <span class="hl-kw">switch</span> (s) {                         <span class="hl-com">// 모든 자손을 다루므로 default 불필요</span>
            <span class="hl-kw">case</span> Circle c -&gt; Math.PI * c.r() * c.r();
            <span class="hl-kw">case</span> Square q -&gt; q.side() * q.side();
        };
    }
}</code></pre>
<h2 id="j-108">6. 모듈(module)</h2>
<ul><li><p><strong>6.1 모듈이란?</strong> (JDK 9+) 패키지를 묶는 상위 단위. 어떤 패키지를 외부에 공개하고, 어떤 모듈에 의존하는지 명시해 캐슐화를 패키지 수준까지 넓힘. JDK 자체도 여러 모듈로 나뉘어 있음</p>
</li>
<li><p><strong>6.2 모듈 설명자 module-info.java</strong>: 모듈의 최상위 디렉터리에 위치</p>
</li>
</ul>
<div class="tw"><table><thead><tr><th>키워드</th><th>의미</th></tr>
</thead>
<tbody><tr><td><code>requires 모듈</code></td><td>이 모듈이 의존하는 다른 모듈</td></tr>
<tr><td><code>exports 패키지</code></td><td>외부에 공개하는 패키지 (나머지는 숨겨짐)</td></tr>
<tr><td><code>opens 패키지</code></td><td>실행 중 리플렉션 접근을 허용</td></tr>
<tr><td><code>requires transitive 모듈</code></td><td>내 모듈을 쓰는 쪽도 그 모듈을 자동으로 의존 (전이적 의존성)</td></tr>
<tr><td><code>uses</code> / <code>provides ... with</code></td><td>서비스 사용 / 구현 제공</td></tr>
</tbody>
</table>
</div>
<ul><li><p><strong>6.3 이름없는 모듈과 java.base</strong>: module-info가 없는 클래스들은 ‘이름없는 모듈’에 속하고, java.lang·java.util 등이 든 <strong>java.base</strong>는 모든 모듈이 자동으로 의존 (requires 생략)</p>
</li>
<li><p><strong>6.4 전이적·순환 의존성</strong>: A가 B를, B가 A를 서로 requires하는 순환 의존은 허용되지 않음</p>
</li>
<li><p><strong>6.5 컴파일과 실행</strong>: <code>javac -d out --module-source-path src -m 모듈명</code>, <code>java --module-path out -m 모듈명/패키지.클래스</code></p>
</li>
<li><p><strong>6.6 자동 모듈</strong>: module-info가 없는 기존 jar 파일을 모듈 경로에 두면 자동으로 모듈로 취급 (모든 패키지를 exports)</p>
</li>
</ul>
<pre><code><span class="hl-com">// module-info.java</span>
<span class="hl-kw">module</span> com.example.app {
    <span class="hl-kw">requires</span> java.sql;              <span class="hl-com">// 다른 모듈 사용</span>
    <span class="hl-kw">exports</span> com.example.app.api;    <span class="hl-com">// 이 패키지만 외부에 공개</span>
}</code></pre>
<h1 id="j-ch-13">13장. 쓰레드 (목차 기반)</h1>
<p>쓰레드는 프로세스 안에서 실제로 작업을 수행하는 단위이며, 여러 쓰레드가 자원을 공유하므로 동기화가 필요합니다. 샘플에 본문이 없어 목차 순서대로 표준 자바 개념을 정리했습니다.</p>
<h2 id="j-109">1.1 프로세스와 쓰레드</h2>
<ul><li><p><strong>프로세스</strong>: 실행 중인 프로그램. OS로부터 메모리 등 자원을 할당받음</p>
</li>
<li><p><strong>쓰레드</strong>: 프로세스의 자원을 이용해 실제로 작업을 수행하는 것. 모든 프로세스에는 최소 하나의 쓰레드가 있음 (자바는 main 쓰레드)</p>
</li>
<li><p><strong>멀티쓰레딩의 장점</strong>: CPU 사용률 향상, 자원을 효율적으로 사용, 사용자 응답성 향상(채팅하면서 파일 전송), 작업이 분리되어 코드가 간결</p>
</li>
<li><p><strong>단점</strong>: 같은 자원을 공유하므로 동기화 문제, 서로 자원을 기다리다 멈추는 교착상태(deadlock)가 생길 수 있음</p>
</li>
</ul>
<h2 id="j-110">1.2~1.3 쓰레드의 구현과 실행, start()와 run()</h2>
<pre><code><span class="hl-kw">class</span> MyThread <span class="hl-kw">extends</span> Thread {                 <span class="hl-com">// 방법 1: Thread 상속</span>
    <span class="hl-kw">public</span> <span class="hl-kw">void</span> run() { System.out.println(getName()); }
}
<span class="hl-kw">class</span> MyRunnable <span class="hl-kw">implements</span> Runnable {           <span class="hl-com">// 방법 2: Runnable 구현 (더 많이 씁)</span>
    <span class="hl-kw">public</span> <span class="hl-kw">void</span> run() { System.out.println(Thread.currentThread().getName()); }
}
<span class="hl-kw">class</span> ThreadEx {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) {
        <span class="hl-kw">new</span> MyThread().start();
        <span class="hl-kw">new</span> Thread(<span class="hl-kw">new</span> MyRunnable()).start();
        <span class="hl-kw">new</span> Thread(() -&gt; System.out.println(<span class="hl-str">"람다"</span>)).start();   <span class="hl-com">// 람다식으로 간단히</span>
    }
}</code></pre>
<ul><li><p>Runnable을 구현하면 다른 클래스를 상속받을 수 있어서 더 유연함</p>
</li>
<li><p>**start()**는 새 호출 스택을 만들고 그 위에서 run()을 실행 → 동시에 실행됨</p>
</li>
<li><p><strong>run()을 직접 호출</strong>하면 새 쓰레드가 아니라 현재 쓰레드에서 메서드를 부르는 것뿐</p>
</li>
<li><p>한 번 종료된 쓰레드는 다시 start()할 수 없음 (IllegalThreadStateException)</p>
</li>
<li><p>실행 순서는 OS 스케줄러가 정하므로 실행할 때마다 달라질 수 있음</p>
</li>
</ul>
<h2 id="j-111">1.4~1.7 싱글·멀티쓰레드, 우선순위, 쓰레드 그룹, 데몬 쓰레드</h2>
<ul><li><p>싱글코어에서 단순 계산만 하면 작업 전환(context switching) 비용 때문에 멀티쓰레드가 오히려 느릴 수 있음. 입출력 대기가 있는 작업에서 효과가 큼</p>
</li>
<li><p><strong>우선순위</strong>: <code>setPriority(1~10)</code>, 기본값 5(<code>NORM_PRIORITY</code>). 높을수록 더 많은 실행시간을 받을 가능성이 커지지만 OS에 따라 달라 보장되지 않음</p>
</li>
<li><p><strong>쓰레드 그룹</strong>: 관련된 쓰레드를 묶어 관리. 지정하지 않으면 생성한 쓰레드의 그룹(main)에 속함</p>
</li>
<li><p><strong>데몬 쓰레드</strong>: 다른 일반 쓰레드를 돕는 보조 쓰레드(가비지 컬렉터, 자동 저장). 일반 쓰레드가 모두 끝나면 강제로 종료됨. <code>setDaemon(true)</code>는 <strong>start() 전에</strong> 호출</p>
</li>
</ul>
<h2 id="j-112">1.8 쓰레드의 실행제어</h2>
<div class="tw"><table><thead><tr><th>메서드</th><th>설명</th></tr>
</thead>
<tbody><tr><td><code>static sleep(long ms)</code></td><td>현재 쓰레드를 지정한 시간 동안 일시정지. InterruptedException 처리 필요</td></tr>
<tr><td><code>join()</code></td><td>다른 쓰레드가 끝날 때까지 기다림</td></tr>
<tr><td><code>interrupt()</code></td><td>작업을 취소하라고 요청. sleep·join·wait 중이면 InterruptedException 발생</td></tr>
<tr><td><code>isInterrupted()</code> / <code>static interrupted()</code></td><td>interrupt 여부 확인 / 확인 후 false로 초기화</td></tr>
<tr><td><code>static yield()</code></td><td>자신의 실행시간을 다른 쓰레드에게 양보</td></tr>
<tr><td><code>getState()</code></td><td>상태 확인: NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED</td></tr>
</tbody>
</table>
</div>
<ul><li><p>suspend(), resume(), stop()은 교착상태를 일으키기 쉬워 deprecated</p>
</li>
</ul>
<h2 id="j-113">2.1 synchronized를 이용한 동기화</h2>
<p>여러 쓰레드가 같은 데이터를 동시에 바꾸면 결과가 꼬일 수 있습니다. <strong>임계 영역</strong>(critical section)을 정하고, 락(lock)을 얻은 한 쓰레드만 들어가게 하는 것이 동기화입니다.</p>
<pre><code><span class="hl-kw">class</span> Account {
    <span class="hl-kw">private</span> <span class="hl-kw">int</span> balance = <span class="hl-num">1000</span>;
    <span class="hl-kw">public</span> <span class="hl-kw">synchronized</span> <span class="hl-kw">void</span> withdraw(<span class="hl-kw">int</span> money) {        <span class="hl-com">// 메서드 전체를 임계 영역으로</span>
        <span class="hl-kw">if</span> (balance &gt;= money) balance -= money;
    }
    <span class="hl-kw">public</span> <span class="hl-kw">void</span> deposit(<span class="hl-kw">int</span> money) {
        <span class="hl-kw">synchronized</span> (<span class="hl-kw">this</span>) { balance += money; }         <span class="hl-com">// 특정 영역만 임계 영역으로</span>
    }
}</code></pre>
<ul><li><p>임계 영역은 성능을 떨어뜨리므로 필요한 부분만 최소한으로. 공유 변수는 private으로 두어 밖에서 직접 바꾸지 못하게 함</p>
</li>
</ul>
<h2 id="j-114">2.2 wait()과 notify()</h2>
<ul><li><p>락을 가진 쓰레드가 작업을 진행할 수 없을 때 <code>wait()</code>으로 락을 내려놓고 기다림(대기실). 조건이 만족되면 다른 쓰레드가 <code>notify()</code>(하나)나 <code>notifyAll()</code>(모두)로 깨움</p>
</li>
<li><p>Object의 메서드이며 <strong>synchronized 블럭 안에서만</strong> 호출 가능</p>
</li>
<li><p>예: 요리사(음식 추가)와 손님(음식 소비)이 테이블을 공유하는 생산자-소비자 문제. notify는 어떤 쓰레드가 깨어날지 알 수 없어 오래 기다리는 기아(starvation)가 생길 수 있음</p>
</li>
</ul>
<h2 id="j-115">2.3~2.5 Lock과 Condition, volatile, fork &amp; join</h2>
<ul><li><p><strong>ReentrantLock</strong>: <code>lock()</code>과 <code>unlock()</code>으로 직접 락을 걸고 푸는 동기화. unlock은 반드시 <strong>finally</strong>에서. <code>tryLock()</code>으로 기다리지 않고 시도 가능</p>
</li>
<li><p><strong>ReentrantReadWriteLock</strong>: 읽기 락은 여러 쓰레드가 동시에, 쓰기 락은 하나만. <strong>StampedLock</strong>은 낙관적 읽기 제공</p>
</li>
<li><p><strong>Condition</strong>: <code>lock.newCondition()</code>으로 대기실을 여러 개 만들어 <code>await()</code>·<code>signal()</code>로 원하는 쓰레드(요리사/손님)만 깨움</p>
</li>
<li><p><strong>volatile</strong>: 변수를 CPU 캐시가 아닌 메모리에서 직접 읽고 쓰게 해서 다른 쓰레드가 바꾼 값이 바로 보이게 함. long·double의 읽기·쓰기를 원자화하지만, <code>count++</code> 같은 복합 연산까지 동기화하지는 않음</p>
</li>
<li><p><strong>fork &amp; join 프레임웍</strong>: 큰 작업을 작게 나눠 여러 쓰레드가 처리한 뒤 합침. <code>RecursiveTask</code>(결과 있음)나 <code>RecursiveAction</code>(없음)을 상속해 <code>compute()</code>를 구현, <code>fork()</code>는 비동기로 작업 큐에 넣고 <code>join()</code>은 결과를 기다림. 한가한 쓰레드가 다른 쓰레드의 작업을 가져오는 work stealing</p>
</li>
</ul>
<h2 id="j-116">3. 가상 쓰레드(virtual thread, JDK 21)</h2>
<ul><li><p><strong>3.1 가상 쓰레드란?</strong> OS 쓰레드에 1:1로 연결된 기존 쓰레드(플랫폼 쓰레드)와 달리, JVM이 관리하는 가벼운 쓰레드. 수백만 개도 만들 수 있어 요청마다 쓰레드를 하나씩 쓰는 서버에 적합</p>
</li>
<li><p><strong>3.2 생성과 사용</strong>: <code>Thread.ofVirtual().start(r)</code>, <code>Thread.startVirtualThread(r)</code>, <code>Executors.newVirtualThreadPerTaskExecutor()</code></p>
</li>
<li><p><strong>3.3~3.4 특징과 플랫폼 쓰레드 비교</strong>: 가상 쓰레드는 항상 데몬 쓰레드이고 우선순위를 바꿀 수 없음. 입출력 대기 중에는 실제 OS 쓰레드(캐리어 쓰레드)에서 내려와 다른 가상 쓰레드가 쓸 수 있게 함. 생성 비용과 메모리가 매우 작음</p>
</li>
</ul>
<div class="tw"><table><thead><tr><th>비교</th><th>플랫폼 쓰레드</th><th>가상 쓰레드</th></tr>
</thead>
<tbody><tr><td>관리</td><td>OS</td><td>JVM</td></tr>
<tr><td>개수</td><td>수천 개 수준</td><td>수백만 개 가능</td></tr>
<tr><td>쓰레드 풀</td><td>비용이 커서 풀로 재사용</td><td>가벼워서 풀링하지 않고 작업마다 새로 생성</td></tr>
<tr><td>적합한 작업</td><td>CPU 연산 위주</td><td>입출력 대기가 많은 작업</td></tr>
</tbody>
</table>
</div>
<ul><li><p><strong>3.5 상태</strong>: 실행 중에는 캐리어 쓰레드에 올라가(mount) 있다가, 대기하면 내려옴(unmount)</p>
</li>
<li><p><strong>3.6 작성 시 주의사항</strong>: 풀링하지 말 것, 오래 걸리는 작업을 synchronized 안에서 하면 캐리어 쓰레드에 고정(pinning)될 수 있으므로 ReentrantLock 권장(JDK 21 기준), ThreadLocal에 무거운 객체를 담지 말 것</p>
</li>
<li><p><strong>3.7 Continuation과 StackChunk</strong>: 가상 쓰레드를 멈추고 재개하는 내부 구조. 멈출 때 호출 스택을 StackChunk 객체로 힙에 저장하고, 재개할 때 다시 가져옴</p>
</li>
</ul>
<h2 id="j-117">4. Executor와 ExecutorService</h2>
<ul><li><p><strong>4.1 Executor</strong>: 작업(Runnable)을 넘기면 실행해주는 인터페이스. 쓰레드를 직접 만들고 관리하는 일을 대신함</p>
</li>
<li><p><strong>4.2 ThreadFactory</strong>: 쓰레드를 만드는 방법(이름, 데몬 여부 등)을 지정</p>
</li>
<li><p><strong>4.3 ExecutorService</strong>: 작업 제출(<code>submit</code>, <code>invokeAll</code>, <code>invokeAny</code>)과 종료(<code>shutdown</code>, <code>awaitTermination</code>)를 관리. 다 쓴 뒤에는 반드시 shutdown하거나 try-with-resources(JDK 19+)로 닫음</p>
</li>
<li><p><strong>4.4 쓰레드 풀</strong>: 쓰레드를 미리 만들어 두고 재사용. <code>Executors.newFixedThreadPool(n)</code>, <code>newCachedThreadPool()</code>, <code>newSingleThreadExecutor()</code>, <code>newScheduledThreadPool(n)</code></p>
</li>
<li><p><strong>4.5 Future</strong>: <code>submit(Callable)</code>의 결과. <code>get()</code>은 결과가 나올 때까지 기다리고, <code>isDone()</code>으로 완료 확인, <code>cancel()</code>로 취소. Callable은 Runnable과 달리 값을 반환하고 예외를 던질 수 있음</p>
</li>
<li><p><strong>4.6 CompletableFuture</strong>: 기다리지 않고 작업을 이어 붙이는 비동기 처리. <code>supplyAsync</code> → <code>thenApply</code>(결과 변환) → <code>thenAccept</code>(소비), <code>thenCombine</code>(두 결과 합치기), <code>exceptionally</code>(예외 처리), <code>join()</code>(결과 기다리기)</p>
</li>
</ul>
<pre><code><span class="hl-kw">import</span> java.util.concurrent.*;

<span class="hl-kw">class</span> ExecutorEx {
    <span class="hl-kw">public</span> <span class="hl-kw">static</span> <span class="hl-kw">void</span> main(String[] args) <span class="hl-kw">throws</span> Exception {
        <span class="hl-kw">try</span> (ExecutorService es = Executors.newFixedThreadPool(<span class="hl-num">2</span>)) {
            Future&lt;Integer&gt; f = es.submit(() -&gt; <span class="hl-num">1</span> + <span class="hl-num">2</span>);        <span class="hl-com">// Callable: 값을 반환</span>
            System.out.println(f.get());                      <span class="hl-com">// 3 (끝날 때까지 기다림)</span>
        }
        <span class="hl-kw">int</span> r = CompletableFuture.supplyAsync(() -&gt; <span class="hl-num">10</span>)
                .thenApply(x -&gt; x * <span class="hl-num">2</span>)
                .join();
        System.out.println(r);                                <span class="hl-com">// 20</span>
    }
}</code></pre>
`;
