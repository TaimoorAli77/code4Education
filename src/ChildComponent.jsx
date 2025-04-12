import React, { forwardRef , useRef, useImperativeHandle} from "react";

const ChildComponent = (props,ref) => {
  const childRef =  useRef()
  const handleChildButtonRef = ()=>{

    console.log("Child component rendered!");
  }

  useImperativeHandle(ref,()=>({ handleChildButtonRef}))
  return (
    <div>
      <h1>Child Component</h1>
      <input type="text" ref={ref} />
      <button ref={childRef}>ref child btn</button>
    </div>
  );
};

export default forwardRef(ChildComponent);
//this is how memo used . this component is now wrapped inside memo and it will not render again unless
// props are changed
