// MenuLateral/index.tsx

import {
  FiBox,
  FiGrid,
  FiMenu,
  FiPackage,
  FiShoppingCart,
} from "react-icons/fi";

import { useState } from "react";

import { MenuButton } from "../MenuButton";

import { Container, MenuContainer } from "./styles";

export const MenuLateral = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <Container $showMenu={showMenu}>
      <header>
        {showMenu && <h1>TSecrets</h1>}

        <button onClick={() => setShowMenu((prev) => !prev)}>
          <FiMenu size={24} />
        </button>
      </header>

      <MenuContainer>
        <MenuButton nome="Dashboard" icon={FiGrid} showMenu={showMenu} />

        <MenuButton nome="Vendas" icon={FiShoppingCart} showMenu={showMenu} />

        <MenuButton nome="Estoque" icon={FiPackage} showMenu={showMenu} />

        <MenuButton nome="Produtos" icon={FiBox} showMenu={showMenu} />
      </MenuContainer>

      <footer>
        {showMenu ? "Criado por Thiago vanzele o GATO MIAUUUUU" : "MIAU"}
      </footer>
    </Container>
  );
};
