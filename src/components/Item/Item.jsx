import React from 'react'
import '../Item/Item.css'
import { Link } from 'react-router-dom';

export const Item = (props) => {
  return (
    <div className='item'>
      <Link
        to={`/product/${props.id}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img src={props.image} alt={props.name} />
      </Link>

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