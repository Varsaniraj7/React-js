import React, { useReducer } from "react";

const initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc1":
      return state + 1;
    case "inc10":
      return state + 10;
    case "inc100":
      return state + 100;
    case "reset":
      return 0;
    default:
      return state;
  }
};

export default function UseReducerExp() {
  const [count, dispatch] = useReducer(reducer, initialstate);

  return (
    <div className="container">
      <h1 className="heading">useReducer Counter Example</h1>
      <h2 className="count">{count}</h2>
      <button className="button" onClick={() => dispatch("inc1")}>
        +1
      </button>
      <button className="button" onClick={() => dispatch("inc10")}>
        +10
      </button>
      <button className="button" onClick={() => dispatch("inc100")}>
        +100
      </button>
      <button className="button reset" onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
}
