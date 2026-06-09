// MenuButton/styles.ts

import styled from "styled-components";

import {
  BRANCO_80,
  ROXO_100,
  ROXO_60,
} from "../../utils/constants";

interface ContainerProps {
  $showMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: ${({ $showMenu }) =>
    $showMenu ? "flex-start" : "center"};
  gap: 16px;
  color: ${BRANCO_80};
  cursor: pointer;
  transition: 0.2s ease;

  svg {
    color: inherit;
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${ROXO_100};
    color: ${ROXO_60};
  }
`;

export const Nome = styled.span`
  white-space: nowrap;
`;