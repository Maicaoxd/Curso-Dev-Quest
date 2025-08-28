import PropTypes from "prop-types";

const exibirLabel = (label) => {
  alert(`A label desse botão é ${label}`);
};

const Button = ({ label }) => {
  return <button onClick={() => exibirLabel(label)}>{label}</button>;
};

Button.PropTypes = {
  label: PropTypes.string,
};

export default Button;
