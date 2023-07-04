import { useState } from "react";

const useCounter = () => {
  const [value, setCounter] = useState(0);
  const increment = () => setCounter(value + 1);
  return {
    value,
    increment,
  };
};

const App = () => {
  const [value, increment] = useState(0);
  // const { value, increment } = useCounter();
  return (
    <button onClick={() => increment(value + 1)}>Counted {value} times </button>
  );
};

export default App;
