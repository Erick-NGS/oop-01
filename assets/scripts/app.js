const productsList = {
  products: [
    {
      title: 'Product A',
      imageUrl:
        'https://i.pinimg.com/originals/71/66/10/716610c301922076632c53b87a54fa96.jpg',
      price: 599.95,
      description: 'A civilized weapon',
    },

    {
      title: 'Product B',
      imageUrl:
        'https://i.pinimg.com/originals/c5/09/73/c50973f1e4c41562c1b0d955fbeb80ef.jpg',
      price: 999.95,
      description: 'So uncivilized',
    },
  ],
  render() {
    const listHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';

    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class="product-item__constent">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>ADD to cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    listHook.append(prodList);
  },
};

productsList.render();
