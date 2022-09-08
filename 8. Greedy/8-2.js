function solution(nums){
  
  nums.sort((a,b) => a[0]-b[0]);
  let answer = 0;
  let n = nums.length;
  let s = nums[0][0];
  let e = nums[0][1];

  for(let x = 1 ; x < n ; x++){
    if(nums[x][0] <= e && nums[x][1] > e){
      e = nums[x][1];
    }
    else if(nums[x][0] > e){
      answer += e - s;
      s = nums[x][0];
      e = nums[x][1];
    }
  }
  answer += e - s;    
  return answer;
}
const nums = [[1, 5], [2, 4], [7, 10]];
console.log(solution(nums))