// ifelse >  multiple condition and multiple output
// Ternary > One condition one output
// switch > one condition and multiple output

var name = "Aakash"

switch(name){
    case "Aakash":
        console.log(`Hi ${name} You are admin`)
        break;
    case "Bhumika":
        console.log(`Hi ${name} You are user`)
        break;
    default:
        console.log(`Hi ${name} You are unknown`)
}

var input = 2

switch(input%2){
    case 0:
        console.log(`Hi ${input} is even`)
        break;
    case 1:
        console.log(`Hi ${input} is odd`)
        break;
    default:
        console.log(`Hi ${input} is unknown`)
}


switch(new Date().getDay()){
    case 0:
        console.log(`Today is Sunday`)
        break;
    case 1:
        console.log(`Today is Monday`)
        break;
    case 2:
        console.log(`Today is Tuesday`)
        break;
    default:
        console.log(`Invalid Input`)
}

Today is Tuesday