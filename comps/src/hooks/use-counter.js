
import { useState, useEffect } from "react";

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count);
    }, [count]); 
    // [count] This mean rerun the arrow function anytime the count of state changes

    const increment = () => {
        setCount(count + 1);
    };

    return {
        count: count,
        increment: increment
    };
}

export default useCounter;