import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const subscribeSchema = z.object({
  email: z.string().email(),
});

// Cliente SES
const ses = new SESClient({
  region: process.env.AWS_REGION ?? 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validação do input
    const result = subscribeSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ message: 'Email inválido' }, { status: 400 });
    }

    const { email } = result.data;

    // Configuração do email
    const command = new SendEmailCommand({
      Source: process.env.SES_FROM_EMAIL,
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Subject: {
          Data: 'Bem-vindo à lista de espera!',
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: `
              <h1>Obrigado por se inscrever!</h1>
              <p>Olá,</p>
              <p>Agradecemos seu interesse! Você será notificado assim que tivermos novidades.</p>
            `,
            Charset: 'UTF-8',
          },
        },
      },
    });

    await ses.send(command);

    return NextResponse.json(
      { message: 'Inscrito com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro:', error);
    return NextResponse.json(
      { message: 'Erro ao processar sua inscrição.' },
      { status: 500 }
    );
  }
}
