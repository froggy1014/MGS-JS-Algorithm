function solution(str, k){
  let sH = {}
  for(let x of str){
    sH[x] = (sH[x]||0)+1;
  }

  let odd = 0;
  for(let x of Object.keys(sH)){
    if(sH[x] % 2 === 1 ) odd++;
  }

  // 앞선 팰린드롬 문제와 같지만 여기서는 k 변수로 들어오는 
  // 숫자만큼을 펠린드롬 문자열로 만들 수 있는지 없는 판별하는데,
  // 선생님이 말하기를.. 수학적으로 홀수의 갯수가 주어진 k 값보다
  // 낮거나 같으면 만들수있다고 한다. 그래서 마지막 return 표현식만
  // 바꾸었습니다. 
  return odd <= k;

}
console.log(solution("aabbccee",2))
console.log(solution("abcabcabcaef",3))