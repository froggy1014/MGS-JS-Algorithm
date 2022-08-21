// function solution(n,votes,k){
//   let answer = []
//   let voteCase = votes.length;
//   let max = [];
//   let sH = new Map();
//   let sV = new Map();

//   for(let i = 0; i < voteCase; i++){
//     sH = sH.set(votes[i][1], (sH.get(votes[i][1])||0)+1)
//   }
//   for(let j = 0; j < n; j++){
    
//   }
  
//   return answer;
// }
// const votes = [[0, 1], [0, 3], [1, 2], [2, 0], [2, 3], [3, 0]] 
// console.log(solution(4,votes,2));
function solution(n, votes, k){  
	let answer=[];
	let ch = Array.from(Array(n), ()=>Array(n).fill(0));
	let candidate=Array(n).fill(0);

	for(let [a, b] of votes){
		ch[a][b]=1;
	}


	for(let i=0; i<n; i++){
		let cnt=0;
		for(let j=0; j<n; j++){
      if(ch[j][i]===1) cnt++;
		}
		if(cnt>=k) candidate[i] = 1;
	}

	for(let i=0; i<n; i++){
		let cnt=0;
		for(let j=0; j<n; j++){      
			if(ch[i][j]===1 && candidate[j]===1) cnt++;
		}
		answer.push(cnt);
	}
	return answer;
}
console.log(solution(4, [[0, 1], [0, 3], [1, 2], [2, 0], [2, 3], [3, 0]], 2));