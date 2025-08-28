import PropTypes from "prop-types";
import "./card.css";

const Card = ({ children, color = "orange", showCardColor }) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: color }}
      onClick={() => showCardColor(color)}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  showCardColor: PropTypes.func,
};

export default Card;
