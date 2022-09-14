function solution(nums, c){
  let answer = 0;
  nums.sort((a,b) => a-b);
  function Count(m){
    let cnt = 1;
    let ep = nums[0];
    for(let i = 1; i < nums.length; i++) {
      if(nums[i]-ep >= c){
        cnt++;
        ep = nums[i];
      }
    }
    return cnt;
  }
  let lt = 1;
  let rt = 100000;
  while(lt <= rt){
    let mid = parseInt((lt+rt)/2);
    if(Count(mid) >= c){
      answer = mid;
      lt = mid + 1;
    }
    else rt = mid-1;
  }
  return answer;
}
console.log(solution([1, 2, 8, 4, 9], 3))