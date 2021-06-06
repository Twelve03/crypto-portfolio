const SearchBarCoin = ({ searchCoin, addMe }) => {

  const onAdd = () => {
      const img = searchCoin.png32;
      const code = searchCoin.code;
      const price = searchCoin.rate;
    addMe({img, code, price});
  };

  return (
    <div className="coin" onClick={onAdd}>
      <img src={searchCoin.png32} alt="" />
      <h1>{searchCoin.name}</h1>
      <p>{searchCoin.code}</p>      
    </div>
  );
};

export default SearchBarCoin;
