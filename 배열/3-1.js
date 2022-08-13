// function solution(arr){
//   let answer = 1;

//   for(let i = 1 ; i < arr.length; i++){
//     let flag=true;
//     for(let j = i-1; j >= 0; j--){
//       if(arr[j]>=arr[i]) {
//         flag=false;
//         break;
//       }
//     }
//     if(flag===true) answer++;
//   }
//   return answer;
// }

// let arr = [130, 135, 148, 140, 145, 150, 150, 153] ;
// console.log(solution(arr))

// 이중포문으로 하면 시간초과할 수가 있음 
// 제한사항 잘 확인할것 



function solution(nums) {
  let maxN = 0;
  let answer = 1;


  for (let i=1; i<nums.length; i++) {
      if (nums[i] > nums[i-1]) {
          if (nums[i] > maxN) {
              maxN = nums[i];
              answer++;
          }
       }
  }   
  return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 153]));

// 왠만하면 이중포문으로 하지말고, 1중포문으로 한번에 훑으면서 
// 값을 구할수 있으면 구하는게 맞다 하셨다. 