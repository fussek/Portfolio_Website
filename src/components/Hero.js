import React from 'react';
import ProfileImg from '../assets/profile_3.jpg';

import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail, AiOutlineLaptop } from 'react-icons/ai';

const Hero = () => {
  return (
    <section className='bg-primary text-primary py-6 md:py-32 px-16 md:px-32'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
        <div className='hero-img md:order-2'>
          <img src={ProfileImg} alt='coding illustration' className='w-[60%] md:w-[90%] mb-6 md:mb-0 m-auto rounded-full	' />
        </div>
        <div className='hero-info pb-5 md:pb-0'>
          <h1 className='text-4xl lg:text-4xl font-medium'>Hi, my name is </h1>
          <h1 className='text-8xl font-medium'>
            <span className='text-accent pl-7 text-8xl tracking-tighter'>P</span>atryk <br />
          </h1>

          <p className='py-5 pr-10'>
            I'm a Software Developer, located in Berlin 🇩🇪. I'm currently working at <a href='https://www.julius-kuehn.de/en/' class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Julius Kühn-Institut </a>
              as a Web Developer in the KlimaFFolgen project.<br />
          </p>

          <div className='flex py-5 justify-center md:justify-start'>
            <a href='https://github.com/fussek' target='_blank' rel='noreferrer' className='pr-4 inline-block text-[#902333] hover:text-[#121924]'>
              <AiOutlineGithub size={40} />
            </a>
            <a href='https://www.linkedin.com/in/patryk-fussek-a33ab3162/' target='_blank' rel='noreferrer' className='pr-4 inline-block text-[#902333] hover:text-[#121924]'>
              <AiOutlineLinkedin size={40} />
            </a>
            <a href='mailto:patryk.fussek@gmail.com' target='_blank' rel='noreferrer' className='pr-4 inline-block text-[#902333] hover:text-[#121924]'>
              <AiOutlineMail size={40} />
            </a>
            <a href='https://www.julius-kuehn.de/sf/personal/p/patryk-fussek' target='_blank' rel='noreferrer' className='pr-4 inline-block text-[#902333] hover:text-[#121924]'>
              <AiOutlineLaptop size={40} />
            </a>
          </div>
          <div className='flex justify-center md:justify-start'>
            <button className='btn bg-accent border-2 border-accent font-semibold text-secondary px-6 py-3 hover:bg-transparent hover:border-[#121924] hover:text-[#121924]'>
              <a href='/#projects'>Check out my projects</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
