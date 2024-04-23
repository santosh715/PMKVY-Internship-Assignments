const arr=["Santosh","Rahul","Jose","Ashutosh"]

let strarr=[]

for(let i=0;i<arr.length;i++){
    if(arr[i].length>5){
        strarr=strarr+arr[i]
    }
}
console.log(strarr+ " ")