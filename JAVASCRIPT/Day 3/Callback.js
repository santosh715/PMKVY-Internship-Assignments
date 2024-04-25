hello(buy)


function hello(callback){
    setTimeout(()=>{
        console.log("Hello")
        callback()
    },3000)
}

function buy(){
    console.log("BUY")
}