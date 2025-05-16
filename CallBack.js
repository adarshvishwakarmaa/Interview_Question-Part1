// A callback is a function passed as an argument to another function.

function total(first){
    console.log("this is final O/P:" + first)
}

function add(num1,num2,sum){
    sub = num1 * num2
    sum(sub)
}

add(4,4,total)