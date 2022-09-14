function solution(n,m){
  let answer;
  let lt = 0;
  let rt = n.length-1
  let nums = n.sort((a,b) => a-b);
  while(lt<=rt){
    let mid = parseInt((lt+rt)/2)
    if(nums[mid] === m){
      return mid+1
    }
    else if(nums[mid] > m) rt = mid-1;
    else lt = mid+1;
  }
  return answer;
}
console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32))