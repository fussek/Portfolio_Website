import React from 'react';
import blog_1 from '../assets/blog.png';
import blog_2 from '../assets/blog-2.png';

const Blog = () => {
  return (
    <section className='bg-secondary text-secondary py-32 px-40' id='blog'>
      <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-between'>
        <div className='about-info mb-5'>
          <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-accent pb-2'>Blogs</h2>
          <p className='pb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt expedita porro nisi, ea odit autem maiores hic blanditiis ex, error dolorum numquam, eius eveniet corrupti quam
            dicta explicabo! Doloribus.
          </p>
        </div>
        <div className='about-img'></div>
      </div>
      <div className='projects container mx-auto grid md:grid-cols-2 gap-10'>
        <div className=''>
          <img src={blog_1} alt='' />
          <h3 className='py-5 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <button className='btn bg-accent border-2 border-accent text-secondary px-6 py-3 hover:bg-transparent'>See Projects</button>
        </div>
        <div className=''>
          <img src={blog_2} alt='' />
          <h3 className='py-5 text-2xl'>Molestias deserunt expedita porro nisi, ea odit autem maiores hic blanditiis ex, error dolorum numquam, eius eveniet corrupti quam dicta explicabo!</h3>
          <button className='btn bg-accent border-2 border-accent text-secondary px-6 py-3 hover:bg-transparent'>See Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
