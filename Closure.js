//A closure is a Inner function that can access the outer function variables as well as global variables.
 
   function inner(a){
    let b = 100;

    function outer(){
        let divide = b+a
        console.log(divide);
        
    }
    return outer;
}
let myresult = inner(50)
myresult()

    




    function In(x){
    let y = 200;
    function Out(){
        let mul = x - y
        console.log(mul);
        
    }
    return Out
    }
    let result  =  In(20);
    result();
