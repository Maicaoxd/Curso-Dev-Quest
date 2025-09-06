import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon, getAbilitiesWithDesc } from "../api/pokeapi";

export function usePokemon() {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();
  const [loading, setLoading] = useState(false);

  async function loadInfo() {
    if (loading) return;
    setLoading(true);
    try {
      const data = await getPokemon(name);
      const abilities = await getAbilitiesWithDesc(data.abilities);

      const pokemonMapped = {
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        types: data.types.map((t) => t.type.name),
        height: data.height,
        weight: data.weight,
        abilities: abilities,
        stats: {
          hp: data.stats.find((s) => s.stat.name === "hp")?.base_stat,
          attack: data.stats.find((s) => s.stat.name === "attack")?.base_stat,
          defense: data.stats.find((s) => s.stat.name === "defense")?.base_stat,
          spAttack: data.stats.find((s) => s.stat.name === "special-attack")
            ?.base_stat,
          spDefense: data.stats.find((s) => s.stat.name === "special-defense")
            ?.base_stat,
          speed: data.stats.find((s) => s.stat.name === "speed")?.base_stat,
        },
        moves: data.moves.map((m) => m.move.name),
      };

      setPokemon(pokemonMapped);
    } catch (err) {
      console.error("Erro ao carregar informações do pokemon:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadInfo();
  }, [name]);

  return { pokemon, loading };
}
