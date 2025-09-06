import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { PokemonDetailCard } from "../../components/PokemonDetailCard";
import { useThemeCtx } from "../../context/ThemeContext";
import { usePokemon } from "../../hooks/usePokemon";

export const Pokemon = () => {
  const { toggle } = useThemeCtx();
  const { pokemon, loading } = usePokemon();

  return (
    <Main>
      <Header toggleTheme={toggle} />

      <PokemonDetailCard pokemon={pokemon} />

      {loading ? "Carregando..." : ""}
    </Main>
  );
};
