import Button from "../Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onToggle, visibility }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          text={visibility ? "Close" : "Add"}
          color={visibility ? "red" : "green"}
          onClick={onToggle}
        />
      )}
    </header>
  );
};
export default Header;
