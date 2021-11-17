import "./App.scss";
import Header from "./components/header/Header";
import Row from "./components/Row";
import countries from "./database/countries";
import { cellsNamesConfig } from "./database/cellsNamesConfig";

function App() {
  return (
    <div className="table">
      <Header cellsNamesConfig={cellsNamesConfig} />
      {countries.map((country) => {
        return (
          <Row
            key={country.id}
            country={country}
            cellsNamesConfig={cellsNamesConfig}
          />
        );
      })}
    </div>
  );
}

export default App;
