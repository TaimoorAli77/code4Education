import React from 'react';
import useCounter from './useCounter';
const CounterComp = () => {
    const { count, increment, decrement } = useCounter(10,5)
    return (
        <>
            <p>Count : {count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>

        </>
    );
}

export default CounterComp;
