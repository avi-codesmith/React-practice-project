import "./CoreConcept.css";

// ++++++++++++++++++++++++++++++++++ TWO WAYS +++++++++++++++++++++++++++++++++

// FIRST (Best)

export default function CoreConcept({ src, heading, para }) {
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
