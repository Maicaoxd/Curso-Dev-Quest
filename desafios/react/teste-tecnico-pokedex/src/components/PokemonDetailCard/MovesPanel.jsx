import { useMemo, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  input {
    flex: 1;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0,0.12);
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }

  small {
    opacity: 0.7;
  }
`;

const Chips = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 8px;

  max-height: ${({ $collapsed }) => ($collapsed ? "180px" : "420px")};
  overflow-y: auto;
  padding-right: 6px;

  mask-image: linear-gradient(to bottom, black 85%, transparent 100%);

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.primary} transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.text};
  }
`;

const Chip = styled.li`
  background: ${({ theme }) => theme.bg};
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 999px;
  padding: 6px 10px;
  text-transform: capitalize;
  font-size: 0.9rem;
`;

const Toggle = styled.button`
  align-self: center;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  cursor: pointer;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 8px;

  &:hover { opacity: 1; text-decoration: underline; }
`;

export default function MovesPanel({ moves = [] }) {
  const [query, setQuery] = useState("");
  const [collapsed, setCollapsed] = useState(true);

  const filtered = useMemo(() => {
    if (!query) return moves;
    return moves.filter((m) => m.toLowerCase().includes(query.toLowerCase()));
  }, [moves, query]);

  const showToggle = filtered.length > 12;

  return (
    <Wrapper>
      <Controls>
        <input
          type="text"
          placeholder="Buscar movimento..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <small>{filtered.length} itens</small>
      </Controls>

      <Chips $collapsed={showToggle && collapsed}>
        {filtered.map((m, i) => (
          <Chip key={`${m}-${i}`}>{m}</Chip>
        ))}
      </Chips>

      {showToggle && (
        <Toggle onClick={() => setCollapsed((v) => !v)}>
          {collapsed ? "Ver todos" : "Ver menos"}
        </Toggle>
      )}
    </Wrapper>
  );
}
