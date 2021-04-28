const API = 'https://salty-beyond-87863.herokuapp.com/api/v1/products?offset=00&results=48'
const getData = async (id) => {
    const apiURL = id ? `${API}/${id}` : API;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error){
        console.log('Fetch error', error);
    };
};

export default getData;