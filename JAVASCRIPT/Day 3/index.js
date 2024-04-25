
let num=Math.random()*10+1
num=Math.floor(num)
let count=0;

let guess=prompt("Enter Your Guess")
let run=true
while(true){
    if(guess==num){
        alert(`You Guessed it right in ${count++}`)
        break
    }
    else if(guess>num){

        count++
        guess=prompt(`Go Lower`)
    }
    else{
        count++;
        guess=prompt(`Go Higher`)
    }
}