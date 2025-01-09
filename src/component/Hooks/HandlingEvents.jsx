import React, { useState } from 'react'

function HandlingEvents() {
    const [bg,setBg] =useState('red')
    const [text,setText]= useState('click here')
    const changeColor=() => {
        setBg("green")
        setText("changed")
    }
    const back = ()=>{
        setBg("red")
    }
  return (
    <>
        <div style={{background:bg}} className="box">
            <button onClick={changeColor} onDoubleClick={back}>{text}</button>
        </div>
    </>
  )
}

export default HandlingEvents
