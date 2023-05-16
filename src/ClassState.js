import React from "react";
import { Loading } from "./Loading";

const SECURYTY_CODE = 'paradigma'

class ClassState extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            value: '',
            error: false,
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
    
                if( this.state.value === SECURYTY_CODE) {
                    this.setState({ loading: false, error: false})
                } else {
                    this.setState({ loading: false, error: true})
                }
    
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

                {(this.state.error && !this.state.loading ) && (
                    <p>Error: El codigo es incorrecto!</p>
                )}

                {this.state.loading && (
                    <Loading />
                )}

                <input 
                    placeholder="codigo de seguridad" 
                    value={this.state.value}
                    onChange={(event) => {
                        this.setState({ value: event.target.value })
                    }}
                />
                <button
                    // onClick={() => this.setState({ error: !this.state.error })}

                    onClick={() => this.setState(() => ( {loading: true} ))}
                >Comprobar</button>
            </div>
        );
    }
}

export { ClassState }