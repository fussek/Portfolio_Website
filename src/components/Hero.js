import React from 'react';
import ProfileImg from '../assets/profile_3.jpg';

import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';

const Hero = () => {
  return (
    <section className='bg-primary text-primary py-32 px-16 md:px-32'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
        <div className='hero-info pb-5 md:pb-0'>
          <h1 className='text-4xl lg:text-4xl font-medium'>Hi, my name is </h1>
          <h1 className='text-8xl font-medium'>
            <span className='text-accent pl-7 text-9xl tracking-tighter'>P</span>atryk <br />
          </h1>
          <p className='py-5 pr-10'>
            I'm a frontend developer who turns coffee into beautiful and functional websites. I believe the best products are the ones, that combine good design, great functionality, and a healthy
            dose of humor :) .<br />
          </p>
          <div className='flex py-5 '>
            <a href='https://github.com/fussek' target='_blank' rel='noreferrer' className='pr-4 inline-block text-[#902333] hover:text-[#121924]'>
              <AiOutlineGithub size={40} />
            </a>
            <a href='https://www.linkedin.com/in/patryk-fussek-a33ab3162/' target='_blank' rel='noreferrer' className='pr-4 inline-block text-[#902333] hover:text-[#121924]'>
              <AiOutlineLinkedin size={40} />
            </a>
            <a href='mailto:patryk.fussek@gmail.com' target='_blank' rel='noreferrer' className='pr-4 inline-block text-[#902333] hover:text-[#121924]'>
              <AiOutlineMail size={40} />
            </a>
          </div>
          <button className='btn bg-accent border-2 border-accent font-semibold text-secondary px-6 py-3 hover:bg-transparent hover:border-[#121924] hover:text-[#121924]'>
            <a href='/#projects'>Check out my projects</a>
          </button>
        </div>
        <div className='hero-img'>
          <img src={ProfileImg} alt='coding illustration' className='w-[90%] ml-auto rounded-full	' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
