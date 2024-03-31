import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.scss';
import ShopPage from './pages/shopPage/ShopPage';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" />
        <Route path="*" />
      </Routes>
      <Footer />
    </div>
  );
}
