import { useState } from "react";
import { BsXCircleFill } from "react-icons/bs";

const AddForm = ({ toggleForm, increaseTotal, setShowAddTx, coin }) => {
  // Set the cost of each coin and the amount bought of said coin.
  const [cost, setCost] = useState(coin.current_price);
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

      toggleForm();

      increaseTotal(coin.current_price, amount);

      // Input values back to default
      setCost(coin.current_price);
      setAmount("");

      /*
      Hide "Add coins" button after adding coins.
      User will be allowed to edit values later by clicking the 
      coin div.
      */
      setShowAddTx(false);
    }
  };

  return (
    <>
      <div className="form-mask" onClick={toggleForm}></div>
      <form onSubmit={displayWorth} className="form-container container">
        <BsXCircleFill className="exit-form-btn" onClick={toggleForm} />
        <p style={{ fontWeight: "bold" }}>{coin.name}</p>
        <label>Cost per coin:</label>
        <input
          className="input-style"
          type="number"
          maxLength="10"
          value={cost}
          onInput={maxLengthCheck}
          onChange={(e) => {
            setCost(parseFloat(e.target.value));
          }}
        />
        <label>Amount bought:</label>
        <input
          className="input-style"
          type="number"
          maxLength="10"
          value={amount}
          onInput={maxLengthCheck}
          onChange={(e) => {
            setAmount(parseFloat(e.target.value));
          }}
        />
        <input type="submit" value="Add coin(s)" className="submit-btn" />
      </form>
    </>
  );
};

export default AddForm;
