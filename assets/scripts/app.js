class Product {
  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>ADD to cart</button>
        </div>
      </div>
    `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'Product A',
      'https://i.pinimg.com/originals/71/66/10/716610c301922076632c53b87a54fa96.jpg',
      599.95,
      'A civilized weapon'
    ),

    new Product(
      'Product B',
      'https://i.pinimg.com/originals/c5/09/73/c50973f1e4c41562c1b0d955fbeb80ef.jpg',
      999.95,
      'So uncivilized'
    ),
  ];

  constructor() {}

  render() {
    const listHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';

    for (const prod of this.products) {
      const prodEl = new ProductItem(prod).render();
      prodList.append(prodEl);
    }
    listHook.append(prodList);
  }
}

new ProductList().render();
