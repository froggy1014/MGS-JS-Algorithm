function solution(nums, k){
  let answer = 0;
  let lt = 0;
  let sum = 0;

  for(let rt = 0; rt < nums.length; rt++){
    sum += nums[rt];
    while(sum > k){
      sum -= nums[lt];
      lt++
    }
    answer += (rt+lt-1 )
  }

  return answer;
}
const nums = [1, 3, 1, 2, 3]; 
console.log(solution(nums, 5))