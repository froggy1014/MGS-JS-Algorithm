function solution(str){
  let answer = 0;

  for(let x of str){
    if(x !== x.toLowerCase()) answer++;
  }

  return answer;
}
console.log(solution("IT IS TIME TO GO"))