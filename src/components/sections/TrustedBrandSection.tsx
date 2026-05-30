import LogoSlider from '../ui/LogoSlider';

export default function TrustedBrandsSection() {
  return (
    <section id='about' className=' px-6 py-16'>
      <div className='mx-auto max-w-6xl'>
        <h3 className='mb-10 text-center text-lg font-medium text-black dark:text-white'>
          Trusted by Global Innovators & Leading Brands
        </h3>

        <LogoSlider />
      </div>
    </section>
  );
}
