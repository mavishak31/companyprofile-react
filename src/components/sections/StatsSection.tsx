import Container from '../ui/Container';

const stats = [
  {
    number: '50+',
    label: 'Projects Delivered',
  },
  {
    number: '5+',
    label: 'Years of Experience',
  },
  {
    number: '10+',
    label: 'Industry Awards Won',
  },
  {
    number: '100%',
    label: 'Client Satisfaction Rate',
  },
];

const StatsSection = () => {
  return (
    <section className='py-20 px-4'>
      <Container>
        <div className='text-center mb-20'>
          <h2 className='text-[28px] md:text-[40px] font-bold text-black dark:text-white mb-4'>
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className='text-[#717680] text-sm leading-relaxed'>
            From strategy to execution, we deliver solutions that grow your
            business.
          </p>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {stats.map((item) => (
            <div
              key={item.label}
              className='aspect-square rounded-full border border-[#DEDCDC] dark:border-[#181D27] bg-[#DEDCDC] dark:bg-[#0A0D12] flex flex-col items-center justify-center text-center p-6'
            >
              <h3 className='text-4xl md:text-[48px] lg:text-[48px] font-bold text-[#FF623E] mb-3'>
                {item.number}
              </h3>

              <p className='text-sm text-[#0A0D12] dark:text-[#FDFDFD]'>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
