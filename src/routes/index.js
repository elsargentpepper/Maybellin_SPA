import Header from '../template/Header';
import Home from '../pages/Home';
import SingleProduct from '../pages/SingleProduct';
import Error404 from '../pages/Error404';

const routes = {
    '/': Home,
    '/:_id': SingleProduct,
    '/contact' : 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
};

export default router;