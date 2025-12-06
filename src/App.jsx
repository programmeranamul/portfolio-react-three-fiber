import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import ServiceSummary from "./components/ServiceSummary";

function App() {
  return (
    <main className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
    </main>
  );
}

export default App;
