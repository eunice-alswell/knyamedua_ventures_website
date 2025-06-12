import { useState, useEffect } from "react";


interface CountUpProps {
  target?: number;
    duration?: number;
    className?: string;
}

export default function CountUp({ target = 1000, duration = 2000, className = "", ...props }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    // Calculate the time interval for each increment
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span className={className} {...props}>
      {count}
    </span>
  );
}


