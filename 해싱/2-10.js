// function solution(str){
//   let sH = {};
//   let result = 0;
//   let odd = 0;
  
//   for(let x of str){
//     sH[x] = (sH[x]||0)+1;
//   }

//   for(let x of Object.keys(sH)){
//     result += sH[x];
//     if(sH[x] % 2 === 1 ){
//       if(odd >= 1){
//         result--;
//       } 
//       odd++;
//     } 
//   }

//   return result
// }

function solution(str){
  let sH = {};
  let odd = 0;
  
  for(let x of str){
    sH[x] = (sH[x]||0)+1;
  }

  for(let x of Object.keys(sH)){
    if(sH[x] % 2 === 1 ) odd++; 
  }

  return odd > 0 ? str.length-odd+1 : str.length;
}
console.log(solution("abcbbbccaa"));
console.log(solution("abcde"));
console.log(solution("ccc"));