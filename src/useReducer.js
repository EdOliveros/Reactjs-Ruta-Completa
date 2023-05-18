import React from "react";

const SECURYTY_CODE = 'paradigma'
const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
}

function UseReducer({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState)

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
                    dispatch({
                        type: 'CONFIRM'
                    })
                    // onConfirm()
                } else {
                    dispatch({
                        type: 'ERROR'
                    })
                    // onError()
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
                        dispatch({
                            type: 'WRITE'
                        })
                        // onWrite(event.target.value)
                        console.log(state.value)
                    }}
                />
                <button
                    onClick={() => {
                        dispatch({
                            type: 'CHECK'
                        })
                        // onCheck()
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
                        dispatch({
                            type: 'DELETE'
                        })
                        // onDelete()
                    }}
                >Eliminar</button>
                <button
                    onClick={() => {
                        dispatch({
                            type: 'RESET'
                        })
                        // onReset()
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
                        dispatch({
                            type: 'RESET'
                        })
                        // onReset()
                    }}
                >Resetear, volver a empezar</button>
            </>
        );
    }
}

const reducerObject = (state) => ({
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
    'CONFIRM': {

    },
    'RESET': {

    },
    'CHECK': {
        ...state,
        loading: false,
    },
    'DEFAULT': {
        ...state,
    }
})

const reducer = (state, action) => {
    if(reducerObject(state)[action.type]) {
        return reducerObject(state)[action.type];
    } else {
        return state
    }
}

export { UseReducer }