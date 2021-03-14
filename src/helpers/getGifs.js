export const getGifs = async (category) => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=m1oNIvdcFPJgzklGr0dQDt0hrgZmgsG7`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs;
    } catch (error) {
        console.log(error);
    }
}