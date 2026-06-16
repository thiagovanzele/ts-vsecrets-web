import styled, { css } from 'styled-components';
import {
  AMARELO_50,
  AMARELO_60,
  AZUL_MARINHO_100,
  AZUL_MARINHO_60,
  AZUL_MARINHO_80,
  AZUL_MARINHO_90,
  BRANCO_100,
  BRANCO_80,
  CINZA_100,
  CINZA_40,
  CINZA_50,
  CINZA_70,
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
  position: relative;

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

export const VendaContainer = styled.div`
  position: absolute;
  right: 0;
  background-color: ${AZUL_MARINHO_90};
  height: 100%;
  width: 700px;
  border-radius: 16px;
  padding: 20px;

  .venda-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

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

    .content {
      display: flex;
      flex-direction: column;
      gap: 6px;

      > span {
        color: ${CINZA_50};
        font-weight: 500;
      }

      > h2 {
        color: ${BRANCO_100};
        font-size: 20px;
        font-weight: 600;
      }
    }
  }

  .vendas-content {
    border-top: 1px solid ${CINZA_LINHA};
    margin-top: 20px;
    padding-top: 20px;

    > span {
      color: ${BRANCO_100};
      font-weight: 500;
      font-size: 16px;
    }

    .produto-venda {
      display: flex;
      gap: 10px;
      padding-top: 20px;

      .campo {
        display: flex;
        flex-direction: column;
        gap: 8px;

        label {
          color: ${CINZA_50};
          font-size: 14px;
          font-weight: 500;
        }
      }

      .qtd-container {
        width: 50px;
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
          width: 40px;
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
    }
  }
`;
