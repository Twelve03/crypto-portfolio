import Coin from "./Coin";

const CoinList = ({ decreaseTotal, increaseTotal, apiCoins }) => {
  return (
    <div className="coin-list">
      {apiCoins.map((coin) => {
        if (coin.show === true) {
          return (
            <Coin
              coin={coin}
              key={coin.id}
              decreaseTotal={decreaseTotal}
              increaseTotal={increaseTotal}
            />
          );
        } else {
          return "";
        }
      })}
    </div>
  );
};

export default CoinList;
