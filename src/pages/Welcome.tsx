import "./Welcome.css";
import backgroundImage from "../assets/images/img.png"; // Import the image from the assets folder

const WelcomePage = () => {
  return (
    <div
      className="welcome-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <div className="welcome-content">
          <h1>Lorem ipsum dolores amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WelcomePage;
