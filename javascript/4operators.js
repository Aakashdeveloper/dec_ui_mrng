= // assignment
== //compare the data
=== // compare the data and datatype

var a = 20 >> assignment
var b = "20"

var a = 20
var b = "20"
a == b (we compare the data)
true
a === b (we compare the data & datatype)
false


var a = "john"
var b = "John"
(JavaScript is case sensitive)
a==b
false
a===b
false


var a = true
var b = "true"
a==b
false

var c = 1
a == c
true
a === c
false

var a = 10
undefined
var b = 5
undefined
a>b
true
a<b
false
a==b
false
a!=b
true
a >= b
true
a <= b
false
a => b
a => b

///negation
var a = true
!a
false

var a = 1
!a
false

var b = 20
!b
false

var a = -1
undefined
!a
false

var a = 0
!a
true

var a = "hii"
undefined
!a
false

truthy > any number expect 0 weather +ve or -ve , true, any string
falsy > 0, false, null, undefined

var a = 10
undefined
isNaN(a)
false
var a = "hi"
undefined
isNaN(a)
true