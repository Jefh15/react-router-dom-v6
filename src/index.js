import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// para hacer mis rutas
import { BrowserRouter } from 'react-router-dom';

// importo bootstrap instalado a mi aplicacion
import 'bootstrap/dist/css/bootstrap.min.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* rutas protegidas */}
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);

