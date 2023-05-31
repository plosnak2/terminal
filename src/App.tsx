import React from 'react';
import './App.css'
import { Terminal } from './components/Terminal';

function App() {
  return (
    <div>
      <div className='terminal'>
        <div className='panel'>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
        </div>
        <div className='terminal-body'>
          <Terminal />
        </div>
      </div>      
    </div>
  );
}

export default App;
