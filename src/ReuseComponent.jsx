import React from 'react';

const ReuseComponent = ({text,onclick}) => {
  return <button onClick={onclick}>{text}</button>
}

export default ReuseComponent;
