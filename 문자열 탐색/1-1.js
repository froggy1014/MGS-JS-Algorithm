// function solution(str, c){
//   let answer;
//   let list = str.split(c);
//   answer = list.length-1;

//   return answer;
// }
// console.log(solution('COMPUTERPROGRAMMING', 'R'))

// split으로 문자열을 나누게 되면, 해당 알파벳을 기점으로 둘로 갈리니까 
// 총 배열의 length에서 -1을 해주게되면 문자열안에 그 알파벳 갯수를 알 수 있다.

function solution(str, c){
  let answer = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] === c) answer++
  }

  return answer;
}
console.log(solution('COMPUTERPROGRAMMING', 'R'))

// for문으로 문자열을 인덱스를 돌면서 문자 하나하나를 알파벳과 비교하며
// 같을때마다 answer++을 해준다. 
