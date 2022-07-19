import {fireEvent, prettyDOM, render,screen} from '@testing-library/react'
import {AgregarCategoria} from '../../components/AgregarCategoria'

describe('<AgregarCategoria/>', () => { 

    test('Debe cambiar el valor del input', () => {

        render(<AgregarCategoria agregar={()=>{}} cantidad={()=>{}}/>)

        //screen.debug();

        const input = screen.getByPlaceholderText('Buscar...');
        const inputCantidad = screen.getByPlaceholderText('Cantidad...');


        //console.log(input)

        fireEvent.change( input, {target:{value:'Goku'}} );
        fireEvent.change( inputCantidad, {target:{value:'5'}});

        expect(input.value).toBe('Goku');
        expect(inputCantidad.value).toBe('5');

    })

    test('Debe llamar la funcion agregar y cantidad si el input tiene valor', () => {

        const inputText = 'Goku';
        const inputNumber = '5';
        const agregar = jest.fn();
        const cantidad = jest.fn();

        render(<AgregarCategoria agregar={agregar} cantidad={cantidad}/>)

        const inputCategoria = screen.getByPlaceholderText('Buscar...');
        const inputCantidad = screen.getByPlaceholderText('Cantidad...');
        const form = screen.getByRole('form');

        fireEvent.change( inputCategoria, {target:{value:inputText}} );
        fireEvent.change( inputCantidad, {target:{value:inputNumber}} );
        fireEvent.submit( form );

        screen.debug();

        expect(inputCategoria.value).toBe('');
        expect(agregar).toHaveBeenCalled();
        expect(agregar).toHaveBeenCalledTimes(1);
        expect(agregar).toHaveBeenCalledWith(inputText);

        expect(inputCantidad.value).toBe('0');
        expect(cantidad).toHaveBeenCalled();
        expect(cantidad).toHaveBeenCalledTimes(1);
        expect(cantidad).toHaveBeenCalledWith(inputNumber);

    })

    test('No debe llamar la funcion agregar si el input esta vacio', () => {  

        const agregar = jest.fn();
        const cantidad = jest.fn();

        render(<AgregarCategoria agregar={agregar} cantidad={cantidad}/>)

        const form = screen.getByRole('form');
        fireEvent.submit(form)

        expect(agregar).toHaveBeenCalledTimes(0);
    })

})