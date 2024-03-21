import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Listado from './rutas/Listado.tsx';
import Detalles from './rutas/Detalles.tsx';

function App() {
  document.body.classList.add('bg-dark');
  return (
    <div className='text-light'>
      <Router>
        <nav className="navbar navbar-expand navbar-dark border-bottom border-2 border-success">
            <div className="container">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/LMGI/React/actividad_3.14/build/">Listado</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container col text-light shadow-lg  p-4">
            <Routes>
              <Route path="/LMGI/React/actividad_3.14/build/" element={<Listado/>} />
              <Route path="/LMGI/React/actividad_3.14/build/detalles" element={<Detalles/>} />
            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
