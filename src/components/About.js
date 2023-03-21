import React from 'react';

const About = () => {
  return (
    <section className='bg-secondary text-secondary py-32 px-32' id='about'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
        <div className='about-info'>
          <h2 className='text-4xl  font-bold mb-5 border-b-[5px] w-[180px] border-accent pb-2'>About me</h2>
          <p className='pb-5 '>Hi! My name is Patryk, and I'm a frontend developer with a passion for creating user-friendly and visually appealing websites.</p>
          <p className='pb-5'>
            I have experience with a variety of frameworks and technologies, including ⌨️ React.js and Vue.js💻 (and more, constantly learning 😊). I enjoy working collaboratively with other
            developers and designers to build cohesive and engaging user experiences.
          </p>
          <p className='pb-5'>Outside of work, I love traveling, photography, and exploring new cultures, have a look on the "Blog" part of this site, it's not all about coding, right 😀?.</p>
        </div>
        <div className='about-img'>{/* <img src={AboutImg} alt='coding illustration' className='lgw-[80%] md:ml-auto' /> */}</div>
      </div>
    </section>
  );
};

export default About;
