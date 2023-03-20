import React from 'react';

const Contact = () => {
  return (
    <section className='bg-primary py-32 px-40' id='contact'>
      <div className='text-center md:w-[60%] mx-auto text-primary'>
        <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-accent pb-2'>Contact me</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi sunt expedita maiores! Maiores, sequi error ab, labore quia nulla tenetur doloribus hic minus quidem, cupiditate mollitia
          molestias voluptas vero consequatur.
        </p>
        <p className='py-2'>
          <span className='font-bold'>Email:</span> patryk.fussek@gmail.com
        </p>
        <p className='py-2'>
          <span className='font-bold'>Phone:</span> (+48) 517 683 034
        </p>
      </div>
    </section>
  );
};

export default Contact;
