import PropTypes from "prop-types";
import "./button.css";

const sayHello = () => {
  console.log("olá");
};

const Button = ({ label = "Clica aqui" }) => {
  return (
    <button className="btn" onClick={sayHello}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
};

export default Button;
