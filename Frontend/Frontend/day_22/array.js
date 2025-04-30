let arr1=[1,2,3,4,5,6,'hello']
// arr1.splice(5);//removes all elements from index 5 to end of the array
// arr1.splice(4,1);//removes one element from index 4 and return the array
// arr1.splice(2,0,'bye','hii');//add 2 element at index 2
// console.log(arr1);

// let output = arr1.some(
//     (e)=>e%2==0 //even numbers 
// )
// console.log(output);//true

// let o2=arr1.findIndex(
//     (e)=>e%2==0
// )
// console.log(o2);

// let output=arr1.reverse()
// console.log(output);

let arr4=[1,2,3,4,5,6,7,8,9,10]
let output= arr4.toString();
console.log(arr4);
console.log(output);

console.log(typeof output);

let arr5= ['hello','hii','world'];
let ou=arr5.toString();
console.log(arr5);
console.log(ou);

let ou1=arr4.join('-');
console.log(ou1);

let arr6=arr4.slice(2,6);
console.log(arr6);

arr4.forEach(
    (element,index,array)=>{
        console.log(`element: ${element}- index: ${index}`);
        
    }
)

for (let e of arr4){
    console.log(e);
    
}

for(let index in arr4){
    console.log(index,' - ',arr4[index]);
    
}

console.log(arr4.indexOf(1));//0
console.log(arr4.indexOf(5));
console.log(arr4.indexOf(100,0));

let arr7=[1,2,3,4]
delete arr7
console.log(arr7);
arr7.fill(41);//[41,41,41,41]
arr7.fill(17,1);//[41,17,17,17]
arr7.fill(17,2,3);//[41,41,17,41]
console.log(arr7);

let str1='hello';
console.log(str1.padStart(10,'*'));//*****hello
console.log(str1.padEnd(10,'*'));//hello*****

let str2='  hello   ';
console.log(str2.length);//10
let st=str2.trimStart();
console.log(st.length);//8
let s3=str2.trimEnd();//7
console.log(s3.length);

let arr8=[10,60,40,20,50,30];
arr8.sort();
console.log(arr8);



let arr14=['welcome','to','session'];
arr14.reduceRight(
    (accumulator,currentvalue,currentindex,array)=>{
        return accumulator+ ' '+currentvalue;
    }
)
console.log(arr14);

let arr15=[10,20,30,50,10];
console.log(arr15.lastIndexOf(10));//4
console.log(arr15.indexOf(10));//0

let arr16=[10,20,30,40,50,60]
arr16.copyWithin(4,0,3);
console.log(arr16);//[10, 20, 30, 40, 10, 20]

let str3='lucky';
console.log(str3.repeat(3));//luckyluckylucky

let str4='luckyworld';
console.log(str4.split("y"));//['luck', 'world']

console.log(str4[2]);//c
console.log(str4.substring(2,6));// ckyw


console.log(str4.replace('w','t'));//luckytorld

let arr17=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr17);//[Array(3), Array(3), Array(3)]
console.log(arr17.flat());//[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr17.flatMap((e)=>{
    return e+10;
}));//['1,2,310', '4,5,610', '7,8,910']

console.log(arr17.flat().flatMap((e)=>{
    return e+10;
}))//[11, 12, 13, 14, 15, 16, 17, 18, 19]
