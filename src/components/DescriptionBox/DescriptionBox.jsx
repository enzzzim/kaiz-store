import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
    return (
        <div className='Descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Descrição</div>
                <div className="descriptionbox-nav-box fade">Comentários (122) </div>
            </div>
            <div className="descriptionbox-description">
                <p>Nossa missão é oferecer peças versáteis, produzidas com materiais de alta durabilidade e atenção aos detalhes, para que cada cliente se sinta confiante e bem-vestido todos os dias.
                    Trabalhamos com coleções atualizadas e tendências que unem o melhor da moda casual e contemporânea.
                    Na Kaiz, comprar é simples, rápido e seguro. Explore nossas categorias, descubra novas inspirações e encontre o look ideal para você!</p>
            </div>
        </div>
    )
}

export default DescriptionBox
