import './TodoItem.css'

function  TodoItem(props) {
  return (
    <li>
      <p className={`${props.completed && 'p-check'}`}>{ props.text }</p>
      <div className='edit-container'>
        <span className={`terminado ${props.completed && 'icon-check'}`}>v</span>
        <span className='eliminar'>x</span>
      </div>
    </li>
  );
}

export { TodoItem }