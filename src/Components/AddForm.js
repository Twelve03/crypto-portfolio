const AddForm = () => {
  return (
    <div className="container form-container">
      <form className="form-style">
        <label>Coin Name:</label>
        <input type="text" />
        <label>Coin Price:</label>
        <input type="number" />
        <label>Amount bought:</label>
        <input type="number" />
        <button type="submit">Add Coin</button>
      </form>
    </div>
  );
};

export default AddForm;
