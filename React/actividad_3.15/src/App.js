import ContenedorCartas from './ContenedorCartas.tsx';
import cartas from './data.json';

function App() {
  document.body.classList.add('bg-dark');
  return (
    <div className="container text-center text-light">
      <h1>Cartas</h1>
      <ContenedorCartas cartas={cartas} />
    </div>
  );
}

export default App;
