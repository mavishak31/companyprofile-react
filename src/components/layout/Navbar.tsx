import { useEffect, useState } from 'react';

import type { INavItem } from '../../types';

import { navItems } from '../../data/navigation';

import Container from '../ui/Container';
import Button from '../ui/Button';
import xIcon from '../../assets/icon/x-icon.png';
import burgerIcon from '../../assets/icon/burger-icon.png';
import logo from '../../assets/logo-symbol.png';

import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  // set theme dark and light to local storage
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = localStorage.getItem('theme');

    return savedTheme === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // set open close sidebar menu
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <header className='fixed top-0 left-0 w-full z-50 bg-[#FFFFFF80] dark:bg-[#00000080] backdrop-blur-2xl border-b-0'>
        <Container>
          <div className='flex items-center justify-between py-4'>
            {/* LOGO */}
            <div className='flex flex-row gap-[9.6px] w-[158.63px]'>
              <img src={logo} alt='logo' className='w-[29.59px] h-[32.46px]' />
              <a
                href='#home'
                className='text-black dark:text-white text-2xl font-bold w-[158.63px]'
              >
                Your Logo
              </a>
            </div>

            {/* DESKTOP MENU NAVBAR */}
            <nav className='hidden md:flex items-center gap-8'>
              {navItems.map((item: INavItem) => (
                <a
                  key={item.label}
                  href={item.href}
                  className='text-black dark:text-white hover:text--500 transition-colors duration-300'
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* DESKTOP NAV BUTTON */}
            <div className='hidden md:flex items-center gap-4'>
              {/* THEME BUTTON */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className='w-11 h-11 rounded-full border border-gray-400 flex items-center justify-center text-black dark:text-white hover:border-orange-500 transition-all duration-300'
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* CONTACT BUTTON */}
              <Button className='w-49.25 h-11'>
                <a href='#contact'>Let's Talk</a>
              </Button>
            </div>

            {/* MOBILE ACTIONS */}
            <div className='flex items-center gap-3 md:hidden'>
              {/* THEME TOGGLE */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className='w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-black dark:text-white hover:border-orange-500 transition-all duration-300'
                aria-label='Toggle Theme'
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* BURGER MENU BUTTON */}
              <button
                onClick={() => setIsOpen(true)}
                className='text-black dark:text-white'
                aria-label='Open Menu'
              >
                <img
                  src={burgerIcon}
                  alt='Open Menu'
                  className='w-6 h-6 object-contain invert dark:invert-0'
                />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white dark:bg-black z-100 transform transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col h-full p-6'>
          {/* HEADER */}
          <div className='flex items-center justify-between mb-12'>
            <div className='flex flex-row gap-[9.6px]'>
              <img src={logo} alt='logo' />
              <h2 className='text-black dark:text-white text-2xl font-bold'>
                Your Logo
              </h2>
            </div>
            {/* CLOSE X BUTTON */}
            <button
              onClick={closeMenu}
              className='text-black dark:text-white'
              aria-label='Close Menu'
            >
              <img
                src={xIcon}
                alt='Close Menu'
                className='w-5 h-5 object-contain invert dark:invert-0'
              />
            </button>
          </div>

          {/* SIDEBAR MENU ITEMS */}
          <nav className='flex flex-col gap-8'>
            {navItems.map((item: INavItem) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className='text-black dark:text-white text-xl hover:text-orange-400 transition-colors duration-300'
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* BUTTON CONTACT */}
          <div className='mt-12'>
            <Button className='w-full' onClick={closeMenu}>
              <a href='#contact'>Let's Talk</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
