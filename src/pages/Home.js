import getData from '../utils/getData';

const Home = async () => {
  const products = await getData();
  const view = `
		<div class="Products">
			${products.data.map(product => `
				<article class="Product-item">
					<a href="#/${product._id}/">
						<img src="${product.api_featured_image}" alt="${product.name}"/>
						<h2>${product.name}</h2>
					</a>
				</article>
			`).join('')}
		</div>
		`
  return view;
};

export default Home;