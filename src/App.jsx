import './App.css'
import { useRef } from 'react';
import ScrollToTop from "react-scroll-to-top";

import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Education from './Component/Education/Education'
import WorkExperience from './Component/WorkExperience/WorkExperience';
import Skill from './Component/Skill/Skill';
import Contract from './Component/Contract/Contract';
import Footer from './Component/Footer/Footer';

function App() {
  const edu = useRef(null);
  const work = useRef(null);
  const skill = useRef(null);
  const contract = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  };

  return (
    <>
      <ScrollToTop smooth color='gray'/>
      <Navbar
        goToEdu={() => scrollToSection(edu)}
        goToWork={() => scrollToSection(work)}
        goToSkill={() => scrollToSection(skill)}
        goToContract={() => scrollToSection(contract)}
      />
      <div><Hero/></div>
      <div ref={edu}><Education/></div> 
      <div ref={work}><WorkExperience/></div>
      <div ref={skill}><Skill/></div>
      <div ref={contract}><Contract/></div>
      <div><Footer/></div>
    </>
  )
}

export default App
