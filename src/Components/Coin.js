import { BsFillTrashFill } from "react-icons/bs";

const Coin = ({ coin, onDelete, decreaseTotal }) => {
  return (
    <div className="coin" value={coin.price}>
      <p>{coin.name}</p>
      <p>{coin.price}</p>
      <div>
        {/* coin.price x coin.amount gives us what said amount of coins are worth in $ */}
        <p>${coin.price * coin.amount}</p>
        <p>{coin.amount}</p>
      </div>
      <BsFillTrashFill
        onClick={() => {
          onDelete(coin.id);
          decreaseTotal(coin.price, coin.amount);
        }}
      />
    </div>
  );
};

export default Coin;
