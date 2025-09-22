import "./TabBtn.css";

export default function ({ children, onCliking }) {
  return (
    <li>
      <button onClick={onCliking}>{children}</button>
    </li>
  );
}
