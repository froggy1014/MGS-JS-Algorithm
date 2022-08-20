// function solution(board){
//   let answer = 0;
//   let n = board.length;
//   let maxr = [];
//   let maxc = [];

//   for(let i = 0 ; i < n ; i++){
//     let rowSum = 0;
//     let columnSum = 0;
//     for(let j = 0 ; j < n ; j++){
//       rowSum = Math.max(rowSum, board[i][j]);
//       columnSum = Math.max(columnSum, board[j][i]);
//     }
//     maxr.push(rowSum);
//     maxc.push(columnSum);
//   }

//   for(let r = 0; r < n ; r++){
//     for(let c = 0; c < n; c++){
//       let standard = Math.min(maxr[r], maxc[c])
//         answer += standard - board[r][c]
//     }
//   }
//   return answer;
// }
// const board = [
//   [3, 7, 6, 2], 
//   [5, 3, 8, 7], 
//   [3, 2, 5, 7], 
//   [7, 7, 5, 3]
// ];

// console.log(solution(board))



function solution(board){  
	let answer=0;
	let n = board.length;
	let row = Array(n).fill(0);
	let col = Array(n).fill(0);
	for(let i=0; i<n; i++){
		for(let j=0; j<n; j++){
			row[i] = Math.max(row[i], board[i][j]);
			col[i] = Math.max(col[i], board[j][i]);
		}
	}
	for(let i=0; i<n; i++){
		for(let j=0; j<n; j++){
			answer+=(Math.min(row[i], col[j])-board[i][j]);
		}
	}
	return answer;
}
console.log(solution([
  [2, 5, 7, 3], 
  [6, 8, 9, 7], 
  [3, 2, 4, 5], 
  [7, 2, 5, 8]]
  ));