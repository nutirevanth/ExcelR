import { useState } from "react";
import bike1 from "./bike.jpg";
import car1 from "./car.jpg";

const Example3=()=>{
    let[img,setimg]=useState(bike1);
    let change =()=>{
        setimg(car1);
    }
return(
    <>
    <img src={img} alt="bike" width="200px" height="200px"/>
    <br />
    <button onClick={change}>click</button>
    </>
);
};
export default Example3;