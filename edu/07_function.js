// 함수(f(x))
// 입력을 받아 출력을 하는 일련의 과정을 정의한 것


// 함수 선언 방법
// 1. 함수 선언문
// (파라미터 or 매개변수) : 외부로부터 입력받은 값을 저장하는 변수
function f(x, y){
  return x + y
}

// (인자 or agument) : 아래 함수에서 1,2처럼 함수를 호출할 때 전달 해주는 값
let resultfunction = f(1, 2); // 함수 호출 (호이스팅)


// 함수 선언식 방법은 재할당이 가능함
function fnc3(a,b) {
return 
}

// 2. 함수 표현식 (호이스팅의 영향을 받지 않음) (재할당이 불가능함)
const fuc4 = function fnc4(q,w){
  return q + w
}
fnc4(q,w)

// 화살표 함수 (다른 함수 표현식보다 간략하게 함수 표현이 가능함)
const add = (a, b) => a + b;
console.log(add(2,3)); // 5

// 비동기 처리
// 변수 참조, 함수 종류 
// 익명 함수, 콜백 함수(다른 함수의 파라미터로 전달되어 사용되는 함수), 즉시실행함수, 비동기함수

// 익명함수
settimeout(function() {
  console.log("3초 후 실행");
}, 3000)

// 즉시 실행 함수 (IIFE: Immediately Invoked Function Expression)
// (function Check(f)
(function () {
return
console.log()
}) ()

// 비동기 함수 (Async Function) (Constructor Function)
async function fetchData() {
  return "데이터";
}
fetchData().then(data => console.log(data));

// 콜백 함수
function processUserInput(callback){
  const name = "Genesis"
  callback(name);
}

processUserInput((name) => {
  console.log("Hello" + name)
})
