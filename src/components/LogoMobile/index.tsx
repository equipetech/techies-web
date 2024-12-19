import Image from 'next/image';
import Link from 'next/link';

export default function LogoMobile() {
  return (
    <div className='lg:hidden mb-8'>
      <Link href='/'>
        <Image
          src='https://activ8-public.s3.us-east-1.amazonaws.com/logos/SVGs/Group+4.svg'
          alt='activ8 logo2'
          width={200}
          height={24}
        />
      </Link>
    </div>
  );
}
