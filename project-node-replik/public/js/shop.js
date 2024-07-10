
function createProductCard(product) {

  // Crear el contenedor principal de la card
  const colDiv = document.createElement('div');
  colDiv.className = 'col-md-6 col-lg-3';

  // Crear la card
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card mb-3';

  // Crear la imagen
  const img = document.createElement('img');
  img.src = product.image;
  img.className = 'card-img-top';
  img.alt = `producto: ${product.title}`;

  // Crear el cuerpo de la card
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  // Crear el título
  const cardTitle = document.createElement('h4');
  cardTitle.className = 'card-title';
  cardTitle.textContent = product.title;

  // Crear la descripción
  const cardText = document.createElement('p');
  cardText.className = 'card-text';
  cardText.textContent = product.description;

  // Crear el precio
  const cardPrice = document.createElement('p');
  cardPrice.innerHTML = `<strong>Precio:</strong> $${product.price}`;

  // Crear la valoración
  const cardRating = document.createElement('p');
  cardRating.innerHTML = `<strong>Valoración:</strong> ${'★'.repeat(Math.floor(product.calification))}${product.calification % 1 !== 0 ? '☆' : ''}`;

  // Crear el botón "Ver Producto"
  const viewButton = document.createElement('a');
  viewButton.href = `#`;
  viewButton.className = 'btn btn-primary btn-sm';
  viewButton.id = 'product-button';
  viewButton.textContent = 'Ver Producto';
  viewButton.addEventListener('click', () => {
    viewButton.classList.add('seleccionado')
  })

  // Seccion Update Product
  const updateForm = document.createElement('div');
  updateForm.innerHTML += `
  <form action="/actualizar/${product.id}" style="display: flex;" method="post">
    <input type="hidden" name="productId" value="${product.id}">
    <input type="hidden" name="productTitle" value="${product.title}">
    <input type="hidden" name="productCategory" value="${product.category}">
    <input type="hidden" name="productDescription" value="${product.description}">
    <input type="hidden" name="productAvailable" value="${product.available}">
    <input type="hidden" name="productCalification" value="${product.calification}">
    <button class="btn btn-primary btn-sm"><a href=/actualizar/${product.id}>Modificar Productos</a></button>
  </form>`


  // Crear el botón "Agregar al Carrito"
  const addButton = document.createElement('button');
  addButton.className = 'btn btn-success btn-sm';
  addButton.textContent = 'Agregar al Carrito';

  // Crear sección de "Eliminar"
  const deleteForm = document.createElement('div');
  deleteForm.innerHTML += `
  <form action="/shop?_metodo=DELETE" style="display: flex;" method="post">
    <input type="hidden" name="idDelete" value="${product.id}">
    <input type="submit" class="btn btn-danger btn-sm" value="Eliminar Productos">
  </form>`
  // deleteForm.setAttribute('action', '/dinamic?_metodo=DELETE');
  // deleteForm.setAttribute('method', 'post');
  // let deleteId = document.createElement('input');
  // deleteId.setAttribute('type', 'hidden');
  // deleteId.setAttribute('name', 'idDelete');
  // deleteId.setAttribute('value', product.id);
  // const deleteButton = document.createElement('button');
  // deleteButton.className = 'btn btn-danger btn-sm';
  // deleteButton.setAttribute('type', 'submit')
  // deleteButton.textContent = 'Eliminar Producto';
  // deleteForm.appendChild(deleteId);
  // deleteForm.appendChild(deleteButton);


  // Añadir los elementos al cuerpo de la card
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardPrice);
  cardBody.appendChild(cardRating);
  cardBody.appendChild(viewButton);
  cardBody.appendChild(addButton);
  cardBody.appendChild(deleteForm);
  cardBody.appendChild(updateForm)

  // Añadir la imagen y el cuerpo a la card
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBody);

  // Añadir la card al contenedor principal
  colDiv.appendChild(cardDiv);

  return colDiv;
}

async function renderProductCards() {
  const res = await fetch(`/shop`);
  const products = await res.json();

  const container = document.getElementById('card-container');

  // Early Return
  if (!container) {
    console.error('El contenedor #product-container no existe en el DOM.');
    return;
  }

  // container.innerHTML = '';

  // const fragment = document.createDocumentFragment()

  products.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

// Ejecutar la función para renderizar las cards
renderProductCards();
