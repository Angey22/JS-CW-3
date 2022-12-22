// Example 1 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// Исходный код функции
function calcBMI(weight, height) {
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
};

// Лог - обращения к исходному коду функции
console.log('Обращение к исходному коду функции "Example 1":');
console.log(calcBMI('88,3', '1.75'));
console.log(calcBMI('68,3', '1.65'));
console.log(calcBMI('118,3', '1.95'));

// Ожидаемые логи - обращения к функции, после ее "переделки"
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );


// Решение задачи:
function calcBMI2({ weight, height }) { // !!!
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
};

// Лог - обращения к "переделанному" коду функции
console.log('Обращение к "переделанному" коду функции "Example 1":');
console.log(
  calcBMI2({
    weight: '88,3',
    height: '1.75',
  }),
);
console.log(
  calcBMI2({
    weight: '68,3',
    height: '1.65',
  }),
);
console.log(
  calcBMI2({
    weight: '118,3',
    height: '1.95',
  }),
);



// ********************************************************
// Example 2 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// Исходный код функции
function printContactsInfo(names, phones) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
};

// Лог - обращения к исходному коду функции
console.log('Обращение к исходному коду функции "Example 2":');
printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300',
);

// Ожидаемый лог - обращение к функции, после ее "переделки"
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });


// Решение задачи:
function printContactsInfo2({ names, phones }) { // !!!
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
};

// Лог - обращения к "переделанному" коду функции
console.log('Обращение к "переделанному" коду функции "Example 2":');
printContactsInfo2({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});



// ********************************************************
// Example 3 - Глубокая деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// Исходный код функции
function getBotReport(companyName, repairBots, defenceBots) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
};

// Лог - обращения к исходному коду функции
console.log('Обращение к исходному коду функции "Example 3":');
console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Ожидаемый лог - обращение к функции, после ее "переделки"
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"


// Решение задачи:
function getBotReport2({companyName, bots: { repair, defence }}) { //!!!
  return `${companyName} has ${repair + defence} bots in stock`; //!!!
};

// Лог - обращения к "переделанному" коду функции
console.log('Обращение к "переделанному" коду функции "Example 3":');
console.log(
  getBotReport2({
    companyName: 'Cyberdyne Systems',
    bots: {
      repair: 150,
      defence: 50,
    },
  }),
);



// ********************************************************
// Example 4 - Деструктуризация
// Перепиши функцию так, чтобы она принимала объект параметров со свойствами "companyName" и "stock" и выводила рапорт о количестве товаров на складе любой компании.

// Решение
function getStockReport({ companyName, stock }) {
  let total = 0;
  for (const value of Object.values(stock)) {
    total += value;
  }
  return `${companyName} has ${total} items in stock`;
}

// Лог - обращения к коду функции
console.log('Обращение к "переделанному" коду функции "Example 4":');
console.log(
  getStockReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  }),
); // "Cyberdyne Systems has 200 items in stock"

console.log(
  getStockReport({
    companyName: 'Belacci',
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  }),
); // "Belacci has 35 item in stock"



// ********************************************************
// Example 5 - Операция spread
// Дополни функцию createContact(partialContact) так, чтобы она возвращала новый объект контакта с добавленными свойствами id и createdAt, а также list со значением "default" если в partialContact нет такого свойства.

// Решение
function createContact(partialContact) {
  return {
    list: 'default',
    ...partialContact,
    id: generateId(),
    createdAt: Date.now(),
  };
};

// Лог - обращения к коду функции
console.log('Обращение к "переделанному" коду функции "Example 5":');
console.log(
  createContact({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  }),
);
console.log(
  createContact({
    name: 'Poly',
    email: 'poly@hotmail.com',
  }),
);

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
};



// ********************************************************
// Example 6 - Операция rest
// Напиши функцию transformUsername(user) так, чтобы она возвращала новый обьект со свойством fullName, вместо firstName и lastName.

// Решение
function transformId({ firstName, lastName, ...otherProps }) {
  return {
    fullName: `${firstName} ${lastName}`,
    ...otherProps,
  };
};

// Лог - обращения к коду функции
console.log('Обращение к "переделанному" коду функции "Example 6":');
console.log(
  transformId({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  }),
);

console.log(
  transformId({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  }),
);