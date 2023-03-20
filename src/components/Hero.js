import React from 'react';
import HeroImg from '../assets/hero-img.png';

const Hero = () => {
  return (
    <section className='bg-primary px-5 text-white py-32'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
        <div className='hero-info pb-5 md:pb-0'>
          <h1 className='text-4xl lg:text-6xl'>
            Hi, <br />I am <span className='text-accent'>P</span>atryk <br />
            Webdev
          </h1>
          <p className='py-5'>I am pro in React</p>
          <button className='btn bg-accent border-2 border-[#7477ff] text-white px-6 py-3 hover:bg-transparent'>See Projects</button>
        </div>
        <div className='hero-img'>
          <img src={HeroImg} alt='coding illustration' className='lgw-[80%] ml-auto' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
