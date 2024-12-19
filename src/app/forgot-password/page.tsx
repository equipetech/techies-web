'use client';

import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import LeftSection from '@/components/left-section-login';
import LogoMobile from '@/components/logo-mobile';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const schema = z.object({
  email: z.string().email('E-mail inválido'),
});

type FormValues = z.infer<typeof schema>;

export default function ForgotPassword() {
  const { handleSubmit, register } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className='flex min-h-screen'>
      {/* Left Section */}
      <LeftSection />
      {/* Right Section */}
      <div className='w-full lg:w-1/2 flex items-center justify-center p-8'>
        <div className='w-full max-w-md space-y-8'>
          <LogoMobile />

          <div className='space-y-2'>
            <h1 className='text-2xl font-semibold'>Recuperar Senha</h1>
            <p className='text-sm text-gray-600'>
              Digite seu e-mail para receber as instruções de recuperação de
              senha.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div>
              <Input
                type='email'
                placeholder='E-mail'
                required
                className='h-12'
                {...register('email')}
              />
            </div>

            <Button
              type='submit'
              className='w-full bg-[#F84D69] hover:bg-[#F84D69]/90 text-white'
            >
              Enviar Instruções
            </Button>
          </form>

          <div className='text-center'>
            <Link
              href='/login'
              className='text-sm text-[#F84D69] hover:text-[#F84D69]/90'
            >
              Voltar para o login
            </Link>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
