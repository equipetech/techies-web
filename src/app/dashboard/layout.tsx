import HeaderLogged from '@/components/header-logged';

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen flex flex-col flex-1 justify-between bg-gray-50'>
      <HeaderLogged />
      {children}
    </div>
  );
}
