// // 내꺼
// function solution(n){
//   let binary = ''

//   function DFS(m){
//     if(m === 0) return ;
//     else{
//       DFS(Math.floor(m/2))
//       binary+= m%2
//     }
//   }
//   DFS(n)
//   return binary;
// }
// console.log(solution(11))

// function solution(n){
//   return n.toString(2);
// }
// console.log(solution(11))



// 선생님꺼 
function DFS(n){
  if(n === 0) return;
  else{
    DFS(parseInt(n/2))
    console.log(n%2);
  }
}
DFS(11);