import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <div className="auth">
      <button className="auth__back" onClick={() => navigate('/')}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D2D2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <h1 className="auth__title">Create account ✨</h1>
      <p className="auth__subtitle">Join FreshBite and enjoy fresh food delivered to your door.</p>

      <div className="form-group">
        <label className="form-label">Full Name</label>
        <input className="form-input" type="text" name="name" placeholder="Saraswathi" value={form.name} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label className="form-label">Email</label>
        <input className="form-input" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label className="form-label">Password</label>
        <input className="form-input" type="password" name="password" placeholder="Min. 8 characters" value={form.password} onChange={handleChange} />
      </div>

      <button className="btn btn--primary btn--full" style={{ marginBottom: 16 }} onClick={() => navigate('/login')}>
        Create Account
      </button>

      <div className="auth__footer">
        Already have an account?{' '}
        <a onClick={() => navigate('/login')}>Sign in</a>
      </div>
    </div>
  );
}
