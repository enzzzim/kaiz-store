import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Cadastre-se</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Seu Nome' />
          <input type="text" placeholder='Endereço de e-mail' />
          <input type="text" placeholder='Senha' />
        </div>
        <button>Continuar</button>
        <p className="loginsignup-login">Já possui conta?</p> <span>Login</span>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Ao continuar, concordo com os termos de uso e políticas de privacidade.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup 