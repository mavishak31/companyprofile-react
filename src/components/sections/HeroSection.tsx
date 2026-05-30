import Button from '../ui/Button';
import Container from '../ui/Container';

import heroImageDark from '../../assets/hero-image-dark.png';
import heroImageLight from '../../assets/hero-image-light.png';

const HeroSection = () => {
  return (
    <section id='home' className='pt-32 pb-20'>
      <Container>
        <div className='grid lg:grid-cols-[55%_45%] gap-16 items-center overflow-visible'>
          {/* LEFT CONTENT */}
          <div className='w-full gap-10'>
            <h1 className='text-[36px] md:text-[56px] lg:text-[56px] font-bold leading-tight mb-6 text-black dark:text-white'>
              Your Tech Partner for
              <span className='text-[#FF6C37] block'>Smarter Growth</span>
            </h1>

            <p className='text-black dark:text-white text-md leading-relaxed mb-8 max-w-xl'>
              We deliver tailored IT solutions to help you scale with speed and
              confidence.
            </p>

            <Button className='w-full h-11 md:w-50 md:h-12'>
              <a href='#contact'>Let's Talk</a>
            </Button>
          </div>

          {/* RIGHT IMAGE */}
          <div className='relative'>
            <div className='absolute inset-0 bg-orange-500/20 blur-3xl rounded-full'></div>
            {/* light */}
            <img
              src={heroImageLight}
              alt='Hero Illustration Light'
              // className='dark:hidden relative z-10 w-full max-w-2xl mx-auto'
              className='block dark:hidden w-full md:max-w-md lg:max-w-lg h-auto object-cover transition-opacity duration-300 opacity-90 '
            />
            {/* dark */}
            <img
              src={heroImageDark}
              alt='Hero Illustration Dark'
              className='
              hidden dark:block 
              w-full mx-auto 
              md:max-w-md lg:max-w-lg 
              h-auto 
              object-cover  
              transition-opacity duration-300 opacity-90 '
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
