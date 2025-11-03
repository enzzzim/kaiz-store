import React from 'react'
import '../Popular/Popular.css'
import data_product from '../Assets/data.js' 
import Item from '../Item/Item.jsx'

export const Popular = () => {
    return (
        <div className='Popular'>
            <h1>POPULAR COM AS MULHERES</h1>
            <hr />
            <div className='popular-item'>
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price

                    } />
                })}
            </div>
        </div>
    )
}
