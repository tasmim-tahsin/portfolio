import Image from 'next/image';
import React from 'react';
//import header from '/header.jpg'
import Link from 'next/link';

const Header = () => {
    return (
        <div className=' flex flex-col lg:flex-row justify-between md:items-center pt-10 md:pt-16 lg:pt-32 px-10 md:px-32 gap-20 md:gap-20 lg:gap-0'>
            <div>
                    <h1 className=' flex flex-col justify-start items-start gap-3 md:gap-5 text-3xl md:text-5xl font-bold '>
                        Hi 👋,<br/>
                        My name is <br />
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-400 relative inline-block">
                            <span className="relative text-white">Tahsin</span>
                        </span>
                        I build things for web
                    </h1>
                    <div className=' flex justify-start gap-7 mt-10'>
                    

                    <button className="bg-[#CCCCCC] dark:bg-sky-400 dark:text-slate-100 hover:bg-sky-400 hover:text-white text-[#151C25] font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110">
                        <Link href="/contact">Contact me</Link>
                    </button>

                    <button className=" border-2 border-sky-400 bg-transparent hover:bg-sky-400 hover:text-white text-[#CCCCCC] dark:text-[#151C25] font-bold md:py-2 px-4 rounded-full inline-flex items-center transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <Link href="https://drive.google.com/file/d/19GzGpVTV8FOXRrm267pWTApHKkgLPxo4/view?usp=sharing" target='-blank'>Download CV</Link>
                    </button>

                    </div>
            </div>
            <div className=' flex justify-center'>
                <Image className='hover:border-purple-400 border-r-4 md:border-b-0 md:border-8 rounded-xl md:rounded-full border-sky-400' src="/ProjectImage/header.jpg" alt="header image" height={370} width={370} quality={100}/>
            </div>
        </div>
    );
};

export default Header;