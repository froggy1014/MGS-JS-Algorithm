
function solution(n,k){
  let arr = [];
  let ch = Array(n+1).fill(0);

  function DFS(L){
    if(L===k){
      console.log(arr);
    }
    else{
      for(let i = 1; i <= n ; i++){
        if(ch[i] === 0){
          ch[i] = 1;
          arr.push(i)
          DFS(L+1)
          ch[i] = 0;
          arr.pop()
        }
      }
    }
  }
  DFS(0)
}
solution(3,2);