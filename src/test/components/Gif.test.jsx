import { Gif } from '../../components/Gif'
import { render,screen } from '@testing-library/react'

describe('<Gif/>', () => {  

    const title = 'dbz';
    const url = 'https://dbz.com/goku.png';
    const id = '1';


    test('Debe contener una imagen con la url y alt', () => {
        render(<Gif title={title} url={url} id={id}/>)

        //screen.debug();

        //console.log(screen.getByAltText('img-gif'))

        const {src,alt} = screen.getByAltText('img-gif');

        expect(src).toContain(url);
        expect(alt).toContain('img-gif');

        
    })
})