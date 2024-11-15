import { SESClient } from '@aws-sdk/client-ses';
import { fromIni } from '@aws-sdk/credential-provider-ini';

export const ses = new SESClient({
  region: process.env.AWS_REGION ?? 'us-east-1',
  credentials: fromIni({
    profile: 'nagalera',
  }),
});
