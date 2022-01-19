//interval > run some operation after certain interval of time
//timeout > run only once after certain time

setInterval(function() {},time)


let myinterval = setInterval(function() {
    console.log(Math.random())
},5000)

clearInterval(myinterval)

////////
setTimeout(function() {
    console.log(Math.random())
},5000)