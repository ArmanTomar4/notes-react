import React, { useState } from 'react'

function UseState3() {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>You click{count}times</p>
            <button onClick={() => setCount(count + 1 + 10000000)}>Click me</button>
        </>
    )
}

export default UseState3
