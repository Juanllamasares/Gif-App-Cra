
import { render, renderHook, screen } from '@testing-library/react'
import {Categoria} from '../../components/Categoria'


describe('<Categoria/>', () => {
    
    const categoria = 'dbz';


    test('Debe mostrar nombre de la categoria si el loading es false', () => {    

        render(<Categoria categoria={categoria} borrar={()=>{}}/>)

        //screen.debug();

        let element = screen.getByTestId('categoria');

        element.className = 'category';

        //screen.debug();
        expect(screen.getByText(categoria)).toBeInTheDocument();

    })

    test('Debe encontrar un boton', () => { 

        const componente = render(<Categoria categoria={categoria} borrar={()=>{}}/>)

        expect(componente.getByRole('button')).toBeInTheDocument();
    })

})