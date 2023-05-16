import React from "react";

const SECURYTY_CODE = 'paradigma'

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false
    })
    console.log(state)

    React.useEffect(() => {
        console.log('empezando el efecto') 

        if(!!state.loading) {
            setState({
                ...state,
                error: false
            })
            setTimeout(() => {
                console.log('haciendo la validacion')
                
                if(state.value === SECURYTY_CODE) {
                    setState({
                        ...state,
                        loading: false,
                        error: false
                    })
                } else {
                    setState({
                        ...state,
                        loading: false,
                        error: true
                    })
                }
    
                console.log('terminando la validacion')
            }, 3000)
        }

        console.log('terminando el efecto')
    }, [state.loading])

    return (
        <div>
            <h2>Eliminar { name }</h2>
            <p>Por favor escribe el codigo de seguridad.</p>

            { state.error && (
                <p>Error: El codigo es incorrecto !</p>
            ) }

            { state.loading && (
                <p>Cargando...</p>
            ) }

            <input 
                value={state.value}
                placeholder="codigo de seguridad" 
                onChange={(event) => {
                    setState({
                        ...state,
                        value: event.target.value
                    })
                    console.log(state.value)
                }}
            />
            <button
                onClick={() => {
                    setState({
                        ...state,
                        loading: true
                    })
                }}
            >Comprobar</button>
        </div>
    );
}

export { UseState }