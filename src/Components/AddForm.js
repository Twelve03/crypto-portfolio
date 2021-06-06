import { useState } from "react";
import React from "react";

const AddForm = ({
  price,
  setShowWorth,
  toggleForm,
  getAmountWorth,
  increaseTotal,
  hideAddBtn,
}) => {
  // Set the cost of each coin and the amount bought of said coin.
  const [cost, setCost] = useState(price);
  const [amount, setAmount] = useState("");

  // Check max length on inputs
  const maxLengthCheck = (input) => {
    if (input.target.value.length > input.target.maxLength) {
      input.target.value = input.target.value.slice(0, input.target.maxLength);
    }
  };

  const displayWorth = (e) => {
    e.preventDefault();

    if (!cost | !amount) {
      alert("You forgot to input something!");
    } else {
      setShowWorth(true);
      toggleForm();

      getAmountWorth({ cost, amount });

      increaseTotal(price, amount);

      setCost(price);
      setAmount("");
      /* 
      We hide the add button after submitting the form for now. An edit option
      will be implemented later to change cost and amount of coins if needed.
      */
      hideAddBtn();
    }
  };

  return (
    <form onSubmit={displayWorth}>
      <label>Price per coin:</label>
      <input
        type="number"
        maxLength="10"
        value={cost}
        onInput={maxLengthCheck}
        onChange={(e) => {
          setCost(parseInt(e.target.value));
        }}
      />
      <label>Amount bought:</label>
      <input
        type="number"
        maxLength="10"
        value={amount}
        onInput={maxLengthCheck}
        onChange={(e) => {
          setAmount(parseInt(e.target.value));
        }}
      />
      <input type="submit" vale="Save" />
    </form>
  );
};

export default AddForm;
