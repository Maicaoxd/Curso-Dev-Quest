import styled from "styled-components";

const Row = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr 44px;
  align-items: center;
  gap: 10px;
`;

const Label = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  opacity: 0.8;
`;

const Track = styled.div`
  height: 12px;
  background: rgba(0,0,0,0.08);
  border-radius: 999px;
  overflow: hidden;
`;

const Fill = styled.div`
  height: 100%;
  width: ${({ $value }) => Math.min($value, 100)}%;
  background: ${({ theme }) => theme.primary};
  transition: width 250ms ease;
`;

const Value = styled.span`
  font-weight: 800;
  font-variant-numeric: tabular-nums;
`;

export default function StatBar({ label, value, max = 200 }) {
  const percent = Math.round((value / max) * 100);
  return (
    <Row>
      <Label>{label}</Label>
      <Track>
        <Fill $value={percent} />
      </Track>
      <Value>{value}</Value>
    </Row>
  );
}
