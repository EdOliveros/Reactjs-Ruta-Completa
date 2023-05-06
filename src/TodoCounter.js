import './TodoCounter.css';
import img from './logo.png'


function TodoCounter( { total, completed } ) {

  return (
    <>
      <div className='container'>
        <div className='fondo'>
        </div>
        <div className='title-container'>
          <h1>Hello, Ed!</h1>    
          <p>
            { completed } de { total } ToDos Completados!
          </p>
        </div>
        <div className='img-container'>
        </div>
      </div>
    </>
  )
}

export { TodoCounter }