// MenuButton/index.tsx


import type { IconType } from "react-icons";
import { Container, Nome } from "./styles";

interface MenuButtonProps {
  nome: string;
  icon: IconType;
  showMenu: boolean;
}

export const MenuButton = ({
  nome,
  icon: Icon,
  showMenu,
}: MenuButtonProps) => {
  return (
    <Container $showMenu={showMenu}>
      <Icon size={22} />

      {showMenu && <Nome>{nome}</Nome>}
    </Container>
  );
};