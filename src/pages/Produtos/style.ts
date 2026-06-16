import styled, { css } from 'styled-components';
import {
  AMARELO_50,
  AMARELO_60,
  AZUL_MARINHO_100,
  AZUL_MARINHO_60,
  AZUL_MARINHO_80,
  BRANCO_100,
  BRANCO_80,
  CINZA_100,
  CINZA_40,
  CINZA_50,
  CINZA_LINHA,
  CINZA_LINHA_CLARO,
  LARANJA_100,
  LARANJA_50,
  ROXO_100,
  ROXO_40,
  ROXO_50,
  ROXO_80,
  ROXO_90,
  VERDE_100,
  VERDE_50,
  VERDE_60,
  VERDE_90,
  VERMELHO_100,
  VERMELHO_50,
  VERMELHO_60,
} from '../../utils/constants';
import type { StatusProduto } from '.';

export const Container = styled.div`
  display: flex;
  background-color: ${AZUL_MARINHO_100};
  width: 100%;
  flex-direction: column;
  padding: 20px 30px;
  height: 100vh;

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
  width: 100%;

  .container-botao {
    display: flex;
    justify-content: flex-end;
    width: 520px;
  }

  .btn-adicionar-produto {
    border: none;
    background-color: ${ROXO_100};
    color: ${BRANCO_100};
    padding: 0 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;

    &:hover {
      background-color: ${ROXO_90};
      transition: ease 0.2s;
    }
  }

  .input-container {
    position: relative;
    display: flex;
    align-items: center;

    > svg {
      position: absolute;
      left: 16px;
      color: ${CINZA_40};
    }

    > input {
      background-color: ${AZUL_MARINHO_80};
      border: none;
      padding: 12px 16px 12px 42px;
      width: 520px;
      border-radius: 8px;
      color: ${CINZA_40};
      font-size: 14px;

      &::placeholder {
        color: ${CINZA_LINHA_CLARO};
      }

      &:focus {
        outline: 2px solid ${ROXO_100};
      }
    }
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  background-color: ${AZUL_MARINHO_80};
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  width: 1060px;

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

export const TabelaProdutos = styled.table`
  width: 100%;
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
        width: 30%;
        text-align: left;
      }

      td:nth-child(2),
      td:nth-child(3),
      td:nth-child(4),
      td:nth-child(5),
      td:nth-child(6) {
        text-align: center;
      }
    }
  }

  tbody {
    tr {
      td {
        color: ${BRANCO_100};
        border-top: 1px solid ${CINZA_LINHA};
        padding: 14px 0;
        font-weight: 600;
        font-size: 13px;
      }

      td:nth-child(1) {
        text-align: left;
      }

      td:nth-child(2),
      td:nth-child(3),
      td:nth-child(4),
      td:nth-child(5),
      td:nth-child(6) {
        text-align: center;
      }

      .actions-container {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;

        > button {
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7px;
          border-radius: 6px;
        }

        .botao-editar {
          &:hover {
            background-color: ${LARANJA_50};
            transition: ease 0.2s;
          }
        }

        .botao-excluir {
          &:hover {
            background-color: ${VERMELHO_50};
            transition: ease 0.2s;
          }
        }
      }
    }
  }
`;

export const Status = styled.div<{ status: StatusProduto }>`
  padding: 4px 2px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;

  ${({ status }) => {
    switch (status) {
      case 'Em Estoque':
        return css`
          color: ${VERDE_50};
          background-color: ${VERDE_100};
        `;

      case 'Estoque Baixo':
        return css`
          color: ${AMARELO_60};
          background-color: ${AMARELO_50};
        `;

      case 'Sem Estoque':
        return css`
          color: ${VERMELHO_60};
          background-color: ${VERMELHO_50};
        `;

      default:
        return css``;
    }
  }}
`;

export const ModalEditarProduto = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 560px;
  background-color: ${AZUL_MARINHO_100};
  border-radius: 16px;
  align-items: center;
  padding: 30px 65px;
  border: 1px solid ${CINZA_LINHA_CLARO};

  .editar-produto-header {
    display: flex;
    align-items: center;
    gap: 30px;
    color: ${BRANCO_100};
    margin-bottom: 30px;
    width: 100%;

    .icone-editar {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      background-color: ${ROXO_100};

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${ROXO_40};
      }
    }

    .editar-produto-content {
      display: flex;
      flex-direction: column;
      justify-content: center;

      > h4 {
        font-size: 21px;
        font-weight: 600;
        margin: 0 0 6px;
      }

      > span {
        font-size: 14px;
        color: ${CINZA_50};
        margin: 0;
      }
    }
  }

  .info-produto {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-between;

    .campo {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;

      label {
        color: ${CINZA_50};
        font-size: 14px;
        font-weight: 500;
      }
    }

    .input-container {
      width: 100%;
      > input {
        padding: 10px 20px;
        border-radius: 6px;
        color: ${BRANCO_100};
        font-weight: 600;
        width: 100%;
        border: 1px solid ${CINZA_LINHA};
        background-color: ${AZUL_MARINHO_100};

        &:focus {
          outline: 1px solid ${ROXO_100};
        }
      }
    }

    .select-container {
      width: 100%;
      position: relative;

      select {
        font-weight: 600;
        width: 100%;
        padding: 12px 42px 12px 20px;
        border-radius: 6px;
        border: 1px solid ${CINZA_LINHA};
        background-color: ${AZUL_MARINHO_100};
        color: ${BRANCO_100};
        font-size: 14px;
        cursor: pointer;

        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

        &:focus {
          outline: 1px solid ${ROXO_100};
        }
      }

      .select-icon {
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        color: ${CINZA_50};
        pointer-events: none;
        transition: color 0.2s;
      }

      &:focus-within .select-icon {
        color: ${ROXO_100};
      }
    }

    .estoque-container {
      width: 100%;
      display: flex;
      align-items: center;

      border: 1px solid ${CINZA_LINHA};
      border-radius: 6px;
      background-color: ${AZUL_MARINHO_100};

      &:focus-within {
        border-color: ${ROXO_100};
      }

      input {
        flex: 1;
        padding: 12px 20px;
        font-weight: 600;
        border: none;
        background: transparent;
        color: ${BRANCO_100};

        &:focus {
          outline: none;
        }
      }

      span {
        padding: 12px 20px;
        color: ${CINZA_50};
        border-left: 1px solid ${CINZA_LINHA};
        font-size: 14px;
      }
    }

    .preco-container {
      width: 100%;
      display: flex;
      align-items: center;

      border: 1px solid ${CINZA_LINHA};
      border-radius: 6px;
      background-color: ${AZUL_MARINHO_100};

      &:focus-within {
        border-color: ${ROXO_100};
      }

      span {
        width: 60px;
        text-align: center;
        color: ${CINZA_50};
        border-right: 1px solid ${CINZA_LINHA};
        padding: 12px 0;
        font-size: 14px;
      }

      input {
        flex: 1;
        font-weight: 600;
        padding: 12px 20px;
        border: none;
        background: transparent;
        color: ${BRANCO_100};

        &:focus {
          outline: none;
        }
      }
    }
  }

  .botoes-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;

    .botoes {
      display: flex;
      gap: 12px;

      > button {
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        padding: 12px 20px;
        border-radius: 8px;

        color: ${BRANCO_100};
        font-size: 14px;
        font-weight: 600;

        transition: all 0.2s ease;
      }

      .btn-cancelar {
        background-color: ${AZUL_MARINHO_80};

        &:hover {
          background-color: ${AZUL_MARINHO_60};
        }
      }

      .btn-salvar {
        background-color: ${ROXO_100};

        &:hover {
          filter: brightness(1.1);
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          filter: none;
        }
      }
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  z-index: 999;
`;
