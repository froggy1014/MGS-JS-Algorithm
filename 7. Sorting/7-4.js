function solution(nums){
  let n = nums.length;
  let answer = Array(n).fill(0);
  
  for(let i = 0; i < n-1; i++){
    let min = [nums[i],i]
    for(let j = i+1; j < n; j++){
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



// const solution = (nums) => {
//   let n = nums.length
//   let answer = Array(n).fill(0)
//   let tempArr = [...nums]
//   for (let i = 0; i < n - 1; i++) {
//     let minI = i
//     for (let j = i + 1; j < n; j++) {
//       if (tempArr[j] < tempArr[minI]) {
//         minI = j
//       }
//     }
//     if(minI !== i) {
//       [tempArr[i], tempArr[minI]] = [tempArr[minI], tempArr[i]]
//       answer[minI]++
//       answer[i]++
//     }
//   }
//   return answer;
// }