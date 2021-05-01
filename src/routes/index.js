import Header from '../template/Header';
import Home from '../pages/Home';
import SingleProduct from '../pages/SingleProduct';
import Error404 from '../pages/Error404';
import Script from '../template/Script';
import Footer from '../template/Footer';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Paging from '../template/Paging';

const routes = {
    '/': Home,
    '/:_id': SingleProduct,
    '/contact' : 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const paging = null || document.getElementById('paging');
    const script = null || document.getElementById('script');
    const footer = null || document.getElementById('footer');

    header.innerHTML = await Header();
    paging.innerHTML = await Paging();
    script.innerHTML = await Script();
    footer.innerHTML = await Footer();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();

    const boton1 = document.getElementById('button.1')
    const boton2 = document.getElementById('button.100')
    const boton3 = document.getElementById('button.200')
    const boton4 = document.getElementById('button.300')
    const boton5 = document.getElementById('button.400')
    const boton6 = document.getElementById('button.500')
    const boton7 = document.getElementById('button.600')
    const boton8 = document.getElementById('button.700')
    const boton9 = document.getElementById('button.800')
    const boton10 = document.getElementById('button.900')
    const boton11 = document.getElementById('button.1000')
    boton1.onclick = async () => {
        content.innerHTML = await Home(1);
    }
    boton2.onclick = async () => {
        content.innerHTML = await Home(100);
    }
    boton3.onclick = async () => {
        content.innerHTML = await Home(200);
    }
    boton4.onclick = async () => {
        content.innerHTML = await Home(300);
    }
    boton5.onclick = async () => {
        content.innerHTML = await Home(400);
    }
    boton6.onclick = async () => {
        content.innerHTML = await Home(500);
    }
    boton7.onclick = async () => {
        content.innerHTML = await Home(600);
    }
    boton8.onclick = async () => {
        content.innerHTML = await Home(700);
    }
    boton9.onclick = async () => {
        content.innerHTML = await Home(800);
    }
    boton10.onclick = async () => {
        content.innerHTML = await Home(900);
    }
    boton11.onclick = async () => {
        content.innerHTML = await Home(1000);
    }
};

export default router;