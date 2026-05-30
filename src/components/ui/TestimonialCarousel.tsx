import { useState } from 'react';
import { testimonials } from '../../data/testimonials';
import TestimonialCard from './TestimonialCard';

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className='relative'>
      {/* Desktop arrows */}
      <button
        onClick={prev}
        className='hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-[#111827] p-3 rounded-full'
      >
        ←
      </button>

      <button
        onClick={next}
        className='hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-[#111827] p-3 rounded-full'
      >
        →
      </button>

      {/* Card */}
      <div
        className='touch-pan-x'
        onTouchStart={(e) =>
          (e.currentTarget.dataset.startX = e.touches[0].clientX.toString())
        }
        onTouchEnd={(e) => {
          const start = Number(e.currentTarget.dataset.startX);

          const end = e.changedTouches[0].clientX;

          if (start - end > 50) next();

          if (end - start > 50) prev();
        }}
      >
        <TestimonialCard testimonial={testimonials[active]} />
      </div>

      {/* Dots */}
      <div className='flex justify-center gap-3 mt-8'>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`w-3 h-3 rounded-full transition ${
              active === index ? 'bg-[#ff6236]' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
