function solution(nums){
  let answer = nums;

  for(let i = nums.length-1; i >= 0 ; i--){
    for(let j = 0; j < i; j++){
      if( nums[j] > nums[j+1]){
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
    }
  }
}
  return answer;
}
const nums = [2, 8, 3, 6, 1, 7, 5, 9];
console.log(solution(nums))