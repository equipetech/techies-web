'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, LogOut, Search } from 'lucide-react';

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className='min-h-screen flex flex-col flex-1 justify-between bg-gray-50'>
      {/* Header */}
      <header className='bg-white shadow'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <div className='flex items-center space-x-4'>
            <Link href='/'>
              <Image
                src='https://activ8-public.s3.us-east-1.amazonaws.com/logos/SVGs/Group+2.svg'
                alt='activ8 logo'
                width={140}
                height={24}
                priority
              />
            </Link>
            <form onSubmit={handleSearch} className='hidden md:flex'>
              <Input
                type='search'
                placeholder='Buscar atividades...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-64'
              />
              <Button type='submit' variant='ghost' size='icon'>
                <Search className='h-4 w-4' />
                <span className='sr-only'>Buscar</span>
              </Button>
            </form>
          </div>
          <nav className='flex items-center space-x-4'>
            <Button variant='ghost' size='icon'>
              <Bell className='h-5 w-5' />
              <span className='sr-only'>Notificações</span>
            </Button>
            <Avatar>
              <AvatarImage src='/placeholder-avatar.jpg' alt='User' />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <Button variant='ghost' size='icon'>
              <LogOut className='h-5 w-5' />
              <span className='sr-only'>Sair</span>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      {children}
    </div>
  );
}
