> map is use to iterate over the array of elements
> it always return the same length of output array as input
> it is use to apply logic(add,sum) or iteate over the array

var a = [45,4,9,2,6,11,34,27,18]

a.map((data) => { return data*2})
[90, 8, 18, 4, 12, 22, 68, 54, 36]

a.map((data) => {return data>20})
(9) [true, false, false, false, false, false, true, true, false]

var a = [4,5,6]
a.map((item) => {
    return `<p>${item}</p>`
})
['<p>4</p>', '<p>5</p>', '<p>6</p>']

> Filter is use to filter out the data
> it may or may not return same length of output Array
> it only return those value for which condition/output is true

var a = [45,4,9,2,6,11,34,27,18]
a.filter((data) => {return data>20})
[45, 34, 27]

var a = [-1,0,1,2,3]
a.map((data) => {return data*2})
[-2, 0, 2, 4, 6]

a.filter((data) => {return data*2})
[-1, 1, 2, 3]