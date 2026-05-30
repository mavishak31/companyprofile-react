import { portfolioItems } from '../../data/portfolio';
import Container from '../ui/Container';
import PortfolioCard from '../ui/PortfolioCard';

export default function PortfolioSection() {
  return (
    <section id='portfolio' className=' px-4 py-10'>
      <Container>
        <div className='mx-auto max-w-6xl'>
          {/* heading */}
          <div className='mb-14 text-center'>
            <h2
              className='mb-4 text-[28px]
              md:text-[40px] font-semibold text-black dark:text-white'
            >
              From Vision to Launch!
              <br />
              Projects We’re Proud Of
            </h2>

            <p className='mx-auto max-w-2xl text-sm text-[#717680]'>
              Take a closer look at our recent work powering startups,
              enterprises, and everything in between.
            </p>
          </div>

          {/* cards */}
          <div
            className='
            flex
            flex-col
            gap-10

            md:flex-row
            md:gap-8
          '
          >
            {portfolioItems.map((item) => (
              <div key={item.id} className='flex-1'>
                <PortfolioCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
