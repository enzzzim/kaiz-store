import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

export const Breadcrum = ({ product }) => {
  return (
    <nav className="breadcrum" aria-label="breadcrum">
      <span>Home</span>
      <img src={arrow_icon} alt=">" />
      <span>Loja</span>
      <img src={arrow_icon} alt=">" />
      <span>{product.category}</span>
      <img src={arrow_icon} alt=">" />
      <span>{product.name}</span>
    </nav>
  );
};

export default Breadcrum;
