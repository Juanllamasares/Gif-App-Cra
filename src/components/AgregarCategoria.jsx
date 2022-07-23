import React from "react";
import "../hojas-de-estilo/AgregarCategoria.css";
import lupa from "../assets/lupa.png";
import { useState } from "react";
import { PropTypes } from 'prop-types';

export const AgregarCategoria = ({ agregar,cantidad }) => {

    /*USESTATES*/
  const [inputValue, setInputValue] = useState("");

  const [inputCantidad, setInputCantidad] = useState(0);

    /*FUNCIONES*/

    /*CAPTURANDO VALOR DEL INPUT*/
  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleInputCantidad = ({target})=>{
    setInputCantidad(target.value);
  };

    /*ENVIANDO VALOR DEL INPUT*/

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return;
    if (inputCantidad===0) return;
    cantidad(inputCantidad);
    agregar(inputValue.trim());
    setInputCantidad(0);
    setInputValue("");
  };

  return (
    <div className="addCategory" data-testid='agregarCategoria'>
      <form onSubmit={handleOnSubmit} aria-label='form'>
        <input
          data-testid='inputText'
          type="text"
          placeholder="Buscar..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <input
          data-testid='inputNumber'
          className="cantidad" 
          type="number" 
          placeholder="Cantidad..."
          value={inputCantidad}
          onChange={handleInputCantidad}
        />
        <button type="send" onSubmit={handleOnSubmit}>
          <img className="lupa" src={lupa} alt="img-lupa" />
        </button>
      </form>
    </div>
  );
};

AgregarCategoria.propTypes = {
  agregar : PropTypes.func.isRequired,
  cantidad : PropTypes.func.isRequired
}