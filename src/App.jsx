import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Offer from "./components/Offer";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Offer />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}