import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-100 py-10'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <Link href='/'>
              <Image
                src='https://activ8-public.s3.us-east-1.amazonaws.com/logos/SVGs/Group+11.svg'
                alt='activ8 logo'
                width={140}
                height={24}
                priority
              />
            </Link>
          </div>
          <nav>
            <ul className='flex space-x-6'>
              <li>
                <Link
                  href='/terms'
                  className='text-gray-600 hover:text-[#F84D69]'
                >
                  Termos
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  className='text-gray-600 hover:text-[#F84D69]'
                >
                  Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-600 hover:text-[#F84D69]'
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='mt-8 text-center text-gray-600'>
          <p>
            &copy; {new Date().getFullYear()} <b>activ8</b>. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
