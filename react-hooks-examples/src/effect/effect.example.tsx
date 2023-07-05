import { FC, useEffect, useState } from "react";

type CounterProps = { counter: number; onCount: () => void };
const Counter: FC<CounterProps> = ({ counter, onCount }) => {
  useEffect(() => {
    console.log("Counter did change", counter);
    // alert("Each f*ing time")///<alert gay=""> doesn't work either 
  });

  useEffect(() => {
    console.log("Counter did mount or onCount changed");
  }, [onCount]);

  useEffect(() => {
    return () => {
      console.log("Counter will be removed");
      const ExpensiveAf = () => {
        for (let i = 0; i < 1000_000_000; i++);
      }
    };
  }, []);

  return <button onClick={onCount}>Clicked {counter} times</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [counterExists, toggleCounter] = useState(true);
  const hideCounter = () => toggleCounter(false);
  const resetCounter = () => setCounter(0);
  const increment = () => setCounter(counter + 1);
  return (
    <>
      {counterExists && (
        <Counter key={1} counter={counter} onCount={increment} />
      )}
      <div>
        <button onClick={resetCounter}>Reset counter</button>
        <button onClick={hideCounter}> Remove Counter</button>
      </div>
    </>
  );
};

export default App;
