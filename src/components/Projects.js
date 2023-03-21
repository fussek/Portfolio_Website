import React from 'react';
import project_1 from '../assets/project_1.png';
import project_maps from '../assets/project_paris.png';
import project_cards from '../assets/project_cards.png';
import project_bluetooth from '../assets/project_bluetooth.png';

const projects = [
  {
    title: 'Pinterest Clone',
    subtitle: 'React.js | Firebase',
    description: '📌📱 Pinterest Clone | ⌨️🖱️ React.js | 🧑‍💻 Portfolio project, React.js Single-Page-Application Pinterest inspired website with use of hooks, states, grid layout, Firebase/Firestore',
    image: project_1,
    live: 'https://instajumper.netlify.app/',
    code: 'https://github.com/fussek/Pinterest_Clone',
  },
  {
    title: 'Travel App',
    subtitle: 'Vue.js | Nuxt.js | Java',
    description:
      '📍🌍 Travel/Maps app | ⌨️🖱️ Vue.js/Nuxt.js | 🛠️🎨 Full-stack web application for discovering new travel destinations. Vue.js/Nuxt.js + Java Spring | MongoDB | Docker | Google Maps REST API Integration',
    image: project_maps,
    // live: 'https://github.com/fussek/Patryk_Fussek_Maps_App',
    code: 'https://github.com/fussek/Patryk_Fussek_Maps_App',
  },
  {
    title: 'Card matching',
    subtitle: 'React.js',
    description: '🍭🤹‍♀️ Finding pairs kids game | ⌨️🖱️ React.js | 🎈🎁 Fun little project for my niece`s birthday, just a simple card matching game with family pictures :)',
    image: project_cards,
    live: 'https://findyourfussek.netlify.app/',
    code: 'https://github.com/fussek/Find-Pair-memory-game',
  },
  {
    title: 'OBD-II Monitor',
    subtitle: 'Android | Java',
    description:
      '🚗🔍 Bluetooth OBD-2 Diagnosis | ⌨️🖱️ Android / Java | 🏫🎓 Bachelor thesis project, Android Application designed to connect & diagnose the car`s onboard computer supporting the OBD2 standard',
    image: project_bluetooth,
    // live: 'https://github.com/fussek/Bluetooth-OBD-II-Diagnostic-Tool',
    code: 'https://github.com/fussek/Bluetooth-OBD-II-Diagnostic-Tool',
  },
  {
    title: 'Portfolio Page',
    subtitle: 'React.js | Tailwind CSS',
    description: 'This very portfolio page 😅. Also a project, right ? My first take on Tailwind CSS.',
    image: project_1,
    live: 'https://patrykfussek.netlify.app/',
    code: 'https://github.com/fussek/Portfolio_Website',
  },
];

const Projects = () => {
  return (
    <section className='bg-primary text-primary py-32 px-32' id='projects'>
      <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-between'>
        <div className='about-info mb-5'>
          <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-accent pb-2'>Projects</h2>
          <p className='pb-5'>
            Check out some of my recent projects and see whether we can work together 👨‍💻. I am constantly learning and new projects are always on top of my mind, let's work on something !
          </p>
        </div>
        <div className='about-img'></div>
      </div>
      <div className='container px-5 py-5 mx-auto text-center'>
        <div className='projects container mx-auto grid md:grid-cols-2 gap-5'>
          {projects.map((project, i) => {
            return (
              <div className='relative' key={i}>
                <img src={project.image} alt={project.title} />
                <div className='flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-secondary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 '>
                  <h1 className='tracking-widest text-m title-font font-medium text-white mb-1'>{project.title}</h1>
                  <h1 className='tracking-widest text-sm title-font font-medium text-white mb-1'>{project.subtitle}</h1>

                  <p className='py-5 text-center px-2 text-white text-sm overflow-hidden'>{project.description}</p>

                  <div className='mx-auto'>
                    {project.live ? (
                      <a href={project.live} target='_blank' rel='noreferrer' className='px-5 py-2 bg-primary hover:bg-accent mr-5 font-bold'>
                        Live
                      </a>
                    ) : null}
                    <a href={project.code} target='_blank' rel='noreferrer' className='px-5 py-2 bg-primary hover:bg-accent font-bold'>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className='flex flex-wrap -m-4'>
          {projects.map((project) => (
            <a href={project.link} key={project.image} className='sm:w-1/2 w-100 p-4'>
              <div className='flex relative'>
                <img alt='gallery' className='absolute inset-0 w-full h-full object-cover object-center' src={project.image} />
                <div className='relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100'>
                  <h2 className='tracking-widest text-sm title-font font-medium text-accent mb-1'>{project.subtitle}</h2>
                  <h1 className='title-font text-xxl font-medium text-white mb-3'>{project.title}</h1>
                  <p className='leading-relaxed text-white text-sm'>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
