function solution(nums,k){
  let result = 0;

  nums.sort((a,b) => a-b);
  
  card = [];

  for(let i = 0; i < nums.length; i = i+2){
    let sub = nums[i+1] - nums[i];
    if(sub > 0) card.push(sub);
    result += nums[i];
  }
  
  card.sort((a,b) => b-a);

  for(let j = 0; j < k; j++){
    result += card[j];
  }
  
  return result;
}
const nums = [7, 8, 5, 9, 3, 1, 3, 1, 1, 9] ;
console.log(solution(nums,3))
