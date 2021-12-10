import axios from "axios";

export const getData = async (url) => {
  const response = await axios.get(url);
  const countries = response.data;
  return countries;
};
