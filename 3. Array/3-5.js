function solution(nums){
  let answer = 0;
  let n = nums.length;
  let peak = [];
  for(let i = 1; i < n-1; i++){
    if(nums[i-1] < nums[i] && nums[i] > nums[i+1]) peak.push(i)
  }
  for(let pos of peak){
    let lt = pos;
    let rt = pos;
    let len = 1;
    while(lt>0 && nums[lt-1]<nums[lt]){
      len++;
      lt--;
    }
    while(rt<n-1 && nums[rt+1]<nums[rt]){
      len++;
      rt++;
    }
    answer = Math.max(answer, len);
  }
  return answer;
}

console.log(solution([1, 3, 2, 5, 7, 4, 2, 5, 1]));
console.log(solution([1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]));
console.log(solution([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]));

