/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// import React from 'react'
// import img from './image/agum.png';
// import 'Card.css'
export default function Card(props) {
  return (
    <>
        <div className="card">
            <img src={props.img} alt="" />
            <h1>Agum'{props.title}image</h1>
        </div>
    </>
  )
}
