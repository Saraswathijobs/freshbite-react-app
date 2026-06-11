import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  {
    key: 'home',
    label: 'Home',
    path: '/home',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9.5L12 3l9 6.5V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    key: 'search',
    label: 'Explore',
    path: '/home',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    key: 'cart',
    label: 'Cart',
    path: '/cart',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    key: 'profile',
    label: 'Profile',
    path: '/profile',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

const HIDDEN_NAV_PATHS = ['/', '/login', '/register', '/success'];

export default function PhoneShell({ children, cartCount }) {
  const navigate = useNavigate();
  const location = useLocation();

  const showNav = !HIDDEN_NAV_PATHS.includes(location.pathname);

  const now = new Date();
  const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <div className="phone-shell">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-bar__time">{time}</span>
        <div className="status-bar__icons">
          {/* Signal */}
          <svg width="16" height="12" viewBox="0 0 16 12">
            <rect x="0" y="8" width="3" height="4" rx="0.5" />
            <rect x="4.5" y="5" width="3" height="7" rx="0.5" />
            <rect x="9" y="2" width="3" height="10" rx="0.5" />
            <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" />
          </svg>
          {/* Wifi */}
          <svg width="16" height="12" viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M1 6.5C5.3 2.2 9.9 0 12 0s6.7 2.2 11 6.5" />
            <path d="M4 10C6.7 7.3 9.5 6 12 6s5.3 1.3 8 4" />
            <path d="M7 13.5C8.7 11.8 10.4 11 12 11s3.3.8 5 2.5" />
            <circle cx="12" cy="17" r="1.5" fill="currentColor" />
          </svg>
          {/* Battery */}
          <svg width="22" height="12" viewBox="0 0 22 12">
            <rect x="0" y="1" width="18" height="10" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="1.5" y="2.5" width="12" height="7" rx="1" fill="currentColor" />
            <path d="M19 4v4" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Screen */}
      <div className="screen">{children}</div>

      {/* Bottom Nav */}
      {showNav && (
        <nav className="bottom-nav">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path && item.key !== 'search';
            const isCart = item.key === 'cart';

            return (
              <button
                key={item.key}
                className={`bottom-nav__item ${isActive ? 'active' : ''}`}
                onClick={() => navigate(item.path)}
                aria-label={item.label}
              >
                <div className="bottom-nav__icon" style={{ position: 'relative' }}>
                  {item.icon}
                  {isCart && cartCount > 0 && (
                    <span
                      className="badge"
                      style={{
                        position: 'absolute',
                        top: -6,
                        right: -6,
                        fontSize: 9,
                        minWidth: 16,
                        height: 16,
                      }}
                    >
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="bottom-nav__label">{item.label}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}
