import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.2s ease;
  cursor: pointer;
  margin: 8px;

  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.bg};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;
