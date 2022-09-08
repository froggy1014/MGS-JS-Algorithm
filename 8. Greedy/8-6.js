// 다른 누군가보다 반드시 1개라도 높은 사람이면 선출됨.

function solution(bodies){
  let answer = 1;
  bodies.sort((a,b) => b[0] - a[0])
  let max = bodies[0][1];

  for(let x of bodies){
    if(max < x[1]){
      answer++;
      max = x[1];
    }
  }

  return answer;
}
const bodies = [[172,67],[183,65],[180,70],[170,72],[181,60]]
console.log(solution(bodies))