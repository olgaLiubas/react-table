import axios from "axios";

export const getData = async (url) => {
  try {
    const response = await axios.get(url);
    const countries = response.data;
    return countries;
  } catch (e) {
    alert(`Sorry, something go wrong. Try later! 
    ${e}`);
  }
};
