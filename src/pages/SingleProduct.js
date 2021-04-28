const SingleProduct = () => {
    const view = `
        <div class="Product-inner">
            <article class="Product-card">
                <img src="image" alt="name"/>
                <h2>Product:</h2>
            </article>
            <article class="Product-card">
                <h3>Brand:</h3>
                <h3>Price: $</h3>
                <h3>Type: </h3>
                <h3>Description:</h3>
                <div class="boton">
                    <a hfer="product_link">
                        BUY
                    </a>
                </div>
            </article>
        </div>
    `;
    return view;
};

export default SingleProduct;