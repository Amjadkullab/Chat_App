import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();



Echo.private(`messanger`)
    .listen('MessageSent', (e) => {
        console.log(e.message);
    });

    // Echo.private(`messenger.1.2`)
    // .listen('MessageSent', (e) => {
    //     console.log(e);
    //     console.log(e.message);
    // });
    Echo.join(`group_chat.1`)
    .here((users) => {
        console.log(users);
    })
    .joining((user) => {
        console.log(user.name);
    })
    .leaving((user) => {
        console.log(user.name);
    })
    .listen('GroupChatMessage', (e) => {
        console.log(e);
    })
    .error((error) => {
        console.error(error);
    });
