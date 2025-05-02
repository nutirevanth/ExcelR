import React, { useContext } from "react";
import { PropertyContext } from "./PropertyContext";
//provider-Grandparentcontext
//consumer-grandchild
const GrandParentcontext = () => {
    let property='hyderabad';
  return (
    <>
      <div>GrandParent</div>
      <PropertyContext.Provider value={property}>
      <Parent/>
      </PropertyContext.Provider>
      
    </>
  );
};
const Parent = () => {
  return (
    <div>
      <div>Parent</div>
      <Child />
    </div>
  );
};
const Child = () => {
  return (
    <>
      <div>Child</div>
      <GrandChild  />
    </>
  );
};
const GrandChild = () => {
    let data = useContext(PropertyContext);
  return (
    <>
    
      <div>GrandChild</div>
      <div>{data} from GrandChild</div>
    </>
  );
};

export default GrandParentcontext;