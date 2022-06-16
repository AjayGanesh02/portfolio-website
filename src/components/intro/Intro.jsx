import "./intro.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import FadeInSection from "../animation/FadeInSection";


export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      strings: ["UMich CS Student", "Full Stack Developer", "Software Engineer", "Web Developer", "Mobile Developer"],
      backdelay: 1500,
      showCursor: true,
      cursorChar: "|",
    });
  }, [])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/ajay-ganesh.jpg" alt="Ajay Ganesh" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <FadeInSection>
            <h2>Hi there, I'm</h2>
            <h1>Ajay Ganesh</h1>
            <h3>I'm a <span ref={textRef}></span></h3>
            <h3><a href="https://drive.google.com/file/d/1JzcLmATJk5ZUrmwT2fgBv2oNbY5_uhf0/view?usp=sharing" target="_blank" rel="noopener noreferrer">Click here for my resume</a></h3>
          </FadeInSection>
        </div>
        <a className="downicon" href="#portfolio">
          <KeyboardArrowDownIcon className="icon" />
        </a>
      </div>
    </div>
  )
}
