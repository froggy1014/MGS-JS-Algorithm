function solution(times){
  times.sort((a,b)=> {
    if(a[1] === b[1]) return a[0]- b[0]
    else return a[1] - b[1]
  })
  let answer = 1;
  let n = times.length;
  let e = times[0][1];

  for(let i = 1; i < n; i++){
    if(times[i][0] >= e){
      answer++;
      e=times[i][1];
    }
  }
  return answer;
 }
 let times = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
 console.log(solution(times)) 