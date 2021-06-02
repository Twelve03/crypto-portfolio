import { useState } from "react";

const AddForm = ({ onAdd, increaseTotal }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  // Check max length on inputs
  const maxLengthCheck = (input) => {
    if (input.target.value.length > input.target.maxLength) {
      input.target.value = input.target.value.slice(0, input.target.maxLength);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name | !price | !amount) {
      alert("You forgot to input something!");
    } else {
      onAdd({ name, price, amount });

      increaseTotal(price, amount);

      setName("");
      setPrice("");
      setAmount("");
    }
  };

  return (
    <div className="container form-container">
      <form className="form-style" onSubmit={onSubmit}>
        <label>Coin Name:</label>
        <input
          maxLength="25"
          className="input-style"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Coin Price:</label>
        <input
          className="input-style"
          type="number"
          maxLength="10"
          value={price}
          onInput={maxLengthCheck}
          onChange={(e) => {
            setPrice(parseInt(e.target.value));
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
            setAmount(parseInt(e.target.value));
          }}
        />
        <button type="submit" className="addBtn">
          Add coin!
        </button>
      </form>
    </div>
  );
};

export default AddForm;
