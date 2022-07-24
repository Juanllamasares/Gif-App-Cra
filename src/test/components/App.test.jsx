import {act, render,renderHook,screen} from "@testing-library/react";
import { App } from "../../App";
import { useCategorias } from "../../hooks/useCategorias";

describe("<App/>", () => {


  test("Verificar que contenga cada componente", () => {
    render(<App/>)
    let navbar,agregarCategoria,btnReset;

    navbar = screen.getByTestId('navbar');
    agregarCategoria = screen.getByTestId('agregarCategoria');
    btnReset = screen.getByTestId('btnReset');

    expect(navbar).toBeInTheDocument();
    expect(agregarCategoria).toBeInTheDocument();
    expect(btnReset).toBeInTheDocument();

  });

  test('Verificar Estado inicial', () => { 
    const {result} = renderHook(()=>useCategorias());

    const {categorias,cantidad} = result.current;

    //console.log(result);

    expect(categorias).toStrictEqual([]);
    expect(cantidad).toStrictEqual(0);
  })

  test('Verificar cambios en categorias: agregar categoria y cantidad', () => {

    const {result} = renderHook(()=>useCategorias());
    
    act(()=>{
      result.current.agregarCategoria('dbz');
      result.current.agregarCantidad(5);
    })

    expect(result.current.categorias).toStrictEqual(['dbz']);
    expect(result.current.cantidad).toStrictEqual(5);
  })

  test('Verificar cambios en categorias: eliminar categoria', () => { 
    const {result} = renderHook(()=>useCategorias());

    act(()=>{
      result.current.agregarCategoria('dbz');
      result.current.eliminarCategoria('dbz');
    })
    expect(result.current.categorias).toStrictEqual([]);
  })

  test('Verificar cambios en categorias: resetear categorias', () => {  
    const {result} = renderHook(()=>useCategorias());

    act(()=>{
      result.current.categorias = ['dbz','got'];
      result.current.resetearCategorias();
    })
    //console.log(result.current.categorias);
    expect(result.current.categorias).toStrictEqual([]);
  })
});
