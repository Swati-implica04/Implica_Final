import React from "react";
import "./ImplicaCapitalHome.css"; // Ensure the path to the CSS file is correct
import worldmap from "../../assets/images/world_map_night.jpg";

const ImplicaCapitalHome : React.FC = () => {
  return (
    <div>
        <div className="ImplicaCapitalHome">
            <h1 className="headerclass">
                AboutUs
            </h1>
        </div>
        <div className="ImplicaCapText">
          <span className="fontscene">
          <span className=" startCss">Implica Capital </span>  
          is a venture capital firm aiming to have $100 billion in assets under
          management that invests in everything from startups to global corporations and more.
          We focus on markets where technology, innovation, and capital can be used to
          revolutionize, predict, and drive change, creating sustainable value that boosts economic
          growth across sectors.
          </span>
        </div>

        <div className="imagecontent-left">
          <div className="TextLeftpro">
            <span>
              We focus on markets where technology, innovation, and capital can be used to revolutionize, predict, and drive change, creating sustainable value that boosts economic growth across sectors.
            </span>
          </div>
          <div className="imgcsspro">
            <img src={worldmap} alt="World Map" />
          </div>
      </div>
      {/* Add the purple section here */}
      <div className="purple-section">
        <span className="purple-text">
          We aim to work closely with key stakeholders, advising governments and corporations on how to build strong entrepreneurial ecosystems that help startups succeed. Our goal is to support over 6,000 founders and invest in more than 2,500 companies across 20+ countries by 2027.
        </span>
      </div>

    </div>
  );
};

export default ImplicaCapitalHome ;