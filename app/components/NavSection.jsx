'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react';




const NavSection = () => {

    //const logo = '/logo.png';
    //const logo2 = '/public/logo2.png';


    const pathname = usePathname()

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      }, []);
    
      const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
      }

    return (
        <div className=' sticky top-0 z-50 '>
            <nav className=" bg-[#151C25] dark:bg-slate-100 dark:text-[#151C25] ">
                <div className=" px-4 md:px-28 flex justify-between items-center shadow-md">
                    <div className=" items-center flex justify-center">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className=" dropdown-content bg-[#151C25] dark:bg-slate-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <ul className="flex flex-col gap-3">
                                    <li>
                                        <Link className={`link ${pathname === '/' ? 'active no-underline' : ' no-underline'}`} href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link className={`link ${pathname === '/techstack' ? 'active no-underline text-sky-400' : ' no-underline '}`} href="/techstack">Tech Stack</Link>
                                    </li>
                                    <li>
                                        <Link className={`link ${pathname === '/projects' ? 'active no-underline text-sky-400' : ' no-underline '}`} href="/projects">Projects</Link>
                                    </li>
                                    <li>
                                        <Link className={`link ${pathname === '/about' ? 'active no-underline text-sky-400' : ' no-underline '}`} href="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link className={`link ${pathname === '/contact' ? 'active no-underline text-sky-400' : ' no-underline '}`} href="/contact">Contact</Link>
                                    </li>
                    </ul>
                        </ul>
                        </div>
                        <Link href="/"><Image src="/ProjectImage/logo.png" alt="logo" width={500} height={300} className=" h-16 md:h-24 w-full dark:hidden"/></Link>
                        <Link href="/"><Image src="/ProjectImage/logo2.png" alt="logo" width={500} height={300} className="h-16 md:h-24 w-full  hidden dark:block"/></Link>

                    </div>

                    <div className=" flex justify-center items-center gap-20">
                        <div className=" hidden lg:flex">
                        <ul className=" flex gap-5 justify-center">
                        
                                <li className=' transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-sky-400 hover:border-b-2'>
                                    <Link className={`link ${pathname === '/' ? 'active no-underline' : ' no-underline'}`} href="/">Home</Link>
                                </li>
                                <li className=' transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-sky-400 hover:border-b-2'>
                                    <Link className={`link ${pathname === '/techstack' ? 'active no-underline text-sky-400' : ' no-underline'}`} href="/techstack">Tech Stack</Link>
                                </li>
                                <li className=' transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-sky-400 hover:border-b-2'>
                                    <Link className={`link ${pathname === '/projects' ? 'active no-underline text-sky-400' : ' no-underline'}`} href="/projects">Projects</Link>
                                </li>
                                <li className=' transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-sky-400 hover:border-b-2'>
                                    <Link className={`link ${pathname === '/about' ? 'active no-underline text-sky-400' : ' no-underline'}`} href="/about">About</Link>
                                </li>
                                <li className=' transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-sky-400 hover:border-b-2'>
                                    <Link className={`link ${pathname === '/contact' ? 'active no-underline text-sky-400' : ' no-underline'}`} href="/contact">Contact</Link>
                                </li>
                    
                        </ul>
                    </div>
                    
                            <label className=" btn-ghost swap swap-rotate" >
                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" className="theme-controller" value="synthwave" onClick={toggleTheme}/>

                                {/* sun icon */}
                                <svg
                                    className="swap-on h-7 w-7 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>

                                {/* moon icon */}
                                <svg
                                    className="swap-off h-7 w-7 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
                    
                    </div>
                    
                    
                </div>
          </nav>
        </div>
             
    );
};

export default NavSection;