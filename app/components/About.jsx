import React from 'react';
//import AboutImg from '/aboutimg.png';
import Image from 'next/image';
//import facebook from '/facebook.png';
//import instagram from '/instagram.png';
//import github from '/github.png';
//import linkedin from '/linkedin.png';
import Link from 'next/link';




const About = () => {
    return (
        <div className=' flex flex-col-reverse lg:flex-row gap-10 pt-10 px-20'>
            <div className=' flex '>
                
                <Image className='transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110' src="/ProjectImage/aboutimg.png" alt='Tasmim Al Tahsin About image' width={1300} height={500}/>
            </div>
            <div className=' flex flex-col gap-5'>
                <div className='flex flex-col'>
                    <h1 className=' text-white dark:text-[#151C25] text-5xl font-bold'>About Me</h1>
                    {/*<div className=' flex'>
                            
                            <h3 className=' relative -right-36 text-sky-400'> Who am I?</h3>
                        
                    </div>*/}
                </div>
                
                <div>
                    <p className=' leading-relaxed'>
                        I’m a <b>Frontend Web Developer</b> with a passion for crafting clean, efficient, and visually appealing user interfaces. Currently, I’m pursuing my <b>BSc. in Computer Science and Engineering </b>at <span className=' font-bold'>American International University-Bangladesh (AIUB).</span> Where I’m deepening my understanding of both web technologies and problem-solving. <br />

                        I specialize in transforming design concepts into functional, responsive websites with a focus on delivering seamless user experiences. Whether I’m using the <b>JavaScript</b> and <b>React</b> framework for ensuring a pixel-perfect design with <b>HTML</b> and <b>Tailwind CSS</b>. I love the challenge of bringing ideas to life through code. <br />

                        As a developer, I’m always eager to <b>learn</b>, <b>experiment</b>, and push the boundaries of what’s possible on the web. I’m excited to work on projects that not only improve my skills but also contribute to building better and more user-centered digital solutions.
                    </p>
                </div>
                <div>
                    <h3>Keep in touch</h3>
                    <div className=' flex gap-7 mt-5'>
                    <Link href="https://www.facebook.com/ta.tahsin123/" target='_blank'>
                        <Image src=
                        "/ProjectImage/facebook.png" alt='fb logo' height={40} width={40}/>
                    </Link>

                    <Link href="https://www.instagram.com/tahsin_niyan25/" target='_blank'>
                        <Image src="/ProjectImage/instagram.png" alt='fb logo' height={40} width={40}/>
                    </Link>

                    <Link href="https://www.linkedin.com/in/tasmim-al-tahsin/" target='_blank'>
                        <Image src="/ProjectImage/linkedin.png" alt='fb logo' height={40} width={40}/>
                    </Link>

                    <Link href="https://github.com/tasmim-tahsin" target='_blank'>
                        <Image src="/ProjectImage/github.png" alt='fb logo' height={40} width={40}/>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;