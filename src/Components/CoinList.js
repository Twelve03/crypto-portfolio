import Coin from "./Coin";

const CoinList = ({ coins }) => {
  return (
    <div className="coin-list">
      {coins.map((coin) => {
        return <Coin coin={coin} key={coin.id} />;
      })}
    </div>
  );
};

export default CoinList;
