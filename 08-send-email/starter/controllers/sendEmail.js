const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'milton81@ethereal.email',
            pass: 'AbWRYeg1PB2uQ8Usfx'
        }
    });

    let info = await transporter.sendMail({
        from: '"Olumide" <olumideilesanmi10@gmail.com>',
        to: 'bar@example.com',
        subject: 'Hello',
        html: '<h2>Sending Emails with Node.js</h2>'
    });

    res.json(info)
}

module.exports = sendEmail