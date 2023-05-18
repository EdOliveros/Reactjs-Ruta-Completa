import React from "react";

const SECURYTY_CODE = 'paradigma'
const initialState = {
    value: 'paradigma',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
}

function UseReducer({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    React.useEffect(() => {
        console.log('empezando el efecto') 

        if(!!state.loading) {
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
                            type: 'WRITE',
                            payload: event.target.value
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

const reducerObject = (state, payload) => ({
    'CONFIRM': {
        ...state,
        loading: false,
        error: false,
        confirmed: true,
    },
    'ERROR': {
        ...state,
        loading: false,
        error: true
    },
    'WRITE': {
        ...state,
        value: payload
    },
    'CHECK': {
        ...state,
        loading: true,
        error: false,
    },
    'DELETE': {
        ...state,
        deleted: true
    },
    'RESET': {
        ...state,
        confirmed: false,
        deleted: false,
        value: '',
    },
})

const reducer = (state, action) => {
    if(reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type];
    } else {
        return state
    }
}

export { UseReducer }