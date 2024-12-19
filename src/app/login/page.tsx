'use client';

import Link from 'next/link';

import LeftSection from '@/components/LeftSection';
import LogoMobile from '@/components/LogoMobile';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

export default function SignUp() {
  return (
    <div className='flex min-h-screen'>
      {/* Left Section */}
      <LeftSection />

      {/* Right Section */}
      <div className='w-full lg:w-1/2 flex items-center justify-center p-8'>
        <div className='w-full max-w-md space-y-8'>
          <LogoMobile />

          <div className='space-y-2'>
            <h1 className='text-2xl font-semibold'>Entrar</h1>
            <p className='text-sm text-gray-600'>
              Não tem uma conta?{' '}
              <Link
                href='/signup'
                className='text-[#F84D69] hover:text-[#F84D69]/90'
              >
                Criar conta
              </Link>
            </p>
          </div>

          <form className='space-y-6'>
            <div className='space-y-4'>
              <div>
                <Input type='email' placeholder='E-mail' className='h-12' />
              </div>
              <div>
                <Input
                  type='password'
                  placeholder='Password'
                  className='h-12'
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <Checkbox id='remember' className='border-gray-300' />
                <label
                  htmlFor='remember'
                  className='ml-2 text-sm text-gray-600'
                >
                  Lembrar-me
                </label>
              </div>
              <Link
                href='/forgot-password'
                className='text-sm text-[#F84D69] hover:text-[#F84D69]/90'
              >
                Esqueceu a senha?
              </Link>
            </div>

            <Button
              type='submit'
              className='w-full bg-[#F84D69] hover:bg-[#F84D69]/90 text-white'
            >
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
