function solution(nums){
  let answer = Array.from({length:nums.length}).fill(0);
  
  for(let i = 0; i < nums.length-1; i++){
    let min = [nums[i],i]
    for(let j = i+1; j < nums.length; j++){
      if(min[0] > nums[j]) min = [nums[j],j]
    }
    let newIdx = min[1];
    if(i !== newIdx){
      answer[i]++;
      answer[newIdx]++;
      [nums[i], nums[newIdx]] = [nums[newIdx], nums[i]]
    }
  }
  return answer;
}
const nums = [6, 7, 8, 9, 10];
console.log(solution(nums))