import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

import Modal from "components/Portal/Modal";
import { getUiState } from "bus/ui/selectors";

const Portal = ({ selectors, actions }) => {
  const { isModal } = useSelector(getUiState);

  return (
    <>
      {isModal &&
        ReactDOM.createPortal(
          // <Modal selectors={selectors} actions={actions} />,
          document.getElementById("modal_place")
        )}
    </>
  );
};

export default Portal;
