import React from 'react';

const Skils = () => {
    const frontend = [
        { name: 'HTML', src: '/assets/htmllogo.png' },
        { name: 'CSS', src: '/assets/CSSlogo.png' },
        { name: 'JavaScript', src: '/assets/jslogo.png' },
        { name: 'React.js', src: '/assets/reactlogo.png' },
        { name: 'Bootstrap', src: '/assets/bootstrap.png' },
        { name: 'Tailwind', src: '/assets/tailwind.png' },
        { name: 'Redux', src: '/assets/reduxLogo.png' },
    ];
    const backend = [
        { name: 'Node.js', src: '/assets/nodejslogo.png' },
        { name: 'Express.js', src: '/assets/expresslogo.png' },
        { name: 'MongoDB', src: '/assets/mongodblogo.png' },
        // { name: 'PostgreSQL', src: '/assets/htmllogo.png' },
        // { name: 'Python', src: 'path/to/python-icon.png' },
        // { name: 'Django', src: 'path/to/django-icon.png' },
        // { name: 'Flask', src: 'path/to/flask-icon.png' },
        // { name: 'Ruby', src: 'path/to/ruby-icon.png' },
        // { name: 'Ruby on Rails', src: 'path/to/rails-icon.png' }
    ];

    const versionControl = [
        // { name: 'Git', src: '/assets/htmllogo.png' },
        { name: 'GitHub', src: '/assets/gitlogo.png' },
        // { name: 'Bitbucket', src: 'path/to/bitbucket-icon.png' },
    ];


    return (
        
        <section id='skills'className='bg-secondary'>
            
            <div className='text2xl section_color h-full flex flex-col justify-center px-5 py-20 '>
                <div>
                    <h1 className='text-center text-3xl font-bold font-title'>My Skills</h1>
                    <p className='font-bold text-1xl px-10 py-10 text-2xl '>Front-End</p>
                </div>
                <div className='flex flex-row flex-wrap justify-center item-center gap-3 lg:gap-8'>
                {
                        frontend.map((skill, index) => (
                            <div
                                key={index}
                     className='flex flex-col justfy-center items-center gap-2 transform transition hover:scale-110 duration-500'>

                        <div
                            className='h-24 w-24 p-4 md:h-28 md:w-28 rounded-full flex items-center justify-center'>
                            <img className='w-18 h-18 p-2 object-cover rounded-md bg-gray-100 shadow-lg'
                                src={skill.src} alt={skill.name} />

                        </div>
                        <p className='text-sm md:text-base font-bold'>{skill.name}</p>
                    </div>
                    ))}

                </div>

                {/* backend */}
                <p className='font-bold text-1xl px-10 py-10 text-2xl'>Back-End</p>
                <div className='flex flex-row flex-wrap justify-center item-center gap-3 lg:gap-8'>
                {
                        backend.map((skill, index) => (
                            <div
                                key={index}
                     className='flex flex-col justfy-center items-center gap-2 transform transition hover:scale-110 duration-500'>

                        <div
                            className='h-24 w-24 p-4 md:h-28 md:w-28 rounded-full flex items-center justify-center'>
                            <img className='w-18 h-18 p-2 object-cover rounded-md bg-gray-100 shadow-lg'
                                src={skill.src} alt={skill.name} />

                        </div>
                        <p className='text-sm md:text-base font-bold'>{skill.name}</p>
                    </div>
                    ))}

                </div>

                {/* versionControl */}

                   <p className='font-bold text-1xl px-10 py-10 text-2xl'>VersionControl</p> 

                <div className='flex flex-row flex-wrap justify-center item-center gap-3 lg:gap-8'>
                {
                        versionControl.map((skill, index) => (
                            <div
                                key={index}
                     className='flex flex-col justfy-center items-center gap-2 transform transition hover:scale-110 duration-500'>

                        <div
                            className='h-24 w-24 p-4 md:h-28 md:w-28 rounded-full flex items-center justify-center'>
                            <img className='w-18 h-18 p-2 object-cover rounded-md bg-gray-100 shadow-lg'
                                src={skill.src} alt={skill.name} />

                        </div>
                        <p className='text-sm md:text-base font-bold'>{skill.name}</p>
                    </div>
                    ))}

                </div>


            </div>
        </section>
    );
};

export default Skils;