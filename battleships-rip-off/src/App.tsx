import { useState, useEffect } from 'react';
import { TurnCounter } from './TurnCounter';
import { BattleField } from './Battlefield';
import { ResetBtn } from './ResetBtn';
import { useGameState } from './state/useGameState';
import { Nonsense } from './fs';

import './App.css'









export default function App() {
  const { turn, reset, matrix, fire, win } = useGameState();
  
  if (win) {
    alert("Win");
  }

  const onFire = (x: number, y: number) => console.log(x, y);
  return (
    <div className="App">
      <Nonsense />

      <TurnCounter turn={turn} />
      <BattleField disabled={win} matrix={matrix} onFire={fire} />
      <ResetBtn reset={reset} />
    </div>
  );
}
