import React from 'react'
import Card from './Card'
import './Card.css'

const CardContainer = (props) => {
  return (
    <div className='w-100'>
      <div className="row">

        <div className="cardsContainer">
          {
            props.trendingProducts.map((p) => {
              return (
                <Card imgUrl={p.imgUrl} title={p.title} price={p.price} id={p._id} />
              )

            })
          }
        </div>
      </div>
    </div>
  )
}

export default CardContainer