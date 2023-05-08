import './TodoHero.css'
import hero from "./hero.png" 

function TodoHero() {
    return (
        <div className="container-hero">
            <div className='fondo-hero'></div>
            <div className="hero">
                <img src={hero}
                alt='hero'/>
                <div className='hero-text'>
                    <h2>ToDo App!</h2>
                    <p>La mejor aplicacion para gestionar tus pendientes!</p>
                </div>
            </div>
        </div>
    );
}

export { TodoHero }