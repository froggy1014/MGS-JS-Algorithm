function solution(nums,n){
  let answer = 0;
  let lt = 1;
  let rt = Math.max(...nums);

  function count(m){
   let cnt = 0;
   for (let x of nums){
    cnt+=(parseInt(x/m))
   }
   return cnt;
  } 

  while(lt <= rt){
    let mid = parseInt((lt+rt)/2);
    if(count(mid) >= n){
      answer = mid;
      lt = mid+1
    }
    else{
      rt = mid-1;
    } 
  }
  return answer;
}
console.log(solution([802, 743, 457, 539], 11))