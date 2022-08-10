function solution(str){
  // 반환 값으로 정수를 반환하니 0으로 초기화
  // set 객체 생성 
  // sH 빈객체 생성 
  let answer = 0;
  let set = new Set();
  let sH = {};

  // 언제나 그렇듯이 문자열을 for ... of로
  // 순회하면 sH 객체에 쌓아줍니다.
  for(let x of str) 
  {
    sH[x] = (sH[x]||0)+1;
  }

  // 객체는 iterable이 아니므로 일단 for ...of가 불가합니다.
  // 그래서 Object.keys를 통해 객체 key 값들을 배열로 반환합니다.
  for(let x of Object.keys(sH)){
    // while문 조건에 set 객체가 key값을 갖고 있는지 설정
    // 만약에 sH[x]값과 같은 값을 가지고 있다면 
    // 알던 answer를 +1 해주고, sH[x]값에 -1을 해줘서 
    // 다른값이 되도록 해서, while문을 탈출하게끔 한다. 
    while(set.has(sH[x])){
      answer++
      sH[x]--;
    }
    // sH[x]의 value값이 0까지 되었다면 
    // set 객체에 굳이 넣지않고 skip합니다. 
    // while문에서 value가 0으로 나오기에 false로
    // 인식이되어 다음 value값이 while로 진입을 못함 
    if(sH[x] === 0) continue;
    set.add(sH[x]);
  }
  return answer;
}
console.log(solution("aaabbc"))