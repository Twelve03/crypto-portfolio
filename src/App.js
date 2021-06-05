import { useState } from "react";
import Header from "./Components/Header";
import CoinList from "./Components/CoinList";
import ToggleBtn from "./Components/ToggleBtn";
import SearchBar from "./Components/SearchBar";

function App() {
  const [coins, setCoins] = useState([]);
  const [total, setTotal] = useState(0);
  const [showSearchBar, setShowSearchBar] = useState(false);

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
  // const increaseTotal = (price, amount) => {
  //   setTotal(total + price * amount);
  // };

  // Decrease value
  // const decreaseTotal = (price, amount) => {
  //   setTotal(total - price * amount);
  // };

  return (
    <div className="container">
      <Header total={total} />
      {showSearchBar && <SearchBar addMe={addCoin} />}
      <CoinList
        coins={coins}
        onDelete={deleteCoin}
      />
      <ToggleBtn
        showSearchBar={showSearchBar}
        onToggle={() => {
          setShowSearchBar(!showSearchBar);
        }}
      />
    </div>
  );
}

export default App;
