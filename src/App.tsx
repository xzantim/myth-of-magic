import React from 'react';
import './App.css';
import GameWindow from './Game/GameWindow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Myth of Magic</p>
      </header>
      <div className='App-body'>
        <GameWindow/>
      </div>
    </div>
  );
}

export default App;
