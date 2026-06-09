// MenuLateral/styles.ts

import styled from "styled-components";

import {
  AZUL_MARINHO_100,
  AZUL_MARINHO_90,
  BRANCO_100,
  BRANCO_80,
} from "../../utils/constants";

interface ContainerProps {
  $showMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ $showMenu }) => ($showMenu ? "300px" : "90px")};
  height: 100vh;
  background-color: ${AZUL_MARINHO_90};
  transition: width 0.3s ease;
  overflow: hidden;
  position: relative;

  > header {
    width: 100%;
    height: 70px;
    background-color: ${AZUL_MARINHO_100};
    padding: 20px;
    display: flex;
    align-items: center;

    justify-content: ${({ $showMenu }) =>
      $showMenu ? "space-between" : "center"};

    color: ${BRANCO_100};

    > h1 {
      white-space: nowrap;
      font-size: 20px;
    }

    > button {
      border: none;
      background: transparent;
      color: ${BRANCO_100};
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  > footer {
    position: absolute;
    bottom: 20px;
    left: 0;
    text-align: center;
    width: 100%;
    border-top: 1px solid ${BRANCO_80};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${BRANCO_100};
    padding: 20px 0;
  }
`;

export const MenuContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;
