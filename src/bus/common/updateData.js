import axios from "axios";

export const updateData = async (url, obj) => {
  await axios.put(url, obj);
};
