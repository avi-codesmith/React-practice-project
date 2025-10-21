import "./App.css";
import "./query.css";
import Header from "./Components/Header/Header.jsx";
import CoreConcepts from "./Components/CoreConcepts/CoreConcepts.jsx";
import InterActive from "./Components/Interactive.jsx/interactive.jsx";

function App() {
  return (
    <div className="initial-wrapper">
      <Header />
      <CoreConcepts />
      <InterActive />
    </div>
  );
}

export default App;
