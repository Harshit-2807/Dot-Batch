console.log('Hello World, phase 2!!');
// let a;
// console.log(a);

// const num = 12;

// let lastName = "Patel";
// console.log(lastName);

// lastName = 4;
// console.log(lastName);

// let age = 20;
// let status = (age>=18) ? 'Can Vote' : 'Cant Vote';
// console.log(status);

// let marks = 98;
// switch(true){
//     case marks>=90:
//         console.log('A') ;
//         break;
//     case marks>=80:
//         console.log('B');
//         break;
//     case marks>=70:
//         console.log('C');
//         break;
//     case marks>=60:
//         console.log('D');
//         break;
//     default:
//         console.log('E'); 
//         break;
// }

// for(let i=0;i<5;i++){
//     // console.log(i+1);
//     console.log('Harry');
// }

// let i=0;
// while(i<5){
//     console.log(++i);
// }

// let i=0;
// do{
//     console.log(++i);
// } while(i<5);

// let n = 10;
// let sum = 0;
// while(n>0){
//     sum = sum+n;
//     n--;
// }
// console.log(sum);

// let n = 154873;
// let rev = 0;
// while(n>0){
//     rev = rev*10 + n%10;
//     n = Math.floor(n/10);
// }
// console.log(rev);

// console.log(Math.sqrt(81));

function show()  {  
    document.getElementById("test").innerHTML=Math.sqrt(81); 
    // document.getElementById("test").style.display = "block";
}
function hide(){
    // document.getElementById("test").style.display = "none";
    document.getElementById("test").innerHTML="";
}
