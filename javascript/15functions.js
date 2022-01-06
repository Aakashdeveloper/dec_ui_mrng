function
method
arrow function
IffI
Generator function
////////////////////////////
var a = 10
var b = 20
a+b = 30

////////////////////////////
function nameoffunction(parameters){
    return output
}

function add(a,b){
    return a+b
}

//calling function
add(1,2)
3
add('a','b')
'ab'
add(2,5,8)
7

function add(a,b,c){
    return a+b+c
}
add(1,2)
NaN
add(1,2,3)
6


function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out;
}
isEven(5)
'Number 5 is odd'
isEven(4)
'Number 4 is even'

////////////////////////////
Method
////////////////////////////
var add = function(a,b){
    return a+b
}

add(1,2)
3

////////////////////////////
arrow
////////////////////////////
let add = (a,b) => {return a+b}
add(1,2)

////////
Rest > use with the function to take an arguments
/////

function add(...args){
    console.log(args)
}
add(1,2,4,7,8)
[1, 2, 4, 7, 8]

function add(...args){
    var out = 0;
    for(data of args){
        //out = out+data
        out += data
    }
    return out
}

add(1,2)
3
add(1,2,4,7,8)
22