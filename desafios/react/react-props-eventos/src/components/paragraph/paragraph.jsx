import PropTypes from "prop-types";

const Paragraph = ({ text, color }) => {
  return <p style={{ color: color }}>{text.toUpperCase()}</p>;
};

Paragraph.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Paragraph;
