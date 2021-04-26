const express = require ('express');
const bodyparser = require ('body-parser');
const sgMail = require('@sendgrid/mail');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(bodyparser.json());

sgMail.setApiKey(process.env.API_SENDGRID)


app.post('/', (req, res) => {
    
    let msg = {
        to: "kevlin.susan@gmail.com",
        from: req.body.email,
        subject: `${req.body.subject} from ${req.body.name}`,
        text: req.body.message
    }
    sgMail.send(msg)
    .then(() => {
        return res.status(200).json({'message' : 'email send'})
    })
    .catch(err => {
        return res.status(400).json({'err' : err})
    })
})

module.exports = {
    path: "api/send-email",
    handler: app
}