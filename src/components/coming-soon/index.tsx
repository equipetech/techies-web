import {
  Bike,
  Dumbbell,
  Handshake,
  MicVocal,
  PartyPopper,
  TentTree,
} from 'lucide-react';
import Countdown from '../countdown';
import WaitlistForm from '../form-waitlist.tsx';
import ActivityIcon from './activity-icon';
import BallsAnimated from './balls-animated';

const ComingSoonPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden'>
      {/* Gradient Orbs */}
      {/* Padrão de fundo diagonal */}
      {/* <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,white_25%,white_50%,transparent_50%,transparent_75%,white_75%,white_100%)] bg-[length:20px_20px]'></div>
      </div> */}
      <BallsAnimated />
      <div className='max-w-4xl w-full text-center space-y-12 relative z-10'></div>
      {/* Círculos decorativos */}
      <div className='absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full -translate-y-1/2 translate-x-1/2'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full translate-y-1/2 -translate-x-1/2'></div>
      <div className='max-w-4xl w-full text-center space-y-8 relative z-10'>
        {/* Logo e Título */}
        <div className='space-y-4 mb-12'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <PartyPopper className='w-12 h-12 text-orange-600' />
            <h1 className='text-6xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500  text-transparent bg-clip-text tracking-tighter'>
              Na Galera!
            </h1>
          </div>
          <p className='text-lg text-orange-800 font-thin tracking-wide'>
            Encontre pessoas. Compartilhe momentos. Viva experiências.
          </p>
        </div>

        {/* Ícones de atividades */}
        <div className='flex flex-wrap justify-center gap-6 mb-12'>
          <ActivityIcon Icon={Dumbbell} className='animate-bounce' />
          <ActivityIcon Icon={Bike} className='animate-bounce delay-100' />
          <ActivityIcon Icon={TentTree} className='animate-bounce delay-200' />
          <ActivityIcon Icon={Handshake} className='animate-bounce delay-300' />
          <ActivityIcon Icon={MicVocal} className='animate-bounce delay-400' />
        </div>

        {/* Countdown */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          <Countdown />
        </div>

        {/* Call to action */}
        <div className='max-w-md mx-auto space-y-6'>
          {/* <div className='flex gap-2'>
            <input
              type='email'
              placeholder='SEU EMAIL PARA NOTIFICAÇÃO'
              className='flex-1 px-4 py-3 bg-teal-700/10 border-2 border-teal-600/30 rounded-lg text-white placeholder-teal-900 focus:outline-none focus:border-yellow-500 transition-all uppercase text-sm tracking-wider'
            />
            <button className='px-6 py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-400 transition-all uppercase tracking-wider'>
              Notificar
            </button>
          </div> */}

          <WaitlistForm />
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
