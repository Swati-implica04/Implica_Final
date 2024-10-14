import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import CustomNavbar from './components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported globally
import './App.css'; // Custom styling if needed
import HeroSection from './pages/heroSection';
import WelcomePage from './pages/Welcome';
import BusinessValuationSection from './pages/businessValuation';
import Services from './pages/services';
import Industries from './pages/Industries';
import AnimatedCarousel from './pages/igc';
import Insights from './pages/Insights';
import Footer from './pages/Footer';
import img from "./assets/images/beautiful-city-landscape-with-tall-buildings.jpg"
import CompanyAd from './pages/AboutUs';
import Contact from './pages/Contact';
import CoreFounders from './pages/overview/Cofounder';
import Section from './pages/overview/Mission';
import NewsRoom from './pages/NewsRoom/NewsRoom';
import GloablAllience from './pages/GlobalAlliance/GlobalAllience';
import IndustriesSection from './pages/industries/industriesSection';
import IndustryDetail from './pages/industries/industryDetail';
import CorporateSocial from './pages/CorporateSocial/CorporateSocial';
import CorporateSustain from './pages/CorporateSustain/CorporateSustain';
import ImplicaVentures from './pages/IGC/ImplicaVentures';
import ImplicaCapital from './pages/IGC/ImplicaCapital';
import DiversitySocial from './pages/DiversityEqual/DiversitySocial';
import Digital from './pages/IGC/ImplicaAI';
import ImplicaCapitalHome from './pages/ImplicaCapitalHome/ImplicaCapitalAbout';
import CommonBlog from './pages/CommonBlog/CommonBlog';
import video2 from "./assets/images/video/12324291-uhd_3840_2160_60fps.mp4";
import video1 from "./assets/images/video/5396818-uhd_3840_2160_30fps.mp4"
import img1 from "./assets/images/video/pexels-jokassis-5534595.jpg"
import HorizontalCarousel from './pages/image';
import IndustriesPage from './pages/Consulting/implicaConsulting';
import AppContainer from "./components/mobile-navbar"
import Component from './pages/caro';

interface MediaType {
  src: string;
  alt: string;
  caption: string;
  type: "image" | "video"; // Ensure type is a union of string literals
}

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation(); // Get the current location
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Conditionally render the navbar */}
      {location.pathname !== '/implica-ai' && (isMobile ? <AppContainer /> : <CustomNavbar />)}
      {children}
    </>
  );
};

export { MainLayout };
const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const media: MediaType[] = [
    {
      src:video1, // Image source (for the image)
      alt: "Slide 1",
      caption: "From Insight to Impact: Leading the Way in Tech and Strategy Consulting.",
      type: "video", // Specify the type as 'image'
    },
    {
      src: img1, // Video source (for the video)
      alt: "Slide 2",
      caption: "Trust in Every Step, Growth in Every Direction.",
      type: "image", // Specify the type as 'video'
    },
    {
      src: video2,
      alt: "Slide 3",
      caption: "Global Strategies, Tailored Solutions.",
      type: "video", // Specify the type as 'image'
    },
    {
      src: img, // Video source (for the video)
      alt: "Slide 2",
      caption: "Implica: The movement for those ready to create the next big wave.",
      type: "image", // Specify the type as 'video'
    },
  ];
  return (
    <Router>
      {/* <CustomNavbar /> */}
      <MainLayout>
      {/* {location.pathname !== '/capital' && <CustomNavbar />} */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <section id="welcome">
              {isMobile ?  <Component/>: <HorizontalCarousel media={media} />}
                {/* <WelcomePage /> */}
              </section>
              <section id="hero">
                <HeroSection />
              </section>
              <section id="business-valuation">
                <BusinessValuationSection />
              </section>
              <section id="services">
                <Services />
              </section>
              <section id="industries">
                <Industries />
              </section>
              <section id="igc">
                <AnimatedCarousel />
              </section>
              <section id="insights">
                <Insights />
              </section>
              <section id="footer">
                <Footer />
              </section>
            </>
          } />
       
          {/* Add other routes here */}
          <Route path="/overview" element={<CompanyAd />} />
          <Route path ="/contact" element={<Contact/>} />
          <Route path="/leadership" element={<CoreFounders/>} />
          <Route path="/mission" element={<Section />} />
          <Route path = "/News" element = {<NewsRoom/>} />
          <Route path = "/alliances" element = {<GloablAllience/>} />
          <Route path ="/industry" element={<IndustriesSection/>} />
          <Route path="/industry-detail" element={<IndustryDetail/>} />
          <Route path="/corporateSocial" element = {<CorporateSocial/>} />
          <Route path="/sustainability" element= {<CorporateSustain />} />
          <Route path='/ventures' element={<ImplicaVentures/>}/>
          <Route path='/diversity' element={<DiversitySocial />} />
          <Route path='/implica-ai' element={<ImplicaCapital/>}/>
          <Route path="/implica-digital" element={<Digital />} />
          <Route path ="/capital" element = {<ImplicaCapitalHome />} />
          <Route path ="/commonblog" element = {<CommonBlog />} />
          <Route path="/implica-consulting" element={<IndustriesPage/>}/>
        </Routes>
      </div>
      </MainLayout>
    </Router>
  );
};

export default App;