import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    updateCount();
  }, []);

  const updateCount = () => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
    if (seconds === 0) {
      clearInterval(interval);
      return;
    }
  };

  return (
    <div>
      CountDown
      <h1>{seconds}</h1>
    </div>
  );
};

export default CountDown;
