import { BsFillTrashFill } from "react-icons/bs";

const Coin = ({ coin, onDelete}) => {
  return (
    <div className="coin">
      <img src={coin.img} alt="" />
      <p>{coin.code}</p>
      <BsFillTrashFill
        className="trash-btn"
        onClick={() => {
          onDelete(coin.id);
        }}
      />
    </div>
  );
};

export default Coin;
