// function solution(nums){
//   return nums.sort((a, b) => {return a-b} )
// }
// const nums = [2, 8, 3, 6, 1, 7, 5, 9];
// console.log(solution(nums))

function solution(nums){
  let answer = nums;

  for(let i = 0; i < nums.length-1; i++){
    let idx = i;
    for(let j = i+1 ; j < nums.length; j++){
      if(nums[j] < nums[idx]) idx = j;
    }
    // let tmp = nums[i];
    // nums[i] = nums[idx];
    // nums[idx] = tmp
    [nums[i], nums[idx]] = [nums[idx], nums[i]]
  }
  
  return answer;
}
const nums = [2, 8, 3, 6, 1, 7, 5, 9];
console.log(solution(nums))