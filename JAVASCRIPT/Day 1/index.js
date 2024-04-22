let a=10;
let b=20;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//Assignment operator
console.log("Assignment Operator")
num1=40;
num1+=20;
console.log(num1)

num1-=10;
console.log(num1)

num1*=20
console.log(num1)

num1/=10
console.log(num1)

//Comparison Operator
console.log("Comparison Operator")
a=10
b=20
console.log(a==b)
console.log(a===b)

a=10
b="10"
console.log(a==b)
console.log(a===b)

a="010"
b=10
console.log(a==b)
console.log(a===b)

a=10
b=20
console.log(a>=b)
console.log(a<=b)

//conditions

console.log("Conditions")

x=121
if(x%2==0){
    console.log("Even")
}
else{
    console.log("ODD")
}

let marks=34;

if(marks>=90){
    console.log("Flying Colours")
}
else if(marks<=90 && marks>=80){
    console.log("Distinction")
}
else if(marks<=80 && marks>=60){
    console.log("First Class")
}
else if(marks<=60 && marks>=36){
    console.log("Second Class")
}
else{
    console.log("FAIL")
}

let day=5;
switch(day){
    case 1: if(day==1){console.log("Monday");}
            else{
                break;
            }
    case 2: if(day==2){console.log("Tuesday");}
            else{
                break;
            }
    case 3: if(day==3){console.log("Wednesday");}
            else{
         
                break;
            }
    case 4: if(day==4){console.log("Thursday");}
            else{
                break;
            }
    case 5: if(day==5){console.log("Friday");}
            else{
                break;
            }
    case 6: if(day==6){console.log("Saturday");}
            else{
                break;
            }
    case 7: if(day==7){console.log("Sunday");}
            else{
                break;
            }
    default: console.log("Invalid");
    
     
}

a=10
b=20
     
     if(a>b){
        console.log(a)
     }
     else{
        console.log(b)
     }


a=20;
b=30;
c=40;

if(a>b && a>c){
    console.log("A is greatest")
}
else if(b>a && b>c){
    console.log("B is greatest")
}
else{
    console.log("C is Greatest");
}

for(let i=1;i<11;i++){
    console.log(i);
}
let i=1
while(i<11){
    console.log(i)
    i++
}
