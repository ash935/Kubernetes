var speech = require('google-speech-microphone');

speech.getSpeechService({
    GOOGLE_APPLICATION_CREDENTIALS: 'path',

})
    .then(speechService => {
        return speech.sync({ speechService });
    })
    .then(res => {
        console.log(JSON.stringify(res));
    })
    .catch(err => {
        console.log(err);
    });