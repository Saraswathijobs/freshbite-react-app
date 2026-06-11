import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FOODS } from '../data/foods';

export default function DetailPage({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [fav, setFav] = useState(false);
  const [added, setAdded] = useState(false);

  const food = FOODS.find((f) => f.id === Number(id));

  if (!food) {
    return (
      <div className="empty" style={{ height: '100%' }}>
        <div className="empty__icon">😕</div>
        <div className="empty__title">Item not found</div>
        <button className="btn btn--primary" onClick={() => navigate('/home')}>
          Go Back
        </button>
      </div>
    );
  }

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addToCart(food);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="detail">
      {/* Hero */}
      <div className="detail__hero">
        {food.emoji}
        <button className="detail__back" onClick={() => navigate(-1)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D2D2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="detail__fav" onClick={() => setFav((v) => !v)}>
          {fav ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Body */}
      <div className="detail__body">
        <div className="detail__meta">
          {food.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
          <span className="tag tag--gray">🕐 {food.time}</span>
        </div>

        <h1 className="detail__name">{food.name}</h1>

        <div className="detail__rating" style={{ marginBottom: 14, fontSize: 14 }}>
          ⭐ {food.rating}
          <span style={{ color: 'var(--gray-4)', fontWeight: 400, marginLeft: 4 }}>
            (128 reviews)
          </span>
        </div>

        <p className="detail__desc">{food.desc}</p>

        {/* Customise */}
        <div style={{ marginBottom: 20 }}>
          <div className="section-title" style={{ marginBottom: 12 }}>Customise</div>
          {['Extra cheese (+₹30)', 'Extra sauce (+₹15)', 'No onions (free)'].map((opt) => (
            <div
              key={opt}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 0',
                borderBottom: '1px solid var(--gray-2)',
                fontFamily: 'var(--font-main)',
                fontSize: 13,
                color: 'var(--secondary)',
              }}
            >
              <span style={{ flex: 1 }}>{opt}</span>
              <input type="checkbox" style={{ accentColor: 'var(--primary)', width: 16, height: 16 }} />
            </div>
          ))}
        </div>

        {/* Price + Qty */}
        <div className="detail__price-row">
          <div>
            <div style={{ fontFamily: 'var(--font-main)', fontSize: 11, color: 'var(--gray-4)', marginBottom: 2 }}>Total Price</div>
            <div className="detail__price">₹{food.price * qty}</div>
          </div>
          <div className="qty-control">
            <button className="qty-btn" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
            <span className="qty-num">{qty}</span>
            <button className="qty-btn" onClick={() => setQty((q) => q + 1)}>+</button>
          </div>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="add-to-cart-bar">
        <button
          className="btn btn--primary btn--full"
          onClick={handleAdd}
          style={{ gap: 8 }}
        >
          {added ? '✅ Added to Cart!' : `🛒 Add to Cart · ₹${food.price * qty}`}
        </button>
      </div>
    </div>
  );
}
