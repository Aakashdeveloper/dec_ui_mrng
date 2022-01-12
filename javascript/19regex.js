RegExp
Regular Expression
^$

// if pattern match it will return array else null
var a = "hi"
a.match("^([a-z])$")
null

var a = "h"
a.match("^([a-z])$")
(2) ['h', 'h', index: 0, input: 'h', groups: undefined]

// exact 2 letters
var a = "hi"
a.match("^([a-z]{2})$")
['hi', 'hi', index: 0, input: 'hi', groups: undefined]

var a = "hii"
a.match("^([a-z]{2})$")
null
// letters in range of 2 to 5
var a = "hii"
a.match("^([a-z]{2,5})$")
(2) ['hii', 'hii', index: 0, input: 'hii', groups: undefined]
var a = "hiiref"
a.match("^([a-z]{2,5})$")
null

// any length
var a = "hiiii"
a.match("^([a-z]+)$")
(2) ['hiiii', 'hiiii', index: 0, input: 'hiiii', groups: undefined]

var a = "Hii"
a.match("^([I-Ya-z]{2,5})$")

var a = "Hii"
a.match("^([A-Za-z0-9]+)$")

var a = 8978123657
a.toString().match("^([0-9]{10})$")
['8978123657', '8978123657', index: 0, input: '8978123657', groups: undefined]

var str = "this hat is hot haat"
str.match(/h.t/g)
(2) ['hat', 'hot']

var str = "this hat is hot haat"
str.match(/h..t/g)
['haat']

var email = "@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ['a@a.com', 'a', 'a', 'com', index: 0, input: 'a@a.com', groups: undefined]



var a = "9876543342"
var b = "******3342"
var c = a.slice(0,6)
'*****'+a.replace(c,'*')
'******3342'