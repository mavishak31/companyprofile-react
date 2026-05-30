import { useState } from 'react';

import FAQItem from '../ui/FAQItem';
import { faqs } from '../../data/faq.data';
import Container from '../ui/Container';
import consultation from '../../assets/consultation.png';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id='faqs' className='text-black dark:text-white py-10 px-4'>
      <Container>
        {/* header*/}
        <div className='flex flex-col md:flex-row md:justify-between md:items-end gap-4'>
          <h2
            className='text-[28px]
              md:text-[40px] font-bold md:hidden '
          >
            Need Help? Start Here.
          </h2>
          <h2
            className='text-[28px]
              md:text-[40px] font-bold hidden md:block'
          >
            Need Help? Start <br /> Here.
          </h2>
          <span className='md:hidden text-[14px] text-[#717680] dark:text-[#A4A7AE]'>
            Everything you need to know — all in one place.
          </span>
          <span className='hidden md:block text-[14px] text-[#717680] dark:text-[#A4A7AE]'>
            Everything you need to <br /> know — all in one place.
          </span>
        </div>

        {/* line */}
        <div className='border w-full text-[#DFDFDF] dark:text-[#252B37] mt-6 mb-5'></div>

        {/* left content FAQ */}
        <div className='grid md:grid-cols-2 gap-12'>
          <div className='gap-4'>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                {...faq}
                open={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* right content Consultation Card */}
          <div className='bg-[#CC4E32] rounded-2xl p-6 h-fit text-white'>
            <h3 className='text-3xl font-bold mb-3'>Let’s talk it through</h3>

            <p className='mb-5'>book a free consultation with our team.</p>

            <img
              src={consultation}
              alt='meeting'
              className='rounded-xl mb-4 w-full'
            />

            <button className='w-full bg-white text-black rounded-full py-3  font-bold'>
              <a href='#contact'>Free Consultation</a>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
