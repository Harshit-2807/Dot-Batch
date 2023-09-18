// let rectangle = {
//     length : 1,
//     breadth : 2,

//     draw: function() {
//         console.log('draw');
//     }
// };

// // factory function
// function createRectangle(length, breadth){
//     let rectangle = {
//         // length : length,
//         // breadth : breadth,     //both ways are correct
//         length,
//         breadth,
    
//         draw: function() {
//             console.log('draw');
//         }
//     };
//     return rectangle;
// }
// // factory function calling
// let rectangleObj = createRectangle(5, 4);

// // constructor function
// function Rectangle(len, bre){
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function(){
//         console.log('Draw');
//     }
// }
// // constuctor function calling
// let rectangleConst = new Rectangle(4, 6);

// // dynamic function
// rectangleConst.color = 'yellow';
// console.log(rectangleConst);

// delete rectangleConst.color;
// console.log(rectangleConst);

// constructor ke andar constructor
// let Rectangle1 = new Function(
//     `length`,
//     `breadth`,
//     `this.length = length;
//     this.breadth = breadth;
//     this.draw = function(){
//         console.log('Draw'); 
//     }`
// );

// let rectObj = new Rectangle1(4, 2);
// console.log(rectObj);

// let a = 10;
// let b = a;
// a++;
// console.log(a);  // a=11
// console.log(b);  // b=10  //primitive value are copied by value

// let a = {value:10};
// let b = a;
// a.value++;
// console.log(a.value);  // a=11
// console.log(b.value);  // b=11 called by reference


// let a = 10;
// function inc(a){
//     a++;
// };
// inc(a);
// console.log(a);  // a=10

// let a = {value:10};
// function inc(a){
//     a.value++;
// };
// inc(a);
// console.log(a.value);  // a=11

let rectangle = {
    length:2,
    breadth:5
};

// // for-in loop
// for(let key in rectangle){
//     console.log(key, rectangle[key]);
// };

// // for-of loop
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// };

// // check if object present or not
// if('color' in rectangle)
//     console.log('Present');
// else
//     console.log('Absent');

// object cloning
let src = {
    a:10,
    b:20,
    c:30
};

// iteration
// let dest = {};
// for(let key in src){
//     dest[key] = src[key];
// }
// console.log(dest);

// assign
// let dest = Object.assign({}, src);
// console.log(dest);

// spread
// let dest = {...src};
// console.log(dest);


// garbage collection