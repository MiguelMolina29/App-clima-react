import React, {useState} from 'react';
import Error from './Error';

const Formulario = ({busqueda ,setBusqueda, setConsultar}) => {

    

    // State para el error de la validacion 
    const [error, setError] = useState(false)

    // Extraccion de state
    const {ciudad, pais} = busqueda;

    // Funcion que coloca los elementos en el state
    const handleChange = e => {
        // Actualizar state
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value // Recordar que casi siempre se usa este codigo
        })
    }

    // Validacion del formulario => submit al form
    const handleSubmit = e => {
        e.preventDefault(); // Recordar que evita la recarga automatica

        // validar 
        if(ciudad.trim() === '' || pais.trim() === '') {
            setError(true)
            return;
        }

        setError(false);

        setConsultar(true);


        // pasar al componente principal
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            
            {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
           
            <div className="input-field col s12">
                <input 
                    type="text" 
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad" >Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select 
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                <option value="">-- Seleccione un país --</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">México</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País: </label>
            </div>

            <div className="input-field col s12">
                <input 
                    type="submit" 
                    value="Buscar clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>

        </form>
    )
}

export default Formulario
