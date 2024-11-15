import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend';
import { NextResponse } from 'next/server';

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: 'Email é obrigatório' },
        { status: 400 }
      );
    }

    const sentFrom = new Sender(
      process.env.MAILERSEND_FROM_EMAIL!,
      'Na Galera!'
    );

    const template = {
      template_id: process.env.MAILERSEND_TEMPLATE_ID as string,
      variables: [
        {
          email: email,
        },
      ],
    };

    const recipients = [new Recipient(email)];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject('Bem-vindo à lista de espera!')
      .setTemplateId(template.template_id);

    await mailerSend.email.send(emailParams);

    return NextResponse.json(
      { message: 'Inscrito com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar inscrição:', error);
    return NextResponse.json(
      { message: 'Erro ao processar sua inscrição. Tente novamente.' },
      { status: 500 }
    );
  }
}
