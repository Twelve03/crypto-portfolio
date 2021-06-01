import { useState } from "react";
import Header from "./Components/Header";
import AddForm from "./Components/AddForm";
import CoinList from "./Components/CoinList";

function App() {
  const [coins, setCoins] = useState([
    {
      id: 1,
      name: "Bitcoin",
      price: "$36,000",
      amount: 1,
    },
    {
      id: 2,
      name: "Ethereum Classic",
      price: "$70",
      amount: 1,
    },
    {
      id: 3,
      name: "BitcoinSV",
      price: "$170",
      amount: 1,
    },
  ]);

  // Add coin
  const addCoin = (e) => {
    const id = Math.floor(Math.random() * 1000);
    const newCoin = { ...e, id };
    setCoins([...coins, newCoin]);
  };

  return (
    <div className="container">
      <Header />
      <AddForm onAdd={addCoin} />
      <CoinList coins={coins} />
    </div>
  );
}

export default App;
