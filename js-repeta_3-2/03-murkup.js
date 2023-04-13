//! Видео - 1:26:00...1:29:30

/*
*Пример использования деструкторизации объекта и "патерна" объект настроек.
*/

// Исходный объект, который будет использоваться в качестве набора настроек для функции.
const profile = {
    userName: 'Jacques Gluke',
    tag: 'jqluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://i.pravatar.cc/400?img=6',
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};

// Код функции
const makeProfileMarkup = function (userProfile) {
    // Деструкторизируем объект-настроек в теле функции
    const {
        avatar,
        name,
        tag,
        location = 'Planet Earth',
        stats: { followers, views, likes },
    } = userProfile;

    // В качестве результата работы функции возвращаем код HTML разметки в формате шаблонной строки, с использованием соответствующих свойств деструкторизированного объекта в этом коде.
    return `<div>
    <img src="${avatar}" alt="user avatar">
    <p>${name}<span>@${tag}</span></p>
    <p>Location: ${location}</p>
    <ul>
        <li>Followers: ${followers}</li>
        <li>Views: ${views}</li>
        <li>Likes: ${likes}</li>
    </ul>
    </div>`;
};

// Присваиваем переменной "murkup" значение -> функцию с аргументом в виде вышеописанного параметра
const murkup = makeProfileMarkup(profile);

// Выводим в лог текст генерируемого функцией HTML кода
console.log(murkup);

// Вставляем в HTML документ сгенерированный функцией код
document.body.insertAdjacentHTML('afterbegin', murkup)