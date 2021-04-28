const Home = () => {
    const view = `
    <div class="Products">
        <article class="Product-item">
            <a href="#/1/">
                <img class="img_product" src="image" alt="name"/>
                <h2>Product:</h2>
                <h3>Brand:</h3>
                <h3>Price: $</h3>
            </a>
        </article>
    </div>
    `;
    return view;
};

export default Home;