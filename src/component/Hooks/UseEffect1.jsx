/* eslint-disable no-undef */
import React, { useState , useEffect} from "react";

function UseEffect() {
    const [count, setCount] = useState(0);
    const [data, setdata] = useState(100);
    useEffect(() => {
        console.log("count");
    },[]);
    console.log("render component");
    return (
        <>
            <p>you click {count} times</p>
            <p>you click {data} times</p>
            <button onClick={() => setCount(count + 1)}> Click me</button>
            <button onClick={() => setdata(data + 1)}>Click me</button>
        </>
    );
}
export default UseEffect;
