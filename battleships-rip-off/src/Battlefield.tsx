// import { HIT_SHIP, HIT_WATER, SHIP, WATER } from './state/cellstate';
import { cellState } from './state/cellstate';
import { useGameState } from './state/useGameState';

type CellProps = {
  value: number;
  handleClick: (x: number, y: number) => void;
  x: number;
  y: number;
};

const cellStateMap: any = {
  [cellState.WATER]: ' ',
  [cellState.SHIP]: ' ',
  [cellState.HIT_WATER]: '🌊',
  [cellState.HIT_SHIP]: '🔥'
};

const Cell = ({ handleClick, value, x, y }: CellProps) => {
  return (
    <button className="cell" onClick={() => handleClick(x, y)}>
      {cellStateMap[value]}
    </button>
  );
};

type BfProps = {
  matrix: number[][];
  onFire: (x: number, y: number) => void;
  disabled: boolean;
};

export const BattleField = ({ matrix, onFire, disabled }: BfProps) => {
  const fire = disabled ? () => { } : onFire;
  return (
    <div className={`${disabled ? 'disabled' : ''}`}>
      {matrix.map((line, row) => (
        <div className={'line'} key={row}>
          {line.map((val, i) =>
            <Cell
              key={`${row}${i}`}
              value={val}
              x={i}
              y={row}
              handleClick={fire}
            />
          )}
        </div>
      ))}
    </div>
  );
};