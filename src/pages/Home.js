import getData from '../utils/getData';

const Home = async () => {
  const products = await getData();
  const view = `
		<div class="Products">
			${products.data.map(product => `
				<div>
					<a class="Product-item" href="#/${product._id}/">
						<img class="img_product" src="${product.api_featured_image}" alt="${product.name}"/>
						<h2 class="hero-title">${product.name}</h2>
					</a>
				</div>
			`).join('')}
		</div>
		`
  return view;
};

export default Home;