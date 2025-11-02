function solution(array, n) {
    let arr = array.sort((a,b)=>(a-b));
    let value = Infinity;
    let result = 0;
    
    for(let i of array){
        if(Math.abs(n-i)<value){
            value = Math.abs(n-i);
            result = i;
        }
    }
    return result;
}