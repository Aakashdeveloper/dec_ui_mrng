for
while
do while
for of 
for in > object
map
filter

//////////
for > genearte the series of values or help to iterarte over the array
/////////

for(starting, condition, increment)

for(i = 0; i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ['Venice', 'Delhi', 'London', 'Mumbai', 'Amsterdam', 'Dubai']
for(i=0;i<city.length;i++){
    console.log(city[i])
}
Venice
Delhi
London
Mumbai
Amsterdam
Dubai


var city = ['Venice', 'Delhi',['Red','Yellow','Orange','Green'], 'Dubai']
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    } 
}
Venice
Delhi
Red
Yellow
Orange
Green
Dubai

/////////
while
////////
var i = 10
while(i<5){
    console.log(i);
    i++
}

/////////
do while
////////
var i = 10
do{
    console.log(i);
    i++
}
while(i<5)
////
for of
////////

var city = ['Venice', 'Delhi', 'London', 'Mumbai', 'Amsterdam', 'Dubai']
for(mycity of city){
    console.log(mycity)
}

var city = ['Venice', 'Delhi',['Red','Yellow','Orange','Green'], 'Dubai']
for(mycity of city){
    if(Array.isArray(mycity)){
        for(color of mycity){
            console.log(color)
        }
    }else{
        console.log(mycity)
    }
}