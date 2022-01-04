Date()
'Wed Dec 29 2021 09:46:23 GMT+0530 (India Standard Time)'
var a = new Date()
undefined
a.getDate()
29
a.getMonth()
11
a.getDay()
3
a.getFullYear()
2021

> month start with 0 as jan and 11 as dec
> day start with 0 as sunday and 1 as monday

var a = new Date()
a.toLocaleString(`default`, {month:'long'})
'January'