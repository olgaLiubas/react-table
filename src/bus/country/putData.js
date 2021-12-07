import axios from "axios";

export const putData = async (url, obj) => {
  try {
    await axios.put(url, obj);
  } catch (e) {
    alert(`Sorry, something go wrong. Try later! 
    ${e}`);
  }
};
