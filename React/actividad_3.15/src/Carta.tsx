import React from 'react';

interface CartaData {
    nombre: string;
    id: number;
    disponible: boolean;
    imagen_url: string;
}

const Carta: React.FC<CartaData> = ({
    nombre,
    id,
    disponible,
    imagen_url,
  }) => {
    return (
        <div className="bg-dark text-light card border border-primary m-1">
            <img className="card-img-top" height="50%" src={imagen_url} alt={nombre} />
            <div className="card-body">
                <p className="card-text">{id}</p>
                <h4 className="card-title">{nombre}</h4>
                <p className="card-text">{disponible? "" : "no"} disponible</p>
            </div>
        </div>
    );
  };

  export default Carta;