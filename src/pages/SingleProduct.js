import getHash from '../utils/getHash';
import getData from '../utils/getDataSingle';

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
                <br>
                <h3>Brand: <span>${product.data.brand}</span> </h3>
                <br>
                <h3>Price: <span>$${product.data.price}</span> </h3>
                <br>
                <h3>Type: <span>${product.data.product_type}</span></h3>
                <br>
                <h3>Description: <span>${product.data.description}</span></h3>
                <br>
                <h3>Rating <span>${product.data.rating}</span></h3>
                <br>
                <div class="boton">
                    <a hfer="${product.data.product_link}">
                        BUY
                    </a>
                </div>
            </article>
        </div>
    `;
    return view;
};

export default SingleProduct;