import {render,screen} from "@testing-library/react";
import { App,handleAddCategory } from "../../App";

describe("<App/>", () => {

  let navbar,agregarCategoria,btnReset;

  beforeEach(()=>{
    render(<App/>)
    navbar = screen.getByTestId('navbar');
    agregarCategoria = screen.getByTestId('agregarCategoria');
    btnReset = screen.getByTestId('btnReset');
  })

  test("Verificar que contenga cada componente", () => {

    expect(navbar).toBeInTheDocument();
    expect(agregarCategoria).toBeInTheDocument();
    expect(btnReset).toBeInTheDocument();

  });

  test('Verificar Estado inicial', () => { 
    screen.debug()
    expect(screen.getByText('GIF APP')).toBeInTheDocument();
    expect(screen.getByTestId('inputText').value).toBe('');
    expect(screen.getByTestId('inputNumber').value).toBe('0');
    expect(screen.getByTestId('btnReset')).toBeInTheDocument();
  })
});
