function solution(nums, c) {
  let answer = nums.length - 1;
  let lt = 0;
  let min = 0;
  nums.sort((a, b) => a - b);

  while (nums.length >= 1) {
    if (nums[lt] + nums.at(-1) <= c) nums.shift();
    nums.pop();
    min++;
  }
  answer = Math.min(answer, min);
  return answer;
}
const nums = [90, 50, 70, 80, 100, 60];
console.log(solution(nums, 140));
