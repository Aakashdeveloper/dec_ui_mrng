var a = "aMSterdam"
undefined
a.toUpperCase()
'AMSTERDAM'
a.toLowerCase()
'amsterdam'
var a = "aMSterdam"

undefined
a.length
9
a[0]
'a'
a[1]
'M'
a[a.length-1]
'm'

var name = "    Nikita  "
undefined
name.length
12
name.trim()
'Nikita'
var name = "    Nikita .  "
undefined
name.trim()
'Nikita .'

var a = "john"
var b = "John"
a.toLowerCase() == b.toLowerCase()
true
a.toUpperCase() == b.toUpperCase()
true


var city = "aMSterdam"
city.charAt(0)
'a'
city.charAt(3)
't'
city.charAt(7)
'a'

var city = "aMSterdam"

city.slice(1)
'MSterdam'
city.slice(2)
'Sterdam'
city.slice(3)
'terdam'
city.slice(2,5)
'Ste'
city.slice(3,5)
'te'
city.slice(3,15)
'terdam'

var city = "aMSterdam"
undefined
city.slice(-1)
'm'
city.slice(-2)
'am'
city.slice(0,-1)
'aMSterda'
city.slice(0,-2)
'aMSterd'
city.slice(-2,-5)
''
city.slice(-5,-2)
'erd'
city.slice(2,-2)
'Sterd'
city.slice(-2,2)
''

var a = "aMSterdam"
"Amsterdam"

var a = "aMSterdam"
a.charAt(0).toUpperCase()
'A'
var a = "aMSterdam"
undefined
a.slice(1)
'MSterdam'
a.slice(1).toLowerCase()
'msterdam'


a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()
'Amsterdam'

var a = "pARis"
a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()
'Paris'

var a = "i am learning Javascript"
a.replace('Javascript','JS')
'i am learning JS'

var a = "Javascript i am learning Javascript"
undefined
a.replace('Javascript','JS')
'JS i am learning Javascript'
a.replace(/Javascript/g,'JS')
'JS i am learning JS'

var name = "    Nikita .  "
name.replace(/ /g,'')
'Nikita.'

var name = "    Nikita .  "
undefined
name.replace(/ /g,'-')
'----Nikita-.--'

var out = url.split('/')
undefined
out
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'dec_node_mrng_21']
out[out.length-1]
'dec_node_mrng_21'
var url = "https://github.com/Aakashdeveloper/edu_intern_nov"
undefined
var out = url.split('/')
undefined
out[out.length-1]
'edu_intern_nov'

var a = "Javascript i am learning Javascript"
undefined
a.split(' ')
(5) ['Javascript', 'i', 'am', 'learning', 'Javascript']
var a = "Javascript"
undefined
a.split('')
(10) ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
var a = ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
undefined
a.toString()
'J,a,v,a,s,c,r,i,p,t'
a.toString().replace(/,/g,'')
'Javascript'
a.slice(5,7)
(2) ['c', 'r']
a.slice(6,7)
['r']

var a = "10"
Number(a)
10

var a = 20
a.toString()
'20'
a+''
'20'