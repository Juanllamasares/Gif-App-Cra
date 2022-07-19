import { fireEvent, render, screen } from "@testing-library/react"
import { BotonReset } from "../../components/BotonReset"

describe('Tests de componente BotonReset', () => {  

    test('Debe ejecutar la funcion reiniciar al dar click', () => {  
        const reiniciar = jest.fn();

        render(<BotonReset reiniciar={reiniciar}/>)

        const btn = screen.getByRole('img');

        //console.log(btn);

        fireEvent.click(btn);

        expect(reiniciar).toHaveBeenCalled();
        expect(reiniciar).toHaveBeenCalledTimes(1);
    })

})