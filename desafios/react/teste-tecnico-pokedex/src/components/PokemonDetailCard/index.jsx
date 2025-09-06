import AbilityBadge from "./AbilityBadge";
import MovesPanel from "./MovesPanel";
import {
  BadgeRow,
  Card,
  Header,
  Media,
  MetaGrid,
  MetaItem,
  Section,
  StatsGrid,
} from "./PokemonDetailCard.styles";
import StatBar from "./StatBar";
import TypeBadge from "./TypeBadge";

export function PokemonDetailCard({ pokemon }) {
  if (!pokemon) return null;

  const {
    id,
    name,
    image,
    types = [],
    height,
    weight,
    abilities = [{}],
    stats = {},
    moves = [],
  } = pokemon;

  return (
    <Card>
      <Media>
        <img src={image} alt={name} />
      </Media>

      <div>
        <Header>
          <h2>{name}</h2>
          {typeof id !== "undefined" && (
            <span>#{String(id).padStart(3, "0")}</span>
          )}
        </Header>

        <BadgeRow>
          {types.map((t, index) => (
            <TypeBadge key={`${t}-${index}`} type={t} />
          ))}
        </BadgeRow>

        <MetaGrid>
          <MetaItem>
            <small>Altura</small>
            <strong>{height ? `${(height / 10).toFixed(1)} m` : "-"}</strong>
          </MetaItem>
          <MetaItem>
            <small>Peso</small>
            <strong>{weight ? `${(weight / 10).toFixed(1)} kg` : "-"}</strong>
          </MetaItem>
          <MetaItem>
            <small>Habilidades</small>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {abilities.length ? (
                abilities.map((a) => (
                  <AbilityBadge
                    key={a.id}
                    name={a.name}
                    description={a.description}
                  />
                ))
              ) : (
                <strong>-</strong>
              )}
            </div>
          </MetaItem>
          <MetaItem>
            <small>Tipos</small>
            <strong style={{ textTransform: "capitalize" }}>
              {types.length ? types.join(", ") : "-"}
            </strong>
          </MetaItem>
        </MetaGrid>

        {!!Object.keys(stats).length && (
          <Section>
            <h3>Status base</h3>
            <StatsGrid>
              {"hp" in stats && <StatBar label="HP" value={stats.hp} />}
              {"attack" in stats && (
                <StatBar label="ATK" value={stats.attack} />
              )}
              {"defense" in stats && (
                <StatBar label="DEF" value={stats.defense} />
              )}
              {"spAttack" in stats && (
                <StatBar label="SpA" value={stats.spAttack} />
              )}
              {"spDefense" in stats && (
                <StatBar label="SpD" value={stats.spDefense} />
              )}
              {"speed" in stats && <StatBar label="SPD" value={stats.speed} />}
            </StatsGrid>
          </Section>
        )}

        {moves.length > 0 && (
          <Section>
            <h3>Movimentos</h3>
            <MovesPanel moves={moves} />
          </Section>
        )}
      </div>
    </Card>
  );
}
