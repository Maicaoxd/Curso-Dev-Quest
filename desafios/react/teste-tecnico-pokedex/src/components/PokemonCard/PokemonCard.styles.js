import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.25);
  }

  img {
    width: 96px;
    height: 96px;
    object-fit: contain;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 1.1rem;
    text-transform: capitalize;
  }
`;
