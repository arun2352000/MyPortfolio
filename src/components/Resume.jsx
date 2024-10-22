import React from 'react';

const Resume = () => {
    const config = {
        link: 'https://drive.google.com/file/d/1e6eUtAtjTUFhzh8RuWSMbWrhRntQqlSC/view?usp=sharing'
    }
    return (
        <section id='resume' className='flex flex-col md:flex-row bg-tertiary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='' src="/assets/Resume.png" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn' href={config.link} download> Download</a></p>
            </div>
        </div>
    </section>
    );
};

export default Resume;