import styled from "styled-components";

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.bg};
  border: 1px solid rgba(0,0,0,0.08);
  text-transform: capitalize;
  position: relative;
  cursor: default;

  &:hover > .tooltip {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 0;
  max-width: 320px;
  padding: 10px 12px;
  border-radius: 10px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  border: 1px solid rgba(0,0,0,0.08);
  font-size: 0.9rem;
  line-height: 1.2;
  opacity: 0;
  transform: translateY(6px);
  transition: 150ms ease;
  pointer-events: none;
  z-index: 5;
`;

export default function AbilityBadge({ name, description }) {
  return (
    <Pill>
      {name}
      {description && <Tooltip className="tooltip">{description}</Tooltip>}
    </Pill>
  );
}
