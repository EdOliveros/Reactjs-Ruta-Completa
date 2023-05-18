import React from "react";

const SECURYTY_CODE = 'paradigma'

function UseReducer({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    const onConfirm = () => dispatch({ type: actionTypes.CONFIRM })
    const onError = () =>  dispatch({ type: actionTypes.ERROR })
    const onCheck = () => dispatch({ type: actionTypes.CHECK })
    const onDelete = () => dispatch({ type: actionTypes.DELETE })
    const onReset = () => dispatch({ type: actionTypes.RESET })

    const onWrite = ({ target: { value } }) => {
        dispatch({ type: actionTypes.WRITE, payload: value })
    }

    React.useEffect(() => {
        console.log('empezando el efecto') 

        if(!!state.loading) {
            setTimeout(() => {
                console.log('haciendo la validacion')
                
                if(state.value === SECURYTY_CODE) {
                    // dispatch({
                    //     type: actionTypes.CONFIRM
                    // })
                    onConfirm()
                } else {
                    // dispatch({
                    //     type: actionTypes.ERROR
                    // })
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
                    // Esta funcion de abajo ya recibe el evento
                    onChange={onWrite}
                />
                <button
                    onClick={onCheck}
                >Comprobar</button>
            </div>
        );
    } else if (state.confirmed && !state.deleted) {
        return (
            <>
                <h2>Eliminar el useState</h2>
                <p>Seguro que quieres eliminar el useState?</p>
                <button
                    onClick={onDelete}
                >Eliminar</button>
                <button
                    onClick={onReset}
                >Regresar</button>
            </>
        );
    } else {
        return (
            <>
                <p>Eliminado con Exito</p>
                <button
                    onClick={onReset}
                >Resetear, volver a empezar</button>
            </>
        );
    }
}

const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
}

const actionTypes = {
    CONFIRM: 'CONFIRM',
    ERROR: 'ERROR',
    WRITE: 'WRITE',
    CHECK: 'CHECK',
    DELETE: 'DELETE',
    RESET: 'RESET',
};

const reducerObject = (state, payload) => ({
    [actionTypes.CONFIRM] : {
        ...state,
        loading: false,
        error: false,
        confirmed: true,
    },
    [actionTypes.ERROR]: {
        ...state,
        loading: false,
        error: true
    },
    [actionTypes.WRITE]: {
        ...state,
        value: payload
    },
    [actionTypes.CHECK]: {
        ...state,
        loading: true,
        error: false,
    },
    [actionTypes.DELETE]: {
        ...state,
        deleted: true
    },
    [actionTypes.RESET]: {
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