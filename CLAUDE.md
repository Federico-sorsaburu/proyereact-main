# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Coder Flex App** is a React 19 e-commerce application for PC hardware and accessories. It uses Vite as the build tool and Firebase Firestore as the backend database.

## Common Commands

```bash
# Development server (runs on http://localhost:5173)
npm run dev

# Production build
npm run build

# Lint with ESLint
npm run lint

# Preview production build locally
npm run preview

# Install dependencies
npm install
```

## Architecture Overview

### Technology Stack
- **React 19** with hooks and functional components
- **Vite** for build tooling
- **React Router DOM v7** for SPA navigation
- **Firebase Firestore** for database (products and orders)
- **React Hook Form** for form validation
- **SweetAlert2** for user notifications
- **React Spinners** for loading states
- **React Icons** for iconography

### Project Structure

```
src/
├── components/          # UI components
│   ├── ItemListContainer.jsx    # Product list with category filtering
│   ├── ItemDetailContainer.jsx  # Single product detail view
│   ├── CartContainer.jsx        # Cart page container
│   ├── CartView.jsx             # Cart display component
│   ├── CheckoutHRF.jsx          # Checkout form with validation
│   ├── Navbar.jsx               # Navigation with cart widget
│   └── LoaderComponent.jsx      # Loading spinner
├── context/
│   └── CartContext.jsx          # Global cart state with localStorage persistence
├── service/
│   └── firebase.jsx             # Firebase initialization and config
├── mock/
│   └── AsyncService.jsx         # Legacy mock data (products now stored in Firebase)
├── css/                         # Component-specific CSS files
├── example/                     # Learning examples (API calls, HOCs)
└── hoc/
    └── withLogin.jsx              # Higher-order component example
```

### Data Flow Patterns

1. **Product Catalog**: Data flows from Firebase Firestore (collection `productos`) → `ItemListContainer` → `ItemList` → `Item` components.

2. **Cart State**: Managed via `CartContext` (React Context API) with localStorage persistence:
   - `addItem(item, qty)` - Add or update quantity
   - `removeItem(id)` - Remove from cart
   - `clear()` - Empty cart
   - `total()` - Calculate total price
   - `cartQuantity()` - Total items count

3. **Checkout Flow**: `CheckoutHRF` uses React Hook Form for validation, then saves orders to Firebase (collection `orders`) with `serverTimestamp()`.

4. **Routing**: App uses `BrowserRouter` with routes defined in `App.jsx`:
   - `/` - Home with hero and product list
   - `/category/:type` - Filtered products (Notebooks, PCs, Componentes, Periféricos, Ofertas)
   - `/item/:id` - Product detail
   - `/cart` - Shopping cart
   - `/checkout` - Checkout form

### Key Implementation Details

- **Category Banners**: Dynamic category banners are loaded from external URLs (i.postimg.cc) in `ItemListContainer` using a `banners` mapping object.

- **Firebase Queries**: Products are fetched using Firestore queries with `where()` filters for category filtering.

- **Form Validation**: Checkout form uses `react-hook-form` with custom validation rules including email confirmation matching.

- **Stock Management**: Original implementation had local stock tracking; current implementation relies on Firebase data.

- **Environment Variables**: Firebase config is hardcoded in `src/service/firebase.jsx` (no env vars currently used).

### Component Naming Conventions

- `*Container.jsx` - Components that fetch data and manage state
- `*View.jsx` - Presentational components that receive data via props
- Regular component names for leaf UI components

### Styling Approach

- CSS files are co-located in `src/css/` directory (not alongside components)
- Each major component has its own CSS file
- Global styles in `index.css`

### Important Notes

- The app displays a `LoaderComponent` for 1.5 seconds on initial load (see `App.jsx` useEffect)
- The `example/` and `hoc/` folders contain learning exercises and can be ignored for main functionality
- Product images are hosted externally on i.postimg.cc
