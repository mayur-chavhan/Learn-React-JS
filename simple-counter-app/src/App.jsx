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
  const [count, setCount] = useState(1);

  function increaseSet() {
    if (step < 5) setStep((s) => s + 1);
  }

  function decreaseSet() {
    if (step > 1) setStep((s) => s - 1);
  }

  const newDate = new Date("June 17 2027");

  newDate.setDate(newDate.getDate() + count);

  return (
    <>
      <div>
        <button onClick={decreaseSet}>-</button>Step : {step}
        <button onClick={increaseSet}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((s) => s - step)}>-</button>Count :
        {count}
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
        </span>{" "}
        {newDate.toDateString()}
      </p>
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
