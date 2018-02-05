// Load the SDK
const AWS = require('aws-sdk')
const Stream = require('stream')
const Speaker = require('speaker')


AWS.config.accessKeyId='accessKeyId'
AWS.config.secretAccessKey='secretAccessKey'
AWS.config.region='us-east-1'
// Create an Polly client
const Polly = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'us-east-1'
})

// Create the Speaker instance
const Player = new Speaker({
    channels: 1,
    bitDepth: 16,
    sampleRate: 16000
})

let params = {
    'Text': 'Hi, I am Polly',
    'OutputFormat': 'pcm',
    'VoiceId': 'Kimberly'
}

Polly.synthesizeSpeech(params, (err, data) => {
    if (err) {
        console.log(err.code)
    } else if (data) {
        if (data.AudioStream instanceof Buffer) {
            // Initiate the source
            var bufferStream = new Stream.PassThrough()
            // convert AudioStream into a readable stream
            bufferStream.end(data.AudioStream)
            // Pipe into Player
            bufferStream.pipe(Player)
        }
    }
})