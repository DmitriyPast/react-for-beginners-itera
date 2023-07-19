export const ResetBtn = ({ reset }: { reset: () => void }) => {
    return <button type='button' className='btn' onClick={reset}>Reset</button>
  };