// 선택정렬

function solution(nums){
  let answer = nums;
  let n = nums.length

  for(let i = 0; i < n-1; i++){
    let minIdx = i;
    for(let j = i+1 ; j < n; j++){
      if(nums[j] < nums[minIdx]) minIdx = j;
    }
    [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]]
  }
  return answer;
}
const nums = [5,4,2,1,3] ;
console.log(solution(nums))

