function solution(nums){
  // answer를 일단 최고값으로 설정 
  let answer = Number.MAX_SAFE_INTEGER;
  // Map 빈 객체 생성
  const map = new Map()

  // nums 배열을 받아 map.set()을 통해 
  // map객체 내에 넣어줌. 
  nums.map(v => {
    map.set(v, (map.get(v)||0)+1 )
  })

  console.log(map);

  // map 객체네 키와 값을 destructuring 하여 받아옴 
  // key와 value가 같다면 자기 분열수이므로, answer에 넣어주고,
  // 문제 제한 사항에 최소수를 찾으랬으니 if문으로 한번 걸러준다. 
  for([key,val] of map){
    if(key === val){
      if(key<answer) answer=key;
    }
  }

  // 만약 answer가 초기값 그대로라면, -1을 그대로 반환 
  if(answer === Number.MAX_SAFE_INTEGER) return -1
  return answer;
}
console.log(solution([5,3,3,3,2,2,1] ))
