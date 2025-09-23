import "./TabBtn.css";

export default function ({ children, onCliking }) {
  return (
    <a>
      <button onClick={onCliking}>{children}</button>
    </a>
  );
}
