import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

import Modal from "components/Portal/Modal";
import { getUiState } from "bus/ui/selectors";

const Portal = () => {
  const { isModal } = useSelector(getUiState);

  if (!isModal) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(<Modal />, document.getElementById("modal_place"))}
    </>
  );
};

export default Portal;
