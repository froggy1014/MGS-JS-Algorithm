function solution(s){
  let answer = [];

    for(let x of s){
      if(answer[answer.length-1] === x) answer.pop()
      else answer.push(x);
    }

  return answer.join('');
}
console.log(solution("bacccaba"))


function solution(s){
  let answer;
  let stack=[];
  for(let i=0; i<s.length; i++){
      if(stack.length>0 && stack[stack.length-1]===s[i]){
          stack.pop();
      }
      else stack.push(s[i]);
  }
  answer=stack.join('');
  return answer;
}
console.log(solution("acbbcaa"));