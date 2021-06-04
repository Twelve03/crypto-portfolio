import { useState, useEffect } from "react";
import Header from "./Components/Header";
import AddForm from "./Components/AddForm";
import CoinList from "./Components/CoinList";
import ToggleBtn from "./Components/ToggleBtn";

function App() {
  const [coins, setCoins] = useState([]);
  const [total, setTotal] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchCoins();
  }, []);

  // Fetch coin's data from Livecoinwatch.com
  const fetchCoins = async () => {
    const request = await fetch(
      new Request("https://api.livecoinwatch.com/coins/list"),
      {
        method: "POST",
        headers: new Headers({
          "content-type": "application/json",
          "x-api-key": "115aff26-1041-42fa-b09d-d3d6fcb73d56",
        }),
        body: JSON.stringify({
          currency: "USD",
          sort: "rank",
          order: "ascending",
          offset: 0,
          limit: 3,
          meta: true,
        }),
      }
    );
    const data = await request.json();
    return data;
  };

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
    setTotal(total + price * amount);
  };

  // Decrease value
  const decreaseTotal = (price, amount) => {
    setTotal(total - price * amount);
  };

  return (
    <div className="container">
      <Header total={total} />
      {showAddForm && <AddForm onAdd={addCoin} increaseTotal={increaseTotal} />}
      <CoinList
        coins={coins}
        onDelete={deleteCoin}
        decreaseTotal={decreaseTotal}
      />
      <ToggleBtn
        showAddForm={showAddForm}
        onToggle={() => {
          setShowAddForm(!showAddForm);
        }}
      />
    </div>
  );
}

export default App;
