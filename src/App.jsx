import React from 'react';
import { Navbar } from './components/Navbar';
import { AgregarCategoria } from './components/AgregarCategoria';
import { Categoria } from './components/Categoria';
import './hojas-de-estilo/App.css';
//import { useState } from 'react';
import { BotonReset } from './components/BotonReset';
import { useCategorias } from './hooks/useCategorias';

export const App = () => {

  const {categorias,cantidad,agregarCategoria,agregarCantidad,eliminarCategoria,resetearCategorias} = useCategorias();

  return (
    <div className='app-container'>
        <Navbar/>
        <AgregarCategoria agregar={agregarCategoria} cantidad={agregarCantidad}/>
        <BotonReset reiniciar={resetearCategorias}/>
        {
          categorias.map(categoria=><Categoria key={categoria} categoria={categoria} borrar={eliminarCategoria} cantidad={cantidad}/>)
        }
    </div>
  )
}
