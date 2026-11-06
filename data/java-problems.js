// JAVA 실습 문제 (520문제)
// n: 번호(기록 저장에 쓰여요. 바꾸지 마세요), ch: 장, lv: 1 기초 · 2 응용 · 3 심화
// t: 'mc' 객관식(ans = 정답 보기 번호, 0부터) · 'out' 출력 결과(ans = 정확한 출력) · 'self' 직접 작성(answer = 모범 답안)
// kind(코드 작성 문제): 'b' main 안 문장 · 'm' static 메서드 · 'c' 클래스. code = 사용 예, demo = 사용 예 실행 결과
// q, exp, choices 안에는 HTML(<code>, <b>)을 쓸 수 있어요. code·answer·ans·demo는 일반 텍스트예요.
// 고친 뒤에는 `node tools/verify-java.js`로 출력 정답이 실제 실행 결과와 같은지 확인하세요.
var WJX = window.WJX = window.WJX || {};
WJX.chapters = [
  {
    "no": 1,
    "title": "1장 자바를 시작하기 전에",
    "short": "시작하기 전에"
  },
  {
    "no": 2,
    "title": "2장 변수",
    "short": "변수"
  },
  {
    "no": 3,
    "title": "3장 연산자",
    "short": "연산자"
  },
  {
    "no": 4,
    "title": "4장 조건문과 반복문",
    "short": "조건문과 반복문"
  },
  {
    "no": 5,
    "title": "5장 배열",
    "short": "배열"
  },
  {
    "no": 6,
    "title": "6장 객체지향 프로그래밍 I",
    "short": "객체지향 I"
  },
  {
    "no": 7,
    "title": "7장 객체지향 프로그래밍 II",
    "short": "객체지향 II"
  },
  {
    "no": 8,
    "title": "8장 예외 처리",
    "short": "예외 처리"
  },
  {
    "no": 9,
    "title": "9장 java.lang패키지와 유용한 클래스",
    "short": "java.lang"
  },
  {
    "no": 10,
    "title": "10장 날짜와 시간 & 형식화",
    "short": "날짜와 시간"
  },
  {
    "no": 11,
    "title": "11장 컬렉션 프레임웍",
    "short": "컬렉션"
  },
  {
    "no": 12,
    "title": "12장 모던 자바 기능",
    "short": "모던 자바"
  },
  {
    "no": 13,
    "title": "13장 쓰레드",
    "short": "쓰레드"
  }
];

WJX.problems = [
  {
    n: 1,
    ch: 1,
    lv: 1,
    t: "mc",
    q: "자바 소스 파일 <code>Hello.java</code>를 <code>javac</code>로 컴파일하면 무엇이 만들어지나요?",
    choices: ["Hello.exe (OS가 바로 실행하는 기계어 파일)", "Hello.class (JVM이 실행하는 바이트코드 파일)", "Hello.jar (압축된 라이브러리 파일)", "Hello.txt (실행 결과를 담은 파일)"],
    ans: 1,
    exp: "<code>javac</code>는 소스를 <b>바이트코드</b>(.class)로 바꿔요. 이 바이트코드를 OS별 JVM이 실행하기 때문에 같은 .class 파일을 어느 운영체제에서나 쓸 수 있어요."
  },
  {
    n: 2,
    ch: 1,
    lv: 1,
    t: "mc",
    q: "JVM에 대한 설명으로 <b>틀린</b> 것은?",
    choices: ["자바 프로그램은 OS 위에서 바로 실행되지 않고 JVM을 거쳐 실행된다", "JVM 덕분에 한 번 작성한 코드를 여러 OS에서 실행할 수 있다", "JVM은 모든 운영체제에서 똑같은 하나의 프로그램이라 OS별로 설치할 필요가 없다", "가비지 컬렉터가 사용하지 않는 메모리를 자동으로 정리한다"],
    ans: 2,
    exp: "자바 프로그램은 OS에 독립적이지만, <b>JVM은 OS에 맞는 것을 따로 설치</b>해야 해요(Windows용, macOS용, Linux용)."
  },
  {
    n: 3,
    ch: 1,
    lv: 2,
    t: "mc",
    q: "다음 중 LTS(장기 지원) 버전이 <b>아닌</b> 것은?",
    choices: ["JDK 8", "JDK 11", "JDK 14", "JDK 21"],
    ans: 2,
    exp: "LTS는 JDK 8, 11, 17, 21이에요. JDK 14는 switch식이 정식으로 추가된 버전이지만 LTS는 아니에요."
  },
  {
    n: 4,
    ch: 1,
    lv: 2,
    t: "mc",
    q: "파일 이름이 <code>Hello2.java</code>일 때 컴파일 에러가 나는 경우는?",
    choices: ["<code>public class Hello2 {}</code> 와 <code>class Hello3 {}</code>", "<code>class Hello2 {}</code> 와 <code>class Hello3 {}</code>", "<code>public class Hello2 {}</code> 와 <code>public class Hello3 {}</code>", "<code>class Hello3 {}</code> 하나만 있음"],
    ans: 2,
    exp: "한 소스 파일에 <b>public class는 하나만</b> 둘 수 있고, 그 이름이 파일 이름과 같아야 해요. public class가 없으면 파일 이름은 자유예요."
  },
  {
    n: 5,
    ch: 1,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 화면에 출력되는 결과를 쓰세요.",
    code: String.raw`System.out.print("A");
System.out.println("B");
System.out.println("C");
System.out.print("D");`,
    ans: String.raw`AB
C
D`,
    exp: "<code>print</code>는 줄을 바꾸지 않고, <code>println</code>은 출력한 뒤 줄을 바꿔요."
  },
  {
    n: 6,
    ch: 1,
    lv: 2,
    t: "mc",
    q: "컴파일할 때 <code>cannot find symbol</code> 에러가 났어요. 가장 가능성이 높은 원인은?",
    choices: ["문장 끝에 세미콜론을 빠뜨렸다", "변수나 메서드 이름을 잘못 썼거나 대소문자가 틀렸다", "main 메서드가 없다", "괄호 { }의 개수가 맞지 않는다"],
    ans: 1,
    exp: "<code>cannot find symbol</code>은 ‘그런 이름을 찾을 수 없다’는 뜻이에요. 선언하지 않았거나 오타, 대소문자 차이(<code>system</code> ↔ <code>System</code>)가 흔한 원인이에요."
  },
  {
    n: 7,
    ch: 1,
    lv: 1,
    t: "self",
    q: "화면에 <code>Hello, Java.</code>를 출력하는 프로그램을 클래스 이름 <code>Hello</code>로 처음부터 작성하세요.",
    answer: String.raw`class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Java.");
    }
}`,
    kw: ["class Hello", "public static void main", "String[] args", "System.out.println"],
    exp: "모든 코드는 클래스 안에 있어야 하고, 프로그램은 <code>main</code> 메서드에서 시작해요. <code>main</code>의 선언부는 항상 똑같이 써요."
  },
  {
    n: 8,
    ch: 1,
    lv: 3,
    t: "self",
    q: "<code>java Hello</code>로 프로그램을 실행하면 JVM 안에서 어떤 순서로 일이 일어나는지 세 단계로 설명하세요.",
    answer: String.raw`1. 실행에 필요한 클래스 파일(Hello.class)을 메모리에 로드한다.
2. 클래스 파일을 검사한다(파일 형식, 악성코드 여부).
3. 지정된 클래스의 main 메서드를 호출해서 첫 문장부터 실행하고, 마지막 문장까지 수행하면 종료한다.`,
    kw: ["로드", "검사", "main"],
    exp: "책 3.3절의 실행 과정이에요. main 메서드가 없으면 3단계에서 실행할 수 없어 에러가 나요."
  },
  {
    n: 9,
    ch: 2,
    lv: 1,
    t: "out",
    q: "두 변수의 값을 바꾸는 코드예요. 출력 결과를 쓰세요.",
    code: String.raw`int x = 10, y = 20;
int tmp = x;
x = y;
y = tmp;
System.out.println("x=" + x + ", y=" + y);`,
    ans: "x=20, y=10",
    exp: "임시 변수 tmp에 x를 잠깐 맡겨 두고 값을 교환하는 대표적인 방법이에요."
  },
  {
    n: 10,
    ch: 2,
    lv: 2,
    t: "out",
    q: "문자열 결합 순서에 주의해서 출력 결과를 쓰세요.",
    code: String.raw`System.out.println(7 + 7 + "");
System.out.println("" + 7 + 7);
System.out.println(7 + "7");
System.out.println('A' + 1);`,
    ans: String.raw`14
77
77
66`,
    exp: "덧셈은 왼쪽부터 계산해요. 숫자끼리 먼저 더한 뒤 문자열을 만나면 결합이 돼요. <code>'A' + 1</code>은 문자열이 없어서 문자 A의 코드(65)에 1을 더한 정수예요."
  },
  {
    n: 11,
    ch: 2,
    lv: 2,
    t: "out",
    q: "큰 타입에서 작은 타입으로 형변환할 때 출력 결과를 쓰세요.",
    code: String.raw`int i = 300;
byte b = (byte) i;
double d = 3.99;
int n = (int) d;
System.out.println(b);
System.out.println(n);`,
    ans: String.raw`44
3`,
    exp: "300은 2진수로 <code>1 0010 1100</code>이고 byte(8 bit)로 바꾸면 앞쪽이 잘려 <code>0010 1100</code> = 44가 돼요. 실수를 정수로 바꾸면 소수점 이하는 <b>반올림이 아니라 버림</b>이에요."
  },
  {
    n: 12,
    ch: 2,
    lv: 2,
    t: "out",
    q: "char 타입이 실제로 무엇을 저장하는지 생각하며 출력 결과를 쓰세요.",
    code: String.raw`char c = 'A';
c++;
System.out.println(c);
System.out.println((int) c);
System.out.println((char) 97);`,
    ans: String.raw`B
66
a`,
    exp: "char는 문자의 유니코드(정수)를 저장해요. A는 65이므로 1 증가하면 66 = B, 97은 a예요."
  },
  {
    n: 13,
    ch: 2,
    lv: 3,
    t: "out",
    q: "오버플로우가 일어나면 어떻게 되는지 출력 결과를 쓰세요.",
    code: String.raw`short s = 32767;
s++;
int max = Integer.MAX_VALUE;
System.out.println(s);
System.out.println(max + 1);`,
    ans: String.raw`-32768
-2147483648`,
    exp: "정수형은 최대값에서 1을 더하면 에러 없이 <b>최소값</b>으로 돌아가요(오버플로우). short 최소값은 -32768, int 최소값은 -2147483648이에요."
  },
  {
    n: 14,
    ch: 2,
    lv: 2,
    t: "out",
    q: "printf의 지시자와 폭 지정을 보고 출력 결과를 쓰세요.",
    code: String.raw`System.out.printf("[%5d]%n", 12);
System.out.printf("[%-5d]%n", 12);
System.out.printf("[%05d]%n", 12);
System.out.printf("[%.2f]%n", 3.14159);
System.out.printf("[%x]%n", 255);`,
    ans: String.raw`[   12]
[12   ]
[00012]
[3.14]
[ff]`,
    exp: "<code>%5d</code>는 5칸 오른쪽 정렬, <code>%-5d</code>는 왼쪽 정렬, <code>%05d</code>는 빈칸을 0으로 채워요. <code>%.2f</code>는 소수점 둘째 자리까지(반올림), <code>%x</code>는 16진수예요."
  },
  {
    n: 15,
    ch: 2,
    lv: 1,
    t: "mc",
    q: "<code>float pi = 3.14;</code> 가 컴파일 에러인 이유는?",
    choices: ["float는 소수점을 저장할 수 없어서", "실수 리터럴 3.14는 기본이 double이라 더 작은 float에 바로 넣을 수 없어서", "pi는 예약어라서", "float 변수는 선언과 동시에 초기화할 수 없어서"],
    ans: 1,
    exp: "실수 리터럴은 접미사가 없으면 double이에요. float에 넣으려면 <code>3.14f</code>처럼 접미사 f를 붙여야 해요."
  },
  {
    n: 16,
    ch: 2,
    lv: 1,
    t: "mc",
    q: "변수 이름으로 쓸 수 <b>있는</b> 것은?",
    choices: ["<code>2nd</code>", "<code>class</code>", "<code>$price</code>", "<code>my-var</code>"],
    ans: 2,
    exp: "숫자로 시작할 수 없고(2nd), 예약어는 안 되며(class), 특수문자는 <code>_</code>와 <code>$</code>만 쓸 수 있어요(my-var의 - 불가)."
  },
  {
    n: 17,
    ch: 2,
    lv: 3,
    t: "out",
    q: "실수형의 정밀도 차이를 생각하며 출력 결과를 쓰세요.",
    code: String.raw`float f = 0.1f;
double d = 0.1;
System.out.println(f == d);
System.out.println(f == (float) d);
System.out.println(10 == 10.0f);`,
    ans: String.raw`false
true
true`,
    exp: "0.1은 2진수로 정확히 표현되지 않아요. float(가수 23 bit)와 double(52 bit)은 저장된 근사값이 달라서 같지 않지만, double을 float로 바꿔 비교하면 같아요. 10은 정확히 표현되므로 true예요."
  },
  {
    n: 18,
    ch: 2,
    lv: 3,
    t: "self",
    q: "10진수 <code>-5</code>를 8 bit 2진수(2의 보수)로 나타내고, 구하는 과정을 쓰세요.",
    answer: String.raw`11111011
과정: 5 = 00000101 → 모든 비트를 반전하면 11111010 → 1을 더하면 11111011`,
    kw: ["00000101", "반전", "11111011"],
    exp: "음수는 2의 보수로 저장해요. 양수의 2진수를 모두 반전하고 1을 더하면 돼요. 맨 왼쪽 비트(MSB)가 1이면 음수예요."
  },
  {
    n: 19,
    ch: 3,
    lv: 1,
    t: "out",
    q: "정수 나눗셈과 나머지 연산의 출력 결과를 쓰세요.",
    code: String.raw`System.out.println(10 / 4);
System.out.println(10 % 4);
System.out.println(10 / 4.0);
System.out.println(10 / 4 * 4);`,
    ans: String.raw`2
2
2.5
8`,
    exp: "int끼리 나누면 결과도 int라 소수점이 버려져요(2). 한쪽이 실수면 실수 나눗셈(2.5)이에요. <code>10 / 4 * 4</code>는 2 × 4 = 8이에요."
  },
  {
    n: 20,
    ch: 3,
    lv: 2,
    t: "out",
    q: "나머지 연산자의 부호를 생각하며 출력 결과를 쓰세요.",
    code: String.raw`System.out.println(-10 % 8);
System.out.println(10 % -8);
System.out.println(-10 % -8);`,
    ans: String.raw`-2
2
-2`,
    exp: "나머지의 부호는 <b>왼쪽 피연산자</b>를 따라요. 오른쪽 부호는 무시돼요."
  },
  {
    n: 21,
    ch: 3,
    lv: 3,
    t: "out",
    q: "증감 연산자의 전위형과 후위형을 구분해서 출력 결과를 쓰세요.",
    code: String.raw`int i = 5;
int j = i++;
System.out.println("i=" + i + ", j=" + j);
i = 5;
j = ++i;
System.out.println("i=" + i + ", j=" + j);
i = 5;
j = i++ + ++i;
System.out.println("i=" + i + ", j=" + j);`,
    ans: String.raw`i=6, j=5
i=6, j=6
i=7, j=12`,
    exp: "후위형 <code>i++</code>는 값을 먼저 쓰고 증가, 전위형 <code>++i</code>는 증가한 뒤 값을 써요. 마지막 식은 5(그 뒤 i=6) + 7(i를 7로 만든 뒤) = 12예요. 실무에서는 이렇게 한 식에 섞어 쓰지 않는 게 좋아요."
  },
  {
    n: 22,
    ch: 3,
    lv: 2,
    t: "mc",
    q: "<code>byte a = 10, b = 20;</code> 다음에 <code>byte c = a + b;</code>를 쓰면 컴파일 에러가 나요. 이유는?",
    choices: ["byte는 덧셈을 할 수 없어서", "a + b의 결과가 byte 범위를 넘어서", "int보다 작은 타입은 연산할 때 int로 바뀌어 결과가 int이기 때문에", "byte 변수는 상수로만 초기화할 수 있어서"],
    ans: 2,
    exp: "산술 변환 규칙: int보다 작은 타입(byte, short, char)은 연산 전에 int로 바뀌어요. 그래서 <code>a + b</code>는 int이고, byte에 넣으려면 <code>(byte)(a + b)</code>로 형변환해야 해요."
  },
  {
    n: 23,
    ch: 3,
    lv: 2,
    t: "out",
    q: "논리 연산자의 단락 평가(short-circuit)를 생각하며 출력 결과를 쓰세요.",
    code: String.raw`int a = 5, b = 0;
boolean r1 = a != 0 || ++b != 0;
System.out.println(r1 + " " + b);
boolean r2 = a == 0 && ++b != 0;
System.out.println(r2 + " " + b);`,
    ans: String.raw`true 0
false 0`,
    exp: "<code>||</code>는 왼쪽이 true면, <code>&&</code>는 왼쪽이 false면 오른쪽을 아예 실행하지 않아요. 그래서 b는 두 번 다 증가하지 않아요."
  },
  {
    n: 24,
    ch: 3,
    lv: 2,
    t: "out",
    q: "비트 연산과 쉬프트 연산의 출력 결과를 쓰세요.",
    code: String.raw`System.out.println(0xABCD & 0xF);
System.out.println((0xABCD >> 4) & 0xF);
System.out.println(5 << 2);
System.out.println(12 ^ 10);`,
    ans: String.raw`13
12
20
6`,
    exp: "<code>& 0xF</code>는 마지막 16진수 한 자리만 남겨요(D = 13). 오른쪽으로 4칸 밀면 C(12)가 마지막 자리가 돼요. <code>x << n</code>은 x × 2ⁿ(5 × 4 = 20), <code>^</code>는 다른 비트만 1(1100 ^ 1010 = 0110 = 6)이에요."
  },
  {
    n: 25,
    ch: 3,
    lv: 1,
    t: "out",
    q: "조건 연산자와 복합 대입 연산자의 출력 결과를 쓰세요.",
    code: String.raw`int x = 15;
String s = x % 2 == 0 ? "짝수" : "홀수";
System.out.println(s);
int i = 10;
i *= 2 + 3;
System.out.println(i);`,
    ans: String.raw`홀수
50`,
    exp: "<code>i *= 2 + 3</code>은 오른쪽 전체를 먼저 계산해서 <code>i = i * (2 + 3)</code> = 50이에요."
  },
  {
    n: 26,
    ch: 3,
    lv: 3,
    t: "mc",
    q: "<code>int x = 2;</code>일 때 <code>x << 2 + 1</code>의 값은?",
    choices: ["9 (= (x << 2) + 1)", "16 (= x << 3)", "6", "컴파일 에러"],
    ans: 1,
    exp: "덧셈(산술)이 쉬프트보다 우선순위가 높아서 <code>x << (2 + 1)</code> = 2 × 2³ = 16이에요. 헷갈리면 괄호를 쓰세요."
  },
  {
    n: 27,
    ch: 3,
    lv: 3,
    t: "out",
    q: "문자열 비교에서 == 와 equals의 차이를 생각하며 출력 결과를 쓰세요.",
    code: String.raw`String a = "abc";
String b = "abc";
String c = new String("abc");
System.out.println(a == b);
System.out.println(a == c);
System.out.println(a.equals(c));`,
    ans: String.raw`true
false
true`,
    exp: "<code>==</code>는 같은 객체(주소)인지 비교해요. 문자열 리터럴은 같은 객체를 재사용하지만 <code>new</code>는 새 객체를 만들어요. 내용 비교는 항상 <code>equals()</code>로 해요."
  },
  {
    n: 28,
    ch: 4,
    lv: 1,
    t: "out",
    q: "if-else if문의 출력 결과를 쓰세요.",
    code: String.raw`int score = 85;
char grade;
if (score >= 90) grade = 'A';
else if (score >= 80) grade = 'B';
else if (score >= 70) grade = 'C';
else grade = 'F';
System.out.println(grade);`,
    ans: "B",
    exp: "위에서부터 차례로 검사해서 처음 참이 되는 블럭 하나만 실행해요. 85는 첫 조건은 거짓, 두 번째 조건이 참이에요."
  },
  {
    n: 29,
    ch: 4,
    lv: 2,
    t: "out",
    q: "break가 없는 switch문(fall-through)의 출력 결과를 쓰세요.",
    code: String.raw`int n = 2;
switch (n) {
    case 1: System.out.print("A");
    case 2: System.out.print("B");
    case 3: System.out.print("C");
        break;
    default: System.out.print("D");
}
System.out.println();`,
    ans: "BC",
    exp: "일치하는 case 2부터 시작해서 break를 만날 때까지 아래 case도 모두 실행해요."
  },
  {
    n: 30,
    ch: 4,
    lv: 2,
    t: "out",
    q: "switch식(JDK 14+)의 출력 결과를 쓰세요.",
    code: String.raw`int score = 75;
char grade = switch (score / 10) {
    case 10, 9 -> 'A';
    case 8 -> 'B';
    case 7 -> 'C';
    default -> 'F';
};
String day = "SAT";
String type = switch (day) {
    case "SAT", "SUN" -> "주말";
    default -> "평일";
};
System.out.println(grade + " " + type);`,
    ans: "C 주말",
    exp: "화살표(->) 형식은 break가 없어도 다음 case로 넘어가지 않아요. switch식은 값을 돌려주므로 끝에 세미콜론을 붙여요."
  },
  {
    n: 31,
    ch: 4,
    lv: 1,
    t: "out",
    q: "for문의 출력 결과를 쓰세요.",
    code: String.raw`int sum = 0;
for (int i = 1; i <= 10; i++) {
    sum += i;
}
System.out.println(sum);`,
    ans: "55",
    exp: "1부터 10까지의 합이에요."
  },
  {
    n: 32,
    ch: 4,
    lv: 2,
    t: "out",
    q: "중첩 for문의 출력 결과를 쓰세요.",
    code: String.raw`for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
    System.out.println();
}`,
    ans: String.raw`*
**
***
****`,
    exp: "바깥 for가 한 번 돌 때 안쪽 for는 i번 돌아요. 그래서 줄마다 별이 하나씩 늘어나요."
  },
  {
    n: 33,
    ch: 4,
    lv: 2,
    t: "out",
    q: "do-while문과 while문의 차이를 생각하며 출력 결과를 쓰세요.",
    code: String.raw`int i = 10;
do {
    System.out.println("do: " + i);
    i++;
} while (i < 5);
int j = 10;
while (j < 5) {
    System.out.println("while: " + j);
    j++;
}
System.out.println("끝");`,
    ans: String.raw`do: 10
끝`,
    exp: "do-while은 블럭을 먼저 실행하고 조건을 검사해서 <b>최소 한 번은 실행</b>돼요. while은 처음부터 조건이 거짓이라 한 번도 실행되지 않아요."
  },
  {
    n: 34,
    ch: 4,
    lv: 2,
    t: "out",
    q: "continue문의 출력 결과를 쓰세요.",
    code: String.raw`for (int i = 1; i <= 10; i++) {
    if (i % 3 == 0) continue;
    System.out.print(i + " ");
}
System.out.println();`,
    ans: "1 2 4 5 7 8 10 ",
    exp: "continue를 만나면 남은 문장을 건너뛰고 다음 반복(증감식)으로 가요. 3의 배수만 출력되지 않아요."
  },
  {
    n: 35,
    ch: 4,
    lv: 3,
    t: "out",
    q: "이름 붙은 반복문의 출력 결과를 쓰세요.",
    code: String.raw`Loop1:
for (int i = 2; i <= 4; i++) {
    for (int j = 1; j <= 3; j++) {
        if (j == 2) continue Loop1;
        if (i == 4) break Loop1;
        System.out.println(i + "*" + j + "=" + i * j);
    }
}
System.out.println("끝");`,
    ans: String.raw`2*1=2
3*1=3
끝`,
    exp: "<code>continue Loop1</code>은 바깥 for의 다음 반복으로, <code>break Loop1</code>은 바깥 for까지 한 번에 빠져나가요. i가 2, 3일 때는 j가 1일 때만 출력되고, i가 4가 되면 바로 끝나요."
  },
  {
    n: 36,
    ch: 4,
    lv: 2,
    t: "self",
    q: "for문을 써서 구구단 2단을 <code>2*1=2</code>부터 <code>2*9=18</code>까지 한 줄에 하나씩 출력하는 코드를 쓰세요.",
    answer: String.raw`for (int i = 1; i <= 9; i++) {
    System.out.println("2*" + i + "=" + 2 * i);
}`,
    kw: ["for", "i <= 9", "System.out.println", "2 * i"],
    exp: "반복 횟수(9번)가 정해져 있으니 for문이 알맞아요. 2단~9단 전체는 바깥에 for문을 하나 더 두면 돼요."
  },
  {
    n: 37,
    ch: 4,
    lv: 1,
    t: "mc",
    q: "while문과 do-while문의 가장 큰 차이는?",
    choices: ["while은 조건식을 생략할 수 있다", "do-while은 블럭을 최소 한 번은 실행한다", "do-while은 break를 쓸 수 없다", "while은 반복 횟수가 정해져 있을 때만 쓴다"],
    ans: 1,
    exp: "do-while은 조건을 나중에 검사하므로 처음 한 번은 무조건 실행돼요. 사용자 입력을 받고 검사할 때 유용해요. while의 조건식은 생략할 수 없어요."
  },
  {
    n: 38,
    ch: 5,
    lv: 1,
    t: "out",
    q: "배열의 기본값과 길이를 생각하며 출력 결과를 쓰세요.",
    code: String.raw`int[] a = new int[3];
String[] s = new String[2];
boolean[] f = new boolean[1];
System.out.println(a[0] + ", " + a.length);
System.out.println(s[1]);
System.out.println(f[0]);`,
    ans: String.raw`0, 3
null
false`,
    exp: "배열은 만들면 타입의 기본값으로 자동 초기화돼요. int는 0, 참조형(String)은 null, boolean은 false예요."
  },
  {
    n: 39,
    ch: 5,
    lv: 1,
    t: "out",
    q: "Arrays.toString()으로 배열을 출력한 결과를 쓰세요.",
    code: String.raw`int[] score = {90, 80, 70};
score[1] = 100;
System.out.println(java.util.Arrays.toString(score));
System.out.println(score.length);`,
    ans: String.raw`[90, 100, 70]
3`,
    exp: "배열을 println으로 바로 출력하면 ‘타입@주소’가 나오므로 <code>Arrays.toString()</code>을 써요."
  },
  {
    n: 40,
    ch: 5,
    lv: 1,
    t: "mc",
    q: "<code>int[] arr = new int[3];</code> 다음에 <code>arr[3] = 10;</code>을 실행하면?",
    choices: ["배열 길이가 4로 늘어난다", "컴파일 에러가 난다", "실행 중 ArrayIndexOutOfBoundsException이 발생한다", "아무 일도 일어나지 않는다"],
    ans: 2,
    exp: "길이가 3인 배열의 인덱스는 0~2예요. 컴파일은 되지만 실행할 때 범위를 벗어나 예외가 발생해요. 배열은 한 번 만들면 길이를 바꿀 수 없어요."
  },
  {
    n: 41,
    ch: 5,
    lv: 2,
    t: "out",
    q: "배열을 대입하면 무엇이 복사되는지 생각하며 출력 결과를 쓰세요.",
    code: String.raw`int[] a = {1, 2, 3};
int[] b = a;
b[0] = 9;
int[] c = new int[3];
System.arraycopy(a, 0, c, 0, 3);
c[1] = 7;
System.out.println(a[0] + " " + a[1]);
System.out.println(c[0] + " " + c[1]);`,
    ans: String.raw`9 2
9 7`,
    exp: "<code>b = a</code>는 배열의 <b>주소</b>를 복사하므로 a와 b는 같은 배열이에요. <code>arraycopy</code>는 값을 새 배열에 복사하므로 c를 바꿔도 a는 그대로예요."
  },
  {
    n: 42,
    ch: 5,
    lv: 2,
    t: "out",
    q: "배열에서 최대값과 최소값을 찾는 코드의 출력 결과를 쓰세요.",
    code: String.raw`int[] score = {79, 88, 91, 33, 100, 55, 95};
int max = score[0], min = score[0];
for (int i = 1; i < score.length; i++) {
    if (score[i] > max) max = score[i];
    if (score[i] < min) min = score[i];
}
System.out.println("최대값:" + max + ", 최소값:" + min);`,
    ans: "최대값:100, 최소값:33",
    exp: "첫 요소를 max·min으로 정해 두고 나머지 요소와 하나씩 비교해 갱신하는 패턴이에요."
  },
  {
    n: 43,
    ch: 5,
    lv: 2,
    t: "out",
    q: "2차원 배열의 길이를 생각하며 출력 결과를 쓰세요.",
    code: String.raw`int[][] m = new int[3][4];
int[][] g = { {1}, {2, 3}, {4, 5, 6} };
System.out.println(m.length + " " + m[0].length);
System.out.println(g.length + " " + g[2].length);
System.out.println(g[1][1]);`,
    ans: String.raw`3 4
3 3
3`,
    exp: "2차원 배열은 ‘배열의 배열’이에요. <code>length</code>는 행의 개수, <code>m[i].length</code>는 i행의 열 개수예요. g처럼 행마다 길이가 다른 가변 배열도 만들 수 있어요."
  },
  {
    n: 44,
    ch: 5,
    lv: 2,
    t: "out",
    q: "String의 메서드를 사용한 결과를 쓰세요.",
    code: String.raw`String str = "ABCDE";
System.out.println(str.charAt(3));
System.out.println(str.substring(1, 3));
System.out.println(str.length());
char[] ch = str.toCharArray();
System.out.println(ch[0]);`,
    ans: String.raw`D
BC
5
A`,
    exp: "<code>charAt(index)</code>의 index는 0부터예요. <code>substring(1, 3)</code>은 1부터 3 <b>앞</b>까지예요."
  },
  {
    n: 45,
    ch: 5,
    lv: 3,
    t: "out",
    q: "향상된 for문으로 2차원 배열의 합을 구하는 코드의 출력 결과를 쓰세요.",
    code: String.raw`int[][] score = { {100, 100, 100}, {20, 20, 20}, {30, 30, 30} };
int sum = 0;
for (int[] row : score) {
    for (int v : row) sum += v;
}
System.out.println(sum);
System.out.println(java.util.Arrays.deepToString(score));`,
    ans: String.raw`450
[[100, 100, 100], [20, 20, 20], [30, 30, 30]]`,
    exp: "바깥 for의 <code>row</code>는 1차원 배열(행), 안쪽 for의 <code>v</code>는 요소 값이에요. 다차원 배열의 내용은 <code>Arrays.deepToString()</code>으로 출력해요."
  },
  {
    n: 46,
    ch: 5,
    lv: 3,
    t: "self",
    q: "정수 배열 <code>numArr</code>를 오름차순으로 정렬하는 <b>버블 정렬</b> 코드를 쓰세요.",
    answer: String.raw`for (int i = 0; i < numArr.length - 1; i++) {
    boolean changed = false;
    for (int j = 0; j < numArr.length - 1 - i; j++) {
        if (numArr[j] > numArr[j + 1]) {
            int tmp = numArr[j];
            numArr[j] = numArr[j + 1];
            numArr[j + 1] = tmp;
            changed = true;
        }
    }
    if (!changed) break;   // 자리바꿈이 없으면 이미 정렬된 것
}`,
    kw: ["length - 1", "numArr[j] > numArr[j + 1]", "tmp", "for"],
    exp: "인접한 두 값을 비교해 큰 값을 뒤로 보내는 것을 반복해요. 한 바퀴가 끝날 때마다 가장 큰 값이 맨 뒤에 확정되므로 안쪽 for의 범위를 <code>- i</code>만큼 줄여요."
  },
  {
    n: 47,
    ch: 5,
    lv: 2,
    t: "mc",
    q: "<code>String[] name = new String[3];</code> 직후 <code>name[0]</code>의 값은?",
    choices: ["\"\"(빈 문자열)", "null", "\"0\"", "컴파일 에러"],
    ans: 1,
    exp: "String은 참조형이라 기본값이 null이에요. null은 ‘어떤 객체도 가리키지 않는다’는 뜻이라 <code>name[0].length()</code>처럼 쓰면 NullPointerException이 나요."
  },
  {
    n: 48,
    ch: 6,
    lv: 1,
    t: "out",
    q: "클래스와 인스턴스를 사용하는 코드의 출력 결과를 쓰세요.",
    code: String.raw`class Tv {
    int channel;
    void channelUp() { ++channel; }
    void channelDown() { --channel; }
}
public class Main {
    public static void main(String[] args) {
        Tv t = new Tv();
        t.channel = 7;
        t.channelDown();
        t.channelDown();
        t.channelUp();
        System.out.println("현재 채널은 " + t.channel + " 입니다.");
    }
}`,
    ans: "현재 채널은 6 입니다.",
    exp: "7에서 두 번 내리고 한 번 올리면 6이에요."
  },
  {
    n: 49,
    ch: 6,
    lv: 2,
    t: "out",
    q: "참조변수끼리 대입했을 때의 출력 결과를 쓰세요.",
    code: String.raw`class Tv { int channel; }
public class Main {
    public static void main(String[] args) {
        Tv t1 = new Tv();
        Tv t2 = new Tv();
        t2 = t1;
        t1.channel = 7;
        System.out.println(t1.channel + " " + t2.channel);
        t2.channel = 3;
        System.out.println(t1.channel + " " + t2.channel);
    }
}`,
    ans: String.raw`7 7
3 3`,
    exp: "<code>t2 = t1</code> 뒤에는 두 참조변수가 같은 인스턴스를 가리켜요. 원래 t2가 가리키던 인스턴스는 참조하는 변수가 없어 가비지 컬렉터가 제거해요."
  },
  {
    n: 50,
    ch: 6,
    lv: 2,
    t: "out",
    q: "클래스 변수(static)와 인스턴스 변수의 차이를 생각하며 출력 결과를 쓰세요.",
    code: String.raw`class Card {
    String kind;
    int number;
    static int width = 100;
}
public class Main {
    public static void main(String[] args) {
        Card c1 = new Card();
        Card c2 = new Card();
        c1.number = 7;
        c2.number = 4;
        c1.width = 50;
        System.out.println(c1.number + " " + c2.number);
        System.out.println(c1.width + " " + c2.width + " " + Card.width);
    }
}`,
    ans: String.raw`7 4
50 50 50`,
    exp: "인스턴스 변수(number)는 인스턴스마다 따로 있지만, 클래스 변수(width)는 모든 인스턴스가 하나를 공유해요. 그래서 c1으로 바꿔도 모두 50이에요. 클래스 변수는 <code>Card.width</code>처럼 클래스 이름으로 쓰는 게 좋아요."
  },
  {
    n: 51,
    ch: 6,
    lv: 2,
    t: "out",
    q: "기본형 매개변수와 참조형 매개변수의 차이를 생각하며 출력 결과를 쓰세요.",
    code: String.raw`class Data { int x; }
public class Main {
    static void change1(int x) { x = 1000; }
    static void change2(Data d) { d.x = 1000; }
    public static void main(String[] args) {
        Data d = new Data();
        d.x = 10;
        change1(d.x);
        System.out.println(d.x);
        change2(d);
        System.out.println(d.x);
    }
}`,
    ans: String.raw`10
1000`,
    exp: "기본형 매개변수는 값을 복사해서 받으므로 원본이 바뀌지 않아요. 참조형 매개변수는 주소를 복사해서 받으므로 같은 인스턴스를 바꿀 수 있어요."
  },
  {
    n: 52,
    ch: 6,
    lv: 3,
    t: "out",
    q: "초기화 블럭과 생성자가 실행되는 순서를 생각하며 출력 결과를 쓰세요.",
    code: String.raw`class BlockEx {
    static { System.out.println("static { }"); }
    { System.out.println("{ }"); }
    BlockEx() { System.out.println("생성자"); }
}
public class Main {
    public static void main(String[] args) {
        System.out.println("main 시작");
        new BlockEx();
        new BlockEx();
    }
}`,
    ans: String.raw`main 시작
static { }
{ }
생성자
{ }
생성자`,
    exp: "클래스 초기화 블럭은 클래스가 처음 쓰일 때(로딩될 때) <b>한 번만</b>, 인스턴스 초기화 블럭은 인스턴스를 만들 때마다 <b>생성자보다 먼저</b> 실행돼요."
  },
  {
    n: 53,
    ch: 6,
    lv: 2,
    t: "mc",
    q: "다음 중 <code>int add(int a, int b)</code>와 함께 정의했을 때 <b>오버로딩이 아니라 컴파일 에러</b>가 나는 것은?",
    choices: ["<code>long add(long a, long b)</code>", "<code>int add(int a, int b, int c)</code>", "<code>long add(int a, int b)</code>", "<code>double add(double a, int b)</code>"],
    ans: 2,
    exp: "오버로딩은 매개변수의 개수나 타입이 달라야 해요. 반환타입만 다른 것은 오버로딩이 아니라 같은 메서드를 중복 정의한 것이라 에러예요."
  },
  {
    n: 54,
    ch: 6,
    lv: 2,
    t: "out",
    q: "생성자에서 다른 생성자를 호출하는 this()의 출력 결과를 쓰세요.",
    code: String.raw`class Car {
    String color; String gearType; int door;
    Car() { this("white", "auto", 4); }
    Car(String color) { this(color, "auto", 4); }
    Car(String color, String gearType, int door) {
        this.color = color;
        this.gearType = gearType;
        this.door = door;
    }
}
public class Main {
    public static void main(String[] args) {
        Car c1 = new Car();
        Car c2 = new Car("blue");
        System.out.println(c1.color + " " + c1.gearType + " " + c1.door);
        System.out.println(c2.color + " " + c2.gearType + " " + c2.door);
    }
}`,
    ans: String.raw`white auto 4
blue auto 4`,
    exp: "<code>this(...)</code>는 같은 클래스의 다른 생성자를 호출하고, 생성자의 첫 줄에서만 쓸 수 있어요. <code>this.color</code>는 인스턴스 변수, <code>color</code>는 매개변수예요."
  },
  {
    n: 55,
    ch: 6,
    lv: 3,
    t: "out",
    q: "재귀 호출의 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    static int factorial(int n) {
        if (n == 1) return 1;
        return n * factorial(n - 1);
    }
    static long power(int x, int n) {
        if (n == 1) return x;
        return x * power(x, n - 1);
    }
    public static void main(String[] args) {
        System.out.println(factorial(5));
        System.out.println(power(2, 10));
    }
}`,
    ans: String.raw`120
1024`,
    exp: "factorial(5) = 5 × 4 × 3 × 2 × 1 = 120, power(2, 10) = 2¹⁰ = 1024예요. 재귀 호출에는 반드시 종료 조건이 있어야 해요."
  },
  {
    n: 56,
    ch: 6,
    lv: 2,
    t: "mc",
    q: "static 메서드에 대한 설명으로 <b>옳은</b> 것은?",
    choices: ["static 메서드 안에서 인스턴스 변수를 바로 사용할 수 있다", "static 메서드 안에서 this를 사용할 수 있다", "static 메서드는 인스턴스를 만들지 않고 클래스이름.메서드이름()으로 호출할 수 있다", "인스턴스 메서드 안에서는 static 변수를 사용할 수 없다"],
    ans: 2,
    exp: "static 메서드는 인스턴스 없이 호출되므로 그 시점에 인스턴스(this, 인스턴스 변수)가 없을 수도 있어요. 반대로 인스턴스 메서드에서는 static 멤버를 항상 쓸 수 있어요."
  },
  {
    n: 57,
    ch: 6,
    lv: 3,
    t: "self",
    q: "x, y 좌표를 갖는 <code>Point</code> 클래스를 작성하세요. 매개변수가 있는 생성자 <code>Point(int x, int y)</code>와, 매개변수가 없으면 (0, 0)이 되는 기본 생성자를 만드세요. 기본 생성자는 this()를 사용하세요.",
    answer: String.raw`class Point {
    int x, y;
    Point() { this(0, 0); }
    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}`,
    kw: ["class Point", "this(0, 0)", "this.x = x", "this.y = y"],
    exp: "매개변수 이름이 인스턴스 변수와 같을 때는 <code>this.</code>로 구별해요. 기본 생성자는 다른 생성자를 호출해 코드 중복을 줄여요. 생성자를 하나라도 만들면 컴파일러가 기본 생성자를 추가하지 않으므로 필요하면 직접 만들어야 해요."
  },
  {
    n: 58,
    ch: 7,
    lv: 2,
    t: "out",
    q: "오버라이딩과 super의 출력 결과를 쓰세요.",
    code: String.raw`class Point {
    int x = 1, y = 2;
    String getLocation() { return "x:" + x + ", y:" + y; }
}
class Point3D extends Point {
    int z = 3;
    String getLocation() { return super.getLocation() + ", z:" + z; }
}
public class Main {
    public static void main(String[] args) {
        Point p = new Point3D();
        System.out.println(p.getLocation());
    }
}`,
    ans: "x:1, y:2, z:3",
    exp: "자손이 오버라이딩한 메서드가 호출되고, 그 안의 <code>super.getLocation()</code>은 조상의 메서드를 호출해요."
  },
  {
    n: 59,
    ch: 7,
    lv: 2,
    t: "out",
    q: "상속 관계에서 생성자가 호출되는 순서를 생각하며 출력 결과를 쓰세요.",
    code: String.raw`class Parent {
    Parent() { System.out.println("Parent()"); }
}
class Child extends Parent {
    Child() { System.out.println("Child()"); }
    Child(int n) { this(); System.out.println("Child(int)"); }
}
public class Main {
    public static void main(String[] args) {
        new Child(1);
    }
}`,
    ans: String.raw`Parent()
Child()
Child(int)`,
    exp: "생성자 첫 줄에 this()나 super()가 없으면 컴파일러가 <code>super();</code>를 넣어요. Child(int)는 this()로 Child()를 부르고, Child()의 첫 줄에 숨은 super()가 Parent()를 먼저 실행해요."
  },
  {
    n: 60,
    ch: 7,
    lv: 3,
    t: "out",
    q: "참조변수의 타입과 인스턴스의 타입이 다를 때 출력 결과를 쓰세요.",
    code: String.raw`class Parent {
    int x = 100;
    void method() { System.out.println("Parent Method"); }
}
class Child extends Parent {
    int x = 200;
    void method() { System.out.println("Child Method"); }
}
public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        Child c = new Child();
        System.out.println("p.x = " + p.x);
        p.method();
        System.out.println("c.x = " + c.x);
        c.method();
    }
}`,
    ans: String.raw`p.x = 100
Child Method
c.x = 200
Child Method`,
    exp: "조상과 자손에 같은 이름의 멤버가 있을 때 <b>메서드는 항상 실제 인스턴스(Child)의 것</b>이 호출되고, <b>멤버변수는 참조변수의 타입</b>을 따라가요."
  },
  {
    n: 61,
    ch: 7,
    lv: 2,
    t: "mc",
    q: "protected 멤버에 접근할 수 <b>없는</b> 곳은?",
    choices: ["같은 클래스", "같은 패키지의 다른 클래스", "다른 패키지의 자손 클래스", "다른 패키지의 자손이 아닌 클래스"],
    ans: 3,
    exp: "접근 범위: public(전체) > protected(같은 패키지 + 자손) > default(같은 패키지) > private(같은 클래스)."
  },
  {
    n: 62,
    ch: 7,
    lv: 2,
    t: "out",
    q: "instanceof와 참조변수의 형변환을 사용한 출력 결과를 쓰세요.",
    code: String.raw`class Car { }
class FireEngine extends Car { void water() { System.out.println("물 뿌리기"); } }
class Ambulance extends Car { }
public class Main {
    static void work(Car c) {
        if (c instanceof FireEngine fe) fe.water();
        else if (c instanceof Ambulance) System.out.println("사이렌");
        else System.out.println("운전");
    }
    public static void main(String[] args) {
        work(new FireEngine());
        work(new Ambulance());
        work(new Car());
        Car c = new FireEngine();
        System.out.println(c instanceof Car);
        System.out.println(c instanceof Ambulance);
    }
}`,
    ans: String.raw`물 뿌리기
사이렌
운전
true
false`,
    exp: "<code>instanceof</code>는 그 타입으로 형변환할 수 있는지를 알려줘요. 조상 타입(Car)에도 true예요. <code>c instanceof FireEngine fe</code>는 검사와 형변환을 한 번에 하는 패턴 매칭(JDK 16+)이에요."
  },
  {
    n: 63,
    ch: 7,
    lv: 2,
    t: "mc",
    q: "추상 클래스에 대한 설명으로 <b>틀린</b> 것은?",
    choices: ["abstract 메서드가 있으면 클래스에도 abstract를 붙여야 한다", "추상 클래스도 생성자와 일반 메서드를 가질 수 있다", "추상 클래스는 new로 인스턴스를 만들 수 있다", "자손이 추상 메서드를 모두 구현하지 않으면 자손도 추상 클래스가 된다"],
    ans: 2,
    exp: "추상 클래스는 미완성 설계도라서 인스턴스를 만들 수 없어요. 상속받은 자손이 추상 메서드를 구현해서 완성해요."
  },
  {
    n: 64,
    ch: 7,
    lv: 2,
    t: "out",
    q: "인터페이스의 디폴트 메서드와 다형성을 사용한 출력 결과를 쓰세요.",
    code: String.raw`interface Greeting {
    String name();
    default String hello() { return "안녕, " + name(); }
}
class Kim implements Greeting {
    public String name() { return "김"; }
}
class Lee implements Greeting {
    public String name() { return "이"; }
    public String hello() { return "반가워, " + name(); }
}
public class Main {
    public static void main(String[] args) {
        Greeting[] arr = { new Kim(), new Lee() };
        for (Greeting g : arr) System.out.println(g.hello());
    }
}`,
    ans: String.raw`안녕, 김
반가워, 이`,
    exp: "디폴트 메서드는 구현부가 있는 인터페이스 메서드예요. 그대로 쓰거나(Kim) 오버라이딩할 수 있어요(Lee). 인터페이스 타입 배열로 서로 다른 클래스의 객체를 한꺼번에 다룰 수 있어요."
  },
  {
    n: 65,
    ch: 7,
    lv: 3,
    t: "self",
    q: "넓이를 구하는 메서드 <code>double area()</code>를 가진 인터페이스 <code>Shape</code>를 만들고, 이를 구현하는 <code>Circle</code>(반지름 r)과 <code>Rect</code>(가로 w, 세로 h) 클래스를 작성하세요.",
    answer: String.raw`interface Shape {
    double area();
}
class Circle implements Shape {
    double r;
    Circle(double r) { this.r = r; }
    public double area() { return Math.PI * r * r; }
}
class Rect implements Shape {
    double w, h;
    Rect(double w, double h) { this.w = w; this.h = h; }
    public double area() { return w * h; }
}`,
    kw: ["interface Shape", "implements Shape", "public double area()", "Math.PI"],
    exp: "인터페이스의 메서드는 자동으로 public abstract예요. 구현하는 쪽은 접근 제어자를 좁힐 수 없으므로 반드시 <code>public</code>을 붙여야 해요."
  },
  {
    n: 66,
    ch: 7,
    lv: 1,
    t: "mc",
    q: "<code>final</code>을 클래스에 붙였을 때의 의미는?",
    choices: ["인스턴스를 만들 수 없다", "다른 클래스가 상속할 수 없다", "모든 메서드가 static이 된다", "멤버변수를 바꿀 수 없다"],
    ans: 1,
    exp: "final 클래스는 상속할 수 없고(예: String, Math), final 메서드는 오버라이딩할 수 없고, final 변수는 값을 바꿀 수 없는 상수예요."
  },
  {
    n: 67,
    ch: 7,
    lv: 3,
    t: "out",
    q: "익명 클래스를 사용한 출력 결과를 쓰세요.",
    code: String.raw`abstract class Animal {
    abstract String sound();
    void speak() { System.out.println(sound() + "!"); }
}
public class Main {
    public static void main(String[] args) {
        Animal dog = new Animal() {
            String sound() { return "멍멍"; }
        };
        Animal cat = new Animal() {
            String sound() { return "야옹"; }
        };
        dog.speak();
        cat.speak();
    }
}`,
    ans: String.raw`멍멍!
야옹!`,
    exp: "익명 클래스는 이름 없이 선언과 생성을 동시에 하는 일회용 클래스예요. 추상 메서드 sound()를 그 자리에서 구현했어요."
  },
  {
    n: 68,
    ch: 8,
    lv: 1,
    t: "out",
    q: "try-catch문에서의 실행 흐름을 생각하며 출력 결과를 쓰세요.",
    code: String.raw`System.out.println(1);
try {
    System.out.println(2);
    System.out.println(0 / 0);
    System.out.println(3);
} catch (ArithmeticException ae) {
    System.out.println(4);
}
System.out.println(5);`,
    ans: String.raw`1
2
4
5`,
    exp: "예외가 발생하면 try블럭의 나머지 문장(3)은 건너뛰고 일치하는 catch블럭을 실행한 뒤, try-catch문 다음 문장으로 이어가요."
  },
  {
    n: 69,
    ch: 8,
    lv: 2,
    t: "out",
    q: "finally블럭과 return의 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    static void method(boolean fail) {
        try {
            System.out.println("try");
            if (fail) throw new Exception("실패");
            return;
        } catch (Exception e) {
            System.out.println("catch: " + e.getMessage());
        } finally {
            System.out.println("finally");
        }
        System.out.println("method 끝");
    }
    public static void main(String[] args) {
        method(false);
        method(true);
    }
}`,
    ans: String.raw`try
finally
try
catch: 실패
finally
method 끝`,
    exp: "finally블럭은 예외가 나도, return으로 메서드를 빠져나가도 항상 실행돼요. 첫 호출은 return 때문에 \"method 끝\"이 출력되지 않아요."
  },
  {
    n: 70,
    ch: 8,
    lv: 2,
    t: "mc",
    q: "다음 코드가 컴파일 에러인 이유는?",
    code: String.raw`try {
    System.out.println(10 / 0);
} catch (Exception e) {
    System.out.println("Exception");
} catch (ArithmeticException ae) {
    System.out.println("ArithmeticException");
}`,
    choices: ["catch블럭이 두 개 이상이면 안 되기 때문에", "Exception이 ArithmeticException의 조상이라 두 번째 catch에 절대 도달할 수 없기 때문에", "ArithmeticException은 catch할 수 없는 예외라서", "finally블럭이 없어서"],
    ans: 1,
    exp: "catch는 위에서부터 차례로 <code>instanceof</code>로 검사해요. 조상인 Exception을 먼저 쓰면 모든 예외가 거기서 잡혀서 아래 catch는 실행될 수 없어요. <b>자손 예외를 먼저, 조상 예외를 나중에</b> 써야 해요."
  },
  {
    n: 71,
    ch: 8,
    lv: 2,
    t: "out",
    q: "예외를 직접 발생시키고 메시지를 확인하는 코드의 출력 결과를 쓰세요.",
    code: String.raw`try {
    Exception e = new Exception("고의로 발생시켰음");
    throw e;
} catch (Exception e) {
    System.out.println("에러 메시지: " + e.getMessage());
}
System.out.println("정상 종료");`,
    ans: String.raw`에러 메시지: 고의로 발생시켰음
정상 종료`,
    exp: "<code>throw</code>로 예외 객체를 던지면 catch블럭이 받아요. 생성자에 넣은 문자열은 <code>getMessage()</code>로 꺼낼 수 있어요."
  },
  {
    n: 72,
    ch: 8,
    lv: 1,
    t: "mc",
    q: "다음 중 처리하지 않으면 <b>컴파일 에러</b>가 나는 예외(checked 예외)는?",
    choices: ["NullPointerException", "ArithmeticException", "IOException", "ArrayIndexOutOfBoundsException"],
    ans: 2,
    exp: "RuntimeException과 그 자손(나머지 세 개)은 처리가 선택(unchecked)이에요. IOException 같은 Exception의 자손은 try-catch나 throws로 반드시 처리해야 해요(checked)."
  },
  {
    n: 73,
    ch: 8,
    lv: 3,
    t: "out",
    q: "예외 되던지기(re-throwing)의 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    static void method1() throws Exception {
        try {
            throw new Exception("원인");
        } catch (Exception e) {
            System.out.println("method1에서 처리: " + e.getMessage());
            throw e;
        }
    }
    public static void main(String[] args) {
        try {
            method1();
        } catch (Exception e) {
            System.out.println("main에서 처리: " + e.getMessage());
        }
    }
}`,
    ans: String.raw`method1에서 처리: 원인
main에서 처리: 원인`,
    exp: "catch블럭에서 처리한 예외를 <code>throw e;</code>로 다시 던지면 호출한 쪽에서도 처리할 수 있어요. 되던질 예외는 메서드 선언부에 throws로 적어야 해요."
  },
  {
    n: 74,
    ch: 8,
    lv: 2,
    t: "self",
    q: "<code>Exception</code>을 상속받고, 메시지와 에러 코드(int)를 함께 받는 사용자정의 예외 <code>MyException</code>을 작성하세요. 에러 코드는 <code>getErrCode()</code>로 꺼낼 수 있어야 해요.",
    answer: String.raw`class MyException extends Exception {
    private final int ERR_CODE;
    MyException(String msg, int errCode) {
        super(msg);
        ERR_CODE = errCode;
    }
    public int getErrCode() { return ERR_CODE; }
}`,
    kw: ["extends Exception", "super(msg)", "getErrCode", "ERR_CODE"],
    exp: "메시지는 조상 Exception의 생성자에 <code>super(msg)</code>로 넘겨야 <code>getMessage()</code>로 꺼낼 수 있어요. 처리를 강제하고 싶지 않으면 RuntimeException을 상속해요."
  },
  {
    n: 75,
    ch: 8,
    lv: 2,
    t: "out",
    q: "숫자가 아닌 문자열을 변환할 때의 출력 결과를 쓰세요.",
    code: String.raw`String[] inputs = {"10", "abc", "0"};
for (String s : inputs) {
    try {
        int n = Integer.parseInt(s);
        System.out.println(100 / n);
    } catch (NumberFormatException | ArithmeticException e) {
        System.out.println(e.getClass().getSimpleName());
    }
}`,
    ans: String.raw`10
NumberFormatException
ArithmeticException`,
    exp: "<code>\"abc\"</code>는 숫자로 바꿀 수 없어 NumberFormatException, <code>\"0\"</code>은 0으로 나눠 ArithmeticException이에요. 멀티 catch(<code>|</code>)로 한 블럭에서 처리했어요."
  },
  {
    n: 76,
    ch: 8,
    lv: 3,
    t: "out",
    q: "try-with-resources문의 실행 순서를 생각하며 출력 결과를 쓰세요.",
    code: String.raw`class Res implements AutoCloseable {
    String name;
    Res(String name) { this.name = name; System.out.println(name + " 열기"); }
    public void close() { System.out.println(name + " 닫기"); }
}
public class Main {
    public static void main(String[] args) {
        try (Res a = new Res("A"); Res b = new Res("B")) {
            System.out.println("작업");
            throw new RuntimeException("오류");
        } catch (RuntimeException e) {
            System.out.println("catch: " + e.getMessage());
        }
    }
}`,
    ans: String.raw`A 열기
B 열기
작업
B 닫기
A 닫기
catch: 오류`,
    exp: "try 괄호 안의 자원은 블럭을 벗어날 때 <b>연 순서의 반대로</b> 자동으로 close()돼요. 자원이 닫힌 다음에 catch블럭이 실행돼요."
  },
  {
    n: 77,
    ch: 9,
    lv: 2,
    t: "out",
    q: "StringBuilder 사용 결과를 쓰세요.",
    code: String.raw`StringBuilder sb = new StringBuilder("abc");
sb.append("123").append('Z');
System.out.println(sb);
sb.insert(0, "[").append("]");
System.out.println(sb);
sb.reverse();
System.out.println(sb);
System.out.println(sb.length());`,
    ans: String.raw`abc123Z
[abc123Z]
]Z321cba[
9`,
    exp: "StringBuilder는 내용을 바꿀 수 있는 문자열이에요. append·insert·reverse는 자기 자신을 바꾸고 반환하므로 이어 쓸 수 있어요."
  },
  {
    n: 78,
    ch: 9,
    lv: 2,
    t: "out",
    q: "Math 클래스 메서드의 출력 결과를 쓰세요.",
    code: String.raw`System.out.println(Math.round(1.5));
System.out.println(Math.round(-1.5));
System.out.println(Math.ceil(1.1));
System.out.println(Math.floor(-1.1));
System.out.println(Math.abs(-10));
System.out.println(Math.max(3, 7));`,
    ans: String.raw`2
-1
2.0
-2.0
10
7`,
    exp: "<code>round</code>는 0.5를 더한 뒤 버림한 정수(long)를 돌려줘서 -1.5는 -1이 돼요. <code>ceil</code>(올림)과 <code>floor</code>(버림)는 double을 돌려줘요."
  },
  {
    n: 79,
    ch: 9,
    lv: 3,
    t: "out",
    q: "오토박싱된 Integer를 == 로 비교한 출력 결과를 쓰세요.",
    code: String.raw`Integer a = 127, b = 127;
Integer c = 128, d = 128;
System.out.println(a == b);
System.out.println(c == d);
System.out.println(c.equals(d));
int n = c;
System.out.println(n == 128);`,
    ans: String.raw`true
false
true
true`,
    exp: "래퍼 객체도 <code>==</code>는 주소 비교예요. -128~127은 미리 만든 객체를 재사용(캐시)해서 우연히 true지만, 128은 새 객체라 false예요. 래퍼 객체끼리는 반드시 <code>equals()</code>로 비교해요."
  },
  {
    n: 80,
    ch: 9,
    lv: 2,
    t: "out",
    q: "String의 split과 join의 출력 결과를 쓰세요.",
    code: String.raw`String animals = "dog,cat,bear";
String[] arr = animals.split(",");
System.out.println(arr.length);
System.out.println(String.join("-", arr));
System.out.println("  Hello  ".strip() + "|");
System.out.println("ab".repeat(3));
System.out.println("Hello".replace('l', 'L'));`,
    ans: String.raw`3
dog-cat-bear
Hello|
ababab
HeLLo`,
    exp: "split은 구분자로 나눈 배열을, join은 배열을 구분자로 이어 붙인 문자열을 돌려줘요. strip은 앞뒤 공백 제거, repeat은 반복(JDK 11+)이에요."
  },
  {
    n: 81,
    ch: 9,
    lv: 3,
    t: "out",
    q: "double과 BigDecimal의 계산 결과를 비교해 출력 결과를 쓰세요.",
    code: String.raw`System.out.println(0.1 + 0.2);
java.math.BigDecimal x = new java.math.BigDecimal("0.1");
java.math.BigDecimal y = new java.math.BigDecimal("0.2");
System.out.println(x.add(y));
java.math.BigInteger big = java.math.BigInteger.valueOf(Long.MAX_VALUE);
System.out.println(big.add(java.math.BigInteger.ONE));`,
    ans: String.raw`0.30000000000000004
0.3
9223372036854775808`,
    exp: "double은 2진수 근사값이라 오차가 생겨요. 금액처럼 정확해야 하는 계산은 BigDecimal을 <b>문자열로</b> 만들어 써요. long보다 큰 정수는 BigInteger로 계산해요."
  },
  {
    n: 82,
    ch: 9,
    lv: 2,
    t: "mc",
    q: "<code>String s = \"Java\"; s.toUpperCase(); System.out.println(s);</code>의 출력은?",
    choices: ["JAVA", "Java", "java", "컴파일 에러"],
    ans: 1,
    exp: "String은 <b>변경 불가능(immutable)</b>이라 <code>toUpperCase()</code>는 s를 바꾸지 않고 새 문자열을 돌려줘요. 결과를 쓰려면 <code>s = s.toUpperCase();</code>처럼 다시 대입해야 해요."
  },
  {
    n: 83,
    ch: 9,
    lv: 2,
    t: "self",
    q: "<code>Person</code> 클래스(필드 <code>String name</code>, <code>int age</code>)의 <code>toString()</code>을 오버라이딩해서 <code>Person[name=김자바, age=20]</code> 형식으로 출력되게 하세요.",
    answer: String.raw`class Person {
    String name;
    int age;
    Person(String name, int age) { this.name = name; this.age = age; }

    @Override
    public String toString() {
        return "Person[name=" + name + ", age=" + age + "]";
    }
}`,
    kw: ["@Override", "public String toString()", "return"],
    exp: "Object의 <code>toString()</code>은 기본으로 ‘클래스이름@해시코드’를 돌려줘요. 오버라이딩하면 <code>System.out.println(p)</code>가 원하는 형식으로 출력돼요. 조상의 public 메서드이므로 public을 꼭 붙여요."
  },
  {
    n: 84,
    ch: 9,
    lv: 3,
    t: "out",
    q: "equals와 hashCode를 오버라이딩한 클래스의 출력 결과를 쓰세요.",
    code: String.raw`import java.util.Objects;
class Person {
    long id;
    Person(long id) { this.id = id; }
    @Override public boolean equals(Object o) {
        return o instanceof Person p && id == p.id;
    }
    @Override public int hashCode() { return Objects.hash(id); }
}
public class Main {
    public static void main(String[] args) {
        Person p1 = new Person(1L);
        Person p2 = new Person(1L);
        System.out.println(p1 == p2);
        System.out.println(p1.equals(p2));
        System.out.println(p1.hashCode() == p2.hashCode());
        System.out.println(Objects.equals(null, null));
    }
}`,
    ans: String.raw`false
true
true
true`,
    exp: "<code>==</code>는 여전히 주소 비교라 false예요. equals를 내용(id) 비교로 바꿨으므로 true이고, equals가 같으면 hashCode도 같아야 해요. <code>Objects.equals</code>는 null이어도 예외 없이 비교해요."
  },
  {
    n: 85,
    ch: 10,
    lv: 1,
    t: "out",
    q: "LocalDate의 날짜 계산 결과를 쓰세요.",
    code: String.raw`import java.time.LocalDate;
public class Main {
    public static void main(String[] args) {
        LocalDate d = LocalDate.of(2026, 1, 31);
        System.out.println(d.plusMonths(1));
        System.out.println(d.plusDays(1));
        System.out.println(d.getDayOfWeek());
        System.out.println(d.withYear(2000));
    }
}`,
    ans: String.raw`2026-02-28
2026-02-01
SATURDAY
2000-01-31`,
    exp: "1월 31일에 1개월을 더하면 2월에는 31일이 없으므로 그 달의 마지막 날(28일)이 돼요. <code>of()</code>의 월은 1부터 시작해요."
  },
  {
    n: 86,
    ch: 10,
    lv: 2,
    t: "out",
    q: "java.time 클래스가 변경 불가능(immutable)하다는 점을 생각하며 출력 결과를 쓰세요.",
    code: String.raw`import java.time.LocalDate;
public class Main {
    public static void main(String[] args) {
        LocalDate d = LocalDate.of(2026, 11, 5);
        d.plusDays(10);
        System.out.println(d);
        d = d.plusDays(10);
        System.out.println(d);
        System.out.println(d.isAfter(LocalDate.of(2026, 11, 5)));
    }
}`,
    ans: String.raw`2026-11-05
2026-11-15
true`,
    exp: "<code>plusDays()</code>는 원래 객체를 바꾸지 않고 <b>새 객체를 돌려줘요</b>. 결과를 대입하지 않으면 아무 일도 일어나지 않은 것처럼 보여요."
  },
  {
    n: 87,
    ch: 10,
    lv: 2,
    t: "out",
    q: "Period와 ChronoUnit으로 두 날짜 사이를 구한 결과를 쓰세요.",
    code: String.raw`import java.time.LocalDate;
import java.time.Period;
import java.time.temporal.ChronoUnit;
public class Main {
    public static void main(String[] args) {
        LocalDate a = LocalDate.of(2026, 1, 15);
        LocalDate b = LocalDate.of(2026, 3, 20);
        Period p = Period.between(a, b);
        System.out.println(p);
        System.out.println(p.getMonths() + "개월 " + p.getDays() + "일");
        System.out.println(ChronoUnit.DAYS.between(a, b));
    }
}`,
    ans: String.raw`P2M5D
2개월 5일
64`,
    exp: "Period는 ‘몇 년 몇 개월 며칠’로 나눠 표현해요(P2M5D). 전체 일수는 <code>ChronoUnit.DAYS.between()</code>으로 구해요."
  },
  {
    n: 88,
    ch: 10,
    lv: 2,
    t: "out",
    q: "DateTimeFormatter로 형식화한 결과를 쓰세요.",
    code: String.raw`import java.time.*;
import java.time.format.DateTimeFormatter;
public class Main {
    public static void main(String[] args) {
        LocalDateTime dt = LocalDateTime.of(2026, 11, 5, 9, 7);
        System.out.println(dt);
        System.out.println(dt.format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm")));
        LocalDate d = LocalDate.parse("2026-12-25");
        System.out.println(d.getMonthValue() + "월 " + d.getDayOfMonth() + "일");
    }
}`,
    ans: String.raw`2026-11-05T09:07
2026/11/05 09:07
12월 25일`,
    exp: "<code>ofPattern</code>에서 <code>MM</code>은 월, <code>mm</code>은 분이에요. ISO 형식(2026-12-25)은 <code>parse()</code>로 바로 읽을 수 있어요."
  },
  {
    n: 89,
    ch: 10,
    lv: 1,
    t: "mc",
    q: "Calendar 클래스로 <code>cal.get(Calendar.MONTH)</code>를 호출했더니 3이 나왔어요. 실제 몇 월인가요?",
    choices: ["3월", "4월", "2월", "알 수 없다"],
    ans: 1,
    exp: "Calendar의 월은 <b>0부터</b> 시작해요(0 = 1월). 헷갈리기 쉬워서 새 코드에는 월이 1부터 시작하는 java.time을 써요."
  },
  {
    n: 90,
    ch: 10,
    lv: 2,
    t: "out",
    q: "DecimalFormat으로 숫자를 형식화한 결과를 쓰세요.",
    code: String.raw`java.text.DecimalFormat df1 = new java.text.DecimalFormat("#,###.##");
java.text.DecimalFormat df2 = new java.text.DecimalFormat("000.00");
System.out.println(df1.format(1234567.891));
System.out.println(df2.format(3.5));`,
    ans: String.raw`1,234,567.89
003.50`,
    exp: "<code>#</code>은 값이 없는 자리를 비우고, <code>0</code>은 빈 자리를 0으로 채워요. 소수점 아래는 지정한 자릿수까지 반올림돼요."
  },
  {
    n: 91,
    ch: 10,
    lv: 2,
    t: "self",
    q: "문자열 <code>\"2026/12/25\"</code>를 LocalDate로 바꾸고, 그 날짜의 요일을 출력하는 코드를 쓰세요.",
    answer: String.raw`DateTimeFormatter f = DateTimeFormatter.ofPattern("yyyy/MM/dd");
LocalDate d = LocalDate.parse("2026/12/25", f);
System.out.println(d.getDayOfWeek());   // FRIDAY`,
    kw: ["DateTimeFormatter.ofPattern", "yyyy/MM/dd", "LocalDate.parse", "getDayOfWeek"],
    exp: "ISO 형식(yyyy-MM-dd)이 아니면 패턴을 지정한 DateTimeFormatter를 함께 넘겨야 해요. 패턴과 맞지 않는 문자열은 DateTimeParseException이 나요."
  },
  {
    n: 92,
    ch: 11,
    lv: 1,
    t: "out",
    q: "ArrayList의 메서드를 사용한 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("A"); list.add("B"); list.add("C");
        list.add(1, "X");
        System.out.println(list);
        list.remove(2);
        System.out.println(list);
        System.out.println(list.get(1) + " " + list.size() + " " + list.indexOf("C"));
    }
}`,
    ans: String.raw`[A, X, B, C]
[A, X, C]
X 3 2`,
    exp: "<code>add(1, \"X\")</code>는 1번 자리에 끼워 넣고 뒤 요소를 밀어요. <code>remove(2)</code>는 인덱스 2(B)를 지워요."
  },
  {
    n: 93,
    ch: 11,
    lv: 2,
    t: "out",
    q: "HashSet과 TreeSet의 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Integer[] nums = {5, 3, 5, 1, 3, 9};
        Set<Integer> hs = new HashSet<>(Arrays.asList(nums));
        Set<Integer> ts = new TreeSet<>(Arrays.asList(nums));
        System.out.println(hs.size());
        System.out.println(ts);
        System.out.println(hs.add(3) + " " + hs.add(7));
    }
}`,
    ans: String.raw`4
[1, 3, 5, 9]
false true`,
    exp: "Set은 중복을 허용하지 않아요(5, 3, 1, 9 → 4개). TreeSet은 자동으로 정렬해요. 이미 있는 값을 add하면 false를 돌려줘요."
  },
  {
    n: 94,
    ch: 11,
    lv: 2,
    t: "out",
    q: "Map으로 단어 수를 세는 코드의 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        String[] words = {"java", "list", "java", "map", "java", "list"};
        Map<String, Integer> count = new TreeMap<>();
        for (String w : words) count.put(w, count.getOrDefault(w, 0) + 1);
        System.out.println(count);
        System.out.println(count.get("java") + " " + count.containsKey("set"));
    }
}`,
    ans: String.raw`{java=3, list=2, map=1}
3 false`,
    exp: "<code>getOrDefault(w, 0)</code>로 처음 보는 단어는 0부터 세요. 같은 키로 put하면 값을 덮어써요. TreeMap이라 키가 정렬돼 출력돼요."
  },
  {
    n: 95,
    ch: 11,
    lv: 2,
    t: "out",
    q: "Stack과 Queue의 꺼내는 순서를 생각하며 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Stack<Integer> st = new Stack<>();
        Queue<Integer> q = new LinkedList<>();
        for (int i = 1; i <= 3; i++) { st.push(i); q.offer(i); }
        System.out.print("Stack: ");
        while (!st.empty()) System.out.print(st.pop() + " ");
        System.out.println();
        System.out.print("Queue: ");
        while (!q.isEmpty()) System.out.print(q.poll() + " ");
        System.out.println();
    }
}`,
    ans: String.raw`Stack: 3 2 1 
Queue: 1 2 3 `,
    exp: "Stack은 LIFO(마지막에 넣은 것이 먼저), Queue는 FIFO(먼저 넣은 것이 먼저)예요."
  },
  {
    n: 96,
    ch: 11,
    lv: 2,
    t: "mc",
    q: "데이터를 읽는 일이 대부분이고 중간에 추가·삭제가 거의 없을 때 더 알맞은 것은?",
    choices: ["LinkedList (각 요소가 연결된 구조라 접근이 빠름)", "ArrayList (배열 기반이라 인덱스로 바로 접근 가능)", "Stack", "HashSet"],
    ans: 1,
    exp: "ArrayList는 배열 기반이라 인덱스로 바로 읽어서 빠르지만 중간 추가·삭제는 요소를 옮겨야 해서 느려요. LinkedList는 그 반대예요."
  },
  {
    n: 97,
    ch: 11,
    lv: 3,
    t: "out",
    q: "Iterator로 반복하면서 요소를 삭제하는 코드의 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(List.of(1, 2, 3, 4, 5, 6));
        Iterator<Integer> it = list.iterator();
        while (it.hasNext()) {
            if (it.next() % 2 == 0) it.remove();
        }
        System.out.println(list);
    }
}`,
    ans: "[1, 3, 5]",
    exp: "반복 중에 요소를 지울 때는 리스트의 remove가 아니라 <b>Iterator의 remove</b>를 써야 해요. 그렇지 않으면 ConcurrentModificationException이 날 수 있어요."
  },
  {
    n: 98,
    ch: 11,
    lv: 3,
    t: "out",
    q: "Comparator로 정렬 기준을 바꾼 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        String[] arr = {"cat", "Dog", "lion", "tiger"};
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));
        Arrays.sort(arr, String.CASE_INSENSITIVE_ORDER);
        System.out.println(Arrays.toString(arr));
        Arrays.sort(arr, Comparator.reverseOrder());
        System.out.println(Arrays.toString(arr));
        Arrays.sort(arr, Comparator.comparing(String::length));
        System.out.println(Arrays.toString(arr));
    }
}`,
    ans: String.raw`[Dog, cat, lion, tiger]
[cat, Dog, lion, tiger]
[tiger, lion, cat, Dog]
[cat, Dog, lion, tiger]`,
    exp: "String의 기본 정렬(Comparable)은 유니코드 순이라 대문자가 소문자보다 앞이에요. Comparator로 대소문자 무시, 역순, 길이순처럼 기준을 바꿀 수 있어요. 길이가 같으면 원래 순서를 유지해요."
  },
  {
    n: 99,
    ch: 11,
    lv: 1,
    t: "mc",
    q: "Set 인터페이스의 특징으로 옳은 것은?",
    choices: ["순서가 있고 중복을 허용한다", "순서가 없고 중복을 허용하지 않는다", "키와 값의 쌍으로 저장한다", "먼저 넣은 것이 먼저 나온다"],
    ans: 1,
    exp: "List는 순서 있음·중복 허용, Set은 순서 없음·중복 불가, Map은 키-값 쌍(키 중복 불가)이에요."
  },
  {
    n: 100,
    ch: 11,
    lv: 3,
    t: "self",
    q: "직접 만든 클래스 <code>Student</code>(필드 <code>String name</code>, <code>int no</code>)를 HashSet에 넣었더니 이름과 번호가 같은 학생이 중복 저장됐어요. 중복으로 처리되게 하려면 무엇을 해야 하는지 쓰고 코드로 작성하세요.",
    answer: String.raw`equals()와 hashCode()를 함께 오버라이딩한다. HashSet은 hashCode로 먼저 찾고 equals로 같은지 확인한다.

@Override
public boolean equals(Object o) {
    return o instanceof Student s && no == s.no && name.equals(s.name);
}
@Override
public int hashCode() { return Objects.hash(name, no); }`,
    kw: ["equals", "hashCode", "Objects.hash", "@Override"],
    exp: "HashSet·HashMap은 hashCode()로 위치를 찾고 equals()로 같은 객체인지 판단해요. 둘 중 하나만 오버라이딩하면 중복을 제대로 걸러내지 못해요."
  },
  {
    n: 101,
    ch: 12,
    lv: 1,
    t: "mc",
    q: "지네릭스를 사용하는 이유로 가장 알맞은 것은?",
    choices: ["실행 속도를 빠르게 하려고", "컴파일할 때 타입을 체크해서 잘못된 타입이 들어가는 것을 막고 형변환을 줄이려고", "기본형(int 등)을 컬렉션에 바로 넣으려고", "메서드 오버로딩을 하려고"],
    ans: 1,
    exp: "지네릭스는 <b>타입 안정성</b>을 높이고 형변환을 생략하게 해줘요. 잘못된 타입이 들어가면 실행 중 ClassCastException 대신 컴파일 에러로 미리 알 수 있어요. 기본형은 대입할 수 없어 래퍼 클래스를 써요."
  },
  {
    n: 102,
    ch: 12,
    lv: 2,
    t: "out",
    q: "지네릭 클래스를 사용한 출력 결과를 쓰세요.",
    code: String.raw`class Box<T> {
    private T item;
    void setItem(T item) { this.item = item; }
    T getItem() { return item; }
}
public class Main {
    public static void main(String[] args) {
        Box<String> sb = new Box<>();
        sb.setItem("ABC");
        Box<Integer> ib = new Box<>();
        ib.setItem(10);
        String s = sb.getItem();
        int n = ib.getItem() * 2;
        System.out.println(s.toLowerCase() + " " + n);
    }
}`,
    ans: "abc 20",
    exp: "<code>Box&lt;String&gt;</code>의 getItem()은 String을 돌려주므로 형변환 없이 String 메서드를 쓸 수 있어요. Integer는 자동으로 int로 언박싱돼 계산돼요."
  },
  {
    n: 103,
    ch: 12,
    lv: 2,
    t: "out",
    q: "열거형의 기본 메서드를 사용한 출력 결과를 쓰세요.",
    code: String.raw`enum Direction { EAST, SOUTH, WEST, NORTH }
public class Main {
    public static void main(String[] args) {
        Direction d = Direction.WEST;
        System.out.println(d + " " + d.ordinal());
        System.out.println(Direction.valueOf("EAST") == Direction.EAST);
        System.out.println(Direction.values().length);
        System.out.println(d.compareTo(Direction.EAST));
        String msg = switch (d) {
            case EAST, WEST -> "동서";
            case SOUTH, NORTH -> "남북";
        };
        System.out.println(msg);
    }
}`,
    ans: String.raw`WEST 2
true
4
2
동서`,
    exp: "<code>ordinal()</code>은 정의된 순서(0부터), <code>compareTo</code>는 순서의 차이예요. 열거형 상수는 <code>==</code>로 비교할 수 있고, switch에서 모든 상수를 다루면 default가 없어도 돼요."
  },
  {
    n: 104,
    ch: 12,
    lv: 2,
    t: "out",
    q: "멤버를 추가한 열거형의 출력 결과를 쓰세요.",
    code: String.raw`enum Grade {
    A(90), B(80), C(70);
    private final int min;
    Grade(int min) { this.min = min; }
    int getMin() { return min; }
}
public class Main {
    public static void main(String[] args) {
        for (Grade g : Grade.values())
            System.out.println(g.name() + ":" + g.getMin());
    }
}`,
    ans: String.raw`A:90
B:80
C:70`,
    exp: "열거형 상수에 값을 지정하려면 인스턴스 변수와 생성자를 추가해요. 열거형의 생성자는 항상 private이라 밖에서 new로 만들 수 없어요."
  },
  {
    n: 105,
    ch: 12,
    lv: 2,
    t: "out",
    q: "레코드가 자동으로 만들어 주는 메서드의 출력 결과를 쓰세요.",
    code: String.raw`record Point(int x, int y) { }
public class Main {
    public static void main(String[] args) {
        Point p1 = new Point(1, 2);
        Point p2 = new Point(1, 2);
        System.out.println(p1);
        System.out.println(p1.x() + p1.y());
        System.out.println(p1 == p2);
        System.out.println(p1.equals(p2));
    }
}`,
    ans: String.raw`Point[x=1, y=2]
3
false
true`,
    exp: "레코드는 생성자, getter(<code>x()</code>, <code>y()</code>), <code>toString()</code>, <code>equals()</code>, <code>hashCode()</code>를 자동으로 만들어요. equals는 값 비교라 true지만 <code>==</code>는 서로 다른 객체라 false예요."
  },
  {
    n: 106,
    ch: 12,
    lv: 3,
    t: "out",
    q: "실드 인터페이스와 switch 패턴 매칭의 출력 결과를 쓰세요.",
    code: String.raw`sealed interface Shape permits Circle, Square { }
record Circle(double r) implements Shape { }
record Square(double side) implements Shape { }
public class Main {
    static String describe(Shape s) {
        return switch (s) {
            case Circle c when c.r() > 10 -> "큰 원";
            case Circle c -> "원 r=" + c.r();
            case Square q -> "정사각형 넓이=" + q.side() * q.side();
        };
    }
    public static void main(String[] args) {
        System.out.println(describe(new Circle(20)));
        System.out.println(describe(new Circle(2)));
        System.out.println(describe(new Square(3)));
    }
}`,
    ans: String.raw`큰 원
원 r=2.0
정사각형 넓이=9.0`,
    exp: "실드 인터페이스는 구현할 수 있는 클래스를 <code>permits</code>로 제한해요. 모든 경우를 다루면 default 없이 switch식을 쓸 수 있어요. <code>when</code>으로 조건을 더 붙일 수 있고, 위에서부터 처음 맞는 case가 실행돼요."
  },
  {
    n: 107,
    ch: 12,
    lv: 2,
    t: "mc",
    q: "<code>static void printAll(List&lt;? extends Number&gt; list)</code>에 넘길 수 <b>없는</b> 것은?",
    choices: ["<code>List&lt;Integer&gt;</code>", "<code>List&lt;Double&gt;</code>", "<code>List&lt;Number&gt;</code>", "<code>List&lt;String&gt;</code>"],
    ans: 3,
    exp: "<code>&lt;? extends Number&gt;</code>는 Number와 그 자손만 허용하는 상한 제한 와일드카드예요. String은 Number의 자손이 아니에요."
  },
  {
    n: 108,
    ch: 12,
    lv: 1,
    t: "mc",
    q: "<code>@Override</code> 애너테이션을 붙이는 가장 큰 이유는?",
    choices: ["메서드 실행 속도를 높이려고", "조상에 같은 메서드가 없으면(오타 등) 컴파일 에러로 알려주게 하려고", "메서드를 static으로 만들려고", "메서드를 다른 클래스에서 쓸 수 없게 하려고"],
    ans: 1,
    exp: "@Override를 붙이면 컴파일러가 조상에 같은 선언부의 메서드가 있는지 확인해요. <code>toString</code>을 <code>tostring</code>으로 잘못 쓰면 바로 에러로 알려줘요."
  },
  {
    n: 109,
    ch: 12,
    lv: 3,
    t: "self",
    q: "좌표 x, y를 갖는 레코드 <code>Point</code>를 만들되, x나 y가 음수면 <code>IllegalArgumentException</code>을 던지도록 <b>압축 생성자</b>를 작성하세요.",
    answer: String.raw`record Point(int x, int y) {
    Point {
        if (x < 0 || y < 0)
            throw new IllegalArgumentException("음수는 안 됩니다");
    }
}`,
    kw: ["record Point", "Point {", "IllegalArgumentException", "throw"],
    exp: "압축 생성자(compact constructor)는 매개변수 목록 없이 <code>Point { ... }</code>로 써요. 검사만 하면 필드 대입은 컴파일러가 자동으로 해줘요."
  },
  {
    n: 110,
    ch: 13,
    lv: 1,
    t: "mc",
    q: "프로세스와 쓰레드에 대한 설명으로 <b>틀린</b> 것은?",
    choices: ["프로세스는 실행 중인 프로그램이다", "모든 프로세스에는 최소 하나의 쓰레드가 있다", "같은 프로세스의 쓰레드들은 메모리 등 자원을 공유한다", "쓰레드를 늘리면 동기화 문제 없이 항상 더 빨라진다"],
    ans: 3,
    exp: "쓰레드는 자원을 공유하기 때문에 <b>동기화</b>가 필요하고 교착상태가 생길 수도 있어요. 단순 계산만 하는 작업은 작업 전환 비용 때문에 오히려 느려질 수 있어요."
  },
  {
    n: 111,
    ch: 13,
    lv: 2,
    t: "out",
    q: "start()와 run()의 차이를 생각하며 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    public static void main(String[] args) throws InterruptedException {
        Runnable r = () -> System.out.println("실행: " + Thread.currentThread().getName());
        Thread t = new Thread(r, "worker");
        t.run();
        t.start();
        t.join();
        System.out.println("끝");
    }
}`,
    ans: String.raw`실행: main
실행: worker
끝`,
    exp: "<code>run()</code>을 직접 부르면 새 쓰레드가 아니라 <b>main 쓰레드</b>에서 메서드를 호출할 뿐이에요. <code>start()</code>를 불러야 새 쓰레드(worker)가 만들어져 run()을 실행해요. <code>join()</code>으로 worker가 끝날 때까지 기다렸다가 \"끝\"을 출력해요."
  },
  {
    n: 112,
    ch: 13,
    lv: 2,
    t: "out",
    q: "쓰레드의 상태와 기본 설정값을 출력한 결과를 쓰세요.",
    code: String.raw`public class Main {
    public static void main(String[] args) throws InterruptedException {
        Thread t = new Thread(() -> { });
        System.out.println(t.getState());
        System.out.println(t.getPriority());
        System.out.println(t.isDaemon());
        t.start();
        t.join();
        System.out.println(t.getState());
    }
}`,
    ans: String.raw`NEW
5
false
TERMINATED`,
    exp: "만들기만 하고 start()하지 않은 쓰레드는 NEW, 실행을 마치면 TERMINATED예요. 우선순위 기본값은 5(NORM_PRIORITY)이고, 일반 쓰레드는 데몬 쓰레드가 아니에요."
  },
  {
    n: 113,
    ch: 13,
    lv: 3,
    t: "out",
    q: "join()으로 순서를 맞춘 코드의 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    public static void main(String[] args) throws InterruptedException {
        Thread a = new Thread(() -> System.out.println("A 작업"));
        Thread b = new Thread(() -> System.out.println("B 작업"));
        a.start();
        a.join();
        b.start();
        b.join();
        System.out.println("main 끝");
    }
}`,
    ans: String.raw`A 작업
B 작업
main 끝`,
    exp: "<code>a.join()</code>은 a가 끝날 때까지 main을 기다리게 해요. 그래서 B는 A가 끝난 뒤에 시작되고, 출력 순서가 항상 같아요. join이 없으면 순서는 실행할 때마다 달라질 수 있어요."
  },
  {
    n: 114,
    ch: 13,
    lv: 3,
    t: "out",
    q: "synchronized로 동기화한 카운터의 출력 결과를 쓰세요.",
    code: String.raw`class Counter {
    private int count = 0;
    public synchronized void increase() { count++; }
    public int get() { return count; }
}
public class Main {
    public static void main(String[] args) throws InterruptedException {
        Counter c = new Counter();
        Runnable r = () -> { for (int i = 0; i < 10000; i++) c.increase(); };
        Thread t1 = new Thread(r), t2 = new Thread(r);
        t1.start(); t2.start();
        t1.join(); t2.join();
        System.out.println(c.get());
    }
}`,
    ans: "20000",
    exp: "두 쓰레드가 1만 번씩 증가시켜요. <code>synchronized</code> 덕분에 한 번에 한 쓰레드만 count++를 실행하므로 항상 20000이에요. synchronized를 빼면 증가가 겹쳐 20000보다 작게 나올 수 있어요."
  },
  {
    n: 115,
    ch: 13,
    lv: 2,
    t: "mc",
    q: "wait()과 notify()에 대한 설명으로 <b>옳은</b> 것은?",
    choices: ["Thread 클래스에만 정의된 메서드다", "synchronized 블럭 안에서만 호출할 수 있다", "wait()을 호출해도 락은 계속 가지고 있다", "notify()는 기다리는 모든 쓰레드를 깨운다"],
    ans: 1,
    exp: "wait()·notify()는 Object의 메서드이고 synchronized 블럭 안에서만 써요. wait()을 부르면 <b>락을 내려놓고</b> 대기실에서 기다려요. notify()는 하나만, notifyAll()은 모두 깨워요."
  },
  {
    n: 116,
    ch: 13,
    lv: 2,
    t: "mc",
    q: "데몬 쓰레드에 대한 설명으로 <b>틀린</b> 것은?",
    choices: ["가비지 컬렉터처럼 다른 쓰레드를 돕는 보조 쓰레드다", "일반 쓰레드가 모두 끝나면 데몬 쓰레드도 자동으로 종료된다", "setDaemon(true)는 start()를 호출한 뒤에 해도 된다", "가상 쓰레드는 항상 데몬 쓰레드다"],
    ans: 2,
    exp: "<code>setDaemon(true)</code>는 반드시 <b>start() 전에</b> 호출해야 해요. 실행 중에 바꾸려 하면 IllegalThreadStateException이 나요."
  },
  {
    n: 117,
    ch: 13,
    lv: 2,
    t: "out",
    q: "가상 쓰레드를 만든 코드의 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    public static void main(String[] args) throws InterruptedException {
        Thread vt = Thread.ofVirtual().name("v1").start(() -> {
            Thread cur = Thread.currentThread();
            System.out.println(cur.getName() + " " + cur.isVirtual() + " " + cur.isDaemon());
        });
        vt.join();
        System.out.println(Thread.currentThread().isVirtual());
    }
}`,
    ans: String.raw`v1 true true
false`,
    exp: "<code>Thread.ofVirtual()</code>로 가상 쓰레드를 만들 수 있어요(JDK 21). 가상 쓰레드는 항상 데몬 쓰레드예요. main 쓰레드는 일반(플랫폼) 쓰레드라 isVirtual()이 false예요."
  },
  {
    n: 118,
    ch: 13,
    lv: 2,
    t: "out",
    q: "ExecutorService와 Future, CompletableFuture를 사용한 출력 결과를 쓰세요.",
    code: String.raw`import java.util.concurrent.*;
public class Main {
    public static void main(String[] args) throws Exception {
        try (ExecutorService es = Executors.newFixedThreadPool(2)) {
            Future<Integer> f1 = es.submit(() -> 1 + 2);
            Future<String> f2 = es.submit(() -> "hello".toUpperCase());
            System.out.println(f1.get() + " " + f2.get());
        }
        int r = CompletableFuture.supplyAsync(() -> 10)
                .thenApply(x -> x * 2)
                .thenApply(x -> x + 1)
                .join();
        System.out.println(r);
    }
}`,
    ans: String.raw`3 HELLO
21`,
    exp: "<code>submit(Callable)</code>은 Future를 돌려주고, <code>get()</code>은 결과가 나올 때까지 기다려요. CompletableFuture는 결과를 thenApply로 이어 받아 바꿔요(10 → 20 → 21)."
  },
  {
    n: 119,
    ch: 13,
    lv: 3,
    t: "self",
    q: "두 쓰레드가 공유하는 은행 계좌 <code>Account</code>(잔고 balance)에서 출금 메서드 <code>withdraw(int money)</code>가 잔고보다 많이 빠져나가지 않도록 <code>ReentrantLock</code>으로 동기화하세요.",
    answer: String.raw`class Account {
    private int balance = 1000;
    private final ReentrantLock lock = new ReentrantLock();

    public void withdraw(int money) {
        lock.lock();
        try {
            if (balance >= money) balance -= money;
        } finally {
            lock.unlock();
        }
    }
}`,
    kw: ["ReentrantLock", "lock.lock()", "finally", "lock.unlock()"],
    exp: "잔고 확인과 출금 사이에 다른 쓰레드가 끼어들지 못하게 한 묶음으로 잠가요. 예외가 나도 락이 풀리도록 <code>unlock()</code>은 반드시 finally에 둬요. 메서드에 synchronized를 붙여도 같은 효과예요."
  },
  {
    n: 120,
    ch: 1,
    lv: 1,
    t: "mc",
    q: "자바 프로그램이 실행을 시작하는 메서드는?",
    choices: ["start()", "run()", "main()", "init()"],
    ans: 2,
    exp: "자바 애플리케이션은 <code>public static void main(String[] args)</code>에서 시작해요."
  },
  {
    n: 121,
    ch: 1,
    lv: 1,
    t: "mc",
    q: "한 줄 주석을 쓰는 방법은?",
    choices: ["<code>/* */</code>", "<code>//</code>", "<code>#</code>", "<code>&lt;!-- --&gt;</code>"],
    ans: 1,
    exp: "<code>//</code>는 줄 끝까지, <code>/* */</code>는 여러 줄 주석이에요. <code>/** */</code>는 javadoc 문서용이에요."
  },
  {
    n: 122,
    ch: 1,
    lv: 1,
    t: "mc",
    q: "자바 소스 파일의 확장자는?",
    choices: [".class", ".java", ".jar", ".jvm"],
    ans: 1,
    exp: "소스 파일은 .java, 컴파일한 바이트코드 파일은 .class예요."
  },
  {
    n: 123,
    ch: 1,
    lv: 1,
    t: "mc",
    q: "자바로 작성한 모든 코드는 어디 안에 있어야 하나요? (package·import문 제외)",
    choices: ["메서드 밖 아무 곳", "클래스 블럭 { } 안", "main 메서드 안", "주석 안"],
    ans: 1,
    exp: "자바에서는 모든 코드가 클래스 안에 있어야 해요. package문과 import문만 예외로 클래스 밖에 써요."
  },
  {
    n: 124,
    ch: 1,
    lv: 1,
    t: "mc",
    q: "현재 최신 LTS(장기 지원) 버전으로 이 책이 기준으로 삼는 JDK는?",
    choices: ["JDK 8", "JDK 11", "JDK 17", "JDK 21"],
    ans: 3,
    exp: "이 책(4판)은 2023년에 나온 LTS인 JDK 21을 기준으로 해요."
  },
  {
    n: 125,
    ch: 1,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`System.out.println("Hello, Java.");
System.out.println("1" + "2");
System.out.println(1 + 2);`,
    ans: String.raw`Hello, Java.
12
3`,
    exp: "따옴표로 감싼 것은 문자열이라 이어 붙여지고(12), 숫자끼리는 더해져요(3)."
  },
  {
    n: 126,
    ch: 1,
    lv: 2,
    t: "mc",
    q: "<code>javac Hello.java</code>를 실행했는데 소스 안에 클래스가 3개 정의되어 있었어요. 생성되는 .class 파일은 몇 개인가요?",
    choices: ["1개", "2개", "3개", "알 수 없다"],
    ans: 2,
    exp: "클래스마다 하나씩 .class 파일이 만들어져요. 소스 파일 하나에 클래스가 여러 개면 .class 파일도 여러 개예요."
  },
  {
    n: 127,
    ch: 1,
    lv: 2,
    t: "mc",
    q: "<code>java Hello</code> 실행 시 <code>NoSuchMethodError: main</code>이 났어요. 원인으로 알맞은 것은?",
    choices: ["클래스 파일이 없다", "main 메서드의 선언부를 <code>public static void main(String[] args)</code>와 다르게 썼다", "세미콜론을 빠뜨렸다", "변수 이름에 오타가 있다"],
    ans: 1,
    exp: "실행할 클래스에 정확한 형태의 main 메서드가 없으면 이 에러가 나요. static이나 String[]을 빠뜨린 경우가 많아요."
  },
  {
    n: 128,
    ch: 1,
    lv: 2,
    t: "mc",
    q: "자바가 운영체제에 독립적인 이유로 가장 알맞은 것은?",
    choices: ["자바 소스를 OS마다 다시 작성하기 때문에", "바이트코드를 OS별 JVM이 실행하기 때문에", "OS가 자바를 기본으로 내장하기 때문에", "자바는 인터넷에서만 실행되기 때문에"],
    ans: 1,
    exp: "컴파일 결과인 바이트코드는 어느 OS에서나 같고, 각 OS에 맞는 JVM이 그것을 실행해요."
  },
  {
    n: 129,
    ch: 1,
    lv: 2,
    t: "mc",
    q: "OpenJDK와 Oracle JDK에 대한 설명으로 옳은 것은?",
    choices: ["OpenJDK는 유료다", "Oracle JDK는 상업적 용도로도 항상 무료다", "OpenJDK는 소스가 공개된 무료 배포판이며 여러 회사가 배포한다", "OpenJDK로는 자바 21을 쓸 수 없다"],
    ans: 2,
    exp: "OpenJDK는 오픈소스로 무료이고 Eclipse Temurin, Amazon Corretto 등이 이를 바탕으로 배포해요. Oracle JDK는 개인·비상업 용도만 무료예요."
  },
  {
    n: 130,
    ch: 1,
    lv: 2,
    t: "mc",
    q: "<code>illegal start of expression</code> 에러가 날 때 먼저 확인할 것은?",
    choices: ["괄호 짝과 문장 문법", "JDK 설치 경로", "파일 이름", "메모리 크기"],
    ans: 0,
    exp: "괄호를 빠뜨렸거나 문장 중간에 잘못된 기호가 있을 때 자주 나요. 에러가 난 줄과 그 앞 줄을 살펴보세요."
  },
  {
    n: 131,
    ch: 1,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`System.out.print("자바");
System.out.print("\t");
System.out.println("정석");
System.out.println("a\nb");`,
    ans: String.raw`자바	정석
a
b`,
    exp: "<code>\\t</code>는 탭, <code>\\n</code>은 줄바꿈 문자예요. 문자열 안에서 줄을 바꿀 수 있어요."
  },
  {
    n: 132,
    ch: 1,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`// System.out.println("A");
System.out.println("B"); // 주석
/* System.out.println("C"); */
System.out.println("D");`,
    ans: String.raw`B
D`,
    exp: "<code>//</code> 뒤와 <code>/* */</code> 사이는 주석이라 실행되지 않아요."
  },
  {
    n: 133,
    ch: 1,
    lv: 3,
    t: "mc",
    q: "JIT 컴파일러에 대한 설명으로 옳은 것은?",
    choices: ["자바 소스를 바이트코드로 바꾸는 javac의 다른 이름", "실행 중 자주 쓰이는 바이트코드를 기계어로 바꿔 두어 속도를 높이는 JVM의 기능", "자바 프로그램을 OS별 실행 파일(.exe)로 미리 만드는 도구", "가비지 컬렉터의 한 종류"],
    ans: 1,
    exp: "JVM은 바이트코드를 해석하면서 실행하는데, 자주 실행되는 부분은 JIT(Just-In-Time) 컴파일러가 기계어로 바꿔 두어 빨라져요."
  },
  {
    n: 134,
    ch: 1,
    lv: 3,
    t: "mc",
    q: "다음 중 main 메서드 선언으로 <b>실행이 되지 않는</b> 것은?",
    choices: ["<code>public static void main(String[] args)</code>", "<code>public static void main(String args[])</code>", "<code>static public void main(String... args)</code>", "<code>public void main(String[] args)</code>"],
    ans: 3,
    exp: "main은 인스턴스 없이 JVM이 호출하므로 반드시 <b>static</b>이어야 해요. <code>String args[]</code>, 가변인자, 제어자 순서 바꾸기는 모두 괜찮아요."
  },
  {
    n: 135,
    ch: 1,
    lv: 3,
    t: "mc",
    q: "자바의 동적 로딩(dynamic loading)이란?",
    choices: ["프로그램을 실행할 때 모든 클래스를 한꺼번에 메모리에 올리는 것", "필요한 시점에 필요한 클래스만 메모리에 올리는 것", "네트워크로 프로그램을 내려받는 것", "변수의 타입을 실행 중에 바꾸는 것"],
    ans: 1,
    exp: "자바는 실행 시 모든 클래스를 로딩하지 않고 필요할 때 로딩해요. 그래서 일부 클래스를 바꿔도 전체를 다시 컴파일하지 않아도 돼요."
  },
  {
    n: 136,
    ch: 1,
    lv: 3,
    t: "mc",
    q: "프리뷰(preview) 기능을 컴파일·실행할 때 필요한 옵션은?",
    choices: ["<code>--preview-on</code>", "<code>--enable-preview</code> (javac는 <code>--release 21</code>과 함께)", "<code>-experimental</code>", "옵션 없이 바로 쓸 수 있다"],
    ans: 1,
    exp: "프리뷰 기능은 정식 기능이 아니라서 <code>javac --enable-preview --release 21</code>, <code>java --enable-preview</code>처럼 옵션을 줘야 해요."
  },
  {
    n: 137,
    ch: 1,
    lv: 3,
    t: "mc",
    q: "JEP에 대한 설명으로 옳은 것은?",
    choices: ["자바 프로그램을 실행하는 엔진", "자바의 새 기능 추가·개선을 제안하는 공식 문서이며 번호로 관리된다", "Oracle JDK에만 있는 유료 기능", "자바 표준 라이브러리의 패키지 이름"],
    ans: 1,
    exp: "JEP(Java Enhancement Proposal)는 JDK 8부터 도입된 개선 제안 제도예요. 예: switch식은 JEP 361. 상위 개념으로 JSR이 있어요."
  },
  {
    n: 138,
    ch: 1,
    lv: 3,
    t: "out",
    q: "main 메서드의 매개변수 args를 사용하는 코드예요. 실행할 때 아무 인자도 주지 않았다면 출력 결과는?",
    code: String.raw`System.out.println(args.length);
System.out.println(args == null);`,
    ans: String.raw`0
false`,
    exp: "실행 인자가 없으면 args는 null이 아니라 <b>길이가 0인 배열</b>이에요."
  },
  {
    n: 139,
    ch: 1,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`System.out.println("\"Java\"");
System.out.println('\'' + "A");
System.out.println("C:\\temp");`,
    ans: String.raw`"Java"
'A
C:\temp`,
    exp: "문자열 안의 큰따옴표는 <code>\\\"</code>, 작은따옴표 문자는 <code>'\\''</code>, 역슬래시는 <code>\\\\</code>로 써요."
  },
  {
    n: 140,
    ch: 1,
    lv: 3,
    t: "self",
    q: "하나의 소스 파일 <code>Main.java</code>에 <code>public class Main</code>과 <code>class Helper</code>를 함께 정의했어요. ① 컴파일하면 어떤 파일이 생기는지, ② <code>Helper</code>를 public으로 바꾸면 어떻게 되는지 쓰세요.",
    answer: String.raw`① Main.class와 Helper.class 두 개가 생성된다(클래스마다 하나씩).
② 한 소스 파일에 public class는 하나만 둘 수 있으므로 컴파일 에러가 난다.
   Helper를 public으로 쓰려면 Helper.java라는 별도 파일로 옮겨야 한다.`,
    kw: ["Main.class", "Helper.class", "public class", "하나"],
    exp: "파일 이름은 public class의 이름과 같아야 하므로 public class는 파일당 하나뿐이에요."
  },
  {
    n: 141,
    ch: 1,
    lv: 3,
    t: "self",
    q: "자바 프로그램을 작성해서 실행하기까지의 과정을 “소스 작성 → ? → ?” 순서로, 사용하는 명령어와 만들어지는 파일까지 쓰세요.",
    answer: String.raw`1. Hello.java 소스 파일을 작성한다.
2. javac Hello.java 로 컴파일하면 바이트코드 파일 Hello.class가 만들어진다.
3. java Hello 로 실행하면 JVM이 Hello.class를 로드해 main 메서드를 실행한다.`,
    kw: ["javac", ".class", "java", "JVM"],
    exp: "컴파일(javac)과 실행(java)은 다른 단계예요. 실행할 때는 확장자 없이 클래스 이름만 써요."
  },
  {
    n: 142,
    ch: 2,
    lv: 1,
    t: "mc",
    q: "정수형의 기본 타입(정수 리터럴의 기본 타입)은?",
    choices: ["byte", "short", "int", "long"],
    ans: 2,
    exp: "정수 리터럴은 접미사가 없으면 int예요. long으로 쓰려면 <code>100L</code>처럼 L을 붙여요."
  },
  {
    n: 143,
    ch: 2,
    lv: 1,
    t: "mc",
    q: "<code>boolean</code> 타입 변수에 저장할 수 있는 값은?",
    choices: ["0과 1", "true와 false", "\"yes\"와 \"no\"", "모든 정수"],
    ans: 1,
    exp: "boolean은 true와 false만 저장해요. 다른 기본형과 형변환도 할 수 없어요."
  },
  {
    n: 144,
    ch: 2,
    lv: 1,
    t: "mc",
    q: "상수를 선언할 때 쓰는 키워드는?",
    choices: ["static", "const", "final", "var"],
    ans: 2,
    exp: "<code>final int MAX = 10;</code>처럼 final을 붙이면 값을 한 번만 저장할 수 있어요. const는 예약어지만 쓰이지 않아요."
  },
  {
    n: 145,
    ch: 2,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int a = 10;
a = a + 5;
int b = a;
a = 0;
System.out.println(a);
System.out.println(b);`,
    ans: String.raw`0
15`,
    exp: "<code>b = a</code>는 그 순간의 값(15)을 복사해요. 이후 a를 바꿔도 b는 그대로예요."
  },
  {
    n: 146,
    ch: 2,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`long big = 3_000_000_000L;
System.out.println(big);
System.out.println(0x10);
System.out.println(010);
System.out.println(0b101);`,
    ans: String.raw`3000000000
16
8
5`,
    exp: "<code>_</code>는 자릿수 구분용이에요. 0x는 16진수(16), 0은 8진수(8), 0b는 2진수(5)예요."
  },
  {
    n: 147,
    ch: 2,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`String name = "자바";
int ver = 21;
System.out.println(name + ver);
System.out.println(name + " " + ver + "버전");`,
    ans: String.raw`자바21
자바 21버전`,
    exp: "문자열과 숫자를 +로 연결하면 숫자가 문자열로 바뀌어 이어 붙여져요."
  },
  {
    n: 148,
    ch: 2,
    lv: 1,
    t: "mc",
    q: "<code>char</code> 타입의 크기는?",
    choices: ["1 byte", "2 byte", "4 byte", "8 byte"],
    ans: 1,
    exp: "char는 유니코드 문자를 저장하므로 2 byte(16 bit)예요. 범위는 0~65535예요."
  },
  {
    n: 149,
    ch: 2,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`var x = 10;
var y = 2.5;
var s = "합: ";
System.out.println(s + (x + y));
System.out.println(s + x + y);`,
    ans: String.raw`합: 12.5
합: 102.5`,
    exp: "var는 초기값으로 타입을 추론해요(int, double, String). 괄호가 있으면 x + y를 먼저 계산(12.5)하고, 없으면 왼쪽부터 문자열에 이어 붙여요."
  },
  {
    n: 150,
    ch: 2,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int i = 'A';
char c = 66;
char d = (char) (c + 1);
System.out.println(i);
System.out.println(c);
System.out.println(d);`,
    ans: String.raw`65
B
C`,
    exp: "char와 int는 서로 대입할 수 있어요(상수일 때). c + 1은 int라서 char로 형변환해야 해요."
  },
  {
    n: 151,
    ch: 2,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`double d = 85.4;
int score = (int) d;
float f = score;
System.out.println(score);
System.out.println(f);
System.out.println((int) -3.7);`,
    ans: String.raw`85
85.0
-3`,
    exp: "실수 → 정수는 소수점 아래를 버려요(음수도 0 쪽으로 버림, -3). int를 float에 넣으면 자동 형변환되어 85.0이에요."
  },
  {
    n: 152,
    ch: 2,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`System.out.printf("%d %s %c %b%n", 10, "Hi", 'J', true);
System.out.printf("[%6.2f]%n", 3.14159);
System.out.printf("[%-6s]%n", "ab");
System.out.printf("%o %X%n", 8, 255);`,
    ans: String.raw`10 Hi J true
[  3.14]
[ab    ]
10 FF`,
    exp: "%6.2f는 전체 6칸에 소수점 둘째 자리까지, %-6s는 6칸 왼쪽 정렬이에요. %o는 8진수, %X는 대문자 16진수예요."
  },
  {
    n: 153,
    ch: 2,
    lv: 2,
    t: "mc",
    q: "<code>int i = 0x123456789;</code>가 컴파일 에러인 이유는?",
    choices: ["16진수는 int에 넣을 수 없어서", "리터럴 값이 int 범위를 넘어서(long 리터럴이 필요)", "0x 접두사가 잘못돼서", "변수 이름이 잘못돼서"],
    ans: 1,
    exp: "0x123456789는 약 48억이라 int 범위(약 ±21억)를 넘어요. long에 <code>0x123456789L</code>로 넣어야 해요."
  },
  {
    n: 154,
    ch: 2,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`String str = """
    Hello,
      Java!
    """;
System.out.print(str);
System.out.println(str.length());`,
    ans: String.raw`Hello,
  Java!
15`,
    exp: "텍스트 블럭은 가장 왼쪽 줄의 들여쓰기를 기준으로 공통 공백을 지워요. 마지막 줄의 \"\"\" 앞에서 줄바꿈이 있으므로 끝에 \\n이 포함돼요."
  },
  {
    n: 155,
    ch: 2,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`byte b = 127;
b++;
System.out.println(b);
byte c = (byte) 128;
byte d = (byte) 255;
System.out.println(c + " " + d);`,
    ans: String.raw`-128
-128 -1`,
    exp: "byte 최대값 127에 1을 더하면 최소값 -128로 넘어가요. 128과 255를 byte로 바꾸면 2의 보수로 -128, -1이 돼요."
  },
  {
    n: 156,
    ch: 2,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`float f = 1234567890f;
System.out.println(f);
double d = 1234567890;
System.out.println(d);
System.out.println((int) f);`,
    ans: String.raw`1.234568E9
1.23456789E9
1234567936`,
    exp: "float는 정밀도가 약 7자리라 1234567890을 정확히 저장하지 못해 실제로는 1234567936으로 저장돼요(출력은 구별 가능한 가장 짧은 표현인 1.234568E9). double은 15자리라 정확해요."
  },
  {
    n: 157,
    ch: 2,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`char c1 = '7';
int n = c1 - '0';
char c2 = (char) (n + 1 + '0');
String s = n + "";
System.out.println(n * 2);
System.out.println(c2);
System.out.println(s + s);
System.out.println(Integer.parseInt("12") + 1);`,
    ans: String.raw`14
8
77
13`,
    exp: "문자 '7'에서 '0'을 빼면 숫자 7, 숫자에 '0'을 더하면 문자예요. 숫자에 \"\"를 더하면 문자열이에요."
  },
  {
    n: 158,
    ch: 2,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int x = 5, y = 3;
x = x ^ y;
y = x ^ y;
x = x ^ y;
System.out.println(x + " " + y);
System.out.println(Integer.toBinaryString(-5).length());
System.out.println(Integer.toBinaryString(10));`,
    ans: String.raw`3 5
32
1010`,
    exp: "XOR을 세 번 쓰면 임시 변수 없이 두 값을 바꿀 수 있어요. int는 32 bit라 음수의 2진 표현은 32자리예요."
  },
  {
    n: 159,
    ch: 2,
    lv: 3,
    t: "mc",
    q: "<code>char</code>와 <code>short</code>는 둘 다 2 byte인데 서로 자동 형변환이 안 되는 이유는?",
    choices: ["크기가 달라서", "표현 범위가 달라서(char는 0~65535, short는 -32768~32767)", "char는 문자라서 숫자로 바꿀 수 없어서", "둘 다 기본형이 아니라서"],
    ans: 1,
    exp: "크기는 같지만 char에는 음수가 없고 short는 32767을 넘는 값을 못 담아요. 값 손실 가능성이 있어 명시적 형변환이 필요해요."
  },
  {
    n: 160,
    ch: 2,
    lv: 3,
    t: "mc",
    q: "<code>long l = 2147483647 + 1;</code>을 실행하면 l의 값은?",
    choices: ["2147483648", "-2147483648", "컴파일 에러", "0"],
    ans: 1,
    exp: "오른쪽은 int끼리의 계산이라 먼저 int로 오버플로우(-2147483648)된 뒤 long에 대입돼요. 2147483647L + 1처럼 long으로 계산해야 해요."
  },
  {
    n: 161,
    ch: 2,
    lv: 3,
    t: "self",
    q: "실수형 float의 저장 형식(부호, 지수, 가수)을 설명하고, float의 정밀도가 약 7자리인 이유를 쓰세요.",
    answer: String.raw`float는 32 bit = 부호(S) 1 bit + 지수(E) 8 bit + 가수(M) 23 bit로 저장한다.
값은 ±1.가수 × 2^(지수-127) 형태로 정규화된다.
정밀도는 가수의 비트 수가 결정하는데, 2^23 ≈ 10^7 이므로 10진수로 약 7자리까지 정확하다.
(double은 가수 52 bit라 약 15자리)`,
    kw: ["부호", "지수", "가수", "23"],
    exp: "지수가 범위를, 가수가 정밀도를 결정해요. 정밀도가 중요하면 double을 써요."
  },
  {
    n: 162,
    ch: 3,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int a = 7, b = 2;
System.out.println(a + b);
System.out.println(a - b);
System.out.println(a * b);
System.out.println(a / b);
System.out.println(a % b);`,
    ans: String.raw`9
5
14
3
1`,
    exp: "정수끼리 나누면 몫(3)만 남고, %는 나머지(1)예요."
  },
  {
    n: 163,
    ch: 3,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int x = 10;
System.out.println(x > 5);
System.out.println(x == 10);
System.out.println(x != 10);
System.out.println(x <= 9);`,
    ans: String.raw`true
true
false
false`,
    exp: "비교 연산자의 결과는 항상 boolean(true/false)이에요."
  },
  {
    n: 164,
    ch: 3,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`boolean a = true, b = false;
System.out.println(a && b);
System.out.println(a || b);
System.out.println(!a);
System.out.println(!(a && b));`,
    ans: String.raw`false
true
false
true`,
    exp: "&&는 둘 다 true일 때만, ||는 하나라도 true면 true, !는 반대예요."
  },
  {
    n: 165,
    ch: 3,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int i = 3;
i++;
System.out.println(i);
i--;
i--;
System.out.println(i);
System.out.println(-i);`,
    ans: String.raw`4
2
-2`,
    exp: "증감 연산자가 혼자 쓰이면 전위형·후위형 차이가 없어요. -i는 부호 연산자예요."
  },
  {
    n: 166,
    ch: 3,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int n = 17;
System.out.println(n % 2 == 1 ? "홀수" : "짝수");
System.out.println(n % 5);
System.out.println(n / 5 * 5 + n % 5);`,
    ans: String.raw`홀수
2
17`,
    exp: "n % 2가 1이면 홀수예요. (n / 5) * 5 + n % 5는 항상 n이에요."
  },
  {
    n: 167,
    ch: 3,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int x = 10;
x += 5;
System.out.println(x);
x -= 3;
System.out.println(x);
x /= 4;
System.out.println(x);
x %= 2;
System.out.println(x);`,
    ans: String.raw`15
12
3
1`,
    exp: "복합 대입 연산자: x += 5는 x = x + 5와 같아요. 15 → 12 → 3 → 1."
  },
  {
    n: 168,
    ch: 3,
    lv: 1,
    t: "mc",
    q: "<code>x</code>가 10보다 크고 20보다 작은지 검사하는 올바른 조건식은?",
    choices: ["<code>10 &lt; x &lt; 20</code>", "<code>10 &lt; x &amp;&amp; x &lt; 20</code>", "<code>10 &lt; x || x &lt; 20</code>", "<code>x &gt; 10 &amp; 20</code>"],
    ans: 1,
    exp: "자바에서는 수학처럼 이어 쓸 수 없어요. 두 조건을 <code>&&</code>로 연결해요."
  },
  {
    n: 169,
    ch: 3,
    lv: 1,
    t: "mc",
    q: "<code>\"abc\" == \"abc\"</code>처럼 문자열의 <b>내용</b>을 비교할 때 써야 하는 것은?",
    choices: ["<code>==</code>", "<code>=</code>", "<code>equals()</code>", "<code>compare()</code>"],
    ans: 2,
    exp: "<code>==</code>는 같은 객체인지(주소) 비교해요. 내용 비교는 <code>equals()</code>예요."
  },
  {
    n: 170,
    ch: 3,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`char c = 'a';
char upper = (char) (c - 32);
System.out.println(upper);
System.out.println((char) ('A' + 2));
System.out.println('a' > 'A');
System.out.println((int) '0');`,
    ans: String.raw`A
C
true
48`,
    exp: "대문자와 소문자의 코드값 차이는 32예요. 문자도 숫자처럼 비교할 수 있어요. 문자 0의 코드는 48이에요."
  },
  {
    n: 171,
    ch: 3,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`double pi = 3.141592;
double shortPi = Math.round(pi * 1000) / 1000.0;
System.out.println(shortPi);
System.out.println((int) (pi * 1000) / 1000.0);
System.out.println(Math.round(pi * 1000) / 1000);`,
    ans: String.raw`3.142
3.141
3`,
    exp: "Math.round(pi * 1000)은 3142예요. 1000.0으로 나누면 3.142, 1000으로 나누면 정수 나눗셈이라 3이에요. (int)로 바꾸면 버림이라 3.141이에요."
  },
  {
    n: 172,
    ch: 3,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int a = 10, b = 3;
double r1 = a / b;
double r2 = (double) a / b;
double r3 = a / (double) b;
System.out.println(r1);
System.out.println(r2);
System.out.println(r3 == r2);`,
    ans: String.raw`3.0
3.3333333333333335
true`,
    exp: "a / b는 int 나눗셈(3)을 먼저 한 뒤 double로 바뀌어 3.0이에요. 한쪽을 double로 바꿔야 실수 나눗셈이에요."
  },
  {
    n: 173,
    ch: 3,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int x = 5;
int y = x++ * 2;
int z = --x + 10;
System.out.println(x + " " + y + " " + z);`,
    ans: "5 10 15",
    exp: "y = 5 * 2 = 10(그 뒤 x = 6), --x로 x = 5가 된 뒤 z = 15예요."
  },
  {
    n: 174,
    ch: 3,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int a = 0b1100, b = 0b1010;
System.out.println(a & b);
System.out.println(a | b);
System.out.println(a ^ b);
System.out.println(~a);`,
    ans: String.raw`8
14
6
-13`,
    exp: "1100 & 1010 = 1000(8), | = 1110(14), ^ = 0110(6). ~a는 모든 비트를 반전해 -a-1 = -13이에요."
  },
  {
    n: 175,
    ch: 3,
    lv: 2,
    t: "mc",
    q: "<code>int i = 10; i = i++ ;</code> 실행 후 i의 값은?",
    choices: ["10", "11", "12", "컴파일 에러"],
    ans: 0,
    exp: "i++는 원래 값 10을 돌려준 뒤 i를 11로 증가시키지만, 그 다음 대입으로 다시 10이 들어가요. 이런 코드는 쓰지 않는 게 좋아요."
  },
  {
    n: 176,
    ch: 3,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int x = 2;
System.out.println(x << 2 + 1);
System.out.println((x << 2) + 1);
System.out.println(1 + 2 * 3 - 4 / 2);
System.out.println(10 - 3 - 2);
System.out.println(2 * 3 % 4);`,
    ans: String.raw`16
9
5
5
2`,
    exp: "덧셈이 쉬프트보다 먼저예요(2 << 3 = 16). 같은 우선순위는 왼쪽부터 계산해요(10 - 3 - 2 = 5, 2 * 3 % 4 = 2)."
  },
  {
    n: 177,
    ch: 3,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int a = 1, b = 1;
if (a++ > 1 & b++ > 1) { }
System.out.println(a + " " + b);
a = 1; b = 1;
if (a++ > 1 && b++ > 1) { }
System.out.println(a + " " + b);`,
    ans: String.raw`2 2
2 1`,
    exp: "&는 비트 연산자라 단락 평가를 하지 않아 양쪽을 모두 실행해요. &&는 왼쪽이 false면 오른쪽을 건너뛰어요."
  },
  {
    n: 178,
    ch: 3,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int x = -16;
System.out.println(x >> 2);
System.out.println(x >>> 28);
System.out.println(1 << 31);
System.out.println(1 << 32);`,
    ans: String.raw`-4
15
-2147483648
1`,
    exp: ">>는 부호 비트로 빈칸을 채워 -4, >>>는 0으로 채워요(15). 1 << 31은 int 최소값이고, int의 쉬프트 수는 32로 나눈 나머지만 쓰여서 1 << 32는 1이에요."
  },
  {
    n: 179,
    ch: 3,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`short s = 10;
s += 5;
s++;
// s = s + 1;   // 컴파일 에러
char c = 'A';
c += 2;
System.out.println(s + " " + c);`,
    ans: "16 C",
    exp: "복합 대입 연산자와 증감 연산자는 결과를 원래 타입으로 자동 형변환해 줘요. 그래서 s += 5는 되지만 s = s + 1은 int라 에러예요."
  },
  {
    n: 180,
    ch: 3,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`float f = 0.1f;
double d = 0.1;
double d2 = (double) f;
System.out.println(f == d);
System.out.println((float) d == f);
System.out.println(d2);`,
    ans: String.raw`false
true
0.10000000149011612`,
    exp: "float 0.1을 double로 바꾸면 float의 오차가 그대로 드러나요(0.10000000149011612). 비교할 때는 작은 타입(float)으로 맞춰야 해요."
  },
  {
    n: 181,
    ch: 3,
    lv: 3,
    t: "mc",
    q: "<code>byte b = 10; b = -b;</code>가 컴파일 에러인 이유는?",
    choices: ["byte에는 음수를 저장할 수 없어서", "부호 연산자 -의 결과가 int라서", "-b는 b를 바꾸지 않아서", "byte는 연산할 수 없어서"],
    ans: 1,
    exp: "단항 연산자에도 산술 변환이 적용돼 int보다 작은 타입은 int가 돼요. <code>b = (byte) -b;</code>로 형변환해야 해요."
  },
  {
    n: 182,
    ch: 3,
    lv: 3,
    t: "self",
    q: "두 정수 a, b의 평균을 소수점 첫째 자리에서 반올림한 정수로 출력하는 식을 쓰세요. 예: a=3, b=4이면 4.",
    answer: String.raw`int avg = (int) Math.round((a + b) / 2.0);
// 또는 int avg = (int) ((a + b) / 2.0 + 0.5);   (양수일 때)`,
    kw: ["2.0", "Math.round", "(int)"],
    exp: "(a + b) / 2는 정수 나눗셈이라 3이 돼요. 2.0으로 나눠 실수(3.5)로 만든 뒤 반올림해야 해요. Math.round는 long을 돌려주므로 int로 형변환해요."
  },
  {
    n: 183,
    ch: 4,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int age = 20;
if (age >= 19) {
    System.out.println("성인");
} else {
    System.out.println("미성년자");
}
System.out.println("끝");`,
    ans: String.raw`성인
끝`,
    exp: "if-else는 조건이 참이면 if 블럭, 거짓이면 else 블럭 중 하나만 실행해요."
  },
  {
    n: 184,
    ch: 4,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`for (int i = 0; i < 5; i++) {
    System.out.print(i + " ");
}
System.out.println();
for (int i = 10; i > 0; i -= 3) {
    System.out.print(i + " ");
}
System.out.println();`,
    ans: String.raw`0 1 2 3 4 
10 7 4 1 `,
    exp: "증감식을 바꾸면 거꾸로 세거나 여러 칸씩 건너뛸 수 있어요."
  },
  {
    n: 185,
    ch: 4,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int i = 1, sum = 0;
while (i <= 5) {
    sum += i;
    i++;
}
System.out.println(sum + " " + i);`,
    ans: "15 6",
    exp: "조건이 거짓이 되는 순간(i = 6) 반복을 멈춰요."
  },
  {
    n: 186,
    ch: 4,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int[] arr = {3, 6, 9};
for (int v : arr) {
    System.out.print(v * 2 + " ");
}
System.out.println();`,
    ans: "6 12 18 ",
    exp: "향상된 for문은 배열 요소를 처음부터 하나씩 꺼내요."
  },
  {
    n: 187,
    ch: 4,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int month = 4;
switch (month) {
    case 3: case 4: case 5:
        System.out.println("봄");
        break;
    case 6: case 7: case 8:
        System.out.println("여름");
        break;
    default:
        System.out.println("그 외");
}`,
    ans: "봄",
    exp: "여러 case를 이어 쓰면 하나로 묶을 수 있어요. break가 있어서 \"봄\"만 출력돼요."
  },
  {
    n: 188,
    ch: 4,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`for (int i = 1; i <= 10; i++) {
    if (i == 4) break;
    System.out.print(i);
}
System.out.println();`,
    ans: "123",
    exp: "break를 만나면 반복문을 바로 빠져나가요."
  },
  {
    n: 189,
    ch: 4,
    lv: 1,
    t: "mc",
    q: "switch문의 case에 쓸 수 <b>없는</b> 것은?",
    choices: ["정수 리터럴 <code>3</code>", "문자 리터럴 <code>'A'</code>", "문자열 리터럴 <code>\"YES\"</code>", "실수 리터럴 <code>1.5</code>"],
    ans: 3,
    exp: "case에는 정수, 문자, 문자열, 열거형 상수와 final 상수만 쓸 수 있어요. 실수와 변수는 쓸 수 없어요."
  },
  {
    n: 190,
    ch: 4,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int x = 15;
if (x > 10)
    if (x > 20)
        System.out.println("A");
    else
        System.out.println("B");
System.out.println("C");`,
    ans: String.raw`B
C`,
    exp: "괄호를 생략하면 else는 <b>가장 가까운 if</b>에 속해요. 들여쓰기와 상관없어요."
  },
  {
    n: 191,
    ch: 4,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int num = 12345, sum = 0;
while (num > 0) {
    sum += num % 10;
    num /= 10;
}
System.out.println(sum);`,
    ans: "15",
    exp: "10으로 나눈 나머지가 마지막 자리 숫자예요. 이를 반복하면 각 자리의 합(1+2+3+4+5)을 구할 수 있어요."
  },
  {
    n: 192,
    ch: 4,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int sum = 0, i = 0;
while (true) {
    if (sum > 100) break;
    i++;
    sum += i;
}
System.out.println("i=" + i + ", sum=" + sum);`,
    ans: "i=14, sum=105",
    exp: "1부터 더해 가다가 합이 100을 처음 넘을 때 멈춰요(1+…+14 = 105)."
  },
  {
    n: 193,
    ch: 4,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`for (int i = 2; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        System.out.print(i + "x" + j + "=" + i * j + " ");
    }
    System.out.println();
}`,
    ans: String.raw`2x1=2 2x2=4 2x3=6 
3x1=3 3x2=6 3x3=9 `,
    exp: "바깥 for(i)가 한 번 돌 때 안쪽 for(j)는 3번 돌아요."
  },
  {
    n: 194,
    ch: 4,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3 - i; j++) System.out.print(" ");
    for (int j = 1; j <= 2 * i - 1; j++) System.out.print("*");
    System.out.println();
}`,
    ans: String.raw`  *
 ***
*****`,
    exp: "줄마다 공백은 3-i개, 별은 2i-1개를 출력해 삼각형(피라미드) 모양이 돼요."
  },
  {
    n: 195,
    ch: 4,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int count = 0;
for (int i = 1; i <= 50; i++) {
    int n = i;
    boolean has369 = false;
    while (n > 0) {
        int d = n % 10;
        if (d == 3 || d == 6 || d == 9) { has369 = true; break; }
        n /= 10;
    }
    if (has369) count++;
}
System.out.println(count);`,
    ans: "22",
    exp: "1~50 중 각 자리에 3, 6, 9가 하나라도 있는 수의 개수예요(박수를 치는 횟수가 아니라 수의 개수). 안쪽 break는 while만 빠져나가요."
  },
  {
    n: 196,
    ch: 4,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`outer:
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == j) continue outer;
        System.out.print(i + "" + j + " ");
    }
}
System.out.println();`,
    ans: "21 31 32 ",
    exp: "i == j가 되면 안쪽 반복의 남은 부분을 버리고 바깥 for의 다음 i로 넘어가요. 그래서 j가 i보다 작을 때만 출력돼요."
  },
  {
    n: 197,
    ch: 4,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int i = 0;
do {
    i += 2;
    if (i == 4) continue;
    System.out.print(i + " ");
} while (i < 8);
System.out.println();`,
    ans: "2 6 8 ",
    exp: "do-while에서 continue를 만나면 조건식(i < 8) 검사로 가요. i가 4일 때만 출력을 건너뛰어요."
  },
  {
    n: 198,
    ch: 4,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`String cmd = "stop";
int code = switch (cmd) {
    case "start" -> 1;
    case "stop" -> {
        System.out.println("멈춤 처리");
        yield 2;
    }
    default -> -1;
};
System.out.println(code);`,
    ans: String.raw`멈춤 처리
2`,
    exp: "화살표 case에서 여러 문장을 쓰려면 블럭 { }을 쓰고 <code>yield</code>로 값을 돌려줘요."
  },
  {
    n: 199,
    ch: 4,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int n = 3;
switch (n) {
    default: System.out.print("D");
    case 1: System.out.print("1");
    case 2: System.out.print("2"); break;
    case 4: System.out.print("4");
}
System.out.println();`,
    ans: "D12",
    exp: "default는 위치와 상관없이 일치하는 case가 없을 때 실행돼요. break가 없어서 아래 case 1, 2까지 실행한 뒤 멈춰요."
  },
  {
    n: 200,
    ch: 4,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int a = 0, b = 0;
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    if (i > 7) break;
    a += i;
    b++;
}
System.out.println(a + " " + b);`,
    ans: "16 4",
    exp: "홀수 1, 3, 5, 7만 더해지고(16), 9는 i > 7이라 break돼요."
  },
  {
    n: 201,
    ch: 4,
    lv: 3,
    t: "mc",
    q: "다음 중 <b>무한 반복</b>이 되는 것은?",
    choices: ["<code>for (int i = 0; i &lt; 10; i++) { }</code>", "<code>for (;;) { }</code>", "<code>while (false) { }</code>", "<code>do { } while (false);</code>"],
    ans: 1,
    exp: "for문의 조건식을 생략하면 항상 참으로 간주돼요. <code>while (false)</code>는 실행되지 않는 코드라 컴파일 에러가 나요."
  },
  {
    n: 202,
    ch: 4,
    lv: 3,
    t: "self",
    q: "1부터 100까지의 수 중 3의 배수이면서 5의 배수가 아닌 수의 합을 구해 출력하는 코드를 for문과 continue를 사용해 쓰세요.",
    answer: String.raw`int sum = 0;
for (int i = 1; i <= 100; i++) {
    if (i % 3 != 0 || i % 5 == 0) continue;
    sum += i;
}
System.out.println(sum);   // 1368`,
    kw: ["for", "continue", "i % 3", "i % 5"],
    exp: "조건에 맞지 않는 경우를 continue로 먼저 걸러내면 코드가 단순해져요. 3의 배수 합(1683)에서 15의 배수 합(315)을 빼면 1368이에요."
  },
  {
    n: 203,
    ch: 5,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int[] arr = {10, 20, 30, 40};
System.out.println(arr[0] + arr[3]);
System.out.println(arr.length);
arr[2] = 99;
System.out.println(arr[2]);`,
    ans: String.raw`50
4
99`,
    exp: "인덱스는 0부터 시작해서 마지막 요소는 arr[length - 1]이에요."
  },
  {
    n: 204,
    ch: 5,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int[] score = {80, 90, 70};
int sum = 0;
for (int i = 0; i < score.length; i++) sum += score[i];
System.out.println(sum);
System.out.println(sum / score.length);`,
    ans: String.raw`240
80`,
    exp: "반복문으로 모든 요소를 더한 뒤 개수로 나누면 평균이에요(정수 나눗셈)."
  },
  {
    n: 205,
    ch: 5,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`double[] d = new double[2];
char[] c = new char[2];
System.out.println(d[0]);
System.out.println((int) c[0]);`,
    ans: String.raw`0.0
0`,
    exp: "double 배열의 기본값은 0.0, char 배열은 '\\u0000'(코드 0)이에요."
  },
  {
    n: 206,
    ch: 5,
    lv: 1,
    t: "mc",
    q: "길이가 5인 int 배열을 만드는 올바른 코드는?",
    choices: ["<code>int arr[5];</code>", "<code>int[] arr = new int[5];</code>", "<code>int[] arr = new int();</code>", "<code>int arr = new int[5];</code>"],
    ans: 1,
    exp: "배열은 <code>new 타입[길이]</code>로 생성해요. C언어처럼 선언할 때 길이를 쓸 수 없어요."
  },
  {
    n: 207,
    ch: 5,
    lv: 1,
    t: "mc",
    q: "<code>int[] a = {1, 2, 3};</code> 에서 배열의 길이를 구하는 방법은?",
    choices: ["<code>a.length()</code>", "<code>a.size()</code>", "<code>a.length</code>", "<code>length(a)</code>"],
    ans: 2,
    exp: "배열의 길이는 괄호 없는 <code>length</code>예요. String은 메서드 <code>length()</code>, 컬렉션은 <code>size()</code>예요."
  },
  {
    n: 208,
    ch: 5,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`String[] fruits = {"사과", "배", "포도"};
for (String f : fruits) System.out.print(f + " ");
System.out.println();
System.out.println(fruits[1].length());`,
    ans: String.raw`사과 배 포도 
1`,
    exp: "향상된 for로 String 배열을 차례로 읽어요. \"배\"의 길이는 1이에요."
  },
  {
    n: 209,
    ch: 5,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int[] a = new int[5];
for (int i = 0; i < a.length; i++) a[i] = i * i;
System.out.println(java.util.Arrays.toString(a));`,
    ans: "[0, 1, 4, 9, 16]",
    exp: "반복문으로 배열에 값을 채우는 기본 패턴이에요."
  },
  {
    n: 210,
    ch: 5,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int[] arr = {5, 1, 4, 2, 3};
java.util.Arrays.sort(arr);
System.out.println(java.util.Arrays.toString(arr));
int[] copy = java.util.Arrays.copyOf(arr, 7);
System.out.println(java.util.Arrays.toString(copy));
System.out.println(java.util.Arrays.toString(java.util.Arrays.copyOfRange(arr, 1, 3)));`,
    ans: String.raw`[1, 2, 3, 4, 5]
[1, 2, 3, 4, 5, 0, 0]
[2, 3]`,
    exp: "sort는 오름차순 정렬, copyOf는 더 길게 복사하면 남는 자리를 0으로 채워요. copyOfRange(1, 3)은 1~2번 요소예요."
  },
  {
    n: 211,
    ch: 5,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int[] arr = {1, 2, 3, 4, 5};
for (int i = 0; i < arr.length / 2; i++) {
    int tmp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tmp;
}
System.out.println(java.util.Arrays.toString(arr));`,
    ans: "[5, 4, 3, 2, 1]",
    exp: "앞과 뒤를 하나씩 바꾸면 배열을 뒤집을 수 있어요. 절반까지만 반복해야 다시 원래대로 돌아가지 않아요."
  },
  {
    n: 212,
    ch: 5,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int[] numArr = {3, 1, 3, 0, 1, 3, 2};
int[] counter = new int[4];
for (int n : numArr) counter[n]++;
for (int i = 0; i < counter.length; i++)
    System.out.println(i + ":" + counter[i]);`,
    ans: String.raw`0:1
1:2
2:1
3:3`,
    exp: "값을 인덱스로 삼아 카운터를 증가시키면 각 값이 몇 번 나왔는지 셀 수 있어요."
  },
  {
    n: 213,
    ch: 5,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`String s = "hello";
char[] ch = s.toCharArray();
ch[0] = 'H';
String t = new String(ch);
System.out.println(s);
System.out.println(t);
System.out.println(s.equals("hello") + " " + t.equalsIgnoreCase("HELLO"));`,
    ans: String.raw`hello
Hello
true true`,
    exp: "toCharArray는 복사본을 만들어서 ch를 바꿔도 s는 그대로예요. String은 내용을 바꿀 수 없어요."
  },
  {
    n: 214,
    ch: 5,
    lv: 2,
    t: "mc",
    q: "<code>int[] a = {1, 2}; int[] b = {1, 2};</code>일 때 <code>a == b</code>와 <code>Arrays.equals(a, b)</code>의 결과는?",
    choices: ["true, true", "false, true", "true, false", "false, false"],
    ans: 1,
    exp: "<code>==</code>는 두 배열이 같은 객체인지 비교해요. 내용 비교는 <code>Arrays.equals()</code>예요."
  },
  {
    n: 215,
    ch: 5,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int[][] m = { {1, 2, 3}, {4, 5, 6} };
int[][] t = new int[3][2];
for (int i = 0; i < 2; i++)
    for (int j = 0; j < 3; j++)
        t[j][i] = m[i][j];
System.out.println(java.util.Arrays.deepToString(t));`,
    ans: "[[1, 4], [2, 5], [3, 6]]",
    exp: "행과 열을 바꾼 전치 행렬이에요. 2×3 행렬이 3×2가 돼요."
  },
  {
    n: 216,
    ch: 5,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int[][] a = { {1, 2}, {3, 4} };
int[][] b = { {5, 6}, {7, 8} };
int[][] c = new int[2][2];
for (int i = 0; i < 2; i++)
    for (int j = 0; j < 2; j++)
        for (int k = 0; k < 2; k++)
            c[i][j] += a[i][k] * b[k][j];
System.out.println(java.util.Arrays.deepToString(c));`,
    ans: "[[19, 22], [43, 50]]",
    exp: "행렬 곱: c[i][j] = Σ a[i][k] × b[k][j]. 예: c[0][0] = 1×5 + 2×7 = 19."
  },
  {
    n: 217,
    ch: 5,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int[][] tri = new int[4][];
for (int i = 0; i < tri.length; i++) {
    tri[i] = new int[i + 1];
    tri[i][0] = tri[i][i] = 1;
    for (int j = 1; j < i; j++) tri[i][j] = tri[i - 1][j - 1] + tri[i - 1][j];
}
for (int[] row : tri) System.out.println(java.util.Arrays.toString(row));`,
    ans: String.raw`[1]
[1, 1]
[1, 2, 1]
[1, 3, 3, 1]`,
    exp: "가변 배열로 파스칼의 삼각형을 만들었어요. 각 값은 윗줄의 왼쪽 위와 바로 위 값의 합이에요."
  },
  {
    n: 218,
    ch: 5,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int[] a = {1, 2, 3};
int[] b = a;
a = new int[] {7, 8, 9};
b[0] = 100;
System.out.println(a[0] + " " + b[0]);
int[][] m = new int[2][2];
int[] row = m[0];
row[1] = 5;
System.out.println(m[0][1]);`,
    ans: String.raw`7 100
5`,
    exp: "a에 새 배열을 대입해도 b는 원래 배열을 가리켜요. m[0]은 1차원 배열의 참조라 row를 바꾸면 m도 바뀌어요."
  },
  {
    n: 219,
    ch: 5,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`int[] arr = {7, 3, 9, 1, 5};
for (int i = 0; i < arr.length - 1; i++) {
    int min = i;
    for (int j = i + 1; j < arr.length; j++)
        if (arr[j] < arr[min]) min = j;
    int tmp = arr[i]; arr[i] = arr[min]; arr[min] = tmp;
    if (i == 1) System.out.println(java.util.Arrays.toString(arr));
}
System.out.println(java.util.Arrays.toString(arr));`,
    ans: String.raw`[1, 3, 9, 7, 5]
[1, 3, 5, 7, 9]`,
    exp: "선택 정렬: 남은 부분에서 가장 작은 값을 찾아 앞으로 보내요. 두 번째 반복이 끝나면 앞의 두 자리가 확정돼요."
  },
  {
    n: 220,
    ch: 5,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`String[] words = {"banana", "apple", "cherry"};
String longest = words[0];
for (String w : words) if (w.length() > longest.length()) longest = w;
java.util.Arrays.sort(words);
System.out.println(longest);
System.out.println(String.join(",", words));`,
    ans: String.raw`banana
apple,banana,cherry`,
    exp: "같은 길이(6)면 처음 것이 남아 banana예요. String 배열의 sort는 사전순이에요."
  },
  {
    n: 221,
    ch: 5,
    lv: 3,
    t: "mc",
    q: "<code>int[][] arr = new int[3][];</code> 직후 <code>arr[0].length</code>를 실행하면?",
    choices: ["0", "3", "NullPointerException", "컴파일 에러"],
    ans: 2,
    exp: "두 번째 차수를 비워 두면 각 행은 아직 만들어지지 않아 null이에요. null의 length를 읽으면 NullPointerException이에요."
  },
  {
    n: 222,
    ch: 5,
    lv: 3,
    t: "self",
    q: "정수 배열 <code>arr</code>에서 중복을 제거한 새 배열을 반환하는 메서드 <code>int[] distinct(int[] arr)</code>를 컬렉션 없이 배열만으로 작성하세요. (순서는 처음 나온 순서 유지)",
    answer: String.raw`static int[] distinct(int[] arr) {
    int[] tmp = new int[arr.length];
    int cnt = 0;
    for (int v : arr) {
        boolean dup = false;
        for (int i = 0; i < cnt; i++) if (tmp[i] == v) { dup = true; break; }
        if (!dup) tmp[cnt++] = v;
    }
    return java.util.Arrays.copyOf(tmp, cnt);
}`,
    kw: ["for", "tmp", "cnt", "copyOf"],
    exp: "배열은 길이를 바꿀 수 없어서, 넉넉한 임시 배열에 담은 뒤 실제 개수만큼 copyOf로 잘라 돌려줘요."
  },
  {
    n: 223,
    ch: 6,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Person {
    String name;
    int age;
    void intro() { System.out.println(name + "(" + age + ")"); }
}
public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        p.name = "김자바";
        p.age = 20;
        p.intro();
        Person q = new Person();
        q.intro();
    }
}`,
    ans: String.raw`김자바(20)
null(0)`,
    exp: "인스턴스 변수는 초기화하지 않아도 기본값(null, 0)이 들어가요."
  },
  {
    n: 224,
    ch: 6,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Calc {
    int add(int a, int b) { return a + b; }
    int square(int x) { return x * x; }
}
public class Main {
    public static void main(String[] args) {
        Calc c = new Calc();
        System.out.println(c.add(3, 4));
        System.out.println(c.square(c.add(1, 2)));
    }
}`,
    ans: String.raw`7
9`,
    exp: "메서드의 반환값을 다른 메서드의 인자로 바로 쓸 수 있어요(square(3) = 9)."
  },
  {
    n: 225,
    ch: 6,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    static void hello() { System.out.println("안녕"); }
    static void repeat(int n) {
        for (int i = 0; i < n; i++) hello();
    }
    public static void main(String[] args) {
        repeat(2);
        System.out.println("끝");
    }
}`,
    ans: String.raw`안녕
안녕
끝`,
    exp: "메서드 안에서 다른 메서드를 호출할 수 있어요. 같은 클래스의 static 메서드는 이름만으로 호출해요."
  },
  {
    n: 226,
    ch: 6,
    lv: 1,
    t: "mc",
    q: "클래스와 객체의 관계로 알맞은 것은?",
    choices: ["클래스 = 제품, 객체 = 설계도", "클래스 = 설계도, 객체 = 설계도로 만든 제품", "클래스와 객체는 같은 말이다", "객체 하나로 클래스 여러 개를 만든다"],
    ans: 1,
    exp: "클래스는 객체를 정의한 설계도이고, 그 설계도로 만든 실체가 객체(인스턴스)예요."
  },
  {
    n: 227,
    ch: 6,
    lv: 1,
    t: "mc",
    q: "인스턴스를 생성하는 연산자는?",
    choices: ["create", "new", "make", "this"],
    ans: 1,
    exp: "<code>new 클래스이름()</code>으로 인스턴스를 만들고, 그 주소를 참조변수에 저장해요."
  },
  {
    n: 228,
    ch: 6,
    lv: 1,
    t: "mc",
    q: "반환값이 없는 메서드의 반환타입은?",
    choices: ["null", "void", "empty", "생략한다"],
    ans: 1,
    exp: "반환값이 없으면 반환타입 자리에 void를 써요. 생성자만 반환타입을 쓰지 않아요."
  },
  {
    n: 229,
    ch: 6,
    lv: 1,
    t: "mc",
    q: "생성자에 대한 설명으로 <b>틀린</b> 것은?",
    choices: ["이름이 클래스 이름과 같다", "반환값이 없다", "인스턴스를 생성하는 것은 생성자이다", "오버로딩할 수 있다"],
    ans: 2,
    exp: "인스턴스를 만드는 것은 new 연산자이고, 생성자는 만들어진 인스턴스의 변수를 초기화해요."
  },
  {
    n: 230,
    ch: 6,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Counter {
    int count = 0;
    void inc() { count++; }
}
public class Main {
    public static void main(String[] args) {
        Counter a = new Counter();
        Counter b = new Counter();
        a.inc(); a.inc(); b.inc();
        System.out.println(a.count + " " + b.count);
    }
}`,
    ans: "2 1",
    exp: "인스턴스 변수는 인스턴스마다 따로 있어서 a와 b의 count는 서로 영향을 주지 않아요."
  },
  {
    n: 231,
    ch: 6,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Box {
    int w, h;
    Box(int w, int h) { this.w = w; this.h = h; }
    int area() { return w * h; }
}
public class Main {
    public static void main(String[] args) {
        Box b = new Box(3, 4);
        System.out.println(b.area());
        System.out.println(new Box(2, 5).area());
    }
}`,
    ans: String.raw`12
10`,
    exp: "매개변수가 있는 생성자로 인스턴스를 만들면서 값을 바로 지정할 수 있어요."
  },
  {
    n: 232,
    ch: 6,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    static int add(int a, int b) { return a + b; }
    static long add(long a, long b) { return a + b + 100; }
    static double add(double a, double b) { return a + b; }
    public static void main(String[] args) {
        System.out.println(add(1, 2));
        System.out.println(add(1L, 2));
        System.out.println(add(1, 2.0));
    }
}`,
    ans: String.raw`3
103
3.0`,
    exp: "인자 타입에 가장 잘 맞는 메서드가 호출돼요. (1L, 2)는 long 버전, (1, 2.0)은 double 버전이에요."
  },
  {
    n: 233,
    ch: 6,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    static int sum(int... nums) {
        int s = 0;
        for (int n : nums) s += n;
        return s;
    }
    public static void main(String[] args) {
        System.out.println(sum());
        System.out.println(sum(1, 2, 3));
        System.out.println(sum(new int[] {4, 5}));
    }
}`,
    ans: String.raw`0
6
9`,
    exp: "가변인자는 인자가 없어도 되고(길이 0인 배열), 배열을 그대로 넘겨도 돼요."
  },
  {
    n: 234,
    ch: 6,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Data { int x; }
public class Main {
    static Data copy(Data d) {
        Data tmp = new Data();
        tmp.x = d.x;
        return tmp;
    }
    public static void main(String[] args) {
        Data d = new Data();
        d.x = 10;
        Data d2 = copy(d);
        d2.x = 20;
        System.out.println(d.x + " " + d2.x);
    }
}`,
    ans: "10 20",
    exp: "참조형 반환타입: 메서드가 새로 만든 객체의 주소를 돌려줘요. d2는 별개의 객체라 d에는 영향이 없어요."
  },
  {
    n: 235,
    ch: 6,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    static void change(int[] arr) { arr[0] = 99; }
    static void reassign(int[] arr) { arr = new int[] {7}; }
    public static void main(String[] args) {
        int[] a = {1, 2};
        change(a);
        System.out.println(a[0]);
        reassign(a);
        System.out.println(a[0]);
    }
}`,
    ans: String.raw`99
99`,
    exp: "배열(참조형)을 넘기면 원본 요소를 바꿀 수 있어요. 하지만 매개변수에 새 배열을 대입하는 것은 복사된 주소만 바뀌어 원본에 영향이 없어요."
  },
  {
    n: 236,
    ch: 6,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Product {
    static int count = 0;
    int serialNo;
    { ++count; serialNo = count; }
}
public class Main {
    public static void main(String[] args) {
        Product p1 = new Product();
        Product p2 = new Product();
        Product p3 = new Product();
        System.out.println(p1.serialNo + " " + p2.serialNo + " " + p3.serialNo);
        System.out.println(Product.count);
    }
}`,
    ans: String.raw`1 2 3
3`,
    exp: "인스턴스 초기화 블럭이 생성될 때마다 공유 변수 count를 증가시켜 일련번호를 붙여요."
  },
  {
    n: 237,
    ch: 6,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Init {
    static int cv = 1;
    int iv = cv;
    static { cv = 5; System.out.println("static: " + cv); }
    { iv += 10; System.out.println("instance: " + iv); }
    Init() { iv *= 2; System.out.println("생성자: " + iv); }
}
public class Main {
    public static void main(String[] args) {
        new Init();
        Init.cv = 3;
        new Init();
    }
}`,
    ans: String.raw`static: 5
instance: 15
생성자: 30
instance: 13
생성자: 26`,
    exp: "클래스 블럭은 한 번만(cv = 5). 인스턴스마다 iv = cv(그 시점 값) → 블럭 +10 → 생성자 ×2 순서예요."
  },
  {
    n: 238,
    ch: 6,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    static int fib(int n) {
        if (n <= 1) return n;
        return fib(n - 1) + fib(n - 2);
    }
    static int count = 0;
    static void hanoi(int n) {
        if (n == 0) return;
        hanoi(n - 1); count++; hanoi(n - 1);
    }
    public static void main(String[] args) {
        for (int i = 0; i < 8; i++) System.out.print(fib(i) + " ");
        System.out.println();
        hanoi(4);
        System.out.println(count);
    }
}`,
    ans: String.raw`0 1 1 2 3 5 8 13 
15`,
    exp: "피보나치 수열은 앞의 두 수의 합이에요. 하노이의 탑에서 원판 n개를 옮기는 횟수는 2ⁿ - 1(4개면 15)이에요."
  },
  {
    n: 239,
    ch: 6,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Car {
    String color; int door;
    Car() { this("white"); System.out.println("Car()"); }
    Car(String color) { this(color, 4); System.out.println("Car(String)"); }
    Car(String color, int door) { this.color = color; this.door = door; System.out.println("Car(String, int)"); }
}
public class Main {
    public static void main(String[] args) {
        Car c = new Car();
        System.out.println(c.color + " " + c.door);
    }
}`,
    ans: String.raw`Car(String, int)
Car(String)
Car()
white 4`,
    exp: "this()는 생성자의 첫 줄에서 다른 생성자를 호출해요. 가장 안쪽 생성자의 출력이 먼저 나와요."
  },
  {
    n: 240,
    ch: 6,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class MemberCall {
    int iv = 10;
    static int cv = 20;
    int iv2 = cv;
    static int add(int a) { return cv + a; }
    int calc() { return iv + iv2 + add(1); }
}
public class Main {
    public static void main(String[] args) {
        System.out.println(MemberCall.add(5));
        System.out.println(new MemberCall().calc());
    }
}`,
    ans: String.raw`25
51`,
    exp: "인스턴스 메서드에서는 static 멤버를 자유롭게 쓸 수 있어요. 10 + 20 + 21 = 51이에요."
  },
  {
    n: 241,
    ch: 6,
    lv: 3,
    t: "mc",
    q: "<code>static int cv = iv;</code> (iv는 같은 클래스의 인스턴스 변수)가 컴파일 에러인 이유는?",
    choices: ["cv가 static이 아니어서", "클래스 변수는 인스턴스 없이 초기화되는데 그때 인스턴스 변수가 없을 수 있어서", "iv가 private이어서", "변수 이름이 같아서"],
    ans: 1,
    exp: "클래스 변수는 클래스 로딩 때 초기화되므로 인스턴스 변수를 참조할 수 없어요. 반대(<code>int iv = cv;</code>)는 괜찮아요."
  },
  {
    n: 242,
    ch: 6,
    lv: 3,
    t: "self",
    q: "<code>Time</code> 클래스를 작성하세요. 시(hour)는 0~23, 분(minute)은 0~59만 허용하도록 필드는 private으로 두고, 범위를 검사하는 setter와 getter를 만드세요.",
    answer: String.raw`class Time {
    private int hour, minute;
    public int getHour() { return hour; }
    public void setHour(int hour) {
        if (hour < 0 || hour > 23) return;
        this.hour = hour;
    }
    public int getMinute() { return minute; }
    public void setMinute(int minute) {
        if (minute < 0 || minute > 59) return;
        this.minute = minute;
    }
}`,
    kw: ["private", "setHour", "getHour", "this.hour"],
    exp: "필드를 private으로 숨기고 메서드로만 바꾸게 하면 잘못된 값이 들어가는 것을 막을 수 있어요(캡슐화). 6장의 ‘클래스 – 사용자정의 타입’ 예제를 발전시킨 거예요."
  },
  {
    n: 243,
    ch: 7,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Animal {
    String name = "동물";
    void sound() { System.out.println("..."); }
}
class Dog extends Animal {
    void bark() { System.out.println(name + ": 멍멍"); }
}
public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound();
        d.bark();
    }
}`,
    ans: String.raw`...
동물: 멍멍`,
    exp: "자손 클래스는 조상의 멤버(name, sound)를 물려받아 자기 것처럼 써요."
  },
  {
    n: 244,
    ch: 7,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Parent { void hello() { System.out.println("부모"); } }
class Child extends Parent {
    @Override
    void hello() { System.out.println("자식"); }
}
public class Main {
    public static void main(String[] args) {
        new Parent().hello();
        new Child().hello();
    }
}`,
    ans: String.raw`부모
자식`,
    exp: "오버라이딩하면 자손의 인스턴스에서는 재정의한 메서드가 호출돼요."
  },
  {
    n: 245,
    ch: 7,
    lv: 1,
    t: "mc",
    q: "자바에서 클래스를 상속할 때 쓰는 키워드는?",
    choices: ["implements", "extends", "inherits", "super"],
    ans: 1,
    exp: "클래스는 <code>extends</code>, 인터페이스 구현은 <code>implements</code>예요."
  },
  {
    n: 246,
    ch: 7,
    lv: 1,
    t: "mc",
    q: "자바의 상속에 대한 설명으로 옳은 것은?",
    choices: ["한 클래스가 여러 클래스를 동시에 상속할 수 있다", "조상 클래스는 하나만 가질 수 있다(단일 상속)", "생성자도 상속된다", "자손은 조상보다 멤버가 적다"],
    ans: 1,
    exp: "자바는 단일 상속만 지원해요. 생성자와 초기화 블럭은 상속되지 않고, 자손은 조상보다 멤버가 같거나 많아요."
  },
  {
    n: 247,
    ch: 7,
    lv: 1,
    t: "mc",
    q: "모든 클래스의 조상 클래스는?",
    choices: ["Main", "Class", "Object", "System"],
    ans: 2,
    exp: "다른 클래스를 상속하지 않으면 컴파일러가 <code>extends Object</code>를 자동으로 붙여요."
  },
  {
    n: 248,
    ch: 7,
    lv: 1,
    t: "mc",
    q: "같은 클래스 안에서만 접근할 수 있게 하는 접근 제어자는?",
    choices: ["public", "protected", "(default)", "private"],
    ans: 3,
    exp: "private은 같은 클래스, default는 같은 패키지, protected는 같은 패키지+자손, public은 어디서나예요."
  },
  {
    n: 249,
    ch: 7,
    lv: 1,
    t: "mc",
    q: "인터페이스를 구현할 때 쓰는 키워드는?",
    choices: ["extends", "implements", "interface", "abstract"],
    ans: 1,
    exp: "<code>class Fighter implements Fightable</code>처럼 써요. 여러 인터페이스를 쉼표로 구현할 수 있어요."
  },
  {
    n: 250,
    ch: 7,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`interface Greet { void hi(); }
class Kor implements Greet { public void hi() { System.out.println("안녕"); } }
class Eng implements Greet { public void hi() { System.out.println("Hello"); } }
public class Main {
    public static void main(String[] args) {
        Greet g = new Kor();
        g.hi();
        g = new Eng();
        g.hi();
    }
}`,
    ans: String.raw`안녕
Hello`,
    exp: "인터페이스 타입 참조변수로 그것을 구현한 어떤 클래스의 인스턴스든 가리킬 수 있어요."
  },
  {
    n: 251,
    ch: 7,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Shape { String name() { return "도형"; } }
class Circle extends Shape { String name() { return "원"; } }
public class Main {
    public static void main(String[] args) {
        Shape s = new Circle();
        System.out.println(s.name());
        System.out.println(s instanceof Circle);
        System.out.println(s instanceof Shape);
    }
}`,
    ans: String.raw`원
true
true`,
    exp: "조상 타입 참조변수로 자손 객체를 가리킬 수 있어요(다형성). 메서드는 실제 객체(Circle)의 것이 호출돼요."
  },
  {
    n: 252,
    ch: 7,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Point {
    int x, y;
    Point(int x, int y) { this.x = x; this.y = y; System.out.println("Point(int,int)"); }
}
class Point3D extends Point {
    int z;
    Point3D(int x, int y, int z) { super(x, y); this.z = z; System.out.println("Point3D"); }
}
public class Main {
    public static void main(String[] args) {
        Point3D p = new Point3D(1, 2, 3);
        System.out.println(p.x + p.y + p.z);
    }
}`,
    ans: String.raw`Point(int,int)
Point3D
6`,
    exp: "조상에 기본 생성자가 없으면 자손 생성자의 첫 줄에서 <code>super(x, y)</code>로 조상 생성자를 직접 호출해야 해요."
  },
  {
    n: 253,
    ch: 7,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`abstract class Unit {
    int hp;
    Unit(int hp) { this.hp = hp; }
    abstract String move();
    String info() { return move() + " (hp " + hp + ")"; }
}
class Marine extends Unit { Marine() { super(40); } String move() { return "걸어서 이동"; } }
class Tank extends Unit { Tank() { super(150); } String move() { return "굴러서 이동"; } }
public class Main {
    public static void main(String[] args) {
        Unit[] units = { new Marine(), new Tank() };
        for (Unit u : units) System.out.println(u.info());
    }
}`,
    ans: String.raw`걸어서 이동 (hp 40)
굴러서 이동 (hp 150)`,
    exp: "추상 클래스의 일반 메서드(info)가 자손이 구현한 추상 메서드(move)를 호출할 수 있어요."
  },
  {
    n: 254,
    ch: 7,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Product {
    int price;
    Product(int price) { this.price = price; }
}
class Tv extends Product { Tv() { super(100); } public String toString() { return "Tv"; } }
class Audio extends Product { Audio() { super(50); } public String toString() { return "Audio"; } }
class Buyer {
    int money = 300;
    void buy(Product p) {
        money -= p.price;
        System.out.println(p + " 구입, 남은 돈 " + money);
    }
}
public class Main {
    public static void main(String[] args) {
        Buyer b = new Buyer();
        b.buy(new Tv());
        b.buy(new Audio());
    }
}`,
    ans: String.raw`Tv 구입, 남은 돈 200
Audio 구입, 남은 돈 150`,
    exp: "매개변수 타입을 조상(Product)으로 하면 메서드 하나로 모든 자손 제품을 받을 수 있어요(매개변수의 다형성)."
  },
  {
    n: 255,
    ch: 7,
    lv: 2,
    t: "mc",
    q: "조상 메서드 <code>protected void work()</code>를 자손에서 오버라이딩할 때 쓸 수 <b>없는</b> 선언은?",
    choices: ["<code>protected void work()</code>", "<code>public void work()</code>", "<code>void work()</code>", "<code>@Override public void work()</code>"],
    ans: 2,
    exp: "오버라이딩할 때 접근 제어자를 조상보다 좁게 바꿀 수 없어요. default(제어자 없음)는 protected보다 좁아요."
  },
  {
    n: 256,
    ch: 7,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class A {
    A() { System.out.println("A 생성자"); show(); }
    void show() { System.out.println("A.show"); }
}
class B extends A {
    int x = 10;
    B() { System.out.println("B 생성자, x=" + x); }
    @Override void show() { System.out.println("B.show, x=" + x); }
}
public class Main {
    public static void main(String[] args) { new B(); }
}`,
    ans: String.raw`A 생성자
B.show, x=0
B 생성자, x=10`,
    exp: "조상 생성자에서 오버라이딩된 메서드를 부르면 자손의 메서드가 실행돼요. 그런데 그 시점에는 자손의 명시적 초기화(x = 10)가 아직 안 돼서 x가 0이에요. 생성자에서 오버라이딩될 메서드를 부르지 않는 것이 좋아요."
  },
  {
    n: 257,
    ch: 7,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Parent {
    static String name() { return "Parent.static"; }
    String who() { return "Parent"; }
}
class Child extends Parent {
    static String name() { return "Child.static"; }
    String who() { return "Child"; }
}
public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        System.out.println(p.who());
        System.out.println(p.name());
        System.out.println(Child.name());
    }
}`,
    ans: String.raw`Child
Parent.static
Child.static`,
    exp: "static 메서드는 오버라이딩되지 않고 참조변수의 타입(Parent)을 따라 호출돼요. 인스턴스 메서드만 실제 객체를 따라가요."
  },
  {
    n: 258,
    ch: 7,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`interface A { default String hi() { return "A"; } }
interface B { default String hi() { return "B"; } }
class C implements A, B {
    public String hi() { return A.super.hi() + B.super.hi() + "C"; }
}
class P { public String hi() { return "P"; } }
class D extends P implements A { }
public class Main {
    public static void main(String[] args) {
        System.out.println(new C().hi());
        System.out.println(new D().hi());
    }
}`,
    ans: String.raw`ABC
P`,
    exp: "두 인터페이스의 디폴트 메서드가 겹치면 직접 오버라이딩해야 하고, <code>A.super.hi()</code>로 특정 인터페이스의 것을 부를 수 있어요. 조상 클래스의 메서드와 겹치면 조상 클래스가 우선이에요."
  },
  {
    n: 259,
    ch: 7,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Outer {
    private int value = 10;
    class Inner {
        int value = 20;
        void print() {
            int value = 30;
            System.out.println(value);
            System.out.println(this.value);
            System.out.println(Outer.this.value);
        }
    }
    static class SInner { int get() { return 5; } }
}
public class Main {
    public static void main(String[] args) {
        Outer o = new Outer();
        Outer.Inner in = o.new Inner();
        in.print();
        System.out.println(new Outer.SInner().get());
    }
}`,
    ans: String.raw`30
20
10
5`,
    exp: "이름이 겹치면 지역변수 → <code>this.value</code>(내부 클래스) → <code>Outer.this.value</code>(외부 클래스)로 구분해요. 인스턴스 내부 클래스는 외부 인스턴스로 만들고, static 내부 클래스는 바로 만들어요."
  },
  {
    n: 260,
    ch: 7,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Parent { int x = 1; int getX() { return x; } }
class Child extends Parent {
    int x = 2;
    int getX() { return x; }
    void print() {
        System.out.println(x + " " + this.x + " " + super.x);
        System.out.println(getX() + " " + super.getX());
    }
}
public class Main {
    public static void main(String[] args) {
        new Child().print();
        Parent p = new Child();
        System.out.println(p.x + " " + p.getX());
    }
}`,
    ans: String.raw`2 2 1
2 1
1 2`,
    exp: "<code>super.x</code>, <code>super.getX()</code>로 조상의 멤버를 직접 쓸 수 있어요. 조상 타입 참조변수로는 변수는 조상 것(1), 메서드는 자손 것(2)이 쓰여요."
  },
  {
    n: 261,
    ch: 7,
    lv: 3,
    t: "self",
    q: "<code>Repairable</code> 인터페이스를 만들어 서로 관계없는 <code>Tank</code>와 <code>Dropship</code>만 수리할 수 있게 하려고 해요. 둘의 조상은 각각 <code>GroundUnit</code>, <code>AirUnit</code>이에요. 인터페이스와 클래스 선언, 그리고 <code>void repair(Repairable r)</code> 메서드의 선언부를 쓰세요.",
    answer: String.raw`interface Repairable { }

class Tank extends GroundUnit implements Repairable { }
class Dropship extends AirUnit implements Repairable { }

void repair(Repairable r) {
    if (r instanceof Unit u) { /* u의 hp를 회복 */ }
}`,
    kw: ["interface Repairable", "implements Repairable", "repair(Repairable r)"],
    exp: "메서드가 없는 인터페이스라도 ‘수리할 수 있다’는 공통 타입을 부여할 수 있어요. 매개변수 타입을 인터페이스로 하면 그것을 구현한 클래스만 넘길 수 있어요."
  },
  {
    n: 262,
    ch: 8,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`try {
    int[] arr = new int[2];
    arr[5] = 1;
    System.out.println("A");
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("B");
}
System.out.println("C");`,
    ans: String.raw`B
C`,
    exp: "배열 범위를 벗어나 예외가 나면 A는 건너뛰고 catch(B)를 실행한 뒤 다음 문장(C)으로 가요."
  },
  {
    n: 263,
    ch: 8,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`try {
    System.out.println("1");
} catch (Exception e) {
    System.out.println("2");
} finally {
    System.out.println("3");
}`,
    ans: String.raw`1
3`,
    exp: "예외가 없으면 catch는 건너뛰지만 finally는 항상 실행돼요."
  },
  {
    n: 264,
    ch: 8,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`String s = null;
try {
    System.out.println(s.length());
} catch (NullPointerException e) {
    System.out.println("null이에요");
}`,
    ans: "null이에요",
    exp: "null인 참조변수로 메서드를 호출하면 NullPointerException이 나요."
  },
  {
    n: 265,
    ch: 8,
    lv: 1,
    t: "mc",
    q: "예외 처리 구문에서 예외가 발생할 가능성이 있는 문장을 넣는 블럭은?",
    choices: ["catch", "try", "finally", "throw"],
    ans: 1,
    exp: "<code>try</code> 블럭에 예외가 날 수 있는 문장을, <code>catch</code>에 처리할 코드를 넣어요."
  },
  {
    n: 266,
    ch: 8,
    lv: 1,
    t: "mc",
    q: "예외 발생 여부와 상관없이 항상 실행되는 블럭은?",
    choices: ["try", "catch", "finally", "throws"],
    ans: 2,
    exp: "finally는 예외가 나도, 안 나도, return을 만나도 실행돼요."
  },
  {
    n: 267,
    ch: 8,
    lv: 1,
    t: "mc",
    q: "모든 예외 클래스의 최고 조상(Error 포함)은?",
    choices: ["Exception", "RuntimeException", "Throwable", "Object만"],
    ans: 2,
    exp: "Object → Throwable → Error / Exception 순이에요. 예외와 에러 모두 Throwable의 자손이에요."
  },
  {
    n: 268,
    ch: 8,
    lv: 1,
    t: "mc",
    q: "예외를 고의로 발생시키는 키워드는?",
    choices: ["throws", "throw", "try", "catch"],
    ans: 1,
    exp: "<code>throw new Exception(\"메시지\");</code>처럼 throw로 발생시켜요. throws는 메서드 선언부에 예외를 적을 때 써요."
  },
  {
    n: 269,
    ch: 8,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`try {
    throw new Exception("에러 발생!");
} catch (Exception e) {
    System.out.println(e.getMessage());
}`,
    ans: "에러 발생!",
    exp: "예외 객체를 만들 때 넣은 메시지는 getMessage()로 꺼내요."
  },
  {
    n: 270,
    ch: 8,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    static int divide(int a, int b) {
        try {
            return a / b;
        } catch (ArithmeticException e) {
            System.out.println("0으로 나눌 수 없음");
            return -1;
        } finally {
            System.out.println("divide 끝");
        }
    }
    public static void main(String[] args) {
        System.out.println(divide(10, 2));
        System.out.println(divide(1, 0));
    }
}`,
    ans: String.raw`divide 끝
5
0으로 나눌 수 없음
divide 끝
-1`,
    exp: "return이 있어도 finally를 실행한 뒤 메서드를 빠져나가요. 그래서 \"divide 끝\"이 결과보다 먼저 출력돼요."
  },
  {
    n: 271,
    ch: 8,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    static void check(int age) {
        if (age < 0) throw new IllegalArgumentException("나이는 음수가 될 수 없음: " + age);
        System.out.println("나이: " + age);
    }
    public static void main(String[] args) {
        try {
            check(20);
            check(-1);
            check(30);
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }
}`,
    ans: String.raw`나이: 20
나이는 음수가 될 수 없음: -1`,
    exp: "예외가 발생하면 try 블럭의 나머지(check(30))는 실행되지 않아요."
  },
  {
    n: 272,
    ch: 8,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`Object[] items = {"10", "abc", 5};
for (Object o : items) {
    try {
        String s = (String) o;
        System.out.println(Integer.parseInt(s) * 2);
    } catch (NumberFormatException e) {
        System.out.println("숫자 아님");
    } catch (ClassCastException e) {
        System.out.println("문자열 아님");
    }
}`,
    ans: String.raw`20
숫자 아님
문자열 아님`,
    exp: "catch를 여러 개 두면 발생한 예외와 맞는 블럭 하나만 실행돼요. Integer 5를 String으로 형변환하면 ClassCastException이에요."
  },
  {
    n: 273,
    ch: 8,
    lv: 2,
    t: "mc",
    q: "<code>void read() throws IOException</code>을 호출하는 쪽에서 해야 하는 일은?",
    choices: ["아무것도 하지 않아도 된다", "try-catch로 처리하거나 자신도 throws로 선언해야 한다", "finally만 쓰면 된다", "RuntimeException으로 바꿔야만 한다"],
    ans: 1,
    exp: "IOException은 checked 예외라서 호출하는 쪽에서 반드시 처리(try-catch)하거나 다시 떠넘겨야(throws) 해요."
  },
  {
    n: 274,
    ch: 8,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class BalanceException extends RuntimeException {
    BalanceException(String msg) { super(msg); }
}
public class Main {
    static int balance = 1000;
    static void withdraw(int m) {
        if (m > balance) throw new BalanceException("잔액 부족: " + balance);
        balance -= m;
    }
    public static void main(String[] args) {
        withdraw(300);
        try { withdraw(1000); }
        catch (BalanceException e) { System.out.println(e.getMessage()); }
        System.out.println(balance);
    }
}`,
    ans: String.raw`잔액 부족: 700
700`,
    exp: "RuntimeException을 상속한 사용자정의 예외는 throws 선언 없이 던질 수 있어요."
  },
  {
    n: 275,
    ch: 8,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    static int test() {
        int x = 1;
        try {
            return x;
        } finally {
            x = 100;
            System.out.println("finally x=" + x);
        }
    }
    public static void main(String[] args) {
        System.out.println(test());
    }
}`,
    ans: String.raw`finally x=100
1`,
    exp: "return x는 그 시점의 값(1)을 이미 정해 두고 finally를 실행해요. finally에서 x를 바꿔도 반환값은 1이에요."
  },
  {
    n: 276,
    ch: 8,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    static void m3() { System.out.println("m3"); int x = 1 / 0; System.out.println("m3 끝"); }
    static void m2() { try { m3(); } finally { System.out.println("m2 finally"); } }
    static void m1() {
        try { m2(); }
        catch (ArithmeticException e) { System.out.println("m1 catch"); }
        System.out.println("m1 끝");
    }
    public static void main(String[] args) { m1(); System.out.println("main 끝"); }
}`,
    ans: String.raw`m3
m2 finally
m1 catch
m1 끝
main 끝`,
    exp: "m3에서 난 예외는 처리될 때까지 호출한 쪽으로 전달돼요. m2는 catch가 없어 finally만 실행하고 넘기며, m1에서 처리돼요."
  },
  {
    n: 277,
    ch: 8,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Res implements AutoCloseable {
    public void close() throws Exception { throw new Exception("close 실패"); }
}
public class Main {
    public static void main(String[] args) {
        try (Res r = new Res()) {
            throw new Exception("작업 실패");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            for (Throwable t : e.getSuppressed()) System.out.println("억제됨: " + t.getMessage());
        }
    }
}`,
    ans: String.raw`작업 실패
억제됨: close 실패`,
    exp: "try 블럭과 close() 모두에서 예외가 나면 원래 예외(작업 실패)가 던져지고, close의 예외는 억제된 예외로 붙어요."
  },
  {
    n: 278,
    ch: 8,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    static void install() {
        try {
            throw new java.io.IOException("디스크 공간 부족");
        } catch (java.io.IOException e) {
            throw new RuntimeException("설치 실패", e);
        }
    }
    public static void main(String[] args) {
        try { install(); }
        catch (RuntimeException e) {
            System.out.println(e.getMessage());
            System.out.println(e.getCause().getMessage());
            System.out.println(e.getCause() instanceof java.io.IOException);
        }
    }
}`,
    ans: String.raw`설치 실패
디스크 공간 부족
true`,
    exp: "checked 예외를 RuntimeException으로 감싸(연결된 예외) 던지면 throws 선언 없이 전달되고, 원인은 getCause()로 꺼낼 수 있어요."
  },
  {
    n: 279,
    ch: 8,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    public static void main(String[] args) {
        int[] counts = new int[3];
        String[] data = {"3", "", null, "x", "7"};
        for (String s : data) {
            try {
                int n = Integer.parseInt(s.trim());
                counts[0] += n;
            } catch (NullPointerException e) {
                counts[1]++;
            } catch (NumberFormatException e) {
                counts[2]++;
            }
        }
        System.out.println(java.util.Arrays.toString(counts));
    }
}`,
    ans: "[10, 1, 2]",
    exp: "\"3\"과 \"7\"은 더해지고(10), null은 trim()에서 NullPointerException, \"\"과 \"x\"는 NumberFormatException이에요."
  },
  {
    n: 280,
    ch: 8,
    lv: 3,
    t: "mc",
    q: "다음 중 멀티 catch로 쓸 수 <b>없는</b> 것은?",
    choices: ["<code>catch (NumberFormatException | ArithmeticException e)</code>", "<code>catch (IOException | SQLException e)</code>", "<code>catch (Exception | RuntimeException e)</code>", "<code>catch (NullPointerException | ClassCastException e)</code>"],
    ans: 2,
    exp: "멀티 catch로 묶은 예외끼리 조상-자손 관계면 컴파일 에러예요. 조상 하나(Exception)만 쓰면 되기 때문이에요."
  },
  {
    n: 281,
    ch: 8,
    lv: 3,
    t: "mc",
    q: "오버라이딩할 때 예외 선언에 대한 규칙으로 옳은 것은?",
    choices: ["조상보다 더 많은 checked 예외를 선언할 수 있다", "조상 메서드가 선언한 예외보다 많거나 넓은 checked 예외를 선언할 수 없다", "예외 선언은 반드시 조상과 똑같아야 한다", "RuntimeException도 선언할 수 없다"],
    ans: 1,
    exp: "자손은 조상이 선언한 checked 예외와 같거나 그 자손 예외만 선언할 수 있어요(더 적게는 가능). unchecked 예외는 상관없어요."
  },
  {
    n: 282,
    ch: 8,
    lv: 3,
    t: "self",
    q: "파일을 읽는 메서드 <code>readFirstLine(String path)</code>에서 IOException이 나면 직접 처리하지 않고, 원인을 담은 사용자정의 unchecked 예외 <code>DataLoadException</code>으로 바꿔 던지도록 작성하세요. (파일 읽기는 try-with-resources와 BufferedReader 사용)",
    answer: String.raw`class DataLoadException extends RuntimeException {
    DataLoadException(String msg, Throwable cause) { super(msg, cause); }
}

static String readFirstLine(String path) {
    try (BufferedReader br = new BufferedReader(new FileReader(path))) {
        return br.readLine();
    } catch (IOException e) {
        throw new DataLoadException("파일을 읽을 수 없음: " + path, e);
    }
}`,
    kw: ["extends RuntimeException", "super(msg, cause)", "try (", "throw new DataLoadException"],
    exp: "checked 예외를 원인으로 연결해 unchecked 예외로 바꾸면 호출하는 쪽에 불필요한 throws를 강요하지 않으면서 원인 정보는 남길 수 있어요."
  },
  {
    n: 283,
    ch: 7,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`interface Movable { default String move() { return "이동"; } }
abstract class Unit implements Movable {
    abstract int speed();
    public String toString() { return getClass().getSimpleName() + ":" + move() + "(" + speed() + ")"; }
}
class Marine extends Unit { int speed() { return 3; } }
class Tank extends Unit {
    int speed() { return 2; }
    @Override public String move() { return "굴러서 " + super.move(); }
}
public class Main {
    public static void main(String[] args) {
        Movable[] arr = { new Marine(), new Tank() };
        for (Movable m : arr) System.out.println(m);
        System.out.println(arr[1] instanceof Unit u ? u.speed() * 10 : -1);
    }
}`,
    ans: String.raw`Marine:이동(3)
Tank:굴러서 이동(2)
20`,
    exp: "추상 클래스가 인터페이스를 구현하면 자손이 디폴트 메서드를 물려받거나 오버라이딩할 수 있어요. Tank는 조상 Unit이 물려받은 디폴트 메서드를 <code>super.move()</code>로 불러요. (<code>Movable.super.move()</code>는 인터페이스를 <b>직접</b> 구현한 클래스에서만 쓸 수 있어서 여기선 컴파일 에러예요.) 패턴 매칭 instanceof로 형변환까지 한 번에 해요."
  },
  {
    n: 284,
    ch: 9,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`String s = "Hello Java";
System.out.println(s.length());
System.out.println(s.charAt(6));
System.out.println(s.indexOf("Java"));
System.out.println(s.substring(0, 5));`,
    ans: String.raw`10
J
6
Hello`,
    exp: "length()는 글자 수, charAt(i)는 i번째 문자, indexOf는 처음 나온 위치, substring(0, 5)는 0~4번 글자예요."
  },
  {
    n: 285,
    ch: 9,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`String s = "  Java  ";
System.out.println("[" + s.trim() + "]");
System.out.println(s.trim().toUpperCase());
System.out.println("java".replace('a', 'o'));`,
    ans: String.raw`[Java]
JAVA
jovo`,
    exp: "trim()은 앞뒤 공백 제거, toUpperCase()는 대문자 변환, replace는 문자를 바꾼 새 문자열을 돌려줘요."
  },
  {
    n: 286,
    ch: 9,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`String a = "abc";
String b = "abc";
String c = new String("abc");
System.out.println(a == b);
System.out.println(a == c);
System.out.println(a.equals(c));`,
    ans: String.raw`true
false
true`,
    exp: "문자열 리터럴은 상수 풀에서 공유되어 a와 b는 같은 객체예요. new로 만들면 새 객체라 ==는 false, 내용 비교는 equals()로 해요."
  },
  {
    n: 287,
    ch: 9,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`System.out.println(Integer.parseInt("123") + 1);
System.out.println(Double.parseDouble("1.5") * 2);
System.out.println(String.valueOf(10) + 5);
System.out.println(Integer.toString(255, 16));`,
    ans: String.raw`124
3.0
105
ff`,
    exp: "parseXxx는 문자열 → 기본형, String.valueOf는 기본형 → 문자열이에요. toString(255, 16)은 16진수 문자열 \"ff\"예요."
  },
  {
    n: 288,
    ch: 9,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`System.out.println(Math.abs(-7));
System.out.println(Math.max(3, 9));
System.out.println(Math.pow(2, 10));
System.out.println(Math.sqrt(16));`,
    ans: String.raw`7
9
1024.0
4.0`,
    exp: "pow와 sqrt는 double을 반환해서 1024.0, 4.0처럼 소수점이 붙어요."
  },
  {
    n: 289,
    ch: 9,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`Integer i = 10;
int n = i + 5;
Integer j = Integer.valueOf(20);
System.out.println(n);
System.out.println(j.intValue() + i);
System.out.println(Integer.MAX_VALUE);`,
    ans: String.raw`15
30
2147483647`,
    exp: "오토박싱(int → Integer)과 언박싱(Integer → int)은 컴파일러가 자동으로 해줘요."
  },
  {
    n: 290,
    ch: 9,
    lv: 1,
    t: "mc",
    q: "모든 클래스가 Object로부터 물려받는 메서드가 <b>아닌</b> 것은?",
    choices: ["equals()", "toString()", "hashCode()", "length()"],
    ans: 3,
    exp: "equals, toString, hashCode, getClass 등은 Object의 메서드예요. length()는 String의 메서드예요."
  },
  {
    n: 291,
    ch: 9,
    lv: 1,
    t: "mc",
    q: "String 클래스에 대한 설명으로 옳은 것은?",
    choices: ["한 번 만든 문자열의 내용을 바꿀 수 있다", "변경 불가능(immutable)한 클래스다", "equals()는 주소를 비교한다", "+ 연산으로 결합하면 기존 문자열이 바뀐다"],
    ans: 1,
    exp: "String은 immutable이라 + 결합이나 toUpperCase() 등은 항상 새 문자열을 만들어요."
  },
  {
    n: 292,
    ch: 9,
    lv: 1,
    t: "mc",
    q: "문자열을 자주 바꿔야 할 때 String 대신 쓰기 좋은 클래스는?",
    choices: ["Math", "StringBuilder", "Integer", "Objects"],
    ans: 1,
    exp: "StringBuilder는 내부 버퍼를 직접 바꾸기 때문에 결합·수정이 많을 때 효율적이에요."
  },
  {
    n: 293,
    ch: 9,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`String csv = "a,b,c";
String[] parts = csv.split(",");
System.out.println(parts.length);
System.out.println("java".contains("av"));
System.out.println("java".startsWith("ja") + " " + "java".endsWith("x"));`,
    ans: String.raw`3
true
true false`,
    exp: "split은 구분자로 나눠 배열을 돌려주고, contains·startsWith·endsWith는 boolean을 돌려줘요."
  },
  {
    n: 294,
    ch: 9,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`StringBuilder sb = new StringBuilder("12345");
sb.reverse();
System.out.println(sb);
sb.deleteCharAt(0).setCharAt(0, 'X');
System.out.println(sb);
System.out.println(sb.length() + " " + sb.indexOf("2"));`,
    ans: String.raw`54321
X321
4 2`,
    exp: "reverse()로 뒤집고(54321), deleteCharAt(0)으로 5를 지운 뒤 0번을 X로 바꿔요(X321). StringBuilder 메서드는 자기 자신을 돌려줘 이어 쓸 수 있어요."
  },
  {
    n: 295,
    ch: 9,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`String s = "banana";
System.out.println(s.lastIndexOf('a'));
System.out.println(s.indexOf('n', 3));
System.out.println(s.replaceAll("an", "AN"));
System.out.println(s.compareTo("apple"));`,
    ans: String.raw`5
4
bANANa
1`,
    exp: "compareTo는 처음 다른 문자의 코드 차이를 돌려줘요. b(98) - a(97) = 1."
  },
  {
    n: 296,
    ch: 9,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`java.util.StringTokenizer st = new java.util.StringTokenizer("10+20-5", "+-", true);
while (st.hasMoreTokens()) System.out.print("[" + st.nextToken() + "]");
System.out.println();
System.out.println("a,,b,".split(",").length);`,
    ans: String.raw`[10][+][20][-][5]
3`,
    exp: "StringTokenizer에 true를 주면 구분자도 토큰으로 돌려줘요. split은 끝의 빈 문자열을 버려서 \"a\",\"\",\"b\" 3개예요."
  },
  {
    n: 297,
    ch: 9,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`System.out.println(String.format("%5d|%-5s|%.2f", 42, "ab", 3.14159));
System.out.println(String.format("%05d", 42));
System.out.println(String.join("/", "2026", "11", "05"));`,
    ans: String.raw`   42|ab   |3.14
00042
2026/11/05`,
    exp: "%5d는 오른쪽 정렬 5칸, %-5s는 왼쪽 정렬 5칸, %.2f는 소수점 둘째 자리까지예요. %05d는 빈칸을 0으로 채워요."
  },
  {
    n: 298,
    ch: 9,
    lv: 2,
    t: "mc",
    q: "<code>new java.util.Random(42)</code>처럼 같은 종자값(seed)으로 만든 두 Random 객체에 대해 옳은 것은?",
    choices: ["매번 다른 난수열을 만든다", "항상 같은 난수열을 만든다", "종자값은 출력 범위를 정한다", "컴파일 에러가 난다"],
    ans: 1,
    exp: "종자값이 같으면 같은 순서의 난수를 만들어요. 테스트처럼 같은 결과를 재현해야 할 때 유용해요."
  },
  {
    n: 299,
    ch: 9,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Point implements Cloneable {
    int x; int[] arr = {1, 2};
    Point(int x) { this.x = x; }
    public Point clone() {
        try { return (Point) super.clone(); }
        catch (CloneNotSupportedException e) { return null; }
    }
}
public class Main {
    public static void main(String[] args) {
        Point p1 = new Point(3);
        Point p2 = p1.clone();
        p2.x = 9;
        p2.arr[0] = 100;
        System.out.println(p1.x + " " + p1.arr[0]);
        System.out.println(p1 == p2);
    }
}`,
    ans: String.raw`3 100
false`,
    exp: "Object의 clone()은 얕은 복사예요. 기본형 x는 따로 복사되지만, 배열 arr은 주소만 복사돼 둘이 같은 배열을 공유해요."
  },
  {
    n: 300,
    ch: 9,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`String s = "";
for (int i = 0; i < 3; i++) s += i;
StringBuilder sb = new StringBuilder();
sb.append(1).append('+').append(2.0).append(true);
String t = "a" + 1 + 2;
String u = 1 + 2 + "a";
System.out.println(s);
System.out.println(sb);
System.out.println(t + " " + u);`,
    ans: String.raw`012
1+2.0true
a12 3a`,
    exp: "문자열 결합은 왼쪽부터 계산해요. \"a\"+1+2는 \"a12\", 1+2+\"a\"는 3+\"a\"=\"3a\"예요."
  },
  {
    n: 301,
    ch: 9,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.regex.*;
public class Main {
    public static void main(String[] args) {
        String data = "tel: 010-1234-5678, 02-987-6543";
        Pattern p = Pattern.compile("(\\d{2,3})-(\\d{3,4})-(\\d{4})");
        Matcher m = p.matcher(data);
        while (m.find()) System.out.println(m.group() + " → 국번 " + m.group(1));
        System.out.println("abc123".matches("[a-z]+\\d+"));
    }
}`,
    ans: String.raw`010-1234-5678 → 국번 010
02-987-6543 → 국번 02
true`,
    exp: "정규식의 괄호는 그룹이에요. find()로 일치하는 부분을 차례로 찾고 group(1)로 첫 번째 그룹을 꺼내요. matches()는 문자열 전체가 패턴과 일치해야 true예요."
  },
  {
    n: 302,
    ch: 9,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`java.math.BigInteger f = java.math.BigInteger.ONE;
for (int i = 1; i <= 25; i++) f = f.multiply(java.math.BigInteger.valueOf(i));
System.out.println(f);
System.out.println(f.bitLength() > 63);
long l = 1;
for (int i = 1; i <= 25; i++) l *= i;
System.out.println(l < 0 || l != f.longValue() ? "long 오버플로" : "OK");`,
    ans: String.raw`15511210043330985984000000
true
OK`,
    exp: "25!은 long 범위를 넘어서 long으로 계산하면 값이 틀어져요. BigInteger는 크기 제한 없이 정확하게 계산해요."
  },
  {
    n: 303,
    ch: 9,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.Objects;
public class Main {
    public static void main(String[] args) {
        String a = null, b = null;
        System.out.println(Objects.equals(a, b));
        System.out.println(Objects.isNull(a));
        System.out.println(Objects.toString(a, "없음"));
        System.out.println(Objects.hash(1, 2) == Objects.hash(1, 2));
        System.out.println(Objects.requireNonNullElse(a, "기본값"));
    }
}`,
    ans: String.raw`true
true
없음
true
기본값`,
    exp: "Objects의 메서드는 null을 안전하게 다뤄요. 둘 다 null이면 equals는 true, toString은 대체 문자열을 돌려줘요."
  },
  {
    n: 304,
    ch: 9,
    lv: 3,
    t: "mc",
    q: "equals()를 오버라이딩했을 때 hashCode()도 함께 오버라이딩해야 하는 이유는?",
    choices: ["컴파일 에러가 나서", "equals()가 true인 두 객체는 hashCode()도 같아야 HashSet·HashMap이 올바르게 동작해서", "toString()이 hashCode()를 써서", "성능이 무조건 빨라져서"],
    ans: 1,
    exp: "해시 컬렉션은 hashCode()로 위치를 찾고 equals()로 비교해요. 같은 객체인데 해시코드가 다르면 중복 저장되거나 찾지 못해요."
  },
  {
    n: 305,
    ch: 9,
    lv: 3,
    t: "self",
    q: "문자열 <code>s</code>가 회문(앞뒤로 읽어도 같은 문자열)인지 검사하는 메서드 <code>isPalindrome(String s)</code>를 StringBuilder를 이용해 쓰세요. 대소문자와 공백은 무시해요.",
    answer: String.raw`static boolean isPalindrome(String s) {
    String t = s.replace(" ", "").toLowerCase();
    return new StringBuilder(t).reverse().toString().equals(t);
}`,
    kw: ["StringBuilder", "reverse()", "toLowerCase()", "equals"],
    exp: "StringBuilder의 reverse()로 뒤집은 뒤 toString()으로 String을 만들어 equals()로 비교해요. StringBuilder끼리 equals()는 내용 비교가 아니라서 꼭 String으로 바꿔야 해요."
  },
  {
    n: 306,
    ch: 10,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.time.LocalDate;
public class Main {
    public static void main(String[] args) {
        LocalDate d = LocalDate.of(2026, 3, 15);
        System.out.println(d);
        System.out.println(d.getYear() + " " + d.getMonthValue() + " " + d.getDayOfMonth());
        System.out.println(d.getDayOfWeek());
    }
}`,
    ans: String.raw`2026-03-15
2026 3 15
SUNDAY`,
    exp: "LocalDate.of로 날짜를 만들어요. 월은 1부터 시작하고, getDayOfWeek()는 요일을 영어 대문자 열거형으로 돌려줘요."
  },
  {
    n: 307,
    ch: 10,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.time.LocalTime;
public class Main {
    public static void main(String[] args) {
        LocalTime t = LocalTime.of(9, 30);
        System.out.println(t);
        System.out.println(t.plusMinutes(45));
        System.out.println(t.getHour() + "시");
    }
}`,
    ans: String.raw`09:30
10:15
9시`,
    exp: "LocalTime은 시간만 표현해요. 9:30에 45분을 더하면 10:15예요."
  },
  {
    n: 308,
    ch: 10,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.time.LocalDate;
public class Main {
    public static void main(String[] args) {
        LocalDate d = LocalDate.of(2026, 12, 30);
        System.out.println(d.plusDays(3));
        System.out.println(d.minusMonths(1));
        System.out.println(d);
    }
}`,
    ans: String.raw`2027-01-02
2026-11-30
2026-12-30`,
    exp: "plus/minus는 새 객체를 돌려주고 원래 d는 바뀌지 않아요(불변). 12/30에 3일을 더하면 해가 넘어가요."
  },
  {
    n: 309,
    ch: 10,
    lv: 1,
    t: "mc",
    q: "java.time 패키지의 LocalDate에 대한 설명으로 옳은 것은?",
    choices: ["월은 0부터 시작한다", "불변(immutable) 객체다", "setYear()로 년도를 바꾼다", "시간 정보까지 포함한다"],
    ans: 1,
    exp: "java.time의 클래스는 불변이라 with·plus·minus가 새 객체를 돌려줘요. 월은 1~12, 시간까지 필요하면 LocalDateTime을 써요."
  },
  {
    n: 310,
    ch: 10,
    lv: 1,
    t: "mc",
    q: "날짜와 시간을 함께 표현하는 클래스는?",
    choices: ["LocalDate", "LocalTime", "LocalDateTime", "Period"],
    ans: 2,
    exp: "LocalDateTime = LocalDate + LocalTime이에요. Period는 날짜 간격, Duration은 시간 간격이에요."
  },
  {
    n: 311,
    ch: 10,
    lv: 1,
    t: "mc",
    q: "두 날짜 사이의 간격(년·월·일)을 나타내는 클래스는?",
    choices: ["Duration", "Period", "Instant", "ZoneId"],
    ans: 1,
    exp: "Period는 날짜 간격, Duration은 시·분·초 간격이에요."
  },
  {
    n: 312,
    ch: 10,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.time.LocalDate;
public class Main {
    public static void main(String[] args) {
        LocalDate a = LocalDate.of(2026, 5, 1);
        LocalDate b = LocalDate.of(2026, 5, 10);
        System.out.println(a.isBefore(b));
        System.out.println(a.isAfter(b));
        System.out.println(a.equals(LocalDate.of(2026, 5, 1)));
    }
}`,
    ans: String.raw`true
false
true`,
    exp: "날짜 비교는 isBefore, isAfter, isEqual(또는 equals)로 해요."
  },
  {
    n: 313,
    ch: 10,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`java.text.DecimalFormat df = new java.text.DecimalFormat("#,###");
System.out.println(df.format(1234567));
System.out.println(new java.text.DecimalFormat("#.#").format(3.14));
System.out.println(new java.text.DecimalFormat("0.000").format(2.5));`,
    ans: String.raw`1,234,567
3.1
2.500`,
    exp: "#은 값이 없으면 비우고, 0은 값이 없으면 0을 채워요. 쉼표(,)는 세 자리마다 구분자를 넣어요."
  },
  {
    n: 314,
    ch: 10,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.time.*;
public class Main {
    public static void main(String[] args) {
        LocalDate d = LocalDate.of(2026, 1, 31);
        System.out.println(d.plusMonths(1));
        System.out.println(d.withDayOfMonth(1));
        System.out.println(d.withMonth(2).lengthOfMonth());
        System.out.println(LocalDate.of(2024, 2, 1).isLeapYear());
    }
}`,
    ans: String.raw`2026-02-28
2026-01-01
28
true`,
    exp: "1월 31일에 한 달을 더하면 2월의 마지막 날(28일)로 맞춰져요. withMonth(2)도 같은 이유로 2월 28일이 되고, 그 달의 일 수는 28이에요."
  },
  {
    n: 315,
    ch: 10,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.time.*;
public class Main {
    public static void main(String[] args) {
        LocalTime start = LocalTime.of(9, 0);
        LocalTime end = LocalTime.of(17, 45, 30);
        Duration du = Duration.between(start, end);
        System.out.println(du);
        System.out.println(du.toMinutes());
        System.out.println(du.toHoursPart() + "시간 " + du.toMinutesPart() + "분");
    }
}`,
    ans: String.raw`PT8H45M30S
525
8시간 45분`,
    exp: "Duration의 toString()은 PT8H45M30S 형식이에요. toMinutes()는 전체 분, toXxxPart()는 각 부분 값이에요."
  },
  {
    n: 316,
    ch: 10,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
public class Main {
    public static void main(String[] args) {
        LocalDate d = LocalDate.parse("2026-07-04");
        System.out.println(d.format(DateTimeFormatter.ofPattern("yyyy년 M월 d일")));
        System.out.println(d.format(DateTimeFormatter.ofPattern("yy/MM/dd")));
        LocalDate e = LocalDate.parse("05.11.2026", DateTimeFormatter.ofPattern("dd.MM.yyyy"));
        System.out.println(e);
    }
}`,
    ans: String.raw`2026년 7월 4일
26/07/04
2026-11-05`,
    exp: "ofPattern으로 원하는 형식을 정해 format(날짜 → 문자열)이나 parse(문자열 → 날짜)에 써요. M은 한 자리, MM은 두 자리 월이에요."
  },
  {
    n: 317,
    ch: 10,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.time.*;
public class Main {
    public static void main(String[] args) {
        LocalDateTime dt = LocalDateTime.of(2026, 11, 5, 23, 30);
        System.out.println(dt.plusHours(2));
        System.out.println(dt.toLocalDate());
        System.out.println(dt.truncatedTo(java.time.temporal.ChronoUnit.HOURS));
    }
}`,
    ans: String.raw`2026-11-06T01:30
2026-11-05
2026-11-05T23:00`,
    exp: "23:30에 2시간을 더하면 다음 날 01:30이에요. truncatedTo(HOURS)는 시 아래 단위를 0으로 버려요."
  },
  {
    n: 318,
    ch: 10,
    lv: 2,
    t: "mc",
    q: "<code>Period p = Period.between(LocalDate.of(2026,1,15), LocalDate.of(2026,3,10));</code>일 때 <code>p.getMonths()</code>와 <code>p.getDays()</code>는?",
    choices: ["1, 23", "2, 0", "1, 24", "1, 25"],
    ans: 0,
    exp: "1/15 → 2/15가 1개월, 2/15 → 3/10이 23일이에요(2026년 2월은 28일까지)."
  },
  {
    n: 319,
    ch: 10,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.time.*;
import java.time.temporal.*;
public class Main {
    public static void main(String[] args) {
        LocalDate d = LocalDate.of(2026, 11, 5);
        System.out.println(d.with(TemporalAdjusters.firstDayOfMonth()));
        System.out.println(d.with(TemporalAdjusters.lastDayOfMonth()));
        System.out.println(d.with(TemporalAdjusters.next(DayOfWeek.MONDAY)));
        System.out.println(d.with(TemporalAdjusters.firstInMonth(DayOfWeek.FRIDAY)));
    }
}`,
    ans: String.raw`2026-11-01
2026-11-30
2026-11-09
2026-11-06`,
    exp: "TemporalAdjusters는 “이 달의 마지막 날”, “다음 월요일” 같은 자주 쓰는 날짜 계산을 제공해요. 2026-11-05는 목요일이에요."
  },
  {
    n: 320,
    ch: 10,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.time.*;
import java.time.temporal.ChronoUnit;
public class Main {
    public static void main(String[] args) {
        LocalDate birth = LocalDate.of(2000, 2, 29);
        LocalDate today = LocalDate.of(2026, 11, 5);
        Period age = Period.between(birth, today);
        System.out.println(age.getYears() + "세 " + age.getMonths() + "개월");
        System.out.println(ChronoUnit.DAYS.between(birth, today));
        System.out.println(birth.plusYears(1));
    }
}`,
    ans: String.raw`26세 8개월
9746
2001-02-28`,
    exp: "Period는 년·월·일 단위로, ChronoUnit.DAYS.between은 전체 일 수로 간격을 구해요. 2/29에 1년을 더하면 윤년이 아니어서 2/28이 돼요."
  },
  {
    n: 321,
    ch: 10,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.time.*;
public class Main {
    public static void main(String[] args) {
        LocalDateTime dt = LocalDateTime.of(2026, 11, 5, 9, 0);
        ZonedDateTime seoul = dt.atZone(ZoneId.of("Asia/Seoul"));
        ZonedDateTime utc = seoul.withZoneSameInstant(ZoneId.of("UTC"));
        System.out.println(seoul.getOffset());
        System.out.println(utc.toLocalDateTime());
        System.out.println(seoul.toInstant().equals(utc.toInstant()));
    }
}`,
    ans: String.raw`+09:00
2026-11-05T00:00
true`,
    exp: "ZonedDateTime은 시간대까지 포함해요. 서울(+09:00) 오전 9시는 UTC로 0시예요. 같은 순간이라 Instant는 같아요."
  },
  {
    n: 322,
    ch: 10,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.time.*;
import java.time.temporal.ChronoField;
public class Main {
    public static void main(String[] args) {
        LocalDate d = LocalDate.of(2026, 11, 5);
        System.out.println(d.get(ChronoField.DAY_OF_YEAR));
        System.out.println(d.get(ChronoField.DAY_OF_WEEK));
        System.out.println(d.range(ChronoField.DAY_OF_MONTH));
        System.out.println(d.isSupported(ChronoField.HOUR_OF_DAY));
    }
}`,
    ans: String.raw`309
4
1 - 30
false`,
    exp: "get(ChronoField)로 원하는 필드를 꺼내요. 요일은 월요일=1 ~ 일요일=7(목요일=4). LocalDate는 시간 필드를 지원하지 않아요."
  },
  {
    n: 323,
    ch: 10,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.time.*;
import java.time.temporal.ChronoUnit;
public class Main {
    public static void main(String[] args) {
        LocalDate start = LocalDate.of(2026, 11, 1);
        int workdays = 0;
        for (LocalDate d = start; d.getMonthValue() == 11; d = d.plusDays(1)) {
            DayOfWeek w = d.getDayOfWeek();
            if (w != DayOfWeek.SATURDAY && w != DayOfWeek.SUNDAY) workdays++;
        }
        System.out.println(workdays);
        System.out.println(ChronoUnit.WEEKS.between(start, LocalDate.of(2026, 12, 25)));
    }
}`,
    ans: String.raw`21
7`,
    exp: "날짜를 하루씩 늘리며 반복해 주말을 뺀 평일을 세요. 2026년 11월은 일요일로 시작해서 평일이 21일이에요."
  },
  {
    n: 324,
    ch: 10,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`java.text.MessageFormat mf = new java.text.MessageFormat("이름:{0}, 나이:{1}, 다시 이름:{0}");
System.out.println(mf.format(new Object[] {"김자바", 20}));
java.text.ChoiceFormat cf = new java.text.ChoiceFormat(new double[] {0, 60, 80, 90}, new String[] {"D", "C", "B", "A"});
for (int s : new int[] {55, 60, 85, 100}) System.out.print(cf.format(s) + " ");
System.out.println();`,
    ans: String.raw`이름:김자바, 나이:20, 다시 이름:김자바
D C B A `,
    exp: "MessageFormat은 {번호} 자리에 값을 끼워 넣어요(같은 번호는 여러 번 가능). ChoiceFormat은 경계값 범위에 따라 문자열을 골라요(60 이상 80 미만 → C)."
  },
  {
    n: 325,
    ch: 10,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.time.*;
import java.time.format.*;
public class Main {
    public static void main(String[] args) {
        try {
            LocalDate.parse("2026-02-30");
        } catch (DateTimeParseException e) {
            System.out.println("잘못된 날짜");
        }
        try {
            LocalDate.of(2026, 13, 1);
        } catch (DateTimeException e) {
            System.out.println("잘못된 월");
        }
        System.out.println(LocalDate.parse("2026-02-28").plusDays(1));
    }
}`,
    ans: String.raw`잘못된 날짜
잘못된 월
2026-03-01`,
    exp: "존재하지 않는 날짜를 parse하면 DateTimeParseException, of로 만들면 DateTimeException이에요."
  },
  {
    n: 326,
    ch: 10,
    lv: 3,
    t: "mc",
    q: "<code>LocalDate d = LocalDate.of(2026,1,1); d.plusDays(10); System.out.println(d);</code>의 출력은?",
    choices: ["2026-01-11", "2026-01-01", "컴파일 에러", "2026-01-10"],
    ans: 1,
    exp: "LocalDate는 불변이라 plusDays는 새 객체를 돌려줄 뿐 d는 그대로예요. <code>d = d.plusDays(10);</code>처럼 다시 대입해야 해요."
  },
  {
    n: 327,
    ch: 10,
    lv: 3,
    t: "mc",
    q: "<code>Instant</code>에 대한 설명으로 옳은 것은?",
    choices: ["시간대 정보를 포함한 날짜·시간이다", "1970-01-01T00:00:00Z부터 경과한 시간을 나노초까지 나타내는 타임스탬프다", "년·월·일만 표현한다", "날짜 간격을 나타낸다"],
    ans: 1,
    exp: "Instant는 에포크 타임(UTC 기준) 이후의 시간을 초와 나노초로 표현하는 기계용 시간이에요."
  },
  {
    n: 328,
    ch: 10,
    lv: 3,
    t: "self",
    q: "오늘(<code>LocalDate today</code>)부터 다가오는 크리스마스까지 남은 일 수를 구하는 코드를 쓰세요. 오늘이 이미 12월 25일을 지났다면 다음 해 크리스마스까지로 계산해요.",
    answer: String.raw`LocalDate xmas = LocalDate.of(today.getYear(), 12, 25);
if (today.isAfter(xmas)) xmas = xmas.plusYears(1);
long days = ChronoUnit.DAYS.between(today, xmas);
System.out.println("크리스마스까지 " + days + "일");`,
    kw: ["LocalDate.of", "isAfter", "plusYears", "ChronoUnit.DAYS.between"],
    exp: "비교(isAfter)로 해를 정하고 ChronoUnit.DAYS.between으로 일 수를 구해요. LocalDate는 불변이라 plusYears 결과를 다시 대입해야 해요."
  },
  {
    n: 329,
    ch: 11,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(10); list.add(20); list.add(30);
        list.add(1, 15);
        System.out.println(list);
        System.out.println(list.size() + " " + list.get(2));
        list.remove(0);
        System.out.println(list);
    }
}`,
    ans: String.raw`[10, 15, 20, 30]
4 20
[15, 20, 30]`,
    exp: "add(index, 값)은 그 위치에 끼워 넣어요. remove(0)은 0번 요소를 지워요."
  },
  {
    n: 330,
    ch: 11,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("사과", 1000);
        map.put("배", 2000);
        map.put("사과", 1500);
        System.out.println(map.get("사과"));
        System.out.println(map.size());
        System.out.println(map.containsKey("포도"));
        System.out.println(map.getOrDefault("포도", 0));
    }
}`,
    ans: String.raw`1500
2
false
0`,
    exp: "Map은 같은 키로 put하면 값을 덮어써요. 없는 키는 getOrDefault로 기본값을 받을 수 있어요."
  },
  {
    n: 331,
    ch: 11,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Set<String> set = new TreeSet<>();
        set.add("c"); set.add("a"); set.add("b"); set.add("a");
        System.out.println(set);
        System.out.println(set.size());
    }
}`,
    ans: String.raw`[a, b, c]
3`,
    exp: "Set은 중복을 허용하지 않아요. TreeSet은 정렬된 순서로 저장해요."
  },
  {
    n: 332,
    ch: 11,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(List.of("a", "b", "c"));
        Iterator<String> it = list.iterator();
        while (it.hasNext()) System.out.print(it.next());
        System.out.println();
        System.out.println(list.contains("b") + " " + list.indexOf("c"));
    }
}`,
    ans: String.raw`abc
true 2`,
    exp: "Iterator는 hasNext()로 확인하고 next()로 꺼내요. 컬렉션의 종류와 상관없이 같은 방법으로 읽을 수 있어요."
  },
  {
    n: 333,
    ch: 11,
    lv: 1,
    t: "mc",
    q: "순서가 있고 중복을 허용하는 컬렉션 인터페이스는?",
    choices: ["Set", "List", "Map", "Queue만"],
    ans: 1,
    exp: "List는 순서 O·중복 O, Set은 순서 X·중복 X, Map은 키-값 쌍(키 중복 X)이에요."
  },
  {
    n: 334,
    ch: 11,
    lv: 1,
    t: "mc",
    q: "키와 값의 쌍으로 데이터를 저장하는 컬렉션은?",
    choices: ["ArrayList", "HashSet", "HashMap", "LinkedList"],
    ans: 2,
    exp: "Map 계열(HashMap, TreeMap 등)이 키-값 쌍을 저장해요."
  },
  {
    n: 335,
    ch: 11,
    lv: 1,
    t: "mc",
    q: "먼저 넣은 것을 먼저 꺼내는(FIFO) 자료구조는?",
    choices: ["Stack", "Queue", "Set", "Map"],
    ans: 1,
    exp: "Queue는 FIFO, Stack은 LIFO(마지막에 넣은 것을 먼저 꺼냄)예요."
  },
  {
    n: 336,
    ch: 11,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] arr = {3, 1, 2};
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));
        List<Integer> list = new ArrayList<>(List.of(3, 1, 2));
        Collections.sort(list);
        System.out.println(list);
        System.out.println(Collections.max(list));
    }
}`,
    ans: String.raw`[1, 2, 3]
[1, 2, 3]
3`,
    exp: "배열은 Arrays.sort, List는 Collections.sort로 정렬해요."
  },
  {
    n: 337,
    ch: 11,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Map<String, Integer> map = new TreeMap<>();
        map.put("kim", 90); map.put("lee", 70); map.put("park", 85);
        for (Map.Entry<String, Integer> e : map.entrySet())
            System.out.println(e.getKey() + "=" + e.getValue());
        int sum = 0;
        for (int v : map.values()) sum += v;
        System.out.println(sum);
    }
}`,
    ans: String.raw`kim=90
lee=70
park=85
245`,
    exp: "entrySet()으로 키와 값을 함께 꺼내요. TreeMap은 키 순서로 정렬돼요."
  },
  {
    n: 338,
    ch: 11,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Deque<Integer> dq = new ArrayDeque<>();
        dq.offerFirst(1); dq.offerLast(2); dq.offerFirst(0);
        System.out.println(dq);
        System.out.println(dq.pollLast() + " " + dq.peekFirst());
        dq.push(9);
        System.out.println(dq.pop() + " " + dq);
    }
}`,
    ans: String.raw`[0, 1, 2]
2 0
9 [0, 1]`,
    exp: "Deque는 양쪽에서 넣고 뺄 수 있어요. push/pop은 앞쪽을 써서 스택처럼 동작해요."
  },
  {
    n: 339,
    ch: 11,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int n : new int[] {5, 1, 4, 2, 3}) pq.offer(n);
        StringBuilder sb = new StringBuilder();
        while (!pq.isEmpty()) sb.append(pq.poll());
        System.out.println(sb);
        PriorityQueue<Integer> maxQ = new PriorityQueue<>(Comparator.reverseOrder());
        maxQ.addAll(List.of(5, 1, 4));
        System.out.println(maxQ.poll());
    }
}`,
    ans: String.raw`12345
5`,
    exp: "PriorityQueue는 넣은 순서와 상관없이 우선순위(기본은 작은 값)가 높은 것부터 꺼내요. reverseOrder()를 주면 큰 값부터예요."
  },
  {
    n: 340,
    ch: 11,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Set<Integer> a = new TreeSet<>(List.of(1, 2, 3, 4));
        Set<Integer> b = new TreeSet<>(List.of(3, 4, 5));
        Set<Integer> union = new TreeSet<>(a); union.addAll(b);
        Set<Integer> inter = new TreeSet<>(a); inter.retainAll(b);
        Set<Integer> diff = new TreeSet<>(a); diff.removeAll(b);
        System.out.println(union + " " + inter + " " + diff);
    }
}`,
    ans: "[1, 2, 3, 4, 5] [3, 4] [1, 2]",
    exp: "addAll은 합집합, retainAll은 교집합, removeAll은 차집합이에요. 원본을 보존하려고 복사본에서 계산했어요."
  },
  {
    n: 341,
    ch: 11,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(List.of(1, 2, 3, 4, 5, 6));
        Iterator<Integer> it = list.iterator();
        while (it.hasNext()) if (it.next() % 2 == 0) it.remove();
        System.out.println(list);
        list.removeIf(n -> n > 3);
        System.out.println(list);
    }
}`,
    ans: String.raw`[1, 3, 5]
[1, 3]`,
    exp: "반복 중에 요소를 지울 때는 Iterator의 remove()를 써야 안전해요. removeIf로 조건에 맞는 요소를 한 번에 지울 수도 있어요."
  },
  {
    n: 342,
    ch: 11,
    lv: 2,
    t: "mc",
    q: "<code>List&lt;Integer&gt; list = List.of(1, 2, 3); list.add(4);</code>를 실행하면?",
    choices: ["[1, 2, 3, 4]가 된다", "UnsupportedOperationException", "컴파일 에러", "NullPointerException"],
    ans: 1,
    exp: "List.of로 만든 리스트는 변경 불가능(unmodifiable)해서 add/remove 시 UnsupportedOperationException이 나요. 바꾸려면 new ArrayList<>(List.of(...))로 복사해요."
  },
  {
    n: 343,
    ch: 11,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
class Student implements Comparable<Student> {
    String name; int score;
    Student(String name, int score) { this.name = name; this.score = score; }
    public int compareTo(Student o) { return o.score - score; }
    public String toString() { return name + score; }
}
public class Main {
    public static void main(String[] args) {
        List<Student> list = new ArrayList<>(List.of(
            new Student("A", 80), new Student("B", 95), new Student("C", 80), new Student("D", 70)));
        Collections.sort(list);
        System.out.println(list);
        list.sort(Comparator.comparing((Student s) -> s.name).reversed());
        System.out.println(list);
    }
}`,
    ans: String.raw`[B95, A80, C80, D70]
[D70, C80, B95, A80]`,
    exp: "compareTo를 o.score - score로 구현하면 점수 내림차순이에요. 같은 점수(A, C)는 원래 순서가 유지돼요(안정 정렬). Comparator로 다른 기준을 따로 줄 수 있어요."
  },
  {
    n: 344,
    ch: 11,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        TreeMap<Integer, String> tm = new TreeMap<>();
        tm.put(10, "a"); tm.put(20, "b"); tm.put(30, "c"); tm.put(40, "d");
        System.out.println(tm.firstKey() + " " + tm.lastKey());
        System.out.println(tm.floorKey(25) + " " + tm.ceilingKey(25));
        System.out.println(tm.headMap(30));
        System.out.println(tm.tailMap(30, false));
        System.out.println(tm.descendingMap());
    }
}`,
    ans: String.raw`10 40
20 30
{10=a, 20=b}
{40=d}
{40=d, 30=c, 20=b, 10=a}`,
    exp: "TreeMap은 정렬돼 있어서 범위 검색이 가능해요. floorKey는 이하에서 가장 큰 키, ceilingKey는 이상에서 가장 작은 키예요. headMap(30)은 30 미만이에요."
  },
  {
    n: 345,
    ch: 11,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        String text = "the cat and the dog and the bird";
        Map<String, Integer> freq = new TreeMap<>();
        for (String w : text.split(" ")) freq.merge(w, 1, Integer::sum);
        System.out.println(freq);
        List<Map.Entry<String, Integer>> list = new ArrayList<>(freq.entrySet());
        list.sort(Map.Entry.<String, Integer>comparingByValue().reversed());
        System.out.println(list.get(0).getKey() + " " + list.get(1).getKey());
    }
}`,
    ans: String.raw`{and=2, bird=1, cat=1, dog=1, the=3}
the and`,
    exp: "merge(키, 1, Integer::sum)은 키가 없으면 1을 넣고, 있으면 기존 값에 1을 더해요. 값을 기준으로 내림차순 정렬하면 가장 많이 나온 the(3)와 and(2)가 앞에 와요."
  },
  {
    n: 346,
    ch: 11,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(List.of(1, 2, 3));
        try {
            for (Integer n : list) if (n == 2) list.remove(n);
        } catch (ConcurrentModificationException e) {
            System.out.println("CME");
        }
        System.out.println(list);
        List<Integer> list2 = new ArrayList<>(List.of(10, 20, 30));
        list2.remove(Integer.valueOf(10));
        list2.remove(0);
        System.out.println(list2);
    }
}`,
    ans: String.raw`[1, 3]
[30]`,
    exp: "향상된 for 중에 list.remove를 하면 보통 CME가 나지만, 끝에서 두 번째 요소를 지우면 hasNext()가 false가 되어 예외 없이 끝나요(마지막 요소 3은 검사도 안 돼요). 또 remove(Integer)는 값 삭제, remove(int)는 인덱스 삭제예요."
  },
  {
    n: 347,
    ch: 11,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        LinkedHashMap<String, Integer> lru = new LinkedHashMap<>(16, 0.75f, true) {
            protected boolean removeEldestEntry(Map.Entry<String, Integer> e) { return size() > 3; }
        };
        lru.put("a", 1); lru.put("b", 2); lru.put("c", 3);
        lru.get("a");
        lru.put("d", 4);
        System.out.println(lru.keySet());
    }
}`,
    ans: "[c, a, d]",
    exp: "접근 순서(true) LinkedHashMap은 최근에 사용한 항목을 뒤로 보내요. removeEldestEntry로 크기를 넘으면 가장 오래 안 쓴 b를 지워 LRU 캐시를 만들어요."
  },
  {
    n: 348,
    ch: 11,
    lv: 3,
    t: "mc",
    q: "HashSet에 넣은 객체의 필드를 바꿔 hashCode()가 달라지면 생길 수 있는 문제는?",
    choices: ["자동으로 위치가 갱신된다", "contains()나 remove()로 그 객체를 찾지 못할 수 있다", "컴파일 에러가 난다", "Set이 자동으로 정렬된다"],
    ans: 1,
    exp: "HashSet은 넣을 때의 hashCode로 위치를 정해요. 나중에 해시코드가 바뀌면 다른 위치를 찾아봐서 못 찾게 돼요. 해시 컬렉션의 키는 불변으로 두는 것이 좋아요."
  },
  {
    n: 349,
    ch: 11,
    lv: 3,
    t: "self",
    q: "<code>String[] words</code>를 글자 길이별로 묶어 <code>Map&lt;Integer, List&lt;String&gt;&gt;</code>로 만드는 코드를 쓰세요. 키는 길이 순으로 정렬돼야 해요.",
    answer: String.raw`Map<Integer, List<String>> byLen = new TreeMap<>();
for (String w : words) {
    byLen.computeIfAbsent(w.length(), k -> new ArrayList<>()).add(w);
}`,
    kw: ["TreeMap", "computeIfAbsent", "new ArrayList", "add"],
    exp: "computeIfAbsent는 키가 없을 때만 새 리스트를 만들어 넣고, 그 리스트를 돌려줘요. 덕분에 “없으면 만들고 추가” 코드를 한 줄로 쓸 수 있어요. 키 정렬은 TreeMap이 해줘요."
  },
  {
    n: 350,
    ch: 12,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("자바");
        String s = list.get(0);
        System.out.println(s + " " + s.length());
    }
}`,
    ans: "자바 2",
    exp: "지네릭스로 타입을 정하면 꺼낼 때 형변환이 필요 없어요."
  },
  {
    n: 351,
    ch: 12,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Pair<K, V> {
    K key; V value;
    Pair(K key, V value) { this.key = key; this.value = value; }
    public String toString() { return key + "=" + value; }
}
public class Main {
    public static void main(String[] args) {
        Pair<String, Integer> p = new Pair<>("나이", 20);
        System.out.println(p);
        System.out.println(p.value + 1);
    }
}`,
    ans: String.raw`나이=20
21`,
    exp: "타입 변수를 여러 개(K, V) 쓸 수 있어요. new Pair<>처럼 생성 쪽 타입은 생략할 수 있어요(다이아몬드 연산자)."
  },
  {
    n: 352,
    ch: 12,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`enum Season { SPRING, SUMMER, FALL, WINTER }
public class Main {
    public static void main(String[] args) {
        Season s = Season.SUMMER;
        System.out.println(s);
        System.out.println(s.ordinal());
        System.out.println(Season.values().length);
        System.out.println(s == Season.SUMMER);
    }
}`,
    ans: String.raw`SUMMER
1
4
true`,
    exp: "열거형 상수는 이름으로 출력되고, ordinal()은 0부터 시작하는 순서예요. 열거형 상수는 ==로 비교할 수 있어요."
  },
  {
    n: 353,
    ch: 12,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`enum Color { RED, GREEN, BLUE }
public class Main {
    public static void main(String[] args) {
        Color c = Color.valueOf("BLUE");
        switch (c) {
            case RED -> System.out.println("빨강");
            case GREEN -> System.out.println("초록");
            case BLUE -> System.out.println("파랑");
        }
        for (Color x : Color.values()) System.out.print(x.name().toLowerCase() + " ");
        System.out.println();
    }
}`,
    ans: String.raw`파랑
red green blue `,
    exp: "valueOf(문자열)로 이름에 맞는 상수를 얻어요. switch의 case에는 열거형 이름만 써요(Color.RED가 아니라 RED)."
  },
  {
    n: 354,
    ch: 12,
    lv: 1,
    t: "mc",
    q: "<code>ArrayList&lt;int&gt;</code>가 컴파일 에러인 이유는?",
    choices: ["int가 너무 작아서", "타입 변수에는 기본형을 쓸 수 없고 참조형(Integer)을 써야 해서", "ArrayList는 지네릭 클래스가 아니어서", "<> 안에는 한 글자만 쓸 수 있어서"],
    ans: 1,
    exp: "지네릭 타입에는 참조형만 와요. 기본형은 래퍼 클래스(Integer, Double 등)를 써요."
  },
  {
    n: 355,
    ch: 12,
    lv: 1,
    t: "mc",
    q: "열거형(enum)에 대한 설명으로 <b>틀린</b> 것은?",
    choices: ["관련된 상수를 묶어 정의한다", "타입에 안전하다", "new로 열거형 인스턴스를 만들 수 있다", "values()로 모든 상수를 배열로 얻는다"],
    ans: 2,
    exp: "열거형의 생성자는 묵시적으로 private이라 외부에서 new로 만들 수 없어요."
  },
  {
    n: 356,
    ch: 12,
    lv: 1,
    t: "mc",
    q: "메서드가 더 이상 사용되지 않음을 알리는 표준 애너테이션은?",
    choices: ["@Override", "@Deprecated", "@FunctionalInterface", "@SafeVarargs"],
    ans: 1,
    exp: "@Deprecated를 붙이면 그 메서드를 쓸 때 컴파일러가 경고를 보여줘요."
  },
  {
    n: 357,
    ch: 12,
    lv: 1,
    t: "mc",
    q: "<code>class Box&lt;T&gt;</code>에서 <code>T</code>를 무엇이라고 하나요?",
    choices: ["원시 타입", "타입 변수(타입 매개변수)", "와일드카드", "애너테이션"],
    ans: 1,
    exp: "<code>Box&lt;T&gt;</code>의 T는 타입 변수, <code>Box&lt;String&gt;</code>의 String은 대입된 타입(매개변수화된 타입의 인자)이에요. <code>Box</code>만 쓰면 원시 타입이에요."
  },
  {
    n: 358,
    ch: 12,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    static <T extends Comparable<T>> T max(T a, T b) {
        return a.compareTo(b) >= 0 ? a : b;
    }
    public static void main(String[] args) {
        System.out.println(max(3, 7));
        System.out.println(max("apple", "banana"));
        System.out.println(Main.<Double>max(1.5, 0.5));
    }
}`,
    ans: String.raw`7
banana
1.5`,
    exp: "지네릭 메서드는 반환타입 앞에 <T>를 선언해요. <T extends Comparable<T>>로 compareTo를 쓸 수 있는 타입만 받도록 제한했어요."
  },
  {
    n: 359,
    ch: 12,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`enum Op {
    PLUS("+") { int apply(int a, int b) { return a + b; } },
    TIMES("*") { int apply(int a, int b) { return a * b; } };
    final String sym;
    Op(String sym) { this.sym = sym; }
    abstract int apply(int a, int b);
}
public class Main {
    public static void main(String[] args) {
        for (Op op : Op.values()) System.out.println("3 " + op.sym + " 4 = " + op.apply(3, 4));
    }
}`,
    ans: String.raw`3 + 4 = 7
3 * 4 = 12`,
    exp: "열거형에 추상 메서드를 선언하면 상수마다 몸통을 구현해야 해요. 상수별로 다른 동작을 갖게 할 수 있어요."
  },
  {
    n: 360,
    ch: 12,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
enum Day { MON, TUE, WED, THU, FRI, SAT, SUN }
public class Main {
    public static void main(String[] args) {
        EnumMap<Day, String> plan = new EnumMap<>(Day.class);
        plan.put(Day.FRI, "운동"); plan.put(Day.MON, "공부");
        System.out.println(plan);
        System.out.println(Day.SAT.compareTo(Day.MON));
        System.out.println(EnumSet.range(Day.WED, Day.FRI));
    }
}`,
    ans: String.raw`{MON=공부, FRI=운동}
5
[WED, THU, FRI]`,
    exp: "EnumMap은 상수 순서대로 저장돼요. compareTo는 ordinal 차이(5 - 0 = 5)예요. EnumSet.range로 구간을 만들 수 있어요."
  },
  {
    n: 361,
    ch: 12,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    static double sum(List<? extends Number> list) {
        double s = 0;
        for (Number n : list) s += n.doubleValue();
        return s;
    }
    static void addNums(List<? super Integer> list) { list.add(1); list.add(2); }
    public static void main(String[] args) {
        System.out.println(sum(List.of(1, 2, 3)));
        System.out.println(sum(List.of(1.5, 2.5)));
        List<Number> nums = new ArrayList<>();
        addNums(nums);
        System.out.println(nums);
    }
}`,
    ans: String.raw`6.0
4.0
[1, 2]`,
    exp: "<? extends Number>는 Number와 그 자손 리스트를 받아 읽기용으로, <? super Integer>는 Integer와 그 조상 리스트를 받아 쓰기용으로 써요."
  },
  {
    n: 362,
    ch: 12,
    lv: 2,
    t: "mc",
    q: "다음 중 컴파일 에러가 나는 것은?",
    choices: ["<code>List&lt;Number&gt; a = new ArrayList&lt;Number&gt;();</code>", "<code>List&lt;Number&gt; b = new ArrayList&lt;Integer&gt;();</code>", "<code>List&lt;? extends Number&gt; c = new ArrayList&lt;Integer&gt;();</code>", "<code>ArrayList&lt;Integer&gt; d = new ArrayList&lt;&gt;();</code>"],
    ans: 1,
    exp: "Integer가 Number의 자손이어도 List<Integer>는 List<Number>의 자손이 아니에요. 대입된 타입은 정확히 같아야 하고, 넓게 받으려면 와일드카드를 써요."
  },
  {
    n: 363,
    ch: 12,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.lang.annotation.*;
import java.lang.reflect.*;
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface Test { String value() default "기본"; int priority() default 1; }
public class Main {
    @Test("로그인") public void a() { }
    @Test(value = "결제", priority = 3) public void b() { }
    public void c() { }
    public static void main(String[] args) throws Exception {
        for (String n : new String[] {"a", "b", "c"}) {
            Method m = Main.class.getMethod(n);
            Test t = m.getAnnotation(Test.class);
            System.out.println(n + ": " + (t == null ? "없음" : t.value() + "/" + t.priority()));
        }
    }
}`,
    ans: String.raw`a: 로그인/1
b: 결제/3
c: 없음`,
    exp: "@Retention(RUNTIME)인 애너테이션은 실행 중 리플렉션으로 읽을 수 있어요. 요소 이름이 value 하나면 이름을 생략할 수 있고, default로 기본값을 정해요."
  },
  {
    n: 364,
    ch: 12,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
public class Main {
    public static void main(String[] args) {
        List<String> ls = new ArrayList<>();
        List<Integer> li = new ArrayList<>();
        System.out.println(ls.getClass() == li.getClass());
        System.out.println(ls.getClass().getSimpleName());
        List raw = li;
        raw.add("문자열");
        System.out.println(li.size());
        try {
            Integer x = li.get(0);
        } catch (ClassCastException e) {
            System.out.println("ClassCastException");
        }
    }
}`,
    ans: String.raw`true
ArrayList
1
ClassCastException`,
    exp: "지네릭 타입은 컴파일 후 지워져서(타입 소거) 실행 중에는 둘 다 그냥 ArrayList예요. 원시 타입으로 우회하면 엉뚱한 타입이 들어가고, 꺼낼 때 형변환에서 예외가 나요."
  },
  {
    n: 365,
    ch: 12,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`enum Planet {
    MERCURY(3.303e+23, 2.4397e6), EARTH(5.976e+24, 6.37814e6);
    private final double mass, radius;
    Planet(double mass, double radius) { this.mass = mass; this.radius = radius; }
    double gravity() { return 6.67300E-11 * mass / (radius * radius); }
}
public class Main {
    public static void main(String[] args) {
        for (Planet p : Planet.values())
            System.out.printf("%s %.2f%n", p, p.gravity());
        System.out.println(Planet.valueOf("EARTH").ordinal());
    }
}`,
    ans: String.raw`MERCURY 3.70
EARTH 9.80
1`,
    exp: "열거형 상수마다 여러 값을 생성자로 넘겨 저장하고 메서드로 계산할 수 있어요."
  },
  {
    n: 366,
    ch: 12,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`sealed interface Expr permits Num, Add, Mul { }
record Num(int v) implements Expr { }
record Add(Expr l, Expr r) implements Expr { }
record Mul(Expr l, Expr r) implements Expr { }
public class Main {
    static int eval(Expr e) {
        return switch (e) {
            case Num n -> n.v();
            case Add(Expr l, Expr r) -> eval(l) + eval(r);
            case Mul(Expr l, Expr r) -> eval(l) * eval(r);
        };
    }
    public static void main(String[] args) {
        Expr e = new Add(new Num(2), new Mul(new Num(3), new Num(4)));
        System.out.println(eval(e));
        System.out.println(e);
    }
}`,
    ans: String.raw`14
Add[l=Num[v=2], r=Mul[l=Num[v=3], r=Num[v=4]]]`,
    exp: "sealed 인터페이스는 구현 클래스를 제한해서, switch에서 모든 경우를 다뤘는지 컴파일러가 확인해요(default 불필요). 레코드 패턴으로 구성 요소를 바로 꺼내요. 레코드의 toString()은 자동으로 만들어져요."
  },
  {
    n: 367,
    ch: 12,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
class Box<T extends Comparable<T>> {
    private final List<T> items = new ArrayList<>();
    void add(T t) { items.add(t); }
    T max() { return Collections.max(items); }
    <R> List<R> map(java.util.function.Function<T, R> f) {
        List<R> out = new ArrayList<>();
        for (T t : items) out.add(f.apply(t));
        return out;
    }
}
public class Main {
    public static void main(String[] args) {
        Box<String> b = new Box<>();
        b.add("kiwi"); b.add("apple"); b.add("mango");
        System.out.println(b.max());
        System.out.println(b.map(String::length));
    }
}`,
    ans: String.raw`mango
[4, 5, 5]`,
    exp: "지네릭 클래스에 제한(T extends Comparable<T>)을 걸고, 클래스의 T와 별개인 지네릭 메서드 <R>을 함께 쓸 수 있어요."
  },
  {
    n: 368,
    ch: 12,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`record Range(int from, int to) {
    Range {
        if (from > to) { int t = from; from = to; to = t; }
    }
    int length() { return to - from; }
    static Range of(int a) { return new Range(0, a); }
}
public class Main {
    public static void main(String[] args) {
        Range r = new Range(10, 3);
        System.out.println(r);
        System.out.println(r.length() + " " + Range.of(5).length());
        System.out.println(r.equals(new Range(3, 10)));
    }
}`,
    ans: String.raw`Range[from=3, to=10]
7 5
true`,
    exp: "압축 생성자에서 매개변수를 바꾸면 그 값이 필드에 저장돼요. 레코드도 메서드와 static 팩토리를 가질 수 있고, equals는 구성 요소 값을 비교해요."
  },
  {
    n: 369,
    ch: 12,
    lv: 3,
    t: "mc",
    q: "<code>static &lt;T&gt; T[] make() { return new T[10]; }</code>가 컴파일 에러인 이유는?",
    choices: ["static 메서드여서", "타입 소거 때문에 실행 중 T의 실제 타입을 몰라 배열을 만들 수 없어서", "배열 길이가 너무 커서", "T는 반환타입이 될 수 없어서"],
    ans: 1,
    exp: "new 연산자는 실행 중 정확한 타입을 알아야 하는데 T는 컴파일 후 지워져요. 그래서 new T(), new T[]는 쓸 수 없어요."
  },
  {
    n: 370,
    ch: 12,
    lv: 3,
    t: "self",
    q: "두 값을 담는 지네릭 레코드 <code>Pair&lt;A, B&gt;</code>를 만들고, 두 값을 바꾼 새 Pair를 돌려주는 메서드 <code>swap()</code>을 추가하세요.",
    answer: String.raw`record Pair<A, B>(A first, B second) {
    Pair<B, A> swap() {
        return new Pair<>(second, first);
    }
}`,
    kw: ["record Pair<A, B>", "Pair<B, A>", "swap()", "new Pair<>"],
    exp: "레코드도 지네릭으로 선언할 수 있어요. swap의 반환타입은 타입 변수 순서가 바뀐 Pair<B, A>예요."
  },
  {
    n: 371,
    ch: 13,
    lv: 1,
    t: "mc",
    q: "쓰레드를 만드는 방법으로 옳은 것은?",
    choices: ["Thread 클래스를 상속하거나 Runnable 인터페이스를 구현한다", "Process 클래스를 상속한다", "main 메서드를 두 개 만든다", "synchronized를 붙인다"],
    ans: 0,
    exp: "Thread를 상속해 run()을 오버라이딩하거나, Runnable을 구현해 Thread 생성자에 넘겨요. 다른 클래스를 상속할 수 있는 Runnable 방식이 더 일반적이에요."
  },
  {
    n: 372,
    ch: 13,
    lv: 1,
    t: "mc",
    q: "새 쓰레드를 실행하려면 어떤 메서드를 호출해야 하나요?",
    choices: ["run()", "start()", "execute()", "begin()"],
    ans: 1,
    exp: "start()가 새 호출스택을 만들고 그 위에서 run()을 실행해요. run()을 직접 부르면 그냥 메서드 호출이에요."
  },
  {
    n: 373,
    ch: 13,
    lv: 1,
    t: "mc",
    q: "한 번 종료된 쓰레드에 대해 다시 start()를 호출하면?",
    choices: ["처음부터 다시 실행된다", "IllegalThreadStateException이 발생한다", "아무 일도 없다", "컴파일 에러"],
    ans: 1,
    exp: "쓰레드는 한 번만 start()할 수 있어요. 다시 실행하려면 새 쓰레드 객체를 만들어야 해요."
  },
  {
    n: 374,
    ch: 13,
    lv: 1,
    t: "mc",
    q: "<code>Thread.sleep(1000)</code>의 의미는?",
    choices: ["1000초 동안 멈춘다", "현재 쓰레드를 약 1초 동안 일시정지한다", "다른 쓰레드를 1초 멈춘다", "프로그램을 종료한다"],
    ans: 1,
    exp: "sleep은 밀리초 단위이고, 항상 <b>현재 실행 중인</b> 쓰레드를 멈춰요. InterruptedException을 처리해야 해요."
  },
  {
    n: 375,
    ch: 13,
    lv: 1,
    t: "mc",
    q: "쓰레드의 우선순위 범위로 옳은 것은?",
    choices: ["0 ~ 5", "1 ~ 10", "1 ~ 100", "-10 ~ 10"],
    ans: 1,
    exp: "MIN_PRIORITY = 1, NORM_PRIORITY = 5, MAX_PRIORITY = 10이에요. 우선순위는 힌트일 뿐 실행 순서를 보장하지 않아요."
  },
  {
    n: 376,
    ch: 13,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class MyThread extends Thread {
    public void run() { System.out.println("쓰레드: " + getName()); }
}
public class Main {
    public static void main(String[] args) throws InterruptedException {
        MyThread t = new MyThread();
        t.setName("T1");
        t.start();
        t.join();
        System.out.println("main 끝");
    }
}`,
    ans: String.raw`쓰레드: T1
main 끝`,
    exp: "Thread를 상속하면 run()을 오버라이딩하고 getName()을 바로 써요. join()으로 t가 끝날 때까지 기다리므로 순서가 항상 같아요."
  },
  {
    n: 377,
    ch: 13,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    public static void main(String[] args) throws InterruptedException {
        Runnable r = () -> {
            for (int i = 1; i <= 3; i++) System.out.println("작업 " + i);
        };
        Thread t = new Thread(r);
        t.start();
        t.join();
        System.out.println(t.isAlive());
    }
}`,
    ans: String.raw`작업 1
작업 2
작업 3
false`,
    exp: "Runnable을 람다로 만들어 Thread에 넘겼어요. join() 후에는 쓰레드가 끝나서 isAlive()가 false예요."
  },
  {
    n: 378,
    ch: 13,
    lv: 1,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    public static void main(String[] args) {
        Thread main = Thread.currentThread();
        System.out.println(main.getName());
        System.out.println(main.getPriority());
        Thread t = new Thread(() -> { });
        System.out.println(t.getName().startsWith("Thread-"));
    }
}`,
    ans: String.raw`main
5
true`,
    exp: "프로그램을 시작한 쓰레드의 이름은 main이고 우선순위는 5예요. 이름을 주지 않으면 \"Thread-번호\"로 자동으로 붙어요."
  },
  {
    n: 379,
    ch: 13,
    lv: 1,
    t: "mc",
    q: "멀티쓰레드 프로그래밍의 장점이 <b>아닌</b> 것은?",
    choices: ["CPU 사용률을 높일 수 있다", "사용자 응답성이 좋아진다", "작업을 분리해 코드가 간결해진다", "동기화나 교착상태를 신경 쓸 필요가 없어진다"],
    ans: 3,
    exp: "오히려 동기화, 교착상태(deadlock), 기아 같은 문제를 신경 써야 하는 것이 멀티쓰레드의 단점이에요."
  },
  {
    n: 380,
    ch: 13,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    public static void main(String[] args) throws InterruptedException {
        Thread t = new Thread(() -> {
            try {
                Thread.sleep(10_000);
                System.out.println("깨어남");
            } catch (InterruptedException e) {
                System.out.println("interrupt로 깨어남");
            }
        });
        t.start();
        t.interrupt();
        t.join();
        System.out.println("끝");
    }
}`,
    ans: String.raw`interrupt로 깨어남
끝`,
    exp: "자고 있는(또는 곧 잘) 쓰레드에 interrupt()를 하면 sleep이 InterruptedException을 던지며 바로 깨어나요."
  },
  {
    n: 381,
    ch: 13,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    public static void main(String[] args) throws InterruptedException {
        Thread t = new Thread(() -> {
            int count = 0;
            while (!Thread.currentThread().isInterrupted()) {
                count++;
                if (count == 3) Thread.currentThread().interrupt();
            }
            System.out.println("반복 " + count + "회 후 종료");
        });
        t.start();
        t.join();
        System.out.println(Thread.interrupted());
    }
}`,
    ans: String.raw`반복 3회 후 종료
false`,
    exp: "isInterrupted()로 중단 요청을 확인하며 반복을 끝내요. 마지막 줄의 Thread.interrupted()는 main 쓰레드의 상태라 false예요."
  },
  {
    n: 382,
    ch: 13,
    lv: 2,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.concurrent.atomic.AtomicInteger;
public class Main {
    public static void main(String[] args) throws InterruptedException {
        AtomicInteger cnt = new AtomicInteger();
        Thread[] ts = new Thread[4];
        for (int i = 0; i < ts.length; i++) {
            ts[i] = new Thread(() -> { for (int j = 0; j < 1000; j++) cnt.incrementAndGet(); });
            ts[i].start();
        }
        for (Thread t : ts) t.join();
        System.out.println(cnt.get());
    }
}`,
    ans: "4000",
    exp: "AtomicInteger는 증가를 원자적으로 처리해서 synchronized 없이도 정확히 4 × 1000 = 4000이에요."
  },
  {
    n: 383,
    ch: 13,
    lv: 2,
    t: "mc",
    q: "volatile 키워드에 대한 설명으로 옳은 것은?",
    choices: ["변수를 상수로 만든다", "변수 값을 캐시가 아닌 메인 메모리에서 읽고 써서 다른 쓰레드의 변경이 보이게 한다", "count++ 같은 연산을 원자적으로 만든다", "메서드에만 붙일 수 있다"],
    ans: 1,
    exp: "volatile은 가시성을 보장하지만 count++ 같은 “읽고-바꾸고-쓰기”를 원자적으로 만들지는 않아요. 그럴 때는 synchronized나 Atomic 클래스를 써요."
  },
  {
    n: 384,
    ch: 13,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`class Table {
    private final java.util.LinkedList<String> dishes = new java.util.LinkedList<>();
    synchronized void add(String d) {
        while (dishes.size() >= 1) { try { wait(); } catch (InterruptedException e) { } }
        dishes.add(d);
        System.out.println("요리사: " + d);
        notifyAll();
    }
    synchronized String take() {
        while (dishes.isEmpty()) { try { wait(); } catch (InterruptedException e) { } }
        String d = dishes.remove();
        System.out.println("손님: " + d);
        notifyAll();
        return d;
    }
}
public class Main {
    public static void main(String[] args) throws InterruptedException {
        Table t = new Table();
        Thread cook = new Thread(() -> { for (String d : new String[] {"김밥", "라면", "떡볶이"}) t.add(d); });
        Thread cust = new Thread(() -> { for (int i = 0; i < 3; i++) t.take(); });
        cook.start(); cust.start();
        cook.join(); cust.join();
    }
}`,
    ans: String.raw`요리사: 김밥
손님: 김밥
요리사: 라면
손님: 라면
요리사: 떡볶이
손님: 떡볶이`,
    exp: "테이블에 음식이 1개 차면 요리사는 wait()하고, 비면 손님이 wait()해요. notifyAll()로 서로 깨우기 때문에 “요리사 → 손님”이 번갈아 나와요."
  },
  {
    n: 385,
    ch: 13,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.concurrent.*;
public class Main {
    public static void main(String[] args) throws InterruptedException {
        CountDownLatch latch = new CountDownLatch(3);
        int[] results = new int[3];
        for (int i = 0; i < 3; i++) {
            final int idx = i;
            new Thread(() -> { results[idx] = (idx + 1) * 10; latch.countDown(); }).start();
        }
        latch.await();
        System.out.println(results[0] + results[1] + results[2]);
        System.out.println(latch.getCount());
    }
}`,
    ans: String.raw`60
0`,
    exp: "CountDownLatch는 count가 0이 될 때까지 await()에서 기다려요. 세 쓰레드가 모두 countDown()해야 main이 진행해서 결과가 항상 60이에요."
  },
  {
    n: 386,
    ch: 13,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.*;
import java.util.concurrent.*;
public class Main {
    public static void main(String[] args) throws Exception {
        ExecutorService es = Executors.newFixedThreadPool(3);
        List<Callable<Integer>> tasks = new ArrayList<>();
        for (int i = 1; i <= 4; i++) { final int n = i; tasks.add(() -> n * n); }
        int sum = 0;
        for (Future<Integer> f : es.invokeAll(tasks)) sum += f.get();
        es.shutdown();
        System.out.println(sum);
        System.out.println(es.awaitTermination(1, TimeUnit.SECONDS) + " " + es.isShutdown());
    }
}`,
    ans: String.raw`30
true true`,
    exp: "invokeAll은 모든 작업이 끝날 때까지 기다린 뒤 Future 목록을 돌려줘요. 1 + 4 + 9 + 16 = 30. shutdown() 후에는 새 작업을 받지 않아요."
  },
  {
    n: 387,
    ch: 13,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`import java.util.concurrent.*;
public class Main {
    public static void main(String[] args) {
        CompletableFuture<Integer> a = CompletableFuture.supplyAsync(() -> 3);
        CompletableFuture<Integer> b = CompletableFuture.supplyAsync(() -> 4);
        System.out.println(a.thenCombine(b, (x, y) -> x * y).join());
        String r = CompletableFuture.supplyAsync(() -> { if (true) throw new IllegalStateException("실패"); return "OK"; })
                .exceptionally(ex -> "복구: " + ex.getCause().getMessage())
                .join();
        System.out.println(r);
    }
}`,
    ans: String.raw`12
복구: 실패`,
    exp: "thenCombine으로 두 비동기 결과를 합쳐요. 비동기 작업에서 난 예외는 CompletionException으로 감싸져 exceptionally로 전달되므로 getCause()로 원래 예외를 꺼내요."
  },
  {
    n: 388,
    ch: 13,
    lv: 3,
    t: "out",
    q: "다음 코드를 실행했을 때 출력 결과를 쓰세요.",
    code: String.raw`public class Main {
    static int shared = 0;
    public static void main(String[] args) throws InterruptedException {
        Object lock = new Object();
        Runnable inc = () -> {
            for (int i = 0; i < 50_000; i++) {
                synchronized (lock) { shared++; }
            }
        };
        Thread t1 = new Thread(inc), t2 = new Thread(inc);
        t1.start(); t2.start();
        t1.join(); t2.join();
        System.out.println(shared);
        System.out.println(Thread.holdsLock(lock));
    }
}`,
    ans: String.raw`100000
false`,
    exp: "synchronized 블럭으로 임계 영역만 잠가요. 결과는 항상 100000이고, main은 락을 갖고 있지 않아서 holdsLock은 false예요."
  },
  {
    n: 389,
    ch: 13,
    lv: 3,
    t: "mc",
    q: "교착상태(deadlock)가 생기는 대표적인 상황은?",
    choices: ["쓰레드가 하나뿐일 때", "두 쓰레드가 서로 상대가 가진 락을 기다리며 각자 자기 락을 놓지 않을 때", "sleep()을 오래 호출할 때", "volatile을 사용할 때"],
    ans: 1,
    exp: "쓰레드 A가 락1을 잡고 락2를 기다리고, B가 락2를 잡고 락1을 기다리면 둘 다 영원히 멈춰요. 모든 쓰레드가 같은 순서로 락을 얻게 하면 막을 수 있어요."
  },
  {
    n: 390,
    ch: 13,
    lv: 3,
    t: "self",
    q: "1부터 1,000,000까지의 합을 쓰레드 풀(<code>ExecutorService</code>, 쓰레드 4개)로 4구간으로 나눠 계산하고 합치는 코드를 쓰세요.",
    answer: String.raw`ExecutorService es = Executors.newFixedThreadPool(4);
List<Future<Long>> fs = new ArrayList<>();
int chunk = 250_000;
for (int i = 0; i < 4; i++) {
    final int from = i * chunk + 1, to = (i + 1) * chunk;
    fs.add(es.submit(() -> {
        long s = 0;
        for (int n = from; n <= to; n++) s += n;
        return s;
    }));
}
long total = 0;
for (Future<Long> f : fs) total += f.get();
es.shutdown();
System.out.println(total); // 500000500000`,
    kw: ["newFixedThreadPool", "submit", "Future", "get()", "shutdown"],
    exp: "작업을 Callable로 나눠 submit하고, Future.get()으로 각 결과를 모아 더해요. 람다 안에서 쓰는 지역변수는 사실상 final이어야 해서 from, to를 final로 선언했어요. 다 쓴 풀은 shutdown()으로 닫아요."
  },
  {
    n: 391,
    ch: 1,
    lv: 1,
    t: "self",
    kind: "b",
    q: "아래처럼 두 줄을 출력하는 문장을 <code>main</code> 안에 쓰세요.",
    answer: String.raw`System.out.println("이름: 김자바");
System.out.println("나이: 20");`,
    kw: ["System.out.println"],
    demo: String.raw`이름: 김자바
나이: 20`,
    exp: "println은 출력한 뒤 줄을 바꿔요. 줄마다 println을 한 번씩 써요."
  },
  {
    n: 392,
    ch: 1,
    lv: 1,
    t: "self",
    kind: "b",
    q: "별(*)로 아래 모양을 출력하세요. (반복문 없이 println만 사용)",
    answer: String.raw`System.out.println("*");
System.out.println("**");
System.out.println("***");
System.out.println("****");`,
    kw: ["println", "\"*\""],
    demo: String.raw`*
**
***
****`,
    exp: "반복문은 4장에서 배워요. 지금은 한 줄에 println 하나씩 써요."
  },
  {
    n: 393,
    ch: 1,
    lv: 1,
    t: "self",
    kind: "b",
    q: "3과 4를 더한 결과를 <code>3 + 4 = 7</code> 형태로 출력하세요. 7은 직접 쓰지 말고 계산해서 출력해요.",
    answer: "System.out.println(\"3 + 4 = \" + (3 + 4));",
    kw: ["println", "(3 + 4)"],
    demo: "3 + 4 = 7",
    exp: "괄호 없이 <code>\"3 + 4 = \" + 3 + 4</code>로 쓰면 문자열 결합이 먼저 일어나 \"3 + 4 = 34\"가 돼요. 계산을 괄호로 묶어요."
  },
  {
    n: 394,
    ch: 1,
    lv: 2,
    t: "self",
    kind: "b",
    q: "이스케이프 문자를 써서 아래처럼 출력하세요. 두 번째 줄의 간격은 탭(\\t)이에요.",
    answer: String.raw`System.out.println("그가 말했다. \"Hello\"");
System.out.println("경로:\tC:\\java\\work");`,
    kw: ["\\\"", "\\t", "\\\\"],
    demo: String.raw`그가 말했다. "Hello"
경로:	C:\java\work`,
    exp: "문자열 안의 큰따옴표는 <code>\\\"</code>, 역슬래시는 <code>\\\\</code>, 탭은 <code>\\t</code>로 써요."
  },
  {
    n: 395,
    ch: 1,
    lv: 2,
    t: "self",
    kind: "b",
    q: "print와 println을 섞어서 아래처럼 출력하세요. 첫 줄은 print를 세 번 써서 만들어요.",
    answer: String.raw`System.out.print("1 ");
System.out.print("2 ");
System.out.print("3");
System.out.println();
System.out.println("끝");`,
    kw: ["print(", "println()"],
    demo: String.raw`1 2 3
끝`,
    exp: "print는 줄을 바꾸지 않아요. 인자 없는 <code>println()</code>은 줄바꿈만 해요."
  },
  {
    n: 396,
    ch: 1,
    lv: 2,
    t: "self",
    kind: "b",
    q: "아래 명함 상자를 출력하세요.",
    answer: String.raw`System.out.println("+----------+");
System.out.println("|  JAVA    |");
System.out.println("|  김자바  |");
System.out.println("+----------+");`,
    kw: ["println"],
    demo: String.raw`+----------+
|  JAVA    |
|  김자바  |
+----------+`,
    exp: "출력은 쓴 그대로 나와요. 한글은 화면에서 영문보다 넓게 보일 수 있어요."
  },
  {
    n: 397,
    ch: 1,
    lv: 2,
    t: "self",
    kind: "c",
    q: "한 소스 파일에 <code>Helper</code> 클래스를 하나 더 만들고, 그 안에 <code>\"도와줄게요\"</code>를 출력하는 <code>static void hello()</code> 메서드를 만드세요. 사용 예처럼 Main에서 호출해요.",
    code: String.raw`System.out.println("시작");
Helper.hello();
System.out.println("끝");`,
    answer: String.raw`class Helper {
    static void hello() {
        System.out.println("도와줄게요");
    }
}`,
    kw: ["class Helper", "static void hello()"],
    demo: String.raw`시작
도와줄게요
끝`,
    exp: "한 파일에 클래스를 여러 개 둘 수 있지만 public class는 하나뿐이에요. 다른 클래스의 static 메서드는 <code>클래스이름.메서드()</code>로 불러요."
  },
  {
    n: 398,
    ch: 1,
    lv: 3,
    t: "self",
    kind: "m",
    q: "구분선 <code>----------</code>을 출력하는 <code>static void line()</code> 메서드를 만드세요. 사용 예를 실행하면 아래처럼 나와야 해요.",
    code: String.raw`line();
System.out.println("자바의 정석");
line();`,
    answer: String.raw`static void line() {
    System.out.println("----------");
}`,
    kw: ["static void line()", "println"],
    demo: String.raw`----------
자바의 정석
----------`,
    exp: "자주 쓰는 출력을 메서드로 묶으면 같은 코드를 여러 번 쓰지 않아도 돼요. main과 같은 클래스의 static 메서드는 이름만으로 불러요."
  },
  {
    n: 399,
    ch: 1,
    lv: 3,
    t: "self",
    kind: "b",
    q: "<code>println</code>을 <b>한 번만</b> 써서 세 줄을 출력하세요.",
    answer: "System.out.println(\"월: 국어\\n화: 수학\\n수: 영어\");",
    kw: ["\\n"],
    demo: String.raw`월: 국어
화: 수학
수: 영어`,
    exp: "<code>\\n</code>(줄바꿈 문자)을 문자열 안에 넣으면 한 번의 출력으로 여러 줄을 만들 수 있어요."
  },
  {
    n: 400,
    ch: 1,
    lv: 3,
    t: "self",
    kind: "b",
    q: "별로 아래 다이아몬드를 출력하세요. (줄 앞 공백에 주의, 줄 끝 공백은 없어요)",
    answer: String.raw`System.out.println("  *");
System.out.println(" ***");
System.out.println("*****");
System.out.println(" ***");
System.out.println("  *");`,
    kw: ["println", "\" ***\""],
    demo: String.raw`  *
 ***
*****
 ***
  *`,
    exp: "각 줄 앞의 공백 수를 2, 1, 0, 1, 2로 맞춰요. 4장에서는 이걸 반복문으로 만들어 봐요."
  },
  {
    n: 401,
    ch: 2,
    lv: 1,
    t: "self",
    kind: "b",
    q: "<code>int a = 10, b = 20;</code>의 값을 임시 변수 <code>tmp</code>를 써서 서로 바꾸고 <code>a=20, b=10</code>을 출력하세요.",
    answer: String.raw`int a = 10, b = 20;
int tmp = a;
a = b;
b = tmp;
System.out.println("a=" + a + ", b=" + b);`,
    kw: ["tmp", "a = b", "b = tmp"],
    demo: "a=20, b=10",
    exp: "<code>a = b; b = a;</code>로 바로 바꾸면 a의 원래 값이 사라져요. 임시 변수에 먼저 보관해요."
  },
  {
    n: 402,
    ch: 2,
    lv: 1,
    t: "self",
    kind: "b",
    q: "상수 <code>PI</code>(3.14159)를 <code>final</code>로 선언하고, 반지름 5인 원의 넓이를 소수점 둘째 자리까지 출력하세요.",
    answer: String.raw`final double PI = 3.14159;
int r = 5;
double area = PI * r * r;
System.out.printf("넓이: %.2f%n", area);`,
    kw: ["final double PI", "printf", "%.2f"],
    demo: "넓이: 78.54",
    exp: "<code>final</code>을 붙이면 값을 바꿀 수 없는 상수가 돼요. printf의 <code>%.2f</code>는 소수점 둘째 자리까지 반올림해서 보여줘요."
  },
  {
    n: 403,
    ch: 2,
    lv: 1,
    t: "self",
    kind: "b",
    q: "<code>char c = 'A';</code>의 코드값과, <code>c</code>보다 2 큰 문자를 출력하세요.",
    answer: String.raw`char c = 'A';
System.out.println((int) c);
System.out.println((char) (c + 2));`,
    kw: ["(int) c", "(char)"],
    demo: String.raw`65
C`,
    exp: "char는 내부적으로 유니코드 정수예요. <code>c + 2</code>는 int가 되므로 다시 <code>(char)</code>로 형변환해야 문자로 보여요."
  },
  {
    n: 404,
    ch: 2,
    lv: 2,
    t: "self",
    kind: "b",
    q: "화씨 100도를 섭씨로 바꿔 소수점 첫째 자리까지 출력하세요. 공식: 섭씨 = (화씨 - 32) × 5 / 9",
    answer: String.raw`int f = 100;
double c = (f - 32) * 5 / 9.0;
System.out.printf("%d°F = %.1f°C%n", f, c);`,
    kw: ["9.0", "printf", "%.1f"],
    demo: "100°F = 37.8°C",
    exp: "<code>5 / 9</code>처럼 정수끼리 나누면 0이 돼요. 한쪽을 9.0처럼 실수로 써야 소수점이 남아요."
  },
  {
    n: 405,
    ch: 2,
    lv: 2,
    t: "self",
    kind: "b",
    q: "<code>Integer.MAX_VALUE</code>에 1을 더한 결과를 int로 한 번, long으로 한 번 계산해 출력하세요.",
    answer: String.raw`int i = Integer.MAX_VALUE;
System.out.println(i + 1);
long l = (long) i + 1;
System.out.println(l);`,
    kw: ["Integer.MAX_VALUE", "(long)"],
    demo: String.raw`-2147483648
2147483648`,
    exp: "int의 최댓값을 넘으면 최솟값으로 돌아가요(오버플로). 계산 전에 long으로 바꿔야 정확한 값이 나와요. <code>(long)(i + 1)</code>은 이미 넘친 뒤라 소용없어요."
  },
  {
    n: 406,
    ch: 2,
    lv: 2,
    t: "self",
    kind: "b",
    q: "문자열 <code>\"123\"</code>을 정수로 바꿔 1을 더한 값과, 정수 <code>4567</code>을 문자열로 바꿔 그 길이를 출력하세요.",
    answer: String.raw`int n = Integer.parseInt("123");
System.out.println(n + 1);
String s = String.valueOf(4567);
System.out.println(s.length());`,
    kw: ["Integer.parseInt", "String.valueOf", "length()"],
    demo: String.raw`124
4`,
    exp: "문자열 → 정수는 <code>Integer.parseInt</code>, 정수 → 문자열은 <code>String.valueOf</code>나 <code>\"\" + 4567</code>로 바꿔요."
  },
  {
    n: 407,
    ch: 2,
    lv: 2,
    t: "self",
    kind: "b",
    q: "<code>double x = 3.14159;</code>를 소수점 둘째 자리까지 <b>반올림한 값</b>을 double로 만들어 출력하세요. (printf 말고 계산으로)",
    answer: String.raw`double x = 3.14159;
double r = Math.round(x * 100) / 100.0;
System.out.println(r);`,
    kw: ["Math.round", "100.0"],
    demo: "3.14",
    exp: "100을 곱해 반올림하고 다시 100.0으로 나눠요. 100(정수)으로 나누면 정수 나눗셈이 되어 3이 나와요."
  },
  {
    n: 408,
    ch: 2,
    lv: 3,
    t: "self",
    kind: "b",
    q: "대문자 <code>char up = 'J';</code>를 메서드 없이 소문자로 바꿔 출력하세요. (대문자와 소문자의 코드 차이는 32)",
    answer: String.raw`char up = 'J';
char low = (char) (up + 32);
System.out.println(low);
System.out.println((int) 'a' - (int) 'A');`,
    kw: ["(char)", "32"],
    demo: String.raw`j
32`,
    exp: "'A'는 65, 'a'는 97이라 차이가 32예요. 정수 연산 결과를 char로 형변환해요."
  },
  {
    n: 409,
    ch: 2,
    lv: 3,
    t: "self",
    kind: "b",
    q: "초 단위 시간 <code>int total = 3725;</code>를 <code>1시간 2분 5초</code> 형태로 출력하세요.",
    answer: String.raw`int total = 3725;
int h = total / 3600;
int m = total % 3600 / 60;
int s = total % 60;
System.out.println(h + "시간 " + m + "분 " + s + "초");`,
    kw: ["/ 3600", "% 3600 / 60", "% 60"],
    demo: "1시간 2분 5초",
    exp: "나눗셈 몫(/)으로 큰 단위를, 나머지(%)로 남은 양을 구해요."
  },
  {
    n: 410,
    ch: 2,
    lv: 3,
    t: "self",
    kind: "b",
    q: "10의 2진수, 255의 16진수, 그리고 2진 리터럴 <code>0b1010</code>의 10진수 값을 한 줄에 공백으로 구분해 출력하세요.",
    answer: "System.out.println(Integer.toBinaryString(10) + \" \" + Integer.toHexString(255) + \" \" + 0b1010);",
    kw: ["toBinaryString", "toHexString", "0b1010"],
    demo: "1010 ff 10",
    exp: "<code>0b</code>는 2진, <code>0x</code>는 16진, <code>0</code>으로 시작하면 8진 리터럴이에요. 출력할 때는 항상 10진수로 나와요."
  },
  {
    n: 411,
    ch: 3,
    lv: 1,
    t: "self",
    kind: "m",
    q: "정수가 짝수면 <code>\"짝수\"</code>, 홀수면 <code>\"홀수\"</code>를 돌려주는 <code>static String evenOdd(int n)</code>을 삼항 연산자로 만드세요.",
    code: String.raw`System.out.println(evenOdd(4));
System.out.println(evenOdd(7));
System.out.println(evenOdd(-3));`,
    answer: String.raw`static String evenOdd(int n) {
    return n % 2 == 0 ? "짝수" : "홀수";
}`,
    kw: ["% 2 == 0", "? \"짝수\" : \"홀수\""],
    demo: String.raw`짝수
홀수
홀수`,
    exp: "2로 나눈 나머지가 0이면 짝수예요. 음수 홀수는 나머지가 -1이라 <code>n % 2 == 1</code>보다 <code>== 0</code>으로 검사하는 게 안전해요."
  },
  {
    n: 412,
    ch: 3,
    lv: 1,
    t: "self",
    kind: "b",
    q: "사과 123개를 한 바구니에 10개씩 담을 때 필요한 바구니 수와 마지막 바구니에 담긴 사과 수를 출력하세요. (조건문 없이)",
    answer: String.raw`int apples = 123, size = 10;
int baskets = (apples + size - 1) / size;
System.out.println("바구니: " + baskets);
System.out.println("마지막: " + (apples % size == 0 ? size : apples % size));`,
    kw: ["(apples + size - 1) / size", "% size"],
    demo: String.raw`바구니: 13
마지막: 3`,
    exp: "<code>(n + 9) / 10</code>은 10으로 나눈 몫을 올림하는 흔한 방법이에요. 나머지가 0이면 마지막 바구니도 꽉 차요."
  },
  {
    n: 413,
    ch: 3,
    lv: 1,
    t: "self",
    kind: "m",
    q: "세 정수 중 가장 큰 값을 돌려주는 <code>static int max3(int a, int b, int c)</code>를 삼항 연산자로 만드세요.",
    code: String.raw`System.out.println(max3(3, 9, 5));
System.out.println(max3(7, 2, 7));`,
    answer: String.raw`static int max3(int a, int b, int c) {
    int ab = a > b ? a : b;
    return ab > c ? ab : c;
}`,
    kw: ["?", ":"],
    demo: String.raw`9
7`,
    exp: "두 개씩 비교해요. 한 줄로 <code>a > b ? (a > c ? a : c) : (b > c ? b : c)</code>처럼 쓸 수도 있어요."
  },
  {
    n: 414,
    ch: 3,
    lv: 2,
    t: "self",
    kind: "m",
    q: "윤년이면 true를 돌려주는 <code>static boolean isLeap(int y)</code>를 만드세요. (4의 배수이면서 100의 배수가 아니거나, 400의 배수)",
    code: String.raw`System.out.println(isLeap(2024));
System.out.println(isLeap(1900));
System.out.println(isLeap(2000));
System.out.println(isLeap(2026));`,
    answer: String.raw`static boolean isLeap(int y) {
    return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
}`,
    kw: ["% 4 == 0", "% 100 != 0", "% 400 == 0", "||"],
    demo: String.raw`true
false
true
false`,
    exp: "&&가 ||보다 우선순위가 높지만 괄호로 묶어 의도를 분명히 해요."
  },
  {
    n: 415,
    ch: 3,
    lv: 2,
    t: "self",
    kind: "m",
    q: "문자가 영문자(대·소문자)이거나 숫자이면 true를 돌려주는 <code>static boolean isAlnum(char ch)</code>를 비교·논리 연산자만으로 만드세요.",
    code: String.raw`System.out.println(isAlnum('a'));
System.out.println(isAlnum('Q'));
System.out.println(isAlnum('5'));
System.out.println(isAlnum('#'));`,
    answer: String.raw`static boolean isAlnum(char ch) {
    return ('a' <= ch && ch <= 'z') || ('A' <= ch && ch <= 'Z') || ('0' <= ch && ch <= '9');
}`,
    kw: ["'a' <= ch", "ch <= 'z'", "||"],
    demo: String.raw`true
true
true
false`,
    exp: "문자는 코드값으로 비교돼서 범위 검사를 할 수 있어요. <code>'a' <= ch <= 'z'</code>처럼 한 번에 쓸 수는 없어요."
  },
  {
    n: 416,
    ch: 3,
    lv: 2,
    t: "self",
    kind: "b",
    q: "<code>int num = 456;</code>에서 일의 자리를 버린 값(450)과, num보다 크거나 같은 가장 작은 10의 배수(460)를 출력하세요.",
    answer: String.raw`int num = 456;
System.out.println(num / 10 * 10);
System.out.println((num + 9) / 10 * 10);`,
    kw: ["/ 10 * 10", "+ 9"],
    demo: String.raw`450
460`,
    exp: "정수 나눗셈은 소수점 이하를 버려요. 10으로 나눴다가 다시 곱하면 일의 자리가 0이 돼요."
  },
  {
    n: 417,
    ch: 3,
    lv: 2,
    t: "self",
    kind: "b",
    q: "<code>double pi = 3.14159;</code>를 소수점 넷째 자리에서 반올림한 값과, 셋째 자리 아래를 버린 값을 출력하세요.",
    answer: String.raw`double pi = 3.14159;
System.out.println((int) (pi * 1000 + 0.5) / 1000.0);
System.out.println((int) (pi * 1000) / 1000.0);`,
    kw: ["* 1000", "+ 0.5", "(int)", "1000.0"],
    demo: String.raw`3.142
3.141`,
    exp: "0.5를 더한 뒤 int로 바꾸면 반올림, 그냥 바꾸면 버림이에요. 마지막에 1000.0(실수)으로 나눠야 소수점이 살아요."
  },
  {
    n: 418,
    ch: 3,
    lv: 3,
    t: "self",
    kind: "m",
    q: "양의 정수 n이 2의 거듭제곱이면 true를 돌려주는 <code>static boolean isPow2(int n)</code>를 비트 연산자로 만드세요.",
    code: String.raw`System.out.println(isPow2(16));
System.out.println(isPow2(18));
System.out.println(isPow2(1));
System.out.println(isPow2(0));`,
    answer: String.raw`static boolean isPow2(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}`,
    kw: ["n & (n - 1)", "== 0", "n > 0"],
    demo: String.raw`true
false
true
false`,
    exp: "2의 거듭제곱은 2진수로 1이 하나뿐이에요(1000). 1을 빼면 그 아래가 모두 1(0111)이 되어 &하면 0이에요. &는 ==보다 우선순위가 낮아 괄호가 꼭 필요해요."
  },
  {
    n: 419,
    ch: 3,
    lv: 3,
    t: "self",
    kind: "b",
    q: "임시 변수 없이 XOR(^) 연산자만으로 <code>int a = 5, b = 9;</code>의 값을 바꾸고 출력하세요.",
    answer: String.raw`int a = 5, b = 9;
a ^= b;
b ^= a;
a ^= b;
System.out.println(a + " " + b);`,
    kw: ["a ^= b", "b ^= a"],
    demo: "9 5",
    exp: "x ^ x = 0, x ^ 0 = x 성질을 이용해요. 실무에서는 가독성 때문에 임시 변수를 쓰는 게 보통이에요."
  },
  {
    n: 420,
    ch: 3,
    lv: 3,
    t: "self",
    kind: "m",
    q: "<code>b</code>가 0이면 나누지 않고 false를, 아니면 <code>a / b >= k</code>의 결과를 돌려주는 <code>static boolean ratioAtLeast(int a, int b, int k)</code>를 <b>if 없이</b> 만드세요.",
    code: String.raw`System.out.println(ratioAtLeast(10, 0, 2));
System.out.println(ratioAtLeast(10, 3, 3));
System.out.println(ratioAtLeast(10, 3, 4));`,
    answer: String.raw`static boolean ratioAtLeast(int a, int b, int k) {
    return b != 0 && a / b >= k;
}`,
    kw: ["b != 0 &&", "a / b >= k"],
    demo: String.raw`false
true
false`,
    exp: "&&는 왼쪽이 false면 오른쪽을 계산하지 않아요(단축 평가). 그래서 0으로 나누는 예외가 나지 않아요. <code>&</code>를 쓰면 양쪽을 다 계산해서 예외가 나요."
  },
  {
    n: 421,
    ch: 4,
    lv: 1,
    t: "self",
    kind: "b",
    q: "1부터 100까지 짝수의 합을 for문으로 구해 출력하세요.",
    answer: String.raw`int sum = 0;
for (int i = 2; i <= 100; i += 2) sum += i;
System.out.println(sum);`,
    kw: ["for", "sum +="],
    demo: "2550",
    exp: "2부터 2씩 늘리면 짝수만 돌 수 있어요. 1부터 돌면서 <code>if (i % 2 == 0)</code>로 걸러도 돼요."
  },
  {
    n: 422,
    ch: 4,
    lv: 1,
    t: "self",
    kind: "m",
    q: "점수를 받아 90 이상 A, 80 이상 B, 70 이상 C, 60 이상 D, 나머지 F를 돌려주는 <code>static char grade(int score)</code>를 if-else if로 만드세요.",
    code: "System.out.println(grade(95) + \" \" + grade(85) + \" \" + grade(72) + \" \" + grade(61) + \" \" + grade(50));",
    answer: String.raw`static char grade(int score) {
    if (score >= 90) return 'A';
    else if (score >= 80) return 'B';
    else if (score >= 70) return 'C';
    else if (score >= 60) return 'D';
    else return 'F';
}`,
    kw: ["if", "else if", ">= 90"],
    demo: "A B C D F",
    exp: "위에서부터 차례로 검사하므로 아래 조건에 “90 미만”을 다시 쓸 필요가 없어요."
  },
  {
    n: 423,
    ch: 4,
    lv: 1,
    t: "self",
    kind: "b",
    q: "구구단 3단을 <code>3 x 1 = 3</code> 형태로 9줄 출력하세요.",
    answer: String.raw`for (int i = 1; i <= 9; i++) {
    System.out.println("3 x " + i + " = " + 3 * i);
}`,
    kw: ["for", "3 * i"],
    demo: String.raw`3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27`,
    exp: "곱셈(*)은 덧셈(+)보다 먼저 계산되므로 괄호가 없어도 3 * i가 먼저 계산돼요."
  },
  {
    n: 424,
    ch: 4,
    lv: 2,
    t: "self",
    kind: "m",
    q: "정수 n을 받아 별로 직각삼각형을 출력하는 <code>static void triangle(int n)</code>을 중첩 for문으로 만드세요.",
    code: "triangle(4);",
    answer: String.raw`static void triangle(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) System.out.print("*");
        System.out.println();
    }
}`,
    kw: ["for", "j <= i", "println()"],
    demo: String.raw`*
**
***
****`,
    exp: "바깥 반복이 줄, 안쪽 반복이 그 줄의 별 개수예요. i번째 줄에 별을 i개 찍어요."
  },
  {
    n: 425,
    ch: 4,
    lv: 2,
    t: "self",
    kind: "m",
    q: "정수의 각 자리 숫자를 더한 값을 돌려주는 <code>static int digitSum(int n)</code>을 while문으로 만드세요.",
    code: String.raw`System.out.println(digitSum(12345));
System.out.println(digitSum(9));`,
    answer: String.raw`static int digitSum(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}`,
    kw: ["while", "% 10", "/= 10"],
    demo: String.raw`15
9`,
    exp: "% 10으로 일의 자리를 꺼내고, /= 10으로 일의 자리를 없애는 것을 0이 될 때까지 반복해요."
  },
  {
    n: 426,
    ch: 4,
    lv: 2,
    t: "self",
    kind: "b",
    q: "1~50 중에서 3의 배수이지만 5의 배수는 아닌 수의 개수를 구하세요. 조건에 맞지 않으면 <code>continue</code>로 건너뛰어요.",
    answer: String.raw`int count = 0;
for (int i = 1; i <= 50; i++) {
    if (i % 3 != 0 || i % 5 == 0) continue;
    count++;
}
System.out.println(count);`,
    kw: ["continue", "% 3", "% 5"],
    demo: "13",
    exp: "3의 배수 16개 중 15의 배수(15, 30, 45) 3개를 빼면 13개예요."
  },
  {
    n: 427,
    ch: 4,
    lv: 2,
    t: "self",
    kind: "m",
    q: "월(1~12)을 받아 계절을 돌려주는 <code>static String season(int month)</code>를 switch로 만드세요. (3~5 봄, 6~8 여름, 9~11 가을, 12·1·2 겨울, 그 외 \"잘못된 월\")",
    code: "System.out.println(season(3) + \" \" + season(7) + \" \" + season(11) + \" \" + season(1) + \" \" + season(13));",
    answer: String.raw`static String season(int month) {
    return switch (month) {
        case 3, 4, 5 -> "봄";
        case 6, 7, 8 -> "여름";
        case 9, 10, 11 -> "가을";
        case 12, 1, 2 -> "겨울";
        default -> "잘못된 월";
    };
}`,
    kw: ["switch", "case 3, 4, 5", "default"],
    demo: "봄 여름 가을 겨울 잘못된 월",
    exp: "case에 여러 값을 쉼표로 나열할 수 있어요. 예전 방식(case 3: case 4: ... break;)으로 써도 같아요."
  },
  {
    n: 428,
    ch: 4,
    lv: 3,
    t: "self",
    kind: "m",
    q: "소수인지 판별하는 <code>static boolean isPrime(int n)</code>을 만들고, 1~30의 소수를 공백으로 구분해 한 줄에 출력하세요.",
    code: String.raw`StringBuilder sb = new StringBuilder();
for (int i = 1; i <= 30; i++) if (isPrime(i)) sb.append(i).append(' ');
System.out.println(sb.toString().trim());`,
    answer: String.raw`static boolean isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++)
        if (n % i == 0) return false;
    return true;
}`,
    kw: ["n < 2", "i * i <= n", "return false"],
    demo: "2 3 5 7 11 13 17 19 23 29",
    exp: "약수는 √n을 기준으로 짝을 이루므로 i * i <= n까지만 나눠 보면 돼요."
  },
  {
    n: 429,
    ch: 4,
    lv: 3,
    t: "self",
    kind: "m",
    q: "높이 n인 별 피라미드를 출력하는 <code>static void pyramid(int n)</code>을 만드세요. 줄 끝에는 공백이 없어야 해요.",
    code: "pyramid(3);",
    answer: String.raw`static void pyramid(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < n - i; j++) System.out.print(" ");
        for (int j = 0; j < 2 * i - 1; j++) System.out.print("*");
        System.out.println();
    }
}`,
    kw: ["n - i", "2 * i - 1"],
    demo: String.raw`  *
 ***
*****`,
    exp: "i번째 줄은 공백 n - i개, 별 2i - 1개예요. 줄마다 규칙을 표로 적어 보면 식을 찾기 쉬워요."
  },
  {
    n: 430,
    ch: 4,
    lv: 3,
    t: "self",
    kind: "m",
    q: "두 수의 최대공약수를 유클리드 호제법으로 구하는 <code>static int gcd(int a, int b)</code>와, 그것을 이용한 최소공배수 <code>static int lcm(int a, int b)</code>를 만드세요.",
    code: String.raw`System.out.println(gcd(48, 18));
System.out.println(lcm(48, 18));`,
    answer: String.raw`static int gcd(int a, int b) {
    while (b != 0) {
        int r = a % b;
        a = b;
        b = r;
    }
    return a;
}
static int lcm(int a, int b) {
    return a / gcd(a, b) * b;
}`,
    kw: ["while (b != 0)", "a % b", "a / gcd(a, b) * b"],
    demo: String.raw`6
144`,
    exp: "gcd(a, b) = gcd(b, a % b)이고 나머지가 0이 되면 그때의 a가 답이에요. lcm은 a × b ÷ gcd인데, 먼저 나눠서 곱하면 오버플로를 줄일 수 있어요."
  },
  {
    n: 431,
    ch: 5,
    lv: 1,
    t: "self",
    kind: "b",
    q: "<code>int[] score = {90, 85, 77, 100, 63};</code>의 합계와 평균(소수점 첫째 자리)을 출력하세요.",
    answer: String.raw`int[] score = {90, 85, 77, 100, 63};
int sum = 0;
for (int s : score) sum += s;
double avg = (double) sum / score.length;
System.out.println("합계: " + sum);
System.out.printf("평균: %.1f%n", avg);`,
    kw: ["for (int s : score)", "(double) sum", "score.length"],
    demo: String.raw`합계: 415
평균: 83.0`,
    exp: "평균은 sum을 double로 바꾼 뒤 나눠야 소수점이 남아요."
  },
  {
    n: 432,
    ch: 5,
    lv: 1,
    t: "self",
    kind: "b",
    q: "배열의 최댓값과 최솟값을 한 번의 반복으로 찾아 <code>최대 9, 최소 1</code> 형태로 출력하세요. 배열: <code>{7, 3, 9, 1, 5}</code>",
    answer: String.raw`int[] arr = {7, 3, 9, 1, 5};
int max = arr[0], min = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
}
System.out.println("최대 " + max + ", 최소 " + min);`,
    kw: ["max = arr[0]", "min = arr[0]", "arr[i] > max"],
    demo: "최대 9, 최소 1",
    exp: "처음 값을 0으로 두면 음수만 있는 배열에서 틀려요. 첫 요소로 시작하는 게 안전해요."
  },
  {
    n: 433,
    ch: 5,
    lv: 1,
    t: "self",
    kind: "b",
    q: "배열 <code>{1, 2, 3, 4, 5}</code>를 뒤에서부터 공백으로 구분해 한 줄로 출력하세요.",
    answer: String.raw`int[] arr = {1, 2, 3, 4, 5};
for (int i = arr.length - 1; i >= 0; i--) {
    System.out.print(arr[i]);
    if (i > 0) System.out.print(" ");
}
System.out.println();`,
    kw: ["arr.length - 1", "i >= 0", "i--"],
    demo: "5 4 3 2 1",
    exp: "마지막 인덱스는 length - 1이에요. 마지막 요소 뒤에는 공백을 넣지 않았어요."
  },
  {
    n: 434,
    ch: 5,
    lv: 2,
    t: "self",
    kind: "m",
    q: "배열에서 key가 처음 나오는 인덱스를 돌려주고, 없으면 -1을 돌려주는 <code>static int indexOf(int[] arr, int key)</code>를 만드세요.",
    code: String.raw`int[] a = {4, 8, 15, 16, 23, 42};
System.out.println(indexOf(a, 16));
System.out.println(indexOf(a, 7));`,
    answer: String.raw`static int indexOf(int[] arr, int key) {
    for (int i = 0; i < arr.length; i++)
        if (arr[i] == key) return i;
    return -1;
}`,
    kw: ["return i", "return -1"],
    demo: String.raw`3
-1`,
    exp: "찾으면 바로 return해서 반복을 끝내요. 끝까지 못 찾았을 때만 -1이에요."
  },
  {
    n: 435,
    ch: 5,
    lv: 2,
    t: "self",
    kind: "m",
    q: "버블 정렬로 int 배열을 오름차순 정렬하는 <code>static void bubbleSort(int[] arr)</code>를 만드세요. (Arrays.sort 사용 금지)",
    code: String.raw`int[] a = {5, 2, 8, 1, 9};
bubbleSort(a);
System.out.println(Arrays.toString(a));`,
    answer: String.raw`static void bubbleSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        boolean changed = false;
        for (int j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                int tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp;
                changed = true;
            }
        }
        if (!changed) break;
    }
}`,
    kw: ["arr[j] > arr[j + 1]", "tmp", "arr.length - 1 - i"],
    demo: "[1, 2, 5, 8, 9]",
    exp: "이웃한 두 값을 비교해 큰 값을 뒤로 보내요. 한 바퀴마다 가장 큰 값이 맨 뒤로 가므로 비교 범위를 i만큼 줄여요. 한 번도 안 바뀌면 이미 정렬된 거라 멈춰요."
  },
  {
    n: 436,
    ch: 5,
    lv: 2,
    t: "self",
    kind: "b",
    q: "2차원 배열 <code>{{1, 2, 3}, {4, 5, 6}}</code>의 각 행의 합과 각 열의 합을 출력하세요.",
    answer: String.raw`int[][] m = {{1, 2, 3}, {4, 5, 6}};
int[] rowSum = new int[m.length];
int[] colSum = new int[m[0].length];
for (int i = 0; i < m.length; i++)
    for (int j = 0; j < m[i].length; j++) {
        rowSum[i] += m[i][j];
        colSum[j] += m[i][j];
    }
System.out.println("행: " + Arrays.toString(rowSum));
System.out.println("열: " + Arrays.toString(colSum));`,
    kw: ["m.length", "m[0].length", "rowSum[i]", "colSum[j]"],
    demo: String.raw`행: [6, 15]
열: [5, 7, 9]`,
    exp: "행 개수는 m.length, 열 개수는 m[0].length예요. 한 번의 이중 반복으로 두 합을 함께 구할 수 있어요."
  },
  {
    n: 437,
    ch: 5,
    lv: 2,
    t: "self",
    kind: "m",
    q: "문자열을 뒤집어 돌려주는 <code>static String reverse(String s)</code>를 char 배열로 만드세요. (StringBuilder 사용 금지)",
    code: String.raw`System.out.println(reverse("hello"));
System.out.println(reverse("자바"));`,
    answer: String.raw`static String reverse(String s) {
    char[] ch = s.toCharArray();
    for (int i = 0, j = ch.length - 1; i < j; i++, j--) {
        char tmp = ch[i]; ch[i] = ch[j]; ch[j] = tmp;
    }
    return new String(ch);
}`,
    kw: ["toCharArray()", "new String(ch)"],
    demo: String.raw`olleh
바자`,
    exp: "양끝에서 가운데로 오며 바꿔요. for문에 변수 두 개(i, j)를 쉼표로 함께 쓸 수 있어요."
  },
  {
    n: 438,
    ch: 5,
    lv: 3,
    t: "self",
    kind: "m",
    q: "이미 정렬된 두 배열을 합쳐 정렬된 새 배열을 돌려주는 <code>static int[] merge(int[] a, int[] b)</code>를 만드세요. 합친 뒤 정렬하지 말고, 앞에서부터 하나씩 비교해 채워요.",
    code: "System.out.println(Arrays.toString(merge(new int[] {1, 4, 7}, new int[] {2, 3, 8, 9})));",
    answer: String.raw`static int[] merge(int[] a, int[] b) {
    int[] r = new int[a.length + b.length];
    int i = 0, j = 0, k = 0;
    while (i < a.length && j < b.length)
        r[k++] = a[i] <= b[j] ? a[i++] : b[j++];
    while (i < a.length) r[k++] = a[i++];
    while (j < b.length) r[k++] = b[j++];
    return r;
}`,
    kw: ["a.length + b.length", "a[i] <= b[j]", "r[k++]"],
    demo: "[1, 2, 3, 4, 7, 8, 9]",
    exp: "두 배열의 앞쪽 값을 비교해 작은 것을 넣고 그 쪽만 한 칸 나아가요. 한쪽이 끝나면 남은 쪽을 그대로 붙여요. 병합 정렬의 핵심 단계예요."
  },
  {
    n: 439,
    ch: 5,
    lv: 3,
    t: "self",
    kind: "m",
    q: "n×m 2차원 배열을 시계 방향으로 90도 회전한 m×n 배열을 돌려주는 <code>static int[][] rotate(int[][] a)</code>를 만드세요.",
    code: String.raw`int[][] a = {{1, 2}, {3, 4}, {5, 6}};
System.out.println(Arrays.deepToString(rotate(a)));`,
    answer: String.raw`static int[][] rotate(int[][] a) {
    int n = a.length, m = a[0].length;
    int[][] r = new int[m][n];
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            r[j][n - 1 - i] = a[i][j];
    return r;
}`,
    kw: ["new int[m][n]", "r[j][n - 1 - i]"],
    demo: "[[5, 3, 1], [6, 4, 2]]",
    exp: "원래 i행 j열은 회전 후 j행, (n - 1 - i)열로 가요. 작은 예를 손으로 그려 보면 식을 찾을 수 있어요."
  },
  {
    n: 440,
    ch: 5,
    lv: 3,
    t: "self",
    kind: "m",
    q: "배열을 오른쪽으로 k칸 회전한 새 배열을 돌려주는 <code>static int[] rotateRight(int[] arr, int k)</code>를 만드세요. k가 길이보다 커도 동작해야 해요.",
    code: String.raw`int[] a = {1, 2, 3, 4, 5};
System.out.println(Arrays.toString(rotateRight(a, 2)));
System.out.println(Arrays.toString(rotateRight(a, 7)));`,
    answer: String.raw`static int[] rotateRight(int[] arr, int k) {
    int n = arr.length;
    int[] r = new int[n];
    if (n == 0) return r;
    k %= n;
    for (int i = 0; i < n; i++) r[(i + k) % n] = arr[i];
    return r;
}`,
    kw: ["k %= n", "(i + k) % n"],
    demo: String.raw`[4, 5, 1, 2, 3]
[4, 5, 1, 2, 3]`,
    exp: "각 요소는 (i + k) % n 위치로 가요. k를 n으로 나눈 나머지만 의미가 있어서 먼저 줄여요. 빈 배열은 % 0이 되지 않도록 먼저 처리해요."
  },
  {
    n: 441,
    ch: 6,
    lv: 1,
    t: "self",
    kind: "c",
    q: "너비(w)와 높이(h)를 가진 <code>Rectangle</code> 클래스를 만드세요. 생성자로 값을 받고, 넓이를 돌려주는 <code>area()</code>와 둘레를 돌려주는 <code>perimeter()</code>를 가져요.",
    code: String.raw`Rectangle r = new Rectangle(3, 4);
System.out.println(r.area() + " " + r.perimeter());`,
    answer: String.raw`class Rectangle {
    int w, h;
    Rectangle(int w, int h) {
        this.w = w;
        this.h = h;
    }
    int area() { return w * h; }
    int perimeter() { return 2 * (w + h); }
}`,
    kw: ["class Rectangle", "this.w = w", "int area()", "int perimeter()"],
    demo: "12 14",
    exp: "매개변수 이름이 필드와 같으면 <code>this.w</code>로 필드를 구분해요."
  },
  {
    n: 442,
    ch: 6,
    lv: 1,
    t: "self",
    kind: "c",
    q: "이름과 국어·영어·수학 점수를 가진 <code>Student</code> 클래스를 만들고 총점 <code>getTotal()</code>과 평균 <code>getAverage()</code>(double)를 구현하세요.",
    code: String.raw`Student s = new Student("김자바", 90, 80, 75);
System.out.println(s.name + " " + s.getTotal());
System.out.printf("%.2f%n", s.getAverage());`,
    answer: String.raw`class Student {
    String name;
    int kor, eng, math;
    Student(String name, int kor, int eng, int math) {
        this.name = name; this.kor = kor; this.eng = eng; this.math = math;
    }
    int getTotal() { return kor + eng + math; }
    double getAverage() { return getTotal() / 3.0; }
}`,
    kw: ["class Student", "getTotal()", "3.0"],
    demo: String.raw`김자바 245
81.67`,
    exp: "평균은 3.0으로 나눠야 소수점이 남아요. 총점 계산은 getTotal()을 재사용했어요."
  },
  {
    n: 443,
    ch: 6,
    lv: 1,
    t: "self",
    kind: "c",
    q: "인스턴스가 만들어질 때마다 1씩 늘어나는 클래스 변수 <code>count</code>를 가진 <code>Ticket</code> 클래스를 만드세요. 각 티켓은 만들어진 순서를 <code>no</code>에 저장해요.",
    code: String.raw`Ticket a = new Ticket(), b = new Ticket(), c = new Ticket();
System.out.println(a.no + " " + b.no + " " + c.no);
System.out.println(Ticket.count);`,
    answer: String.raw`class Ticket {
    static int count = 0;
    int no;
    Ticket() {
        count++;
        no = count;
    }
}`,
    kw: ["static int count", "count++", "no = count"],
    demo: String.raw`1 2 3
3`,
    exp: "static 변수는 모든 인스턴스가 공유해서 ‘지금까지 몇 개 만들었는지’를 셀 수 있어요. no는 인스턴스 변수라 티켓마다 따로 저장돼요."
  },
  {
    n: 444,
    ch: 6,
    lv: 2,
    t: "self",
    kind: "m",
    q: "같은 이름 <code>add</code>로 (int, int), (double, double), (int, int, int)를 더하는 메서드 3개를 오버로딩하세요.",
    code: String.raw`System.out.println(add(1, 2));
System.out.println(add(1.5, 2.0));
System.out.println(add(1, 2, 3));`,
    answer: String.raw`static int add(int a, int b) { return a + b; }
static double add(double a, double b) { return a + b; }
static int add(int a, int b, int c) { return a + b + c; }`,
    kw: ["int add(int a, int b)", "double add(double a, double b)", "add(int a, int b, int c)"],
    demo: String.raw`3
3.5
6`,
    exp: "오버로딩은 매개변수의 개수나 타입이 달라야 해요. 반환 타입만 다른 것은 오버로딩이 아니에요."
  },
  {
    n: 445,
    ch: 6,
    lv: 2,
    t: "self",
    kind: "c",
    q: "<code>Point</code> 클래스를 만드세요. 기본 생성자는 <code>this(0, 0)</code>으로 다른 생성자를 부르고, 다른 점까지의 거리 <code>distance(Point p)</code>와 <code>(x, y)</code> 형태의 <code>toString()</code>을 가져요.",
    code: String.raw`Point o = new Point(), p = new Point(3, 4);
System.out.println(o + " " + p);
System.out.println(p.distance(o));`,
    answer: String.raw`class Point {
    int x, y;
    Point() { this(0, 0); }
    Point(int x, int y) { this.x = x; this.y = y; }
    double distance(Point p) {
        int dx = x - p.x, dy = y - p.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    public String toString() { return "(" + x + ", " + y + ")"; }
}`,
    kw: ["this(0, 0)", "Math.sqrt", "toString()"],
    demo: String.raw`(0, 0) (3, 4)
5.0`,
    exp: "<code>this()</code>로 생성자끼리 호출하면 초기화 코드를 한곳에 모을 수 있어요. 반드시 생성자의 첫 줄에 써야 해요."
  },
  {
    n: 446,
    ch: 6,
    lv: 2,
    t: "self",
    kind: "m",
    q: "가변인자로 정수를 받아 평균을 돌려주는 <code>static double average(int... nums)</code>를 만드세요. 인자가 없으면 0.0이에요.",
    code: String.raw`System.out.println(average(1, 2, 3, 4));
System.out.println(average(10));
System.out.println(average());`,
    answer: String.raw`static double average(int... nums) {
    if (nums.length == 0) return 0.0;
    int sum = 0;
    for (int n : nums) sum += n;
    return (double) sum / nums.length;
}`,
    kw: ["int... nums", "nums.length == 0", "(double) sum"],
    demo: String.raw`2.5
10.0
0.0`,
    exp: "가변인자는 메서드 안에서 배열로 다뤄요. 인자가 없으면 길이 0인 배열이라 0으로 나누지 않게 먼저 검사해요."
  },
  {
    n: 447,
    ch: 6,
    lv: 2,
    t: "self",
    kind: "c",
    q: "잔액(balance)을 private으로 감춘 <code>BankAccount</code>를 만드세요. <code>deposit(int)</code>, 잔액이 부족하면 false를 돌려주는 <code>boolean withdraw(int)</code>, <code>getBalance()</code>를 가져요.",
    code: String.raw`BankAccount acc = new BankAccount(1000);
acc.deposit(500);
System.out.println(acc.withdraw(2000));
System.out.println(acc.withdraw(300));
System.out.println(acc.getBalance());`,
    answer: String.raw`class BankAccount {
    private int balance;
    BankAccount(int balance) { this.balance = balance; }
    void deposit(int money) { if (money > 0) balance += money; }
    boolean withdraw(int money) {
        if (money > balance) return false;
        balance -= money;
        return true;
    }
    int getBalance() { return balance; }
}`,
    kw: ["private int balance", "boolean withdraw", "money > balance", "getBalance()"],
    demo: String.raw`false
true
1200`,
    exp: "필드를 private으로 두고 메서드로만 바꾸게 하면 잔액이 음수가 되는 일을 막을 수 있어요(캡슐화)."
  },
  {
    n: 448,
    ch: 6,
    lv: 3,
    t: "self",
    kind: "m",
    q: "재귀 호출로 n!을 구하는 <code>static long factorial(int n)</code>과 x의 n제곱을 구하는 <code>static long power(int x, int n)</code>을 만드세요.",
    code: String.raw`System.out.println(factorial(10));
System.out.println(power(2, 10));`,
    answer: String.raw`static long factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
static long power(int x, int n) {
    if (n == 0) return 1;
    return x * power(x, n - 1);
}`,
    kw: ["factorial(n - 1)", "power(x, n - 1)", "return 1"],
    demo: String.raw`3628800
1024`,
    exp: "재귀 메서드는 반드시 멈추는 조건(n <= 1, n == 0)이 있어야 해요. 없으면 StackOverflowError가 나요."
  },
  {
    n: 449,
    ch: 6,
    lv: 3,
    t: "self",
    kind: "c",
    q: "분수를 나타내는 <code>Fraction</code> 클래스를 만드세요. 분자·분모를 받아 <b>기약분수로</b> 저장하고, 더한 결과를 새 Fraction으로 돌려주는 <code>add(Fraction o)</code>와 <code>\"분자/분모\"</code> 형태의 toString()을 가져요.",
    code: String.raw`Fraction a = new Fraction(1, 2), b = new Fraction(1, 3);
System.out.println(a.add(b));
System.out.println(new Fraction(1, 4).add(new Fraction(1, 4)));
System.out.println(new Fraction(6, 8));`,
    answer: String.raw`class Fraction {
    final int num, den;
    Fraction(int num, int den) {
        int g = gcd(Math.abs(num), Math.abs(den));
        this.num = num / g;
        this.den = den / g;
    }
    static int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }
    Fraction add(Fraction o) {
        return new Fraction(num * o.den + o.num * den, den * o.den);
    }
    public String toString() { return num + "/" + den; }
}`,
    kw: ["gcd", "num * o.den + o.num * den", "den * o.den", "new Fraction"],
    demo: String.raw`5/6
1/2
3/4`,
    exp: "a/b + c/d = (ad + cb)/bd이고, 생성자에서 최대공약수로 나눠 항상 기약분수로 만들어요. 결과를 새 객체로 돌려주면 원래 분수가 바뀌지 않아요."
  },
  {
    n: 450,
    ch: 6,
    lv: 3,
    t: "self",
    kind: "m",
    q: "정렬된 배열에서 key의 위치를 찾는 <b>재귀</b> 이진 탐색 <code>static int binarySearch(int[] a, int key, int lo, int hi)</code>를 만드세요. 없으면 -1이에요.",
    code: String.raw`int[] a = {1, 3, 5, 7, 9, 11};
System.out.println(binarySearch(a, 7, 0, a.length - 1));
System.out.println(binarySearch(a, 4, 0, a.length - 1));`,
    answer: String.raw`static int binarySearch(int[] a, int key, int lo, int hi) {
    if (lo > hi) return -1;
    int mid = (lo + hi) / 2;
    if (a[mid] == key) return mid;
    if (a[mid] < key) return binarySearch(a, key, mid + 1, hi);
    return binarySearch(a, key, lo, mid - 1);
}`,
    kw: ["lo > hi", "(lo + hi) / 2", "mid + 1", "mid - 1"],
    demo: String.raw`3
-1`,
    exp: "가운데 값과 비교해 찾을 범위를 절반씩 줄여요. 범위가 비면(lo > hi) 없는 거예요."
  },
  {
    n: 451,
    ch: 7,
    lv: 1,
    t: "self",
    kind: "c",
    q: "<code>Animal</code> 클래스(<code>String sound()</code>는 \"...\")를 만들고, 이를 상속해 sound()를 오버라이딩한 <code>Dog</code>(\"멍멍\")와 <code>Cat</code>(\"야옹\")을 만드세요.",
    code: String.raw`Animal[] arr = { new Dog(), new Cat(), new Animal() };
for (Animal a : arr) System.out.println(a.sound());`,
    answer: String.raw`class Animal {
    String sound() { return "..."; }
}
class Dog extends Animal {
    @Override String sound() { return "멍멍"; }
}
class Cat extends Animal {
    @Override String sound() { return "야옹"; }
}`,
    kw: ["extends Animal", "@Override", "String sound()"],
    demo: String.raw`멍멍
야옹
...`,
    exp: "조상 타입 배열에 여러 자손 객체를 담아도 각자 오버라이딩한 메서드가 호출돼요(다형성)."
  },
  {
    n: 452,
    ch: 7,
    lv: 1,
    t: "self",
    kind: "c",
    q: "추상 클래스 <code>Shape</code>(추상 메서드 <code>double area()</code>)를 만들고, 반지름을 받는 <code>Circle</code>과 가로·세로를 받는 <code>Rect</code>로 구현하세요.",
    code: String.raw`Shape[] shapes = { new Circle(1), new Rect(2, 3) };
double total = 0;
for (Shape s : shapes) total += s.area();
System.out.printf("%.2f%n", total);`,
    answer: String.raw`abstract class Shape {
    abstract double area();
}
class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    double area() { return Math.PI * r * r; }
}
class Rect extends Shape {
    double w, h;
    Rect(double w, double h) { this.w = w; this.h = h; }
    double area() { return w * h; }
}`,
    kw: ["abstract class Shape", "abstract double area()", "extends Shape"],
    demo: "9.14",
    exp: "추상 클래스는 직접 객체를 만들 수 없고, 자손이 추상 메서드를 모두 구현해야 객체를 만들 수 있어요."
  },
  {
    n: 453,
    ch: 7,
    lv: 1,
    t: "self",
    kind: "c",
    q: "인터페이스 <code>Greeter</code>(<code>String greet(String name)</code>)를 만들고, <code>Korean</code>(\"안녕, 이름\")과 <code>English</code>(\"Hello, 이름\")로 구현하세요.",
    code: String.raw`Greeter[] gs = { new Korean(), new English() };
for (Greeter g : gs) System.out.println(g.greet("자바"));`,
    answer: String.raw`interface Greeter {
    String greet(String name);
}
class Korean implements Greeter {
    public String greet(String name) { return "안녕, " + name; }
}
class English implements Greeter {
    public String greet(String name) { return "Hello, " + name; }
}`,
    kw: ["interface Greeter", "implements Greeter", "public String greet"],
    demo: String.raw`안녕, 자바
Hello, 자바`,
    exp: "인터페이스의 메서드는 public abstract라서, 구현할 때 반드시 public을 붙여야 해요."
  },
  {
    n: 454,
    ch: 7,
    lv: 2,
    t: "self",
    kind: "c",
    q: "이름을 가진 <code>Person</code>과 이를 상속해 급여를 더한 <code>Employee</code>를 만드세요. Employee 생성자는 <code>super(name)</code>을 호출하고, toString()은 <code>super.toString()</code>에 \"(급여)\"를 붙여요.",
    code: String.raw`Person p = new Employee("김자바", 300);
System.out.println(p);
System.out.println(new Person("이자바"));`,
    answer: String.raw`class Person {
    String name;
    Person(String name) { this.name = name; }
    public String toString() { return name; }
}
class Employee extends Person {
    int salary;
    Employee(String name, int salary) {
        super(name);
        this.salary = salary;
    }
    public String toString() { return super.toString() + "(" + salary + ")"; }
}`,
    kw: ["super(name)", "super.toString()", "extends Person"],
    demo: String.raw`김자바(300)
이자바`,
    exp: "조상에 기본 생성자가 없으면 자손 생성자 첫 줄에서 super(...)를 꼭 호출해야 해요. super.메서드()로 조상의 구현을 재사용할 수 있어요."
  },
  {
    n: 455,
    ch: 7,
    lv: 2,
    t: "self",
    kind: "c",
    q: "가격을 가진 <code>Product</code>와 자손 <code>Tv</code>, <code>Computer</code>가 있어요. 제품 배열의 가격 합계와 그중 Tv의 개수를 출력하는 <code>static void summary(Product[] ps)</code>를 만드세요.",
    code: "Shop.summary(new Product[] { new Tv(), new Computer(), new Tv() });",
    answer: String.raw`class Product {
    int price;
    Product(int price) { this.price = price; }
}
class Tv extends Product { Tv() { super(100); } }
class Computer extends Product { Computer() { super(150); } }

class Shop {
    static void summary(Product[] ps) {
        int sum = 0, tv = 0;
        for (Product p : ps) {
            sum += p.price;
            if (p instanceof Tv) tv++;
        }
        System.out.println("합계 " + sum + ", Tv " + tv + "대");
    }
}`,
    kw: ["Product[] ps", "instanceof Tv", "sum += p.price"],
    demo: "합계 350, Tv 2대",
    exp: "매개변수를 조상 타입 배열로 받으면 어떤 제품이든 담을 수 있어요. 실제 타입이 필요할 때는 instanceof로 확인해요."
  },
  {
    n: 456,
    ch: 7,
    lv: 2,
    t: "self",
    kind: "c",
    q: "금액을 나타내는 <b>불변</b> 클래스 <code>Money</code>를 만드세요. 필드는 <code>private final</code>이고, <code>plus(Money)</code>는 자신을 바꾸지 않고 새 Money를 돌려줘요.",
    code: String.raw`Money a = new Money(1000);
Money b = a.plus(new Money(500));
System.out.println(a + " " + b);`,
    answer: String.raw`final class Money {
    private final int amount;
    Money(int amount) { this.amount = amount; }
    int getAmount() { return amount; }
    Money plus(Money o) { return new Money(amount + o.amount); }
    public String toString() { return amount + "원"; }
}`,
    kw: ["private final int amount", "new Money(amount + o.amount)", "final class"],
    demo: "1000원 1500원",
    exp: "필드를 final로, 변경 메서드는 새 객체를 돌려주게 만들면 불변 객체가 돼요. 클래스에 final을 붙이면 자손이 이 규칙을 깨지 못해요."
  },
  {
    n: 457,
    ch: 7,
    lv: 2,
    t: "self",
    kind: "c",
    q: "할인율을 돌려주는 <code>int rate()</code>와, 그 할인율을 적용한 가격을 돌려주는 디폴트 메서드 <code>apply(int price)</code>를 가진 인터페이스 <code>Discount</code>를 만들고, 20% 할인하는 <code>Vip</code>로 구현하세요.",
    code: String.raw`Discount d = new Vip();
System.out.println(d.apply(10000));`,
    answer: String.raw`interface Discount {
    int rate();
    default int apply(int price) {
        return price * (100 - rate()) / 100;
    }
}
class Vip implements Discount {
    public int rate() { return 20; }
}`,
    kw: ["default int apply", "implements Discount", "public int rate()"],
    demo: "8000",
    exp: "디폴트 메서드는 몸통을 가진 인터페이스 메서드예요. 구현 클래스는 추상 메서드(rate)만 구현하면 apply를 그대로 쓸 수 있어요."
  },
  {
    n: 458,
    ch: 7,
    lv: 3,
    t: "self",
    kind: "c",
    q: "인터페이스 <code>Calc</code>(<code>int calc(int a, int b)</code>)를 만들고, 덧셈·뺄셈 Calc 객체를 <b>익명 클래스</b>로 만들어 배열로 돌려주는 <code>Ops.makeCalcs()</code>를 작성하세요.",
    code: String.raw`Calc[] cs = Ops.makeCalcs();
System.out.println(cs[0].calc(5, 3) + " " + cs[1].calc(5, 3));`,
    answer: String.raw`interface Calc {
    int calc(int a, int b);
}
class Ops {
    static Calc[] makeCalcs() {
        Calc plus = new Calc() {
            public int calc(int a, int b) { return a + b; }
        };
        Calc minus = new Calc() {
            public int calc(int a, int b) { return a - b; }
        };
        return new Calc[] { plus, minus };
    }
}`,
    kw: ["new Calc()", "public int calc", "new Calc[]"],
    demo: "8 2",
    exp: "익명 클래스는 이름 없이 선언과 객체 생성을 한 번에 해요. 한 번만 쓸 구현에 편리하고, 14장의 람다로 더 짧게 쓸 수 있어요."
  },
  {
    n: 459,
    ch: 7,
    lv: 3,
    t: "self",
    kind: "c",
    q: "음료 만드는 순서를 정한 추상 클래스 <code>Beverage</code>를 만드세요. <code>final String make()</code>는 \"물 끓이기 → (우리기) → 컵에 따르기\"를 돌려주고, 가운데 단계 <code>brew()</code>만 자손 <code>Coffee</code>(\"커피 내리기\"), <code>Tea</code>(\"찻잎 우리기\")가 구현해요.",
    code: String.raw`System.out.println(new Coffee().make());
System.out.println(new Tea().make());`,
    answer: String.raw`abstract class Beverage {
    final String make() {
        return boil() + " → " + brew() + " → 컵에 따르기";
    }
    String boil() { return "물 끓이기"; }
    abstract String brew();
}
class Coffee extends Beverage { String brew() { return "커피 내리기"; } }
class Tea extends Beverage { String brew() { return "찻잎 우리기"; } }`,
    kw: ["final String make()", "abstract String brew()", "extends Beverage"],
    demo: String.raw`물 끓이기 → 커피 내리기 → 컵에 따르기
물 끓이기 → 찻잎 우리기 → 컵에 따르기`,
    exp: "전체 순서는 조상이 final 메서드로 고정하고, 바뀌는 부분만 자손이 채우는 방식이에요(템플릿 메서드 패턴)."
  },
  {
    n: 460,
    ch: 7,
    lv: 3,
    t: "self",
    kind: "c",
    q: "인터페이스 <code>Flyable</code>(<code>String fly()</code>)와 <code>Swimmable</code>(<code>String swim()</code>)을 만들고, 둘 다 구현한 <code>Duck</code>, 헤엄만 치는 <code>Fish</code>를 만드세요. 그리고 객체가 할 수 있는 일을 모두 출력하는 <code>static void abilities(Object o)</code>를 패턴 매칭 instanceof로 작성하세요.",
    code: String.raw`Zoo.abilities(new Duck());
Zoo.abilities(new Fish());`,
    answer: String.raw`interface Flyable { String fly(); }
interface Swimmable { String swim(); }
class Duck implements Flyable, Swimmable {
    public String fly() { return "파닥파닥"; }
    public String swim() { return "첨벙첨벙"; }
}
class Fish implements Swimmable {
    public String swim() { return "살랑살랑"; }
}
class Zoo {
    static void abilities(Object o) {
        String name = o.getClass().getSimpleName();
        if (o instanceof Flyable f) System.out.println(name + " 날기: " + f.fly());
        if (o instanceof Swimmable s) System.out.println(name + " 헤엄: " + s.swim());
    }
}`,
    kw: ["implements Flyable, Swimmable", "instanceof Flyable f", "instanceof Swimmable s"],
    demo: String.raw`Duck 날기: 파닥파닥
Duck 헤엄: 첨벙첨벙
Fish 헤엄: 살랑살랑`,
    exp: "클래스는 인터페이스를 여러 개 구현할 수 있어요. instanceof 뒤에 변수 이름을 쓰면 확인과 형변환을 한 번에 할 수 있어요."
  },
  {
    n: 461,
    ch: 8,
    lv: 1,
    t: "self",
    kind: "m",
    q: "문자열을 정수로 바꾸되, 바꿀 수 없으면 기본값을 돌려주는 <code>static int toInt(String s, int def)</code>를 만드세요.",
    code: String.raw`System.out.println(toInt("12", 0));
System.out.println(toInt("abc", -1));
System.out.println(toInt(" 7", 0));`,
    answer: String.raw`static int toInt(String s, int def) {
    try {
        return Integer.parseInt(s);
    } catch (NumberFormatException e) {
        return def;
    }
}`,
    kw: ["try", "Integer.parseInt", "catch (NumberFormatException e)"],
    demo: String.raw`12
-1
0`,
    exp: "숫자가 아닌 문자열을 parseInt하면 NumberFormatException이 나요. 처리하지 않으면 프로그램이 멈춰요."
  },
  {
    n: 462,
    ch: 8,
    lv: 1,
    t: "self",
    kind: "m",
    q: "<code>a / b</code>를 돌려주되 0으로 나누면 \"0으로 나눌 수 없어요\"를 출력하고 0을 돌려주는 <code>static int divide(int a, int b)</code>를 try-catch로 만드세요.",
    code: String.raw`System.out.println(divide(10, 3));
System.out.println(divide(1, 0));`,
    answer: String.raw`static int divide(int a, int b) {
    try {
        return a / b;
    } catch (ArithmeticException e) {
        System.out.println("0으로 나눌 수 없어요");
        return 0;
    }
}`,
    kw: ["catch (ArithmeticException e)", "return 0"],
    demo: String.raw`3
0으로 나눌 수 없어요
0`,
    exp: "정수를 0으로 나누면 ArithmeticException이 나요. (실수 나눗셈은 Infinity가 되고 예외가 안 나요.)"
  },
  {
    n: 463,
    ch: 8,
    lv: 1,
    t: "self",
    kind: "m",
    q: "<code>fail</code>이 true면 \"실패\" 메시지로 RuntimeException을 던지는 작업을 하고, 예외는 \"에러: 메시지\"로 출력하며, 성공·실패와 상관없이 마지막에 \"정리\"를 출력하는 <code>static void process(boolean fail)</code>를 만드세요.",
    code: String.raw`process(false);
process(true);`,
    answer: String.raw`static void process(boolean fail) {
    try {
        if (fail) throw new RuntimeException("실패");
        System.out.println("처리 완료");
    } catch (RuntimeException e) {
        System.out.println("에러: " + e.getMessage());
    } finally {
        System.out.println("정리");
    }
}`,
    kw: ["throw new RuntimeException", "getMessage()", "finally"],
    demo: String.raw`처리 완료
정리
에러: 실패
정리`,
    exp: "finally 블럭은 예외가 나도, 안 나도 항상 실행돼서 자원 정리 코드를 두는 곳이에요."
  },
  {
    n: 464,
    ch: 8,
    lv: 2,
    t: "self",
    kind: "c",
    q: "checked 예외 <code>InvalidAgeException</code>을 만들고, 나이가 0~150이 아니면 이 예외를 던지는 <code>static void checkAge(int age) throws InvalidAgeException</code>를 작성하세요.",
    code: String.raw`for (int age : new int[] {25, -3, 200}) {
    try {
        Validator.checkAge(age);
    } catch (InvalidAgeException e) {
        System.out.println(e.getMessage());
    }
}`,
    answer: String.raw`class InvalidAgeException extends Exception {
    InvalidAgeException(String msg) { super(msg); }
}
class Validator {
    static void checkAge(int age) throws InvalidAgeException {
        if (age < 0 || age > 150) throw new InvalidAgeException("잘못된 나이: " + age);
        System.out.println("나이 확인: " + age);
    }
}`,
    kw: ["extends Exception", "super(msg)", "throws InvalidAgeException", "throw new InvalidAgeException"],
    demo: String.raw`나이 확인: 25
잘못된 나이: -3
잘못된 나이: 200`,
    exp: "Exception을 상속하면 checked 예외라 메서드에 throws를 선언하고, 호출하는 쪽에서 반드시 처리해야 해요."
  },
  {
    n: 465,
    ch: 8,
    lv: 2,
    t: "self",
    kind: "m",
    q: "배열의 i번째 값을 돌려주되, 범위를 벗어나면 기본값을 돌려주는 <code>static int getOr(int[] arr, int i, int def)</code>를 예외 처리로 만드세요.",
    code: String.raw`int[] a = {10, 20, 30};
System.out.println(getOr(a, 1, -1) + " " + getOr(a, 3, -1) + " " + getOr(a, -1, 0));`,
    answer: String.raw`static int getOr(int[] arr, int i, int def) {
    try {
        return arr[i];
    } catch (ArrayIndexOutOfBoundsException e) {
        return def;
    }
}`,
    kw: ["catch (ArrayIndexOutOfBoundsException e)", "return def"],
    demo: "20 -1 0",
    exp: "범위를 벗어난 인덱스는 ArrayIndexOutOfBoundsException이에요. 실무에서는 <code>if (i >= 0 && i < arr.length)</code>로 미리 검사하는 게 더 일반적이에요."
  },
  {
    n: 466,
    ch: 8,
    lv: 2,
    t: "self",
    kind: "m",
    q: "두 문자열을 정수로 바꿔 나눈 결과를 출력하는 <code>static void parseAndDivide(String a, String b)</code>를 만드세요. 숫자 변환 오류와 0으로 나누기를 <b>멀티 catch 하나</b>로 처리해 \"잘못된 입력: 예외클래스이름\"을 출력해요.",
    code: String.raw`parseAndDivide("10", "2");
parseAndDivide("10", "x");
parseAndDivide("10", "0");`,
    answer: String.raw`static void parseAndDivide(String a, String b) {
    try {
        System.out.println(Integer.parseInt(a) / Integer.parseInt(b));
    } catch (NumberFormatException | ArithmeticException e) {
        System.out.println("잘못된 입력: " + e.getClass().getSimpleName());
    }
}`,
    kw: ["NumberFormatException | ArithmeticException", "getSimpleName()"],
    demo: String.raw`5
잘못된 입력: NumberFormatException
잘못된 입력: ArithmeticException`,
    exp: "처리 방법이 같은 예외는 | 로 묶어 한 catch에서 처리해요. 실제로 어떤 예외인지는 e.getClass()로 알 수 있어요."
  },
  {
    n: 467,
    ch: 8,
    lv: 2,
    t: "self",
    kind: "c",
    q: "열릴 때 \"열기 이름\", 닫힐 때 \"닫기 이름\"을 출력하는 <code>Resource</code> 클래스를 <code>AutoCloseable</code>로 구현하세요. try-with-resources로 A, B 두 자원을 열면 닫히는 순서를 확인해요.",
    code: String.raw`try (Resource a = new Resource("A"); Resource b = new Resource("B")) {
    System.out.println("작업");
}`,
    answer: String.raw`class Resource implements AutoCloseable {
    String name;
    Resource(String name) {
        this.name = name;
        System.out.println("열기 " + name);
    }
    public void close() {
        System.out.println("닫기 " + name);
    }
}`,
    kw: ["implements AutoCloseable", "public void close()"],
    demo: String.raw`열기 A
열기 B
작업
닫기 B
닫기 A`,
    exp: "try-with-resources는 블럭이 끝나면 close()를 자동으로 불러요. 여러 자원은 연 순서의 <b>반대로</b> 닫혀요."
  },
  {
    n: 468,
    ch: 8,
    lv: 3,
    t: "self",
    kind: "m",
    q: "문자열 배열에서 처음으로 정수로 바꿀 수 있는 값을 돌려주고, 하나도 없으면 <code>IllegalStateException(\"숫자 없음\")</code>을 던지는 <code>static int firstNumber(String[] arr)</code>를 만드세요.",
    code: String.raw`System.out.println(firstNumber(new String[] {"a", "", "42", "7"}));
try {
    firstNumber(new String[] {"x", "y"});
} catch (IllegalStateException e) {
    System.out.println(e.getMessage());
}`,
    answer: String.raw`static int firstNumber(String[] arr) {
    for (String s : arr) {
        try {
            return Integer.parseInt(s);
        } catch (NumberFormatException e) {
            // 다음 값으로 넘어간다
        }
    }
    throw new IllegalStateException("숫자 없음");
}`,
    kw: ["for", "catch (NumberFormatException e)", "throw new IllegalStateException"],
    demo: String.raw`42
숫자 없음`,
    exp: "반복문 안에 try-catch를 두면 실패한 값은 건너뛰고 계속 시도할 수 있어요. 끝까지 못 찾았을 때 예외를 던져 호출한 쪽에 알려요."
  },
  {
    n: 469,
    ch: 8,
    lv: 3,
    t: "self",
    kind: "c",
    q: "설정값을 읽는 <code>static int readPort(String value)</code>를 만드세요. 숫자가 아니면 NumberFormatException을 원인으로 연결한 사용자정의 unchecked 예외 <code>ConfigException(\"포트 설정 오류: 값\")</code>을 던져요.",
    code: String.raw`System.out.println(Config.readPort("8080"));
try {
    Config.readPort("80a");
} catch (ConfigException e) {
    System.out.println(e.getMessage());
    System.out.println("원인: " + e.getCause().getClass().getSimpleName());
}`,
    answer: String.raw`class ConfigException extends RuntimeException {
    ConfigException(String msg, Throwable cause) { super(msg, cause); }
}
class Config {
    static int readPort(String value) {
        try {
            return Integer.parseInt(value);
        } catch (NumberFormatException e) {
            throw new ConfigException("포트 설정 오류: " + value, e);
        }
    }
}`,
    kw: ["extends RuntimeException", "super(msg, cause)", "throw new ConfigException", ", e)"],
    demo: String.raw`8080
포트 설정 오류: 80a
원인: NumberFormatException`,
    exp: "원래 예외를 cause로 넘기면(연결된 예외) 바깥에서 getCause()로 진짜 원인을 확인할 수 있어요."
  },
  {
    n: 470,
    ch: 8,
    lv: 3,
    t: "self",
    kind: "c",
    q: "비밀번호 검사용 예외 계층을 만드세요: <code>ValidationException</code>(checked) 아래에 <code>EmptyException</code>, <code>LengthException</code>. <code>static void validate(String pw)</code>는 비었으면 Empty, 8자 미만이면 Length 예외를 던져요. 사용 예처럼 catch 순서를 정해 처리해요.",
    code: String.raw`for (String pw : new String[] {"", "abc", "javajava"}) {
    try {
        Pw.validate(pw);
    } catch (EmptyException e) {
        System.out.println("[빈 값] " + e.getMessage());
    } catch (ValidationException e) {
        System.out.println("[검증 실패] " + e.getMessage());
    }
}`,
    answer: String.raw`class ValidationException extends Exception {
    ValidationException(String msg) { super(msg); }
}
class EmptyException extends ValidationException {
    EmptyException() { super("비밀번호가 비었어요"); }
}
class LengthException extends ValidationException {
    LengthException(int len) { super("8자 이상이어야 해요 (현재 " + len + "자)"); }
}
class Pw {
    static void validate(String pw) throws ValidationException {
        if (pw == null || pw.isEmpty()) throw new EmptyException();
        if (pw.length() < 8) throw new LengthException(pw.length());
        System.out.println("OK: " + pw);
    }
}`,
    kw: ["extends ValidationException", "throws ValidationException", "throw new LengthException"],
    demo: String.raw`[빈 값] 비밀번호가 비었어요
[검증 실패] 8자 이상이어야 해요 (현재 3자)
OK: javajava`,
    exp: "catch는 위에서부터 검사하므로 자손 예외(EmptyException)를 조상(ValidationException)보다 먼저 써야 해요. 반대로 쓰면 컴파일 에러예요."
  },
  {
    n: 471,
    ch: 9,
    lv: 1,
    t: "self",
    kind: "m",
    q: "문자열에서 특정 문자가 몇 번 나오는지 세는 <code>static int countChar(String s, char c)</code>를 만드세요.",
    code: String.raw`System.out.println(countChar("banana", 'a'));
System.out.println(countChar("자바자바", '자'));`,
    answer: String.raw`static int countChar(String s, char c) {
    int cnt = 0;
    for (int i = 0; i < s.length(); i++)
        if (s.charAt(i) == c) cnt++;
    return cnt;
}`,
    kw: ["s.length()", "s.charAt(i)"],
    demo: String.raw`3
2`,
    exp: "charAt(i)로 한 글자씩 꺼내 비교해요."
  },
  {
    n: 472,
    ch: 9,
    lv: 1,
    t: "self",
    kind: "m",
    q: "단어의 첫 글자만 대문자로 바꾸는 <code>static String capitalize(String s)</code>를 만드세요. 빈 문자열은 그대로 돌려줘요.",
    code: String.raw`System.out.println(capitalize("java"));
System.out.println(capitalize("x"));
System.out.println("[" + capitalize("") + "]");`,
    answer: String.raw`static String capitalize(String s) {
    if (s.isEmpty()) return s;
    return s.substring(0, 1).toUpperCase() + s.substring(1);
}`,
    kw: ["substring(0, 1)", "toUpperCase()", "substring(1)"],
    demo: String.raw`Java
X
[]`,
    exp: "substring(1)은 1번 글자부터 끝까지예요. 빈 문자열에 substring(0, 1)을 하면 예외가 나서 먼저 검사해요."
  },
  {
    n: 473,
    ch: 9,
    lv: 1,
    t: "self",
    kind: "m",
    q: "두 점 (x1, y1), (x2, y2) 사이의 거리를 돌려주는 <code>static double dist(double x1, double y1, double x2, double y2)</code>를 Math 클래스로 만드세요.",
    code: String.raw`System.out.println(dist(0, 0, 3, 4));
System.out.println(dist(1, 1, 1, 1));`,
    answer: String.raw`static double dist(double x1, double y1, double x2, double y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}`,
    kw: ["Math.sqrt", "Math.pow"],
    demo: String.raw`5.0
0.0`,
    exp: "피타고라스 정리예요. <code>Math.hypot(dx, dy)</code>를 써도 같아요."
  },
  {
    n: 474,
    ch: 9,
    lv: 2,
    t: "self",
    kind: "c",
    q: "x, y가 같으면 같은 점으로 보도록 <code>Point</code> 클래스의 <code>equals()</code>와 <code>hashCode()</code>를 오버라이딩하세요.",
    code: String.raw`Point a = new Point(1, 2), b = new Point(1, 2);
System.out.println(a == b);
System.out.println(a.equals(b));
System.out.println(new HashSet<>(List.of(a, b)).size());`,
    answer: String.raw`class Point {
    final int x, y;
    Point(int x, int y) { this.x = x; this.y = y; }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Point p)) return false;
        return x == p.x && y == p.y;
    }
    @Override
    public int hashCode() { return Objects.hash(x, y); }
}`,
    kw: ["public boolean equals(Object o)", "instanceof Point", "public int hashCode()", "Objects.hash"],
    demo: String.raw`false
true
1`,
    exp: "equals의 매개변수는 Object여야 오버라이딩이에요. equals가 같으면 hashCode도 같아야 HashSet·HashMap에서 같은 것으로 취급돼요."
  },
  {
    n: 475,
    ch: 9,
    lv: 2,
    t: "self",
    kind: "m",
    q: "정수에 세 자리마다 쉼표를 넣은 문자열을 돌려주는 <code>static String withComma(long n)</code>을 StringBuilder로 만드세요. (format, DecimalFormat 사용 금지, 음수 고려 안 함)",
    code: String.raw`System.out.println(withComma(1234567));
System.out.println(withComma(100));
System.out.println(withComma(1000));`,
    answer: String.raw`static String withComma(long n) {
    StringBuilder sb = new StringBuilder(String.valueOf(n));
    for (int i = sb.length() - 3; i > 0; i -= 3) sb.insert(i, ',');
    return sb.toString();
}`,
    kw: ["StringBuilder", "insert(i", "i -= 3"],
    demo: String.raw`1,234,567
100
1,000`,
    exp: "뒤에서부터 3칸씩 앞으로 오며 쉼표를 끼워 넣어요. 앞에서부터 넣으면 위치가 계속 밀려서 계산이 복잡해져요."
  },
  {
    n: 476,
    ch: 9,
    lv: 2,
    t: "self",
    kind: "m",
    q: "연속된 같은 문자를 “문자+개수”로 압축하는 <code>static String compress(String s)</code>를 만드세요. 예: \"aaabbc\" → \"a3b2c1\"",
    code: String.raw`System.out.println(compress("aaabbc"));
System.out.println(compress("abcd"));
System.out.println("[" + compress("") + "]");`,
    answer: String.raw`static String compress(String s) {
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < s.length(); ) {
        char c = s.charAt(i);
        int j = i;
        while (j < s.length() && s.charAt(j) == c) j++;
        sb.append(c).append(j - i);
        i = j;
    }
    return sb.toString();
}`,
    kw: ["StringBuilder", "append(c)", "j - i"],
    demo: String.raw`a3b2c1
a1b1c1d1
[]`,
    exp: "같은 문자가 끝나는 위치 j를 찾고, 개수(j - i)를 붙인 뒤 i를 j로 옮겨요."
  },
  {
    n: 477,
    ch: 9,
    lv: 2,
    t: "self",
    kind: "m",
    q: "공백이 여러 개 섞인 문장의 단어 수를 돌려주는 <code>static int countWords(String s)</code>를 만드세요.",
    code: String.raw`System.out.println(countWords("  hello   java  world "));
System.out.println(countWords("   "));`,
    answer: String.raw`static int countWords(String s) {
    String t = s.trim();
    if (t.isEmpty()) return 0;
    return t.split("\\s+").length;
}`,
    kw: ["trim()", "split(\"\\\\s+\")", "isEmpty()"],
    demo: String.raw`3
0`,
    exp: "정규식 <code>\\s+</code>는 공백 하나 이상이에요. 앞 공백이 있으면 split 결과 첫 칸이 빈 문자열이 되므로 먼저 trim해요."
  },
  {
    n: 478,
    ch: 9,
    lv: 3,
    t: "self",
    kind: "m",
    q: "두 문자열이 글자 구성은 같고 순서만 다른 아나그램인지 판별하는 <code>static boolean isAnagram(String a, String b)</code>를 만드세요. 대소문자는 무시해요.",
    code: String.raw`System.out.println(isAnagram("listen", "Silent"));
System.out.println(isAnagram("java", "jaav"));
System.out.println(isAnagram("java", "javas"));`,
    answer: String.raw`static boolean isAnagram(String a, String b) {
    char[] x = a.toLowerCase().toCharArray();
    char[] y = b.toLowerCase().toCharArray();
    Arrays.sort(x);
    Arrays.sort(y);
    return Arrays.equals(x, y);
}`,
    kw: ["toCharArray()", "Arrays.sort", "Arrays.equals"],
    demo: String.raw`true
true
false`,
    exp: "두 문자열의 글자를 정렬하면 아나그램일 때 똑같아져요. 배열 비교는 ==가 아니라 Arrays.equals로 해요."
  },
  {
    n: 479,
    ch: 9,
    lv: 3,
    t: "self",
    kind: "m",
    q: "간단한 이메일 형식(아이디@도메인.최상위도메인)인지 정규식으로 검사하는 <code>static boolean isEmail(String s)</code>를 만드세요. 아이디는 영문·숫자·<code>._-</code>, 도메인은 영문·숫자·<code>-</code>, 최상위 도메인은 영문 2자 이상이에요.",
    code: String.raw`for (String e : new String[] {"a.b@test.com", "bad@", "x@y.kr", "kim@mail.co.kr", "no space@a.com"})
    System.out.println(e + " → " + isEmail(e));`,
    answer: String.raw`static boolean isEmail(String s) {
    return s.matches("[\\w.-]+@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*\\.[A-Za-z]{2,}");
}`,
    kw: ["matches(", "@", "[A-Za-z]{2,}"],
    demo: String.raw`a.b@test.com → true
bad@ → false
x@y.kr → true
kim@mail.co.kr → true
no space@a.com → false`,
    exp: "matches()는 문자열 <b>전체</b>가 패턴과 맞아야 true예요. 자바 문자열에서는 역슬래시를 두 번(<code>\\\\.</code>) 써야 정규식의 <code>\\.</code>(마침표 문자)가 돼요."
  },
  {
    n: 480,
    ch: 9,
    lv: 3,
    t: "self",
    kind: "b",
    q: "BigDecimal로 (1) 0.1 + 0.2를 정확히 계산하고, (2) 원금 10000원을 연 3.5% 복리로 3년 굴린 금액을 소수점 둘째 자리에서 반올림해 출력하세요.",
    answer: String.raw`BigDecimal a = new BigDecimal("0.1"), b = new BigDecimal("0.2");
System.out.println(a.add(b));
BigDecimal money = new BigDecimal("10000");
BigDecimal rate = new BigDecimal("1.035");
BigDecimal result = money.multiply(rate.pow(3)).setScale(2, RoundingMode.HALF_UP);
System.out.println(result);`,
    kw: ["new BigDecimal(\"0.1\")", "pow(3)", "setScale(2, RoundingMode.HALF_UP)"],
    demo: String.raw`0.3
11087.18`,
    exp: "double은 0.1 + 0.2가 0.30000000000000004가 돼요. 돈 계산은 문자열로 만든 BigDecimal을 써요. <code>new BigDecimal(0.1)</code>처럼 double을 넘기면 오차까지 그대로 들어가요."
  },
  {
    n: 481,
    ch: 10,
    lv: 1,
    t: "self",
    kind: "b",
    q: "2026년 11월 6일을 <code>2026년 11월 6일 금요일</code> 형태로 출력하세요. 요일은 한글로 나오게 해요.",
    answer: String.raw`LocalDate d = LocalDate.of(2026, 11, 6);
String day = d.getDayOfWeek().getDisplayName(TextStyle.FULL, Locale.KOREAN);
System.out.println(d.getYear() + "년 " + d.getMonthValue() + "월 " + d.getDayOfMonth() + "일 " + day);`,
    kw: ["LocalDate.of", "getDayOfWeek()", "getDisplayName", "Locale.KOREAN"],
    demo: "2026년 11월 6일 금요일",
    exp: "DayOfWeek의 getDisplayName에 TextStyle과 Locale을 주면 그 나라 말로 요일 이름이 나와요. <code>DateTimeFormatter.ofPattern(\"yyyy년 M월 d일 EEEE\", Locale.KOREAN)</code>로도 만들 수 있어요."
  },
  {
    n: 482,
    ch: 10,
    lv: 1,
    t: "self",
    kind: "b",
    q: "2026년 11월 6일로부터 100일째 되는 날(오늘을 0일로 셈)과 그날의 요일을 출력하세요.",
    answer: String.raw`LocalDate start = LocalDate.of(2026, 11, 6);
LocalDate d100 = start.plusDays(100);
System.out.println(d100 + " " + d100.getDayOfWeek());`,
    kw: ["plusDays(100)", "getDayOfWeek()"],
    demo: "2027-02-14 SUNDAY",
    exp: "plusDays는 새 LocalDate를 돌려줘요. 월말·연말을 넘어가는 계산도 알아서 해줘요."
  },
  {
    n: 483,
    ch: 10,
    lv: 1,
    t: "self",
    kind: "m",
    q: "생일과 기준일을 받아 만 나이를 돌려주는 <code>static int age(LocalDate birth, LocalDate today)</code>를 만드세요.",
    code: String.raw`LocalDate today = LocalDate.of(2026, 11, 6);
System.out.println(age(LocalDate.of(2000, 5, 20), today));
System.out.println(age(LocalDate.of(2000, 12, 25), today));`,
    answer: String.raw`static int age(LocalDate birth, LocalDate today) {
    return Period.between(birth, today).getYears();
}`,
    kw: ["Period.between", "getYears()"],
    demo: String.raw`26
25`,
    exp: "Period.between은 년·월·일 간격을 구해요. 생일이 지나지 않았으면 한 살 적게 나와요."
  },
  {
    n: 484,
    ch: 10,
    lv: 2,
    t: "self",
    kind: "m",
    q: "출근·퇴근 시각을 받아 점심시간 1시간을 뺀 근무 시간(분)을 돌려주는 <code>static long workMinutes(LocalTime in, LocalTime out)</code>를 만드세요.",
    code: String.raw`System.out.println(workMinutes(LocalTime.of(9, 0), LocalTime.of(18, 30)));
System.out.println(workMinutes(LocalTime.of(8, 45), LocalTime.of(17, 0)));`,
    answer: String.raw`static long workMinutes(LocalTime in, LocalTime out) {
    return Duration.between(in, out).toMinutes() - 60;
}`,
    kw: ["Duration.between", "toMinutes()"],
    demo: String.raw`510
435`,
    exp: "시간 간격은 Duration으로 구해요. ChronoUnit.MINUTES.between(in, out)을 써도 같아요."
  },
  {
    n: 485,
    ch: 10,
    lv: 2,
    t: "self",
    kind: "m",
    q: "주어진 날짜의 <b>다음 달 첫 번째 월요일</b>을 돌려주는 <code>static LocalDate firstMondayOfNextMonth(LocalDate d)</code>를 만드세요.",
    code: String.raw`System.out.println(firstMondayOfNextMonth(LocalDate.of(2026, 11, 6)));
System.out.println(firstMondayOfNextMonth(LocalDate.of(2026, 12, 31)));`,
    answer: String.raw`static LocalDate firstMondayOfNextMonth(LocalDate d) {
    return d.plusMonths(1).with(TemporalAdjusters.firstInMonth(DayOfWeek.MONDAY));
}`,
    kw: ["plusMonths(1)", "TemporalAdjusters.firstInMonth", "DayOfWeek.MONDAY"],
    demo: String.raw`2026-12-07
2027-01-04`,
    exp: "TemporalAdjusters에는 “그 달의 첫 월요일” 같은 계산이 준비돼 있어요. 다음 달로 옮긴 뒤 적용해요."
  },
  {
    n: 486,
    ch: 10,
    lv: 2,
    t: "self",
    kind: "m",
    q: "<code>\"20261106\"</code> 같은 문자열을 LocalDate로 바꿔 <code>2026.11.06 (금)</code> 형태로 바꾸는 <code>static String reformat(String s)</code>를 DateTimeFormatter로 만드세요.",
    code: String.raw`System.out.println(reformat("20261106"));
System.out.println(reformat("20270101"));`,
    answer: String.raw`static String reformat(String s) {
    LocalDate d = LocalDate.parse(s, DateTimeFormatter.ofPattern("yyyyMMdd"));
    return d.format(DateTimeFormatter.ofPattern("yyyy.MM.dd (E)", Locale.KOREAN));
}`,
    kw: ["DateTimeFormatter.ofPattern(\"yyyyMMdd\")", "LocalDate.parse", "format("],
    demo: String.raw`2026.11.06 (금)
2027.01.01 (금)`,
    exp: "parse에는 입력 형식, format에는 출력 형식을 줘요. E는 짧은 요일 이름이고 Locale에 따라 언어가 달라져요."
  },
  {
    n: 487,
    ch: 10,
    lv: 2,
    t: "self",
    kind: "b",
    q: "DecimalFormat으로 금액 1234500을 <code>₩1,234,500</code>으로, 비율 0.256을 <code>25.6%</code>로 출력하세요.",
    answer: String.raw`DecimalFormat money = new DecimalFormat("₩#,###");
DecimalFormat pct = new DecimalFormat("#.#%");
System.out.println(money.format(1234500));
System.out.println(pct.format(0.256));`,
    kw: ["new DecimalFormat", "#,###", "%"],
    demo: String.raw`₩1,234,500
25.6%`,
    exp: "패턴에 %를 넣으면 값에 100을 곱해 보여줘요. 기호(₩)는 패턴에 그대로 쓰면 돼요."
  },
  {
    n: 488,
    ch: 10,
    lv: 3,
    t: "self",
    kind: "m",
    q: "연·월을 받아 달력을 출력하는 <code>static void calendar(int year, int month)</code>를 만드세요. 첫 줄은 <code>2026년 11월</code>, 그다음 줄부터 일요일 시작으로 날짜를 <code>%3d</code>로 출력해요. (요일 머리글은 생략)",
    code: "calendar(2026, 11);",
    answer: String.raw`static void calendar(int year, int month) {
    LocalDate first = LocalDate.of(year, month, 1);
    System.out.println(year + "년 " + month + "월");
    int blank = first.getDayOfWeek().getValue() % 7; // 일요일 = 0
    StringBuilder sb = new StringBuilder("   ".repeat(blank));
    for (int d = 1; d <= first.lengthOfMonth(); d++) {
        sb.append(String.format("%3d", d));
        if ((blank + d) % 7 == 0) {
            System.out.println(sb);
            sb.setLength(0);
        }
    }
    if (sb.length() > 0) System.out.println(sb);
}`,
    kw: ["getDayOfWeek().getValue() % 7", "lengthOfMonth()", "%3d", "% 7 == 0"],
    demo: String.raw`2026년 11월
  1  2  3  4  5  6  7
  8  9 10 11 12 13 14
 15 16 17 18 19 20 21
 22 23 24 25 26 27 28
 29 30`,
    exp: "DayOfWeek의 getValue()는 월요일 1 ~ 일요일 7이에요. % 7을 하면 일요일이 0이 되어 앞에 비울 칸 수가 돼요. 7칸이 차면 줄을 바꿔요."
  },
  {
    n: 489,
    ch: 10,
    lv: 3,
    t: "self",
    kind: "m",
    q: "날짜에 주말(토·일)을 빼고 n 영업일을 더한 날짜를 돌려주는 <code>static LocalDate addBusinessDays(LocalDate d, int n)</code>을 만드세요.",
    code: String.raw`LocalDate fri = LocalDate.of(2026, 11, 6);
System.out.println(addBusinessDays(fri, 1));
System.out.println(addBusinessDays(fri, 3));`,
    answer: String.raw`static LocalDate addBusinessDays(LocalDate d, int n) {
    LocalDate r = d;
    int added = 0;
    while (added < n) {
        r = r.plusDays(1);
        DayOfWeek w = r.getDayOfWeek();
        if (w != DayOfWeek.SATURDAY && w != DayOfWeek.SUNDAY) added++;
    }
    return r;
}`,
    kw: ["plusDays(1)", "DayOfWeek.SATURDAY", "DayOfWeek.SUNDAY"],
    demo: String.raw`2026-11-09
2026-11-11`,
    exp: "하루씩 넘기면서 평일일 때만 센다는 단순한 방법이에요. LocalDate는 불변이라 r에 다시 대입해야 해요."
  },
  {
    n: 490,
    ch: 10,
    lv: 3,
    t: "self",
    kind: "b",
    q: "서울 시각 2026-11-06 09:00이 뉴욕(America/New_York)에서 몇 시인지 <code>yyyy-MM-dd HH:mm</code> 형식으로 출력하세요.",
    answer: String.raw`ZonedDateTime seoul = ZonedDateTime.of(LocalDateTime.of(2026, 11, 6, 9, 0), ZoneId.of("Asia/Seoul"));
ZonedDateTime ny = seoul.withZoneSameInstant(ZoneId.of("America/New_York"));
System.out.println(ny.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")));`,
    kw: ["ZoneId.of(\"Asia/Seoul\")", "withZoneSameInstant", "America/New_York"],
    demo: "2026-11-05 19:00",
    exp: "withZoneSameInstant는 같은 순간을 다른 시간대로 보여줘요. 뉴욕은 11월 1일에 서머타임이 끝나 UTC-5라서 서울보다 14시간 늦어요."
  },
  {
    n: 491,
    ch: 11,
    lv: 1,
    t: "self",
    kind: "m",
    q: "정수 리스트에서 짝수만 담은 새 리스트를 돌려주는 <code>static List&lt;Integer&gt; evens(List&lt;Integer&gt; list)</code>를 만드세요.",
    code: "System.out.println(evens(List.of(1, 2, 3, 4, 5, 6)));",
    answer: String.raw`static List<Integer> evens(List<Integer> list) {
    List<Integer> r = new ArrayList<>();
    for (int n : list) if (n % 2 == 0) r.add(n);
    return r;
}`,
    kw: ["new ArrayList<>()", "r.add(n)"],
    demo: "[2, 4, 6]",
    exp: "원본을 바꾸지 않고 새 리스트에 담아 돌려줘요."
  },
  {
    n: 492,
    ch: 11,
    lv: 1,
    t: "self",
    kind: "m",
    q: "공백으로 구분된 문장의 단어별 개수를 사전순으로 담은 Map을 돌려주는 <code>static Map&lt;String, Integer&gt; wordCount(String s)</code>를 만드세요.",
    code: "System.out.println(wordCount(\"a b a c b a\"));",
    answer: String.raw`static Map<String, Integer> wordCount(String s) {
    Map<String, Integer> map = new TreeMap<>();
    for (String w : s.split(" ")) {
        map.put(w, map.getOrDefault(w, 0) + 1);
    }
    return map;
}`,
    kw: ["new TreeMap<>()", "getOrDefault(w, 0) + 1"],
    demo: "{a=3, b=2, c=1}",
    exp: "getOrDefault로 처음 나온 단어는 0에서 시작해요. <code>map.merge(w, 1, Integer::sum)</code>으로 써도 같아요."
  },
  {
    n: 493,
    ch: 11,
    lv: 1,
    t: "self",
    kind: "m",
    q: "리스트의 중복을 없애되 처음 나온 순서를 유지한 리스트를 돌려주는 <code>static List&lt;Integer&gt; dedup(List&lt;Integer&gt; list)</code>를 만드세요.",
    code: "System.out.println(dedup(List.of(3, 1, 3, 2, 1)));",
    answer: String.raw`static List<Integer> dedup(List<Integer> list) {
    return new ArrayList<>(new LinkedHashSet<>(list));
}`,
    kw: ["LinkedHashSet"],
    demo: "[3, 1, 2]",
    exp: "HashSet은 순서를 보장하지 않고, TreeSet은 정렬해요. 넣은 순서를 지키려면 LinkedHashSet을 써요."
  },
  {
    n: 494,
    ch: 11,
    lv: 2,
    t: "self",
    kind: "m",
    q: "괄호 (), [], {}가 올바르게 짝지어졌는지 검사하는 <code>static boolean isBalanced(String s)</code>를 스택으로 만드세요. 괄호 아닌 문자는 무시해요.",
    code: String.raw`for (String s : new String[] {"(a[b]{c})", "([)]", "((", "x"})
    System.out.println(s + " " + isBalanced(s));`,
    answer: String.raw`static boolean isBalanced(String s) {
    Deque<Character> st = new ArrayDeque<>();
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '[' || c == '{') st.push(c);
        else if (c == ')' || c == ']' || c == '}') {
            if (st.isEmpty()) return false;
            char open = st.pop();
            if ((c == ')' && open != '(') || (c == ']' && open != '[') || (c == '}' && open != '{')) return false;
        }
    }
    return st.isEmpty();
}`,
    kw: ["push(c)", "pop()", "isEmpty()"],
    demo: String.raw`(a[b]{c}) true
([)] false
(( false
x true`,
    exp: "여는 괄호는 쌓고, 닫는 괄호가 나오면 가장 최근의 여는 괄호와 짝이 맞는지 확인해요. 끝났을 때 스택이 비어 있어야 해요."
  },
  {
    n: 495,
    ch: 11,
    lv: 2,
    t: "self",
    kind: "m",
    q: "n명이 원을 이루고 k번째 사람마다 빠질 때 빠지는 순서를 돌려주는 <code>static List&lt;Integer&gt; josephus(int n, int k)</code>를 큐로 만드세요.",
    code: "System.out.println(josephus(7, 3));",
    answer: String.raw`static List<Integer> josephus(int n, int k) {
    Queue<Integer> q = new ArrayDeque<>();
    for (int i = 1; i <= n; i++) q.offer(i);
    List<Integer> out = new ArrayList<>();
    while (!q.isEmpty()) {
        for (int i = 1; i < k; i++) q.offer(q.poll());
        out.add(q.poll());
    }
    return out;
}`,
    kw: ["Queue", "offer(q.poll())", "out.add(q.poll())"],
    demo: "[3, 6, 2, 7, 5, 1, 4]",
    exp: "k - 1명은 앞에서 꺼내 뒤로 다시 넣고, k번째 사람을 꺼내 결과에 넣어요. 큐가 빌 때까지 반복해요."
  },
  {
    n: 496,
    ch: 11,
    lv: 2,
    t: "self",
    kind: "b",
    q: "문자열 리스트를 길이 순으로, 길이가 같으면 사전순으로 정렬하는 코드를 Comparator로 쓰세요.",
    answer: String.raw`List<String> list = new ArrayList<>(List.of("kiwi", "apple", "fig", "banana", "pear"));
list.sort(Comparator.comparing(String::length).thenComparing(Comparator.naturalOrder()));
System.out.println(list);`,
    kw: ["Comparator.comparing", "String::length", "thenComparing"],
    demo: "[fig, kiwi, pear, apple, banana]",
    exp: "comparing으로 첫 기준, thenComparing으로 두 번째 기준을 이어 붙여요. 익명 클래스로 compare()를 구현해도 돼요."
  },
  {
    n: 497,
    ch: 11,
    lv: 2,
    t: "self",
    kind: "m",
    q: "두 리스트에 공통으로 있는 값을 중복 없이 오름차순으로 돌려주는 <code>static List&lt;Integer&gt; common(List&lt;Integer&gt; a, List&lt;Integer&gt; b)</code>를 만드세요. 원본 리스트는 바뀌면 안 돼요.",
    code: String.raw`List<Integer> a = List.of(5, 3, 1, 3), b = List.of(3, 4, 5, 6);
System.out.println(common(a, b));
System.out.println(a);`,
    answer: String.raw`static List<Integer> common(List<Integer> a, List<Integer> b) {
    Set<Integer> s = new TreeSet<>(a);
    s.retainAll(b);
    return new ArrayList<>(s);
}`,
    kw: ["new TreeSet<>(a)", "retainAll(b)"],
    demo: String.raw`[3, 5]
[5, 3, 1, 3]`,
    exp: "TreeSet으로 복사하면 중복 제거와 정렬이 함께 되고, retainAll로 교집합만 남겨요."
  },
  {
    n: 498,
    ch: 11,
    lv: 3,
    t: "self",
    kind: "m",
    q: "문장에서 가장 많이 나온 단어 k개를 돌려주는 <code>static List&lt;String&gt; topK(String s, int k)</code>를 만드세요. 횟수가 같으면 사전순으로 앞선 단어가 먼저예요.",
    code: String.raw`System.out.println(topK("b a c a b a d", 2));
System.out.println(topK("x y z", 5));`,
    answer: String.raw`static List<String> topK(String s, int k) {
    Map<String, Integer> cnt = new HashMap<>();
    for (String w : s.split(" ")) cnt.merge(w, 1, Integer::sum);
    List<String> words = new ArrayList<>(cnt.keySet());
    words.sort((x, y) -> cnt.get(y).equals(cnt.get(x)) ? x.compareTo(y) : cnt.get(y) - cnt.get(x));
    return words.subList(0, Math.min(k, words.size()));
}`,
    kw: ["merge(w, 1, Integer::sum)", "sort(", "subList"],
    demo: String.raw`[a, b]
[x, y, z]`,
    exp: "먼저 Map으로 개수를 세고, 키 목록을 개수 내림차순·사전순으로 정렬해 앞의 k개를 잘라요. Integer끼리 == 비교는 캐시 범위 밖에서 틀릴 수 있어 equals를 썼어요."
  },
  {
    n: 499,
    ch: 11,
    lv: 3,
    t: "self",
    kind: "c",
    q: "최대 용량을 넘으면 가장 오래 쓰지 않은 항목을 지우는 <code>LRUCache&lt;K, V&gt;</code>를 LinkedHashMap을 상속해 만드세요.",
    code: String.raw`LRUCache<String, Integer> c = new LRUCache<>(2);
c.put("a", 1); c.put("b", 2);
c.get("a");
c.put("c", 3);
System.out.println(c.keySet());`,
    answer: String.raw`class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private final int capacity;
    LRUCache(int capacity) {
        super(16, 0.75f, true);
        this.capacity = capacity;
    }
    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > capacity;
    }
}`,
    kw: ["extends LinkedHashMap", "super(16, 0.75f, true)", "removeEldestEntry"],
    demo: "[a, c]",
    exp: "세 번째 인자 true는 ‘접근 순서’로 정렬하라는 뜻이라 get한 항목이 뒤로 가요. 크기를 넘으면 맨 앞(가장 오래된) 항목이 지워져요."
  },
  {
    n: 500,
    ch: 11,
    lv: 3,
    t: "self",
    kind: "c",
    q: "for-each로 from부터 to까지(to 포함) 정수를 돌 수 있는 <code>Range</code> 클래스를 <code>Iterable&lt;Integer&gt;</code>로 구현하세요.",
    code: String.raw`StringBuilder sb = new StringBuilder();
for (int i : new Range(1, 4)) sb.append(i).append(' ');
System.out.println(sb.toString().trim());`,
    answer: String.raw`class Range implements Iterable<Integer> {
    private final int from, to;
    Range(int from, int to) { this.from = from; this.to = to; }
    public Iterator<Integer> iterator() {
        return new Iterator<>() {
            int cur = from;
            public boolean hasNext() { return cur <= to; }
            public Integer next() {
                if (!hasNext()) throw new NoSuchElementException();
                return cur++;
            }
        };
    }
}`,
    kw: ["implements Iterable<Integer>", "Iterator<Integer> iterator()", "hasNext()", "next()"],
    demo: "1 2 3 4",
    exp: "Iterable을 구현하면 향상된 for문을 쓸 수 있어요. iterator()가 돌려주는 Iterator가 현재 위치(cur)를 기억해요."
  },
  {
    n: 501,
    ch: 12,
    lv: 1,
    t: "self",
    kind: "c",
    q: "어떤 타입이든 하나 담을 수 있는 지네릭 클래스 <code>Box&lt;T&gt;</code>를 만드세요. <code>set(T)</code>, <code>T get()</code>, 비었는지 확인하는 <code>isEmpty()</code>를 가져요.",
    code: String.raw`Box<String> b = new Box<>();
System.out.println(b.isEmpty());
b.set("자바");
System.out.println(b.get().length() + " " + b.isEmpty());`,
    answer: String.raw`class Box<T> {
    private T item;
    void set(T item) { this.item = item; }
    T get() { return item; }
    boolean isEmpty() { return item == null; }
}`,
    kw: ["class Box<T>", "T get()", "set(T item)"],
    demo: String.raw`true
2 false`,
    exp: "타입 변수 T는 객체를 만들 때 정한 타입으로 바뀌어요. 꺼낼 때 형변환이 필요 없어요."
  },
  {
    n: 502,
    ch: 12,
    lv: 1,
    t: "self",
    kind: "c",
    q: "동전 값을 가진 열거형 <code>Coin</code>(PENNY 1, NICKEL 5, DIME 10, QUARTER 25)을 만들고 <code>getValue()</code>를 추가하세요.",
    code: String.raw`int sum = 0;
for (Coin c : Coin.values()) sum += c.getValue();
System.out.println(sum);
System.out.println(Coin.valueOf("DIME").getValue());`,
    answer: String.raw`enum Coin {
    PENNY(1), NICKEL(5), DIME(10), QUARTER(25);
    private final int value;
    Coin(int value) { this.value = value; }
    int getValue() { return value; }
}`,
    kw: ["enum Coin", "PENNY(1)", "private final int value", "getValue()"],
    demo: String.raw`41
10`,
    exp: "열거형 상수 뒤 괄호의 값은 생성자로 전달돼요. 상수 목록 끝에는 세미콜론이 필요해요."
  },
  {
    n: 503,
    ch: 12,
    lv: 1,
    t: "self",
    kind: "m",
    q: "리스트의 첫 요소를 돌려주는 지네릭 메서드 <code>static &lt;T&gt; T first(List&lt;T&gt; list)</code>를 만드세요. 비어 있으면 null을 돌려줘요.",
    code: String.raw`String s = first(List.of("a", "b"));
Integer n = first(List.of(7, 8));
System.out.println(s + " " + n + " " + first(new ArrayList<Double>()));`,
    answer: String.raw`static <T> T first(List<T> list) {
    return list.isEmpty() ? null : list.get(0);
}`,
    kw: ["static <T> T first", "list.get(0)"],
    demo: "a 7 null",
    exp: "지네릭 메서드는 반환 타입 앞에 &lt;T&gt;를 선언해요. 호출할 때 넘긴 리스트의 타입으로 T가 정해져요."
  },
  {
    n: 504,
    ch: 12,
    lv: 2,
    t: "self",
    kind: "m",
    q: "비교 가능한 요소의 리스트에서 최댓값을 돌려주는 <code>static &lt;T extends Comparable&lt;T&gt;&gt; T maxOf(List&lt;T&gt; list)</code>를 Collections.max 없이 만드세요.",
    code: String.raw`System.out.println(maxOf(List.of(3, 9, 2)));
System.out.println(maxOf(List.of("apple", "pear", "banana")));`,
    answer: String.raw`static <T extends Comparable<T>> T maxOf(List<T> list) {
    T max = list.get(0);
    for (T t : list)
        if (t.compareTo(max) > 0) max = t;
    return max;
}`,
    kw: ["<T extends Comparable<T>>", "compareTo(max) > 0"],
    demo: String.raw`9
pear`,
    exp: "T extends Comparable&lt;T&gt;로 제한하면 T 객체에서 compareTo를 부를 수 있어요."
  },
  {
    n: 505,
    ch: 12,
    lv: 2,
    t: "self",
    kind: "c",
    q: "방향 열거형 <code>Direction</code>(NORTH, EAST, SOUTH, WEST)을 만들고, 시계 방향으로 90도 돈 방향을 돌려주는 <code>turnRight()</code>를 ordinal과 values()로 구현하세요.",
    code: String.raw`Direction d = Direction.NORTH;
for (int i = 0; i < 5; i++) { System.out.print(d + " "); d = d.turnRight(); }
System.out.println();`,
    answer: String.raw`enum Direction {
    NORTH, EAST, SOUTH, WEST;
    Direction turnRight() {
        Direction[] all = values();
        return all[(ordinal() + 1) % all.length];
    }
}`,
    kw: ["values()", "ordinal() + 1", "% all.length"],
    demo: "NORTH EAST SOUTH WEST NORTH ",
    exp: "상수 순서를 시계 방향으로 정해 두면 다음 순서가 오른쪽으로 돈 방향이에요. 마지막(WEST) 다음은 % 로 처음(NORTH)이 돼요."
  },
  {
    n: 506,
    ch: 12,
    lv: 2,
    t: "self",
    kind: "m",
    q: "src 리스트의 요소를 dst 리스트에 모두 추가하는 지네릭 메서드 <code>copy</code>를 와일드카드로 만드세요. Integer 리스트를 Number 리스트에 복사할 수 있어야 해요.",
    code: String.raw`List<Number> nums = new ArrayList<>(List.of(0.5));
copy(nums, List.of(1, 2, 3));
System.out.println(nums);`,
    answer: String.raw`static <T> void copy(List<? super T> dst, List<? extends T> src) {
    for (T t : src) dst.add(t);
}`,
    kw: ["List<? super T> dst", "List<? extends T> src"],
    demo: "[0.5, 1, 2, 3]",
    exp: "꺼내기만 하는 쪽은 &lt;? extends T&gt;, 넣기만 하는 쪽은 &lt;? super T&gt;를 써요(PECS). 그래서 더 넓은 타입의 리스트에 담을 수 있어요."
  },
  {
    n: 507,
    ch: 12,
    lv: 2,
    t: "self",
    kind: "c",
    q: "이름과 점수를 가진 레코드 <code>Student</code>를 만드세요. 압축 생성자에서 점수가 0~100이 아니면 <code>IllegalArgumentException(\"점수 범위 오류: 점수\")</code>를 던져요.",
    code: String.raw`System.out.println(new Student("A", 90));
try {
    new Student("B", 120);
} catch (IllegalArgumentException e) {
    System.out.println(e.getMessage());
}`,
    answer: String.raw`record Student(String name, int score) {
    Student {
        if (score < 0 || score > 100)
            throw new IllegalArgumentException("점수 범위 오류: " + score);
    }
}`,
    kw: ["record Student", "Student {", "throw new IllegalArgumentException"],
    demo: String.raw`Student[name=A, score=90]
점수 범위 오류: 120`,
    exp: "압축 생성자는 매개변수 목록 없이 검증 코드만 써요. 필드 대입은 컴파일러가 자동으로 해줘요."
  },
  {
    n: 508,
    ch: 12,
    lv: 3,
    t: "self",
    kind: "c",
    q: "배열로 동작하는 지네릭 스택 <code>ArrayStack&lt;T&gt;</code>를 만드세요. <code>push</code>(공간이 부족하면 2배로 늘림), <code>pop</code>(비었으면 <code>IllegalStateException(\"스택이 비었어요\")</code>), <code>size()</code>를 가져요.",
    code: String.raw`ArrayStack<String> st = new ArrayStack<>();
for (String s : "a b c d e".split(" ")) st.push(s);
System.out.println(st.size());
System.out.println(st.pop() + st.pop() + st.pop() + st.pop() + st.pop());
try { st.pop(); } catch (IllegalStateException e) { System.out.println(e.getMessage()); }`,
    answer: String.raw`class ArrayStack<T> {
    private Object[] data = new Object[2];
    private int size = 0;
    void push(T item) {
        if (size == data.length) data = Arrays.copyOf(data, size * 2);
        data[size++] = item;
    }
    @SuppressWarnings("unchecked")
    T pop() {
        if (size == 0) throw new IllegalStateException("스택이 비었어요");
        T item = (T) data[--size];
        data[size] = null;
        return item;
    }
    int size() { return size; }
}`,
    kw: ["new Object[", "Arrays.copyOf", "(T) data[--size]", "IllegalStateException"],
    demo: String.raw`5
edcba
스택이 비었어요`,
    exp: "new T[]는 만들 수 없어서 Object[]에 담고 꺼낼 때 (T)로 형변환해요. 꺼낸 자리를 null로 비워야 가비지 컬렉션이 될 수 있어요."
  },
  {
    n: 509,
    ch: 12,
    lv: 3,
    t: "self",
    kind: "c",
    q: "<code>sealed interface Shape</code>를 만들고 레코드 <code>Circle(double r)</code>, <code>Square(double side)</code>, <code>Tri(double base, double h)</code>만 구현하게 하세요. 넓이를 구하는 <code>static double area(Shape s)</code>를 switch 패턴 매칭으로 작성해요.",
    code: String.raw`for (Shape s : List.of(new Circle(1), new Square(2), new Tri(3, 4)))
    System.out.printf("%s → %.2f%n", s, Geo.area(s));`,
    answer: String.raw`sealed interface Shape permits Circle, Square, Tri { }
record Circle(double r) implements Shape { }
record Square(double side) implements Shape { }
record Tri(double base, double h) implements Shape { }

class Geo {
    static double area(Shape s) {
        return switch (s) {
            case Circle c -> Math.PI * c.r() * c.r();
            case Square q -> q.side() * q.side();
            case Tri t -> t.base() * t.h() / 2;
        };
    }
}`,
    kw: ["sealed interface Shape permits", "implements Shape", "switch (s)", "case Circle c"],
    demo: String.raw`Circle[r=1.0] → 3.14
Square[side=2.0] → 4.00
Tri[base=3.0, h=4.0] → 6.00`,
    exp: "sealed로 구현 타입을 제한하면 switch에서 모든 경우를 다뤘는지 컴파일러가 확인해서 default가 필요 없어요."
  },
  {
    n: 510,
    ch: 12,
    lv: 3,
    t: "self",
    kind: "c",
    q: "필드에 붙이는 애너테이션 <code>@MaxLength(int)</code>를 만들고, 객체의 String 필드 중 이 애너테이션의 길이를 넘는 것을 찾아 출력하는 <code>static void check(Object o)</code>를 리플렉션으로 작성하세요.",
    code: "Checker.check(new User());",
    answer: String.raw`@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@interface MaxLength {
    int value();
}
class User {
    @MaxLength(5) String name = "김자바";
    @MaxLength(5) String nick = "javamaster";
    String memo = "제한 없음";
}
class Checker {
    static void check(Object o) throws IllegalAccessException {
        for (Field f : o.getClass().getDeclaredFields()) {
            MaxLength ml = f.getAnnotation(MaxLength.class);
            if (ml == null) continue;
            f.setAccessible(true);
            String v = (String) f.get(o);
            System.out.println(f.getName() + ": " + (v.length() <= ml.value() ? "OK" : "최대 " + ml.value() + "자 (현재 " + v.length() + "자)"));
        }
    }
}`,
    kw: ["@Retention(RetentionPolicy.RUNTIME)", "@Target(ElementType.FIELD)", "getDeclaredFields()", "getAnnotation(MaxLength.class)"],
    demo: String.raw`name: OK
nick: 최대 5자 (현재 10자)`,
    exp: "실행 중에 애너테이션을 읽으려면 @Retention(RUNTIME)이 꼭 필요해요. 요소 이름이 value 하나면 @MaxLength(5)처럼 이름을 생략할 수 있어요."
  },
  {
    n: 511,
    ch: 13,
    lv: 1,
    t: "self",
    kind: "c",
    q: "Thread를 상속한 <code>Worker</code>를 만들어 run()에서 \"작업 시작\", \"작업 끝\"을 출력하게 하세요. main에서 start() 후 join()으로 기다린 뒤 \"main 끝\"을 출력해요.",
    code: String.raw`Worker w = new Worker();
w.start();
w.join();
System.out.println("main 끝");`,
    answer: String.raw`class Worker extends Thread {
    @Override
    public void run() {
        System.out.println("작업 시작");
        System.out.println("작업 끝");
    }
}`,
    kw: ["extends Thread", "public void run()"],
    demo: String.raw`작업 시작
작업 끝
main 끝`,
    exp: "start()가 새 쓰레드에서 run()을 실행해요. join()으로 기다리기 때문에 \"main 끝\"은 항상 마지막이에요."
  },
  {
    n: 512,
    ch: 13,
    lv: 1,
    t: "self",
    kind: "b",
    q: "Runnable을 람다로 만들어 두 쓰레드 A, B를 실행하되, A가 끝난 뒤 B가 시작되도록 join()을 써서 \"A 실행\", \"B 실행\" 순서를 보장하세요.",
    answer: String.raw`Thread a = new Thread(() -> System.out.println("A 실행"));
Thread b = new Thread(() -> System.out.println("B 실행"));
a.start();
a.join();
b.start();
b.join();`,
    kw: ["() ->", "start()", "join()"],
    demo: String.raw`A 실행
B 실행`,
    exp: "join()이 없으면 두 쓰레드의 출력 순서는 실행할 때마다 달라질 수 있어요."
  },
  {
    n: 513,
    ch: 13,
    lv: 1,
    t: "self",
    kind: "m",
    q: "<code>Thread.sleep</code>으로 0.1초 간격을 두며 3, 2, 1, 발사!를 출력하는 <code>static void countdown()</code>을 만드세요.",
    code: "countdown();",
    answer: String.raw`static void countdown() throws InterruptedException {
    for (int i = 3; i >= 1; i--) {
        System.out.println(i);
        Thread.sleep(100);
    }
    System.out.println("발사!");
}`,
    kw: ["Thread.sleep(100)", "throws InterruptedException"],
    demo: String.raw`3
2
1
발사!`,
    exp: "sleep은 checked 예외인 InterruptedException을 던질 수 있어서 처리하거나 throws로 선언해야 해요."
  },
  {
    n: 514,
    ch: 13,
    lv: 2,
    t: "self",
    kind: "c",
    q: "여러 쓰레드가 동시에 써도 정확한 <code>SafeCounter</code>를 synchronized로 만드세요. 두 쓰레드가 1만 번씩 increase()하면 20000이 나와야 해요.",
    code: String.raw`SafeCounter c = new SafeCounter();
Runnable r = () -> { for (int i = 0; i < 10000; i++) c.increase(); };
Thread t1 = new Thread(r), t2 = new Thread(r);
t1.start(); t2.start();
t1.join(); t2.join();
System.out.println(c.get());`,
    answer: String.raw`class SafeCounter {
    private int count;
    synchronized void increase() { count++; }
    synchronized int get() { return count; }
}`,
    kw: ["synchronized void increase()", "count++"],
    demo: "20000",
    exp: "count++는 읽기·더하기·쓰기 세 단계라 동기화하지 않으면 증가가 겹쳐 사라질 수 있어요."
  },
  {
    n: 515,
    ch: 13,
    lv: 2,
    t: "self",
    kind: "b",
    q: "쓰레드 2개짜리 풀(ExecutorService)에 1~50 합과 51~100 합을 각각 Callable로 맡기고, 두 결과를 더해 출력하세요.",
    answer: String.raw`ExecutorService es = Executors.newFixedThreadPool(2);
Future<Integer> f1 = es.submit(() -> { int s = 0; for (int i = 1; i <= 50; i++) s += i; return s; });
Future<Integer> f2 = es.submit(() -> { int s = 0; for (int i = 51; i <= 100; i++) s += i; return s; });
System.out.println(f1.get() + " + " + f2.get() + " = " + (f1.get() + f2.get()));
es.shutdown();`,
    kw: ["newFixedThreadPool(2)", "submit", "Future<Integer>", "get()", "shutdown()"],
    demo: "1275 + 3775 = 5050",
    exp: "submit(Callable)은 Future를 돌려주고, get()은 결과가 나올 때까지 기다려요. 다 쓴 풀은 shutdown()으로 닫아야 프로그램이 끝나요."
  },
  {
    n: 516,
    ch: 13,
    lv: 2,
    t: "self",
    kind: "c",
    q: "Thread를 상속한 <code>StoppableWorker</code>를 만드세요. <code>volatile boolean running</code>이 true인 동안 count를 늘리며 반복하고, <code>stopWork()</code>를 부르면 반복을 끝내요.",
    code: String.raw`StoppableWorker w = new StoppableWorker();
w.start();
Thread.sleep(50);
w.stopWork();
w.join();
System.out.println("작업 중지됨: " + (w.count > 0));`,
    answer: String.raw`class StoppableWorker extends Thread {
    private volatile boolean running = true;
    long count = 0;
    @Override
    public void run() {
        while (running) count++;
    }
    void stopWork() { running = false; }
}`,
    kw: ["volatile boolean running", "while (running)", "running = false"],
    demo: "작업 중지됨: true",
    exp: "volatile이 없으면 작업 쓰레드가 캐시한 값만 보고 영원히 멈추지 않을 수도 있어요. volatile은 다른 쓰레드가 바꾼 값이 바로 보이게 해요. stop() 같은 강제 종료 대신 이렇게 플래그로 멈춰요."
  },
  {
    n: 517,
    ch: 13,
    lv: 2,
    t: "self",
    kind: "b",
    q: "<code>CountDownLatch</code>로 쓰레드 3개가 모두 끝날 때까지 기다렸다가, 끝난 작업 수를 출력하세요. 각 쓰레드는 AtomicInteger를 1씩 늘려요.",
    answer: String.raw`CountDownLatch latch = new CountDownLatch(3);
AtomicInteger done = new AtomicInteger();
for (int i = 0; i < 3; i++) {
    new Thread(() -> {
        done.incrementAndGet();
        latch.countDown();
    }).start();
}
latch.await();
System.out.println("모든 작업 완료: " + done.get());`,
    kw: ["new CountDownLatch(3)", "countDown()", "await()", "AtomicInteger"],
    demo: "모든 작업 완료: 3",
    exp: "await()는 count가 0이 될 때까지 기다려요. 람다 안에서 바꿀 값은 AtomicInteger처럼 객체로 감싸야 해요(지역변수는 사실상 final이어야 해서)."
  },
  {
    n: 518,
    ch: 13,
    lv: 3,
    t: "self",
    kind: "b",
    q: "BlockingQueue로 생산자-소비자를 만드세요. 생산자는 1~5를 넣고 마지막에 -1(종료 신호)을 넣어요. 소비자는 -1이 나올 때까지 꺼내 더한 뒤 \"합계 15\"를 출력해요.",
    answer: String.raw`BlockingQueue<Integer> q = new ArrayBlockingQueue<>(2);
Thread producer = new Thread(() -> {
    try {
        for (int i = 1; i <= 5; i++) q.put(i);
        q.put(-1);
    } catch (InterruptedException e) { }
});
Thread consumer = new Thread(() -> {
    try {
        int sum = 0, v;
        while ((v = q.take()) != -1) sum += v;
        System.out.println("합계 " + sum);
    } catch (InterruptedException e) { }
});
producer.start(); consumer.start();
producer.join(); consumer.join();`,
    kw: ["ArrayBlockingQueue", "put(", "take()", "-1"],
    demo: "합계 15",
    exp: "put()은 큐가 가득 차면, take()는 큐가 비면 알아서 기다려요. wait/notify를 직접 쓰지 않아도 생산자와 소비자가 맞춰져요."
  },
  {
    n: 519,
    ch: 13,
    lv: 3,
    t: "self",
    kind: "b",
    q: "CompletableFuture로 가격(1000)과 수량(3)을 각각 비동기로 구해 곱한 값을 출력하세요. 또 실패하는 작업은 exceptionally로 0을 돌려주게 하세요.",
    answer: String.raw`CompletableFuture<Integer> price = CompletableFuture.supplyAsync(() -> 1000);
CompletableFuture<Integer> qty = CompletableFuture.supplyAsync(() -> 3);
System.out.println(price.thenCombine(qty, (p, q) -> p * q).join());

int safe = CompletableFuture.supplyAsync(() -> Integer.parseInt("오류"))
        .exceptionally(ex -> 0)
        .join();
System.out.println(safe);`,
    kw: ["supplyAsync", "thenCombine", "exceptionally", "join()"],
    demo: String.raw`3000
0`,
    exp: "thenCombine은 두 비동기 결과가 모두 나오면 합쳐요. 비동기 작업의 예외는 exceptionally에서 대체값으로 바꿀 수 있어요."
  },
  {
    n: 520,
    ch: 13,
    lv: 3,
    t: "self",
    kind: "c",
    q: "ReentrantLock을 가진 <code>Account</code>와 두 계좌 사이 이체 메서드 <code>static void transfer(Account from, Account to, int m)</code>를 만드세요. 교착상태를 피하려고 항상 id가 작은 계좌부터 잠가요. 두 쓰레드가 반대 방향으로 1000번씩 이체해도 총액은 그대로예요.",
    code: String.raw`Account a = new Account(1, 1000), b = new Account(2, 1000);
Thread t1 = new Thread(() -> { for (int i = 0; i < 1000; i++) Account.transfer(a, b, 1); });
Thread t2 = new Thread(() -> { for (int i = 0; i < 1000; i++) Account.transfer(b, a, 1); });
t1.start(); t2.start();
t1.join(); t2.join();
System.out.println("A+B = " + (a.balance + b.balance));`,
    answer: String.raw`class Account {
    final int id;
    int balance;
    final ReentrantLock lock = new ReentrantLock();
    Account(int id, int balance) { this.id = id; this.balance = balance; }

    static void transfer(Account from, Account to, int m) {
        Account first = from.id < to.id ? from : to;
        Account second = first == from ? to : from;
        first.lock.lock();
        try {
            second.lock.lock();
            try {
                if (from.balance >= m) {
                    from.balance -= m;
                    to.balance += m;
                }
            } finally { second.lock.unlock(); }
        } finally { first.lock.unlock(); }
    }
}`,
    kw: ["ReentrantLock", "from.id < to.id", "lock.lock()", "finally", "unlock()"],
    demo: "A+B = 2000",
    exp: "두 쓰레드가 서로 반대 순서로 락을 잡으면 교착상태가 생길 수 있어요. 모든 쓰레드가 같은 순서(id 순)로 잡으면 막을 수 있어요. unlock은 finally에서 해요."
  }
];
