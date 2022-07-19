import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchApi = (categoria,cantidad) => {
    const [imagenes, setImagenes] = useState([]);

    const[loading, setLoading] = useState(true);

  
    const getImages = async ()=>{
      const nuevasImagenes = await getGifs(categoria,cantidad);
      setImagenes(nuevasImagenes); 
      setLoading(false);
    }
  
    useEffect(() => {
      getImages()
    }, [])

  return{
    imagenes,
    loading,
  } ;
}
