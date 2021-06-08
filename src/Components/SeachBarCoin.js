const SearchBarCoin = ({ searchCoin, addMe }) => {
  return (
    <div
      className="search-list-coin"
      onClick={() => {
        addMe(searchCoin);
      }}
    >
      <img
        src={searchCoin.image}
        alt=""
        style={{ height: "20px", width: "20px" }}
      />
      <p>{searchCoin.name}</p>
      <p>{searchCoin.symbol}</p>
    </div>
  );
};

export default SearchBarCoin;
