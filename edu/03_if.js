// if문:조건에 따라 처리를 하는 문법(조건문)
test_score = 50
score_notice='당신의 시험 결과는'
if (test_score === 100) {
  else if (test_score>100) {
    grade ='오류입니다'
  } 
grade = 'A+입니다'
}else if (90<=test_score && test_score <100){
  grade='A입니다'
}else if (80<=test_score && test_score <90){
  grade='B+입니다'
}else if (70<=test_score && test_score <80){
  grade='B입니다'
}else if (60<=test_score && test_score <70){
  grade='C입니다'
}else {
  grade='D입니다'
}
console.log(score_notice.concat(grade).concat())
console.log(`당신의 시험결과는`)

// 1번문제의 정답은 2, 2번 문제의 정답은 5
// 1번 문제와 2번 문제 모두 정답이면 100점, 둘 중 하나만 정답이면 50점, 둘 다 정답이 아니면 0점 출력
answer_question1 = 2;
answer_question2 = 5;
score = 0;
if (answer_question1 === 2 && answer_question2 === 5) {
  console.log('100점입니다');
}else if (answer_question1 === 2 || answer_question2 === 5){
  console.log('50점입니다');
}else{
  console.log('0점입니다');
}

//switch문
switch(food) {
  case '돈까스':
    foodKinds = '경양식'
    break
    case '김치찌개':
      default:
}

let food = '초밥'
if (food='돈까스'){
food_kinds = '경양식'
}else if (food='호박'){
  food_kinds='일식'
}
else if(food='짜장면'){
  food_kinds='중식'
}else if(food='떡볶이'){
  food_kinds='분식'
}