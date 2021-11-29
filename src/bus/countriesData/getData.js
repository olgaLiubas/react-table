import axios from "axios";

export const getData = async (url, typeValue, dispatch) => {
  try {
    const response = await axios.get(url);
    const payloadValue = response.data;
    dispatch({ type: typeValue, payload: payloadValue });
  } catch (e) {
    alert(`Sorry, something go wrong. Try later! 
    ${e}`);
  }
};