// function solution(str, obj){
//   let answer = '';
//   let temp = '';
//   const numbers = Object.keys(obj);
  
//   for(let i = 0 ; i < str.length; i++){
//     temp += str[i];
//     numbers.map((number, i) => {
//       if(temp === number) {
//         answer+= Object.values(obj)[i]
//         temp = '';
//       }
//     })
//   }
//   return parseInt(answer);
// }
// let obj = {
//   "zero" : 0,
//   "one" : 1,
//   "two" : 2,
//   "three" : 3,
//   "four" : 4,
//   "five" : 5,
//   "six" : 6,
//   "seven" : 7,
//   "eight" : 8,
//   "nine" : 9,
// }
// console.log(solution("eightsixzerofivesevenfive", obj))


// function solution(str){
//   let answer = 0;
//   let nums = ['zero', 'one', 'two', 'three', 'four', 'five' , 'six', 'seven', 'eight', 'nine'];
  
//   for(let i = 0 ; i <= 9; i++){
//     str=str.replaceAll(nums[i], i)
//   }
//   answer = parseInt(str);
//   return answer;
// }
// console.log(solution("eightsixzerofivesevenfive"))

// replaceAll을 통한 문자열 교체 



// function solution(str){
//   let answer = 0;
//   let nums = ['zero', 'one', 'two', 'three', 'four', 'five' , 'six', 'seven', 'eight', 'nine'];
  
//   for(let i = 0 ; i <= 9; i++){
//     let tmp = str.split(nums[i])
//     str = tmp.join(i);
//   }
//   answer = parseInt(str)
//   return answer;
// }
// console.log(solution("eightsixzerofivesevenfive"))

// split과 join을 이용한 솔루션ㄴ
