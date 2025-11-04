import './App.css';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Product from './pages/Product';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import { Footer } from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/homens" element={<ShopCategory banner= {men_banner} category="men" />} />
          <Route path="/mulheres" element={<ShopCategory banner= {women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory  banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
