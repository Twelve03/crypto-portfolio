const Coin = ({ coin }) => {
  return (
    <div className="coin">
      <p>{coin.name}</p>
      <p>{coin.price}</p>
      <p>{coin.amount}</p>
    </div>
  );
};

export default Coin;
