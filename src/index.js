import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Capa from './components/pages/main/main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Providers from './providers';
import Dashboard from './components/pages/dashboard/dashboard';
import Categorias from './components/pages/categorias/categorias';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />

      <Router>
        <Providers>
          <Routes>
            <Route path="/" element={<Capa />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/:categoria/:subcategoria" element={<Categorias />} />
          </Routes>
        </Providers>
      </Router>
    <ToastContainer />

  </React.StrictMode>
);
