import type { IProcessItem } from '../../types';

interface Props {
  item: IProcessItem;
  open: boolean;
  onClick: () => void;
}

const ProcessCard = ({ item, open, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className='
        bg-[#FAFAFA]
        dark:bg-[#0A0D12]
        border
        border-[#DEDCDC]
        dark:border-[#181D27]
        rounded-2xl
        p-6
        cursor-pointer
        hover:border-[#FF623E]
        transition-all
        duration-300
      '
    >
      <div className='flex items-start justify-between gap-4'>
        <div>
          <h3 className='text-black dark:text-white font-semibold'>
            {item.title}
          </h3>
        </div>

        <span className='text-black dark:text-white shrink-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`
      w-5 h-5
      transition-transform
      duration-300
      ${open ? 'rotate-180' : ''}
    `}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </span>
      </div>

      {open && (
        <div className='mt-4 text-sm text-[#717680] dark:text-[#A4A7AE] leading-relaxed'>
          {item.description}
        </div>
      )}
    </div>
  );
};

export default ProcessCard;
