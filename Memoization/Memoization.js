let sum=0
const  digitSum=(n)=>
{
    for(let i=0;i<n;i++)
    {
        sum=sum+i;
    }
    return sum;
}
function memoize(fun){
    const cache={};
    return (n)=>

       { 
        if(n in cache)
        {
            console.log("cache");
            console.log(cache);
            return cache[n];  
        }
        else{
            const result=fun(n);
            cache[n]=result;
            return result;
        }
}}
const memoizedSum=memoize(digitSum);
console.log(memoizedSum(7));
console.log(memoizedSum(7));

 console.log(memoizedSum(7)); //should print cache as 7 is already computed and stored in cache.
//  console.log(memoizedSum(3));
