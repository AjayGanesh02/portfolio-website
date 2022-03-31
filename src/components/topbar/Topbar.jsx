import "./topbar.scss";
import CodeIcon from '@mui/icons-material/Code';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <CodeIcon className="codelogo" />
          <a href="#intro" className="logo">Ajay Ganesh</a>
          <div className="itemContainer">
            <PhoneIcon className="icon" />
            <span>+1 614-558-5989</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>ajganesh2002@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
