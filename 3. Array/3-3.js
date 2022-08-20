// function solution(arr){
//   let answer = 0;
//   let max = 0

//   for(let i = 0 ; i < arr.length; i++)
//   {
//     if(arr[i] < arr[i+1]){
//       max += arr[i+1] - arr[i];  
//     }
//     else{
//       answer = Math.max(answer, max)
//       max = 0;
//     }
//   }  
//   return answer;
// }
// let arr = [8, 12, 2, 3, 7, 6, 12, 20, 22]  ;
// console.log(solution(arr))

function solution(arr) {
  let result = 0;
  let diff = 0;
  for (let i = 0; i < arr.length -1; i++) {
    if (diff > result) result = diff
    if (arr[i] < arr[i+1]) {
      diff += arr[i+1] - arr[i]
    } else {
      diff = 0
    }
  }
  if(diff > result) result = diff;

  return result;
}
let arr = [8, 12, 2, 3, 7, 6, 12, 20, 22]  ;
console.log(solution(arr));

// 선생님 정답