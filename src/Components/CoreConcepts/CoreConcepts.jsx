import CoreConcept from "../CoreConcept/CoreConcept.jsx";
import { CoreData } from "../../core-data.js";
import Section from "../FileSection/FileSection.jsx";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts of React JS">
      <div className="core-concept-container">
        {CoreData.map((coreBlocks) => {
          return (
            <>
              <CoreConcept {...coreBlocks} />
            </>
          );
        })}
      </div>
    </Section>
  );
}
