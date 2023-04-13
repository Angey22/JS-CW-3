//! Видео - 1:02:30...1:13:10

/*
 * Перебор через for...in и Object.keys|values|entries
 */

// Исходный объект
const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

//! Object.keys
console.groupCollapsed('Object.keys'); //! Log group name

// Создаем пустую переменную для суммирования
let totalFeedback = 0;

// Создаем переменную и присваиваем ей в качестве значения массив ключей свойств объекта "feedback", с помощью метода "Object.keys()".
const keys = Object.keys(feedback);

console.log('Массив ключей "keys" =>', keys);
console.log('------------------------------------------------');

// Используя массив ключей "keys" - перебираем объект "feedback", с помощью цыкла "for...of".
for (const key of keys) {
  console.log('"key of keys" =>', key);
  console.log('"feedback[key]" =>', feedback[key]);

  // Cуммируем значения свойств объекта "feedback".
  totalFeedback += feedback[key];
};
console.log('------------------------------------------------');

// Выводим в лог сумму значений всех свойств объекта "feedback".
console.log('"totalFeedback" =>', totalFeedback);

console.groupEnd(); //! Log group end
console.log('-1----------------------------------------------');


//! Object.values
console.groupCollapsed('Object.values'); //! Log group name

// Создаем пустую переменную для суммирования
let totalFeedback2 = 0;

// Создаем переменную и присваиваем ей в качестве значения массив значений свойств объекта "feedback", с помощью метода "Object.values()".
const values = Object.values(feedback);

console.log('Массив значений "values" =>', values);
console.log('------------------------------------------------');

// Используя массив ключей "values" - перебираем объект "feedback", с помощью цыкла "for...of".
for (const value of values) {
  console.log('"value of values" =>', value);

  totalFeedback2 += value;
};
console.log('------------------------------------------------');

// Выводим в лог сумму значений всех свойств объекта "feedback".
console.log('"totalFeedback2" =>', totalFeedback2);

console.groupEnd(); //! Log group end
console.log('-2----------------------------------------------');


//! Object.entries
console.groupCollapsed('Object.entries'); //! Log group name

// Создаем переменную и присваиваем ей в качестве значения массив массивов, т.е. массив, элементами которого являются тоже массивы, внутри которых - ключ и значение свойства объекта "feedback", полученый с помощью метода "Object.entries()".
const entries = Object.entries(feedback);

console.log('Массив значений "entries" =>', entries);

console.groupEnd(); //! Log group end
console.log('-3----------------------------------------------');