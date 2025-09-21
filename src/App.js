import "./App.css";
import ReactLogo from "./logo.svg";
import BulbImage from "./bulb.svg"; // Nedd for second props method
import { CoreData } from "./core-data.js";

function Header() {
  return (
    <header className="header">
      <img src={ReactLogo} alt="React Logo" />
      <h1>React JS</h1>
      <p>
        This is a basic React app where you'll learn the fundamentals by
        building small, practical projects.
      </p>
    </header>
  );
}

// ++++++++++++++++++++++++++++++++++ TWO WAYS +++++++++++++++++++++++++++++++++

// FIRST (Best)

function CoreConcept({ src, heading, para }) {
  return (
    <div className="core-concept">
      <img src={src} alt={heading} />
      <h1>{heading}</h1>
      <p>{para}</p>
    </div>
  );
}

// SECOND

// function CoreConcept(props) {
//   return (
//     <div className="core-concept">
//       <img src={props.src} alt={props.heading} />
//       <h1>{props.heading}</h1>
//       <p>{props.para}</p>
//     </div>
//   );
// }

function App() {
  return (
    <div className="initial-wrapper">
      <Header />
      <h1 className="core-heading"> Core Concepts</h1>
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
