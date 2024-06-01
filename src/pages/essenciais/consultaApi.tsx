/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  const [url, setUrl] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((obj) => {
        console.log("Foto atualizada");
        setUrl(obj.message);
      });
  }, []);

  return (
    <Pagina titulo="Requisição à API" subtitulo="Requerindo dados">
      <img className="nax-w-sm" src={url}></img>
    </Pagina>
  );
}
