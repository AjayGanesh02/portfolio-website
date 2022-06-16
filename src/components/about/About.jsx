import FadeInSection from "../animation/FadeInSection"
import "./about.scss"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="left">
          <h1>/about me</h1>
          <div className="wrapper">
            <p>Hey! I'm a rising 3rd year CS student at the University of Michigan College of Engineering.<br/>
              I grew up in New Albany, Ohio, where I've been fortunate enough to soak up tons of previous CS experience.<br/>
              I've had a deep love of all things tech ever since childhood, and I'm excited to share that with you!<br/>
              My most recent job was as a Software Engineer Intern at CaringWire, a startup in the Columbus Area. <br/>
              I'm currently looking for CS/SWE internships and full-time opportunities.<br/>
              <br/>
              You can reach me at: <br/>
              <a href="mailto:ajganesh2002@gmail.com" target="_blank" rel="noopener noreferrer"> - ajganesh2002@gmail.com</a>
              <br/>
              <a href="tel:614-558-5989" target="_blank" rel="noopener noreferrer"> - 614-558-5989</a>
            </p>
          </div>
        </div>
        <div className="right">
          <FadeInSection>
          <h3>Some of my other interests include</h3>
          <ul>
            <li> - Gaming! I play Valorant and Teamfight Tactics </li>
            <li> - Music - <a href="https://open.spotify.com/user/224czyl7a6dnrgduovxrvimxi?si=b20a120379dd48ae" target="_blank" rel="noopener noreferrer">Click here for my Spotify :)</a></li>
            <li> - Fashion </li>
            <li> - Travel - Toronto soon!</li>
          </ul>
          </FadeInSection>
        </div>
      </div>
    </div>
  )
}
