import { sendEmail } from '@/lib/email-utils';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  try {
    await sendEmail({
      to: email,
      subject: 'Bem-vindo à nossa Newsletter!',
      message: `<p>Obrigado por se inscrever! Estamos felizes em tê-lo conosco.</p>`,
    });

    return NextResponse.json({ message: 'Inscrição realizada com sucesso!' });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: 'Erro ao enviar a inscrição.' },
      { status: 500 }
    );
  }
}
