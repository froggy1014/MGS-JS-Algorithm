function solution(str){
  let answer;
  let cnt = 1;

  const map = new Map()

  for(let x of str)
  {
    if(map.has(x)){
      let temp = map.get(x)
      temp++
      map.set(x, temp)
    }
    else{
      map.set(x, 1)
    }
  }

  console.log(map);

  for(let t of str){
    if(map.get(t) === 1){
      answer = cnt;
      break;
    }
    else{
      answer = -1;
    } 
    cnt++
  }
  

  return answer;
}
console.log(solution('aabb'))