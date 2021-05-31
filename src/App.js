import Header from "./Components/Header";
import AddForm from "./Components/AddForm";
import CoinList from "./Components/CoinList";

function App() {
  // This is hardcoded for now. - fix it later
  const coins = [
    {
      id: 1,
      name: "Bitcoin",
      price: 0,
      amount: 1,
    },
    {
      id: 2,
      name: "Ethereum Classic",
      price: 0,
      amount: 1,
    },
    {
      id: 3,
      name: "BitcoinSV",
      price: 0,
      amount: 1,
    },
  ];
  return (
    <div className="container">
      <Header />
      <AddForm />
      <CoinList/>
    </div>
  );
}

export default App;
