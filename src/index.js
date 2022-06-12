import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// para hacer mis rutas
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
// importo bootstrap instalado a mi aplicacion
import 'bootstrap/dist/css/bootstrap.min.css'
// importo mis rutas
import Inicio from './routes/Inicio.jsx';
import Blog from './routes/Blog';
import Contacto from './routes/Contacto';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* Routes -> para poder configurar mis rutas  */}
    <Routes>
      {/* rutas o vistas a configurar */}
      <Route
        // recibe el path ---> la url
        path='/'
        // el componente a pintar
        element={<App />}
      >
        {/* AQUI VAN MIS RUTAS ANIDADAS */}
        <Route
          // recibe el index ---> la url
          index
          // el componente a pintar
          element={<Inicio />}
        />
        <Route
          // recibe el path ---> la url
          path='/blog'
          // el componente a pintar
          element={<Blog />}
        />
        <Route
          // recibe el path ---> la url
          path='/contacto'
          // el componente a pintar
          element={<Contacto />}
        />
      </Route>
    </Routes>
    {/* <App /> */}
  </BrowserRouter>
  // </React.StrictMode>
);

