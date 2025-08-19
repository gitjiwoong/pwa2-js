// 1.산술 연산자
let num1 = 5;
let num2 = 10;
let num4 = 15;
console.log(num1 + num2); // 더하기
console.log(num4 - num2); // minus
console.log(num2 * num1); // 곱하기
console.log(num1 / num2); // 나누기
console.log(num4 % num1);  // 나머지)

// 2. string link operator
let firstName = 'gongyou'
let lastName = 'lee'

console.log(lastName + firstName);
console.log(lastName.concat(firstName));

// 산술대입연산자
let num3 = 0;
num3 = num3- num1 
num3 += num1;
num3 -= num1;
num3 *= num2;
num3 /= num1;
num3 %= num1; 

// 증감 연산자
num4 --;
console.log(num4);

// (전위|후위) 증감 연산자
console.log(++num3);
console.log(num2);

// 비교 연산자(>,<,>=,<=)
console.log(num3>num1);
console.log(num3<num1);
console.log(num3>=num1);
console.log(num3<=num1);

// ==(data type check X "incomplete comparsion), === (data type check O "complete comparsion")
console.log(1 == '1');
console.log(1 != '1');
console.log(1 === '1');
console.log(1 !== '1');


// 논리 연산자
console.log((1 === 1) && (1 === 0));
console.log((1 === 1) || (1 === 0));
console.log(!(1 === 1))

// 삼항연산자(ternary operator)
// 조건식 ? 참일 경우 처리 : 거짓일 경우 처리
let rank = 3;
let result = rank <= 2 ? '통과' : '거부';
console.log(result);