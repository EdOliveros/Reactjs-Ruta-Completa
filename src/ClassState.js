import React from "react";
import { Loading } from "./Loading";

class ClassState extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            error: true,
            loading: false,
        }
    }

    // UNSAFE_componentWillMount() {
    //     console.log('componentWillMount')
    // }

    // componentDidMount() {
    //     console.log('componentDidMount')
    // }

    componentDidUpdate() {
        console.log('actualizacion')

        if(!!this.state.loading) {
            setTimeout(() => {
                console.log('haciendo la validacion')
    
                this.setState({ loading: false})
    
                console.log('terminando la validacion')
            }, 3000)
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

                {this.state.loading && (
                    <Loading />
                )}

                <input placeholder="codigo de seguridad" />
                <button
                    // onClick={() => this.setState({ error: !this.state.error })}

                    onClick={() => this.setState(() => ( {loading: true} ))}
                >Comprobar</button>
            </div>
        );
    }
}

export { ClassState }