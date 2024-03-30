import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.scss';

export default function App() {
  return (
    <div className="hello">
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/shop" />
        <Route path="/cart" />
        <Route path="*" />
      </Routes>
      <Footer />
    </div>
  );
}
