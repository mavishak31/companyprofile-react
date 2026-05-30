import { navItems } from '../../data/navigation';
import { companyInfo } from '../../data/company';
import logoIcon from '../../assets/logo-symbol.png';
import sosmed from '../../assets/icon/sosmed-icons.png';

export default function FooterCard() {
  return (
    <div className='border rounded-3xl p-5 bg-[#FAFAFA] dark:bg-[#0A0D12] border-[#DFDFDF] dark:border-[#252B37] gap-15'>
      {/* content footer */}
      <div className='flex flex-col-reverse md:flex-row justify-between gap-6'>
        <div>
          <h3 className='text-black dark:text-white text-3xl font-semibold leading-tight'>
            <span className='hidden md:block lg:block'>
              LET’S DISCUSS
              <br />
              YOUR IDEAS
            </span>
            <span className='md:hidden lg:hidden'>
              LET’S DISCUSS YOUR IDEAS
            </span>
          </h3>
        </div>

        <div className='text-[24px] text-black dark:text-white font-semibold flex flex-row w-39.75 gap-[9.6px]'>
          <img src={logoIcon} alt='logo' className='w-[29.59px] h-[32.46px]' />
          {companyInfo.logo}
        </div>
      </div>

      <div className='border-t border-[#DFDFDF] dark:border-[#252B37] mt-10 pt-8 flex flex-col md:flex-row justify-between md:items-center lg:items-center gap-8'>
        <div className='flex flex-col md:flex-row gap-6 text-sm text-black dark:text-white'>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className='flex gap-4 text-black dark:text-white'>
          <img
            src={sosmed}
            alt='social media icon'
            className='w-52 dark:invert'
          />
        </div>
      </div>
    </div>
  );
}
