import TabBtn from "../TabBtn/TabBtn.jsx";
import TabBtns from "../TabBtns/TabBtns.jsx";
import { EXAMPLES } from "../../data.js";
import { useState } from "react";
import Section from "../FileSection/FileSection.jsx";

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
    <Section id="examples" title="Examples">
      <TabBtns
        buttons={
          <>
            <TabBtn
              isClicked={selectedTopic === "components"}
              onClick={() => onclickHandle("components")}
            >
              Components
            </TabBtn>
            <TabBtn
              isClicked={selectedTopic === "jsx"}
              onClick={() => onclickHandle("jsx")}
            >
              JSX
            </TabBtn>
            <TabBtn
              isClicked={selectedTopic === "props"}
              onClick={() => onclickHandle("props")}
            >
              Props
            </TabBtn>
            <TabBtn
              isClicked={selectedTopic === "state"}
              onClick={() => onclickHandle("state")}
            >
              State
            </TabBtn>
          </>
        }
      >
        {TabContent}
      </TabBtns>
    </Section>
  );
}
