import React from "react";

function UseState({ name }) {

    const [ error, setError ] = React.useState(true)
    const [ loading, setLoading ] = React.useState(false)

    React.useEffect(() => {
        console.log('empezando el efecto')

        if(!!loading) {
            setTimeout(() => {
                console.log('haciendo la validacion')
    
                setLoading(false)
    
                console.log('terminando la validacion')
            }, 3000)
        }

        console.log('terminando el efecto')
    }, [loading])

    return (
        <div>
            <h2>Eliminar { name }</h2>
            <p>Por favor escribe el codigo de seguridad.</p>

            { error && (
                <p>Error: El codigo es incorrecto !</p>
            ) }

            { loading && (
                <p>Cargando...</p>
            ) }

            <input placeholder="codigo de seguridad" />
            <button
                onClick={() => setLoading(true)}
            >Comprobar</button>
        </div>
    );
}

export { UseState }