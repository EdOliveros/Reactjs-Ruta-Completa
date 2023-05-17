import React from "react";

const SECURYTY_CODE = 'paradigma'

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    })

    const onConfirm = () => {
        setState({
            ...state,
            loading: false,
            error: false,
            confirmed: true,
        })
    }

    const onError = () => {
        setState({
            ...state,
            loading: false,
            error: true
        })
    }

    const onWrite = (newValue) => {
        setState({
            ...state,
            value: newValue
        })
    }

    const onCheck = () => {
        setState({
            ...state,
            loading: true
        })
    }

    const onDelete = () => {
        setState({
            ...state,
            deleted: true
        })
    }

    const onReset = () => {
        setState({
            ...state,
            confirmed: false,
            deleted: false,
            value: '',
        })
    }

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
                    onConfirm()
                } else {
                    onError()
                }
    
                console.log('terminando la validacion')
            }, 3000)
        }

        console.log('terminando el efecto')
    }, [state.loading])

    if(!state.deleted && !state.confirmed){
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
                        onWrite(event.target.value)
                        console.log(state.value)
                    }}
                />
                <button
                    onClick={() => {
                        onCheck()
                    }}
                >Comprobar</button>
            </div>
        );
    } else if (state.confirmed && !state.deleted) {
        return (
            <>
                <h2>Eliminar el useState</h2>
                <p>Seguro que quieres eliminar el useState?</p>
                <button
                    onClick={() => {
                        onDelete()
                    }}
                >Eliminar</button>
                <button
                    onClick={() => {
                        onReset()
                    }}
                >Regresar</button>
            </>
        );
    } else {
        return (
            <>
                <p>Eliminado con Exito</p>
                <button
                    onClick={() => {
                        onReset()
                    }}
                >Resetear, volver a empezar</button>
            </>
        );
    }
}

export { UseState }