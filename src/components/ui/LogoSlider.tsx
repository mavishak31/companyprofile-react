import logoSlide from '../../assets/logo-slide.svg';

export default function LogoSlider() {
  return (
    <div className='relative overflow-hidden'>
      {/* fade kiri kanan */}
      <div className='pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent dark:from-black dark:to-transparent' />

      <div className='pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent dark:from-black dark:to-transparent ' />

      {/* marquee */}
      <div className='logo-track flex w-max items-center gap-16'>
        <img
          src={logoSlide}
          alt='Trusted brands'
          className='
            h-32
            w-auto
            shrink-0

            grayscale
            brightness-125
            opacity-70

            transition
            hover:opacity-100
          '
        />

        <img
          src={logoSlide}
          alt='Trusted brands duplicate'
          className='
            h-32
            w-auto
            shrink-0

            grayscale
            brightness-125
            opacity-70

            transition
            hover:opacity-100
          '
        />
      </div>
    </div>
  );
}
