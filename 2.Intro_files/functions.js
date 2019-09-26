function myFunction(name){
    console.log('I am showing you something', name);
}

const giveName = function(){
    return "Strania";
}

// hoisting - all the variables hoist from the top
// functions are first-class citizens in JS

// myFunction('Stefania');

// arrow function

const yourName=()=>{
    return "Stefania";
}

console.log(yourName())

