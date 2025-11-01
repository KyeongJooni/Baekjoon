function solution(rsp) {
    var answer = '';
    for(let i of rsp){
        if(i=='0'){
            answer = answer + '5';
        }
        else if(i=='2'){
            answer = answer + '0';
        }
        else if(i=='5'){
            answer = answer + '2';
        }
    }
    return answer;
}