import CoreConcept from "../CoreConcept/CoreConcept.jsx";
import { CoreData } from "../../core-data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concept">
      <h1 className="core-heading">Core Concepts of React JS</h1>
      <div className="core-concept-container">
        {CoreData.map((coreBlocks) => {
          return (
            <>
              <CoreConcept {...coreBlocks} />
            </>
          );
        })}
      </div>
    </section>
  );
}
