import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export type Razas = Raza[]

export interface Raza {
  weight: Weight;
  height: Height;
  id: number;
  name: string;
  bred_for?: string;
  breed_group?: string;
  life_span: string;
  temperament?: string;
  origin?: string;
  reference_image_id: string;
  country_code?: string;
  description?: string;
  history?: string;
}

export interface Weight {
  imperial: string;
  metric: string;
}

export interface Height {
  imperial: string;
  metric: string;
}

function Listado() {
    const [razas, setRazas] = React.useState([] as Razas);

    React.useEffect(() => {
        fetch("https://api.thedogapi.com/v1/breeds", {
          headers: {
            "api-key":  "live_36fHx0K1obmNZ1UkjQ0Jk3oUvlhGnW9j5pIOY50ynEwTb9MS5WkZTdgzZzLyGS3t"
          },
        })
        .then((response) => response.json())
        .then((data: Razas) => {
            setRazas(data)
        });
    }, []);

    function buscarPerros() {
      const perros = document.getElementsByClassName('perrete')
      const busqueda = document.getElementById('campo-buscar-perros') as HTMLInputElement
      if (busqueda.value.toLowerCase() != '') {
        Array.prototype.forEach.call(perros, function(perro) {
          if (perro.id.toLowerCase().includes(busqueda.value.toLowerCase())) {
            perro.hidden = false
          } else {
            perro.hidden = true
          }
        });
      } else {
        Array.prototype.forEach.call(perros, function(perro) {
            perro.hidden = false
        });
      }
    }

    return <>
        <h1>Listado de razas de perros</h1>
        <div className='row d-flex justify-content-center '>
          <div className=''>
            <div className='input-group'>
              <input type="search" id="campo-buscar-perros" className='form-control'/>
              <button type="button" id='btn-buscar-perros' className='btn btn-success' onClick={buscarPerros}>Buscar</button>
            </div>
            <div className='row d-flex justify-content-center'>
              <ul className='list-group px-4'>
                {razas.map((raza, i) => {
                  return (
                    <li key={raza.name} id={raza.name} className='perrete list-unstyled'>
                      <Link className='btn btn-outline-success w-100' to={`/LMGI/React/actividad_3.14/build/detalles?raza_id=${raza.reference_image_id}`}>{raza.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
    </>
  }
  
  export default Listado;