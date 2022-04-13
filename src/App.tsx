import React from 'react';
import Home from './view/Home';
import DetailProduct from './view/DetailProduct';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './view/Product';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailProduct />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
