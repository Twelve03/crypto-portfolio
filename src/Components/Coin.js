import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import AddTxBtn from "./AddTxBtn";
import AddForm from "./AddForm";

const Coin = ({ coin, increaseTotal, decreaseTotal, onDelete }) => {
  const [showAddTx, setShowAddTx] = useState(true);
  const [showForm, setShowForm] = useState(false);

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
        {showAddTx && (
          <AddTxBtn setShowForm={setShowForm} showForm={showForm} />
        )}
        <BsFillTrashFill
          className="trash-btn"
          onClick={() => {
            onDelete(coin.id);
            decreaseTotal(coin.current_price);
          }}
        />
      </div>
      {showForm && (
        <AddForm
          coin={coin}
          increaseTotal={increaseTotal}
          toggleForm={toggleForm}
          setShowAddTx={setShowAddTx}
        />
      )}
    </div>
  );
};

export default Coin;
