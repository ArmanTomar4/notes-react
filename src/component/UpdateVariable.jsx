import React from 'react'

function UpdateVariable() {
    let data = "Hello";
    const UpdateData = () => {
        data = "World";
        // alert(data);
    }
  return (
    <>
      <h1>UpdateVariable{data}</h1>
      <button onClick={UpdateData}>update data</button>
    </>
  )
}

export default UpdateVariable
