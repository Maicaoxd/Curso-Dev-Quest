import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  padding: 16px;
`;
