import "./Header.css";
import ReactLogo from "../../Images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={ReactLogo} alt="React Logo" />
      <h1>React JS</h1>
      <p>
        This is a basic React app where you'll learn the fundamentals by
        building small, practical projects.
      </p>
    </header>
  );
}
