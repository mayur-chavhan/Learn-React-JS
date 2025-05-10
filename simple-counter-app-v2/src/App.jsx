import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function increaseSet() {
    if (step < 10) setStep((s) => s + 1);
  }

  function decreaseSet() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }
  const newDate = new Date("June 17 2027");

  newDate.setDate(newDate.getDate() + count);

  return (
    <>
      <div>
        {/* Range of values can be change using slider and being updated by the state function then use for other location */}
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {step}
      </div>
      <div>
        <button onClick={() => setCount((s) => s - step)}>-</button>
        {/* Input box with a value showing and can be edited or updated */}
        <input
          type="text"
          value={count}
          placeholder={0}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((s) => s + step)}>+</button>
        {/* {console.log(newDate.toDateString())} */}
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is`
            : `${count} days ago was `}{" "}
        </span>
        {newDate.toDateString()}
      </p>
      {/* Conditional rendering */}
      {(count !== 0 || step !== 1) && (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
