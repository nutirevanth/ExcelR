// //js object
// let obj1={
//     "name":"Revanth",
//     "age":30,
//     "city":"hyderabad",
// }
// //convert js object to json object
// let json1=JSON.stringify(obj1)
// console.log(obj1);
// console.log(json1);
// //convert json to js object
// let json2='{"name":"john","age":30,"city":"hyd"}';
// let obj2=JSON.parse(json2);
// console.log(json2);
// console.log(obj2);

// const jsonk={
//     "name":"john",
//     "age":30,
//     "city":"banglore"
// }

// console.log(JSON.stringify(jsonk));
// const json_list=[1,2,3,4,5,6,7,8,9,10];
// const json_list2=[
//     {"name":"abhi","age":20,"city":"hyd"},
//     {"name":"reddy","age":21,"city":"vinukonda"}
// ];
// console.log(JSON.stringify(json_list));
// console.log(JSON.stringify(json_list2));

// const nested_object={
//     "name":"nagi",
//     "age":22,
//     "skills":"construction",
//     "address":{
//         "street":"123 main street",
//         "city":"hyderabad",
//         "state":"telangana"
//     }
// }
//  let nested_json=JSON.stringify(nested_object);
//  console.log(nested_json)

//  console.log(nested_object.name);
//  console.log(nested_object["skills"]);

//  async function fetchData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//     console.log(data.name);
//     //console.log(data.company.name);
//     //console.log(data.address["street"]);

//     console.log(Object.keys(data));//keys of the object 
//     console.log(Object.values(data));//values of the object
//     console.log(Object.entries(data));//entries(key-value) of the object
//  }

//  fetchData();

 const json1={
    "name":"john",
    "age":20,
    "city":"new york"
 }

 const json2={
    "name":"peter",
    "age":22,
    "city":"ongole"
 }

 console.log(json1);
 console.log(json2);
 json1.age=45;
 console.log(json1)
 delete json2.age;
//  const merged_json=Object.assign(json1,json2);
//  console.log(merged_json);