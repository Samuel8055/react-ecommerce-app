import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: 1px solid var(--mainWhite);
  padding: 5px 10px;
  text-transform: capitalize;
  background: transparent;
  font-size: 16px;
  color: var(--grey);
  transition: all 0.5s ease;
  &:hover {
    background: var(--mainYellow);
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
