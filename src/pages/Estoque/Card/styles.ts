import styled from "styled-components";
import { AZUL_MARINHO_80, AZUL_MARINHO_90, BRANCO_100, BRANCO_80, CINZA_40, ROXO_100, ROXO_90, VERDE_100, VERDE_50 } from "../../../utils/constants";

export const Container = styled.div`
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

    > span {
        color: ${VERDE_50};
    }
  }

  .estoque-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    .icon {
        background-color: ${ROXO_100};
        padding: 10px 20px;
        color: ${BRANCO_100};
        border-radius: 8px;
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
