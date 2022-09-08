function solution(people){
  let answer = 0;
  let cnt = 0;
  let T_line = [];
  
  for( let x of people){
    T_line.push([x[0], 1],[x[1], 2]);
  }
  
  T_line.sort((a,b) => {
    if(a[0] === b[0]) return b[1] - a[1]
    else return a[0] - b[0]
  });

  for(let y of T_line){
    if(y[1] === 1) cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  
  return answer;
}
const nums = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]] ;
console.log(solution(nums))