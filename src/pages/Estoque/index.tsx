import { Card } from "./Card";
import { Container, HeaderCards } from "./styles";
import { FiDollarSign } from "react-icons/fi";

export const Estoque = () => {
  return (
    <Container>
      <h1>Estoque</h1>

      <HeaderCards>
        <Card
          title={"Valor Total do Estoque"}
          headerText={"R$ 248.780,30"}
          icon={FiDollarSign}
          footerText={"12.5% em relação ao mês passado"}
        />
      </HeaderCards>
    </Container>
  );
};
