import {render,screen,fireEvent} from "@testing-library/react";
import { App } from "../../App";

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

  
});
