'use client';

import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useAuthContext } from '@/contexts/auth-context';

import LeftSection from '@/components/left-section-login';
import LogoMobile from '@/components/logo-mobile';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const { signIn, isLoading } = useAuthContext();

  const onSubmit = async (data: LoginFormValues) => {
    const payload = {
      email: data.email,
      senha: data.password,
    };

    signIn(payload);
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

          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-4'>
              <div>
                <Input
                  type='email'
                  placeholder='E-mail'
                  className='h-12'
                  {...register('email')}
                />
                {errors.email && (
                  <span className='text-sm text-red-500'>
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <Input
                  type='password'
                  placeholder='Password'
                  className='h-12'
                  {...register('password')}
                />
                {errors.password && (
                  <span className='text-sm text-red-500'>
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <Checkbox
                  id='remember'
                  className='border-gray-300'
                  {...register('rememberMe')}
                />
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
              isLoading={isLoading}
            >
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
