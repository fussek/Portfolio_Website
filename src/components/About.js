import React from 'react';
import tech_stack from '../assets/tech_stack_2.png';

const About = () => {
  return (
    <section className='bg-secondary text-secondary py-16 md:py-32 px-16 md:px-32' id='about'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
        <div className='about-info'>
          <h2 className='text-4xl  font-bold mb-5 border-b-[5px] w-[180px] border-accent pb-2'>About me</h2>
          <p className='pb-5'>Hey there! My name is Patryk, and I'm a frontend developer who enjoys crafting websites that are both easy on the eyes and a joy to use 😃.</p>
          <p className='pb-5'>
            I'm always on the lookout for creative solutions to design challenges, and I'm not afraid to dive into new technologies to achieve my goals. Whether I'm coding something brand new or
            optimizing an existing solution for better performance, I'm happiest when I'm fully submerged in code and work hard to make something awesome!
          </p>
          <p className='pb-5'>I'm most comfortable withs React.js, Vue.js, Javascript, HTML, CSS, but i never limit myself and I'd be happy to take on a new challenges in an unknown field.</p>
          <p className='pb-5'>
            Beyond the code, you'll find me exploring the world through my camera lens, immersing myself in new cultures and just enjoying life as an adventure. Check out the 'Blog' section of this
            site (life is more than just code, right? 😎).
          </p>
        </div>
        <div className='about-img w-[70%] items-center m-auto'>
          <img src={tech_stack} alt='tech_stack' className='lgw-[80%] md:ml-auto' />
        </div>
      </div>
    </section>
  );
};

export default About;
