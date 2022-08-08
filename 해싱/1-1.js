function solution(str){
  let answer; 
  let max = Number.MIN_SAFE_INTEGER
  const map = new Map();

  for(let x of str){
    if(map.has(x)){
      let temp = map.get(x);
      temp++;
      map.set(x, temp);
    }
    else
    {
      let cnt = 0;
      map.set(x, cnt);  
    }
  }

  for(let k of str){
    if(max < map.get(k)){
      answer = k; 
      max = map.get(k);
    }  
  }

  return answer;
}
console.log(solution("AAAAABBCCDDDD"))