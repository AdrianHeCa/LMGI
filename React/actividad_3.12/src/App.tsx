import React from 'react';
import Tabla from './Tabla.tsx';
import { filas } from './Lista.ts';

const App: React.FC = () => {
  document.body.classList.add('bg-dark');
  return (
    <div className="container col-8 text-center text-light">
      <h1>Lista de Compra</h1>
      <Tabla filas={filas} />
    </div>
  );
};

export default App;