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
    answer = Math.max(answer, rt-lt+1)  
    }
  return answer;
}
let nums = [0, 150, 100, 0, 150, 0, 70, 140] ;
console.log(solution(nums, 350))