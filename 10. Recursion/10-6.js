function solution(n){
  let answer = 0;
  let stack = []
  let ch = Array(8).fill(0)
  const relation = Array(8).fill(0)
  for(let i = 0; i < 8; i++) {
    relation[i] = new Array(8).fill(0);
  }
  for(let x of n){
    let [a, b] = x
    relation[a][b] = 1;
    relation[b][a] = 1;
  }

  function DFS(L){
    if( L === 7) answer++
    else {
      for(let i = 1; i < 8; i++){
        if(stack.length > 0 && relation[stack.length-1][1])continue;
        if(ch[i] === 0){
          ch[i] = 1;
          stack.push(i)
          DFS(L+1)
          ch[i] = 0;
          stack.pop()
        }
      }
    }
  }
  DFS(0)
  

  return answer; 
}
console.log(solution([[1,3],[5,7],[4,2]]))