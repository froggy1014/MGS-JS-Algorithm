// function solution(nums, k){
//   let answer = 0;
  
//   for(let i = 0; i < nums.length-(k-1); i++){
//     let sum = 0;
//     for(let j = i; j < i+k; j++){
//       sum += nums[j]
//     }
//     answer = Math.max(answer, sum);
//   }

//   return answer;
// }
// const nums = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]; 
// console.log(solution(nums, 3))

function solution(nums, k){
  let answer = 0;
  let sum = 0;
  for(let i = 0; i < k; i++){
    sum+= nums[i];
  }
  answer = sum;
  let lt = 0 ;
  for(let rt = k; rt < nums.length; rt++){
    sum+=(nums[rt]-nums[lt])
    answer = Math.max(answer, sum);
    lt++
  }


  return answer;
}
const nums = [1, 2, 3, 5, 6, 7, 1, 3, 9]; 
console.log(solution(nums, 5))


