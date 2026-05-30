import { useState } from 'react';
import { testimonials } from '../../data/testimonials';
import TestimonialCard from '../ui/TestimonialCard';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(1);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const left = (current - 1 + testimonials.length) % testimonials.length;

  const right = (current + 1) % testimonials.length;

  return (
    <section id='testimonials' className=' py-10 overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4 text-center'>
        <h2
          className='text-black dark:text-white text-[28px]
              md:text-[40px] font-bold mb-3'
        >
          What Partners Say About Working With Us
        </h2>

        <p className='text-[#717680] mb-14'>
          Trusted voices. Real experiences. Proven results.
        </p>

        {/* Desktop */}
        <div className='hidden md:block relative overflow-hidden'>
          {/* left arrow */}
          <button
            onClick={prev}
            className='
          absolute left-4 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 rounded-full
         bg-black/50 dark:bg-black/70 border border-white/10
         text-white text-xl
         hover:bg-orange-500
          transition'
          >
            ←
          </button>

          {/* right arrow */}
          <button
            onClick={next}
            className='
          absolute right-4 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 rounded-full
         bg-black/50 dark:bg-black/70 border border-white/10
         text-white text-xl
         hover:bg-orange-500
          transition'
          >
            →
          </button>

          {/* fade left */}
          <div className='absolute left-0 top-0 h-full w-32 z-20 bg-linear-to-r dark:from-black to-transparent' />

          {/* fade right */}
          <div className='absolute right-0 top-0 h-full w-32 z-20 bg-linear-to-l from-white dark:from-black to-transparent' />

          <div className='flex justify-center items-center gap-6'>
            {/* card left */}
            <div className='w-[320px] -ml-40 opacity-60 shrink-0'>
              <TestimonialCard testimonial={testimonials[left]} />
            </div>

            {/* card mid active */}
            <div className='w-130 shrink-0 z-10'>
              <TestimonialCard testimonial={testimonials[current]} active />
            </div>

            {/* card right */}
            <div className='w-[320px] -mr-40 opacity-60 shrink-0'>
              <TestimonialCard testimonial={testimonials[right]} />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className='md:hidden'>
          <TestimonialCard testimonial={testimonials[current]} active />
        </div>

        {/* dots under */}
        <div className='flex justify-center gap-3 mt-8'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                w-3 h-3 rounded-full transition
                ${current === index ? 'bg-[#FF6C37]' : 'bg-[#DEDCDC]'}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
