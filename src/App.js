import { useState, useEffect } from "react";
import Header from "./Components/Header";
import CoinList from "./Components/CoinList";
import ToggleBtn from "./Components/ToggleBtn";
import SearchBar from "./Components/SearchBar";
import useAxios from "./Hooks/HttpRequest";

function App() {
  const [coins, setCoins] = useState([]);
  const [total, setTotal] = useState(0);
  const [showSearchBar, setShowSearchBar] = useState(false);

  let apiCoins = useAxios();

  // Local storage functions
  useEffect(() => {
    getLocalCoins();
  }, []);

  useEffect(() => {
    saveToLocal(coins);
  }, [coins]);

  const saveToLocal = (e) => {
    localStorage.setItem("coins", JSON.stringify(e));
  };

  const getLocalCoins = () => {
    if (localStorage.getItem("coins") === null) {
      localStorage.setItem("coins", JSON.stringify([]));
    } else {
      let localCoins = JSON.parse(localStorage.getItem("coins"));
      setCoins(localCoins);
    }
  };

  // Increase portfolio value
  const increaseTotal = (price, amount) => {
    setTotal(total + price * amount);
  };

  // Decrease portfolio value
  const decreaseTotal = (price, amount) => {
    setTotal(total - price * amount);
  };

  // Toggle search coin section
  const toggleSearch = () => {
    setShowSearchBar(!showSearchBar);
  };

  // Add Coin
  const addCoin = (newCoin) => {
    // Check if there's no duplicates before adding
    if (coins.length > 0) {
      coins.find((coin) => coin.id === newCoin.id)
        ? alert("Coin already added!")
        : setCoins([...coins, newCoin]);
    } else {
      setCoins([...coins, newCoin]);
    }
  };

  // Delete coin
  const deleteCoin = (id) => {
    setCoins(coins.filter((coin) => coin.id !== id));
  };

  const updatePrice = () => {
    if (apiCoins.data) {
      if (JSON.parse(localStorage.getItem("coins")) !== null) {
        let savedCoinList = JSON.parse(localStorage.getItem("coins"));
        for (let i = 0; i < savedCoinList.length; i++) {
          for (let j = 0; j < apiCoins.data.length; j++) {
            if (apiCoins.data[j].id === savedCoinList[i].id) {
              savedCoinList[i].current_price = apiCoins.data[j].current_price;
            }
          }
        }
        saveToLocal(savedCoinList);
      }
    }
  };

  // Updates coin price on refresh
  updatePrice();

  return (
    <div className="container">
      <Header total={total} />
      {showSearchBar && (
        <SearchBar
          apiCoins={apiCoins}
          toggleSearch={toggleSearch}
          onAdd={addCoin}
        />
      )}
      {!showSearchBar && (
        <CoinList
          coins={coins}
          apiCoins={apiCoins}
          increaseTotal={increaseTotal}
          decreaseTotal={decreaseTotal}
          onDelete={deleteCoin}
        />
      )}
      <ToggleBtn showSearchBar={showSearchBar} toggleSearch={toggleSearch} />
    </div>
  );
}

export default App;
