import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

function App(props) {
    return (
        <h1>{props.saludo}, {props.nombre} !!</h1>
    )
}

function whitSaludo(WrappedComponent) {
   return function WrappedComponentWhitSaludo (saludo) {
    return function ComponenteDeVerdad(props) {
        return (
            <>
                <WrappedComponent  {...props} saludo={saludo}/>
                <h2>Estamos acompañando al wrapped component</h2>
            </>
        )
    }
   }
}

const AppWhitSaludo = whitSaludo(App)('Hola')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppWhitSaludo
        
        nombre='Ed'
    />
);