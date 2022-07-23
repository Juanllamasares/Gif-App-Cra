import React from "react";
import "../hojas-de-estilo/Categoria.css";
import { useFetchApi } from "../hooks/useFetchApi";
import { Gif } from "./Gif";
import { PropTypes } from 'prop-types'

export const Categoria = ({ categoria, borrar, cantidad }) => {
  
    /*LLAMANDO A LA FUNCION FETCHAPI*/
  
  const { imagenes, loading } = useFetchApi(categoria, cantidad);
  
  loading?document.body.style.cursor='wait':document.body.style.cursor='';
  
  return (
    
    <div className={loading ? "hidden" : "category"} data-testid='categoria'>
      <div className="category-title">
        <h2>{categoria}</h2>
        <button
          onClick={() => borrar(categoria)}
          className={loading ? "" : "delete"}
        >
          Eliminar
        </button>
      </div>
      <div className="gifs-container">
        {imagenes.map((imagen) => (
          <Gif key={imagen.id} {...imagen} />
        ))}
      </div>
    </div>
  );
};

Categoria.propTypes = {
  categoria : PropTypes.string.isRequired,
  borrar : PropTypes.func.isRequired,
}