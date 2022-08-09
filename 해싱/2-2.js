// function solution(str){
//   let answer;
//   const map = new Map()

//   for(let x of str)
//   {
//     if(map.has(x)) map.set(x, (map.get(x))+1)
//     else map.set(x, 1)
//   }

//   console.log(map);

//   for(let i = 0 ; i <= str.length ; i++){
//     if(map.get(str[i]) === 1){
//       answer = i+1;
//       break;
//     }
//     else answer = -1;
//   }
//   return answer;
// }

// console.log(solution('statitsics'))

function solution(str){
  const map = new Map()

  for(let x of str) map.set(x, (map.get(x) ||0)+1)
  
  console.log(map);

  for(let i = 0 ; i <= str.length ; i++){
    if(map.get(str[i]) === 1) return i+1;
  }
  return -1;
}
console.log(solution('statitsics'))



