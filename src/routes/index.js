import Header from '../template/Header';
import Home from '../pages/Home';
import SingleProduct from '../pages/SingleProduct';
import Error404 from '../pages/Error404';
import Script from '../template/Script';
import Footer from '../template/Footer';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:_id': SingleProduct,
    '/contact' : 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const script = null || document.getElementById('script');
    const footer = null || document.getElementById('footer');

    header.innerHTML = await Header();
    script.innerHTML = await Script();
    footer.innerHTML = await Footer();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();

    const boton1 = document.getElementById('button.1')
    const boton2 = document.getElementById('button.2')
    boton1.onclick = async () => {
        content.innerHTML = await Home(1);
    }
    boton2.onclick = async () => {
        content.innerHTML = await Home(2);
    }
};

export default router;