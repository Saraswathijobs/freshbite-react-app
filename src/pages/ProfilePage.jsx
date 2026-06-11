import React from 'react';
import { useNavigate } from 'react-router-dom';

const MENU = [
  { icon: '📦', label: 'My Orders' },
  { icon: '📍', label: 'Saved Addresses' },
  { icon: '💳', label: 'Payment Methods' },
  { icon: '🎁', label: 'Rewards & Coupons' },
  { icon: '⭐', label: 'Rate the App' },
  { icon: '❓', label: 'Help & Support' },
  { icon: '⚙️', label: 'Settings' },
];

export default function ProfilePage({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="profile">
      {/* Header */}
      <div className="profile__header">
        <div className="profile__avatar">👩‍💻</div>
        <div>
          <div className="profile__name">Saraswathi</div>
          <div className="profile__email">saraswathi@example.com</div>
          <span className="tag" style={{ marginTop: 6 }}>🥇 Gold Member</span>
        </div>
      </div>

      {/* Stats */}
      <div className="profile__stats">
        <div className="stat-card">
          <div className="stat-card__num">24</div>
          <div className="stat-card__label">Orders</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__num">₹3.2k</div>
          <div className="stat-card__label">Spent</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__num">120</div>
          <div className="stat-card__label">Points</div>
        </div>
      </div>

      {/* Menu */}
      <div className="menu-list">
        {MENU.map((item) => (
          <button key={item.label} className="menu-item">
            <div className="menu-item__icon">{item.icon}</div>
            <span className="menu-item__label">{item.label}</span>
            <span className="menu-item__chevron">›</span>
          </button>
        ))}
      </div>

      {/* Logout */}
      <button
        className="btn btn--outline btn--full"
        style={{ marginTop: 24 }}
        onClick={handleLogout}
      >
        🚪 Sign Out
      </button>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'var(--font-main)',
          fontSize: 11,
          color: 'var(--gray-3)',
          marginTop: 20,
        }}
      >
        FreshBite v1.0.0
      </div>
    </div>
  );
}
