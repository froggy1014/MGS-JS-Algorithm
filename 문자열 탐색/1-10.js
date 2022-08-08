function solution(str, obj){
  let answer = '';
  let temp = '';
  const numbers = Object.keys(obj);
  
  for(let i = 0 ; i < str.length; i++){
    temp += str[i];
    numbers.map((number, i) => {
      if(temp === number) {
        answer+= Object.values(obj)[i]
        temp = '';
      }
    })
  }
  return parseInt(answer);
}
let obj = {
  "zero" : 0,
  "one" : 1,
  "two" : 2,
  "three" : 3,
  "four" : 4,
  "five" : 5,
  "six" : 6,
  "seven" : 7,
  "eight" : 8,
  "nine" : 9,
}
console.log(solution("eightsixzerofivesevenfive", obj))
