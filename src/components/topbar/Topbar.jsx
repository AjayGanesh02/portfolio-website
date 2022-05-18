import "./topbar.scss";
import CodeIcon from '@mui/icons-material/Code';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <CodeIcon className="codelogo" />
          <a href="#intro" className="logo">Ajay Ganesh</a>
          <div className="itemContainer">
            <PhoneIcon className="icon" />
            <a href="tel:+1614-558-5989" target="_blank" rel="noopener noreferrer">+1 614 558 5989</a>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <a href="mailto:ajganesh2002@gmail.com" target="_blank" rel="noopener noreferrer">ajganesh2002@gmail.com</a>
          </div>
          <div className="itemContainer">
            <LinkedInIcon className="icon" />
            <a href="https://www.linkedin.com/in/ajay-ganesh/" target="_blank" rel="noopener noreferrer">@ajay-ganesh</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
