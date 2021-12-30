if(condition){
    // do something
}else{
     // do something
}

var a = 7832
if(a%2 ==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 7832 is even

var a = 783
if(a%2 ==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 783 is odd

var name = "Bhumika"
if(name == "Priya"){
    console.log(`Hi ${name} You are Admin`)
}else if(name == "Bhumika"){
    console.log(`Hi ${name} You are Super Admin`)
}else{
    console.log(`Hi ${name} You are Unknown`)
}
Hi Bhumika You are Super Admin

var name = "Aakash"
var role = "User"

if(role == "Admin"){
    if(name == "Aakash"){
        console.log(`Hi ${name} You are ${role}`)
    }else if(name=="John"){
        console.log(`Hi ${name} You are ${role}`)
    }else{
        console.log(`Hi ${name} You are Unknown`)
    }
}else if(role == "User"){
    if(name == "Bhumika"){
        console.log(`Hi ${name} You are ${role}`)
    }else if(name=="Priya"){
        console.log(`Hi ${name} You are ${role}`)
    }else{
        console.log(`Hi ${name} You are Unknown`)
    }
}else{
    console.log(`Hi ${name} You are Unknown`)
}

var name = "Tina"
var role = "Admin"
if(name == "Tina" && role == "Admin"){
    console.log(`Hi ${name} You are welcome`)
}else{
    console.log(`Hi ${name} You are not welcome`)
}

var name = "Amit"
var role = "Admin"
if(name == "Tina" || role == "Admin"){
    console.log(`Hi ${name} You are welcome`)
}else{
    console.log(`Hi ${name} You are not welcome`)
}
Hi Amit You are welcome

var a = 0;
if(a){
    console.log(`Hiiii`)
}else {
    console.log(`Bie`)
}
Bie

var a = 1;
if(a){
    console.log(`Hiiii`)
}else {
    console.log(`Bie`)
}
Hiiii

var a = -1;
if(a){
    console.log(`Hiiii`)
}else {
    console.log(`Bie`)
}
Hiiii

////
Ternary Operator
////
> Single line if else

condition?iftrue:if false

var a = 10
a>10?"Hiiii":"Bieee"
'Bieee'

var a = 10
a==10?"Hiiii":"Bieee"
'Hiiii'


var a = 10
a > 10 ? a+1:a-1
9
a == 10 ? a+1:a-1
11

// you should not use nested ternary

a > 10 ? a+1:a-1 ?"Hiii":"Bie"
'Hiii'

a == 10 ? a+1:a-1 ?"Hiii":"Bie"
11