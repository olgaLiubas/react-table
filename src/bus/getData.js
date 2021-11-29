import axios from "axios";

export const getData = async (url, action, dispatch) => {
  try {
    const response = await axios.get(url);
    const payloadValue = response.data;
    dispatch(action(payloadValue));
  } catch (e) {
    alert(`Sorry, something go wrong. Try later! 
    ${e}`);
  }
};
