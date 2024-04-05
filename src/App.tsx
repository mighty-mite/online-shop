import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.scss';
import ShopPage from './pages/shopPage/ShopPage';
import { store } from './store';

export default function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" />
          <Route path="*" />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}
