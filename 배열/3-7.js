function solution(s, k){
	let ch=Array(52).fill(0);
	for(let x of s){
		let num=x.charCodeAt();
		if(num>=65 && num<=90){
			ch[(num-65)*2]++;
		}
		else ch[(num-97)*2+1]++;
	}
	let answer="";
	for(let i=0; i<52; i++){
		if(ch[i]>=k){
			if(i%2==0) answer+=String.fromCharCode(i/2+65);
			else answer+=String.fromCharCode((i-1)/2+97);
		}
	}
	return answer;
}
console.log(solution("TATteEaccHAaeEr", 2));