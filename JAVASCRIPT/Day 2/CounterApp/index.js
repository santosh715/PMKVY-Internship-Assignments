let count =0

document.getElementById("danger").onclick=function(){
    count-=1
    document.getElementById("countlabel").innerHTML=count
}

document.getElementById("warning").onclick=function(){
    count=0
    document.getElementById("countlabel").innerHTML=count
}

document.getElementById("success").onclick=function(){
    count+=1
    document.getElementById("countlabel").innerHTML=count
}


