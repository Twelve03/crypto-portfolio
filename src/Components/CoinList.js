import Coin from "./Coin";

const CoinList = ({ coins, onDelete, getTotal, decreaseTotal }) => {
  return (
    <div className="coin-list">
      {coins.map((coin) => {
        return (
          <Coin
            coin={coin}
            key={coin.id}
            onDelete={onDelete}
            getTotal={getTotal}
            decreaseTotal={decreaseTotal}
          />
        );
      })}
    </div>
  );
};

export default CoinList;
