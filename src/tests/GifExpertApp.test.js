import {shallow} from "enzyme";
import React from "react";
import {GifExpertApp} from "../GifExpertApp";

describe('Prueba del componente GifExpertApp', () => {

    test('debe mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar una lista de categorias', () => {
        const categories = ['Dragon ball', 'Game of thrones']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();

    })
})