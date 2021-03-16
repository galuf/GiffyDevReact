import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  const { keyword } = params;

  const [gifs, setGifs] = useState([]);
  // Cuando se renderiza un componente ?
  // En un cambio de estado se vuelve a renderizar el componente
  // Tambien cuando recibe props, no importa aque sean las mismas o diferentes.
  useEffect(() => {
    // Sin el segundo parametro -> El efecto se ejecuta cada ves q se renderiza el componente
    console.log("Ejecucion");

    //LLAMADA A UN API
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);
  // UseEffect -> recive dos parametros 1er (funcion a ejecutar)
  // -> 2do ( dependencias del efecto, (variables que si cambian debe ejecutar el efecto)) se define como array
  // si el segundo es [], esto nos indicara que solo se ejecutara una vez
  // didMount() == useEfect(()=>{},[])

  return (
    <>
      {gifs.map(({ title, url, id }) => {
        return <Gif key={id} title={title} id={id} url={url} />;
      })}
    </>
  );
}
