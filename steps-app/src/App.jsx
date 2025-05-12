import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Step />
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((s) => !s)}>
        &times;
      </button>
      {isOpen && (
        <div>
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <div className="message">
              Step {step}: {messages[step - 1]}
            </div>
            <div className="buttons">
              <Button
                bgColor="#7950F2"
                textColor="#ffff"
                ClName="previous"
                clickFunction={handlePrevious}
              >
                <span>👈</span> Previous
              </Button>
              <Button
                bgColor="#7950F2"
                textColor="#ffff"
                ClName="next"
                clickFunction={handleNext}
              >
                Next <span>👉</span>
              </Button>
              {/* <button
                className="previous"
                style={{ backgroundColor: "#7950F2", color: "#ffff" }}
                onClick={handlePrevious}
              >
                Previous
              </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ ClName, bgColor, textColor, clickFunction, children }) {
  return (
    <button
      className={ClName}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onClick={clickFunction}
    >
      {children}
    </button>
  );
}
