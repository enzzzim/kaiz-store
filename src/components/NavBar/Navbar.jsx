import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {

    const [menu, setMenu] = useState("Loja");
    const {getTotalCartItens} = useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='' />
                <p>KAIZ COMPANY</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("Loja")}}><Link to='/'>Loja</Link>{menu==="Loja"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Homens")}}><Link to='/Homens'>Homens</Link>{menu==="Homens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Mulheres")}}><Link to='/Mulheres'>Mulheres</Link>{menu==="Mulheres"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Kids")}}><Link to='Kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/Login'><button>Login</button></Link>
                <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItens()}</div>
            </div>
        </div>
    )
}

export default Navbar