import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import PhoneShell from './components/PhoneShell';
import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import SuccessPage from './pages/SuccessPage';

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <Router>
      <PhoneShell cartCount={cartCount} isLoggedIn={isLoggedIn}>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route
            path="/login"
            element={<LoginPage onLogin={() => setIsLoggedIn(true)} />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/home"
            element={isLoggedIn ? <HomePage addToCart={addToCart} /> : <Navigate to="/" />}
          />
          <Route
            path="/detail/:id"
            element={isLoggedIn ? <DetailPage addToCart={addToCart} /> : <Navigate to="/" />}
          />
          <Route
            path="/cart"
            element={
              isLoggedIn ? (
                <CartPage cart={cart} updateQty={updateQty} clearCart={clearCart} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/profile"
            element={isLoggedIn ? <ProfilePage onLogout={() => { setIsLoggedIn(false); clearCart(); }} /> : <Navigate to="/" />}
          />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </PhoneShell>
    </Router>
  );
}

export default App;
