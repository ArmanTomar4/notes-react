/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";

function UseEffect3() {
    const [count, setCount] = useState(0);
    const [data, setdata] = useState(100);
    console.log("render component");

    const pn = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    };
    useEffect(() => {
        pn()
    },[]);
    return (
        <>
            <p>you click {count} times</p>
            <p>you click {data} times</p>
            <button onClick={() => setCount(count + 1)}> Click me</button>
            <button onClick={() => setdata(data + 1)}>Click me</button>
        </>
    );
}
export default UseEffect3;
