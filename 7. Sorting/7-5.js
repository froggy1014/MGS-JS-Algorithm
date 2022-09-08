function solution(nums,k){
  let result = 0;
  let cases = [];
  
  nums.sort((a,b) => a-b);
  
  for(let i = 0; i < nums.length; i = i+2){
    let sub = nums[i+1] - nums[i];
    if(sub > 0) cases.push(sub);
    result += nums[i];
  }
  
  cases.sort((a,b) => b-a);

  for(let j = 0; j < cases.length; j++){
    if(k === j) break;
    result += cases[j];
  }
  
  return result;
}
const nums = [7, 8, 5, 9, 3, 1, 3, 1, 1, 9] ;
console.log(solution(nums,2))

