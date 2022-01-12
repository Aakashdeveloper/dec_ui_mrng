var calc={
    sum:function(a,b){return a+b},
    sub:(a,b) => {return a-b}
}
calc.sum(10,20)
30
calc.sub(10,20)
-10

var dbquery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name,city values (${data.name},${data.city})`}
}

dbquery.find('Employee')
'Select * from Employee'
dbquery.insert('Student',{name:'John',city:'Amsterdam'})
'insert into Student name,city values (John,Amsterdam)'


var movie = {
    name:"Avengers",
    rating:4.5,
    lang:'English'
}

// you can update the property but cannot delete
Object.seal(movie)
{name: 'Avengers', rating: 4.5, lang: 'English'}
movie.name
'Avengers'
movie.rating=4.7
4.7
movie
{name: 'Avengers', rating: 4.7, lang: 'English'}
delete movie.rating
false
movie
{name: 'Avengers', rating: 4.7, lang: 'English'}

// you cannot update/delete the property
Object.freeze(movie)
{name: 'Avengers', rating: 4.7, lang: 'English'}
movie.rating=4.7
4.7
movie
{name: 'Avengers', rating: 4.7, lang: 'English'}
movie.rating=4.8
4.8
movie
{name: 'Avengers', rating: 4.7, lang: 'English'}
delete movie.rating
false
movie
{name: 'Avengers', rating: 4.7, lang: 'English'}
movie.name
'Avengers'