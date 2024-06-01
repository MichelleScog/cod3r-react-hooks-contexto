import { useEffect, useState } from "react";
import Pagina from "@/components/template/Pagina";
import Display from "@/components/template/Display";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  const quantidadeCaracteres = 400;
  const [caracteresRestantes, setcaracteresRestantes] =
    useState(quantidadeCaracteres);
  const [texto, setTexto] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      let aux = quantidadeCaracteres - texto.length;
      setcaracteresRestantes(aux);
      console.log("Atualizei");
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [texto]);

  return (
    <Pagina
      titulo="Contagem de Caracteres"
      subtitulo="Entendendo as funções de limpeza"
    >
      <Display
        texto="Digite o texto"
        textoComplementar={`${caracteresRestantes} caracteres restantes`}
      />
      <textarea
        value={texto}
        onInput={(e) => {
          setTexto(e.currentTarget.value);
        }}
        className={`border border-zinc-700 bg-zinc-700 text-white text-2xl w-3/5 h-72 rounded p-5`}
      ></textarea>
    </Pagina>
  );
}
