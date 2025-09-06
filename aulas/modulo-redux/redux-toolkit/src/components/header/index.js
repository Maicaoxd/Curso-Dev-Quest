import styled from "styled-components";
import { CartProductsCounter } from "../cart-products-counter";
import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <Container>
      <Link to="/">
        <h1>Redux Shop</h1>
      </Link>
      <CartProductsCounter />
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2C313F;
  color: #ffffff;
  padding: 20px 30px;

  a {
      color: #ffffff;
  }
`;

export { Header };
