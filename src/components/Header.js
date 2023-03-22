import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <header className='flex justify-between px-20 py-2 bg-primary text-primary'>
      <a href='/' className='logo text-2xl'>
        <h1 className='font-semibold'>
          <span className='text-accent text-3xl'>P</span>atryk <span className='text-accent text-3xl'>F</span>ussek
        </h1>
      </a>

      {/* Desktop Nav */}
      <nav className='hidden md:block'>
        <ul className='flex'>
          <li>
            <a href='/#about'>About</a>
          </li>
          <li>
            <a href='/#projects'>Projects</a>
          </li>
          <li>
            <a href='/#blog'>Blog</a>
          </li>
          <li>
            <a href='/#contact'>Contact</a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1zdVVGFyYBoRfNK3VNQ25OKbd89iqSyQj/view?usp=sharing' target='_blank' rel='noreferrer'>
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={!toggle ? 'mobile-nav left-[-100%]' : 'mobile-nav left-0'}>
        <ul className='flex flex-col'>
          <li>
            <a href='/#about'>About</a>
          </li>
          <li>
            <a href='/#projects'>Projects</a>
          </li>
          <li>
            <a href='/#blog'>Blog</a>
          </li>
          <li>
            <a href='/#contact'>Contact</a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1zdVVGFyYBoRfNK3VNQ25OKbd89iqSyQj/view?usp=sharing' target='_blank' rel='noreferrer'>
              Resume
            </a>
          </li>
        </ul>
      </nav>
      {/* Toggle Button*/}
      <button onClick={handleToggle} className='block md:hidden'>
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
