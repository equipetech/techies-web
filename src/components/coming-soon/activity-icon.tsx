interface ActivityIconProps {
  Icon: React.ElementType;
  className?: string;
}

export default function ActivityIcon({ Icon, className }: ActivityIconProps) {
  return (
    <div className={`bg-orange-500/20 p-3 rounded-full ${className}`}>
      <Icon className='w-6 h-6 text-orange-600' />
    </div>
  );
}
