
import { useState } from 'react';
import './App.css';
import { TelaInicial } from './components/TelaInicial';
import { TelaPos } from './components/TelaPos';

function App() {
  const stage = [
    {id: 1, name: 'nao'},
    {id: 2, name: 'sim'}
  ]
  
  const [gameStage, setGameStage] = useState(stage[0].name);
  
  const handleSim = () => {
    setGameStage(stage[1].name)
  }
  return (
    <div className="App">
      {gameStage === 'nao' && <TelaInicial handleSim={handleSim}/>}
      {gameStage === 'sim' && <TelaPos/>}
    </div>
  );
}

export default App;
