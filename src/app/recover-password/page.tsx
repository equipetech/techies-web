'use client';

import Link from 'next/link';

import LeftSection from '@/components/left-section-login';
import LogoMobile from '@/components/logo-mobile';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
  confirmPassword: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

type FormValues = z.infer<typeof schema>;

export default function RecoverPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitted },
  } = useForm<FormValues>({
    defaultValues: {
      password: '',
      confirmPassword: '',
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
            <h1 className='text-2xl font-semibold'>Definir Nova Senha</h1>
            <p className='text-sm text-gray-600'>
              Por favor, insira sua nova senha abaixo.
            </p>
          </div>

          {errors.root?.message && (
            <Alert variant='destructive'>
              <AlertDescription>{errors.root?.message}</AlertDescription>
            </Alert>
          )}

          {isSubmitted && (
            <Alert variant='success'>
              <AlertDescription>
                Sua senha foi alterada com sucesso. Você pode agora fazer login
                com sua nova senha.
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div className='space-y-4'>
              <div className='relative'>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Nova senha'
                  required
                  className='h-12'
                  {...register('password')}
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute inset-y-0 right-0 pr-3 flex items-center'
                >
                  {showPassword ? (
                    <EyeOffIcon className='h-5 w-5 text-gray-400' />
                  ) : (
                    <EyeIcon className='h-5 w-5 text-gray-400' />
                  )}
                </button>
              </div>
              <div className='relative'>
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='Confirmar nova senha'
                  required
                  className='h-12'
                  {...register('confirmPassword')}
                />
                <button
                  type='button'
                  onClick={() => setShowConfirmPassword(!showPassword)}
                  className='absolute inset-y-0 right-0 pr-3 flex items-center'
                >
                  {showPassword ? (
                    <EyeOffIcon className='h-5 w-5 text-gray-400' />
                  ) : (
                    <EyeIcon className='h-5 w-5 text-gray-400' />
                  )}
                </button>
              </div>
            </div>

            <Button
              type='submit'
              className='w-full bg-[#F84D69] hover:bg-[#F84D69]/90 text-white'
            >
              Definir Nova Senha
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
    </div>
  );
}
