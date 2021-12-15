import axios from "axios";

export const putData = async (url, obj) => {
  await axios.put(url, obj);
};
