// function solution(str){
//   let answer; 
//   let max = Number.MIN_SAFE_INTEGER
//   const map = new Map();

//   for(let x of str){
//     if(map.has(x)){
//       map.set(x, map.get(x)+1);
//     }
//     else map.set(x, (map.get(x)||0)+1);  
//   }

//   for(let k of str){
//     if(max < map.get(k)){
//       answer = k; 
//       max = map.get(k);
//     }  
//   }
//   return answer;
// }
// console.log(solution("AAAABBBCCDDDDD"))

// function solution(str){
//   let answer; 
//   let max = Number.MIN_SAFE_INTEGER
//   const map = new Map();

//   for(let x of str){
//     if(map.has(x)){
//       map.set(x, map.get(x)+1);
//     }
//     else map.set(x, (map.get(x)||0)+1);  
//   }

//   for(let [key,val] of map){
//     if(max < val){
//       max = val
//       answer = key; 
//     }  
//   }
//   return answer;
// }
// console.log(solution("AAAABBBCCDDDDD"))

