import {shallow} from "enzyme";
import {GifGridItem} from "../../components/GifGridItem";

describe('Prueba del componente GifGridItem', () => {
    const title = 'Este es un titulo';
    const url = 'esto es una url';
    const animateFadeIn = 'animate__fadeInUp';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    });

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        console.log(div.props().className);
        expect(div.prop('className').includes(animateFadeIn)).toBe(true);
    })
})