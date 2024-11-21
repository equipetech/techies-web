import { sendWelcomeEmail } from '@/lib/mailer-send';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email é obrigatório' },
        { status: 400 }
      );
    }

    const success = await sendWelcomeEmail(email);

    if (!success) {
      return NextResponse.json(
        { error: 'Erro ao enviar email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Inscrito com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao se inscrever:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
