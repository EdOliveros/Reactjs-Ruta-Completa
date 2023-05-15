import React from "react";

class Loading extends React.Component {
    
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        return (
            <div>Cargando...</div>
        );
    }
}

export { Loading }