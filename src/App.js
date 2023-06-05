import React from 'react';
import Login from './Login';
import Logout from './Logout';
import FirstLogin from './FirstLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

const App = () => {
  return (
  <div>
  <FirstLogin />
<Router>
  <Routes>
    <Route path="/" element={<ProductList />} />
    <Route path="/products/:id" element={<ProductDetail />} />
  </Routes>
</Router>

  </div>
  );
};

export default App;
