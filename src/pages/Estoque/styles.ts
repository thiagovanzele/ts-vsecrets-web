import styled from 'styled-components';
import {
  AZUL_MARINHO_100,
  AZUL_MARINHO_80,
  BRANCO_100,
  BRANCO_80,
  CINZA_40,
  CINZA_LINHA,
  LARANJA_100,
  LARANJA_50,
  VERDE_60,
  VERDE_90,
  VERMELHO_100,
  VERMELHO_50,
} from '../../utils/constants';

export const Container = styled.div`
  display: flex;
  background-color: ${AZUL_MARINHO_100};
  width: 100%;
  flex-direction: column;
  padding: 20px 30px;

  > h1 {
    color: ${BRANCO_100};
    font-size: 25px;
    margin-bottom: 20px;
  }
`;

export const Line = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const InnerContainer = styled.div`
  display: flex;
  background-color: ${AZUL_MARINHO_80};
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;

  > header {
    > h3 {
      color: ${BRANCO_100};
      font-size: 18;
      margin-bottom: 10px;
    }
  }

  .grafico-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    width: 620px;
  }

  .grafico {
    position: relative;
    width: 300px;
    height: 300px;
  }

  .grafico-total {
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    strong {
      color: ${BRANCO_100};
      font-size: 42px;
    }

    span {
      color: ${CINZA_40};
      font-size: 14px;
    }
  }

  .legenda {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  .legenda-item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      gap: 10px;

      p {
        color: ${BRANCO_80};
      }
    }

    .porcentagem-total {
      color: ${BRANCO_100};
      font-weight: 500;
    }
  }

  .cor {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
`;

export const TabelaEstoque = styled.table`
  width: 620px;
  border-collapse: collapse;
  table-layout: fixed;

  tbody {
    tr:not(:last-child) td {
      border-bottom: 1px solid ${CINZA_LINHA};
    }

    tr {
      td {
        padding: 8px 5px;
      }

      .col-icon {
        width: 60px;
      }

      .col-desc {
        width: 100%;
      }

      .col-estoque {
        width: 150px;
        text-align: right;
        white-space: nowrap;
      }

      .td-estoque {
        color: ${BRANCO_100};
        font-size: 14px;
        font-weight: 500;
      }

      .td-content {
        display: flex;
        flex-direction: column;

        .title {
          color: ${BRANCO_100};
          font-size: 14px;
          font-weight: 600;
        }

        .content {
          color: ${CINZA_40};
          font-size: 11px;
        }
      }

      .td-icon {
        background-color: ${LARANJA_50};
        width: 40px;
        height: 40px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;

        > svg {
          color: ${LARANJA_50};
        }

        &.sem-estoque {
          background-color: ${VERMELHO_50};

          > svg {
            color: ${VERMELHO_100};
          }
        }

        &.estoque-baixo {
          background-color: ${LARANJA_50};

          > svg {
            color: ${LARANJA_100};
          }
        }
      }
    }
  }
`;

export const TabelaMovimentações = styled.table`
  width: 1300px;
  border-collapse: collapse;
  table-layout: fixed;

  thead {
    tr {
      th {
        color: ${BRANCO_80};
        font-size: 13px;
        opacity: 0.8;
        padding: 8px 0;
      }

      th:nth-child(1) {
        width: 45%;
        text-align: left;
      }

      th:nth-child(2) {
        width: 20%;
        text-align: center;
      }

      th:nth-child(3) {
        width: 15%;
        text-align: center;
      }

      th:nth-child(4) {
        width: 20%;
        text-align: right;
      }
    }
  }

  tbody {
    tr {
      td {
        color: ${BRANCO_100};
        border-top: 1px solid ${CINZA_LINHA};
        padding: 14px 0;
        font-weight: 500;
        font-size: 14px;
      }

      td:nth-child(1) {
        text-align: left;
      }

      td:nth-child(2),
      td:nth-child(3) {
        text-align: center;
      }

      td:nth-child(4) {
        text-align: right;
      }

      .item-entrada {
        padding: 4px 10px;
        background-color: ${VERDE_60};
        color: ${VERDE_90};
        border-radius: 4px;
      }

      .item-saida {
        padding: 4px 10px;
        background-color: ${VERMELHO_50};
        color: ${VERMELHO_100};
        border-radius: 4px;
      }
    }
  }
`;
