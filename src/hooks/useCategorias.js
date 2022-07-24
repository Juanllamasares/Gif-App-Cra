import { useState } from 'react'


export const useCategorias = () => {
    const [cantidad, setCantidad] = useState(0);
    const [categorias, setCategorias] = useState([]);


    const agregarCantidad = (num)=>{
        setCantidad(num);
    }

    const agregarCategoria = (categoria)=>{
        setCategorias([categoria,...categorias]);
    }

    const eliminarCategoria = (categoria)=>{
        setCategorias(categorias.filter((ct) => ct !== categoria));
    }

    const resetearCategorias = ()=>{
        setCategorias([]);
    }

  return {categorias,cantidad,agregarCategoria,agregarCantidad,eliminarCategoria,resetearCategorias};
}
