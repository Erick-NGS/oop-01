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

  addToCart() {
    App.addProductToCart(this.product);
    alert(`${this.product.title} added to the cart!`);
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
    const btnAddToCart = prodEl.querySelector('button');
    btnAddToCart.addEventListener('click', this.addToCart.bind(this));

    return prodEl;
  }
}

class ElementAttr {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(frontHookId) {
    this.hookId = frontHookId;
  }
  createElement(tag, cssClassName, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClassName) {
      rootElement.className = cssClassName;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }

    document.getElementById(this.hookId).append(rootElement);

    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, currItem) => prevValue + currItem.price,
      0
    );
    return sum;
  }

  constructor(frontHookId) {
    super(frontHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createElement('section', 'cart');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order!</button>
    `;

    this.totalOutput = cartEl.querySelector('h2');
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
    const prodList = document.createElement('ul');
    prodList.cssClassName = 'product-list';

    for (const prod of this.products) {
      const prodItem = new ProductItem(prod);
      const prodEl = prodItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const listHook = document.getElementById('app');

    this.cart = new ShoppingCart('app');
    this.cart.render();
    const prodList = new ProductList();
    const prodListEl = prodList.render();

    listHook.append(prodListEl);
  }
}

class App {
  static cart;
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
