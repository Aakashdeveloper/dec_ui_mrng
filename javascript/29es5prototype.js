function human(name,city){
    this.name = name
    this.city = city;
}

function robot(name){
    this.name = name
    this.legs = 2;
    this.age = 10
}

var john = new human('John','Paris')
undefined
john
human {name: 'John', city: 'Paris'}
var pepper = new robot('Pepper')
undefined
pepper
robot {name: 'Pepper', legs: 2, age: 10}
human.prototype = new robot()
robot {name: undefined, legs: 2, age: 10}
var alex = new human('Alex','Amsterdam')
undefined
alex
human {name: 'Alex', city: 'Amsterdam'}
alex.age
10
alex.legs
2
john.age
undefined
john.legs
undefined