import React, { StrictMode, useState } from "react";
import "./counter.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onPlus = () => {
    setCount(count + 1);
  };

  const onMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="Counter">
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button onClick={onMinus} className="minus">
          - Minus
        </button>
        <button onClick={onPlus} className="plus">
          Plus +
        </button>
      </div>
    </div>
  );
};
