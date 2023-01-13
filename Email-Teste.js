const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({    host: 'smtp.gmail.com',port: 465,secure: true, auth: {user: 'chargerbattery33@gmail.com',pass: 'msjnhxxpjyknumme', }});

transport.sendMail({from: 'Battery System <chargerbattery33@gmail.com>',to: 'chargerbattery33@gmail.com',subject: 'Alert - Batt#1 Finished',text: 'Olá Email, à bateria está carregada conforme configuração',})
.then(() => console.log('Email enviado com sucesso!'))
.catch((err) => console.log('Erro ao enviar email: ', err));