import getHash from '../utils/getHash';
import getData from '../utils/getDataSingle';

const SingleProduct = async () => {
    const id = getHash();
    const product = await getData(id);
    const view = `
        <div class="Product-inner">
            <article class="Product-card">
                <div >
                    <img class="img_singleproduct" src="${product.data.api_featured_image}" alt="${product.data.name}"/>
                </div>
                <div class="Product-info">
                    <h2>${product.data.name}</h2>
                    <br>
                    <h3>Brand: <span class="text">${product.data.brand}</span> </h3>
                    <br>
                    <h3>Price: <span class="text">$${product.data.price}</span> </h3>
                    <br>
                    <h3>Type: <span class="text">${product.data.product_type}</span></h3>
                    <br>
                    <h3>Description: <span class="text">${product.data.description}</span></h3>
                    <br>
                    <h3>Rating <span class="text">${product.data.rating}</span></h3>
                    <br>
                    <div class="boton">
                        <a href="${product.data.product_link}">
                            BUY
                        </a>
                    </div>
                </div>
            </article>
        </div>
    `;
    return view;
};

export default SingleProduct;