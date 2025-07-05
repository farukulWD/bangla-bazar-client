# Bangla Bazar E-commerce Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Regular-green)](LICENSE)

A modern, full-featured e-commerce platform for online grocery and organic food stores. Built with Next.js, React, and Tailwind CSS, featuring comprehensive user management, product catalog, shopping cart, checkout, and payment processing capabilities.

## 🚀 Live Demo

- **Production**: [https://bangla-bazar-store.vercel.app/](https://bangla-bazar-store.vercel.app/)
- **Homepage**: [https://bangla-bazar-store.vercel.app/](https://bangla-bazar-store.vercel.app/)

## ✨ Features

### 🛍️ E-commerce Features
- **Product Catalog** with advanced filtering and search
- **Shopping Cart** with persistent storage
- **Multi-step Checkout** with multiple payment methods
- **Order Management** with real-time tracking
- **Product Variants** (size, color, attributes)
- **Stock Management** with real-time inventory
- **Coupon System** with discount codes
- **Wishlist** functionality
- **Product Reviews** and ratings

### 🔐 Authentication & User Management
- **Multi-provider OAuth** (Google, GitHub, Facebook)
- **Email/Password Authentication**
- **Email Verification** system
- **Password Reset** functionality
- **Phone-based Signup**
- **Profile Management** with address book
- **Order History** tracking

### 💳 Payment Integration
- **Stripe** (Credit/Debit Cards)
- **Razorpay** (Digital Payments)
- **Cash on Delivery**
- **Secure Payment Processing**

### 🌐 Internationalization
- **Multi-language Support** (English, German, Spanish, French)
- **Dynamic Content Translation**
- **Multi-currency Display**
- **Localized Date Formatting**

### 📱 Progressive Web App (PWA)
- **Offline Support**
- **Installable Web App**
- **Push Notifications**
- **Mobile-first Design**

### 📊 Analytics & Monitoring
- **Google Analytics 4** integration
- **Real-time Notifications** with Socket.io
- **Live Chat** integration (Tawk.to)
- **Custom Event Tracking**

## 🏗️ Technology Stack

### Core Technologies
- **Frontend Framework**: [Next.js 14.2.3](https://nextjs.org/)
- **UI Library**: [React 18.2.0](https://reactjs.org/)
- **Styling**: [Tailwind CSS 3.4.3](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) + [Redux Persist](https://github.com/rt2zz/redux-persist)
- **Authentication**: [NextAuth.js 4.24.7](https://next-auth.js.org/)
- **Data Fetching**: [TanStack React Query 5.64.2](https://tanstack.com/query)
- **Cart Management**: [react-use-cart](https://github.com/notrab/react-use-cart)

### Key Dependencies
- **UI Components**: [Headless UI](https://headlessui.dev/), [Heroicons](https://heroicons.com/), [React Icons](https://react-icons.github.io/react-icons/)
- **Forms**: [React Hook Form 7.24.0](https://react-hook-form.com/)
- **Notifications**: [React Toastify 11.0.3](https://fkhadra.github.io/react-toastify/)
- **Carousel**: [Swiper 11.2.2](https://swiperjs.com/), [React Responsive Carousel](https://react-responsive-carousel.js.org/)
- **Payment**: [Stripe](https://stripe.com/), [Razorpay](https://razorpay.com/)
- **PDF Generation**: [@react-pdf/renderer](https://react-pdf.org/)
- **Analytics**: [React GA4](https://github.com/PriceRunner/react-ga4)
- **Live Chat**: [Tawk.to](https://www.tawk.to/)

## 📁 Project Structure

```
bangla-bazar-client/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── banner/         # Banner components
│   │   ├── cart/           # Shopping cart components
│   │   ├── category/       # Category components
│   │   ├── checkout/       # Checkout components
│   │   ├── common/         # Common UI components
│   │   ├── form/           # Form components
│   │   ├── modal/          # Modal components
│   │   ├── product/        # Product components
│   │   └── ...
│   ├── context/            # React Context providers
│   ├── hooks/              # Custom React hooks
│   ├── layout/             # Layout components
│   ├── lib/                # Utility libraries
│   ├── pages/              # Next.js pages
│   │   ├── auth/           # Authentication pages
│   │   ├── user/           # User dashboard pages
│   │   ├── api/            # API routes
│   │   └── ...
│   ├── redux/              # Redux store and slices
│   ├── services/           # API service functions
│   ├── styles/             # Global styles
│   └── utils/              # Utility functions
├── public/                 # Static assets
├── locales/                # Internationalization files
└── ...
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager
- API backend server running

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bangla-bazar-client.git
   cd bangla-bazar-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_BASE_URL=your_api_backend_url
   NEXTAUTH_SECRET=your_nextauth_secret_key
   NEXT_PUBLIC_API_SOCKET_URL=your_socket_server_url
   NEXT_PUBLIC_STORE_DOMAIN=your_domain_url
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_BASE_URL` | Backend API base URL | Yes |
| `NEXTAUTH_SECRET` | NextAuth.js secret key | Yes |
| `NEXT_PUBLIC_API_SOCKET_URL` | Socket.io server URL | Yes |
| `NEXT_PUBLIC_STORE_DOMAIN` | Store domain URL | Yes |

### Store Customization

The application supports extensive customization through the admin panel:

- **Theme Settings**: Colors, fonts, branding
- **Payment Configuration**: Payment gateway settings
- **Shipping Configuration**: Shipping methods and costs
- **Email Templates**: Customizable email notifications
- **SEO Settings**: Meta tags and search optimization

## 📱 Features Overview

### Homepage
- Hero carousel with promotional banners
- Featured categories
- Popular products section
- Discounted products
- Promotional cards

### Product Pages
- Detailed product information
- Product variants selection
- Image gallery
- Related products
- Add to cart functionality

### Shopping Cart
- Persistent cart storage
- Quantity management
- Price calculations
- Coupon application
- Checkout redirection

### Checkout Process
- Multi-step checkout form
- Shipping address management
- Payment method selection
- Order summary
- Email confirmation

### User Dashboard
- Order history
- Profile management
- Address book
- Password change
- Account settings

## 🌐 Internationalization

The application supports multiple languages:

- **English** (Default)
- **German** (Deutsch)
- **Spanish** (Español)
- **French** (Français)

Translation files are located in the `locales/` directory.

## 🔒 Security Features

- JWT-based authentication
- CSRF protection
- Input validation and sanitization
- Secure payment processing
- HTTPS enforcement
- Session management

## 📊 Analytics & Monitoring

- Google Analytics 4 integration
- Custom event tracking
- Conversion monitoring
- User behavior analysis
- Real-time notifications

## 🚀 Performance Optimization

- Next.js Image optimization
- Code splitting and lazy loading
- React Query caching
- Redux persistence
- Bundle optimization
- CDN integration



## 📝 License

This project is licensed under the Regular License - see the [LICENSE](LICENSE) file for details.





