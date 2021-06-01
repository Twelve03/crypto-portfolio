import { useState } from "react";
import Header from "./Components/Header";
import AddForm from "./Components/AddForm";
import CoinList from "./Components/CoinList";

function App() {
  const [coins, setCoins] = useState([]);

  const [total, setTotal] = useState(0);

  // Add coin
  const addCoin = (e) => {
    const id = Math.floor(Math.random() * 1000);
    const newCoin = { ...e, id };
    setCoins([...coins, newCoin]);
  };

  // Delete coin
  const deleteCoin = (id) => {
    setCoins(coins.filter((coin) => coin.id !== id));
  };

  // Increase value
  const increaseTotal = (price, amount) => {
    setTotal(total + (price * amount));
  };

  // Decrease value
  const decreaseTotal = (price, amount) => {
    setTotal(total - (price * amount));
  };

  return (
    <div className="container">
      <Header total={total} />
      <AddForm onAdd={addCoin} increaseTotal={increaseTotal} />
      <CoinList
        coins={coins}
        onDelete={deleteCoin}
        decreaseTotal={decreaseTotal}
      />
    </div>
  );
}

export default App;
