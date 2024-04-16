import React from "react";
import Carta from "./Carta.tsx";

interface CartasData {
    cartas: {
        nombre: string;
        id: number;
        disponible: boolean;
        imagen_url: string;
  }[];
}

const ContenedorCartas: React.FC<CartasData> = ({ cartas }) => {
  return (
    <div className="card-group">
        {cartas.map((carta) => (
            <Carta {...carta} />
        ))}
    </div>
  );
};

export default ContenedorCartas;
