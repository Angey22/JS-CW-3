//! Видео - 1:32:30...2:05:38

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1; //! Изменяем свойство в продукте
        return;
      }
    }

    const newProduct = {
      ...product, // Распыление объекта с продуктом
      quantity: 1, //! Изменяем свойство в продукте
    };

    this.items.push(newProduct);
  },
  remove(productName) {

    // Пример с "for...of"
    // for (const item of this.items) {
    //   console.log(item);
    //   if (productName === item.name) {
    //     console.log('Нашли такой продукт -', productName);
    //   }
    // }
    
    // Пример с "for" без использования деструкторизации
    for (let i = 0; i < this.items.length; i += 1) { // !!!
      const item = this.items[i]; // !!!

      if (productName === item.name) { // !!!
        console.log('Нашли такой продукт -', productName);
        console.log('индекс: ', i);

        this.items.splice(i, 1); // !!!
      }
    }

    // Пример с "for" и деструкторизацией
    // const { items } = this; // !!!
    // for (let i = 0; i < items.length; i += 1) { // !!!
    //   const { name } = items[i]; // !!!

    //   if (productName === name) { // !!!
    //     console.log('Нашли такой продукт -', productName);
    //     console.log('индекс: ', i);

    //     items.splice(i, 1); // !!!
    //   }
    // }

  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;

    // Обычная запись
    // for (const item of this.items) {
    //   total += item.price;
    // }

    // Запись с использованием деструкторизации
    const { items } = this; // !!!
    for (const {price, quantity} of items) { // !!!
      total += price * quantity;
    }

    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

// Запрос к пустой корзине-объекту
console.log('"cart.getItems()" =>', cart.getItems());

// Добавляем в корзину това
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

// Выводим в лог карзину после добавления товара
console.table(cart.getItems());

// cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());