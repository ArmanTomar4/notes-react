import React, { useState } from 'react'

function UseState() {
  const [Data,setData] = useState('ram');
  const updateData = () =>{
    setData('shyam');
  }
  console.log('render component');
  return (
    <>
      <h1>use state {Data}</h1>
      <button onClick={updateData}>click</button>
    </>
  )
}

export default UseState
