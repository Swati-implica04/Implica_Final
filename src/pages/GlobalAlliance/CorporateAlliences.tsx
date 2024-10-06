import React from 'react';
import './CorporateAllience.css';
import FormDesign from '../FormDesign';
import Footer from '../Footer';

// Import your SVG images
import Logo1 from '../../assets/images/corporateAlliance/Erasmus+_Logo.svg'
import Logo2 from '../../assets/images/corporateAlliance/SLA-Slack-from-Salesforce-logo.png'
import logo3 from '../../assets/images/corporateAlliance/adobe-2.svg'
import logo4 from '../../assets/images/corporateAlliance/alma-mater-studiorum-universita-di-bologna-logo-vector.svg'
import logo5 from '../../assets/images/corporateAlliance/aws-svgrepo-com.svg'
import logo6 from '../../assets/images/corporateAlliance/broadcom-ltd-logo.svg'
import logo7 from '../../assets/images/corporateAlliance/cisco-svgrepo-com.svg'
import logo8 from '../../assets/images/corporateAlliance/fedex-ar21.svg'
import logo9 from '../../assets/images/corporateAlliance/google-color-svgrepo-com.svg'
import logo10 from '../../assets/images/corporateAlliance/hewlett-packard-enterprise-logo.svg'
import logo11 from '../../assets/images/corporateAlliance/ibm-logo-svgrepo-com.svg'
import logo12 from '../../assets/images/corporateAlliance/intel-logo.svg'
import logo13 from '../../assets/images/corporateAlliance/mastercard.svg'
import logo14 from '../../assets/images/corporateAlliance/microsoft-svgrepo-com.svg'
import logo15 from '../../assets/images/corporateAlliance/qualcomm-logo.svg'
import logo16 from '../../assets/images/corporateAlliance/redhat-svgrepo-com.svg'
import logo17 from '../../assets/images/corporateAlliance/republic-of-estonia-e-residency-vector-logo (1).svg'
import logo18 from '../../assets/images/corporateAlliance/salesforce-2-logo-svgrepo-com.svg'
import logo19 from '../../assets/images/corporateAlliance/sap-3.svg'
import Logo20 from '../../assets/images/corporateAlliance/tencent-cloud-seeklogo.svg';
import logo21 from '../../assets/images/corporateAlliance/visa-svgrepo-com (1).svg';
import logo22 from '../../assets/images/corporateAlliance/vmware-1.svg';
import logo23 from '../../assets/images/corporateAlliance/Logo-vodafone-transparent-background-PNG.png';
import logo24 from '../../assets/images/corporateAlliance/wise-1.svg';
import col from "../../assets/images/corporateAlliance/ISBR Law Logo.jpg"
import logo from "../../assets/images/corporateAlliance//ISBR_College.jpg"

const corporateLogos = [Logo1, Logo2, logo3,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14,logo15,logo16,logo17,logo18,logo19,Logo20,logo21,logo22,logo23,logo24];
const academicLogos = [logo,col,logo4,];

const CorporateAllience: React.FC = () => {
  return (
    <div>
    <div className="alliances-section">
      {/* Corporate Alliances */}
      <div className="corporate-alliances">
        <h2>Corporate Alliances</h2>
        <div className="alliance-logos corporate">
          {corporateLogos.map((logo, index) => (
            <div className="log-box" key={index}>
              <img src={logo} alt={`Corporate logo ${index + 1}`} />
            </div>
          ))}
        </div>
        {/* <div className="alliance-logos corporate">
          {corporateLogos.slice(6).map((logo, index) => (
            <div className="logo-box" key={index}>
              <img src={logo} alt={`Corporate logo ${index + 7}`} />
            </div>
          ))}
        </div> */}
      </div>

      {/* Academic Alliances */}
      <div className="academic-alliances">
        <h2>Academic Alliances</h2>
        <div className="alliance-logos academic">
          {academicLogos.map((logo, index) => (
            <div className="log-box" key={index}>
              <img src={logo} alt={`Academic logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      </div>

      <FormDesign title='Contact Us for Partnership Opportunities'/>
      <Footer />
    </div>

  );
};

export default CorporateAllience;
