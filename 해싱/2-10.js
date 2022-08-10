function solution(str, k){
  let sH = {};
  let result = 0;
  let odd = 0;
  

  for(let x of str){
    sH[x] = (sH[x]||0)+1;
  }

  for(let x of Object.keys(sH)){
    result += sH[x];
    if(sH[x] % 2 === 1 ){
      if(odd >= 1){
        result--;
      } 
      odd++;
    } 
  }

  if(Object.keys(sH).length === odd &&
     result/Object.keys(sH).length === 1
    ) return 1;

  return result
}
console.log(solution("qqqwww"))