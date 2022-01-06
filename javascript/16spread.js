>spread use for the array
var a = [1,2,3]
var b = ['a','b','c']

var a = [1,2,...b,3]
a
(6) [1, 2, 'a', 'b', 'c', 3]


var a = [1,2,3]
function add(a,b,c){
    return a+b+c
}

add(a)
'1,2,3undefinedundefined'


var a = [1,2,3]
function add(a,b,c){
    return a+b+c
}
add(...a)
6

var a = [1,2,3,6,9,3]
undefined
console.log(...a)
VM653:1 1 2 3 6 9 3



var a = [1,2,3,6,9,3]
function add(...args){  /// rest
    var out = 0;
    for(data of args){
        out += data
    }
    return out
}

add(...a) // spread
24