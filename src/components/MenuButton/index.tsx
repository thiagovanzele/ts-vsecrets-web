// MenuButton/index.tsx

import type { IconType } from 'react-icons';
import { Container, Nome } from './styles';

interface MenuButtonProps {
  nome: string;
  icon: IconType;
  showMenu: boolean;
  onClick?: () => void;
}

export const MenuButton = ({ nome, icon: Icon, showMenu, onClick }: MenuButtonProps) => {
  return (
    <Container onClick={onClick} $showMenu={showMenu}>
      <Icon size={22} />

      {showMenu && <Nome>{nome}</Nome>}
    </Container>
  );
};
