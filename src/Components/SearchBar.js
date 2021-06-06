import { useState, useEffect } from "react";
import SearchBarCoin from "./SeachBarCoin";

const SearchBar = ({ addMe }) => {
  const [names, setNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getCoins = async () => {
      const coinsFromAPI = await fetchCoins();
      setNames(coinsFromAPI);
    };
    getCoins();
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
          limit: 100,
          meta: true,
        }),
      }
    );
    const data = await request.json();
    return data;
  };
  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <div className="search-list">
        {names
          .filter((value) => {
            if (searchTerm === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            } else {
              return null;
            }
          })
          .map((coin) => (
            <SearchBarCoin
              addMe={addMe}
              searchCoin={coin}
              key={names.indexOf(coin)}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
