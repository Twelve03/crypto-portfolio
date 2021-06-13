import { useState } from "react";
import { BsXCircleFill } from "react-icons/bs";

const AddForm = ({
  price,
  coinName,
  setShowWorth,
  toggleForm,
  getAmountWorth,
  increaseTotal,
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

      // Input values back to default
      setCost(price);
      setAmount("");
    }
  };

  return (
    <div className="form-mask">
      <form onSubmit={displayWorth} className="form-container container">
        <BsXCircleFill className="exit-form-btn" onClick={toggleForm} />
        <p style={{ fontWeight: "bold" }}>{coinName}</p>
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
    </div>
  );
};

export default AddForm;
