// Example 1 - Основы обьектов
// Напиши скрипт, который, для объекта "user", последовательно:
// - добавляет поле "mood" со значением 'happy';
// - заменяет значение "hobby" на 'skydiving';
// - заменяет значение "premium" на false;
// - выводит содержимое объекта "user" в формате ключ:значение используя Object.keys() и for...of

// Исходный объект "user"
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// 1-е добавляем в объект "user" поле (новое свойство) "mood" со значением 'happy'
user.mood = 'happy';
console.table(user);

// 2-е заменяем значение в свойстве "hobby" на 'skydiving';
user.hobby = 'skydiving';
console.table(user);

// 3-е заменяем значение в свойстве "premium" на false
user.premium = false;
console.table(user);

// 4-е выводим содержимое объекта "user" в формате "ключ : значение", используя Object.keys() и цыкл for...of
const userKeys = Object.keys(user);
for (const key of userKeys) {
    console.log(`${key} : ${user[key]}`);
};



// Example 2 - метод Object.values()
// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для суммирования всех зарплат и сохраните результат в переменной "sum". Должно получиться "390". Если объект "salaries" пуст, то результат должен быть "0".

// Исходный объект "salaries"
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const arraySalary = Object.values(salaries);

let sum = 0;

for (const salary of arraySalary) {
    sum += salary;
};

console.log('Общая сумма =', sum);



// Example 3 - Массив объектов
// Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

// Исходный объект "stones"
const stones = [
  { name: 'Изумруд', price: 1300, quantity: 4 },
  { name: 'Бриллиант', price: 2700, quantity: 3 },
  { name: 'Сапфир', price: 400, quantity: 7 },
  { name: 'Щебень', price: 200, quantity: 2 },
];

// Мое, самостоятельное решение этой задачи
function calcTotalPrice(stones, stoneName) {
  let totalPrice = 0;
  for (let i = 0; i <= stones.length -1; i += 1) {
    if (stones[i].name === stoneName) {
      let totalPrice = stones[i].price * stones[i].quantity;
      return console.log(`Стоимость камня "${stones[i].name}" (стоимость 1-й шт. - ${stones[i].price}$ * кол-во - ${stones[i].quantity} ед.) = ${totalPrice}$`);
    }
  }
  return console.log('Такого камня НЕТ!!!');
}

// Вызываем функцию "calcTotalPrice"
calcTotalPrice(stones, 'Сапфир');



// Описанное ментором в вебинаре решение этой задачи

// Описание условного алгоритма функции:
  // 1. Создаем переменную, в которую будет сохранятся результат произведения нужных значений;
  // 2. Создаем цыкл "for...of" и перебираем с его помощью исходный массив объектов;
  // 3. При переборе массива, необходимо выбрать из него объект, у которого свойство "name" совпадает со значением аргумента, параметра создоваемой функции - "stoneName";
  // 4. Произвести операцию умножения значений: стоимости 1-го камня (находящуюся в свойстве "price") и количества имеющихся в наличии камней (находящуюся в свойстве "quantity").

// Код функции:
function calcTotalPrice2(stones, stoneName) {
  // let totalPrice = 0; // 1-й шаг

  for (const stone of stones) { // 2-й шаг
    if (stone.name === stoneName) { // 3-й шаг
      // totalPrice = stone.price * stone.quantity; // 4-й шаг
      return stone.price * stone.quantity; // Совмещенный вариант 1-го и 4-го шагов
    }
  }

  // return totalPrice;
}

// Вызываем функцию "calcTotalPrice2"
console.log(calcTotalPrice2(stones, 'Сапфир'));



// Example 4 - Комплексные задачи.
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект "account" в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно "положить" либо "снять" деньги со счета.
 */
const transactionType = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    // Условный алгоритм функции:
    // 1. Создает объект транзакции с набором полей: id, amount, type;
    // 2. В качестве значения свойства "id" - зададим длину массива "transactions";
    return {
      id: this.transactions.length,
      amount,
      type,
    }
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, transactionType.DEPOSIT);
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Недостаточно средств на счете!');
      return false;
    }

    this.balance -= amount;
    const transaction = this.createTransaction(amount, transactionType.WITHDRAW);
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};



// Выводим в лог результат работы метода "getBalance()"
console.log('Текущий баланс (исходное значение): ', account.getBalance());



// Активируем метод "deposit" для увеличения баланса на счете
account.deposit(500);
// Выводим в лог результат работы метода "getBalance()", после увеличения счета на "500" у.е.
console.log('Текущий баланс (после увеличения на 500 у.е.): ', account.getBalance());



// Активируем метод "withdraw" для снятия денег со счета
account.withdraw(200);
// Выводим в лог результат работы метода "getBalance()", после снятия со счета "200" у.е.
console.log('Текущий баланс (после снятия со счета 200 у.е.): ', account.getBalance());

// Проверяем работу метода "withdraw" в случаях когда со счета пытаются снять сумму - превышающую текущий баланс. Например, на счету "300" у.е., а пытаются снять со счета "500" у.е.
account.withdraw(500);



// Проверяем работу метода "getTransactionDetails"
console.log(account.getTransactionDetails(0));



// Проверяем работу метода "getTransactionTotal"
console.log(`Удачных операций проверяемого типа, было осуществлено на сумму =`, account.getTransactionTotal(transactionType.WITHDRAW));


// Выводим в лого объект "account", внутри которого должна содержаться информация про все ранее проведенные операции
console.log(account);