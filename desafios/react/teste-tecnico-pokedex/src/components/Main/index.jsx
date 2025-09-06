import { StyledMain } from "./Main.styles";

const Main = ({ children, ...props }) => {
  return <StyledMain {...props}>{children}</StyledMain>;
};

export { Main };
