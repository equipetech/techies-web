interface SendEmailOptions {
  to: string;
  subject: string;
  message: string;
  fromName?: string;
  fromEmail?: string;
}

export async function sendEmail(options: SendEmailOptions): Promise<void> {
  const {
    to,
    subject,
    message,
    fromName = 'Equipe Activ8!',
    fromEmail = 'noreply@activ8.com.br',
  } = options;

  try {
    const response = await fetch(process.env.BREVO_API_URL!, {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY ?? '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: fromName, email: fromEmail },
        to: [{ email: to }],
        subject: subject,
        htmlContent: message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar email: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
    throw new Error('Erro ao enviar o email');
  }
}
