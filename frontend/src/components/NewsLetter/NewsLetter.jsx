import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
    return (
        <div className='NewsLetter'>
            <h1>Receba ofertas exclusivas em seu e-mail</h1>
            <p>Se inscreva para nossa newsletter e fique atualizado</p>
        <div> 
            <input type="email" placeholder='Seu e-mail aqui' />
            <button>Inscrever-se</button>
        </div>

        </div>
    )
}
