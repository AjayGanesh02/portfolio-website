import "./portfolio.scss"
import PortfolioList from "./portfolioList";
import { useState, useEffect } from "react";
import { featuredPortfolio, reactPortfolio, angularPortfolio, cPortfolio, pythonPortfolio } from "./portfolioData";

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState(featuredPortfolio);
  const list = [{id: "featured", title: "Featured",}, {id: "react", title: "React",}, {id: "angular", title: "Angular",}, {id: "c", title: "C/C++",}, {id: "python", title: "Python",}]

  useEffect(() => {

    switch(selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "angular":
        setData(angularPortfolio);
        break;
      case "c":
        setData(cPortfolio);
        break;
      case "python":
        setData(pythonPortfolio);
        break;
      default:
        setData(featuredPortfolio);

    }

  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <p>Click on each project to be taken to their respective project pages</p>
        <br/>
        <ul>
            {list.map((item, index)=>(
              <PortfolioList 
              key={index}
              title={item.title} 
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              />
            ))}
        </ul>
        <div className="container">
          {data.map(d => (
            <div className="item" key={d.id}>
              <img src={d.img} alt=""/>
              <h3>{d.title}</h3>
            </div>
            
          ))}
        </div>
    </div>
  )
}
