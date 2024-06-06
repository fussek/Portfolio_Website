import React from 'react';
import tech_stack from '../assets/tech_stack_2.png';

const About = () => {
  return (
    <section className='bg-secondary text-secondary py-16 md:py-32 px-16 md:px-32' id='about'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
        <div className='about-info'>
          <h2 className='text-4xl  font-bold mb-5 border-b-[5px] w-[180px] border-accent pb-2'>About me</h2>
          <p className='pb-5'>Hey there! My name is Patryk, I'm a software developer with a couple of years of experience on my back, excited for more to come :).</p>
          <p className='pb-5'>
            I'm always on the lookout for creative solutions to design challenges, and I'm not afraid to dive into new technologies to achieve my goals. </p>
          <p className='pb-5'>I currently work at <a href='https://www.julius-kuehn.de/en/' class="font-medium text-white-600 dark:text-blue-500 hover:underline">Julius Kühn-Institut</a> for the KlimaFFolgen project,
            where I handle all technical responsibilities, including database maintenance, backend infrastructure management, and development of the web application.
            You can find out more about the project under this link: <a href='https://wissen.julius-kuehn.de/klimaschutz/en/projects/increasing-carbon-sink-potentials/klimaffolgen'>⧉</a>
          </p>
          <p className='pb-5'>
            Beyond coding, I love exploring the world with my camera, experiencing new cultures and enjoying life's adventures. Check out the 'Blog' section of this site - there's more to life than just code! 😎
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
