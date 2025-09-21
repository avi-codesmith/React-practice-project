import "./App.css";
import "./query.css";
import BulbImage from "./Images/bulb.svg"; // Needed for second props method
import { CoreData } from "./core-data.js";
import Header from "./Components/Header/Header.jsx";
import CoreConcept from "./Components/CoreConcept/CoreConcept.jsx";
import TabBtn from "./Components/TabBtn/TabBtn.jsx";

function App() {
  return (
    <div className="initial-wrapper">
      <Header />
      <section id="core-concept">
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
      </section>
      <section id="examples">
        <h1>Examples</h1>
        <menu>
          <TabBtn>Components</TabBtn>
          <TabBtn>JSX</TabBtn>
          <TabBtn>Props</TabBtn>
          <TabBtn>State</TabBtn>
        </menu>
      </section>
    </div>
  );
}

export default App;
