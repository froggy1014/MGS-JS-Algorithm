function solution(s){
  let answer = 'YES';
  let lt = 0 ;
  let rt = s.length-1;
  let str = s.toLowerCase();
  while(lt < rt){
    if(str[lt]!==str[rt]) return "NO";
    else {
      lt++;
      rt--;
    }
  }
  return answer;
}
console.log(solution('gooG'));