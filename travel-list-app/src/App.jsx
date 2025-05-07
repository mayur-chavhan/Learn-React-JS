import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1 className="logo">🏝️ far away 🧳</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(1);

  const newItems = { description, count, Packed: false, id: Date.now() };

  console.log(newItems);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    setDescription("");
    setCount(1);
  }

  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What are you packing ? </h3>
        <select
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value));
          }}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={newItems.id}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="items.."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <Items items="toothburhs" />
      <Items items="Hairbrush" />
    </div>
  );
}

function Items({ items }) {
  return (
    <li>
      <span>
        {items.count} {items.description}
      </span>
    </li>
  );
}

function Stats() {
  return <div className="stats">This is footer</div>;
}

export default App;
