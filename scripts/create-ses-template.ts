import {
  CreateTemplateCommand,
  SESClient,
  UpdateTemplateCommand,
} from '@aws-sdk/client-ses';
import { fromIni } from '@aws-sdk/credential-provider-ini';

const ses = new SESClient({
  region: process.env.AWS_REGION ?? 'us-east-1',
  credentials: fromIni({
    profile: 'nagalera',
  }),
});

async function createOrUpdateTemplate() {
  const templateData = {
    TemplateName: 'NagaleraWaitlist',
    SubjectPart: 'Bem-vindo à lista de espera do Na Galera! 🎉',
    TextPart: `
      Olá {{email}}!
      
      Obrigado por se juntar à nossa lista de espera.
      
      Você será um dos primeiros a saber quando lançarmos!
      
      Atenciosamente,
      Equipe Na Galera!
    `,
    HtmlPart: `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bem-vindo ao Na Galera!</title>
</head>

<body style="margin: 0; padding: 0; background-color: #f7f7f7; font-family: Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0"
          style="background-color: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td
              style="padding: 100px; text-align: center;  border-radius: 8px 8px 0 0; background: #000 url(https://images.unsplash.com/photo-1496024840928-4c417adf211d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat center top 0%;">
              <h1 style="margin: 0; color: black; font-size: 28px;">Bem-vindo ao Na Galera! 🎉</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.5; color: #333;">
                Olá {{email}},
              </p>
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.5; color: #333;">
                Estamos muito felizes em ter você na nossa lista de espera! Você será um dos primeiros a saber quando
                lançarmos nossa plataforma.
              </p>
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.5; color: #333;">
                Enquanto isso, aqui está o que você pode esperar:
              </p>
              <ul style="margin: 0 0 20px; padding-left: 20px; color: #333;">
                <li style="margin-bottom: 10px;">Atualizações exclusivas sobre nosso progresso</li>
                <li style="margin-bottom: 10px;">Acesso antecipado a recursos especiais</li>
                <li style="margin-bottom: 10px;">Ofertas especiais para early adopters</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td style="padding: 0 40px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <div>
                      <a href="https://www.nagalera.com.br"
                        style="display: inline-block; margin: 0 10px; background-color: #fd9e0e; color: #fff; padding: 20px; border-radius: 12px; text-decoration: none;">Visite
                        o nosso site!</a>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 40px; text-align: center; background-color: #f8f9fa; border-radius: 0 0 8px 8px;">
              <p style="margin: 0; font-size: 14px; color: #666;">
                © 2024 Na Galera! Todos os direitos reservados.
              </p>
              <p style="margin: 10px 0 0; font-size: 12px; color: #999;">
                Você está recebendo este email porque se inscreveu em nossa lista de espera.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
  };

  try {
    // Tenta criar novo template
    await ses.send(
      new CreateTemplateCommand({
        Template: templateData,
      })
    );
    console.log('Template criado com sucesso!');
  } catch (error) {
    if (error instanceof Error && error.name === 'AlreadyExistsException') {
      // Se já existe, atualiza
      await ses.send(
        new UpdateTemplateCommand({
          Template: templateData,
        })
      );
      console.log('Template atualizado com sucesso!');
    } else {
      console.error('Erro:', error);
    }
  }
}

createOrUpdateTemplate();
