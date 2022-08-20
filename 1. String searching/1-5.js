// function solution(str){
//   let answer = [...new Set(str.split(''))].join('');
//   return answer;
// }
// console.log(solution("ksekkset"))

// string을 split로 배열로 만들어주고, new Set을 통해 중복을 제거해주고 객체로 반환 
// 다시 중괄호([])와 전개연산자로 묶어서 배열로 다시 만들어준다음에 join으로 다시 문자열로 만들어줌

function solution(str){
  let answer = str.split('').filter((v,i,self) => self.indexOf(v) === i).join('')
  return answer; 
}
console.log(solution("ksekkset"))

// filter는 조건이 true가 되는 값만 반환한다는걸 인지하고 있으면됨. 그리고 마지막 join메소드를 통해 문자열로 만들어줌 