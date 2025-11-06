import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

export const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>OFERTAS EXCLUSIVAS</h1>
                <h1>PRA VOCÊ</h1>
                <p>SOMENTE OS MAIS VENDIDOS</p>
                <button>Confira Já</button>
            </div>
            <div className="offers-right"></div>
            <img src={exclusive_image} alt="" />

        </div>
    )
}

export default Offers