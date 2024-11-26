import { sendEmail } from '@/lib/email-utils';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, subject, message } = await request.json();

  try {
    await sendEmail({
      to: 'isaacsvianna@gmail.com',
      subject: `[Contato] ${subject}`,
      message: `Mensagem de: ${email} <br><br> ${message}`,
    });

    return NextResponse.json({ message: 'Contato enviado com sucesso!' });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: 'Erro ao enviar o contato.' },
      { status: 500 }
    );
  }
}
