import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashPage() {
  const navigate = useNavigate();

  return (
    <div className="splash">
      {/* Logo */}
      <div className="splash__logo">
        <div className="splash__logo-icon">🍽️</div>
        <div className="splash__logo-text">FreshBite</div>
        <div className="splash__logo-sub">Delivered Fresh, Always</div>
      </div>

      {/* Illustration */}
      <div className="splash__illustration">🛵</div>

      {/* CTA */}
      <div className="splash__cta">
        <h2 className="splash__title">
          Delicious Food,<br />Right at Your Door
        </h2>
        <p className="splash__subtitle">
          Order from the best restaurants near you.<br />
          Fast delivery, every time.
        </p>

        <button className="btn--white" onClick={() => navigate('/login')}>
          Get Started
        </button>
        <button className="btn--white-outline" onClick={() => navigate('/register')}>
          Create Account
        </button>
      </div>
    </div>
  );
}
