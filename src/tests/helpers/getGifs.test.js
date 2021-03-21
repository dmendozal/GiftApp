import {getGifs} from "../../helpers/getGifs";
describe('Pruebas con getGifs Fetch', () => {

    test('debe de traer 10 elementos', async () => {
        const gifs = await getGifs('Betty la fea');

        expect(gifs.length).toBe(10);
    });

    test('No se envia la categoria', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    })
})