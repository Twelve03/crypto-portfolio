const SearchBarCoin = ({ searchCoin, addMe }) => {

  const onAdd = () => {
      const img = searchCoin.png32;
      const code = searchCoin.code;
      const price = searchCoin.rate;
    addMe({img, code, price});
  };

  return (
    <div className="search-list-coin" onClick={onAdd}>
      <img src={searchCoin.png32} alt="" />
      <p>{searchCoin.name}</p>
      <p>{searchCoin.code}</p>      
    </div>
  );
};

export default SearchBarCoin;
