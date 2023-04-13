//! Видео - 1:25:50...

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

// Пример использования деструкторизации объекта
const makeProfileMarkup = function (userProfile) {
    const {
        avatar,
        name,
        tag,
        location = 'Planet Earth',
        stats: { followers, views, likes },
    } = userProfile;

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

const murkup = makeProfileMarkup(profile);

console.log(murkup);

document.body.insertAdjacentHTML('afterbegin', murkup)