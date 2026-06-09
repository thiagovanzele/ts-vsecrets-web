import styled from "styled-components";
import { AZUL_MARINHO_100, BRANCO_100 } from "../../utils/constants";

export const Container = styled.div`
  display: flex;
  background-color: ${AZUL_MARINHO_100};
  width: 100%;
  height: 100vh;
  flex-direction: column;
  padding: 20px 30px;

  > h1 {
    color: ${BRANCO_100};
    height: 70px;
    font-size: 25px;
  }
`;

export const HeaderCards = styled.div`
    display: flex;
`
