import { FiChevronDown, FiEdit2, FiSearch, FiTrash2, FiX } from 'react-icons/fi';
import { Card } from '../Estoque/Card';
import { Container, InnerContainer, Line, VendaContainer } from './style';
import { AMARELO_60, CINZA_50, CINZA_LINHA_CLARO, VERMELHO_60 } from '../../utils/constants';
import { useState, type JSX } from 'react';

export type StatusProduto = 'Em Estoque' | 'Estoque Baixo' | 'Sem Estoque';

interface Produto {
  id: number;
  nome: string;
  categoria: string;
  estoque: number;
  preco: number;
  status: StatusProduto;
}

export const Vendas = () => {
  const [showModal, setShowModal] = useState(false);
  const [textoBusca, setTextoBusca] = useState('');
  const [productSelected, setProductSelect] = useState<Produto | null>(null);
  const [produtos, setProdutos] = useState<Produto[]>([
    {
      id: 1,
      nome: 'Body Splash Bare Vanilla',
      categoria: 'Body Splash',
      estoque: 25,
      preco: 159.9,
      status: 'Em Estoque',
    },
    {
      id: 2,
      nome: 'Body Splash Pure Seduction',
      categoria: 'Body Splash',
      estoque: 7,
      preco: 159.9,
      status: 'Estoque Baixo',
    },
    {
      id: 3,
      nome: 'Creme Coconut Passion',
      categoria: 'Hidratante',
      estoque: 0,
      preco: 89.9,
      status: 'Sem Estoque',
    },
  ]);

  const isFormValid =
    productSelected !== null &&
    productSelected.nome.trim().length > 0 &&
    productSelected.categoria.trim().length > 0 &&
    productSelected.estoque > 0 &&
    productSelected.preco > 0;

  const isEditing = productSelected !== null && productSelected.id !== 0;

  const obterStatus = (estoque: number): StatusProduto => {
    if (estoque === 0) return 'Sem Estoque';
    if (estoque <= 10) return 'Estoque Baixo';
    return 'Em Estoque';
  };

  const selecionarProduto = (produto: Produto): void => {
    setProductSelect(produto);
    setShowModal(true);
  };

  const adicionarProduto = (): void => {
    setShowModal(true);
    setProductSelect({
      id: 0,
      nome: '',
      categoria: '',
      estoque: 0,
      preco: 0,
      status: 'Sem Estoque',
    });
  };

  const excluirProduto = (id: number): void => {
    setProdutos((prev) => prev.filter((produto) => produto.id !== id));
  };

  const handleSaveBtn = (): void => {
    if (!productSelected) return;

    const produtoAtualizado: Produto = {
      ...productSelected,
      status: obterStatus(productSelected.estoque),
    };

    if (isEditing) {
      setProdutos((prev) =>
        prev.map((produto) => (produto.id === produtoAtualizado.id ? produtoAtualizado : produto))
      );
    } else {
      const novoProduto: Produto = {
        ...produtoAtualizado,
        id: Date.now(),
      };

      setProdutos((prev) => [...prev, novoProduto]);
    }

    setShowModal(false);
    setProductSelect(null);
  };

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(textoBusca.toLowerCase())
  );

  const renderModalHeader = (): JSX.Element => {
    if (isEditing) {
      return (
        <>
          <h4>Editar Produto</h4>
          <span>Altere as informações do produto abaixo.</span>
        </>
      );
    }

    return (
      <>
        <h4>Adicionar Produto</h4>
        <span>Insira as informações do produto abaixo.</span>
      </>
    );
  };

  return (
    <Container>
      <h1>Vendas</h1>

      <Line>
        <Card
          title={'Total de Produtos'}
          headerText={'1.250'}
          footerValue={'3.1%'}
          footerText="em relação ao mês passado"
          width="250px"
        />

        <Card
          title={'Em estoque'}
          headerText={'1.080'}
          footerValue={'86%'}
          footerText="do total"
          width="250px"
        />

        <Card
          title={'Estoque Baixo'}
          headerText={'23'}
          footerValue={'1.8%'}
          footerText="do total"
          width="250px"
        />

        <Card
          title={'Sem Estoque'}
          headerText={'147'}
          footerValue={'11.8%'}
          footerText="do total"
          width="250px"
        />
      </Line>

      <Line>
        <div className="input-container">
          <FiSearch size={18} color={`${CINZA_LINHA_CLARO}`} />

          <input
            type="text"
            value={textoBusca}
            onChange={(e): void => setTextoBusca(e.target.value)}
            placeholder="Buscar produto..."
          />
        </div>

        <div className="container-botao">
          <button onClick={(): void => adicionarProduto()} className="btn-adicionar-produto">
            + Novo Produto
          </button>
        </div>
      </Line>

      <InnerContainer>
        {/* <TabelaProdutos>
          <thead>
            <tr>
              <th colSpan={2}>Produto</th>
              <th>Categoria</th>
              <th>Estoque</th>
              <th>Preço</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {produtosFiltrados.length > 0 ? (
              produtosFiltrados.map((produto) => (
                <tr key={produto.id}>
                  <td colSpan={2}>{produto.nome}</td>
                  <td>{produto.categoria}</td>
                  <td>{produto.estoque}</td>
                  <td>
                    {produto.preco.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </td>
                  <td>
                    <Status status={produto.status}>{produto.status}</Status>
                  </td>
                  <td className="actions-container">
                    <button
                      className="botao-editar"
                      onClick={(): void => selecionarProduto(produto)}
                    >
                      <FiEdit2 size={18} color={`${AMARELO_60}`} />
                    </button>
                    <button className="botao-excluir" onClick={() => excluirProduto(produto.id)}>
                      <FiTrash2 size={18} color={VERMELHO_60} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>
                  <span>Nenhum produto encontrado</span>
                </td>
              </tr>
            )}
          </tbody>
        </TabelaProdutos> */}
      </InnerContainer>

      {!showModal && (
        <VendaContainer>
          <div className="venda-header">
            <div className="content">
              <h2>Nova venda</h2>
              <span>Preencha os dados da venda abaixo.</span>
            </div>
            <button className="btn-fechar">
              <FiX color={`${CINZA_50}`} size={24} />
            </button>
          </div>

          <div className="vendas-content">
            <span>Itens da Venda</span>

            <div className="produto-venda">
              <div className="campo">
                <label>Produto</label>

                <div className="select-container">
                  <select
                    onChange={(e) =>
                      setProductSelect((prev) =>
                        prev
                          ? {
                              ...prev,
                              categoria: e.target.value,
                            }
                          : prev
                      )
                    }
                  >
                    <option value="">Selecione o produto</option>
                    <option value="Informática">Informática</option>
                    <option value="Eletrônicos">Eletrônicos</option>
                    <option value="Acessórios">Acessórios</option>
                    <option value="Body Splash">Body Splash</option>
                    <option value="Hidratante">Hidratante</option>
                  </select>

                  <FiChevronDown size={18} className="select-icon" />
                </div>
              </div>

              <div className="campo">
                <label>Qtd.</label>

                <div className="qtd-container">
                  <input
                    type="number"
                    onChange={(e) =>
                      setProductSelect((prev) =>
                        prev
                          ? {
                              ...prev,
                              estoque: e.target.value === '' ? 0 : Number(e.target.value),
                            }
                          : prev
                      )
                    }
                  />
                </div>
              </div>

              <div className="campo">
                <label>Preço</label>

                <div className="preco-container">
                  <span>R$</span>

                  <input
                    disabled={true}
                    type="number"
                    step="0.01"
                    onChange={(e) =>
                      setProductSelect((prev) =>
                        prev
                          ? {
                              ...prev,
                              preco: e.target.value === '' ? 0 : Number(e.target.value),
                            }
                          : prev
                      )
                    }
                    placeholder="0,00"
                  />
                </div>
              </div>
            </div>
          </div>
        </VendaContainer>
      )}
    </Container>
  );
};
