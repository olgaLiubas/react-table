import RowCell from "./Row-cell";
// import "./row.scss";

export default function Row({ country, cellsNamesConfig }) {
  return (
    <div className="row">
      <input type="checkbox" name="row-header" className="row-checkbox" />
      {cellsNamesConfig.map((cell) => {
        return (
          <RowCell
            key={cell.id}
            nameOfField={cell.nameOfClass}
            country={country}
          />
        );
      })}
    </div>
  );
}
