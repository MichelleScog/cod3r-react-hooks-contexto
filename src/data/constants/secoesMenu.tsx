import {
  IconAppWindow,
  IconArrowsLeftRight,
  IconDimensions,
  IconLetterCase,
  IconLock,
  IconMathGreater,
  IconNumbers,
  IconRefreshAlert,
  IconShoppingCart,
  IconUsers,
} from "@tabler/icons-react";

export const secoes = [
  {
    titulo: "Essenciais",
    aberta: true,
    itens: [
      {
        titulo: "Contador",
        url: "/essenciais/contador",
        tag: "useState",
        icone: <IconNumbers />,
      },
      {
        titulo: "Votação",
        url: "/essenciais/votacao",
        tag: "useState",
        icone: <IconUsers />,
      },
      {
        titulo: "Consulta à API",
        url: "/essenciais/consultaApi",
        tag: "useEffect",
        icone: <IconArrowsLeftRight />,
      },
      {
        titulo: "Maior",
        url: "/essenciais/maior",
        tag: "useEffect",
        icone: <IconMathGreater />,
      },
      {
        titulo: "Contagem Caracteres",
        url: "/essenciais/contagemCaracteres",
        tag: "useEffect",
        icone: <IconLetterCase />,
      },
      {
        titulo: "State Vs Referência",
        url: "/essenciais/stateVsRef",
        tag: "useRef",
        icone: <IconRefreshAlert />,
      },
    ],
  },
  {
    titulo: "Personalizados",
    aberta: true,
    itens: [
      {
        titulo: "Modal",
        url: "/personalizados/modal",
        tag: "personalizados",
        icone: <IconAppWindow />,
      },
      {
        titulo: "Tamanho Janela",
        url: "/personalizados/tamanhoJanela",
        tag: "personalizados",
        icone: <IconDimensions />,
      },
      {
        titulo: "Validando Senha",
        url: "/personalizados/senha",
        tag: "personalizados",
        icone: <IconLock />,
      },
    ],
  },
  {
    titulo: "Contexto",
    aberta: true,
    itens: [
      {
        titulo: "Loja",
        url: "/contexto/loja",
        tag: "useContext",
        icone: <IconShoppingCart />,
      },
    ],
  },
];

export default secoes;
