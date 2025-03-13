import React from 'react';

const ReuseableList = ({items}) => {
  return (
    <ul>
      {items.map((d,i)=>{
        return<li key={i}>{d}</li>
      })}
    </ul>
  );
}

export default ReuseableList;
