function solution(s){
  let answer = 'YES';
  let lt = 0 ;
  let rt = s.length-1;
  let str = s.toLowerCase();
  while(lt < rt){
    if(str[lt] !== str[rt]){
        let s1 = str.substring(lt, rt)
        let s2 = str.substring(lt+1, rt+1);
        console.log(s1);
        console.log(s2);
        if(s1!==s1.split('').reverse().join('') && s2!==s2.split('').reverse().join('')) break;

        else {
          answer = 'NO'
          break;
        }
    }
    else{
      lt++;
      rt++;
    }
  }
  return answer;
}
console.log(solution('abcacbakcba'));
