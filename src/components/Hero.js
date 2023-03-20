import React from 'react';
// import HeroImg from '../assets/hero-img.png';
import ProfileImg from '../assets/profile_3.jpg';

const Hero = () => {
  return (
    <section className='bg-primary text-primary py-32 px-40'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
        <div className='hero-info pb-5 md:pb-0'>
          <h1 className='text-4xl lg:text-6xl'>
            Hi, <br />I am <span className='text-accent'>P</span>atryk <br />
          </h1>
          <p className='py-5'>
            I'm an aspiring Frontend developer. <br />
            Welcome to my site :)
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
