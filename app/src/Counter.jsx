import { useCounter, useState } from "react";

const Counter = ({ initialCount = 0 }) => {
    const [count, setCount] = useState(0);
    // const [count, increment, decrement] = useCounter(initialCount);

    const increment = (count) => setCount(count => count + 1);
    const decrement = (count) => setCount(count => count - 1);

    return (
        <div>
            <button className="btn btn-primary" onClick={decrement}>-</button>
            {count}
            <button className="btn btn-primary" onClick={increment}>+</button>
        </div>
    )
}

export default Counter;