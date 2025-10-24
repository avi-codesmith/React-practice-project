import "./TabBtn.css";

export default function ({ children, isClicked, ...props }) {
  return (
    <a>
      <button className={isClicked === true ? "active" : undefined} {...props}>
        {children}
      </button>
    </a>
  );
}
