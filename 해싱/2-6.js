// function solution(str){
//   let answer = []
//   let max = Number.MIN_SAFE_INTEGER;
//   let key = '';
//   const sH = new Map()

//   for(let x of str)
//   {
//     sH.set(x, (sH.get(x)||0)+1) 
//   }

//   sH.forEach((v,i) => {
//     if(max < v){
//       max = v
//       key = i
//     }
//   })

//   sH.forEach((v,i) => {
//     if(key === i) answer.push(0)
//     else answer.push(max - sH.get(i))
//   })
//   return answer;
// }
// console.log(solution("aabb"))

function solution(str){
  // answer가 배열로 나와줘야하니 배열로 초기화, 
  // 빈객체 생성 
  // 3개 입력값중에 상대적으로 최고 값을 찾기위한 max 변수 초기화
  let answer = [];
  let sH = {};
  let maxF=0;

  // for ... of를 통해서 값을 빈 객체에 넣어준다. 누적값을 더해준다. 
  // 넣을때마다 결국 제일 큰값을 max변에 할당하기 위해 Math.max 값을 넣어줌 
  for(let x of str){
    sH[x] = (sH[x]||0) +1;
    maxF=Math.max(maxF, sH[x])
  }

  // 문자열이 a,b 두개만 들어갔을 경우를 대비해 
  // abc 문자열을 임시로 만들어 놓음 
  let tmp = "abc";

  for(let x of tmp)
  {
    // 어차피 문제는 a,b,c 소문자로만 이루어진 문자열이기 때문에
    // for ... of 로 하나씩 가져오면서 객체에 해당 키값이 있다면
    // 기존 객체 value 값을 F라는 변수에 할당하고, 
    // 없다면 0을 할당한 뒤 (maxF-F)를 계산하고 
    // answer에 push를 해준다. 
    let F = sH[x] === undefined ? 0 : sH[x];
    answer.push(maxF-F);
  }
  return answer;
}
console.log(solution("aabb"))