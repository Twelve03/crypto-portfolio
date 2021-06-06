import { useState } from "react";
import React from "react";

const AddForm = ({ price, setShowWorth, toggleForm, getAmountWorth }) => {
  // Set the cost of each coin and the amount bought of said coin.
  const [cost, setCost] = useState(price);
  const [amount, setAmount] = useState("");

  const displayWorth = (e) => {
    e.preventDefault();
    setShowWorth(true);
    toggleForm();

    getAmountWorth({ cost, amount });

    setCost(price);
    setAmount("");
  };

  return (
    <form onSubmit={displayWorth}>
      <label>Price per coin:</label>
      <input
        type="number"
        value={cost}
        onChange={(e) => {
          setCost(parseInt(e.target.value));
        }}
      />
      <label>Amount bought:</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(parseInt(e.target.value));
        }}
      />
      <input type="submit" vale="Save" />
    </form>
  );
};

export default AddForm;
