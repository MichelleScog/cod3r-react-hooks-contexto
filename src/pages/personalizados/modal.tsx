import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import useToggle from "@/data/hooks/useToggle";
import { IconX } from "@tabler/icons-react";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  const [mostrar, toggleMostrar] = useToggle(false);

  return (
    <Pagina
      titulo="Modal"
      subtitulo="Usando um hook personalizado para abrir e fechar uma modal"
    >
      <Botao texto="Abrir" cor="bg-cyan-500" onClick={toggleMostrar} />
      {mostrar ? (
        <Flex
          col
          center
          className={`w-80 h-80 bg-gray-500 text-white text-2xl p-4 m-4 rounded-md`}
        >
          <Botao
            cor="bg-red-700"
            tamanho="xl"
            icone={<IconX />}
            onClick={toggleMostrar}
          />
          <h1 className="mt-5">Clique em X para sair</h1>
        </Flex>
      ) : (
        ""
      )}
    </Pagina>
  );
}