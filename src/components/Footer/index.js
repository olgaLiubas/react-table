import styles from "./style.module.scss";

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.wrapperSelector}>
      <p>Amount of rows:</p>
      <select>
        <option>20</option>
        <option>50</option>
        <option>100</option>
      </select>
    </div>
    <p>Page: 1 of 1</p>
    <div className={styles.wrapperButtons}>
      <p className={styles.backButton}>◀</p>
      <p className={styles.forwardButton}>▶</p>
    </div>
  </div>
);

export default Footer;
