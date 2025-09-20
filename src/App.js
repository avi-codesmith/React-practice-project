import "./App.css";
import ReactLogo from "./logo.svg";
import CoreLogo from "./bulb.svg";
import PropsLogo from "./pops.svg";
import DomLogo from "./dom.svg";

const CoreData = [
  {
    src: CoreLogo,
    heading: "Components",
    para: "Components are the building blocks of any React application. They let you break the UI into reusable pieces, making your code organized, modular, and easier to maintain. Each component can have its own structure, logic, and style.",
  },
  {
    src: PropsLogo,
    heading: "State & Props",
    para: "State and Props are fundamental for managing dynamic data in React. State holds data that can change over time within a component, while Props allow you to pass data from parent components to child components, enabling component reusability and flexibility.",
  },
  {
    src: DomLogo,
    heading: "Virtual DOM",
    para: "The Virtual DOM is a lightweight copy of the actual DOM that React uses to optimize UI updates. When the state changes, React updates the Virtual DOM first, compares it with the real DOM, and efficiently updates only the necessary parts, improving performance and user experience.",
  },
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
          src={CoreData[0].src}
          heading={CoreData[0].heading}
          para={CoreData[0].para}
        />
        <CoreConcept {...CoreData[1]} />
        <CoreConcept {...CoreData[2]} />
      </div>
    </div>
  );
}

export default App;
