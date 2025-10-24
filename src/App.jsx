import "./App.css";
import "./query.css";
import Header from "./Components/Header/Header.jsx";
import CoreConcepts from "./Components/CoreConcepts/CoreConcepts.jsx";
import InterActive from "./Components/Interactive.jsx/interactive.jsx";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="initial-wrapper">
        <Header />
        <CoreConcepts />
        <InterActive />
      </div>
    </Fragment>
  );
}

export default App;
