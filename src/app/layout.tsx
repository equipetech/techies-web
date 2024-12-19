import { AuthProvider } from '@/contexts/auth-context';
import ReactQueryProvider from '@/providers/react-query-provider';
import type { Metadata } from 'next';
import { Montserrat_Alternates } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const montserrat = Montserrat_Alternates({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | activ8',
    default: 'activ8',
  },
  description:
    'activ8! onde você encontra sua galera, e compartilha suas experiências.',
  authors: [{ name: 'DIV Tecnologia' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${montserrat.className} h-full text-base antialiased`}
    >
      <body className='flex min-h-full flex-col'>
        <ReactQueryProvider>
          <AuthProvider>
            {children}
            <Toaster richColors position='top-center' />
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
