import React from "react";
import { useState } from "react";
import btnBorrar from "../assets/close.png";
import descargar from "../assets/download.png";
import "../hojas-de-estilo/Gif.css";
import PropTypes from 'prop-types'

export const Gif = ({ title, url, id }) => {

  const [state, setState] = useState(false);

  
    /*FUNCION DESCARGAR GIF*/
  
  const handleDownload = (url) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
      let urlCreator = window.URL || window.webkitURL;
      let imageUrl = urlCreator.createObjectURL(this.response);
      let tag = document.createElement("a");
      tag.href = imageUrl;
      tag.download = title.charAt(0).toUpperCase() + title.slice(1);
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
    };
    xhr.send();
  };

  const ocultarItem = (id) => {
    const item = document.getElementById(`${id}`);
    item.style.display = `none`;
  };

  const toggle = () => {
    setState(!state);
  };

  return (
    <div className="gif-card" id={`${id}`} data-testid='gif'>
      <div className="btns-container">
        <button>
          <img data-testid='imgDownload' onClick={() => handleDownload(url)}
          className="img-download"
          src={descargar}
          alt="img-descargar"/>
        </button>
        <button>
          <img className="img-close"
          onClick={() => ocultarItem(id)}
          src={btnBorrar}
          alt="img-borrar"/>
        </button>
      </div>
      <div onClick={toggle} className={state?'modal-on':'modal-off'}>
        <img className={state?'img-modal':"img-gif"} src={url} alt="img-gif"/>
      </div>
    </div>
  );
};

Gif.propTypes = {
  title:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
  id:PropTypes.string.isRequired
}