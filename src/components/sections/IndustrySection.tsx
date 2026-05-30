// import { Container } from 'lucide-react';
import Container from '../ui/Container';
import IndustryTabs from '../ui/IndustryTabs';

export default function IndustrySection() {
  return (
    <section id='industry' className=' px-4 py-10'>
      <Container>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-14'>
            {/* industry header */}
            <h2
              className='mb-4 text-[28px]
              md:text-[40px] font-semibold text-black dark:text-white'
            >
              Built for Your Industry
            </h2>

            <p className='max-w-2xl text-sm text-gray-400'>
              We’ve helped companies across industries launch smarter, faster,
              and more securely.
            </p>
          </div>

          <IndustryTabs />
        </div>
      </Container>
    </section>
  );
}
