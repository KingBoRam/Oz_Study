const mailer = require('nodemailer');
const welcome = require('./welcome_template');
const goodbye = require('./goodbye-template');

const getEmailData = (to, name, template) => {
  let data = null;
  // 템플릿은 타입
  switch (template) {
    case 'welcome':
      data = {
        form: '보내는 사람 이름 <userId@gmail.com>',
        to,
        //제목
        subject: `Hello ${name}`,
        html: welcome(),
      };
      break;
    case 'goodbye':
      data = {
        form: '보내는 사람 이름 <userId@gmail.com>',
        to,
        //제목
        subject: `Goodbye ${name}`,
        html: goodbye(),
      };
      break;
    default:
      data;
  }
  return data;
};

const sendEmail = (to, name, type) => {
  const transporter = mailer.createTrnasporter({
    service: 'Gmail',
    auth: {
      user: 'boramy9494@gmaill.com',
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mail = getEmailData(to, name, type);
  transporter.sendEmail(mail, (error, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('email 잘 보냈어요.');
    }
    transporter.close();
  });
};

module.exports = sendEmail;
