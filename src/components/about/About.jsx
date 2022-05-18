import "./about.scss"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="left">
          <h1>About Me</h1>
          <div className="wrapper">
            <p>Hey! I'm Ajay Ganesh, a rising 3rd year CS student at the University of Michigan College of Engineering.<br/>
              I grew up in New Albany, Ohio, where I've been fortunate enough to find tons of previous CS experience.<br/>
              My most recent job was as a Software Engineer Intern at CaringWire, a startup in the Columbus Area. <br/>
              I've had a deep love of all things tech ever since childhood, and I'm excited to share that with you!<br/>
              I'm currently looking for CS internships and full-time opportunities.<br/>
              You can reach me at: <br/>
              <br/> 
              <a href="mailto:ajganesh2002@gmail.com"> - ajganesh2002@gmail.com</a>
              <br/>  
              <br/>
              <a href="tel:614-558-5989"> - 614-558-5989</a>
            </p>
          </div>
        </div>
        <div className="right">
          <h3>Some of my other interests include</h3>
          <ul>
            <li> - Gaming! I play Valorant and Teamfight Tactics </li>
            <li> - Music - <a href="https://open.spotify.com/user/224czyl7a6dnrgduovxrvimxi?si=b20a120379dd48ae">Click here for my Spotify :)</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
