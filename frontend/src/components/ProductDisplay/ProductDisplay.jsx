import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'
import { useContext } from 'react';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-li">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>

            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">R${product.old_price}</div>
                    <div className="displayright-right-price-new">R${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Confeccionada com materiais de alta qualidade, esta peça combina conforto, estilo e durabilidade.
                    Seu design versátil permite composições para diversas ocasiões — desde o dia a dia até eventos mais especiais.
                    O caimento é pensado para valorizar diferentes tipos de corpo, garantindo liberdade de movimento e um visual moderno.
                </div>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button
                    type="button"
                    onClick={(e) =>{
                        e.stopPropagation();
                        e.preventDefault();
                        addToCart(product.id);
                    }}
                >
                    Adicionar ao Carrinho
                </button>


                <p className="productdisplay-right-category"><span>Categoria :</span>Mulheres , Camiseta , Crop Top</p>
                <p className="productdisplay-right-category"><span>Tags :</span>Lançamentos, Moderno</p>
            </div>

        </div>
    )
}

export default ProductDisplay
