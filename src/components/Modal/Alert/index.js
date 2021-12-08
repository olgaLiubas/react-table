import Alert from "@mui/material/Alert";

import styles from "./style.module.scss";

const AlertMsg = ({ msg, type, func }) => {
  return (
    <>
      <Alert severity={type} className={styles.msg}>
        {msg}
      </Alert>

      <button onClick={func} className={styles.finishBtn}>
        FINISH
      </button>
    </>
  );
};

export default AlertMsg;
