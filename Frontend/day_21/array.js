// let arr1=[10,20,30,40,50]

// console.log(arr1);

// let arr2=['hlo','world','this','is','array']
// console.log(arr2);
// console.log(arr2[0]);
// console.log(arr2[1]);
// console.log(arr1.length);//5
// //creating array using new keyword
// let arr3=new Array(10,20,30,40,50);
// console.log(arr3);

// let arr4=new Array(3);//[_,_,_]
// console.log(arr4);//[empty × 3]
// console.log(arr4.length);//3


// let arr5=new Array(1);//[_]
// arr5[0]=10;
// console.log(arr5);//[10]//array containing

// let arr6=Array.of('developer');
// console.log(arr6);//developer

// //accessing array values/elements/items
// let arr7=[10,20,30,40,50];
// console.log(arr7[0]);// with the help of index
// arr7[1]=10000;//updating the value of index 1
// console.log(arr7[1]);//10000
// arr7[1]=20000;//updating the value of index 2
// console.log(arr7[1]);//20000

//adding values to array
// let arr8=['this','is','array','session'];
// console.log(arr8);
// arr8[4]=1000;
// arr8[9]=200;
// console.log(arr8.length)
// console.log(arr8[7]);//undefined

// arr8.push('example')//add to last in array
// console.log(arr8);
// arr8.unshift('hello');//adds at first in array
// console.log(arr8);

// arr8.pop();
// console.log(arr8);
// arr8.shift();
// console.log(arr8);

// at mehtod
//  let arr9=[10,20,30,40,50];
//  console.log(arr9.at(0));//10
// console.log(arr9.at(3));//40
// console.log(arr9.at(-1));//50
// console.log(arr9.at(8));//undefined


//  let arr1=[10,20,30,40,50];
//  let squareArr =arr1.map((num,index,arr1) =>num*num);
//  console.log(squareArr);
 
//  let arr2=['this','is','array','session'];
//  let arr3= arr2.map((e) =>e.toUpperCase());
//  console.log(arr3);
 
// let arr1=[10,21,36,45,60];
// let arr2=arr1.filter(
//     (e,index,arr1)=>{
//         return e%2 ==0
//     }
// )
// let arr2=arr1.filter(num=>num%2==0);
// console.log(arr1);
// console.log(arr2);

// let inputArr=[6,7,8,9,10];
// let arr1=inputArr.map(num=> num*num*num);
// console.log(arr1);
// let arr2=arr1.filter(num=>num%2==1)
// console.log(arr2);

// let arr1=[6,7,8,9,10];
// let arr2=arr1.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// },0);

// console.log(arr2);

// let arr1=[6,7,8,9,10];
// console.log(arr1.includes(2));//false
// console.log(arr1.includes(6,0));//true
// console.log(arr1.includes(6,1));//false
// console.log(arr1.includes(8));//true

// let arr1=[1,2,3,4,5];
// let out=arr1.find((e,index,arr1)=>{
//     return e%2==0;//2
// })
// console.log(out);

// let arr1=[1,2,3,4,5,'hello','world'];
// let out=arr1.find((e,index,arr1)=>{
//     return typeof e=='string';
// })
// console.log(out);//hello

let arr1=[1,2,3,4,5,6,'hello'];
let out=arr1.every((e,index,arr1)=>{
    return typeof e=='number';
})
console.log(out);//false

let arr2=[1,2,3,4,5,6];
let out1=arr2.every((e,index,arr1)=>{
    return typeof e=='number';
})
console.log(out1);//true