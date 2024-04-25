
let fun=(...num)=>{
    ans=0
    for(let n of num){
        ans+=n
    }
    return ans
}

console.log(fun(2,3))
console.log(fun(2,3,99))
console.log(fun(2,3,222))