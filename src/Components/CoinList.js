import Coin from "./Coin";

const CoinList = ({ coins, onDelete, decreaseTotal, increaseTotal }) => {
  return (
    <div className="coin-list">
      {coins.map((coin) => {
        return (
          <Coin
            coin={coin}
            key={coin.id}
            onDelete={onDelete}
            decreaseTotal={decreaseTotal}
            increaseTotal={increaseTotal}
          />
        );
      })}
    </div>
  );
};

export default CoinList;
