import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const STEPS = [
  { label: 'Placed', emoji: '✅' },
  { label: 'Preparing', emoji: '👨‍🍳' },
  { label: 'On the way', emoji: '🛵' },
  { label: 'Delivered', emoji: '🏠' },
];

export default function SuccessPage() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((s) => {
        if (s < 1) return s + 1;
        clearInterval(interval);
        return s;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="success">
      {/* Icon */}
      <div className="success__icon">✅</div>

      <h2 className="success__title">Order Placed!</h2>
      <p className="success__sub">
        Your order has been confirmed and is being prepared.<br />
        Estimated delivery: <strong>30–45 minutes</strong>
      </p>

      {/* Tracker */}
      <div className="success__tracker">
        {STEPS.map((step, i) => (
          <React.Fragment key={step.label}>
            <div
              className={`tracker-step ${
                i < activeStep ? 'done' : i === activeStep ? 'active' : ''
              }`}
            >
              <div className="tracker-step__dot">{step.emoji}</div>
              <div className="tracker-step__label">{step.label}</div>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`tracker-line ${i < activeStep ? 'done' : ''}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Order ID */}
      <div
        style={{
          background: 'var(--gray-1)',
          borderRadius: 'var(--radius-md)',
          padding: '12px 20px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <div style={{ fontFamily: 'var(--font-main)', fontSize: 11, color: 'var(--gray-4)' }}>
          Order ID
        </div>
        <div style={{ fontFamily: 'var(--font-main)', fontSize: 16, fontWeight: 700, color: 'var(--secondary)' }}>
          #FB-{Math.floor(Math.random() * 90000) + 10000}
        </div>
      </div>

      <button
        className="btn btn--primary btn--full"
        onClick={() => navigate('/home')}
      >
        Back to Home
      </button>

      <button
        className="btn btn--ghost btn--full"
        onClick={() => navigate('/profile')}
      >
        Track Order
      </button>
    </div>
  );
}
