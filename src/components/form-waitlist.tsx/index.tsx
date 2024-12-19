'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface WaitlistFormProps {
  endpoint: string;
  successMessage: string;
  buttonLabel: string;
  formTitle: string;
}

const newsletterSchema = z.object({
  email: z.string().email('E-mail inválido'),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export default function WaitlistForm({
  endpoint,
  successMessage,
  buttonLabel,
  formTitle,
}: WaitlistFormProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting: loading },
  } = useForm<NewsletterFormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);

      if (!response.ok) {
        throw new Error(responseData.message || 'Erro ao fazer inscrição');
      }

      toast.success(successMessage);

      reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Erro desconhecido');
    }
  };

  return (
    <div className='w-full max-w-md mx-auto p-6'>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div className='flex flex-col space-y-2'>
          <label htmlFor='email' className='text-sm font-medium'>
            {formTitle}
          </label>
          <div className='flex gap-2'>
            <Input
              type='email'
              id='email'
              placeholder='seu@email.com'
              className='h-12'
              required
              {...register('email')}
            />

            <Button
              type='submit'
              className='w-fit h-12 bg-[#F84D69] hover:bg-[#F84D69]/90 text-white'
              isLoading={loading}
            >
              {buttonLabel}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
