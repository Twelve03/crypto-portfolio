import Coin from "./Coin";

const CoinList = ({
  decreaseTotal,
  increaseTotal,
  coins,
  onDelete,
  updateCoin,
}) => {
  return (
    <div className="coin-list">
      {coins.map((coin) => {
        return (
          <Coin
            updateCoin={updateCoin}
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
