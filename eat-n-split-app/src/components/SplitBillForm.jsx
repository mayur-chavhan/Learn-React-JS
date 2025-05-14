import { useState } from "react";
import { Button } from "./Button";

export function SplitBillForm({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const friendExpense = bill ? bill - userExpense : "";
  const [whoPaying, setWhoPaying] = useState("user");

  function handleSubmit(b) {
    b.preventDefault();

    if (!bill || !userExpense) return;
    onSplitBill(whoPaying === "user" ? friendExpense : -userExpense);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split Bill with {selectedFriend.name}</h2>

      <label>💰 Bill Amount</label>
      <input
        type="text"
        value={bill}
        onChange={(b) => setBill(Number(b.target.value))}
      />

      <label>💵 Your expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            Number(e.target.value) > bill
              ? friendExpense
              : Number(e.target.value)
          )
        }
      />

      <label>☺️ {selectedFriend.name} Amount</label>
      <input type="text" disabled value={friendExpense} />

      <label>🤑 Who's Paying ?</label>
      <select value={whoPaying} onChange={(e) => setWhoPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
