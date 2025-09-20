import "./App.css";
import ReactLogo from "./logo.svg";
import CoreLogo from "./bulb.svg";
import PropsLogo from "./pops.svg";
import DomLogo from "./dom.svg";

const PropHeading = ["Components", "State & Props", "Virtual DOM"];

const PropParagraphs = [
  "Components are the building blocks of any React application. They let you break the UI into reusable pieces, making your code organized, modular, and easier to maintain. Each component can have its own structure, logic, and style.",

  "State and Props are fundamental for managing dynamic data in React. State holds data that can change over time within a component, while Props allow you to pass data from parent components to child components, enabling component reusability and flexibility.",

  "The Virtual DOM is a lightweight copy of the actual DOM that React uses to optimize UI updates. When the state changes, React updates the Virtual DOM first, compares it with the real DOM, and efficiently updates only the necessary parts, improving performance and user experience.",
];

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

function CoreConcept(prop) {
  return (
    <div class="core-concept">
      <img src={prop.src} />
      <h1>{prop.heading}</h1>
      <p>{prop.para}</p>
    </div>
  );
}

function App() {
  return (
    <div class="initial-wrapper">
      <Header />
      <h1 class="core-heading"> Core Concepts</h1>
      <div class="core-concept-container">
        <CoreConcept
          src={CoreLogo}
          heading={PropHeading[0]}
          para={[PropParagraphs[0]]}
        />
        <CoreConcept
          src={PropsLogo}
          heading={PropHeading[1]}
          para={[PropParagraphs[1]]}
        />
        <CoreConcept
          src={DomLogo}
          heading={PropHeading[2]}
          para={[PropParagraphs[2]]}
        />
      </div>
    </div>
  );
}

export default App;
