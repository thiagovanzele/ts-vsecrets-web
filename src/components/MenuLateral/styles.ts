import styled from 'styled-components';

import { AZUL_MARINHO_100, AZUL_MARINHO_90, BRANCO_100, CINZA_LINHA } from '../../utils/constants';

interface ContainerProps {
  $showMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ $showMenu }) => ($showMenu ? '300px' : '90px')};
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

    .logo {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    justify-content: ${({ $showMenu }) => ($showMenu ? 'space-between' : 'center')};

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
    border-top: 1px solid ${CINZA_LINHA};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${CINZA_LINHA};
    padding-top: 20px;
  }
`;

export const MenuContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;
