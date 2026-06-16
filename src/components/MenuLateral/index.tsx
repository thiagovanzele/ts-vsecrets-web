import { FiBox, FiGrid, FiMenu, FiPackage, FiShoppingCart } from 'react-icons/fi';

import { useState } from 'react';

import { MenuButton } from '../MenuButton';
import { HiOutlineSparkles } from 'react-icons/hi';
import { Container, MenuContainer } from './styles';
import { useNavigate } from 'react-router-dom';

export const MenuLateral = () => {
  const [showMenu, setShowMenu] = useState(true);
  const navigate = useNavigate();

  return (
    <Container $showMenu={showMenu}>
      <header>
        {showMenu && (
          <div className="logo">
            <h1>VELARIS</h1> <HiOutlineSparkles size={20} color="#e2c028" />
          </div>
        )}

        <button onClick={() => setShowMenu((prev) => !prev)}>
          <FiMenu size={24} />
        </button>
      </header>

      <MenuContainer>
        <MenuButton nome="Dashboard" icon={FiGrid} showMenu={showMenu} />

        <MenuButton nome="Vendas" icon={FiShoppingCart} showMenu={showMenu} />

        <MenuButton
          onClick={() => navigate('/estoque')}
          nome="Estoque"
          icon={FiPackage}
          showMenu={showMenu}
        />

        <MenuButton
          onClick={() => navigate('/produtos')}
          nome="Produtos"
          icon={FiBox}
          showMenu={showMenu}
        />
      </MenuContainer>

      <footer>{showMenu ? `Github: thiagovanzele` : 'TV'}</footer>
    </Container>
  );
};
