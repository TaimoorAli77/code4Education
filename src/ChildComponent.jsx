import React,{memo} from 'react';

const ChildComponent = ({count}) => {
  console.log("Child component rendered!")
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default memo(ChildComponent);
//this is how memo used . this component is now wrapped inside memo and it will not render again unless 
// props are changed