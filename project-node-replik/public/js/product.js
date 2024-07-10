const products = [
    {
      title: 'Café Colombiano',
      category: 'Café',
      description: 'Café 100% colombiano, con aroma y sabor característicos.',
      price: '1200',
      image: 'img/coffe-product1.jpg',
      available: 10,
      calification: 4.8
    },
    {
      title: 'Café Espresso',
      category: 'Café',
      description: 'Café Espresso intenso y aromático, perfecto para empezar el día.',
      price: '1500',
      image: 'img/cafe-espresso.jpg',
      available: 8,
      calification: 4.5
    },
    {
      title: 'Café Latte',
      category: 'Café',
      description: 'Café Latte suave con leche vaporizada, ideal para disfrutar en cualquier momento.',
      price: '1800',
      image: 'img/cafe-latte.jpg',
      available: 6,
      calification: 4.7
    },
    {
      title: 'Té Verde Orgánico',
      category: 'Té',
      description: 'Té verde orgánico con propiedades antioxidantes y refrescantes.',
      price: '900',
      image: 'img/tea-green.jpg',
      available: 15,
      calification: 4.2
    },
    {
      title: 'Té Negro Earl Grey',
      category: 'Té',
      description: 'Té negro aromatizado con bergamota, para un sabor único y clásico.',
      price: '1000',
      image: 'img/tea-earl-grey.jpg',
      available: 12,
      calification: 4.6
    },
    {
      title: 'Galletas de Chocolate',
      category: 'Comestible',
      description: 'Deliciosas galletas de chocolate con trozos de chocolate belga.',
      price: '800',
      image: 'img/cookies-chocolate.jpg',
      available: 20,
      calification: 4.9
    },
    {
      title: 'Pastel de Zanahoria',
      category: 'Comestible',
      description: 'Pastel húmedo de zanahoria con crema de queso, irresistible.',
      price: '1800',
      image: 'img/cake-carrot.jpg',
      available: 5,
      calification: 4.4
    },
    {
      title: 'Muffin de Arándanos',
      category: 'Comestible',
      description: 'Muffin esponjoso con arándanos frescos, para un antojo dulce.',
      price: '1200',
      image: 'img/muffin-blueberry.jpg',
      available: 8,
      calification: 4.7
    },
    {
      title: 'Café Frío',
      category: 'Café',
      description: 'Café frío con hielo y un toque de sirope, refrescante y delicioso.',
      price: '2000',
      image: 'img/cafe-cold-brew.jpg',
      available: 4,
      calification: 4.3
    },
    {
      title: 'Café Mocha',
      category: 'Café',
      description: 'Café Mocha con chocolate y crema batida, una delicia indulgente.',
      price: '2200',
      image: 'img/cafe-mocha.jpg',
      available: 7,
      calification: 4.6
    },
    {
      title: 'Croissant de Chocolate',
      category: 'Comestible',
      description: 'Croissant hojaldrado relleno de chocolate suave y fundente.',
      price: '1500',
      image: 'img/croissant-chocolate.jpg',
      available: 10,
      calification: 4.8
    },
    {
      title: 'Tostadas de Aguacate',
      category: 'Comestible',
      description: 'Tostadas de aguacate fresco con tomate y especias, opción saludable y deliciosa.',
      price: '1600',
      image: 'img/toast-avocado.jpg',
      available: 6,
      calification: 4.5
    },
    {
      title: 'Capuchino',
      category: 'Café',
      description: 'Capuchino cremoso con espuma de leche y un toque de canela.',
      price: '1900',
      image: 'img/capuccino.jpg',
      available: 9,
      calification: 4.7
    }
];
  
  
// Función para obtener los parámetros de la URL
function getQueryParams() {
const params = {};
const queryString = window.location.search.substring(1);
const queryArray = queryString.split('&');

queryArray.forEach(query => {
    const [key, value] = query.split('=');
    params[key] = decodeURIComponent(value);
});

return params;
}
  
// Función para mostrar los detalles del producto
function showProductDetails() {
    const params = getQueryParams();
    const productIndex = params.index;
    const product = products[productIndex];
  
    if (product) {
      const productInfoContainer = document.querySelector('.product-info');
      productInfoContainer.innerHTML = ''; // Limpiar el contenido anterior
  
      const infoSection = document.createElement('div');
      infoSection.className = 'info-section';
  
      const productTitle = document.createElement('h2');
      productTitle.textContent = product.title;
      infoSection.appendChild(productTitle);
  
      const productCategory = document.createElement('p');
      productCategory.textContent = product.category;
      infoSection.appendChild(productCategory);
  
      const calificationContainer = document.createElement('div');
      calificationContainer.className = 'calification d-flex';
  
      const fullStars = Math.floor(product.calification);
      const halfStar = product.calification % 1 !== 0;
  
      for (let i = 0; i < fullStars; i++) {
        const star = document.createElement('i');
        star.className = 'bi bi-star-fill';
        calificationContainer.appendChild(star);
      }
  
      if (halfStar) {
        const star = document.createElement('i');
        star.className = 'bi bi-star-half';
        calificationContainer.appendChild(star);
      }
  
      for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
        const star = document.createElement('i');
        star.className = 'bi bi-star';
        calificationContainer.appendChild(star);
      }
  
      infoSection.appendChild(calificationContainer);
  
      const description = document.createElement('div');
      description.className = 'description';
      const productDescription = document.createElement('p');
      productDescription.textContent = product.description;
      description.appendChild(productDescription);
      infoSection.appendChild(description);
  
      productInfoContainer.appendChild(infoSection);
  
      const compraSection = document.createElement('div');
      compraSection.className = 'compra-section';
  
      const availability = document.createElement('p');
      availability.textContent = `Unidades disponibles: ${product.available}`;
      compraSection.appendChild(availability);
  
      const price = document.createElement('p');
      price.className = 'precio';
      price.textContent = `$${product.price}`;
      compraSection.appendChild(price);
  
      const cantidad = document.createElement('div');
      cantidad.className = 'cantidad d-flex';
  
      const decreaseButton = document.createElement('button');
      decreaseButton.textContent = '-';
      cantidad.appendChild(decreaseButton);
  
      const quantityInput = document.createElement('input');
      quantityInput.type = 'text';
      cantidad.appendChild(quantityInput);
  
      const increaseButton = document.createElement('button');
      increaseButton.textContent = '+';
      cantidad.appendChild(increaseButton);
  
      compraSection.appendChild(cantidad);
  
      const addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Agregar a carrito';
      compraSection.appendChild(addToCartButton);
  
      productInfoContainer.appendChild(compraSection);
    } else {
      document.querySelector('.product-container').innerHTML = '<p>Producto no encontrado</p>';
    }
  }
  
  
  // Llama a la función para mostrar los detalles del producto cuando se carga la página completa
  window.onload = showProductDetails;
  