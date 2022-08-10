function solution(str){
  // sH 빈 객체를 생성해준다. 
  // 홀수를 카운트 해줄 변수 선언
  let sH = {}
  let odd = 0;

  // 문자열 한글자씩 가져와서 
  // 빈객체에 넣어준다. 
  for(let x of str){
    sH[x] = (sH[x]||0)+1
  }

  // sH 객체를 Object.keys로 배열로 반환받아
  // for ... of로 바꾸고 해당 키의 value값이 
  // 빈도 수 일테니까 그 값이 홀수 인지 확인하게끔
  // if문을 만들어 홀수를 카운트하는데, 
  for(let x of Object.keys(sH)){
    if(sH[x] % 2 === 1 ) odd++;
  }

  // 여기서 팰린드롬의 원리를 알아야할 필요가 있는데, 
  // 만약에 같은 문자를 기준으로 그 빈도수가 모두 짝수거나
  // 모두가 짝수인데 한 문자만 홀수면 그 문자열은 
  // 팰린드롬이 가능하다. 그렇기 때문에 홀수인 문자를 
  // 카운트를 한다음에 반환을 하는 것을 볼 수 있다. 
  return odd<=1;
}
console.log(solution("abcbbbe"))

