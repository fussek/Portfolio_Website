import React from 'react';
import project_1 from '../assets/project_1.png';
import project_2 from '../assets/project_2.png';
import project_3 from '../assets/project_3.png';
// import project_4 from '../assets/project_4.png';
// import project_5 from '../assets/project_5.png';
// import project_6 from '../assets/project_6.png';

const Projects = () => {
  return (
    <section className='bg-primary text-primary py-32 px-40' id='projects'>
      <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-between'>
        <div className='about-info mb-5'>
          <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-accent pb-2'>Projects</h2>
          <p className='pb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt expedita porro nisi, ea odit autem maiores hic blanditiis ex, error dolorum numquam, eius eveniet corrupti quam
            dicta explicabo! Doloribus.
          </p>
        </div>
        <div className='about-img'></div>
      </div>
      <div className='projects container mx-auto grid md:grid-cols-3'>
        <div>
          <a href='/#some project url'>
            <img src={project_1} alt='' />
          </a>
        </div>
        <div>
          <a href='/#some project url'>
            <img src={project_2} alt='' />
          </a>
        </div>
        <div>
          <a href='/#some project url'>
            <img src={project_3} alt='' />
          </a>
        </div>
        <div>
          <a href='/#some project url'>
            <img src={project_1} alt='' />
          </a>
        </div>
        <div>
          <a href='/#some project url'>
            <img src={project_2} alt='' />
          </a>
        </div>
        <div>
          <a href='/#some project url'>
            <img src={project_3} alt='' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
