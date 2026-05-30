import { useState } from 'react';

import Container from '../ui/Container';
import ProcessCard from '../ui/ProcessCard';

import type { IProcessItem } from '../../types';

const processItems: IProcessItem[] = [
  {
    id: 1,
    title: 'Discovery & Consultation',
    description: 'Understand Your Needs & Goals',
  },
  {
    id: 2,
    title: 'Planning & Strategy',
    description: 'Build a clear, Scalable Roadmap',
  },
  {
    id: 3,
    title: 'Design & Prototyping',
    description: 'Craft UX That Converts',
  },
  {
    id: 4,
    title: 'Development & Implementation',
    description: 'Deliver With Speed & Precision',
  },
  {
    id: 5,
    title: 'Testing & Optimization',
    description: 'Ensure Quality at Every Step',
  },
  {
    id: 6,
    title: 'Launch & Growth',
    description: 'Scale, Measure & Improve Continuously',
  },
];

const ProcessSection = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id='process' className='py-10 px-4'>
      <Container>
        {/* TITLE */}
        <div className='text-center mb-20'>
          <h2 className='text-[28px] md:text-[40px] font-bold text-black dark:text-white mb-4 '>
            Our Process
          </h2>

          <p className='text-[#717680] dark:text-[#A4A7AE] text-lg'>
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        {/* MOBILE */}
        <div className='lg:hidden relative pl-10 space-y-6'>
          {/* LEFT LINE */}
          <div className='absolute left-4 top-10 bottom-4 w-0.5 bg-[#DFDFDF] dark:bg-[#252B37] -translate-x-1/2' />

          {processItems.map((item) => (
            <div key={item.id} className='relative flex items-start'>
              {/* NUMBER DOTS */}
              <div
                className='
                absolute
                -left-6
                top-1/2
                -translate-y-1/2
                -translate-x-1/2
                w-8
                h-8
                rounded-full
                bg-[#FF623E]
                flex
                items-center
                justify-center
                text-white
                text-sm
                font-bold
                z-10
              '
              >
                {item.id}
              </div>

              <div className='w-full ml-6'>
                <ProcessCard
                  item={item}
                  open={openId === item.id}
                  onClick={() => toggle(item.id)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP */}
        <div className='hidden lg:block relative max-w-5xl mx-auto'>
          <div
            className='
            absolute
            left-1/2
            top-8
            bottom-10
            w-0.5
            bg-[#DFDFDF]
            dark:bg-[#252B37]
            -translate-x-1/2
          '
          />

          <div className='space-y-12'>
            {processItems.map((item, index) => (
              <div
                key={item.id}
                className={`
                  flex items-center
                  ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
                `}
              >
                <div className='w-1/2 px-8'>
                  <ProcessCard
                    item={item}
                    open={openId === item.id}
                    onClick={() => toggle(item.id)}
                  />
                </div>

                <div
                  className='
                  w-12
                  h-12
                  rounded-full
                  bg-[#FF623E]
                  flex
                  items-center
                  justify-center
                  text-white
                  font-bold
                  z-10
                  shrink-0
                '
                >
                  {item.id}
                </div>

                <div className='w-1/2' />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
