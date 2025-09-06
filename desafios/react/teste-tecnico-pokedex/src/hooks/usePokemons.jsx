import { useEffect, useRef, useState } from "react";
import { listPokemons } from "../api/pokeapi";

export function usePokemons() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const didMount = useRef(false);

  const getPokemonIdFromUrl = (url) => {
    const clean = url.endsWith("/") ? url.slice(0, -1) : url;
    return clean.split("/").pop();
  };

  async function loadMore() {
    if (loading) return;
    setLoading(true);
    try {
      const offset = page * 10;
      const pokemons = await listPokemons(offset, 10);

      const pokemonsWithImages = pokemons.map((p) => ({
        ...p,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonIdFromUrl(
          p.url
        )}.png`,
      }));

      setItems((prev) => [...prev, ...pokemonsWithImages]);
      setPage((p) => p + 1);
    } catch (err) {
      console.error("Erro ao carregar pokemons:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (didMount.current) return;
    didMount.current = true;
    loadMore();
  }, []);

  return { items, loading, loadMore };
}
