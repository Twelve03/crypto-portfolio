import { useState } from "react";
import { BsFillTrashFill, BsFillPlusCircleFill } from "react-icons/bs";
import AddForm from "./AddForm";

const Coin = ({ coin, onDelete, increaseTotal, decreaseTotal }) => {
  const [coinCost, setCoinCost] = useState("");
  const [amountBought, setAmountBought] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showAddBtn, setShowAddBtn] = useState(true);
  const [showWorth, setShowWorth] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const hideAddBtn = () => {
    setShowAddBtn(false);
  };

  const getAmountWorth = (e) => {
    setCoinCost(e.cost);
    setAmountBought(e.amount);
  };

  return (
    <div className="coin-container">
      <div className="coin">
        <img
          src={coin.image}
          alt=""
          style={{ height: "20px", width: "20px" }}
        />
        <p>{coin.symbol}</p>
        <p>
          {new Intl.NumberFormat("us-US", {
            style: "currency",
            currency: "USD",
          }).format(coin.current_price)}
        </p>
        {showWorth && (
          // This div shows us what our amount of coins is worth in $.
          <div>
            {/* This the current value of our coins */}
            <p>
              {new Intl.NumberFormat("us-US", {
                style: "currency",
                currency: "USD",
              }).format(coin.current_price * amountBought)}
            </p>
            {/* This is the cost of our coins */}
            <p>
              {new Intl.NumberFormat("us-US", {
                style: "currency",
                currency: "USD",
              }).format(coinCost * amountBought)}
            </p>
            <p>{new Intl.NumberFormat().format(amountBought)}</p>
          </div>
        )}
        {showAddBtn && (
          <BsFillPlusCircleFill className="add-btn" onClick={toggleForm} />
        )}
        <BsFillTrashFill
          className="trash-btn"
          onClick={() => {
            onDelete(coin.id);
            decreaseTotal(coin.current_price, amountBought);
          }}
        />
      </div>
      {showForm && (
        <AddForm
          hideAddBtn={hideAddBtn}
          increaseTotal={increaseTotal}
          getAmountWorth={getAmountWorth}
          price={coin.current_price}
          setShowWorth={setShowWorth}
          toggleForm={toggleForm}
        />
      )}
    </div>
  );
};

export default Coin;
