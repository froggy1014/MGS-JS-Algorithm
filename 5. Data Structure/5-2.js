function solution(s){
  let stack = [];

  for (let x of s){
    if(x === ')'){
      if(stack.indexOf('(') === -1) stack.push(x);
      else stack.pop();
    }
    else stack.push(x);
  }
  return stack.length;
}
console.log(solution("())(("))

