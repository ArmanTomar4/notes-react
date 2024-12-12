import React from 'react'
import '../index.css'
function CSSStyling() {
    const boxcss={
        color:"red",
        margin:'50px'
    }
  return (
    <>
        <h1 className='a'>CSS sTYLING</h1>
        <h2 style={{color:'green',backgroundColor:'pink'}}>hhhhhhhhhhhh</h2>
        <h3 style={boxcss}>build</h3>

    </>
  )
}

export default CSSStyling
