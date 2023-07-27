import { useState, useEffect, useMemo } from 'react';
import { TurnCounter } from './TurnCounter';
import { BattleField, Cell } from './Battlefield';
import { ResetBtn } from './ResetBtn';
import { useGameState } from './state/useGameState';
import { Nonsense } from './fs';

import './App.css'

export default function App() {
  const { turn, reset, matrix, fire, win } = useGameState();
  const FireMemo = useMemo(()=>fire, [win])
  useEffect(() => {
    if (win) {
      setTimeout(() => alert("Russian Warship\nGo fuck yourself!!"), 0);
    }
  }, [win]);

  const onFire = (x: number, y: number) => console.log(x, y);

  return (
    <div className="App">
      {turn === 0 && <Nonsense />}

      <TurnCounter turn={turn} />
      <BattleField disabled={win} matrix={matrix} onFire={FireMemo} />
      <ResetBtn reset={reset} />
    </div>
  );
}
