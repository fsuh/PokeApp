import React from 'react'
import classes from './Card.module.css'
import {Link} from 'react-router-dom'

const Card = ({image, name}) => {
  return (
    <div className={classes.card}>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <Link to={`${name}`}>read more...</Link>
    </div>
  )
}

export default Card;