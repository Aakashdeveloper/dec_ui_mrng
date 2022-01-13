/*function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = Number(a)+Number(b)
    document.getElementById('output').innerText=`Sum of numbers is ${out}`
}
function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = Number(a)-Number(b)
    document.getElementById('output').innerText=`Sub of numbers is ${out}`
}*/
function calc(opt){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    if(opt == "Add"){
        out = `Sum of numbers is ${Number(a)+Number(b)}`
    }else{
        out = `Sub of number is ${Number(a)-Number(b)}`
    }
    document.getElementById('output').innerText=out
}

function calc1(){
    var a = document.getElementById('textbox').value;
    console.log(a)
    var out = eval(a)
    document.getElementById('output').innerText=out
}