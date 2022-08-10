function solution(str){
  const map = new Map()

  for(let x of str){
    map.set(x, (map.get(x)||0)+1)
    if(map.get(x) === 2) return x;
  } 
  return -1;

}
console.log(solution('aabb'))

// 본인은 new Map()으로 빈 map 객체를 만들어주고 
// map 객체에 for ... of 문으로 가져오는 x키가 없다면,
// 키를 생성해주면서 1로 초기화 시켜주고, 있다면 그 value에서 +1을 해준다.
// map.set 안에 map.get을 사용해서 기존 값을 업데이트 해줄 수 있다는 걸 알게 됨.

/* function solution(s) {
   cnt = {};

   for(let x of s) {
       cnt[x] = (cnt[x] || 0) + 1;
       if(cnt[x] === 2) {
           return x;
       }
   }
   return -1;
}
console.log(solution("abccbacz")); */

// 선생님은 일단 객체 리터럴로 바로 빈객체를 만들어주셨다는게 다르다. 