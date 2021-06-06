import { useState } from "react";
import { BsFillTrashFill, BsFillPlusCircleFill } from "react-icons/bs";
import AddForm from "./AddForm";

const Coin = ({ coin, onDelete }) => {
  const [coinCost, setCoinCost] = useState("");
  const [amountBought, setAmountBought] = useState("");
  const [showForm, setShowForm] = useState(false);
  // Shows our cost * amount <div>
  const [showWorth, setShowWorth] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const getAmountWorth = (e) => {
    setCoinCost(e.cost);
    setAmountBought(e.amount);
  };

  return (
    <div>
      <div className="coin">
        <img src={coin.img} alt="" />
        <p>{coin.code}</p>
        <p>
          {new Intl.NumberFormat("us-US", {
            style: "currency",
            currency: "USD",
          }).format(coin.price)}
        </p>
        {showWorth && (
          // This div shows us what our amount of coins is worth in $.
          <div>
            <p>
              {new Intl.NumberFormat("us-US", {
                style: "currency",
                currency: "USD",
              }).format(coinCost * amountBought)}
            </p>
            <p>{new Intl.NumberFormat().format(amountBought)}</p>
          </div>
        )}
        <BsFillPlusCircleFill className="add-btn" onClick={toggleForm} />
        <BsFillTrashFill
          className="trash-btn"
          onClick={() => {
            onDelete(coin.id);
          }}
        />
      </div>
      {showForm && (
        <AddForm
          getAmountWorth={getAmountWorth}
          price={coin.price}
          setShowWorth={setShowWorth}
          toggleForm={toggleForm}
        />
      )}
    </div>
  );
};

export default Coin;
