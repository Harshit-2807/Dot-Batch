// Printing Date
let date = new Date();
console.log(date);

// Insering/Adding elements
let numbers = [1,2,3,4,5];
// end -> push
numbers.push(6);
// beginning -> unshift
numbers.unshift(8);
// middle -> splice
numbers.splice(2, 0, 0)

console.log(numbers);

// Searching:
console.log(numbers.includes(4));

// Searching in references by callback method
let courses = [
    {no: 1, naam: 'Harshit'},
    {no: 2, naam: 'Patel'}
];

// Full form
// let course = courses.find(function(course){
//     return course.naam === 'Harshit';
// })

// short hand notation
let course = courses.find(course => course.naam === 'Harshit');

console.log(course);


// Removing Elements
// end -> pop
numbers.pop();

// beginning -> shift
numbers.shift();

// middle -> splice
numbers.splice(1, 1);

console.log(numbers);


// Emptying an array
// make length 0
// numbers.length = 0;
// console.log(numbers);

// using splice function
numbers.splice(0, numbers.length);
console.log(numbers);


// Combining arrays
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let combined = num1.concat(num2);
console.log(combined);

// Slicing
let slice = combined.slice(2,4);
console.log(slice);


// Iterating Arrays
let arr = [10, 12, 15, 20, 24, 25, 40, 48, 66];

// using for-of
let sum = 0;
for(let a of arr){
    sum += a;
}
console.log(sum);

arr.forEach(function(number){
    console.log(number);
});

// using forEach
// sum = 0;
// arr.forEach(number => sum += number);
// console.log(sum);

// sum = 0;
// arr.forEach(function(number){
//     sum += number;
//     console.log(sum);
// });

// Joining Arrays
// let joined = arr.join(',');
// console.log(joined);

// Splitting
let message = 'This is my message';
let mArr = message.split(' ');
console.log(mArr);

let joined = mArr.join('_');
console.log(joined);

// Sorting
let usArr = [51, 42, 85, 41, 4, 9, 72, 36];
let sArr = usArr.sort((a,b) => a-b);
console.log(sArr);

sArr.reverse();
console.log(sArr);

let oArr = [
    {id:5, naam: 'Love'},
    {id:3, naam: 'Harshit'},
    {id:1, naam: 'Abhishek'}
];

let sOarr = oArr.sort(function(a, b){
    return a.id - b.id;
});
console.log(sOarr);

// Filtering
let f1 = usArr.filter(a => a>45);
console.log(f1);
let sf1 = f1.sort((a,b) => a-b);
console.log(sf1);


// Mapping
// let mapp = sf1.map(value => 'student_no'+value);
// console.log(mapp);

let n = [1,2,-4,-6,5,8];
// let filtered = n.filter(value => value>=0);
// let mapp = filtered.map(function(num){
//     return {value:num, naam:'item'+num};
// });
let mapp = n
            .filter(value => value>=0)
            .map(num => {value:num});
console.log(mapp);