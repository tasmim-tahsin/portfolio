import React from 'react';
//import one from "/1.png";
//import two from '/2.png';
//import three from '/3.png';
//import four from '/4.png';
//import five from '/5.png';
//import six from '/6.png';
//import seven from '/7.png';
//import eight from '/8.png';
//import nine from '/9.png';
//import ten from '/10.png';
import Image from 'next/image'



const TechStack = () => {
const one ="/ProjectImage/1.png";
const two ="/ProjectImage/2.png";
const three ="/ProjectImage/3.png";
const four ="/ProjectImage/4.png";
const five ="/ProjectImage/5.png";
const six ="/ProjectImage/6.png";
const seven ="/ProjectImage/7.png";
const eight ="/ProjectImage/8.png";
const nine ="/ProjectImage/9.png";
const ten ="/ProjectImage/10.png";

    return (
        <div>
            <div className=' flex flex-col justify-center items-center gap-8'>
                <h1 className='text-3xl md:text-5xl font-bold text-white dark:text-[#151C25]'>My Tech Stack</h1>
                <h3 className=' text-xl md:text-2xl'>Technologies I’ve been working with recently</h3>
                <div className=' grid  grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-10 md:gap-x-20 lg:gap-x-32 justify-center items-center pt-10'>
                    <div className=' transition duration-500 ease-in-out hover:-translate-y-1'>
                        <Image src={one} alt="techstack image" width={80} height={80} />
                    </div>
                    <div className=' transition duration-500 ease-in-out hover:-translate-y-1'>
                        <Image src={two} alt="techstack image" width={80} height={80} />
                    </div>
                    <div className=' transition duration-500 ease-in-out hover:-translate-y-1'>
                        <Image src={three} alt="techstack image" width={80} height={80} />
                    </div>
                    <div className=' transition duration-500 ease-in-out hover:-translate-y-1'>
                        <Image src={four} alt="techstack image" width={80} height={80} />
                    </div>
                    <div className=' transition duration-500 ease-in-out hover:-translate-y-1'>
                        <Image src={five} alt="techstack image" width={80} height={80} />
                    </div>
                    <div className=' transition duration-500 ease-in-out hover:-translate-y-1'>
                        <Image src={six} alt="techstack image" width={80} height={80} />
                    </div>
                    <div className=' transition duration-500 ease-in-out hover:-translate-y-1'>
                        <Image src={seven} alt="techstack image" width={80} height={80} />
                    </div>
                    <div className=' transition duration-500 ease-in-out hover:-translate-y-1'>
                        <Image src={eight} alt="techstack image" width={80} height={80} />
                    </div>
                    <div className=' transition duration-500 ease-in-out hover:-translate-y-1'>
                        <Image src={nine} alt="techstack image" width={80} height={80} />
                    </div>
                    <div className=' transition duration-500 ease-in-out hover:-translate-y-1'>
                        <Image src={ten} alt="techstack image" width={80} height={80} />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default TechStack;