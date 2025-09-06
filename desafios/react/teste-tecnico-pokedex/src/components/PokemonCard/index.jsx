import { Link } from "react-router-dom";
import { Card } from "./PokemonCard.styles";

const PokemonCard = ({ name, image }) => {
  return (
    <Link to={`/pokemon/${name}`} style={{ textDecoration: "none" }}>
      <Card>
        {image && <img src={image} alt={name} />}
        <h3>{name}</h3>
      </Card>
    </Link>
  );
};

export default PokemonCard;
