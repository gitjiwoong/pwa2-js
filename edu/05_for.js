// for 문
for(let i = 0; i < 5; i++) {
  console.log(i)
  
  if(i >= 3) {
    break;
  }
}

// contiune
for(let i=0; i<5; i++){
  console.log(i)
  if(i>=3){

    continue
  }
}

//for(let i=3; i)

// 다중루프
for(i=0; i<3; i++){
  console.log(`바깥쪽loop${i}번째`)
  for(let z = 0; z < 3; z++){
console.log(`안쪽루프 loop${z}번째`)
  }
  
}

// 구구단
for(let dan=2; dan<10; dan++){
  console.log(`${dan}단`)
  for(let num=1; num<10; num++){
console.log(`${dan} X ${num} = ${dan} * ${num}`)
  }
}