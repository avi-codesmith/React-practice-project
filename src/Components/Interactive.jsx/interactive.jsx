import TabBtn from "../TabBtn/TabBtn.jsx";
import { EXAMPLES } from "../../data.js";
import { useState } from "react";

export default function InterActive() {
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
  );
}
