//! Видео - 1:13:20...1:54:30

/*
 * Работа с коллекцией (массивом объектов)
 */
console.groupCollapsed('Работа с коллекцией (массивом объектов)'); //! Log group name

// У нас есть некий массив объектов
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

// Выводим исходный массив объектов в табличном виде в консоль
console.table(friends);

// Перебираем имеющийся массив объектов
for (const friend of friends) {
  console.log(friend); // При каждой итерации цыкла - выводим в лог значение отдельного элемента перебираемого массива, т.е. - отдельный объект

  // Вносим изменения в текущий элемент перебираемого массива
  friend.newProp = 555; // Создаем в соответствующем объекте (элементе массива) новое свойство и присваиваим ему значение
}

// Выводим измененный массив объектов в табличном виде в консоль
console.table(friends);

console.groupEnd(); //! Log group end
console.log('-1----------------------------------------------');


/*
 * Ищем друга по имени
 */
console.groupCollapsed('Ищем друга по имени'); //! Log group name

// Создадим мини скрипт-функцию для поиска друга по имени в массиве объектов.
const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    // console.log(friend);
    console.log(friend.name); // Выводим в лог имя при каждой итерации цыкла

    // Задаем условия "нахождения" нужного человека
    if (friend.name === friendName) {
      return 'НАШЛИ!!!'; // Задаем реакцию на событие "нахождения" нужного человека
    }
  }

  return 'НЕ НАШЛИ :('; // Задаем реакцию на событие "НЕ нахождения" нужного человека
};

// Выводим в лог результат работы функции с задаными параметрами
console.log('Ищем друга с именем "Poly" ->', findFriendByName(friends, 'Poly'));

// Выводим в лог результат работы функции с задаными параметрами
console.log('Ищем друга с именем "Chelsy" ->',findFriendByName(friends, 'Chelsy'));

console.groupEnd(); //! Log group end
console.log('-2----------------------------------------------');


/*
 * Получаем имена всех друзей
 */
console.groupCollapsed('Получаем имена всех друзей'); //! Log group name

const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    console.log(friend.name);

    names.push(friend.name);
  }

  return names;
};

console.log(getAllNames(friends));

console.groupEnd(); //! Log group end
console.log('-3----------------------------------------------');


/*
* Получаем имена только друзей которые онлайн
*/
console.groupCollapsed('Получаем имена только друзей которые онлайн'); //! Log group name

const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);

    if (friend.online) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
};

console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend.online);

    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};

console.log(getOfflineFriends(friends));

// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй

const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }

    friendsByStatus.offline.push(friend);

    // const key = friend.online ? 'online' : 'offline';
    // friendsByStatus[key].push(friend);
  }

  return friendsByStatus;
};

console.log(getFriendsByStatus(friends));

console.groupEnd(); //! Log group end
console.log('-4----------------------------------------------');

