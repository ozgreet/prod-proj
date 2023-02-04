import { useState } from "react";
import classes from './Counter.module.scss'

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div >
      <h1>{count}</h1>
      <button className={classes.btn} onClick={() => setCount((prev) => prev + 1)}>Add</button>
    </div>
  );
}
