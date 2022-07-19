import {getGifs} from '../../helpers/getGifs'

describe('getGifs', () => {  

    test('Debe retornar un arreglo de gifs',async () => {

        const categoria = 'dbz',cantidad = 3;

        const gifs = await getGifs(categoria,cantidad);

        console.log(gifs);

        expect(gifs.length).toEqual(cantidad);

        expect(gifs[0]).toEqual({id:expect.any(String) ,title:expect.any(String),url:expect.any(String)})
    })

})