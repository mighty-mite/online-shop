import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SingleProductPage from './pages/singleProductPage/SingleProductPage';
import ShopPage from './pages/shopPage/ShopPage';
import CartPage from './pages/cartPage/CartPage';
import ErrorPage from './pages/errorPage/ErrorPage';
import { store } from './store';

import './App.scss';

export default function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}
