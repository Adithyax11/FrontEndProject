import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import Cart from './screens/Cart/Cart';
import Home from './screens/Home/Home';
import Footer from './components/Footer/Footer';
import PlaceOrder from './screens/PlaceOrder/PlaceOrder';
import LoginPopup from './components/LoginPopUp/LoginPopUp';

const App = () => {
  const [showLogin, setShowLogin] = useState(false); 
  return ( 
    <> 
      {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : null} 
      <div className="app"> 
        <Navbar showLogin={showLogin} setShowLogin={setShowLogin}/> 
        <Routes> 
          <Route path='/' element={<Home/>}></Route> 
          <Route path='/cart' element={<Cart/>}></Route> 
          <Route path='/order' element={<PlaceOrder/>}></Route> 
        </Routes> 
      </div>  
      <Footer/> 
    </>
  );
}

export default App;
