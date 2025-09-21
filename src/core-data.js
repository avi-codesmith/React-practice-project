import CoreLogo from "./images/bulb.svg";
import PropsLogo from "./images/pops.svg";
import DomLogo from "./images/dom.svg";

export const CoreData = [
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
    para: "The Virtual DOM is a lightweight copy of the actual DOM that React uses to optimize UI updates. When the state changes, React updates the Virtual DOM first, compares it with the real DOM, and efficiently updates only the necessary parts, improving performance.",
  },
];
