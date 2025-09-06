import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { PokemonGrid } from "../../components/PokemonGrid";
import { useThemeCtx } from "../../context/ThemeContext";
import { usePokemons } from "../../hooks/usePokemons";

export const Home = () => {
  const { toggle } = useThemeCtx();
  const { items, loading, loadMore } = usePokemons();

  return (
    <Main>
      <Header toggleTheme={toggle} />

      <PokemonGrid pokemons={items} />

      <Button
        disabled={loading}
        onClick={loadMore}
        style={{ alignSelf: "center" }}
      >
        {loading ? "Carregando..." : "Carregar mais"}
      </Button>
    </Main>
  );
};
