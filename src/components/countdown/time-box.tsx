export default function TimeBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className='flex flex-col items-center p-4 bg-black/80 border-b-4 border-orange-500 rounded-lg w-24 transform hover:scale-105 transition-all'>
      <span className='text-4xl font-bold text-white mb-1 font-mono'>
        {value.toString().padStart(2, '0')}
      </span>
      <span className='text-sm text-orange-500 uppercase tracking-wider'>
        {label}
      </span>
    </div>
  );
}
