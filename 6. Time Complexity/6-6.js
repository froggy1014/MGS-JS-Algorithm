function solution(k){
  let answer = 0;
  let lt = 0;
  let sum = 0 ;
  let nums = Array.from({length:k}, (_,index)=> {return index+1}) 

  for( let rt = 0; rt < nums.length; rt++){
    sum += nums[rt];
    while(sum > k){
      sum -= nums[lt]
      lt++
    }
    if(sum === k) answer++;
  }

  return answer-1;
}
console.log(solution(98765))

// function solution(n){
//   let answer=0, sum=0;
//   let m=parseInt(n/2)+1;
//   let nums=Array.from({length:m}, (v, i)=>i+1);
//   let lt=0;
//   for(let rt=0; rt<m; rt++){
//       sum+=nums[rt];
//       while(sum>n){
//           sum-=nums[lt++];
//       }
//       if(sum===n) answer++;
//   }
//   return answer;
// }
// console.log(solution(15));