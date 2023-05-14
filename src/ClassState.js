import React from "react";

class ClassState extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            error: false
        }
    }

    render() {

        // this.props.name

        return (
            <div>
                <h2>Eliminar { this.props.name }</h2>
                <p>Por favor escribe el codigo de seguridad.</p>

                {this.state.error && (
                    <p>Error: El codigo es incorrecto!</p>
                )}

                <input placeholder="codigo de seguridad" />
                <button
                    // onClick={() => this.setState({ error: !this.state.error })}

                    onClick={() => this.setState(prevState => ( {error: !prevState.error} ))}
                >Comprobar</button>
            </div>
        );
    }
}

export { ClassState }