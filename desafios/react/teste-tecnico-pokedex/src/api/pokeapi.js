import { api } from "./axios";

export async function listPokemons(offset = 0, limit = 10) {
  const { data } = await api.get(`/pokemon`, {
    params: { offset, limit }
  });
  return data.results;
}

export async function getPokemon(name) {
  const { data } = await api.get(`/pokemon/${name}`);
  return data;
}

export async function getAbilitiesWithDesc(abilities) {
  const results = await Promise.all(
    abilities.map(async (a) => {
      const { data } = await api.get(a.ability.url);
      const effect = data.effect_entries.find(
        (e) => e.language.name === "en"
      )?.short_effect;
      
      return {
        id: data.id,
        name: a.ability.name,
        description: effect || "",
      };
    })
  );

  return results;
}
