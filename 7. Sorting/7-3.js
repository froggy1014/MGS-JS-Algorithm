function solution(){
  let answer = nums;

  for(let i = 1; i < nums.length; i++){
    let tmp = nums[i]
    let j;
    for(j = i-1; j >= 0; j-- ){
      if( nums[j] > tmp ){
        nums[j+1] = nums[j];
      }
      else  break;
    }
    nums[j+1] = tmp;
  }

  return answer;
}
const nums = [7, 6, 10, 9, 8];
console.log(solution(nums))