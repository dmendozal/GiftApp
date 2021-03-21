import React from "react";
import {shallow} from "enzyme";
import {AddCategory} from "../../components/AddCategory";

describe('Prueba del componente Add Category', () => {
    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');  //si hay mas elementos, es conveniente buscar por ID
        const value = 'Hola mundo';

        input.simulate('change', {target: {value}});

        expect( wrapper.find('p').text().trim() ).toBe(value);
    });

    test('No debe de postear el submit del form', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = "Test";
        wrapper.find('input').simulate('change', { target: { value } } );
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    })
})