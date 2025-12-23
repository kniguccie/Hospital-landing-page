import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Services from './components/services/Services';
import Doctors from './components/doctors/Doctors';
import Partners from './components/partners/Partners';
import Facilities from './components/facilities/Facilities';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Doctors />
      <Partners />
      <Facilities />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
