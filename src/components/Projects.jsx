import React from 'react';

const Projects = () => {

    const config = {
        projects : [
            {
                image: '/assets/inventry.png',
                description: 'inventry billing Website . Built with MERN Stack.',
                link: 'https://github.com/arun2352000/Back-end-Arunachalamwd55T-inventry-billing-app--backend'   
            },
            {
                image: '/assets/todo .png',
                description: 'A todo app, Built with MERN Stack.',
                link: 'https://github.com/arun2352000/todo'
            },
            {
                image: '',
                description: 'Basic Blog Website . Built with MERN Stack.',
                link: 'https://github.com/arun2352000/blog-page'
            },
            {
                
                image: '',
                description: 'A Ecommerce Website. Built with MERN Stack.',
                link: 'https://github.com/arun2352000/ecommerce_AP'
            }
        ]
    }

    return (
        <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-secondary">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl font-bold font-title">Projects</h1>
                {/* <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p> */}
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[170px] w-[330px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
    );
};

export default Projects;