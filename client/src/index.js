import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Index/index.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/login.js';
import Register from './pages/Auth/register.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/register'} element={<Register />} />
    </Routes>
  </BrowserRouter>
);
