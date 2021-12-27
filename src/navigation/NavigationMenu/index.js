import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { BOOK } from "navigation/book";
import { isUserLogined } from "bus/signIn/selectors";

import styles from "./style.module.scss";

const Navigation = () => {
  const loginedUser = useSelector(isUserLogined);

  return (
    <nav className={styles.nav}>
      <ul>
        {loginedUser ? (
          <>
            <li>
              <Link to={BOOK.AUTH.SIGN_OUT}>Log out</Link>
            </li>
            <li>
              <Link to={BOOK.CONTENT.COUNTRIES}>Countries</Link>
            </li>

            <li>
              <Link to={BOOK.CONTENT.CITIES}>Cities</Link>
            </li>

            <li>
              <Link to={BOOK.CONTENT.STATES}>States</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to={BOOK.AUTH.SIGN_IN}>Log in</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navigation;
