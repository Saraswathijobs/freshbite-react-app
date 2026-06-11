import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CartPage({ cart, updateQty, clearCart }) {
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const delivery = subtotal > 0 ? 40 : 0;
  const discount = subtotal > 400 ? 50 : 0;
  const total = subtotal + delivery - discount;

  const handleCheckout = () => {
    clearCart();
    navigate('/success');
  };

  if (cart.length === 0) {
    return (
      <div style={{ padding: 20 }}>
        <h2 className="cart__title">Your Cart</h2>
        <div className="empty">
          <div className="empty__icon">🛒</div>
          <div className="empty__title">Cart is empty</div>
          <div className="empty__sub">Add some delicious items to get started.</div>
          <button className="btn btn--primary" style={{ marginTop: 8 }} onClick={() => navigate('/home')}>
            Browse Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart" style={{ paddingBottom: 100 }}>
      <h2 className="cart__title">Your Cart 🛒</h2>

      {/* Items */}
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item__img">{item.emoji}</div>
          <div className="cart-item__info">
            <div className="cart-item__name">{item.name}</div>
            <div className="cart-item__price">₹{item.price * item.qty}</div>
          </div>
          <div className="cart-item__qty">
            <button onClick={() => updateQty(item.id, -1)}>−</button>
            <span>{item.qty}</span>
            <button onClick={() => updateQty(item.id, 1)}>+</button>
          </div>
        </div>
      ))}

      {/* Promo */}
      <div
        style={{
          margin: '16px 0',
          background: 'var(--primary-lt)',
          borderRadius: 'var(--radius-md)',
          padding: '12px 16px',
          display: 'flex',
          gap: 10,
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 20 }}>🎟️</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-main)', fontSize: 13, fontWeight: 700, color: 'var(--secondary)' }}>
            Promo Code
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--gray-4)' }}>
            {subtotal > 400 ? '✅ FIRST30 applied — ₹50 off!' : 'Add ₹' + (400 - subtotal) + ' more to unlock discount'}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="cart__summary">
        <div className="cart__summary-row">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="cart__summary-row">
          <span>Delivery fee</span>
          <span>₹{delivery}</span>
        </div>
        {discount > 0 && (
          <div className="cart__summary-row">
            <span>Discount</span>
            <span style={{ color: 'var(--success)' }}>−₹{discount}</span>
          </div>
        )}
        <div className="cart__summary-row total">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      {/* Checkout */}
      <div
        style={{
          position: 'fixed',
          bottom: 72,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 390,
          padding: '12px 20px',
          background: 'rgba(255,255,255,.95)',
          backdropFilter: 'blur(8px)',
          borderTop: '1px solid var(--gray-2)',
        }}
      >
        <button className="btn btn--primary btn--full" onClick={handleCheckout}>
          Proceed to Checkout · ₹{total}
        </button>
      </div>
    </div>
  );
}
