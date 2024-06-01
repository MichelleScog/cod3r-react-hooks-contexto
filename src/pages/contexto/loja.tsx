/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import AdicionarProduto from "@/components/loja/AdicionarProduto";
import Carrinho from "@/components/loja/Carrinho";
import FinalizarCompra from "@/components/loja/FinalizarCompra";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState, createContext } from "react";

export let Contexto = createContext({} as any);

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  const [carrinho, setCarrinho] = useState<any>([]);
  const ctx = {
    carrinho,
    setCarrinho,
    total() {
      const r = carrinho.reduce((acc, produto) => acc + +produto.preco, 0);
      return r;
    },
  };

  return (
    <Contexto.Provider value={{ ctx }}>
      <Pagina
        titulo="Loja"
        subtitulo="Compartilhando informações entre múltiplos componentes com contexto."
      >
        <Flex col gap={4}>
          <Flex gap={4}>
            <AdicionarProduto />
            <FinalizarCompra />
          </Flex>
          <Carrinho />
        </Flex>
      </Pagina>
    </Contexto.Provider>
  );
}
