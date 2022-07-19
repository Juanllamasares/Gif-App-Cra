import { renderHook } from '@testing-library/react'
import { useFetchApi } from '../../hooks/useFetchApi'

describe('Test en Hook useFetchApi', () => {  

    test('Debe regresar el estado inicial', () => {  
        const {result} = renderHook(()=>useFetchApi('dbz'));
        
        const {imagenes,loading} = result.current;

        expect(imagenes.length).toBe(imagenes.length = 0);
        expect (loading).toBe(true);
    })

})