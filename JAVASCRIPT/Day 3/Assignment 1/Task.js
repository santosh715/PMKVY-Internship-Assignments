
function startday(){
    console.log("Day Started")
    wakeup(()=>{
        brushteeth(()=>{
            walkdog(()=>{
                shower(()=>{
                    eatbreak(()=>{
                        gocol(()=>{
                            console.log("DIN KHATAM")
                        })
                    })
                })
            })
        })
    })
}

startday()


function DayStart(callback){
    setTimeout(()=>{
        console.log("Day Start")
        callback()
    },5000)
}

function wakeup(callback){
    setTimeout(()=>{
        console.log("Wakeup")
        callback()
    },3000)
}

function brushteeth(callback){
    setTimeout(()=>{
        console.log("Brush Your Teeth")
        callback()
    },3000)
}

function walkdog(callback){
    setTimeout(()=>{
        console.log("Walk Dog")
        callback()
    })
}

function shower(callback){
    setTimeout(()=>{
        console.log("Take Shower")
        callback()
    })
}

function eatbreak(callback){
    setTimeout(()=>{
        console.log("Eat Your Breakfast")
        callback()
    })
}

function gocol(callback){
    setTimeout(()=>{
        console.log("Go to your College")
        callback()
    })
}


function task1(callback){
    setTimeout(()=>{
        console.log("Task 1 Started")
        callback()
    },2000)
}
function task1co(callback){
    setTimeout(()=>{
        console.log("Task 1 Completed")
        callback()
    },2000)
}
function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 Started")
        callback()
    },2000)
}
function task2co(callback){
    setTimeout(()=>{
        console.log("Task 2 Completed")
        callback()
    },2000)
}

function process(){
    console.log("Process Started")
    task1(()=>{
        task1co(()=>{
            task2(()=>{
                task2co(()=>{
                    console.log("Process Completed")
                })
            })
        })
    })
}

process()