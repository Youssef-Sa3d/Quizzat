import React, { useState, useEffect } from "react";

export default function QTimer({timeout, onTimeout}) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return ()=>{clearTimeout(timer)}
  }, [timeout , onTimeout]);

  useEffect(() => {
    const interval =  setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {clearInterval(interval)}
  }, []);
  return <progress max={timeout} value={remainingTime} />;
}
