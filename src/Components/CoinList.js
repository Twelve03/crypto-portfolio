import Coin from "./Coin";

const CoinList = ({ decreaseTotal, increaseTotal, coins, onDelete }) => {
  return (
    <div className="coin-list">
      {coins.map((coin) => {
        return (
          <Coin
            coin={coin}
            key={coin.id}
            decreaseTotal={decreaseTotal}
            increaseTotal={increaseTotal}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default CoinList;
