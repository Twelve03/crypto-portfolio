const SearchBarCoin = ({ searchCoin, addMe }) => {

  const onAdd = () => {
      const img = searchCoin.png32;
      const code = searchCoin.code;
    addMe({img, code});
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
