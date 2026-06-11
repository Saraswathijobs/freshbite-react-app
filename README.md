# FreshBite – React JS Mobile App UI

A pixel-perfect mobile food delivery app UI built with React JS, centered on a desktop webpage. Designed as a qualifier task submission.

## 🚀 Live Demo

> Deploy to [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/) after setup.

## 📱 Features

- **Splash / Onboarding screen** with CTA buttons
- **Login & Register** with form validation
- **Home Page** with:
  - Location header
  - Search bar
  - Promotional banner
  - Category filter chips (scroll)
  - Food grid with ratings and prices
  - Nearby restaurants list
- **Detail Page** with quantity selector, customisation options, and Add to Cart
- **Cart Page** with quantity management, promo code logic, order summary
- **Order Success** page with animated order tracker
- **Profile Page** with stats and menu

## 🛠️ Tech Stack

- React JS 18
- React Router DOM v6
- CSS Variables (no external UI library)
- Google Fonts (Poppins + Inter)

## 📂 Project Structure

```
src/
├── components/
│   └── PhoneShell.jsx       # Status bar + bottom nav wrapper
├── pages/
│   ├── SplashPage.jsx       # Onboarding
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── HomePage.jsx
│   ├── DetailPage.jsx
│   ├── CartPage.jsx
│   ├── ProfilePage.jsx
│   └── SuccessPage.jsx
├── data/
│   └── foods.js             # Mock data
├── App.js                   # Routes + global state
├── index.css                # Design system & all styles
└── index.js
```

## ⚙️ Setup

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/freshbite-react-app.git
cd freshbite-react-app

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

## 🌐 Deploy to Netlify

```bash
npm run build
# Drag the /build folder to netlify.com/drop
```

Or connect your GitHub repo in Netlify's dashboard (auto-deploys on push).

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📋 Notes

- The mobile shell (390×844px) is centered on the webpage on desktop
- On screens ≤430px the shell fills the viewport (true mobile experience)
- Navigation state is managed via React Router + React `useState`
- Cart state is lifted to `App.js` and passed as props
- No external CSS frameworks used — pure CSS variables design system

## 👩‍💻 Author

Saraswathi | Frontend Developer  
React JS · HTML · CSS · JavaScript



