import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = () => {
  const [apiCoins, setApiCoins] = useState([]);

  useEffect(() => {
    // Get coin's data from coingecko.com API
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setApiCoins(res.data);
      })
      .catch((error) => alert("Something went wrong fetching the API"));
  }, []);

  return apiCoins;
};

export default useAxios;
