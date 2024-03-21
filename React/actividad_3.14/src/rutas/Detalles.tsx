import React from 'react';

export interface Perro {
    id: string
    url: string
    breeds: Breed[]
    width: number
    height: number
  }
  
  export interface Breed {
    weight: Weight
    height: Height
    id: number
    name: string
    bred_for: string
    breed_group: string
    life_span: string
    temperament: string
    origin: string
    reference_image_id: string
  }
  
  export interface Weight {
    imperial: string
    metric: string
  }
  
  export interface Height {
    imperial: string
    metric: string
  }

function Detalles() {
    const [imagenPerroURL, setImagenPerroURL] = React.useState<string>('')
    const [raza, setRaza] = React.useState<Breed>()
    const queryParameters = new URLSearchParams(window.location.search)
    const raza_id = queryParameters.get("raza_id")

    React.useEffect(() => {
        fetch("https://api.thedogapi.com/v1/images/" + raza_id, {
          headers: {
            "api-key":  "live_36fHx0K1obmNZ1UkjQ0Jk3oUvlhGnW9j5pIOY50ynEwTb9MS5WkZTdgzZzLyGS3t"
          },
        })
        .then((response) => response.json())
        .then((data: Perro) => {
            setImagenPerroURL(data.url)
            setRaza(data.breeds[0])
        })
    }, [raza_id])
    return (
        <div className='d-flex'>
            <div>
                <img src={imagenPerroURL} alt="perrete ^u^" height="300" className='pe-3'/>

            </div>
            <div>
                <div className='d-flex align-items-baseline'>
                    <h2 className='pe-5'>Raza</h2>
                    <h3>{raza?.name}</h3>
                </div>
                <div className='d-flex align-items-baseline'>
                    <h2 className='pe-5'>Peso(kg)</h2>
                    <h3>{raza?.weight.metric}</h3>
                </div>
                <div className='d-flex align-items-baseline'>
                    <h2 className='pe-5'>Altura(cm)</h2>
                    <h3>{raza?.height.metric}</h3>
                </div>
                <div className='d-flex align-items-baseline'>
                    <h2 className='pe-5'>Esperanza de vida</h2>
                    <h3>{raza?.life_span}</h3>
                </div>
                <div className='d-flex align-items-baseline'>
                    <h2 className='pe-5'>Temperamento</h2>
                    <h3>{raza?.temperament}</h3>
                </div>
            </div>
        </div>
    )
  }
  
  export default Detalles;