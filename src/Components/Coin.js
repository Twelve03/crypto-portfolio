import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import AddTxBtn from "./AddTxBtn";
import AddForm from "./AddForm";

const Coin = ({ coin, increaseTotal, decreaseTotal, onDelete }) => {
  const [coinCost, setCoinCost] = useState("");
  const [amountBought, setAmountBought] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showWorth, setShowWorth] = useState(false);

  const totalCost = coinCost * amountBought;
  let totalValue = coin.current_price * amountBought;
  let profitOrLoss = totalValue - totalCost;

  const toggleForm = () => {
    setShowForm(!showForm);
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
          style={{ height: "30px", width: "30px" }}
        />
        <p>{coin.symbol.toUpperCase()}</p>
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
              }).format(totalValue)}
            </p>
            {/* This is the cost of our coins */}
            <p>
              {new Intl.NumberFormat("us-US", {
                style: "currency",
                currency: "USD",
              }).format(totalCost)}
            </p>
            <p>{new Intl.NumberFormat().format(amountBought)}</p>
          </div>
        )}
        {showWorth && (
          // Shows our profit or loss.
          <div>
            <p className={profitOrLoss >= 0 ? "profit" : "loss"}>
              {new Intl.NumberFormat("us-US", {
                style: "currency",
                currency: "USD",
              }).format(profitOrLoss)}
            </p>
            <p className={profitOrLoss >= 0 ? "profit" : "loss"}>
              {new Intl.NumberFormat().format((100 * profitOrLoss) / totalCost)}
              %
            </p>
          </div>
        )}
        <AddTxBtn setShowForm={setShowForm} showForm={showForm} />
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
          price={coin.current_price}
          increaseTotal={increaseTotal}
          getAmountWorth={getAmountWorth}
          coinName={coin.name}
          setShowWorth={setShowWorth}
          toggleForm={toggleForm}
        />
      )}
    </div>
  );
};

export default Coin;
