import HeaderCell from "./Header-cell";
import "./header.scss";

function Header({ cellsNamesConfig }) {
  return (
    <>
      <header>
        <input
          type="checkbox"
          name="checkbox-header"
          className="header-checkbox"
        />
        {cellsNamesConfig.map((cell) => {
          return (
            <HeaderCell
              key={cell.id}
              name={cell.nameOfHeaderColumn}
              clas={cell.nameOfClass}
            />
          );
        })}
      </header>
    </>
  );
}

export default Header;
