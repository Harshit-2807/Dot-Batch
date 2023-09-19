// funnction call or invoke
run();

// function declaration
function run(){
    console.log('running');
}

// hoisting: process of moving functiom declaration to the top of the file automatically done in JS.

// Named function assignment
let stand = function walk(){
    console.log('walking');
}
stand();
// in function assignment we cannot call function before assignment means hoisting does not applies

let jump = stand;
jump();

// Anonymous function assignment
let stand2 = function(){
    console.log('walking');
}
stand();

// Dynamic function
function sum(a,b){
    let total = 0;
    for(let value of arguments)
        total += value;
    return total;
}

let ans = sum(1,2,3,4,5,6);
console.log(ans);


// Rest Operator (...)
function sum(a, b, ...args){
    console.log(args);
}

sum(1,2,3,4,5,6);


// Default Parameters
function interest(p, r=5, t=7){
    return p*r*t/100;
};

console.log(interest(1000,10,5));
console.log(interest(1000));
console.log(interest(1000,undefined,5));


// Getter / Setter
let person = {
    fName: 'Harshit',
    lName: 'Patel',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        // if(typeof value !== String){
        //     throw new Error("You have not sent string");
        // }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};
// get
console.log(person.fullName);
// set
person.fullName = 'Divyam Jain';
console.log(person.fullName);

// try{
//     person.fullName = 'Divyam Jain';
//     console.log(person.fullName);
// }
// catch(e){
//     alert(e);
// }


// Reduce Method
let arr = [1,2,3,4];
// let total = 0;
// for(let value of arr){
//     total += value;
// }console.log(total);

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum);

let totalPro = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(totalPro);