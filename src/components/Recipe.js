import React from 'react'

const Recipe = ({ id, title, calories, image}) => {
  return (
    <div className="card">
     <img src={image} alt=''/> 
     <p key={id}>{title}</p>
     <p>{calories}</p>
   
    </div>
  )
}

export default Recipe
