'use client';

import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
      <main className='container  mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6'>
          Bem-vindo de volta, Usuário!
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Upcoming Activities */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center space-x-2'>
                <Calendar className='h-5 w-5 text-[#F84D69]' />
                <span>Próximas Atividades</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/activity/1'
                    className='text-blue-600 hover:underline'
                  >
                    Caminhada no Parque
                  </Link>
                  <p className='text-sm text-gray-600'>Amanhã, 09:00</p>
                </li>
                <li>
                  <Link
                    href='/activity/2'
                    className='text-blue-600 hover:underline'
                  >
                    Aula de Yoga
                  </Link>
                  <p className='text-sm text-gray-600'>Quarta-feira, 18:00</p>
                </li>
                <li>
                  <Link
                    href='/activity/3'
                    className='text-blue-600 hover:underline'
                  >
                    Clube do Livro
                  </Link>
                  <p className='text-sm text-gray-600'>Sexta-feira, 19:30</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Groups */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center space-x-2'>
                <Users className='h-5 w-5 text-[#F84D69]' />
                <span>Seus Grupos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/group/1'
                    className='text-blue-600 hover:underline'
                  >
                    Amantes da Natureza
                  </Link>
                  <p className='text-sm text-gray-600'>142 membros</p>
                </li>
                <li>
                  <Link
                    href='/group/2'
                    className='text-blue-600 hover:underline'
                  >
                    Clube de Fotografia
                  </Link>
                  <p className='text-sm text-gray-600'>89 membros</p>
                </li>
                <li>
                  <Link
                    href='/group/3'
                    className='text-blue-600 hover:underline'
                  >
                    Grupo de Corrida
                  </Link>
                  <p className='text-sm text-gray-600'>56 membros</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Recommended Activities */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center space-x-2'>
                <Calendar className='h-5 w-5 text-[#F84D69]' />
                <span>Atividades Recomendadas</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/activity/4'
                    className='text-blue-600 hover:underline'
                  >
                    Workshop de Pintura
                  </Link>
                  <p className='text-sm text-gray-600'>Sábado, 14:00</p>
                </li>
                <li>
                  <Link
                    href='/activity/5'
                    className='text-blue-600 hover:underline'
                  >
                    Torneio de Xadrez
                  </Link>
                  <p className='text-sm text-gray-600'>Domingo, 10:00</p>
                </li>
                <li>
                  <Link
                    href='/activity/6'
                    className='text-blue-600 hover:underline'
                  >
                    Aula de Culinária
                  </Link>
                  <p className='text-sm text-gray-600'>Segunda-feira, 19:00</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Create Activity Button */}
        <div className='mt-8 text-center'>
          <Button className='bg-[#F84D69] hover:bg-[#F84D69]/90 text-white px-6 py-2'>
            Criar Nova Atividade
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
}
