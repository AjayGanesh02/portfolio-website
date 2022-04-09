import "./intro.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current,{
      strings: ["Full Stack Developer", "Software Engineer", "Web Developer", "Mobile Developer"],
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
          <h2>Hi There, I'm</h2>
          <h1>Ajay Ganesh</h1>
          <h3>I'm a <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="icon" />
        </a>
      </div>
    </div>
  )
}
