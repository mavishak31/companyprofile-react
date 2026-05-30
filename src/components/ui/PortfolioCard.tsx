import type { IPortfolioItem } from '../../types';

interface IProps {
  item: IPortfolioItem;
}

export default function PortfolioCard({ item }: IProps) {
  return (
    <div className='w-full'>
      <div className='overflow-hidden rounded-2xl'>
        <img
          src={item.image}
          alt={item.title}
          className='
            h-auto
            w-full
            object-cover
            transition
            duration-300
            hover:scale-105
          '
        />
      </div>

      <p className='mt-4 text-sm text-[#FF623E]'>{item.category}</p>

      <h3 className='mt-1 text-xl font-medium text-black dark:text-white'>
        {item.title}
      </h3>
    </div>
  );
}
