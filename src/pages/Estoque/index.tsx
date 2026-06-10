import { AiFillCaretUp } from 'react-icons/ai';
import { Card } from './Card';
import { Container, Line, InnerContainer, TabelaEstoque, TabelaMovimentações } from './styles';
import { FiDollarSign } from 'react-icons/fi';
import { FiTag } from 'react-icons/fi';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { AiFillCaretDown } from 'react-icons/ai';
import {
  AZUL_100,
  AZUL_50,
  LARANJA_100,
  LARANJA_50,
  ROXO_100,
  ROXO_40,
  VERMELHO_100,
  VERMELHO_50,
} from '../../utils/constants';
import { FiXCircle } from 'react-icons/fi';
import { useState, type JSX } from 'react';
import { MdWarningAmber } from 'react-icons/md';

const TipoMovimentacao = {
  ENTRADA: 'Entrada',
  SAIDA: 'Saída',
} as const;

const COLORS = ['#7C3AED', '#2563EB', '#22C55E', '#F59E0B', '#EF4444'];

type EstoqueItem = {
  title: string;
  desc: string;
  estoque: number;
  categoria: string;
};

type MovimentacoesItem = {
  produto: string;
  tipoMovimentacao: (typeof TipoMovimentacao)[keyof typeof TipoMovimentacao];
  quantidade: number;
  data: string;
};

export const Estoque = () => {
  const [itens, setItens] = useState<EstoqueItem[]>([
    {
      title: 'Mouse Gamer Pro',
      desc: 'Estoque baixo',
      estoque: 8,
      categoria: 'Informática',
    },
    {
      title: 'Teclado Mecânico RGB',
      desc: 'Sem estoque no momento',
      estoque: 0,
      categoria: 'Informática',
    },
    {
      title: 'Headset Surround 7.1',
      desc: 'Estoque normal',
      estoque: 24,
      categoria: 'Eletrônicos',
    },
    {
      title: 'Cadeira Gamer Elite',
      desc: 'Últimas unidades disponíveis',
      estoque: 3,
      categoria: 'Móveis',
    },
    {
      title: 'Mousepad XL Speed',
      desc: 'Estoque baixo',
      estoque: 5,
      categoria: 'Acessórios',
    },
  ]);
  const [movimentacoes, setMovimentacoes] = useState<MovimentacoesItem[]>([
    {
      produto: 'Teclado Mecânico RGB',
      tipoMovimentacao: TipoMovimentacao.ENTRADA,
      quantidade: 50,
      data: '23/05/2026 14:30',
    },
    {
      produto: 'Mouse Gamer Pro',
      tipoMovimentacao: TipoMovimentacao.SAIDA,
      quantidade: 8,
      data: '23/05/2026 15:10',
    },
    {
      produto: 'Headset Surround 7.1',
      tipoMovimentacao: TipoMovimentacao.ENTRADA,
      quantidade: 20,
      data: '24/05/2026 09:45',
    },
    {
      produto: 'Cadeira Gamer Elite',
      tipoMovimentacao: TipoMovimentacao.SAIDA,
      quantidade: 2,
      data: '24/05/2026 11:20',
    },
    {
      produto: 'Monitor UltraWide 29',
      tipoMovimentacao: TipoMovimentacao.ENTRADA,
      quantidade: 12,
      data: '24/05/2026 13:00',
    },
    {
      produto: 'Mousepad XL Speed',
      tipoMovimentacao: TipoMovimentacao.SAIDA,
      quantidade: 5,
      data: '25/05/2026 10:15',
    },
    {
      produto: 'Webcam Full HD',
      tipoMovimentacao: TipoMovimentacao.ENTRADA,
      quantidade: 18,
      data: '25/05/2026 14:40',
    },
    {
      produto: 'Notebook Gamer Nitro',
      tipoMovimentacao: TipoMovimentacao.SAIDA,
      quantidade: 1,
      data: '26/05/2026 16:05',
    },
    {
      produto: 'SSD NVMe 1TB',
      tipoMovimentacao: TipoMovimentacao.ENTRADA,
      quantidade: 35,
      data: '27/05/2026 08:50',
    },
    {
      produto: 'Fonte 750W Modular',
      tipoMovimentacao: TipoMovimentacao.SAIDA,
      quantidade: 4,
      data: '27/05/2026 17:25',
    },
  ]);

  function renderTipoMovimentacao(item: MovimentacoesItem): JSX.Element {
    if (item.tipoMovimentacao === TipoMovimentacao.ENTRADA) {
      return <span className="item-entrada">{item.tipoMovimentacao}</span>;
    }

    return <span className="item-saida">{item.tipoMovimentacao}</span>;
  }

  const totalEstoque = itens.reduce((acc, item) => acc + item.estoque, 0);

  const categorias = itens.reduce(
    (acc, item) => {
      const categoriaExistente = acc.find((cat) => cat.name === item.categoria);

      if (categoriaExistente) {
        categoriaExistente.value += item.estoque;
      } else {
        acc.push({
          name: item.categoria,
          value: item.estoque,
          percentage: 0,
        });
      }

      return acc;
    },
    [] as {
      name: string;
      value: number;
      percentage: number;
    }[]
  );

  categorias.forEach((categoria) => {
    categoria.percentage = Math.round((categoria.value / totalEstoque) * 100);
  });

  return (
    <Container>
      <h1>Estoque</h1>

      <Line>
        <Card
          title={'Valor Total do Estoque'}
          headerText={'R$ 248.780,30'}
          icon={FiDollarSign}
          footerValue={'12.5%'}
          footerText={'em relação ao mês passado'}
          valueIcon={AiFillCaretUp}
          color={`${ROXO_40}`}
          bgColor={`${ROXO_100}`}
        />

        <Card
          title={'Produtos em Estoque'}
          headerText={'1080'}
          icon={FiTag}
          footerValue={'8.2%'}
          footerText={'em relação ao mês passado'}
          valueIcon={AiFillCaretUp}
          bgColor={`${AZUL_100}`}
          color={`${AZUL_50}`}
        />

        <Card
          title={'Estoque Baixo'}
          headerText={'23'}
          icon={MdWarningAmber}
          footerValue={'5.3%'}
          footerText={'em relação ao mês passado'}
          valueIcon={AiFillCaretDown}
          bgColor={`${LARANJA_50}`}
          color={`${LARANJA_100}`}
        />

        <Card
          title={'Produtos em Estoque'}
          headerText={'1080'}
          icon={FiXCircle}
          footerValue={'8.2%'}
          footerText={'em relação ao mês passado'}
          valueIcon={AiFillCaretDown}
          bgColor={`${VERMELHO_50}`}
          color={`${VERMELHO_100}`}
        />
      </Line>

      <Line>
        <InnerContainer>
          <header>
            <h3>Distribuição do Estoque</h3>
          </header>

          <div className="grafico-container">
            <div className="grafico">
              <ResponsiveContainer width={300} height={300}>
                <PieChart>
                  <Pie
                    data={categorias}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {categorias.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className="grafico-total">
                <strong>{itens.reduce((acc, item) => acc + item.estoque, 0)}</strong>

                <span>Total</span>
              </div>
            </div>

            <div className="legenda">
              {categorias.map((categoria, index) => (
                <div className="legenda-item" key={categoria.name}>
                  <div className="left">
                    <span
                      className="cor"
                      style={{
                        backgroundColor: COLORS[index % COLORS.length],
                      }}
                    />

                    <p>{categoria.name}</p>
                  </div>

                  <span className="porcentagem-total">
                    {categoria.percentage}% ({categoria.value})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </InnerContainer>

        <InnerContainer>
          <header>
            <h3>Alertas de Estoque</h3>
          </header>

          <TabelaEstoque>
            <tbody>
              {itens.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="col-icon">
                      <div
                        className={`td-icon ${
                          item.estoque === 0 ? 'sem-estoque' : 'estoque-baixo'
                        }`}
                      >
                        {item.estoque === 0 ? <FiXCircle /> : <MdWarningAmber />}
                      </div>
                    </td>

                    <td className="col-desc">
                      <div className="td-content">
                        <span className="title">{item.title}</span>
                        <span className="content">{item.desc}</span>
                      </div>
                    </td>

                    <td className="col-estoque">
                      <span className="td-estoque">{item.estoque} un.</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </TabelaEstoque>
        </InnerContainer>
      </Line>

      <Line>
        <InnerContainer>
          <header>
            <h3>Movimentações Recentes</h3>
          </header>

          <TabelaMovimentações>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Tipo</th>
                <th>Quantidade</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {movimentacoes.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.produto}</td>
                    <td>{renderTipoMovimentacao(item)}</td>
                    <td>{`${item.quantidade} un.`}</td>
                    <td>{item.data}</td>
                  </tr>
                );
              })}
            </tbody>
          </TabelaMovimentações>
        </InnerContainer>
      </Line>
    </Container>
  );
};
