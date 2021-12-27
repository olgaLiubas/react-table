import { useDispatch } from "react-redux";
import { deleteUserDataForSaga } from "bus/signIn/actions";

import styles from "./style.module.scss";

const LogoutPage = () => {
  const dispatch = useDispatch();

  const logOutHelper = () => {
    dispatch(deleteUserDataForSaga());
  };

  return (
    <div className={styles.logoutWrapper}>
      <button type="button" onClick={logOutHelper}>
        Log Out
      </button>
    </div>
  );
};

export default LogoutPage;
