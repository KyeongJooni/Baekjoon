function solution(n)
{
    const string = n.toString()
    const splited = string.split('');
    const sum = splited.reduce((acc,cur)=>acc + Number(cur),0);

    return sum
}