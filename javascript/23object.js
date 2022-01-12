var moviename = "Avengers"
var movieRating = 4.5
var movielang = "English"

var moviename1 = "Jab We Met"
var movieRating1 = 4.8
var movielang1 = "Hindi"

var movie = {
    name:"Avengers",
    rating:4.5,
    lang:'English'
}
typeof(movie)
'object'
movie.name
'Avengers'
movie.rating
4.5
movie.lang
'English'
movie.rating = 4.7
4.7
movie
{name: 'Avengers', rating: 4.7, lang: 'English'}lang: "English"name: "Avengers"rating: 4.7[[Prototype]]: Object
movie.ind = "Hollywood"
'Hollywood'
movie
{name: 'Avengers', rating: 4.7, lang: 'English', ind: 'Hollywood'}ind: "Hollywood"lang: "English"name: "Avengers"rating: 4.7[[Prototype]]: Object
delete movie.lang
true
movie
{name: 'Avengers', rating: 4.7, ind: 'Hollywood'}

movie['lang']
'English'
movie['rating'] = 4.1
4.1

//JSON 
// Javascript Object Notation
var movies = [
    {
        "name":"Avengers",
        "rating":4.5,
        "lang":"English"
    },
    {
        "name":"Jab We Met",
        "rating":4.8,
        "lang":"Hindi"
    },
    {
        "name":"Death Race",
        "rating":3.4,
        "lang":"English"
    }
]

var user = {
    name:'Ankit',
    email:'a@a.com',
    addresses:[
        {
            "home":"homeaddress",
            "city":"Delhi",
            "pincode":123456
        },
        {
            "office":"officeaddress",
            "city":"Paris",
            "pincode":Ed3134
        }
    ]
}

user.addresses
(2) [{…}, {…}]0: {home: 'homeaddress'}1: {office: 'officeaddress'}length: 2[[Prototype]]: Array(0)
user.addresses[1]
{office: 'officeaddress'}
user.addresses[1].office
'officeaddress'


var user = {
    name:'Ankit',
    email:'a@a.com',
    addresses:{
            "home":"homeaddress",
            "office":"officeaddress"
    }
}
user.addresses.home
'homeaddress'


var movies = [
    {
        "name":"Avengers",
        "rating":4.5,
        "lang":"English"
    },
    {
        "name":"Jab We Met",
        "rating":4.8,
        "lang":"Hindi"
    },
    {
        "name":"Death Race",
        "rating":3.4,
        "lang":"English"
    }
]

for(mymovie of movies){
    console.log(mymovie.name)
}

Avengers
Jab We Met
Death Race

var a =  {
    "name":"Death Race",
    "rating":3.4,
    "lang":"English"
}

for(key in a){ 
    console.log(key)
}
name
rating
lang

for(key in a){ 
    console.log(a[key])
}

Death Race
3.4
English