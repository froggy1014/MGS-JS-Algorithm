// function solution(nums, k){
//   let answer = 0;
//   let cnt = 0;

//   while(cnt < k){
//     if(nums[0] > nums[nums.length-1]){
//       answer += nums[0];
//       nums.shift();
//     }else{
//       answer += nums[nums.length-1];
//       nums.pop();
//     }
//     cnt++;
//   }
//   return answer;
// }
// const nums = [1, 2, 3, 5, 6, 7, 1, 3, 9]; 
// console.log(solution(nums, 5))

//Greedy로 사용하면 안된다. 1,20,3,4,5,6,7 하면 20을 안가져가지 않느냐

function solution(nums, k){
  let answer = nums.reduce((a,b) => a + b);
  let m = nums.length - k
  let sum = 0;
  let minS = 30000000;
  
  for(let i=0; i< m; i++){ sum+= nums[i] }
  minS = sum;
  let lt = 0;
  for(let rt = m; rt < nums.length; rt++){
    sum+=(nums[rt]-nums[lt])
    minS = Math.min(minS, sum);
    lt++
  }
   
  return answer-minS;
}
const nums = [2, 3, 7, 1, 2, 1, 5]; 
console.log(solution(nums, 4))
