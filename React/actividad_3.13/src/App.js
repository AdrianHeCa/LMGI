import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './rutas/Inicio';
import PuntosDeInteres from './rutas/PuntosDeInteres';
import Restaurantes from './rutas/Restaurantes';
import Hoteles from './rutas/Hoteles';
import Ocio from './rutas/Ocio';

function App() {
  document.body.classList.add('bg-dark');
  return (
    <Router>
      <div className='text-light'>
      <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-2 border-info">
          <div className="container">
            <Link className="navbar-brand" to="/LMGI/React/actividad_3.13/build/">Inicio</Link>
            <div className="navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/LMGI/React/actividad_3.13/build/puntos-de-interes">Puntos de Interés</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/LMGI/React/actividad_3.13/build/restaurantes">Restaurantes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/LMGI/React/actividad_3.13/build/hoteles">Hoteles</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/LMGI/React/actividad_3.13/build/ocio">Ocio</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container col text-light shadow p-4">
          <Routes>
            <Route path="/LMGI/React/actividad_3.13/build/" element={<Inicio/>} />
            <Route path="/LMGI/React/actividad_3.13/build/puntos-de-interes" element={<PuntosDeInteres/>} />
            <Route path="/LMGI/React/actividad_3.13/build/restaurantes" element={<Restaurantes/>} />
            <Route path="/LMGI/React/actividad_3.13/build/hoteles" element={<Hoteles/>} />
            <Route path="/LMGI/React/actividad_3.13/build/ocio" element={<Ocio/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
