import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import AddTxBtn from "./AddTxBtn";
import AddForm from "./AddForm";

const Coin = ({ coin, increaseTotal, decreaseTotal, onDelete, updateCoin }) => {
  const [showForm, setShowForm] = useState(false);

  // Accounting
  let totalValue = coin.current_price * coin.amount;
  let totalCost = coin.cost * coin.amount;
  let profitOrLoss = totalValue - totalCost;
  let ROI = (100 * profitOrLoss) / totalCost;

  const toggleForm = () => {
    setShowForm(!showForm);
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

        {(coin.cost !== undefined) | (coin.amount !== undefined) ? (
          <div>
            <p>
              {new Intl.NumberFormat("us-US", {
                style: "currency",
                currency: "USD",
              }).format(totalValue)}
            </p>
            <p>{coin.amount}</p>
          </div>
        ) : (
          ""
        )}

        {(coin.cost !== undefined) | (coin.amount !== undefined) ? (
          <div className={totalCost > totalValue ? "loss" : "profit"}>
            <p>
              {new Intl.NumberFormat("us-US", {
                style: "currency",
                currency: "USD",
              }).format(profitOrLoss)}
            </p>
            <p>{new Intl.NumberFormat().format(ROI)}%</p>
          </div>
        ) : (
          ""
        )}

        {(coin.cost === undefined) & (coin.amount === undefined) ? (
          <AddTxBtn setShowForm={setShowForm} showForm={showForm} />
        ) : (
          ""
        )}

        <BsFillTrashFill
          className="trash-btn"
          onClick={() => {
            onDelete(coin.id);
            decreaseTotal(coin.current_price, coin.amount);
          }}
        />
      </div>
      {showForm && (
        <AddForm
          updateCoin={updateCoin}
          coin={coin}
          increaseTotal={increaseTotal}
          toggleForm={toggleForm}
        />
      )}
    </div>
  );
};

export default Coin;
