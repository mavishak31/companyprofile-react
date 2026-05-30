import { useState } from 'react';
import { industries } from '../../data/industries';

export default function IndustryTabs() {
  const [active, setActive] = useState('fintech');

  const selected = industries.find((item) => item.id === active);

  return (
    <div className='grid gap-10 md:grid-cols-[180px_1fr]'>
      {/* left tabs */}
      <div className='space-y-5'>
        {industries.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`
                block
                font-bold
                text-left
                text-sm
                transition
                border-l
                pl-3

                ${
                  active === item.id
                    ? 'border-orange-500 text-black dark:text-white'
                    : 'border-[#AAAAAA] dark:border-[#535862] text-[#AAAAAA] dark:text-[#535862] hover:text-black dark:hover:text-white'
                }
              `}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* right content */}
      {selected && (
        <div>
          <p className='mb-6 max-w-3xl text-sm leading-7 text-black dark:text-white'>
            {selected.description}
          </p>

          <img
            src={selected.image}
            alt={selected.title}
            className='
              w-full
              rounded-2xl
              object-cover
              max-h-80
            '
          />
        </div>
      )}
    </div>
  );
}
