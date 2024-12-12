// import React from 'react'
import img from './image/agum.png';
import Card from 'Card.css'
export default function Card1(props) {
  return (
    <>
        <div className="card">
            <img src={props.img} alt="" />
            <h1>Agum{props.title}image</h1>
        </div>
    </>
  )
}

// export default Card
