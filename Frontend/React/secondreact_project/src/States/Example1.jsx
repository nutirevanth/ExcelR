import { useState } from "react";

function Example1(){
    let [name,setName]= useState('Bhavishya');
    let change=()=>{
        setName("Tulasi")
    }
    return(
        <>
        <h1>{name}</h1>
        <button onClick={change}>click here to see bhavishyas mother name</button>
        </>
    );
}
export default Example1;