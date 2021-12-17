import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

import Modal from "components/Portal/Modal";
import { getUiState } from "bus/ui/selectors";

const Portal = ({ selectors, actions, cellsNamesConfig }) => {
  const { isModal } = useSelector(getUiState);

  return (
    <>
      {isModal &&
        ReactDOM.createPortal(
          <Modal
            selectors={selectors}
            actions={actions}
            cellsNamesConfig={cellsNamesConfig}
          />,
          document.getElementById("modal_place")
        )}
    </>
  );
};

export default Portal;
