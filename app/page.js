import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <div className="max-w-full mx-auto flex flex-col gap-40">
      
      <Header/>
      <About/>
      <TechStack/>
      <Projects/>
      <Contact/>
     
    </div>
  );
}
