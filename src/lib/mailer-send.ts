import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend';

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY ?? '',
});

export const sendWelcomeEmail = async (email: string) => {
  const emailParams = new EmailParams()
    .setFrom(
      new Sender(
        process.env.MAILERSEND_FROM_EMAIL ?? '',
        process.env.MAILERSEND_FROM_NAME ?? ''
      )
    )
    .setTo([new Recipient(email)])
    .setSubject('Bem-vindo à nossa Newsletter!')
    .setHtml(
      '<h1>Obrigado por se inscrever!</h1><p>Você receberá nossas atualizações.</p>'
    );

  try {
    await mailerSend.email.send(emailParams);
    return true;
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return false;
  }
};
