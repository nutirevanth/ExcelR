import { useState } from "react";

const Example2=()=>{
    let [count,setcount]=useState(0);
    return(
        <>
        <button onClick={()=>setcount(count+1)}>+</button>
        <span>{count}</span>
        <button onClick={()=>setcount(count-1)}>-</button>
        <div>
            <button onClick={()=>setcount(0)}>Reset</button>
        </div>
        </>
    );
};
export default Example2;