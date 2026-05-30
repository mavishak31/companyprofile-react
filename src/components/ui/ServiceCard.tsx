import type { IServiceItem } from '../../types';

const ServiceCard = ({ title, description, icon }: IServiceItem) => {
  return (
    <div
      className='
        relative
        overflow-visible
        bg-[#FAFAFA]
        dark:bg-[#0A0D12]
        border
        border-[#DEDCDC]
        dark:border-[#181D27]
        rounded-2xl
        px-4
        pt-16
        pl-4
        pb-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-orange-500
      '
    >
      {/* ICON */}
      <img
        src={icon}
        alt={title}
        className='w-16 h-16 md:w-20 md:h-20 object-contain mb-4 absolute -top-5 md:-top-6 left-6'
      />

      {/* TITLE */}
      <h3
        className='
          text-lg
          font-semibold
          text-black
          dark:text-white
          mb-3
        '
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className='
          text-sm
          leading-relaxed
          text-gray-600
          dark:text-gray-400
        '
      >
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
