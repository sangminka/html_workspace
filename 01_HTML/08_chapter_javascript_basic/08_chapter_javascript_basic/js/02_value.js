// 주석 단축키 : ctrl + /
// 자바스크립트 주석 : //

// TODO : 자료형
// 1)문자열(String) : "안녕하세요", '안녕하세요'
//  쌍따옴표, 홑따옴표를 사용해서 문자들을 묶음
// alert("안녕하세요");
// alert('안녕하세요');

// 2) 숫자(Number) : 1, 2, 3 등
// alert(1);
// console.log(1);

// 3)표현식 : 변수, 상수, 값 ...
// 1)변수 : 변하는 값을 저장하는 곳(공간) ***
// vs 값 : 문자열, 숫자 등
// 변수 사용법 : let 변수명 = 값;
// 실습
// let hello = "안녕하세요";
// hello = "안녕"; //값 수정(변수)
// 출력방법 : 변수사용해서 출력(소프트 코딩(soft coding)), 추천
// alert(hello);
// vs 출력방법 : 하드 코딩(hard coding), 추천하지 않음
// alert("안녕")

// 2) 상수 : 변하지 않는 값을 저장하는 곳(공간)
//  상수 사용법 : const 상수명 = 값;
// 실습
// const num = 1; //상수 정의 (값 저장), 초기화
// // num = 2; //수정 불가(에러발생)
// alert(num);

//
// 연산자
// 사칙현산자 : +(덧셈), 뺄셈곱셉, /나눗셈(/) (나머자 연산자 %(나머지연산자 : 나누어서 나머지가 결과로 나옴))

// 실습
//1) 덧셈
let num = 52 + 273;
// 2) 뺄셈 : 273 - 52
// num = 273 - 52;
// 3곱셈 : 273 *52
// num = 52 * 273;
// 4) 나눗셈 : 273 / 52, 실수(비슷한 숫자, 유사한 숫자(부동소수점법))- 정확도 떨어짐
// num = 273 / 52
// 5) 나머지라인 : 273 % 52
num = 273 % 52;
// 결과 출력
// alert(num);

// 문자열 특수문자
// 특수문자 사용법 : \(역슬래쉬)영문자
// 1) 줄 바꿈(<br/>) : \n
// let hello = "안녕하세요\n홍길동입니다."
// 결과 출력
// alert(hello);

// 2) 홑따옴표 출력 
// '안녕하세요'
// hello = "'안녕하세요'";
// "안녕하세요"
// hello = '"안녕하세요"';
// alert(hello);

// '"안녕하세요"'
// 쌍따옴표 + 홑따옴표 모두 출력
// 사용법 : 특구문자 사용 : \", \'
let hello = "' \"안녕\" \n하세요'";
alert(hello);