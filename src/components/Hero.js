import React from 'react';
import ProfileImg from '../assets/profile_3.jpg';

const Hero = () => {
  return (
    <section className='bg-primary text-primary py-32 px-32'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
        <div className='hero-info pb-5 md:pb-0'>
          <h1 className='text-4xl lg:text-6xl'>Hi,</h1>
          <h1 className='text-4xl lg:text-7xl'>
            I am <span className='text-accent'>P</span>atryk <br />
          </h1>
          <p className='py-5 '>
            I’m a Web developer, <br />
            Welcome to my portfolio
          </p>
          <button className='btn bg-accent border-2 border-accent text-secondary px-6 py-3 hover:bg-transparent hover:text-black'>
            <a href='/#projects'>Check out my projects</a>
          </button>
        </div>
        <div className='hero-img'>
          <img src={ProfileImg} alt='coding illustration' className='lgw-[80%] ml-auto rounded-full	' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
