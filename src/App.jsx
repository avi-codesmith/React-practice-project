import "./App.css";
import "./query.css";
import BulbImage from "./Images/bulb.svg"; // Needed for second props method
import { CoreData } from "./core-data.js";
import Header from "./Components/Header/Header.jsx";
import CoreConcept from "./Components/CoreConcept/CoreConcept.jsx";
import TabBtn from "./Components/TabBtn/TabBtn.jsx";
import { Component } from "react";

function App() {
  let tabContent = "Pls click a btn";
  function onclickHandle(name, tabContent) {
    tabContent = name;
    console.log(tabContent);
  }
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
          <TabBtn onCliking={() => onclickHandle("component")}>
            Components
          </TabBtn>
          <TabBtn onCliking={() => onclickHandle("jsx")}>JSX</TabBtn>
          <TabBtn onCliking={() => onclickHandle("props")}>Props</TabBtn>
          <TabBtn onCliking={() => onclickHandle("state")}>State</TabBtn>
        </menu>
        <div className="code">{tabContent}</div>
      </section>
    </div>
  );
}

export default App;
