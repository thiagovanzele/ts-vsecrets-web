import styled from "styled-components";
import { AZUL_MARINHO_80, BRANCO_100, BRANCO_80, CINZA_40, ROXO_100, ROXO_90, VERDE_100, VERDE_50 } from "../../../utils/constants";

interface ContainerProps {
  $bgColor: string;
}

export const Container = styled.div<ContainerProps>`
  width: 320px;
  background-color: ${AZUL_MARINHO_80};
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;

  .estoque-footer {
    font-size: 12px;
    display: flex;
    gap: 6px;
    color: ${BRANCO_100};

    > svg {
        color: ${VERDE_50};

    }

    .valor-estoque {
        color: ${VERDE_50};
    }
  }

  .estoque-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    .icon {
      background-color: ${({ $bgColor }) => ($bgColor)} ;
      padding: 10px 20px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .content {
      display: flex;
      gap: 5px;
      flex-direction: column;
      color: ${BRANCO_100};

      .title {
        font-size: 11px;
        color: ${CINZA_40};
      }

      .value {
        font-size: 20px;
      }
    }
  }
`;
