import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/homePage/HomePage';
import SingleProductPage from './pages/singleProductPage/SingleProductPage';
import ShopPage from './pages/shopPage/ShopPage';
import CartPage from './pages/cartPage/CartPage';
import { store } from './store';

import './App.scss';

export default function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}
