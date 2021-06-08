import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header";
import CoinList from "./Components/CoinList";
import ToggleBtn from "./Components/ToggleBtn";
import SearchBar from "./Components/SearchBar";

function App() {
  const [coins, setCoins] = useState([]);
  const [apiCoins, setApiCoins] = useState([]);
  const [total, setTotal] = useState(0);
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    // Get coin's data from coingecko.com API
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setApiCoins(res.data);
      })
      .catch((error) => alert("Something went wrong fetching the API"));
  }, []);

  // Add coin
  const addCoin = (e) => {
    const newCoin = { ...e };
    setCoins([...coins, newCoin]);
  };

  // Delete coin
  const deleteCoin = (id) => {
    setCoins(coins.filter((coin) => coin.id !== id));
  };

  // Increase portfolio value
  const increaseTotal = (price, amount) => {
    setTotal(total + price * amount);
  };

  // Decrease portfolio value
  const decreaseTotal = (price, amount) => {
    setTotal(total - price * amount);
  };

  return (
    <div className="container">
      <Header total={total} />
      {showSearchBar && <SearchBar addMe={addCoin} apiCoins={apiCoins} />}
      <CoinList
        coins={coins}
        onDelete={deleteCoin}
        increaseTotal={increaseTotal}
        decreaseTotal={decreaseTotal}
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
