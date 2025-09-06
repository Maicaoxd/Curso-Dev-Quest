import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 48px;
    height: auto;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }
`;
