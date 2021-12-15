import { Link } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Log in</Link>
      </li>
      <li>
        <Link to="/countries">Countries</Link>
      </li>
      <li>
        <Link to="/cities">Cities</Link>
      </li>
      <li>
        <Link to="/states">States</Link>
      </li>
    </ul>
  </nav>
);
export default Navigation;
