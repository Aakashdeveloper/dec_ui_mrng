var > we can redeclare and reasign
let > we cannot redeclare and but can reasign
const> we cannot redeclare and nor reasign

//es5
var a = 10;
var a; //declare
a =10 // assignment
> var a = 10
undefined
> a
10
> var a = 11
undefined
> a
11
> a = 11
11
> 

//es6
> let b = 10
> b
10
> let b = 11
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 11
11

> const c = 10
undefined
> c
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable