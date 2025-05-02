import React from 'react'

const Parent4 = () => {
  function greet(){
    alert('welcome to recat');
  }
  return(
    <>
    <div>Parent4</div>
    <Chid4 func={greet}/>
    </>
  );
};


export const Chid4 = (props) => {
  return (
    <>
    <div>Chid4</div>
    <button onClick={props.func}>click </button>
    </>
    
  )
};


export default Parent4;