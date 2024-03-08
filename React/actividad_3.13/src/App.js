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
            <Link className="navbar-brand" to="/">Inicio</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/puntos-de-interes">Puntos de Interés</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/restaurantes">Restaurantes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/hoteles">Hoteles</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ocio">Ocio</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container col-8 text-light shadow p-4">
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/puntos-de-interes" element={<PuntosDeInteres/>} />
            <Route path="/restaurantes" element={<Restaurantes/>} />
            <Route path="/hoteles" element={<Hoteles/>} />
            <Route path="/ocio" element={<Ocio/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
