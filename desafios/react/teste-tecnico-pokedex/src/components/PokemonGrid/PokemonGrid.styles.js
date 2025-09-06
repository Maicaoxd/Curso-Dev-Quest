import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  padding: 24px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const EmptyMessage = styled.li`
  list-style: none;
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
`;
