import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const CartProductsCounter = () => {

  const cartProducts = useSelector(state => state.cartProducts)

  return (
    <Container>
      <Link to="/cart-products">
        <FontAwesomeIcon icon={faCartPlus} />
        <span>{cartProducts.length}</span>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  a {
    position: relative;
  }

  span {
    display: inline-block;
    text-align: center;
    line-height: 12px;
    width: 12px;
    height: 12px;
    background-color: red;
    color: #ffffff;
    border-radius: 50%;
    font-size: 10px;

    position: absolute;
    top: -7px;
    right: -6px;
  }
`;
