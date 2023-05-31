import './App.css'
import { Terminal } from './components/Terminal';
import { useRef } from 'react'

function App() {
  // ref for focusing input
  const refInput = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (refInput.current !== null) {
      refInput.current.focus();
    }
  }

  return (
    <div>
      <div className='terminal' onClick={handleClick}>
        <div className='panel'>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
        </div>
        <div className='terminal-body'>
          <Terminal refInput={refInput}/>
        </div>
      </div>      
    </div>
  );
}

export default App;
