// function solution(board){
//   let answer = 0;
//   let n = board.length;
//   let diagonalR = 0;
//   let diagonalL = 0;
//   for(let i = 0; i < n ; i++){
//     let sum1 = sum2 = 0; 
//     for(let j = 0; j < n ; j++){
//       sum1 += board[i][j];
//       sum2 += board[j][i];
//     }
//       diagonalR += board[i][i];
//       diagonalL += board[i][n-1-i];
//       answer = Math.max(answer, sum1, sum2, diagonalR
//         , diagonalL);
//     }
//   return answer; 
// }
// const board = [
// [10, 13, 10, 12, 15],
// [12, 39, 30, 23, 11],
// [11, 25, 50, 53, 15],
// [19, 27, 29, 37, 27],
// [19, 13, 30, 13, 19]
// ]
// console.log(solution(board))



// function solution(nums){
//   let answer = 0;
//   let n = nums.length;
//   let sum3 = sum4 = 0

//   for(let i = 0; i < n ; i++){
//     let sum1 = sum2 = 0;
//     for(let j = 0 ; j < n; j++){
//       sum1 += nums[i][j]
//       sum2 += nums[j][i]
//     }
//     answer = Math.max(answer,sum1,sum2,sum3,sum4);
//     for(let k = 0 ; k < n ; k++){
//       sum3 += nums[i][i]
//       sum3 += nums[i][n-i-1]
//     }
//   return answer;
// }
// }
// const nums = [
//   [10, 13, 10, 12, 15],
//   [12, 39, 30, 23, 11],
//   [11, 25, 50, 53, 15],
//   [19, 27, 29, 37, 27],
//   [19, 13, 30, 13, 19]
// ];

// console.log(solution(nums));



function solution(board){  
	let answer=Number.MIN_SAFE_INTEGER;
	let n=board.length;
	for(let i=0; i<n; i++){
		let sum1=sum2=0;
		for(let j=0; j<n; j++){
			sum1+=board[i][j];
			sum2+=board[j][i];
		}
		answer=Math.max(answer, sum1, sum2);
	}
	sum1=sum2=0;
	for(let i=0; i<n; i++){
		sum1+=board[i][i];
		sum2+=board[i][n-i-1];
	}  
	answer=Math.max(answer, sum1, sum2); 
	return answer;
}  
console.log(solution([[10, 13, 10, 12, 15], 
	[12, 39, 30, 23, 11], 
	[11, 25, 50, 53, 15], 
	[19, 27, 29, 37, 27], 
	[19, 13, 30, 13, 19]]));