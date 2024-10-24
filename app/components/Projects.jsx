'use client'
import Image from 'next/image';
import React, { lazy, useState } from 'react';
//import three from '/3.png';
//import four from '/4.png';
//import seven from '/7.png';


const projects = [
  {
    id: 1,
    title: "Hot Gadget",
    description: "A sleek online store with modern design and features, allowing users to browse, compare, and purchase iPhones effortlessly.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://tasmim-tahsin.github.io/PhoneHuntingAPI/",
    codeLink: "https://github.com/tasmim-tahsin/PhoneHuntingAPI",
    imagePath: "/PortfolioDev.png"
  },
  {
    

    id: 2,
    title: "Netflix Clone",
    description: "A Netflix-inspired movie and TV show streaming platform featuring a smooth user interface and dynamic content display.",
    techStack: ["React", "Node.js", "MongoDB"],
    liveLink: "https://tasmim-tahsin.github.io/Netflix-website-clone/",
    codeLink: "https://github.com/tasmim-tahsin/Netflix-website-clone",
    imagePath: "/Penguine.png"
  },
  {
    id: 3,
    title: "PH Tube - Video Streaming",
    description: "An interactive and vibrant online video streaming app where users can explore and view a variety of High quality videos, music.",
    techStack: ["React", "Redux", "CoinGecko API", "Chart.js"],
    liveLink: "https://phero-tube-javascript.netlify.app/",
    codeLink: "https://github.com/tasmim-tahsin",
    imagePath: "/Netflix.png"
  },
  {
    id: 4,
    title: "Flower Shop",
    description: "A beautifully designed flower shop platform offering a wide range of floral arrangements for delivery, perfect for any occasion.",
    techStack: ["Vue.js", "Firebase"],
    liveLink: "https://tasmim-tahsin.github.io/flower-shop-website/",
    codeLink: "https://github.com/tasmim-tahsin/flower-shop-website",
    imagePath: "/Tea.png"
  },
  {
    id: 5,
    title: "Gaming Website",
    description: "A dynamic gaming portal featuring the latest game releases, reviews, and updates, with an engaging interface for gaming enthusiasts.",
    techStack: ["Next.js", "Tailwind CSS", "OpenWeather API"],
    liveLink: "https://tasmim-tahsin.github.io/Gaming-website/",
    codeLink: "https://github.com/tasmim-tahsin/Gaming-website",
    imagePath: "/Bank.png"
  },
  {
    id: 6,
    title: "Course Registration Hub",
    description: "A cozy, online store offering a wide selection of online course, with detailed descriptions and easy add to your list within credit limit.",
    techStack: ["Next.js", "Markdown", "Firebase"],
    liveLink: "https://course-registration-hub-tn.netlify.app/",
    codeLink: "https://github.com/tasmim-tahsin",
    imagePath: "/SummerSale.png"
  },
  {
    id: 7, 
    title: "Baap er Bank",
    description: "A fictional bank website offering secure online banking services, showcasing modern financial solutions with a user-friendly interface",
    techStack: ["Node.js", "Express", "MongoDB", "Stripe API", "React"],
    liveLink: "https://tangerine-lolly-8e5266.netlify.app/",
    codeLink: "https://github.com/tasmim-tahsin/Baap-er-Bank_javaScript",
    imagePath: "/HotGadget.png"
  },
  {
    id: 8,
    title: "Donation Campaign",
    description: "A platform designed to raise awareness and collect donations for charitable causes, with seamless payment integration and user engagement.",
    techStack: ["Next.js", "Tailwind CSS", "Firebase"],
    liveLink: "https://donationcampaign-tahsin.netlify.app/",
    codeLink: "https://github.com/tasmim-tahsin",
    imagePath: "/Gaming.png"
  },
  {
    id: 9,
    title: "Developer Portfolio",
    description: "A portfolio showcasing web development projects, highlighting technical skills, modern design practices, and coding proficiency.",
    techStack: ["React", "TMDB API", "Tailwind CSS"],
    liveLink: "https://tasmim-tahsin.github.io/webdeveloper-portfolio/",
    codeLink: "https://github.com/tasmim-tahsin/webdeveloper-portfolio",
    imagePath: "/Fruit.png"
  },
  {
    id: 10,
    title: "E-commerce",
    description: "A comprehensive e-commerce platform allowing users to browse, add products to cart, and make secure purchases, with a smooth UX.",
    techStack: ["React", "Socket.io", "Node.js"],
    liveLink: "https://summer-sale-website.netlify.app/",
    codeLink: "https://github.com/tasmim-tahsin/summer-sale-website",
    imagePath: "/FlowerShop.png"
  }
];



const three ="/ProjectImage/3.png";
const four ="/ProjectImage/4.png";
const seven ="/ProjectImage/7.png";
  
const Projects = () => {

  const [dataLength, setDataLength] =useState(6);

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className=' flex flex-col justify-center items-center gap-8'>
                <h1 className=' text-3xl md:text-5xl font-bold text-white dark:text-[#151C25]'>Projects</h1>
                <h3 className=' text-xl md:text-2xl'>Things I’ve built so far</h3>
            </div>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 justify-center items-center py-10 '>
              {
                projects.slice(0,dataLength).map( (project) =>
                  <div key={project.id} className=' p-5 '>
                        <div className="card-bordered text-white dark:text-[#151C25] shadow-xl w-96 h-1/5 rounded-badge flex flex-col justify-center items-center">
                              <figure>
                                <Image
                                  src={"/ProjectImage/image"+`${project.id}`+".png"}
                                  
                                  //src={`/public/image${project.id}.png`}
                                  alt="project image"
                                  width={500}
                                  height={300}
                                  placeholder='blur'
                                  
                                  blurDataURL='data:image/png;base64,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'
                                  className=' rounded-t-badge'

                                  
                                   />
                              </figure>
                              <div className="card-body">
                                <h2 className="card-title items-center justify-start">
                                  {project.title}
                                </h2>
                                <p className=' text-gray-500'>{project.description}</p>
                                <div className="card-actions flex flex-col justify-start">
                                  <div className=" font-semibold">Technology used</div>
                                  <div className=' flex justify-start gap-7 pt-2'>
                                    <Image src={three} alt='techstach image' width={30} height={30}/>
                                    <Image src={four} alt='techstach image' width={30} height={30}/>
                                    <Image src={seven} alt='techstach image' width={30} height={30}/>
                                  </div>

                                </div>
                                <div className='flex justify-between pt-3 px-0'>
                                  <a className='btn btn-link text-gray-500 transition duration-500 ease-in-out hover:-translate-y-1' href={project.liveLink} target="_blank">Live link</a>
                                  <a className='btn  btn-link text-gray-500 transition duration-500 ease-in-out hover:-translate-y-1' href={project.codeLink} target="_blank">View code</a>
                                </div>
                              </div>
                        </div>
                  </div>
                )

              }
            </div>
            <div>
              <button
              onClick={()=>setDataLength(projects.length)}
               className={ dataLength===projects.length ? 'hidden' : ' btn dark:bg-sky-400 dark:text-slate-100 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110'}>See More</button>
            </div>
        </div>
    );
};

export default Projects;