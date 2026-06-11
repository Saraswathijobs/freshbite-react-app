import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = () => {
    if (!form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
      navigate('/home');
    }, 900);
  };

  return (
    <div className="auth">
      {/* Back */}
      <button className="auth__back" onClick={() => navigate('/')}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D2D2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <h1 className="auth__title">Welcome back 👋</h1>
      <p className="auth__subtitle">Sign in to continue ordering your favourite meals.</p>

      {/* Social */}
      <div className="auth__social">
        <button className="social-btn">
          <span>🇬</span> Google
        </button>
        <button className="social-btn">
          <span>🍎</span> Apple
        </button>
      </div>

      <div className="auth__divider"><span>or continue with email</span></div>

      {/* Form */}
      <div className="form-group">
        <label className="form-label">Email</label>
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Password</label>
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <div className="auth__forgot">
        <a href="#forgot">Forgot password?</a>
      </div>

      {error && (
        <p style={{ color: 'var(--danger)', fontSize: 12, fontFamily: 'var(--font-main)', marginBottom: 12 }}>
          {error}
        </p>
      )}

      <button
        className="btn btn--primary btn--full"
        onClick={handleSubmit}
        disabled={loading}
        style={{ marginBottom: 16 }}
      >
        {loading ? 'Signing in…' : 'Sign In'}
      </button>

      <div className="auth__footer">
        Don't have an account?{' '}
        <a onClick={() => navigate('/register')}>Sign up</a>
      </div>
    </div>
  );
}
