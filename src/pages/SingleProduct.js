import getHash from '../utils/getHash';
import getData from '../utils/getData';

const SingleProduct = async () => {
    const id = getHash();
    const product = await getData(id);
    const view = `
        <div class="Product-inner">
            <article class="Product-card">
                <img src="${product.data.api_featured_image}" alt="${product.data.name}"/>
                <h2>${product.data.name}</h2>
            </article>
            <article class="Product-card">
                <h3>Brand: ${product.data.brand}</h3>
                <h3>Price: $${product.data.price}</h3>
                <h3>Type: ${product.data.product_type} </h3>
                <h3>Description: ${product.data.description}</h3>
                <div class="boton">
                    <a hfer="${product.data.product_link}k">
                        BUY
                    </a>
                </div>
            </article>
        </div>
    `;
    return view;
};

export default SingleProduct;