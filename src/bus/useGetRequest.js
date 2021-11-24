import { useEffect, useState } from "react";
import axios from "axios";

const useGetRequest = (url) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(url);
        setCountries(response.data);
      } catch (e) {
        alert(`Sorry, something go wrong. Try later! 
        ${e}`);
      }
    }
    getData();
  });
  return countries;
};

export default useGetRequest;
