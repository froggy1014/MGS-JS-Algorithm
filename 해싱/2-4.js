function solution(arr){
  // 문제에 제한사항이 원소가 1000개를 넘지않는다 그러니 1000개까지는 만들어놓는다.
  let cnt = Array(1001).fill(0)

  // for ... of 를 통해 배열안 숫자를 하나씩 가져오면서 
  // 배열 인덱스에 대입하여, 해당 값의 인덱스에 value를 1을 더해준다.
  for(let x of arr){
    cnt[x]++;
  }
  // 빈도수가 1인 숫자를 찾는 거니까 뒤부터 시작해서 
  // 먼저 찾으면 바로 return을 해서 끝내주고 없다면 
  // -1을 반환한다.
  for(let i = 1000; i >= 1; i--)
  {
    if(cnt[i] === 1) return i;
  }
  return -1;
}
arr = [1,1,2,2,3,3,4,4,5,5,7,7];
console.log(solution(arr))



