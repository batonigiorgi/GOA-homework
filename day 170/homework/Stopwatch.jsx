import { useEffect, useState } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval); // მნიშვნელოვანია!
  }, [running]);

  return (
    <div className="space-x-2">
      <p>{time} წამი</p>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => setRunning(true)}>Resume</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}

export default Stopwatch;
