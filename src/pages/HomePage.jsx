import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, FOODS, RESTAURANTS } from '../data/foods';

export default function HomePage({ addToCart }) {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filteredFoods = FOODS.filter((f) => {
    const matchCat = activeCategory === 'all' || f.category === activeCategory;
    const matchSearch = f.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="home">
      {/* Header */}
      <div className="home__header">
        <div className="home__location">
          <div>
            <div className="home__location-label">Deliver to</div>
            <div className="home__location-name">
              📍 Hyderabad, IN
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>
        <div className="home__avatar">👩‍💻</div>
      </div>

      {/* Search */}
      <div className="search-bar">
        <span className="search-bar__icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search for food or restaurants…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Promo Banner */}
      <div className="banner">
        <div className="banner__text">
          <div className="banner__tag">🔥 Limited Offer</div>
          <div className="banner__title">Get 30% off<br />your first order</div>
          <button className="banner__cta">Order Now</button>
        </div>
        <div className="banner__emoji">🍕</div>
      </div>

      {/* Categories */}
      <div className="section-header">
        <span className="section-title">Categories</span>
      </div>
      <div className="categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`category-chip ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <div className="category-chip__icon">{cat.emoji}</div>
            <span className="category-chip__label">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Food Grid */}
      <div className="section-header">
        <span className="section-title">Popular Picks</span>
        <button className="section-link">See All</button>
      </div>

      {filteredFoods.length === 0 ? (
        <div className="empty">
          <div className="empty__icon">🔍</div>
          <div className="empty__title">Nothing found</div>
          <div className="empty__sub">Try a different search or category.</div>
        </div>
      ) : (
        <div className="food-grid">
          {filteredFoods.map((food) => (
            <div
              key={food.id}
              className="food-card"
              onClick={() => navigate(`/detail/${food.id}`)}
            >
              <div className="food-card__img">{food.emoji}</div>
              <div className="food-card__body">
                <div className="food-card__name">{food.name}</div>
                <div className="food-card__meta">
                  <div className="food-card__price">₹{food.price}</div>
                  <div className="food-card__rating">⭐ {food.rating}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Restaurants */}
      <div className="divider" />
      <div style={{ paddingTop: 20 }}>
        <div className="section-header">
          <span className="section-title">Nearby Restaurants</span>
          <button className="section-link">See All</button>
        </div>
        <div className="restaurant-list">
          {RESTAURANTS.map((r) => (
            <div key={r.id} className="restaurant-card">
              <div className="restaurant-card__img">{r.emoji}</div>
              <div className="restaurant-card__info">
                <div className="restaurant-card__name">{r.name}</div>
                <div className="restaurant-card__tags">
                  {r.tags.map((t) => (
                    <span key={t} className="tag tag--gray">{t}</span>
                  ))}
                </div>
                <div className="restaurant-card__meta">
                  <span>⭐ {r.rating}</span>
                  <span>🕐 {r.time}</span>
                  <span>📍 {r.distance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
