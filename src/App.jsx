import "./App.css";
import "./query.css";
// import BulbImage from "./Images/bulb.svg"; // Needed for second props method
import { CoreData } from "./core-data.js";
import Header from "./Components/Header/Header.jsx";
import CoreConcept from "./Components/CoreConcept/CoreConcept.jsx";
import TabBtn from "./Components/TabBtn/TabBtn.jsx";
import { EXAMPLES } from "./data.js";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function onclickHandle(BtnName) {
    setSelectedTopic(BtnName);
  }

  let TabContent = <p className="request">Please select a button!</p>;

  if (selectedTopic) {
    TabContent = (
      <div className="TabContent">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="initial-wrapper">
      <Header />
      <section id="core-concept">
        <h1 className="core-heading">Core Concepts of React JS</h1>
        <div className="core-concept-container">
          {/* <CoreConcept
            src={BulbImage}
            heading="Components"
            para="Components are the building blocks of any React application. They let you break the UI into reusable pieces, making your code organized, modular, and easier to maintain. Each component can have its own structure, logic, and style."
          />
          <CoreConcept
            src={CoreData[1].src}
            heading={CoreData[1].heading}
            para={CoreData[1].para}
          />
          <CoreConcept {...CoreData[2]} /> */}
          {CoreData.map((coreBlocks) => {
            return (
              <>
                {console.log(coreBlocks, "qewqewqewq")}
                <CoreConcept {...coreBlocks} />
              </>
            );
          })}
        </div>
      </section>
      <section id="examples">
        <h1>Examples</h1>
        <menu>
          <TabBtn
            isClicked={selectedTopic === "components"}
            onCliking={() => onclickHandle("components")}
          >
            Components
          </TabBtn>
          <TabBtn
            isClicked={selectedTopic === "jsx"}
            onCliking={() => onclickHandle("jsx")}
          >
            JSX
          </TabBtn>
          <TabBtn
            isClicked={selectedTopic === "props"}
            onCliking={() => onclickHandle("props")}
          >
            Props
          </TabBtn>
          <TabBtn
            isClicked={selectedTopic === "state"}
            onCliking={() => onclickHandle("state")}
          >
            State
          </TabBtn>
        </menu>
        {TabContent}
      </section>
    </div>
  );
}

export default App;
