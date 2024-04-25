function mul(total,num){
    return total*num
}

let arr=(...num)=>{
    ans=num.reduce(mul)
    console.log(ans)
}

arr(1,2,3)