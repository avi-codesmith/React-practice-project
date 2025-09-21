import "./TabBtn.css";

export default function ({ children }) {
  function handleClick() {
    console.log("cliked");
  }
  return (
    <li onClick={handleClick}>
      <button>{children}</button>
    </li>
  );
}
