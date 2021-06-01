import { useState } from "react";

const AddForm = ({ onAdd, increaseTotal }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ name, price, amount });

    increaseTotal(price, amount);

    setName("");
    setPrice("");
    setAmount("");
  };

  return (
    <div className="container form-container">
      <form className="form-style" onSubmit={onSubmit}>
        <label>Coin Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Coin Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(parseInt(e.target.value));
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
        <button type="submit">Add Coin</button>
      </form>
    </div>
  );
};

export default AddForm;
