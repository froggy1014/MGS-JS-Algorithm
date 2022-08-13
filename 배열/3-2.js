// function solution(arr){
//   let answer = 0;
//   let accu = 1;

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 1){
//       arr[i-1] === 1 ? answer+= (++accu)
//                      : answer+= accu
//     }
//     else accu = 1;
//   }
//   return answer;
// }

// let arr = [1, 0, 0, 0, 1];
// console.log(solution(arr))

// 나는 인덱스로 탐색으로하면서 삼중 연산자로 
// 값을 누적했다.


function solution(nums){         
  let answer=0, score=0;
  for(let x of nums){
      if(x===1){
          score++;
          answer+=score;
      }
      else score=0;
  }   
  return answer;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));

// 선생님은 for of 문으로 값들을 돌리면서, 
// if 문으로 연산 혹은 초기화를 하였다. 