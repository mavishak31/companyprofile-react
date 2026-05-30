import type { ITestimonial } from '../../types';
import kutip from '../../assets/icon/kutip.png';
import rating from '../../assets/icon/rating.png';

interface Props {
  testimonial: ITestimonial;
  active?: boolean;
}

export default function TestimonialCard({
  testimonial,
  active = false,
}: Props) {
  return (
    <div
      className={`
        relative rounded-3xl border transition-all duration-500
        bg-[#FAFAFA] dark:bg-[#0A0D12] p-8 mt-2 mb-5 text-center
        ${
          active
            ? 'opacity-100 scale-100 border-[#DEDCDC] dark:border-[#181D27] z-10'
            : 'opacity-40 scale-95 border-white/10'
        }
      `}
    >
      {/* <div className='text-[#FF623E] text-6xl leading-none absolute top-4 left-6'>
        “
      </div> */}
      <img
        src={kutip}
        alt='“'
        className='text-[#FF623E] absolute -top-7 left-12 w-12 h-12 '
      />

      <div className='mb-4 text-yellow-400 flex justify-center'>
        {/* {'★'.repeat(testimonial.rating)} */}
        <img src={rating} alt='rating' className='' />
      </div>

      <p className='text-base text-black dark:text-white leading-relaxed mb-6'>
        {testimonial.message}
      </p>

      <h4 className='text-black dark:text-white font-semibold'>
        {testimonial.name}
      </h4>

      <p className='text-[#FF623E]'>
        {testimonial.role} at {testimonial.company}
      </p>

      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className='absolute left-1/2 -translate-x-1/2 -bottom-8 w-16 h-16 rounded-full mx-auto mt-5 object-cover'
      />
    </div>
  );
}
