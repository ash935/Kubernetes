'use strict';

const socket = io();

const outputYou = document.querySelector('.output-you');
const outputBot = document.querySelector('.output-bot');








socket.on('chat message', function(text) {
    outputYou.textContent = text;
});
socket.on('bot reply', function(replyText) {
    outputBot.textContent = replyText;
});




