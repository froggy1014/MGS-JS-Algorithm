// function solution(n){
//   let total = n.flat().reduce((a,b) => a+b);
//   let cnt = 0;

//   while(++cnt){
//     let sum = 0;
//     for(let i = 0; i < n.length; i++){
//       for(let j = 0 ; j < n.length; j++){
//         if(n[i][j] <= cnt){
//           sum+= n[i][j];
//         }
//         else{
//           sum+=cnt
//         }
//       }
//       if(sum >= parseInt(total/2)) return cnt;
//     }
//   }
// }
// console.log(solution([[2, 3, 1, 5, 6], [3, 0, 7, 4, 3], [8, 5, 7, 5, 6], [9, 6, 1, 5, 5], [5, 5, 8, 5, 1]]))


function solution(board){
  let answer = 0;
  let total = 0;
  let n = board.length;
  board.forEach( e => {
    total += e.reduce((a,b)=> a+b)
  })

  function Count(m){
    let cnt = 0;
    for(let i = 0; i < n; i++){
      for(let j = 0; j < n; j++){
        if(board[i][j]>=m) cnt+=m;
        else cnt+=board[i][j];
      }
    }
    return cnt;
  }

  let lt = 1;
  let rt = 10000000000000;
  
  while(lt <= rt){
    let mid = parseInt((lt+rt)/2);
    if(Count(mid) > total/2){
      answer = mid;
      rt = mid-1;
    }
    else lt = mid+1;
  }
  return answer;
}
console.log(solution([[2, 3, 1, 5, 6], [3, 0, 7, 4, 3], [8, 5, 7, 5, 6], [9, 6, 1, 5, 5], [5, 5, 8, 5, 1]]))