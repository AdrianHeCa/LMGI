import React from "react";
import Fila from "./Fila.tsx";

interface TablaProps {
  filas: {
    producto: string;
    cantidad: number;
    precio: number;
    tienda: string;
    notas: string;
    comprado: boolean;
    imagen: string;
  }[];
}

const Tabla: React.FC<TablaProps> = ({ filas }) => {
  return (
      <table className="table table-dark table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Tienda</th>
            <th>Notas</th>
            <th>Comprado</th>
            <th className="w-25">Imagen</th>
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, index) => (
            <Fila key={index} {...fila} />
          ))}
        </tbody>
      </table>
  );
};

export default Tabla;
