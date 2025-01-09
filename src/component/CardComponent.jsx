// import React from 'react'
import Card from './Card'
import './Card.css';
import  IMG from './image/agum.png'
function CardComponent() {
  return (
    <>
      <h1 className='heading'>Card gallery</h1>
    <div className="cardComp">
        <Card title='sister ' img={IMG} />
        <Card title='sister ' img={IMG} />
        <Card title='sister ' img={IMG} />
    </div>
    </>
  )
}
export default CardComponent
