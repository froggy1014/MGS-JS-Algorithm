function solution(arr){
  let answer = "";
  let len = Number.MAX_SAFE_INTEGER

  arr.forEach(x=>{
    len = Math.min(len, x.length);
  });

  for(let i = 0 ; i < len ; i++){
    let set = new Set();
    arr.forEach(x => {
      set.add(x[i]);
    })
    if(set.size ===1) answer += arr[0][i];
    else break;
  }
  return answer;
}
console.log(solution(["long", "longtime", "longest"]));