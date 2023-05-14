import { UseState } from './UseState.js';
import { ClassState } from './ClassState.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name='UseState' />
      <ClassState name='ClassState' />
    </div>
  );
}

export default App;