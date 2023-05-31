import './App.css'
import { Terminal } from './components/Terminal';
import { useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  // ref for focusing input
  const refInput = useRef<HTMLInputElement>(null);
  const [closed, setClosed] = useState<boolean>(false)
  const [minimalized, setMinimalized] = useState<boolean>(false)

  function handleClick() {
    if (refInput.current !== null) {
      refInput.current.focus();
    }
  }

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className={`terminal + ${closed ? 'hidden-terminal' : ''}`} onClick={handleClick}>
        <div className='panel'>
          <div className='circle' onClick={() => {setClosed(true)}}></div>
          <div className='circle' onClick={() => {setMinimalized(!minimalized)}}></div>
          <div className='circle' onClick={() => {toast.success('Welcome to my terminal app!')}}></div>
        </div>
        <div className={`terminal-body + ${minimalized ? 'hidden-terminal' : ''}`}>
          <Terminal refInput={refInput}/>
        </div>
      </div>      
    </div>
  );
}

export default App;
