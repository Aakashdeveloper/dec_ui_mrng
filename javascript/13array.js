array is a collection homogenious data types
['a','g','fedfds','wer'] > Array of string
[1,4,5,346,656] > Array of number
[true, true, false, true] > Array of boolean

Array is a collection of homogenious as well as hetrogenious datataype
[3,5,76,true, "dvs",43,false,true,"xcv","df"]


var city = ["Delhi","London","Mumbai","Amsterdam"]
undefined
city.length
4
city[0]
'Delhi'
city[1]
'London'
city[city.length-1]
'Amsterdam'

var city = ["Delhi","London","Mumbai","Amsterdam"]
undefined
city.push('Dubai')
5
city
(5) ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Dubai']
city.pop()
'Dubai'

var a = ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Dubai']
a.pop(2)
'Dubai'
a
(4) ['Delhi', 'London', 'Mumbai', 'Amsterdam']
a.pop(1000)
'Amsterdam'

var a = ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Dubai']
undefined
a.shift()
'Delhi'
var a = ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Dubai']
undefined
a.unshift('Venice')
6
a
(6) ['Venice', 'Delhi', 'London', 'Mumbai', 'Amsterdam', 'Dubai']

push> add in the last of array
unshift > add as the first of Array
pop> remove last value of Array
shift > remove first value of array

var city = ['Venice', 'Delhi', 'London', 'Mumbai', 'Amsterdam', 'Dubai']

city.slice(1)
(5) ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Dubai']
a
(6) ['Venice', 'Delhi', 'London', 'Mumbai', 'Amsterdam', 'Dubai']
city.slice(2,5)
(3) ['London', 'Mumbai', 'Amsterdam']
city.slice(-1)
['Dubai']
city.slice(0,-2)
(4) ['Venice', 'Delhi', 'London', 'Mumbai']


var city = ['Venice', 'Delhi', 'London', 'Mumbai', 'Amsterdam', 'Dubai']
city.splice(start,deletecount,values)


var city = ['Venice', 'Delhi', 'London', 'Mumbai', 'Amsterdam', 'Dubai']
city.splice(2,0,'Helsinki','Boston','NewYork')
[]
city
(9) ['Venice', 'Delhi', 'Helsinki', 'Boston', 'NewYork', 'London', 'Mumbai', 'Amsterdam', 'Dubai']
city.splice(4,2)
(2) ['NewYork', 'London']
city
(7) ['Venice', 'Delhi', 'Helsinki', 'Boston', 'Mumbai', 'Amsterdam', 'Dubai']
city.splice(1,2,'Pune','Nice')
(2) ['Delhi', 'Helsinki']
city
(7) ['Venice', 'Pune', 'Nice', 'Boston', 'Mumbai', 'Amsterdam', 'Dubai']

var city = ['Venice', 'Delhi', 'London', 'Mumbai', 'Amsterdam', 'Dubai']

undefined
city.indexOf('London')
2
city.indexOf('Venice')
0
city.indexOf('Pune')
-1
city.indexOf('Dubai')
5

var a = ['a','b','c',1]
var b = [5,6,'r','tt']
a+b
'a,b,c,15,6,r,tt'
a.concat(b)
(8) ['a', 'b', 'c', 1, 5, 6, 'r', 'tt']

var a = "Hii"
var b = [1,2,3]
Array.isArray(a)
false
Array.isArray(b)
true

var city = ['Venice', 'Delhi', 'Helsinki', 'Boston', 'NewYork', 'London', 'Mumbai', 'Amsterdam', 'Dubai']
undefined
city.sort()
(9) ['Amsterdam', 'Boston', 'Delhi', 'Dubai', 'Helsinki', 'London', 'Mumbai', 'NewYork', 'Venice']
city.reverse()
(9) ['Venice', 'NewYork', 'Mumbai', 'London', 'Helsinki', 'Dubai', 'Delhi', 'Boston', 'Amsterdam']


var city = ['Venice', 'Delhi',['Red',['BMW','Audi','Merc'],'Yellow','Orange','Green'], 'Dubai']
city[1]
'Delhi'
city[2]
(5) ['Red', Array(3), 'Yellow', 'Orange', 'Green']
city[2][2]
'Yellow'
city[2][3]
'Orange'
city[2][1]
(3) ['BMW', 'Audi', 'Merc']
city[2][1][0]
'BMW'
city[2][1][1]
'Audi'
city[2][1][2]
'Merc'

var city = ['Venice', 'Delhi',['Red',['BMW','Audi','Merc'],'Yellow','Orange','Green'], 'Dubai']

undefined
city.flat()
(8) ['Venice', 'Delhi', 'Red', Array(3), 'Yellow', 'Orange', 'Green', 'Dubai']0: "Venice"1: "Delhi"2: "Red"3: (3) ['BMW', 'Audi', 'Merc']4: "Yellow"5: "Orange"6: "Green"7: "Dubai"length: 8[[Prototype]]: Array(0)
city.flat(2)
(10) ['Venice', 'Delhi', 'Red', 'BMW', 'Audi', 'Merc', 'Yellow', 'Orange', 'Green', 'Dubai']

var name=["hari","siri","giri"]
undefined
name.length
14
name[0]
'h'