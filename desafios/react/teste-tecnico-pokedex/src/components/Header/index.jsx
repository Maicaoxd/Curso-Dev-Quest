import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Brand, HeaderWrapper } from "./Header.styles";

const Header = ({ toggleTheme }) => {
  return (
    <HeaderWrapper>
      <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
        <Brand>
          <img src="/pokedex.png" alt="Pokedex" />
          <h1>Pokedex</h1>
        </Brand>
      </Link>
      <Button onClick={toggleTheme}>Alternar tema</Button>
    </HeaderWrapper>
  );
};

export { Header };
