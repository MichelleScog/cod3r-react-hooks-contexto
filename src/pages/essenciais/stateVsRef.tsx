/* eslint-disable import/no-anonymous-default-export */
import { useRef, useState } from "react";
import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import Flex from "@/components/template/Flex";
import Botao from "@/components/template/Botao";

// eslint-disable-next-line react/display-name
export default function () {
  const [estado, setEstado] = useState(0);
  const referencia = useRef(0);

  function incrementaReferencia() {
    referencia.current = referencia.current + 1;
  }

  return (
    <Pagina titulo="Referência Vs State" subtitulo="Entendendo useRef">
      <Display texto={`R: ${referencia.current} | S: ${estado}`} />
      <Flex gap={5}>
        <Botao
          texto="R+"
          cor="bg-pink-500"
          redondo
          tamanho="2xl"
          onClick={() => incrementaReferencia()}
        ></Botao>
        <Botao
          texto="S+"
          cor="bg-green-500"
          redondo
          tamanho="2xl"
          onClick={() => setEstado(estado + 1)}
        ></Botao>
      </Flex>
    </Pagina>
  );
}
