import { useState } from "react";
import SearchBarCoin from "./SeachBarCoin";
import Loader from "./Loader";
import { useTransition, animated } from "react-spring";

const SearchBar = ({ apiCoins, toggleSearch, onAdd, showSearchBar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const transition = useTransition(showSearchBar, {
    from: { y: 800, opacity: 0 },
    enter: { y: 50, opacity: 1 },
    leave: { y: 800, opacity: 0 },
  });

  let content;

  if (apiCoins.data) {
    content = transition(
      (style, item) =>
        item && (
          <animated.div className="search-container" style={style}>
            <input
              className="search-bar"
              type="text"
              placeholder="Search coin..."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <div className="search-list">
              {apiCoins.data
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
                    onAdd={onAdd}
                    searchCoin={coin}
                    key={apiCoins.data.indexOf(coin)}
                    toggleSearch={toggleSearch}
                  />
                ))}
            </div>
          </animated.div>
        )
    );
  }

  if (apiCoins.loading) {
    content = <Loader />;
  }

  if (apiCoins.error) {
    content = <p>There was an error fetching the API. Try again later.</p>;
  }

  return content;
};

export default SearchBar;
