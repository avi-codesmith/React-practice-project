import "./App.css";
import "./query.css";
import BulbImage from "./images/bulb.svg"; // Needed for second props method
import { CoreData } from "./core-data.js";
import Header from "./components/header/header.jsx";
import CoreConcept from "./components/core-concept/core-concept.jsx";

function App() {
  return (
    <div className="initial-wrapper">
      <Header />
      <h1 className="core-heading">Core Concepts of React JS</h1>
      <div className="core-concept-container">
        <CoreConcept
          src={BulbImage}
          heading="Components"
          para="Components are the building blocks of any React application. They let you break the UI into reusable pieces, making your code organized, modular, and easier to maintain. Each component can have its own structure, logic, and style."
        />
        <CoreConcept
          src={CoreData[1].src}
          heading={CoreData[1].heading}
          para={CoreData[1].para}
        />
        <CoreConcept {...CoreData[2]} />
      </div>
    </div>
  );
}

export default App;
