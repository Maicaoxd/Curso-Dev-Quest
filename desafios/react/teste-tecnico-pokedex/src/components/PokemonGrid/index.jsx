import PokemonCard from "../PokemonCard";
import { EmptyMessage, Grid } from "./PokemonGrid.styles";

const PokemonGrid = ({ pokemons }) => {
  return (
    <Grid>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon, index) => (
          <PokemonCard key={`${pokemon}-${index}`} name={pokemon.name} image={pokemon.image} />
        ))
      ) : (
        <EmptyMessage>Nenhum pokemon encontrado</EmptyMessage>
      )}
    </Grid>
  );
};

export { PokemonGrid };
