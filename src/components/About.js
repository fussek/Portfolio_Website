import React from 'react';
import AboutImg from '../assets/about-img.png';
const About = () => {
  return (
    <section className='bg-secondary text-white py-32' id='about'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
        <div className='about-info'>
          <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2'>About me</h2>
          <p className='pb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt expedita porro nisi, ea odit autem maiores hic blanditiis ex, error dolorum numquam, eius eveniet corrupti quam
            dicta explicabo! Doloribus.
          </p>
          <p className='pb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt expedita porro nisi, ea odit autem maiores hic blanditiis ex, error dolorum numquam, eius eveniet corrupti quam
            dicta explicabo! Doloribus.
          </p>
          <p className='pb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt expedita porro nisi, ea odit autem maiores hic blanditiis ex, error dolorum numquam, eius eveniet corrupti quam
            dicta explicabo! Doloribus.
          </p>
        </div>
        <div className='about-img'>
          <img src={AboutImg} alt='coding illustration' className='lgw-[80%] md:ml-auto' />
        </div>
      </div>
    </section>
  );
};

export default About;
