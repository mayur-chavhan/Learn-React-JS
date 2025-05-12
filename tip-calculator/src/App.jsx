import { useState } from "react";

export default function App() {
  const [billInput, setBillInput] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  function resetAmount() {
    setBillInput(0);
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput
        onBillInput={billInput}
        onSetBillInput={setBillInput}
        percentage1={percentage1}
        setPercentage1={setPercentage1}
        percentage2={percentage2}
        setPercentage2={setPercentage2}
      />
      {billInput > 0 && (
        <OutBill
          onBillInput={billInput}
          percentage1={percentage1}
          percentage2={percentage2}
          resetAmount={resetAmount}
        />
      )}
    </div>
  );
}

function BillInput({
  onBillInput,
  onSetBillInput,
  percentage1,
  setPercentage1,
  percentage2,
  setPercentage2,
}) {
  return (
    <>
      <div>
        <span>
          How much was the bill?
          <input
            type="number"
            value={onBillInput}
            placeholder="Enter the amount"
            onChange={(e) => onSetBillInput(Number(e.target.value))}
          />
        </span>
      </div>
      <BillQuestion
        questionText="How did you like the service?"
        percentage={percentage1}
        setPercentage={setPercentage1}
      />
      <BillQuestion
        questionText="How did your friend like the service?"
        percentage={percentage2}
        setPercentage={setPercentage2}
      />
    </>
  );
}

function BillQuestion({ questionText, percentage, setPercentage }) {
  return (
    <div>
      <br />
      <span>
        {questionText}
        <select
          value={percentage}
          onChange={(e) => setPercentage(Number(e.target.value))}
        >
          <option value={0}>Dissatisfied 0%</option>
          <option value={5}>It was okay 5%</option>
          <option value={10}>It was good 10%</option>
          <option value={20}>Absolutely Amazing 20%</option>
        </select>
      </span>
      <br />
    </div>
  );
}

function OutBill({ onBillInput, percentage1, percentage2, resetAmount }) {
  const tip1 = onBillInput * (percentage1 / 100);
  const tip2 = onBillInput * (percentage2 / 100);
  const total = onBillInput + tip1 + tip2;

  return (
    <div>
      <h4>
        You pay {onBillInput} + {tip1.toFixed(2)} (Your Tip) + {tip2.toFixed(2)}{" "}
        (Friend Tip) = Total: {total.toFixed(2)}
      </h4>
      <button onClick={resetAmount}>RESET</button>
    </div>
  );
}
