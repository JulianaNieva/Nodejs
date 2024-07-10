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
      image: 'img/coffe-product1.jpg',
      available: 8,
      calification: 4.5
    },
    {
      title: 'Café Latte',
      category: 'Café',
      description: 'Café Latte suave con leche vaporizada, ideal para disfrutar en cualquier momento.',
      price: '1800',
      image: 'img/coffe-product1.jpg',
      available: 6,
      calification: 4.7
    },
    {
      title: 'Té Verde Orgánico',
      category: 'Té',
      description: 'Té verde orgánico con propiedades antioxidantes y refrescantes.',
      price: '900',
      image: 'img/coffe-product1.jpg',
      available: 15,
      calification: 4.2
    },
    {
      title: 'Té Negro Earl Grey',
      category: 'Té',
      description: 'Té negro aromatizado con bergamota, para un sabor único y clásico.',
      price: '1000',
      image: 'img/coffe-product1.jpg',
      available: 12,
      calification: 4.6
    },
    {
      title: 'Galletas de Chocolate',
      category: 'Comestible',
      description: 'Deliciosas galletas de chocolate con trozos de chocolate belga.',
      price: '800',
      image: 'img/coffe-product1.jpg',
      available: 20,
      calification: 4.9
    },
    {
      title: 'Pastel de Zanahoria',
      category: 'Comestible',
      description: 'Pastel húmedo de zanahoria con crema de queso, irresistible.',
      price: '1800',
      image: 'img/coffe-product1.jpg',
      available: 5,
      calification: 4.4
    },
    {
      title: 'Muffin de Arándanos',
      category: 'Comestible',
      description: 'Muffin esponjoso con arándanos frescos, para un antojo dulce.',
      price: '1200',
      image: 'img/coffe-product1.jpg',
      available: 8,
      calification: 4.7
    }
];

const cantidadMostrada = (size) => {
  let numCols = 4;
  if (size < 768) {
      numCols = 2; // 2 columnas para dispositivos móviles
  } else if (size < 992) {
      numCols = 3; // 3 columnas para tabletas
  }

  return numCols;
}

function detectarTipoPantalla() {
  // Obtenemos el ancho de la ventana del navegador
  const anchoVentana = window.innerWidth;

  // Verificamos el ancho para determinar el tipo de pantalla
  if (anchoVentana < 576) {
      console.log("Pantalla pequeña (móvil)'")
      return anchoVentana;
  } else if (anchoVentana >= 576 && anchoVentana < 992) {
      console.log("Pantalla mediana (tableta)")
      return anchoVentana;
  } else if (anchoVentana >= 992 && anchoVentana < 1200) {
      console.log("Pantalla grande (protatil)")
      return anchoVentana;
  } else {
      console.log("Pantalla extra grande (escritorio)")
      return anchoVentana;
  }
}

const showCards = (index, listElement, longitud) => {
  listElement.forEach((card) => {
      card.classList.add('sacar-producto');
      card.classList.remove('mostrar-producto','move-left-in', 'move-left-out', 'move-right-in', 'move-right-out');
  });

  for (let i = index; i < index + longitud && i < listElement.length; i++) {
      listElement[i].classList.add('mostrar-producto');
      listElement[i].classList.remove('sacar-producto');
  }
}

const moveLeftCards = (index, listElement , longitud) => {
  for (let i = index; i < index + longitud && i < listElement.length; i++) {
    if(index === 0) {
        listElement[i].classList.add('move-left-out');
        listElement[i].classList.remove('mostrar-producto');
        listElement[i + longitud].classList.add('move-left-in');
    } else if (index === 4) {
        listElement[i].classList.add('move-left-out');
        listElement[i].classList.remove('mostrar-producto');
        listElement[i - longitud].classList.add('move-left-in');
    }
  }
}

const moveRightCards = (index, listElement, longitud) => {
  for (let i = index; i < index + longitud && i < listElement.length; i++) {
        if (index === 0) {
            listElement[i].classList.add('move-right-out');
            listElement[i].classList.remove('mostrar-producto','move-left-in', 'move-left-out');
            listElement[i + longitud].classList.add('move-right-in')
        } else if (index === 4) {
            listElement[i].classList.add('move-right-out');
            listElement[i].classList.remove('mostrar-producto','move-left-in', 'move-left-out');
            listElement[i - longitud].classList.add('move-right-in');
        }
    }
}

const carouselProducts = () => {
  const screenSize = detectarTipoPantalla()
  const cantidad = cantidadMostrada(screenSize)

  const cards = document.querySelectorAll(".product-card");
  let currentIndex = 0

  showCards(currentIndex, cards, cantidad)

  // Botón para avanzar a las siguientes 4 cards
  document.getElementById("nextProduct").addEventListener("click", function () {
    moveLeftCards(currentIndex, cards, cantidad)
        if(currentIndex === 4) {
            currentIndex -= 4;
            setTimeout(() => showCards(currentIndex, cards, cantidad), 500);
        } else {
            currentIndex += cantidad;
            setTimeout(() => showCards(currentIndex, cards, cantidad), 500);
        }
    });

  // Botón para retroceder a las 4 cards anteriores
  document.getElementById("prevProduct").addEventListener("click", function () {
        moveRightCards(currentIndex, cards, cantidad);
        if(currentIndex === 0) {
            currentIndex += cantidad;
            setTimeout(() => showCards(currentIndex, cards, cantidad), 500);
        } else {
            currentIndex -= cantidad;
            setTimeout(() => showCards(currentIndex, cards, cantidad), 500);
        }
    });
}

function createStarElements(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push('<i class="bi bi-star-fill"></i>');
        } else if (i - rating === 0.5) {
            stars.push('<i class="bi bi-star-half"></i>');
        } else {
            stars.push('<i class="bi bi-star"></i>');
        }
    }
    return stars.join('');
}

const handleView = (index) => {
    window.location.href = `product.html?index=${index}`
}

const container = document.getElementById('cards-container');
const prevButton = document.getElementById('prevProduct').parentNode;
const nextButton = document.getElementById('nextProduct').parentNode;

products.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const productImageContainer = document.createElement('div');
    productImageContainer.className = 'product-image-container';
    const productImage = document.createElement('img');
    productImage.className = 'product-imagen';
    productImage.src = product.image;
    productImage.alt = product.title;
    productImageContainer.appendChild(productImage);

    const productCardInfo = document.createElement('div');
    productCardInfo.className = 'product-card-info';
    const productTitle = document.createElement('h3');
    productTitle.className = 'product-title';
    productTitle.textContent = product.title;
    const productCalification = document.createElement('div');
    productCalification.className = 'product-calification';
    productCalification.innerHTML = createStarElements(product.calification);
    const productDescription = document.createElement('p');
    productDescription.className = 'product-description';
    productDescription.textContent = product.description;
    productCardInfo.appendChild(productTitle);
    productCardInfo.appendChild(productCalification);
    productCardInfo.appendChild(productDescription);

    const buyProduct = document.createElement('div');
    buyProduct.className = 'buy-product d-flex justify-content-space-evenly align-items-center';
    const productPrice = document.createElement('p');
    productPrice.className = 'product-price';
    productPrice.textContent = `$${product.price}`;
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Comprar';
    buyButton.addEventListener('click', function() {
        handleView(index)
    })

    buyProduct.appendChild(productPrice);
    buyProduct.appendChild(buyButton);

    productCard.appendChild(productImageContainer);
    productCard.appendChild(productCardInfo);
    productCard.appendChild(buyProduct);

    container.insertBefore(productCard, nextButton);
});

document.addEventListener("DOMContentLoaded", carouselProducts);