import { useState } from "react";
import SearchBarCoin from "./SeachBarCoin";

const SearchBar = ({ apiCoins, toggleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search coin..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <div className="search-list">
        {apiCoins
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
              searchCoin={coin}
              key={apiCoins.indexOf(coin)}
              toggleSearch={toggleSearch}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
