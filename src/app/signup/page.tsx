'use client';

import Link from 'next/link';

import LeftSection from '@/components/left-section-login';
import LogoMobile from '@/components/logo-mobile';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  return (
    <div className='flex min-h-screen'>
      {/* Left Section */}
      <LeftSection />

      {/* Right Section */}
      <div className='flex w-full flex-col justify-center bg-white px-4 sm:px-6 lg:w-1/2 lg:px-8'>
        <div className='mx-auto w-full max-w-md'>
          <LogoMobile />

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
