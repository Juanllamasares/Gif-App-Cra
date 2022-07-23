import React from 'react';
import { Navbar } from './components/Navbar';
import { AgregarCategoria } from './components/AgregarCategoria';
import { Categoria } from './components/Categoria';
import './hojas-de-estilo/App.css';
import { useState } from 'react';
import { BotonReset } from './components/BotonReset';

export const App = () => {

  /*USESTATES*/
  const [categorias, setCategorias] = useState([]);

  const [cantidad, setCantidad] = useState(0);

  /*FUNCIONES*/

  /*AGREGAR CATEGORIA*/
  const handleAddCategory = (categoria)=>{
    setCategorias([categoria,...categorias]);
  }


  /*ELIMINAR CATEGORIA*/
  const handleRemoveCategory = (categoria)=>{
    setCategorias(categorias.filter((ct) => ct !== categoria));
  }

  /*RESETEAR*/
  const handleResetCategorys = ()=>{
    setCategorias([]);
  }

  return (
    <div className='app-container'>
        <Navbar/>
        <AgregarCategoria agregar={handleAddCategory} cantidad={setCantidad}/>
        <BotonReset reiniciar={handleResetCategorys}/>
        {
          categorias.map(categoria=><Categoria key={categoria} categoria={categoria} borrar={handleRemoveCategory} cantidad={cantidad}/>)
        }
    </div>
  )
}
