const SearchBarCoin = ({ searchCoin, toggleSearch }) => {
  return (
    <div
      className="search-list-coin"
      onClick={() => {
        searchCoin.show = true;
        toggleSearch();
      }}
    >
      <img
        src={searchCoin.image}
        alt=""
        style={{ height: "30px", width: "30px" }}
      />
      <p>{searchCoin.name}</p>
      <p>{searchCoin.symbol}</p>
      <p>{searchCoin.current_price}</p>
    </div>
  );
};

export default SearchBarCoin;
