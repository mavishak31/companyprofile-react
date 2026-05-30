import Container from '../ui/Container';

import { services } from '../../data/services';

import ServiceCard from '../ui/ServiceCard';

const ServicesSection = () => {
  return (
    <section id='services' className='py-10 px-4'>
      <Container>
        {/* TITLE */}
        <div className='text-center mb-16'>
          <h2
            className='
              text-[28px]
              md:text-[40px]
              font-bold
              text-black
              dark:text-white
              mb-4
            '
          >
            Smart IT Solutions That Grow With You
          </h2>

          <p
            className='
              max-w-2xl
              mx-auto
              text-gray-600
              dark:text-gray-400
            '
          >
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        {/* GRID */}
        <div
          className='
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          '
        >
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
