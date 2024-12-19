import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex  flex-col min-h-screen justify-between bg-white text-gray-800'>
      <main className='container mx-auto flex flex-1 flex-col justify-center items-center px-4 relative'>
        <Image
          src={
            'https://activ8-public.s3.us-east-1.amazonaws.com/illustrations/404.svg'
          }
          alt='404'
          width={300}
          height={300}
          priority
        />
        <h1 className='text-4xl md:text-6xl font-bold text-[#F84D69] mb-4'>
          404
        </h1>

        <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-4'>
          Página não encontrada
        </h2>

        <p className='text-lg text-gray-600 text-center max-w-md mb-8'>
          Ops! Parece que a página que você está procurando não existe ou foi
          movida.
        </p>

        <Button className='bg-[#F84D69] hover:bg-[#F84D69] text-white'>
          <Link href='/'>Voltar para a Página Inicial</Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
}
