import React from 'react';
import useCounter from './useCounter';
const CounterComp = () => {
    const [count, increment, decrement] = useCounter()
    console.log(useCounter)
    return (
        <>
            <p>Count : </p>

        </>
    );
}

export default CounterComp;
