import React from 'react'
import '../Item/Item.css'

export const Item = (props) => {
  return (
    <div className= 'item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-prices-new">
                R${props.new_price}
            </div>
            <div className="item-prices-old">
                R${props.old_price}
            </div>
        </div>

    </div>
  )
}

export default Item