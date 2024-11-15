'use client';

export default function BallsAnimated() {
  return (
    <>
      <div className='absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply  filter blur-[128px]  opacity-50 animate-blob'></div>
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply  filter blur-[128px]  opacity-50 animate-blob animation-delay-2000'></div>
      <div className='absolute -bottom-8 -left-8 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply  filter blur-[128px]  opacity-50 animate-blob animation-delay-4000'></div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(400px, -50px) scale(2);
          }
          66% {
            transform: translate(-200px, 200px) scale(0.5);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}
