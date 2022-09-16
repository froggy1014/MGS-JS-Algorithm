// function solution(n){
//   for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n; j++){
//       console.log(i,j)
//     }
//   }
// }
//   solution(3);

function solution(n,k){
  let arr = [];

  function DFS(L){
    if(L===k){
      console.log(arr);
    }
    else{
      for(let i = 1; i <= n ; i++){
        arr.push(i)
        DFS(L+1);
        arr.pop();
      }
    }
  }
  DFS(0)
}
solution(3,3);