import "./banner.css"
import ellipse from "../../assets/images/ellipse.png";
import doctor from "../../assets/images/banner-doctor.png";

const Banner = () => {
  return (
    <div className="banner-container">

      <div className="banner-content">
          <div className="banner-heading">
              <h2>Every good thing starts with a good health</h2>
          </div>

          <div className="banner subheading">
              <p>We are here to serve people with patient centered-care to deliver outstanding healthcare for better lives</p>
          </div>

          <div className="banner-button">
              <button className="banner-appointment-button">Request appointment</button>
              <button className="banner-learn-button">Learn More</button>
          </div>
      </div>

      <div className="banner-graphics">
          <img src={ellipse} alt="ellipse" />
          <img src={doctor} alt="doctor" />
      </div>
    </div>
  )
}

export default Banner