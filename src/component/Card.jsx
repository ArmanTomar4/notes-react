// import React from 'react'
import img from './image/agum.png';
import 'Card.css'
export default function Card(props) {
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

/**
 * A function component that renders a Card
 * 
 * @param {Object} props - component props
 * @param {string} [props.title] - title of the card
 * @param {string} [props.img] - image url
 * @returns {ReactElement} - the rendered card component
 */
