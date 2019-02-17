const server = require('express');
const PORT = process.env.PORT || 9999;
const request = require('request');
const bodyParser = require('body-parser');

server()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false}))
    .get('/', (req, res) => res.send(`Hi there! This is a nodejs-line-api running on PORT: ${ PORT }`))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

    .post('/webhook', function (req, res) {
        let replyToken = req.body.events[0].replyToken;
        let msg = req.body.events[0].message.text;

        console.log(`Message token : ${ replyToken }`);
        console.log(`Message from chat : ${ msg }`);

        res.json({
            status: 200,
            message: `Webhook is working!`
        });
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));
