'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  return (
    <div className='flex min-h-screen'>
      {/* Left Section */}
      <div className='relative hidden w-1/2 m-4 rounded-3xl bg-black lg:block overflow-hidden'>
        <div className="absolute inset-0  bg-[url('https://activ8-public.s3.us-east-1.amazonaws.com/bolt-pattern.svg')] bg-cover -left-20 -top-[20%]" />
        <div className='relative z-10 flex h-full flex-col p-8'>
          <div className='flex items-center gap-2 text-white'>
            <Image
              src='https://activ8-public.s3.us-east-1.amazonaws.com/logos/SVGs/Group+11.svg'
              alt='activ8 logo'
              width={200}
              height={24}
            />
          </div>
          <div className='flex flex-1 flex-col items-center justify-center text-center text-white'>
            <h1 className='mb-6 text-4xl font-bold'></h1>
            {/* <div className='flex gap-2'>
              <div className='h-2 w-2 rounded-full bg-gray-500' />
              <div className='h-2 w-2 rounded-full bg-gray-500' />
              <div className='h-2 w-2 rounded-full bg-white' />
            </div> */}
          </div>
          {/* <Button variant='outline' className='text-white' asChild>
            <Link href='/'>Back to website</Link>
          </Button> */}
        </div>
      </div>

      {/* Right Section */}
      <div className='flex w-full flex-col justify-center bg-white px-4 sm:px-6 lg:w-1/2 lg:px-8'>
        <div className='mx-auto w-full max-w-md'>
          <div className='flex items-center gap-2 lg:hidden'>
            <Image
              src='https://activ8-public.s3.us-east-1.amazonaws.com/logos/SVGs/Group+4.svg'
              alt='activ8 logo2'
              width={200}
              height={24}
            />
          </div>

          <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <h2 className='mt-6 text-3xl font-bold tracking-tight'>
              Criar conta
            </h2>
            <p className='mt-2 text-sm text-gray-600'>
              Já tem uma conta?{' '}
              <Link
                href='/login'
                className='font-medium text-[#FF4365] hover:text-[#FF4365]/90'
              >
                Log in
              </Link>
            </p>

            <form className='mt-8 space-y-6'>
              <div className='grid gap-4'>
                <div className='grid gap-1'>
                  <Input
                    id='firstname'
                    placeholder='Primeiro nome'
                    type='text'
                    className='h-12'
                  />
                </div>
                <div className='grid gap-1'>
                  <Input
                    id='lastname'
                    placeholder='Último nome'
                    type='text'
                    className='h-12'
                  />
                </div>
              </div>
              <div className='grid gap-1'>
                <Input
                  id='email'
                  placeholder='E-mail'
                  type='email'
                  className='h-12'
                />
              </div>
              <div className='grid gap-1'>
                <Input
                  id='password'
                  placeholder='Password'
                  type='password'
                  className='h-12'
                />
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='terms' />
                <label
                  htmlFor='terms'
                  className='text-sm leading-none text-gray-600'
                >
                  Eu concordo com os{' '}
                  <Link
                    href='/terms'
                    className='font-medium text-[#FF4365] hover:text-[#FF4365]/90'
                  >
                    Termos & Condições
                  </Link>
                </label>
              </div>
              <Button className='h-12 w-full bg-[#FF4365] hover:bg-[#FF4365]/90'>
                Criar conta
              </Button>
            </form>

            <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='bg-white px-2 text-gray-500'>
                    Ou entre com
                  </span>
                </div>
              </div>

              <div className='mt-6 grid grid-cols-1 gap-4'>
                <Button variant='outline' className='h-12'>
                  <svg className='mr-2 h-5 w-5' viewBox='0 0 24 24'>
                    <path
                      d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                      fill='#4285F4'
                    />
                    <path
                      d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                      fill='#34A853'
                    />
                    <path
                      d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                      fill='#FBBC05'
                    />
                    <path
                      d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                      fill='#EA4335'
                    />
                  </svg>
                  Google
                </Button>
                {/* <Button variant='outline' className='h-12'>
                  <svg
                    className='mr-2 h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z' />
                  </svg>
                  GitHub
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
