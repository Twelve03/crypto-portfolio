import { BsFillTrashFill } from "react-icons/bs";

const Coin = ({ coin, onDelete, decreaseTotal }) => {
  return (
    <div className="coin" value={coin.price}>
      <p>{coin.name}</p>
      <p>
        {new Intl.NumberFormat("us-US", {
          style: "currency",
          currency: "USD",
        }).format(coin.price)}
      </p>
      <div className="value-div">
        {/* coin.price x coin.amount gives us what said amount of coins are worth in $ */}
        <p>
          {new Intl.NumberFormat("us-US", {
            style: "currency",
            currency: "USD",
          }).format(coin.price * coin.amount)}
        </p>
        <p>{coin.amount}</p>
      </div>
      <BsFillTrashFill
        className="trash-btn"
        onClick={() => {
          onDelete(coin.id);
          decreaseTotal(coin.price, coin.amount);
        }}
      />
    </div>
  );
};

export default Coin;
