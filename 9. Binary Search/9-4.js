function solution(nums,h){
  let answer = 0;
  let lt = 1;
  let rt = Math.max(...nums);


  function eating(balls){
    let sum = 0;
    for(let x of nums){
      sum += (Math.ceil(x/balls))
    }
    return sum;
  }


  while(lt <= rt){
    let mid = parseInt((lt+rt)/2)
    if(eating(mid) <= h){
      answer = mid;
      rt = mid - 1;
    }
    else 
      lt = mid + 1;
  }
  return answer;
}
console.log(solution([29, 12, 24, 5, 19], 6))