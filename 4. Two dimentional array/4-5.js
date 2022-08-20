// function solution(board) {
//   let answer = 0;
//   let n = board.length;
//   let x = [-1, 0, 1, 0];
//   let y = [0, 1, 0, -1];

//   for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         let flag = true;
//           for(let d = 0 ; d < 4; d++){
//             let newx = i+(x[d]);
//             let newy = j+(y[d]);
//             if(newx >= 0 &&
//                newy >= 0 &&
//                newx < n &&
//                newy < n &&
//                board[newx][newy] >= board[i][j])
//                {
//                 flag = false;
//                 break;
//               }
//             }
//             if(flag) answer++
//           }
//       }
//   return answer;
// }
// const board=[
// [5, 3, 7, 2, 3],
// [3, 7, 1, 6, 1],
// [7, 2, 5, 3, 4],
// [4, 3, 6, 4, 1],
// [8, 7, 3, 5, 2]
// ];

// console.log(solution(board));

function solution(board) {
  let answer = 0;
  let n = board.length;
  let x = [-1, 0, 1, 0];
  let y = [0, -1, 0, 1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = true;
      if (i-1>= 0 && board[i - 1][j] > board[i][j]) flag = false;
      if (j-1>= 0 &&board[i][j - 1] > board[i][j]) flag = false;
      if (i+1 < n && board[i + 1][j] > board[i][j]) flag = false;
      if (j+1 < n && board[i][j + 1] > board[i][j]) flag = false;
      if (flag) answer++;
    }
  }
  return answer;
}

const board = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(board));
// 이해를 돕기위한 솔루션 

