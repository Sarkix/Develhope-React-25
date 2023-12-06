import React, { useState, useEffect } from 'react';
import CounterDisplay from './CounterDisplay';

function Counter({ initialVal, incrementAmount }) {
    const [counter, setCounter] = useState(initialVal);

    const handleIncrement = () => {
        setCounter((prevCounter) => prevCounter + incrementAmount);
    };

    const handleDecrement = () => {
        setCounter((prevCounter) => prevCounter - incrementAmount);
    }

    const handleReset = () => {
        setCounter(initialVal);
    }

    useEffect(() => {
        console.log('Current counter value:', counter);
    }, [counter]);

    return (
        <div>
            <CounterDisplay counter={counter} />
            <button onClick={handleIncrement}>Increment Value</button>
            <button onClick={handleDecrement}>Decrement Value</button>
            <button onClick={handleReset}>Reset Value</button>
        </div>
    );
}

export default Counter;






