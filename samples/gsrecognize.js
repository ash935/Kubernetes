var speech = require('google-speech-microphone');

speech.getSpeechService({
    GOOGLE_APPLICATION_CREDENTIALS: 'C:\\Users\\admin\\WebstormProjects\\node-js-SpeechRecognition\\samples\\My First Project.json',

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