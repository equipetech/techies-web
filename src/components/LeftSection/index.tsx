import Image from 'next/image';
import Link from 'next/link';

export default function LeftSection() {
  return (
    <div className='relative hidden w-1/2 m-4 rounded-3xl bg-black lg:block overflow-hidden'>
      <div className="absolute inset-0  bg-[url('https://activ8-public.s3.us-east-1.amazonaws.com/bolt-pattern.svg')] bg-cover -left-20 -top-[20%] animate-bright-pulse" />
      <div className='relative z-10 flex h-full flex-col p-8'>
        <div className='flex items-center gap-2 text-white'>
          <Link href='/'>
            <Image
              src='https://activ8-public.s3.us-east-1.amazonaws.com/logos/SVGs/Group+11.svg'
              alt='activ8 logo'
              width={200}
              height={24}
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
