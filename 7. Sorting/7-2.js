// 버블 정렬

// function solution(nums){
//   let answer = nums;
//   let n = nums.length

//   for(let i = n-1; i >= 0 ; i--){
//     for(let j = 0; j < i; j++){
//       if( nums[j] > nums[j+1]){
//         [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
//       }
//     }
//   }
//   return answer;
// }
// const nums = [5, 4, 2, 1, 3];
// console.log(solution(nums))

function solution(nums){
  let answer = nums;
  let n = nums.length

  for(let i = 0; i < n-1 ; i++){
    for(let j = 0; j < n-i-1; j++){
      if( nums[j] > nums[j+1]){
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
      }
    }
  }
  return answer;
}
const nums = [5, 4, 2, 1, 3];
console.log(solution(nums))

// nums.length - i - 1 로 이중포문 하나씩 차감함.

