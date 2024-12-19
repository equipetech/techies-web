import Image from 'next/image';
import Link from 'next/link';

import Footer from '@/components/footer';
import WaitlistForm from '@/components/form-waitlist.tsx';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='min-h-screen bg-white text-gray-800'>
      {/* Header */}
      <header className='container mx-auto px-4 py-6 flex justify-between items-center'>
        <Link href='/'>
          <Image
            src='https://activ8-public.s3.us-east-1.amazonaws.com/logos/SVGs/Group+2.svg'
            alt='activ8 logo'
            width={140}
            height={24}
            priority
          />
        </Link>
        <nav>
          <ul className='flex space-x-6'>
            <li>
              <Link href='/about' className='hover:text-[#F84D69]'>
                Sobre
              </Link>
            </li>
            <li>
              <Link href='/activities' className='hover:text-[#F84D69]'>
                Atividades
              </Link>
            </li>
            <li>
              <Link href='/login' className='hover:text-[#F84D69]'>
                Entrar
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className='relative h-[80dvh] overflow-hidden'>
        <div className="absolute h-full w-full inset-0  bg-[url('https://activ8-public.s3.us-east-1.amazonaws.com/bolt-pattern.svg')] bg-center animate-bright-pulse z-10 opacity-30" />

        <video
          autoPlay
          loop
          muted
          className='absolute top-0 left-0 w-full h-full object-cover'
          poster='https://fps.cdnpk.net/videos/media/categories/events.webp'
        >
          <source
            src='https://fps.cdnpk.net/videos/media/categories/events.webm'
            type='video/webm'
          />
          Your browser does not support the video tag.
        </video>
        <div className='absolute inset-0 bg-black bg-opacity-35'></div>
        <div className='relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white'>
          <h1 className='text-6xl font-bold mb-6 text-white'>
            Conecte-se e Divirta-se
          </h1>
          <p className='text-2xl mb-10 max-w-2xl'>
            Encontre pessoas com interesses similares e participe de atividades
            incríveis na sua região.
          </p>
          <Link href='/signup'>
            <Button className='bg-[#F84D69] hover:bg-[#F84D69]/90 text-white px-8 py-3 text-lg'>
              Comece Agora
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className='bg-slate-100 py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-12 text-center text-[#F84D69]'>
            Como Funciona
          </h2>
          <div className='grid md:grid-cols-3 gap-12'>
            <div className='text-center'>
              <div className='bg-[#F84D69] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-10 h-10 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Encontre Grupos</h3>
              <p>
                Descubra grupos de pessoas com interesses similares aos seus.
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-[#F84D69] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-10 h-10 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>
                Participe de Eventos
              </h3>
              <p>
                Junte-se a eventos e atividades que combinam com seu estilo de
                vida.
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-[#F84D69] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-10 h-10 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>
                Faça Novas Amizades
              </h3>
              <p>Conheça pessoas novas e crie conexões duradouras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter and Waitlist Section */}
      <section className='container mx-auto px-4 py-20'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-6 text-[#F84D69]'>
            Fique por dentro das novidades
          </h2>
          <p className='mb-8'>
            Inscreva-se na nossa newsletter e lista de espera para ser um dos
            primeiros a experimentar o Activ8!
          </p>
          <WaitlistForm
            endpoint='/api/email/newsletter'
            successMessage='Inscrição realizada com sucesso! Entraremos em contato em breve.'
            buttonLabel='Inscrever'
            formTitle='Inscreva-se para saber quando lançarmos!'
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
