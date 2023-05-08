import './TodoItem.css'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'

function  TodoItem(props) {
  return (
    <li>
      <AiOutlineCheckCircle
        className={`terminado ${props.completed && 'icon-check'}`}
        onClick={props.onCompleted}
      ></AiOutlineCheckCircle>
        
      <p 
        className={`${props.completed && 'p-check'}`}>
        { props.text }
      </p>

      <AiOutlineCloseCircle 
        className='eliminar'
        onClick={props.onDelete}
      >x</AiOutlineCloseCircle>
      
    </li>
  );
}

export { TodoItem }