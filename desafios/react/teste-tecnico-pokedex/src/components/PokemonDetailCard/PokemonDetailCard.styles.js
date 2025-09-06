import styled from "styled-components";

export const Card = styled.article`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  padding: 24px;
  max-width: 1000px;
  margin: 24px auto;
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 24px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const Media = styled.div`
  background: rgba(0,0,0,0.06);
  border-radius: 12px;
  padding: 16px;
  display: grid;
  place-items: center;

  img {
    width: 100%;
    max-width: 320px;
    height: auto;
    object-fit: contain;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 8px;

  h2 {
    font-size: 2rem;
    text-transform: capitalize;
    margin: 0;
  }
  span {
    opacity: 0.75;
    font-weight: 600;
  }
`;

export const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0 16px;
`;

export const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const MetaItem = styled.div`
  background: ${({ theme }) => theme.bg};
  border-radius: 10px;
  padding: 10px 12px;
  border: 1px solid rgba(0,0,0,0.06);

  small {
    display: block;
    opacity: 0.7;
    margin-bottom: 4px;
  }
  strong {
    font-weight: 700;
  }
`;

export const Section = styled.section`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 1.1rem;
    margin: 0 0 8px;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Tag = styled.li`
  background: ${({ theme }) => theme.bg};
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.9rem;
  text-transform: capitalize;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;
