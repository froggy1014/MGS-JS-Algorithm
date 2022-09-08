function solution(nums){  
  let n = nums.length;
  answer = [];
  for(let i=1; i<n; i++){
    let tmp = nums[i];
    let j, cnt = 0;
    for(j=i-1; j>=0; j--){
      if(nums[j] > tmp){
        nums[j+1] = nums[j];
        cnt++;
      }
      else break;
    }
    nums[j+1] = tmp;
    answer.push(cnt);
  }
  return answer;
}

console.log(solution([5, 4, 2, 1, 3]));
console.log(solution([6, 7, 8, 9, 10]));

