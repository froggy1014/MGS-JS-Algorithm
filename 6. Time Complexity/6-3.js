// function solution(nums, k){
//   let answer = 0;

//   for(let i = 0; i < nums.length; i++){
//     let sum = 0;
//     let rt = i+1;
//     sum += nums[i]
//     while(sum <= k){
//       if(sum === k) {
//         answer++
//         break;
//       }
//       sum += nums[rt];
//       rt++;
//     }
//   }

//   return answer;
// }
// const nums = [1, 2, 1, 2, 1, 2, 1]  ; 
// console.log(solution(nums, 3))

// function solution(nums, k){
//   let answer = 0;
//   let lt = 0;
//   let sum = 0;
//   for (let rt = 0; rt < nums.length; rt++){
//     sum += nums[rt];
//     while (sum > k) {
//       sum -= nums[lt]
//       lt++
//     }
//     if(sum === k) answer ++
//   }
//   return answer;
// }
// const nums = [1, 1, 1, 1, 1, 1, 3]  ; 
// console.log(solution(nums, 3))


function solution(nums, k){
  let answer = 0;
  let lt = 0;
  let sum = 0 ;

  for( let rt = 0; rt < nums.length; rt++){
    sum += nums[rt];
    while(sum > k){
      sum -= nums[lt]
      lt++
    }
    if(sum === k) answer++;
  }
  return answer;
}
let nums = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(nums, 6))