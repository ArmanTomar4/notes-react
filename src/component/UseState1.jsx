import React, { useState } from 'react'

function UseState1() {
    const [Data,setData] = useState('ram');

    const updateData = () => {
        setData('shyam');
    }

    const UpdateVariable = (a) => {
        setData(a)
    }
  return (
    <>
      <h1>Use State{Data}</h1>
      <button onClick={updateData}>update data</button>
      <button onClick={()=>{setData('sama')}}>updateData12</button>
      <button onClick={()=>UpdateVariable('pn')}>UpdateData123</button>
    </>
  )
}

export default UseState1
