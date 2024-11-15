'use client';

import confetti from 'canvas-confetti';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import React, { useCallback, useState } from 'react';
import { Alert, AlertDescription } from '../ui/alert';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const triggerConfetti = useCallback(() => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#ff6b6b', '#ff922b', '#ffd43b'],
    });

    fire(0.2, {
      spread: 60,
      colors: ['#ff922b', '#ffd43b', '#ff6b6b'],
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#ffd43b', '#ff6b6b', '#ff922b'],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#ff6b6b', '#ff922b', '#ffd43b'],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#ff922b', '#ffd43b', '#ff6b6b'],
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao se inscrever');
      }

      setStatus('success');
      setEmail('');
      triggerConfetti();
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Erro ao se inscrever'
      );
    }
  };

  return (
    <div className='w-full max-w-md mx-auto p-6'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='flex flex-col space-y-2'>
          <label htmlFor='email' className='text-sm font-medium'>
            Inscreva-se para saber quando lançarmos!
          </label>
          <div className='flex gap-2'>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='seu@email.com'
              className='flex-1 px-4 py-3 bg-orange-700/10 border-2 border-orange-600/30 rounded-lg text-zinc-700 placeholder-orange-900 focus:outline-none focus:border-orange-500 transition-all uppercase text-sm tracking-wider'
              required
              disabled={status === 'loading' || status === 'success'}
            />

            <button
              type='submit'
              disabled={status === 'loading' || status === 'success'}
              className='px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-400 transition-all uppercase tracking-wider'
            >
              {status === 'loading' ? (
                <Loader2 className='w-5 h-5 animate-spin' />
              ) : (
                'Inscrever'
              )}
            </button>
          </div>
        </div>

        {status === 'success' && (
          <Alert className='bg-green-50 border-green-200'>
            <CheckCircle2 className='h-4 w-4 text-green-600' />
            <AlertDescription className='text-green-600'>
              Inscrição realizada com sucesso! Entraremos em contato em breve.
            </AlertDescription>
          </Alert>
        )}

        {status === 'error' && (
          <Alert variant='destructive'>
            <AlertCircle className='h-4 w-4' />
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
      </form>
    </div>
  );
}
