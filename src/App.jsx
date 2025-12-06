import ReactLenis from "lenis/react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import ServiceSummary from "./components/ServiceSummary";
import About from "./components/About";
import Works from "./components/Works";
import ContactSummary from "./components/ContactSummary";
import Contact from "./components/Contact";

function App() {
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <Works />
      <ContactSummary />
      <Contact />
    </ReactLenis>
  );
}

export default App;
