let info={
    firstname: "xyzpqr",
    age:10,
    gender:"male",
    address:{
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    hobbies:["Cricket", "Carrom"],
    getbirthyear:function(){
        return 2024-this.age
    }

}

console.log(info.address)
console.log(info.getbirthyear())