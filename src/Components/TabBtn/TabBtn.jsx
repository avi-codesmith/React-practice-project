import "./TabBtn.css";

export default function ({ children, onCliking, isClicked }) {
  return (
    <a>
      <button
        className={isClicked === true ? "active" : undefined}
        onClick={onCliking}
      >
        {children}
      </button>
    </a>
  );
}
