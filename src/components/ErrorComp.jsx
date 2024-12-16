import { useState } from 'react';

export default function ErrorComp() {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    if (counter === 5) {
        // Simulate an error!
        throw new Error('Volunteered Error!.');
    }

    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={handleClick}>+</button>
      </div>
    )
}
