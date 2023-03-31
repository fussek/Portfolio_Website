import React from 'react';
import instagram from '../assets/instagram.gif';
import eit_digital from '../assets/eit_digital.gif';
import thesis from '../assets/thesis_pano.png';

const Blog = () => {
  return (
    <section className='bg-secondary text-secondary py-32 px-16 md:px-32' id='blog'>
      <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-between'>
        <div className='about-info mb-5'>
          <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-accent pb-2'>Blogs</h2>
          <p className='pb-5'>
            I believe I had a fair share of adventures and opportunities in my life to look back to, each of which has led me to who I am today. Take a look around and get to know me better!
          </p>
        </div>
        <div className='about-img'></div>
      </div>
      <div className='projects container mx-auto grid md:grid-cols-2 gap-10'>
        <div className=''>
          <img src={eit_digital} alt='eit_digital' />
          <h3 className='py-5'>
            As an EIT Digital Master School alumni, I studied at two top universities in different European countries. The double degree I earned combined technical skills with innovation and
            entrepreneurship. My time here was a life-changing experience that paved the way for my future.
          </h3>
          <button className='btn bg-accent border-2 border-accent text-secondary px-6 py-3 hover:bg-transparent'>
            <a href='https://masterschool.eitdigital.eu/' target='_blank' rel='noreferrer'>
              Check it out!
            </a>
          </button>
        </div>
        <div className=''>
          <img src={instagram} alt='instagram' />
          <h3 className='py-5'>Instagram! Sure thing, be my guest! I love taking pictures and I'm genuinely proud of some of them :). I think they tell my story better than I possibly can.</h3>
          <button className='btn bg-accent border-2 border-accent text-secondary px-6 py-3 hover:bg-transparent'>
            <a href='https://www.instagram.com/patryk.fussek/' target='_blank' rel='noreferrer'>
              Check it out!
            </a>
          </button>
        </div>
        <div className=''>
          <img src={thesis} alt='instagram' />
          <h3 className='py-5'>My master thesis written at Sorbonne Université Paris about implementation of ITSM/ITIL within ServiceNow Platform-as-a-Service environment.</h3>
          <button className='btn bg-accent border-2 border-accent text-secondary px-6 py-3 hover:bg-transparent'>
            <a href='https://drive.google.com/file/d/1maSOn6sE1M8ypLeQNpuGjB6mpwQ5NqOq/view' target='_blank' rel='noreferrer'>
              Check it out!
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
