import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = (props) => {  

  return (
    <Link to={'/'} style={{textDecoration:"none",display:'flex',justifyContent:"center"}}>
      <div className="cardContainer" style={{width:'70%'}}>
        <div className="cardImg">
          <img src={props.imgUrl} alt="" style={{width:'100%',borderRadius:'10px'}} />
        </div>
        <div id="title" style={{textAlign:'center',color:'white'}}>
          <h3 style={{marginTop:'10px'}}>₹{props.price}</h3>
          <Link to="payment"> <button>Buy Now</button></Link>
        </div>
      </div>
    </Link>
  )
}

export default Card