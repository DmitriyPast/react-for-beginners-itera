import { memo, useEffect, useState } from "react";

const TXT = "Tpeба потопити корабель"
export const Nonsense = memo(() => {
  const [state, setText] = useState({
    n: 1,
    text: TXT,
  });
  console.log('T.U.R.D.');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const dots = new Array(state.n).fill('!').join('');
      const n = state.n > 2 ? 1 : state.n + 1;
      setText({ n, text: `${TXT}${dots}` });
    }, 1000);
    return () => clearTimeout(timeoutId)
  }, [state]);

  return state.text;
});