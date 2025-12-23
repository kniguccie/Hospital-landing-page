import './testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonials-container'>
      <h3>What people say</h3>
      <div className="testimonials-wrapper">
        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src="https://i.pravatar.cc/150" alt="avatar" />
          </div>
          <div className="testimonial-details">
            <h6>Andrea Andy, 35</h6>
            <p>
              "I had a great experience at this clinic.The doctors were knowledgeable and caring"
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src="https://i.pravatar.cc/400" alt="avatar" />
          </div>
          <div className="testimonial-details">
            <h6>Ricky Reyonld, 27</h6>
            <p>
              "The clinic provided a comfortable and welcoming atmosphere."
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src="https://i.pravatar.cc/130" alt="avatar" />
          </div>
          <div className="testimonial-details">
            <h6>Grelish David, 30</h6>
            <p>
              "The treatment I received at this clinic were effective."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Testimonials;