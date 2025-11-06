import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../context/ShopContext'

export const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
    return (
        <div className='cartitems '>
            <div className="cartitems-format-main">
                <p>Produtos</p>
                <p>Nome</p>
                <p>Preço</p>
                <p>Quantidade</p>
                <p>Total</p>
                <p>Remover</p>
            </div>
            <hr />
            {all_product.map((e) =>{
                if (cartItems[e.id] > 0) {
                   return <div>
                        <div className="cartitems-format">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>R${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>{e.new_price*cartItems[e.id]}</p>
                            <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }

                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Total no Carrinho</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Total</p>
                            <p>R${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Frete Grátis</p>
                            <p>Grátis</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>R${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Continuar para o Pagamento</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Caso possua cupom de desconto, insira aqui</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='cupom de desconto' />
                        <button>Enviar</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

