import { useCallback, useEffect, useState } from "react";

// const useCounter = () => {
//   const [value, setCounter] = useState(0);
//   const increment = () => setCounter(value + 1);
//   return {
//     value,
//     increment,
//   };
// };

const useCounter = () => {
  const [value, setState] = useState(0);
  const increment = useCallback(() => {setState(value + 1)}, []);
  return { value, increment };
}

const App = () => {
  // const [value, increment] = useState(0);
  // const { value, increment } = useCounter();
  const { increment, value } = useCounter();
  return (
    <button onClick={increment}>Counted {value} times </button>
  );
};

export default App;
