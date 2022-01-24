1221
12321
123321
123121

var palindrome = (data) => {
    var rem,temp,final = 0
    temp = data;
    while(data>0){
        rem = data%10;
        data = parseInt(data/10)
        final = final*10+rem
    }
    if(final == temp){
        console.log(`Number ${temp} is palindrome`)
    }else{
        console.log(`Number ${temp} is not a palindrome`)
    }
}

palindrome(10)
VM305:12 Number 10 is not a palindrome
undefined
palindrome(101)
VM305:10 Number 101 is palindrome