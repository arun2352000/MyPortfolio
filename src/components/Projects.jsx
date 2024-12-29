import React, { useState } from 'react';
import { AiOutlineCloud, AiOutlineDesktop, AiOutlineGlobal } from 'react-icons/ai';

const Projects = () => {

    const [popup, setPopup] = useState({visible: false, content: '', position: {top: 0, left: 0}});

    const config = {
        projects : [
            {
                image: '/assets/inventry.png',
                description: 'Inventory billing Website. Built with MERN Stack.',
                // link: 'https://github.com/arun2352000/Back-end-Arunachalamwd55T-inventry-billing-app--backend', 
                frontendLink:'https://github.com/arun2352000/Front-end-Arunachalamwd55T-inventory-billing-app-frontend',
                backendLink:'https://github.com/arun2352000/Back-end-Arunachalamwd55T-inventry-billing-app--backend',               
                deploymentlink:'https://inventrybillingappwd55fe.netlify.app/',
        
            },
            {
                image: '/assets/todo .png',
                description: 'A todo app, Built with MERN Stack.',
                // link: 'https://github.com/arun2352000/todo',
                frontendLink:'https://github.com/arun2352000/todo',
                backendLink:'https://github.com/arun2352000/ToDo-Backend',
                deploymentlink:'https://aptodos.netlify.app/',
            },
            {
                image: '',
                description: 'Basic Blog Website. Built with MERN Stack.',
                // link: 'https://github.com/arun2352000/blog-page',
                frontendLink:'https://github.com/arun2352000/blog-page',
                backendLink:'https://github.com/arun2352000/BlogPage-backend',
                deploymentlink:'https://apblogpage.netlify.app/',
            },
            {
                image: '',
                description: 'A Ecommerce Website. Built with MERN Stack.',
                link: 'https://github.com/arun2352000/ecommerce_AP',
                frontendLink:'https://github.com/arun2352000/ecommerce_AP',
                backendLink:'https://github.com/arun2352000/AP-Ecommerce-Backend',
                deploymentlink:'https://ap-ecommerce-23.netlify.app/',
            }
        ]
    }

    const showPopup = (content, event) => {
        const rect = event.target.getBoundingClientRect();
        setPopup({
            visible: true,
            content: content,
            position: { top: rect.bottom + window.scrollY, left: rect.left + window.scrollX }
        });
    };

    const hidePopup = () => {
        setPopup({visible: false, content: '', position: {top: 0, left: 0}});
    };

    return (
        <section id='projects' className="flex flex-col   justify-center bg-tertiary">
            <div className="w-full">
                <div className="flex flex-col px-10 py-12">
                    <h1 className="text-4xl font-bold font-title py-25 text-center">Projects</h1>
                    {/* <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p> */}
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-20 py-20 gap-10'>
                    {config.projects.map((project, index) => (
                        <div className='relative' key={index}>
                            <img className='h-[170px] w-[330px]' src={project.image} alt={project.description} />
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center gp-4'>
                                    <div className="relative px-3 py-1">
                                        <a 
                                            target='_blank'
                                            href={project.frontendLink} 
                                            className="hover-link text-black underline" 
                                            onMouseEnter={(e) => showPopup('Frontend', e)}
                                            onMouseLeave={hidePopup}
                                        >
                                            <AiOutlineDesktop />
                                        </a>
                                    </div>
                                    <div className="relative px-3 py-1">
                                        <a 
                                            target='_blank'
                                            href={project.backendLink} 
                                            className="hover-link text-black underline" 
                                            onMouseEnter={(e) => showPopup('Backend', e)}
                                            onMouseLeave={hidePopup}
                                        >
                                            <AiOutlineCloud />
                                        </a>
                                    </div>
                                    </div>
                                    <div className='flex justify-center gap-4 py-1'>
                                    <a className='btn relative ' target='_blank' rel='noreferrer' href={project.deploymentlink}>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {popup.visible && (
                <div
                    className="popup absolute bg-white border border-gray-300 p-4 rounded shadow-lg mt-2"
                    style={{ top: popup.position.top, left: popup.position.left }}
                >
                    {popup.content}
                </div>
            )}
        </section>
    );
};

export default Projects;


projects : [
    {
        image: '/assets/inventry.png',
        description: 'inventry billing Website . Built with MERN Stack.',
        link: 'https://github.com/arun2352000/Back-end-Arunachalamwd55T-inventry-billing-app--backend', 
        frontendLink:'',
        backendLink:'',
        deploymentlink:'',

    },
    {
        image: '/assets/todo .png',
        description: 'A todo app, Built with MERN Stack.',
        link: 'https://github.com/arun2352000/todo',
        frontendLink:'',
        backendLink:'',
        deploymentlink:'',
    },
    {
        image: '',
        description: 'Basic Blog Website . Built with MERN Stack.',
        link: 'https://github.com/arun2352000/blog-page',
        frontendLink:'',
        backendLink:'',
        deploymentlink:'',
    },
    {
        
        image: '',
        description: 'A Ecommerce Website. Built with MERN Stack.',
        link: 'https://github.com/arun2352000/ecommerce_AP',
        frontendLink:'',
        backendLink:'',
        deploymentlink:'',
    }
]